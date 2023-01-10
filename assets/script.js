var topics = ["HTML", "CSS", "Git", "Javascript"];
var randomtopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) console.log(topics[x]); {
  
  }
}

function selectTopic() {
  if (randomtopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomtopic[0] === "CSS!") {
    console.log("Let's study CSS!");
  } else if (randomtopic === "Git") {
    console.log("Let's study Git");
  } else if (randomtopic === "Javascript") {
    console.log("Let's study Javascript");
  } else {
    console.log("Please try again!");
  }
}
console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic(topics);
