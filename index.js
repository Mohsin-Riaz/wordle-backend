require('dotenv/config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./src/routes/wordsRouter');

app.use('/api', require('./src/routes/wordsRouter'));
app.use(morgan('dev'));
app.use(morgan(':method :url :status :response-time ms'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
