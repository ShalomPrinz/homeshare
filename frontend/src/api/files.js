import { get } from "./http"

function getSharedFiles() {
    return get("files")
}

export { getSharedFiles }
