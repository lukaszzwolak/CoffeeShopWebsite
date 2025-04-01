import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import jsonServer from 'json-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

app.use('/api', jsonServer.defaults(), jsonServer.router(path.join(__dirname, 'src/db/app.json')));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Serwer działa na porcie ${PORT}`);
});


// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import jsonServer from 'json-server';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serwowanie folderu dist jako frontend
// app.use(express.static(path.join(__dirname, 'dist')));

// // API: /api/* -> json-server
// const apiRouter = jsonServer.router(path.join(__dirname, 'dist/db/app.json'));
// app.use('/api', jsonServer.defaults(), apiRouter);

// // Fallback na index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });
