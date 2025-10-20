import React, { useReducer, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// --- STATE KHỞI TẠO ---
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
  timeLeft: 10,
  highScore: parseInt(localStorage.getItem("highScore") || "0"),
};

// --- REDUCER ---
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION": {
      const currentQ = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === currentQ.answer;

      const newScore = isCorrect ? state.score + 1 : state.score;
      const feedback = isCorrect
        ? "correct"
        : `incorrect - correct answer: ${currentQ.answer}`;

      const isLastQuestion = state.currentQuestion + 1 === state.questions.length;
      const newHighScore = Math.max(newScore, state.highScore);
      localStorage.setItem("highScore", newHighScore);

      return {
        ...state,
        score: newScore,
        currentQuestion: isLastQuestion
          ? state.currentQuestion
          : state.currentQuestion + 1,
        selectedOption: "",
        feedback: isLastQuestion ? feedback : "",
        showScore: isLastQuestion,
        timeLeft: 10,
        highScore: newHighScore,
      };
    }

    case "SHOW_FEEDBACK": {
      const currentQ = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === currentQ.answer;
      const feedback = isCorrect
        ? "correct"
        : `incorrect - correct answer: ${currentQ.answer}`;
      return { ...state, feedback };
    }

    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };

    case "TIME_UP":
      return {
        ...state,
        feedback: `Time's up! ⏰ Correct answer: ${state.questions[state.currentQuestion].answer}`,
        timeLeft: 0,
      };

    case "RESTART_QUIZ":
      return { ...initialState, highScore: state.highScore };

    default:
      return state;
  }
}

// --- COMPONENT CHÍNH ---
function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
    timeLeft,
    highScore,
  } = state;

  const currentQ = questions[currentQuestion];

  useEffect(() => {
    if (showScore) return;

    if (timeLeft <= 0) {
      dispatch({ type: "TIME_UP" });
      return;
    }

    const timer = setTimeout(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
    dispatch({ type: "SHOW_FEEDBACK" });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };


  const progressText = `${currentQuestion + 1} / ${questions.length}`;
  const progressValue = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-lg">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h5 className="text-success mt-2">🏆 High Score: {highScore}</h5>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Question {progressText}</h5>
              <h5 style={{ color: timeLeft < 5 ? "red" : "black" }}>
                ⏰ {timeLeft}s
              </h5>
            </div>

            <ProgressBar
              now={progressValue}
              label={`${Math.round(progressValue)}%`}
              className="mb-3"
            />

            <h4>{currentQ.question}</h4>

            <div className="mt-3">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option ? "success" : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={feedback !== "" && selectedOption !== ""}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Hiển thị phản hồi */}
            {feedback && (
              <div className="mt-3 text-center">
                {feedback.startsWith("correct") ? (
                  <h5 className="text-success">
                    <FaCheckCircle className="me-2" /> Correct! 🎉
                  </h5>
                ) : feedback.startsWith("incorrect") ? (
                  <h5 className="text-danger">
                    <FaTimesCircle className="me-2" /> Incorrect!{" "}
                    {feedback.split(": ")[1]}
                  </h5>
                ) : (
                  <h5 className="text-warning">{feedback}</h5>
                )}
              </div>
            )}

            <div className="text-center mt-4">
              <Button
                variant="primary"
                disabled={!selectedOption && timeLeft > 0 && feedback === ""}
                onClick={handleNextQuestion}
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
