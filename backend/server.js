import cors from 'cors'
import multer from 'multer';
import express from 'express';
import path from 'path';

import { getSharedFiles, uploadFiles } from './app.js';

const FRONTEND_DIR = "dist"
const PORT = 4500;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'shared/');
  },
  filename: function (req, file, cb) {
    cb(null, decodeURIComponent(file.originalname));
  }
});

const upload = multer({ storage });

const app = express();

app.use(cors({ origin: "http://localhost:4000" }));

app.use(express.static(path.resolve(FRONTEND_DIR)));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(FRONTEND_DIR, 'index.html'));
});

app.get('/api/files', (req, res) => {
  res.json(getSharedFiles());
})

app.post('/api/upload', upload.array("files"), (req, res) => {
  uploadFiles(req.files)
  res.status(200).send()
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
