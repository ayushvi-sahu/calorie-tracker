import { useState } from "react";

function CalorieForm({ onCalculate }) {

  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    height: "",
    weight: "",
    activity: "moderate",
    goal: "lose"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <div className="form-card">

      <form onSubmit={handleSubmit}>

        <label>Age</label>

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />

        <br /><br />

        <label>Height (cm)</label>

        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          onChange={handleChange}
        />

        <br /><br />

        <label>Weight (kg)</label>
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          onChange={handleChange}
        />

        <br /><br />

        <label>Gender</label>
        <select
          name="gender"
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <br /><br />

        <label>Activity Level</label>
        <select
          name="activity"
          onChange={handleChange}
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
          <option value="veryactive">Very Active</option>
        </select>

        <br /><br />

        <label>Goal</label>
        <select
          name="goal"
          onChange={handleChange}
        >
          <option value="lose">Lose Weight</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Gain Weight</option>
        </select>

        <br /><br />

        <button type="submit">
          Calculate
        </button>

      </form>

    </div>
  );
}

export default CalorieForm;