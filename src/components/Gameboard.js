import React from 'react';
const displayArray = []

const Gameboard = () => {
    const [word, setWord] = React.useState('')
    const [gameId, setGameId] = React.useState('')
    React.useEffect(() => {
        wordGetter(setWord, setGameId)
    },[])
    console.log(word)
    console.log(gameId)
    return (
        <>
            <button onClick={() => letterGuess('a', gameId)}>press to generate word</button>
            <p>{word}</p>
        </>
    )
}

const wordGetter = (setWord, setGameId) => {
    fetch('http://localhost:8000/api/getWord')
    .then(res => {
        return  res.json()})
    .then(res => {
    console.log(res)
    const {length, id} = res
    var i;
    for(i = 0; i < length; i += 1) {
        displayArray.push('_ ')
    }
    setWord(displayArray)
    setGameId(id)
    })
}  

const letterGuess = (letter, gameId) => {
    console.log(letter, gameId)
    fetch(`http://localhost:8000/api/guessletter/${letter}/${gameId}`)
    .then(res => {
        return res.json()})
    .then(res => {
        console.log(res)
    })
}



export default Gameboard