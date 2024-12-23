<template>
  <div>
    <h1 class="display-4 text-center">
     Kalan Süre: <span :class="timerClass">{{ timeLeft }}</span> saniye
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    timeLeft: {
      type: Number,
      required: true,
    },
  },
  computed: {
    // Süreye göre yazı rengini değiştirebiliriz
    timerClass() {
      if (this.timeLeft > 5) {
        return "text-success";
      } else if (this.timeLeft > 2) {
        return "text-warning";
      } else {
        return "text-danger";
      }
    },
  },
};
</script>


