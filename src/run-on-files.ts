import * as core from '@actions/core'
import {execSync} from 'child_process'

export function runOnFiles(files: string[]): number {
  const insights = core.getInput('phpinsights_path', {required: true})
  const args = ['analyse', '--format=github-action', '--no-interaction']

  const minQuality = core.getInput('min_quality')
  args.push(`--min-quality=${minQuality}`)

  const minComplexity = core.getInput('min_complexity')
  args.push(`--min-complexity=${minComplexity}`)

  const minArchitecture = core.getInput('min_architecture')
  args.push(`--min-architecture=${minArchitecture}`)

  const minStyle = core.getInput('min_style')
  args.push(`--min-style=${minStyle}`)

  try {
    execSync(`${insights} ${args.join(' ')} ${files.join(' ')}`, {
      stdio: 'inherit',
      timeout: 30000
    })
    return 0
  } catch (err: any) {
    core.debug(err)
    core.setFailed(err)
    return 1
  }
}
