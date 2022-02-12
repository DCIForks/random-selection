// DO NOT edit this file
const { selectNRandomQuestions } = require("../index");


describe('expectedNumberOfQuestions', () => {
  test.each`
  input| expected 
  ${5} | ${5}
  ${10} | ${10}
  ${20} | ${20}
  ${50} | ${50}
  `('check if there are $expected questions when $input questions are required', ({input, expected}) => {
    const questions = selectNRandomQuestions(input)
    const count = questions.length
    expect(count).toBe(expected);
  });
});


describe('uniqueSets', () => {
    test.each`
    input| expected 
    ${5} | ${20}
    ${10} | ${10}
    ${20} | ${5}
    ${50} | ${2}
    `('check if there are $expected unique sets of $input questions', ({input, expected}) => {
      expect(countUniqueSets(input)).toBeGreaterThanOrEqual(expected);
    });
});


function countUniqueSets(n) {
  const first = selectNRandomQuestions(n)[0]?.question
  let count = 0

  while (++count) {
    const questions = selectNRandomQuestions(n)
    if (!questions.length) {
      break
    }

    const unique = questions.every( question => {
      return question.question !== first
    })

    if (!unique) {
      break
    }
  }

  return count
}
