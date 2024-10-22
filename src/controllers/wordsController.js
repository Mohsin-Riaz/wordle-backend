const { apiGetWord, apiSearchForWord } = require('../api/api_calls');

const getWord = async (req, res) => {
    const word = await apiGetWord();
    return res.send(word).status(200);
};

const checkWord = async (req, res) => {
    const { word } = req.query;
    if (!word)
        return res.status(400).json({ error: 'Word parameter is required' });

    const response = await apiSearchForWord(word);
    console.log(response);

    if (!response || response == 404)
        return res.status(404).json({ error: 'Word not found' });

    return res.send(response).status(200);
};

module.exports = { getWord, checkWord };
