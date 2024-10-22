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

### Get Random Word

Returns a random 6-letter word for the Wordle game.

```http
GET /api/getword
```

#### Response

```javascript
{
    "word": "stream"
}
```

| Status Code | Description |
| ----------- | ----------- |
| 200         | Success     |

---

### Check Word Validity

Verifies if a submitted word exists in the English dictionary.

```http
GET /api/checkword?word=stream
```

#### Query Parameters

| Parameter | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| word      | string | The word to validate (required) |

#### Success Response

```javascript
{
    "word": "stream",
}
```

Status Code: 200

#### Error Responses

**Missing Word Parameter**

```javascript
{
    "error": "Word parameter is required"
}
```

Status Code: 400

**Word Not Found**

```javascript
{
    "error": "Word not found"
}
```

Status Code: 404

| Status Code | Description                             |
| ----------- | --------------------------------------- |
| 200         | Success                                 |
| 400         | Bad Request - Word parameter is missing |
| 404         | Not Found - Word not found              |

### Example Usage

```javascript
// Get a random word
curl http://localhost:3000/api/getword

// Check if a word is valid
curl http://localhost:3000/api/checkword?word=stream
```

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
