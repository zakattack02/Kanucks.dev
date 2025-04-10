export function startCityAnimation(canvas, running) {
  const ctx = canvas.getContext("2d");

  // Set the canvas size to match the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stepTimer;
  let resetTimer;

  // Animation loop
  function step() {
    if (!running) {
      return;
    }
    // Clear the canvas and redraw the city simulation
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cityRunning = paintCity(ctx);

    if (!cityRunning) {
      resetTimer();
    }

    // Request the next frame
    if (running) {
      stepTimer = requestAnimationFrame(step);
    }
  }

  // Function to restart the city simulation
  function reset() {
    // Reset logic here (e.g., clear simulation state)
    console.log("Resetting city simulation...");
    startCityAnimation(canvas, running); // Restart animation
  }

  function paintCity(ctx) {
    // Replace this with your logic to draw the "city" on the canvas
    ctx.fillStyle = "#FF5733";
    ctx.fillRect(100, 100, 50, 50);
    return true; // Returning true means the simulation is still running
  }

  // Start the animation
  step();
  stepTimer = requestAnimationFrame(step);

  // Reset timer logic
  if (running) {
    resetTimer = setTimeout(() => {
      reset();
    }, 5000);
  }

  // Cleanup on unmount
  return () => {
    cancelAnimationFrame(stepTimer);
    clearTimeout(resetTimer);
  };
}
