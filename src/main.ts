import * as core from '@actions/core'
import {getChangedFiles} from './get-changed-file'
import {runOnFiles} from './run-on-files'

async function run(): Promise<void> {
  try {
    const files = await getChangedFiles()
    core.info(JSON.stringify(files, null, 2))
    if (!files.files.length) {
      return
    }

    runOnFiles(files.files)
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
