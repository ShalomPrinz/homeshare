import fs from "fs"
import path from "path"

function getFolderFiles(folderPath) {
    const files = fs.readdirSync(folderPath, { withFileTypes: true });
    return files
        .filter(file => file.isFile())
        .map(file => ({
            name: path.parse(file.name).name,
            type: getFileType(path.extname(file.name).toLowerCase().slice(1))
        }));
}

const fileTypeMapping = {
    'txt': 'טקסט',
    'docx': 'וורד',
    'excel': 'אקסל',
};

function getFileType(type) {
    return fileTypeMapping[type.toLowerCase()] || 'לא ידוע';
}

export { getFolderFiles }
