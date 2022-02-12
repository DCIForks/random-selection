# Random Selection

Imagine that you are working on a quiz game. You want the game to be different every time, so you want to choose a random selection of 10 questions from the hundreds of questions that you have available.

You'll find 101 questions (taken from [quizbreaker.com](https://www.quizbreaker.com/trivia-questions#general-trivia-questions)) in the file `questions.json`.

Your task is to write a function called `selectNRandomQuestions` that will accept an integer such as 10, and will return that number of questions, chosen at random in a random order.

TIP: The standard algorithm for shuffling items is the Fisher-Yates or Knuth Shuffle. You can see it explained here:

https://bost.ocks.org/mike/shuffle/