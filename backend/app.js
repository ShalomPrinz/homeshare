import { getFolderFiles } from "./util.js"

const SHARED_DIR = "shared"

function getSharedFiles() {
    return getFolderFiles(SHARED_DIR)
}

export { getSharedFiles }