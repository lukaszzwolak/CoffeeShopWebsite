import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import jsonServer from 'json-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const apiRouter = jsonServer.router(path.join(__dirname, 'src/db/app.json'));
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, apiRouter);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Serwer działa na porcie ${PORT}`);
});
