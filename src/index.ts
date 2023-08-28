// Provides dev-time type structures for  `danger` - doesn't affect runtime.
import { DangerDSLType } from "../node_modules/danger/distribution/dsl/DangerDSL"
declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

import { ESLint } from "eslint"

interface Options {
  baseConfig?: any
  extensions?: string[]
}

/**
 * Eslint your code with Danger
 */
export default async function eslint(config: any, extensions: string[] = [".js"]) {
  const allFiles = danger.git.created_files.concat(danger.git.modified_files)
  if (typeof config === "string") {
    config = JSON.parse(config)
  }
  const options: Options = { baseConfig: config }
  if (extensions) {
    options.extensions = extensions
  }
  const cli = new ESLint(options)

  const filesToLint = []
  for (const file of allFiles) {
    if (await cli.isPathIgnored(file) || !options.extensions.some(ext => file.endsWith(ext))) {
      continue
    }
    filesToLint.push(file)
  }

  return Promise.all(filesToLint.map(f => lintFile(cli, config, f)))
}

async function lintFile(linter, config, path) {
  const contents = await danger.gitlab.utils.fileContents(path)
  const results = await linter.lintText(contents, { filePath: path })

  if (results.length !== 0) {
    results[0].messages.map(msg => {
      if (msg.fatal) {
        fail(`Fatal error linting ${path} with eslint.`)
        return
      }

      const fn = { 1: warn, 2: fail }[msg.severity]

      fn(`${path} line ${msg.line} – ${msg.message} (${msg.ruleId})`, path, msg.line)
    })
  }
}
