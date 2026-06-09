function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h2>Your Results</h2>

      <div className="results-grid">

        <div className="result-box">
          <h3>🔥 Maintenance</h3>
          <p>{result.maintenance}</p>
        </div>

        <div className="result-box">
          <h3>🎯 Target</h3>
          <p>{result.target}</p>
        </div>

        <div className="result-box">
          <h3>🥩 Protein</h3>
          <p>{result.protein} g</p>
        </div>

        <div className="result-box">
          <h3>🍚 Carbs</h3>
          <p>{result.carbs} g</p>
        </div>

        <div className="result-box">
          <h3>🥑 Fat</h3>
          <p>{result.fat} g</p>
        </div>

        <div className="result-box">
          <h3>📊 BMI</h3>
          <p>{result.bmi}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;