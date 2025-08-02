let progress = 0;

function checkAnswer(choice) {
  const feedback = document.getElementById("quiz-feedback");
  if (choice === "a") {
    feedback.textContent = "✅ Correct! Great job.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorrect. Try again!";
    feedback.style.color = "red";
  }
}

function updateProgress() {
  if (progress < 100) {
    progress += 50;
    document.getElementById("progress-fill").style.width = progress + "%";
    document.getElementById("progress-status").textContent = `${progress}% Completed`;
  } else {
    alert("🎉 You've already completed the course!");
  }
}
