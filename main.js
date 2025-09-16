const wishes = [
      "✨ May your Diwali be full of light, laughter & prosperity! ✨",
      "🪔 Light up your life with happiness and success this Diwali 🪔",
      "🎆 Wishing you endless joy, love, and health on this Diwali 🎆",
      "🌟 Let this Diwali burn away all negativity & bring new hope 🌟",
      "❤️ Celebrate Diwali with love, togetherness & positivity ❤️"
    ];

    function showWish() {
      const wishText = document.getElementById("wishText");

      // Pick a random wish
      const randomIndex = Math.floor(Math.random() * wishes.length);
      wishText.textContent = wishes[randomIndex];

      // Animation
      wishText.classList.remove("show");
      setTimeout(() => {
        wishText.classList.add("show");
      }, 100);

      // Sparkles
      for (let i = 0; i < 15; i++) {
        createSparkle();
      }
    }

    function createSparkle() {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * window.innerWidth + "px";
      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 3000);
    }
  
