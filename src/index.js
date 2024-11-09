require('dotenv/config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const limiter = rateLimit({
    windowMs: 1000, // 1 second
    max: 1, // limit each IP to 1 request per windowMs
    message: {
        error: 'Too many requests, please try again in 1 second',
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const corsOptions = {
    origin: [
        'mohsinriaz.ca/wordle-app',
        'http://mohsinriaz.ca/wordle-app',
        'https://mohsinriaz.ca/wordle-app',
        'mohsinriaz.ca',
        'http://mohsinriaz.ca',
        'https://mohsinriaz.ca',
        !!process.env.NODE_ENV ? process.env.FRONTEND_URL : undefined,
    ],
};

// Apply the rate limiter to all routes
app.use(limiter);

// Apply CORS middleware
app.use(cors(corsOptions));

// Logger
app.use(morgan('dev'));
app.use(morgan(':method :url :status :response-time ms'));

// Routes
app.use('/api', require('./routes/wordsRouter'));

// Port definition
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = { app, server };
