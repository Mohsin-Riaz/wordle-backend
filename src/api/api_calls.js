const axios = require('axios');

const apiKey = process.env.WORDS_API_KEY;
const baseUrl = process.env.WORDS_API_HOST;
const api = axios.create({
    baseURL: baseUrl,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': apiKey,
    },
});

async function apiGetWord() {
    try {
        const response = await api.get('', {
            params: {
                letters: '6',
                random: 'true',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message, error.status);
        return error.status;
    }
}

async function apiSearchForWord(word) {
    try {
        const response = await api.get(`/${word}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message, error.status);
        return error.status; // Re-throw the error if you want calling code to handle it
    }
}

module.exports = { apiGetWord, apiSearchForWord };
