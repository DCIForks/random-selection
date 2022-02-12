const questions = require('./questions.json')


// Fisher-Yates-Knuth shuffle algorithm
function shuffle(array) {
  var current = array.length
    , swap
    , random

  while (current) {
    random = Math.floor(Math.random() * current--)
    swap = array[current];
    array[current] = array[random];
    array[random] = swap;
  }

  return array
}


// Shuffle the questions before we start, so that the first set of
// questions will be different each time.
let shuffled = shuffle([...questions])


const selectNRandomQuestions = (n) => {
  // Choose the first n shuffled questions...
  const selected = shuffled.splice(0, n)
  // ... put them at the end of the list of questions
  shuffled = shuffled.concat(selected)

  // Shuffle the selected questions so that they will not be in the
  // same order as they are now at the end of the list. This means
  // that the next time these questions are selected, they will not
  // be in the same order.
  return shuffle(selected)
}


// DO NOT ALTER // DO NOT ALTER THE FOLLOWING LINE // DO NOT ALTER //
module.exports = { selectNRandomQuestions }