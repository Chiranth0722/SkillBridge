import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "What is the output of print(2 ** 3)?",
      options: ["5", "6", "8", "9"],
    },
    {
      id: 2,
      question: "What keyword is used to define a function in Python?",
      options: ["def", "function", "func", "define"],
    },
    {
      id: 3,
      question: "Which data type is immutable in Python?",
      options: ["List", "Tuple", "Set", "Dictionary"],
    },
  ];

  const handleChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    navigate("/result");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Python Skill Quiz</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={`q${q.id}`}
                value={opt}
                onChange={() => handleChange(q.id, opt)}
              />
              {opt}
            </label>
          ))}
          <hr />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;
