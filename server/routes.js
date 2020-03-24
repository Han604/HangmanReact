const router = require('express').Router();
const { words } = require('./data')


router.get('/api/getWord', (req, res) => {
    const randomNumber = Math.floor(Math.random()*words.length)
    const foundWord = words.find(word => word.id === randomNumber);
    console.log(foundWord, '......')
    return res.json({
        id: foundWord.id,
        length: foundWord.length
    })
})

router.get('/api/guessletter/:letter/:id'), (req, res) => {
    const letter = req.params.letter
    const guessId = req.params.id
    const foundWord = words[guessId]
    const splitWord = foundWord.word.split('')
    const retArray = splitWord.map(char => char === letter)
    console.log(retArray)
    return res.json({
        letter: letter,
        guessId: guessId,
        splitWord: splitWord,
        retArray: retArray
    })
}

module.exports = router;