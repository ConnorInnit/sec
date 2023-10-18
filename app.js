const express = require('express')


const app = express();

const safeRouter = express.Router();

const unsafeRouter = express.Router();



// app.use(express.static(path.join(__dirname, './react')))

app.use(safeRouter);
app.use(unsafeRouter);

app.listen(8000,console.log('server is on'))