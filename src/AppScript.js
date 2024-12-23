import GameHeader from "../../keremoyun2/src/components/GameHeader.vue";
import QuestionDisplay from "../../keremoyun2/src/components/QuestionDisplay.vue";
import KeremTimer from "../../keremoyun2/src/components/KeremTimer.vue";
import { launchConfetti } from "./utils/confetti";

export default {
  name: "KeremSarıel",

  components: {
    GameHeader,
    QuestionDisplay,
    KeremTimer,
  },
  data() {
    return {
      questions: [
        {
          question: "What is the meaning of 'bird'?",
          options: ["Hamsi", "Kuş", "Balık"],
          answer: "Kuş",
        },
        {
          question: "What is the meaning of 'dog'?",
          options: ["Kedi", "Köpek", "Kuş"],
          answer: "Köpek",
        },
        {
          question: "What is the meaning of 'cat'?",
          options: ["İnek", "Köpek", "Kedi"],
          answer: "Kedi",
        },
        {
          question: "What is the meaning of 'apple'?",
          options: ["Armut", "Çilek", "Elma"],
          answer: "Elma",
        },
        {
          question: "What is the meaning of 'car'?",
          options: ["Ev", "Araba", "Kitap"],
          answer: "Araba",
        },
      ],
      currentQuestionIndex: 0,
      currentQuestion: "",
      options: [],
      correctAnswer: "",
      isAnswered: false,
      isCorrect: false,
      timer: 10,
      timerInterval: null,
    };
  },
  methods: {
    startTimer() {
      console.log("Timer başlatılıyor...");
      if (this.timerInterval) {
        this.stopTimer(); // Önceki timer'ı temizle
      }

      this.timer = 10; // Timer'ı sıfırla
      console.log("Timer başlatılıyor...");
      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          this.timeUp();
        }
      }, 1000);
    },

    stopTimer() {
      console.log("Timer durduruluyor...");
      clearInterval(this.timerInterval);
    },

    timeUp() {
      this.stopTimer();
      this.isAnswered = true;
      this.isCorrect = false;
      this.nextQuestion(); // Zaman dolunca bir sonraki soruya geç
    },

    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.loadQuestion();
      } else {
        alert("Oyun bitti! Tekrar oynamak ister misiniz?");
        this.resetGame();
      }
    },

    loadQuestion() {
      const question = this.questions[this.currentQuestionIndex];
      this.currentQuestion = question.question;
      this.options = question.options;
      this.correctAnswer = question.answer;
      this.isAnswered = false;
      this.startTimer(); // Timer'ı başlat
    },

    resetGame() {
      this.currentQuestionIndex = 0;
      this.loadQuestion();
    },

    shuffleQuestions() {
      this.questions = this.questions.sort(() => Math.random() - 0.5);
    },

    mounted() {
      console.log("Oyun başlatılıyor...");
      this.shuffleQuestions(); // Soruları karıştır
      this.loadQuestion(); // İlk soruyu yükle
    },

    selectAnswer(option) {
      this.isAnswered = true;
      this.stopTimer();
      this.isCorrect = option === this.correctAnswer;
      if (this.isCorrect) {
        launchConfetti();
        console.log("doğru");
      } else {
        console.log("yanlış");
      }
    },
  },
  mounted() {
    console.log("Oyun başlatılıyor...");
    this.shuffleQuestions(); // Soruları karıştır
    this.loadQuestion(); // İlk soruyu yükle
  },
};
