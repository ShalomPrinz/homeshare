import fs from "fs";
import path from "path";

import { getFolderFiles } from "./util.js"

const SHARED_DIR = "shared"

function getSharedFiles() {
    return getFolderFiles(SHARED_DIR)
}

function uploadFiles(files) {
    if (!fs.existsSync(SHARED_DIR)) {
        fs.mkdirSync(SHARED_DIR, { recursive: true });
    }
    
    files.forEach(file => {
        const filePath = path.join(SHARED_DIR, file.filename);
        fs.copyFileSync(file.path, filePath);
    });
}

export { getSharedFiles, uploadFiles }