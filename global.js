const path = require("path");

// console.log(`The file name is ${path.basename(__filename)}`);

// console.log(process.pid);
// console.log(process.versions.node);
// console.log(process.argv);

const [, firstName, lasName] = process.argv;

// console.log(`Your name is ${firstName} ${lasName}`);

const grab = (flag) => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};
const greeting = grab("--greeting");
const user = grab("--user");

// console.log(`${greeting} ${user}`);

process.stdout.write("Hello ");
process.stdout.write("World \n");

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preffered programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`${questions[i]}`);
  process.stdout.write(` > `);
};

// ask();

const answers = [];
process.stdin.on("data", (data) => {
  answers.push(`${data.toString().trim()}`);

  if (answers.length < questions.length) {
    // ask(answers.length);
  } else {
    // process.exit();
  }
});

process.on("exit", () => {
  const [name, activity, lang] = answers;
  console.log(`

    Thank you for your answers.

    Go ${activity} ${name} you can write ${lang} code later!!!
    
    `);
});

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting... ${p}%`);
  // console.log(`waiting ${currentTime / 1000} seconds`);
};
console.log(`setting a ${waitTime / 1000}  second delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
