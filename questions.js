const collectAnswers = require("./lib/collectAnswers.js");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? ",
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", (answer) =>
  console.log(`Question answered: ${answer}`)
);

answerEvents.on("complete", (answers) => {
  console.log("Thank your for your answers. ");
  console.log(answers);
  process.exit();
});
