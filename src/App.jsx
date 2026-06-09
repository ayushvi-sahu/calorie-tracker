import "./App.css";
import { useState } from "react";

import CalorieForm from "./components/CalorieForm";
import ResultCard from "./components/ResultCard";

import { calculateCalories } from "./utils/calorieCalculator";

function App() {

  const [result, setResult] = useState(null);

  const handleCalculate = (data) => {
    const calculatedResult = calculateCalories(data);
    setResult(calculatedResult);
  };

  return (
    <div className="container">

      <h1>🔥 Calorie Tracker</h1>

      <p className="subtitle">
        Calculate your daily calorie needs and track
        your fitness goals with ease.
      </p>

      <CalorieForm onCalculate={handleCalculate} />

      {result && (
        <ResultCard result={result} />
      )}

      <footer>
        <p>
          Built with React • Calorie Tracker SaaS
        </p>
      </footer>

    </div>
  );
}

export default App;