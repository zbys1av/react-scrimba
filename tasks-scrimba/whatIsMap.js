/*
Challenge 1:
*/

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]

const squares = nums.map(function(x) {
    return x * x;
})

console.log(squares)



/*
Challenge 2:
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]


const capitalized = names.map((y) => {
    return y[0].toUpperCase() + y.slice(1)
})

console.log(capitalized)



/*
Challenge 3:
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

const paragraphs = pokemon.map(z => `<p>${z}</p>`)
// OR
// const paragraphs = pokemon.map(z => "<p>" + z + "</p>")

console.log(paragraphs)