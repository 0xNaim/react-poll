const polls = [
  {
    id: 1,
    title: "What is your favorite programming language?",
    description:
      "There are a lot of programming languages available. Among them what is your favorite?",
    options: [
      { id: 222, value: "C Programming", vote: 0 },
      { id: 224242, value: "Java", vote: 0 },
      { id: 224252, value: "Python", vote: 0 },
      { id: 222424, value: "JavaScript", vote: 0 },
    ],
    created: new Date(),
    totalVote: 0,
    opinions: [],
  },
  {
    id: 2,
    title: "Which Frontend Framework do you Prefer?",
    description:
      "JavaScript has a vast variety of front-end libraries and frameworks. Each and every day we have a new one. Among those which frontend framework you like and prefer others?",
    options: [
      { id: 2424, value: "React", vote: 0 },
      { id: 2242, value: "Vue", vote: 0 },
      { id: 2963, value: "Angular", vote: 0 },
    ],
    created: new Date(),
    totalVote: 0,
    opinions: [],
  },
  {
    id: 3,
    title: "What is the best way to create an android app?",
    description:
      "I want to create an android app but I don't understand which technology would be better. There are a lot of technologies available and my application is not so bulky. I need an easy and simple solution so that I can prototype within no time. Please share your options.",
    options: [
      { id: 782, value: "Java", vote: 0 },
      { id: 2535, value: "Kotlin", vote: 0 },
      { id: 99682, value: "React Native", vote: 0 },
      { id: 9682, value: "Flutter", vote: 0 },
      { id: 9685, value: "Ionic", vote: 0 },
    ],
    created: new Date(),
    totalVote: 0,
    opinions: [],
  },
];

export default polls;
