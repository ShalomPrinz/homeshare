import express from 'express';
import path from 'path';

const frontend_dir = "dist"
const PORT = 6000;

const app = express();

app.use(express.static(path.resolve(frontend_dir)));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(frontend_dir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
