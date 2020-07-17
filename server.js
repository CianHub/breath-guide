const express = require('express');

const app = express();

app.use(express.static('./dist/breath'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/breath/' }),
);

app.listen(process.env.PORT || 8080);