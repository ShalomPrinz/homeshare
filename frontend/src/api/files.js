import { get, post } from "./http"

function getSharedFiles() {
    return get("files")
}

function uploadFiles(files) {
    const formData = new FormData();
    files.forEach((file) => {
        formData.append('files', file, encodeURIComponent(file.name));
    });

    return post("upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
    })
}

export { getSharedFiles, uploadFiles }
