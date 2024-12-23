<template>
  <div class="container mt-5">
    <div class="card text-center shadow-lg border-blue">
      <GameHeader />
      <KeremTimer :timeLeft="timer" /> <!-- Zaman başlık kısmında -->
      <div class="card-body bg-light">
        <QuestionDisplay
          v-if="!isAnswered"
          :question="currentQuestion"
          :options="options"
          @answer-selected="selectAnswer"
        />
        <div v-else>
          <p class="mt-4 display-5">
            <span v-if="isCorrect" class="text-success fw-bold">🎉 Doğru!</span>
            <span v-else class="text-danger fw-bold">
              ❌ Yanlış! Doğru Cevap: {{ correctAnswer }}
            </span>
          </p>
          <button class="btn btn-lg btn-blue mt-4" @click="nextQuestion">
            ➡️ Sonraki Soru
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./AppScript.js"></script>

<style src="./AppStyles.css"></style>
