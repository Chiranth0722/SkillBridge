import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./QuizPage";
import ResultPage from "./ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

