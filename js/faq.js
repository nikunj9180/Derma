const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
    question.addEventListener("click", function() {
        const isActive = this.classList.contains("active");

        // Close all answers
        questions.forEach(q => {
        q.classList.remove("active");
        q.nextElementSibling.style.display = "none";
        });

        // Open current answer if it wasn't active before
        if (!isActive) {
        this.classList.add("active");
        const answer = this.nextElementSibling;
        answer.style.display = "block";
        }
    });
    });