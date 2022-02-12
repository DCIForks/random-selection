# Random Selection

Imagine that you are working on a quiz game. You want the game to be different every time, so you want to choose a random selection of 10 questions from the hundreds of questions that you have available.

You'll find 104 questions (taken from [quizbreaker.com](https://www.quizbreaker.com/trivia-questions#general-trivia-questions)) in the file `questions.json`.

Your task is to write a function called `selectNRandomQuestions` that will accept an integer such as 10, and will return that number of questions, chosen at random in a random order.

When you have completed the task, [commit your work](https://github.com/DCIForks/E07/wiki/Good-git-commit-messages:-using-VS-Code-as-your-git-editor), using a well-written commit message, and push your changes to GitHub.

> Run `git add . && git commit` and then `git push origin main`.

## TIP
The standard algorithm for shuffling items is the Fisher-Yates or Knuth Shuffle. You can see it explained here:

https://bost.ocks.org/mike/shuffle/

## BONUS TASK
Can you write your function so that it can be called several times without repeating any of the questions until all the questions have been used at least once?

---
## TESTING
You might like to test whether your function is working correctly before you push your changes to GitHub.

This repository includes a folder named `testing` and a `package.json` file. To run the tests in the `testing` folder you can:

1. Run `npm install`. This will add a folder called `node_modules` containing a test module called [jest](https://jestjs.io/), and all its dependencies.
2. Run `npm test`.
3. Check the output in the Terminal pane.