# Wordle Backend

A backend service for the Wordle game, powered by WordsAPI for word validation and generation.

## Description

This backend service provides the API endpoints necessary to run a Wordle game. It uses WordsAPI to:

-   Generate valid 6-letter words for the game
-   Validate player word submissions
-   Check if submitted words are valid English words

## Prerequisites

-   Node.js (v14 or higher)
-   NPM (v6 or higher)
-   WordsAPI key (get one from [RapidAPI](https://rapidapi.com/dpventures/api/wordsapi))

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Mohsin-Riaz/wordle-backend.git
cd wordle-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your WordsAPI credentials:

```env
WORDS_API_KEY=your_api_key_here
WORDS_API_HOST=https://wordsapiv1.p.rapidapi.com/words
PORT=3000
```

## Running the Application

### Development Mode

To run the application in development mode with hot reloading:

```bash
npm run dev
```

### Production Mode

To run the application in production mode:

```bash
npm start
```

The server will start on the port specified in your `.env` file (defaults to 3000).

## Testing

To run the test suite:

```bash
npm test
```

For watching tests during development:

```bash
npm test -- --watch
```

## Project Structure

```
wordle-backend/
├── .gitignore                     # Git ignore configuration
├── README.md                      # Project documentation
├── docker-compose.yaml            # Docker compose configuration
├── index.js                       # Main application entry point
├── jest.config.js                 # Jest testing configuration
├── package.json                   # Project dependencies and scripts
├── src/                          # Source code directory
│   ├── api/                      # API integration directory
│   │   └── api_calls.js         # WordsAPI integration module
│   ├── controllers/              # Controllers directory
│   │   └── wordsController.js   # Words game logic controller
│   └── routes/                  # Routes directory
│       └── wordsRouter.js       # Words API endpoints router
└── tests/                       # Tests directory
    └── unit/                    # Unit tests directory
        └── wordsRouter.test.js  # Router tests
```

## API Endpoints

## Dependencies

-   express: Web framework for Node.js
-   axios: HTTP client for API requests
-   dotenv: Environment variables management
-   morgan: HTTP request logger
-   jest: Testing framework
-   supertest: HTTP assertions for testing
-   serverless: Serverless framework support
-   axios-mock-adapter: Mocking HTTP requests in tests

## License

This project is licensed under the ISC License.
