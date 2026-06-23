let currentQuestion = 0;
let score = 0;

let questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },

  {
    question: "What is the capital of Nigeria?",
    options: ["Abuja", "Lagos", "Kano", "Ibadan"],
    answer: "Abuja",
  },

  {
    question: "What is the capital of Ghana?",
    options: ["Accra", "Kumasi", "Tamale", "Cape Coast"],
    answer: "Accra",
  },

  {
    question: "What is the capital of Germany?",
    options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
    answer: "Berlin",
  },

  {
    question: "What is the capital of Italy?",
    options: ["Milan", "Naples", "Rome", "Venice"],
    answer: "Rome",
  },

  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    answer: "Ottawa",
  },

  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },

  {
    question: "What is the capital of Japan?",
    options: ["Osaka", "Kyoto", "Tokyo", "Nagoya"],
    answer: "Tokyo",
  },

  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: "Brasília",
  },

  {
    question: "What is the capital of Egypt?",
    options: ["Alexandria", "Giza", "Luxor", "Cairo"],
    answer: "Cairo",
  },
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");
