const breakfastTag2 = document.getElementById('BreakFast2');
const lunchTag2 = document.getElementById('Lunch2');
const dinnerTag2 = document.getElementById('Dinner2');
const calorieValue2 = document.getElementById('Calories2');
const text2 = document.getElementById('text2');
const time2 = document.getElementById('appt2');
const alerts = document.getElementById('alerts');
const upDate = (id) => {
  const data = JSON.parse(localStorage.getItem('array1'));
  const filteredData = data.filter((item) => item.id === id);
  const array2 = data.filter((item) => item !== filteredData[0]);
  const list = {};
  if (breakfastTag2.checked === true
      && Number(calorieValue2.value) >= 300 && Number(calorieValue2.value) <= 700) {
    list.meals = 'BreakFast';
    list.calories = calorieValue2.value;
  } else if (lunchTag2.checked === true
      && Number(calorieValue2.value) >= 700 && Number(calorieValue2.value) <= 900) {
    list.meals = 'Lunch';
    list.calories = calorieValue2.value;
  } else if (dinnerTag2.checked === true
      && Number(calorieValue2.value) >= 700 && Number(calorieValue2.value) <= 900) {
    list.meals = 'Dinner';
    list.calories = calorieValue2.value;
  }
  list.time = time2.value;
  list.text = text2.value;
  list.id = id;
  array2.push(list);
  localStorage.removeItem('array1');
  localStorage.setItem('array1', JSON.stringify(array2));
  alerts.style.display = 'block';
};
export default upDate;
