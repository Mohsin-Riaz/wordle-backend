const { apiGetWord, apiSearchForWord } = require('../api/api_calls');

const getWord = async (req, res) => {
    let word = '';
    for (let attempt = 0; attempt < 5; attempt++) {
        const response = await apiGetWord();
        word = response.word.replace(/[^a-zA-Z]/g, '');
        if (word.length === 6) {
            return res.status(200).json({ word: word.toUpperCase() });
        }
    }
    return res.status(400).json({ error: 'Failed to get a valid word' });
};

const checkWord = async (req, res) => {
    const { word } = req.query;
    if (!word)
        return res.status(400).json({ error: 'Word parameter is required' });

    const response = await apiSearchForWord(word); //makes call to outside api

    if (!response || response == 404)
        return res.status(404).json({ error: 'Word not found' });

    return res.send(response).status(200);
};

module.exports = { getWord, checkWord };
