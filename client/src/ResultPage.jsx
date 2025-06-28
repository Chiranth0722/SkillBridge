import { useEffect, useState } from "react";
import axios from "axios";

const ResultPage = () => {
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(true);

  const answers = JSON.parse(localStorage.getItem("quizAnswers"));

  const generatePrompt = () => {
    let text = "A student took a Python quiz and gave these answers:\n";
    for (let q in answers) {
      text += `Question ${q}: Answered "${answers[q]}"\n`;
    }
    text +=
      "Based on these answers, identify weak concepts and generate a personalized 3-step Python learning roadmap.";
    return text;
  };

  const fetchRoadmap = async () => {
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

    console.log("Using OpenAI API Key:", OPENAI_API_KEY); // Debug log

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: generatePrompt() }],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
      setRoadmap(response.data.choices[0].message.content);
    } catch (error) {
      console.error("OpenAI API Error:", error?.response || error?.message || error);
      setRoadmap("Error generating roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoadmap();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Personalized Python Roadmap</h2>
      {loading ? <p>Generating...</p> : <pre>{roadmap}</pre>}
    </div>
  );
};

export default ResultPage;