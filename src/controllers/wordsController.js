const { apiGetWord, apiSearchForWord } = require('../api/api_calls');

const getWord = async (req, res) => {
    var word = '';
    var wordTrys = 0;
    while (word.length !== 6) {
        response = await apiGetWord();
        word = response.word;
        word.replace(/[^a-zA-Z]/g, '');
        wordTrys++;
        if (wordTrys >= 5) return res.status(400);
    }
    return res.send(word).status(200);
};

const checkWord = async (req, res) => {
    const { word } = req.query;
    if (!word)
        return res.status(400).json({ error: 'Word parameter is required' });

    const response = await apiSearchForWord(word);

    if (!response || response == 404)
        return res.status(404).json({ error: 'Word not found' });

    return res.send(response).status(200);
};

module.exports = { getWord, checkWord };
