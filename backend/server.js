import cors from 'cors'
import express from 'express';
import path from 'path';

import { getSharedFiles } from './app.js';

const FRONTEND_DIR = "dist"
const PORT = 4500;

const app = express();

app.use(cors({ origin: "http://localhost:4000" }));

app.use(express.static(path.resolve(FRONTEND_DIR)));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(FRONTEND_DIR, 'index.html'));
});

app.get('/api/files', (req, res) => {
  res.json(getSharedFiles());
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
