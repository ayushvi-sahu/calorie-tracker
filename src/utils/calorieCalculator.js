export const calculateCalories = (data) => {

  const genderConstant =
    data.gender === "male" ? 5 : -161;

  const bmr =
    (10 * data.weight) +
    (6.25 * data.height) -
    (5 * data.age) +
    genderConstant;

  const activityMap = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryactive: 1.9
  };

  const maintenance =
    bmr * activityMap[data.activity];

  let target = maintenance;

  if (data.goal === "lose") {
    target -= 500;
  }

  if (data.goal === "gain") {
    target += 300;
  }

  const protein = data.weight * 2;
  const fat = data.weight * 0.8;

  const carbs =
    (target - (protein * 4) - (fat * 9)) / 4;

  // BMI Calculation
  const bmi =
    data.weight /
    Math.pow(data.height / 100, 2);

  return {
    maintenance: Math.round(maintenance),
    target: Math.round(target),
    protein: Math.round(protein),
    fat: Math.round(fat),
    carbs: Math.round(carbs),
    bmi: bmi.toFixed(1)
  };
};