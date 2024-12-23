import confetti from "canvas-confetti";

export function launchConfetti() {
  const end = Date.now() + 1 * 1000; // 3 saniye boyunca patlasın

  const colors = ["#bb0000", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors,
    });
    confetti({
      particleCount: 100,
      spread: 300,
      origin: { x: 0.5, y: 0.5 }, // Ortadan başlar
      colors: ["#ff3000", "#d0ff00", "#b010ff", "#002121"], // RGB renkler
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
