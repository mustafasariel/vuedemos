<template>
  <div>
    <p class="question-text">{{ question }}</p>
    <div class="options">
      <button 
        v-for="(option, index) in options" 
        :key="index" 
        @click="selectAnswer(option)" 
        :class="['option-btn', optionClass(index)]">
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    options: Array,
  },
  methods: {
    selectAnswer(option) {
      this.$emit('answer-selected', option);
    },
    optionClass(index) {
      const colors = ['btn-primary', 'btn-success', 'btn-warning'];
      return colors[index % colors.length]; // Seçenekleri döngüsel renklerle bağla
    }
  }
};
</script>

<style scoped>
.question-text {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  background-color: #00ffea;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-btn {
  font-size: 1.5rem;
  padding: 15px;
  width: 100%;
}

.option-btn:hover {
  opacity: 0.8;
}

.btn-primary {
  background-color: #007bff;
}

.btn-success {
  background-color: #28a745;
}

.btn-warning {
  background-color: #ffc107;
}
</style>
