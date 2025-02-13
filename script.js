<script>
  document.addEventListener("DOMContentLoaded", () => {
    const numberOfHearts = 50; // Number of hearts to be generated
    const body = document.body;
    const container = document.createElement('div');
    container.classList.add('falling-hearts');
    body.appendChild(container);

    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 3 + Math.random() * 5 + 's'; // Random fall duration
      heart.style.animationDelay = Math.random() * 5 + 's'; // Random start delay
      heart.textContent = '🤍'; // White heart emoji
      container.appendChild(heart);
    }
  });
</script>
