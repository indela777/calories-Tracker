// eslint-disable-next-line import/no-cycle, import/extensions
import edit from './edit.js';

const breakfastTag2 = document.getElementById('BreakFast2');
const lunchTag2 = document.getElementById('Lunch2');
const dinnerTag2 = document.getElementById('Dinner2');
const calorieValue2 = document.getElementById('Calories2');
const text2 = document.getElementById('text2');
const time2 = document.getElementById('apps2');
const alerts = document.getElementById('alerts');
let base64;
const upDate = (id) => {
  const data = JSON.parse(localStorage.getItem('array1'));
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
  list.id = +id;
  const fileEl = document.getElementById('image-input1').files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    base64 = reader.result;
    list.image = base64;
    const newData = data.map((item) => (item.id !== list.id ? item : list));
    localStorage.removeItem('array1');
    localStorage.setItem('array1', JSON.stringify(newData));
  });
  if (fileEl) { reader.readAsDataURL(fileEl); }
  alerts.style.display = 'block';
  const watch = document.querySelectorAll('.edit');
  watch.forEach((el) => {
    el.addEventListener('click', () => {
      edit(id);
    });
  });
};
export default upDate;
