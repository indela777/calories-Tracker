/* eslint-disable no-dupe-else-if */
// eslint-disable-next-line import/no-cycle, import/extensions
import edit from './editView.js';

const breakfastTag2 = document.getElementById('BreakFast2');
const lunchTag2 = document.getElementById('Lunch2');
const dinnerTag2 = document.getElementById('Dinner2');
const calorieValue2 = document.getElementById('Calories2');
const text2 = document.getElementById('text2');
const time2 = document.getElementById('apps2');
const alerts = document.getElementById('alerts');
const alertText2 = document.getElementById('alertText2');
const alertTime2 = document.getElementById('alertTime2');
const alertHome2 = document.getElementById('alertHome2');

let base64;
const upDate = (id) => {
  const data = JSON.parse(localStorage.getItem('array1'));
  const list = {};

  if (breakfastTag2.checked === true
    && Number(calorieValue2.value) >= 300 && Number(calorieValue2.value) <= 700) {
    list.meals = 'BreakFast';
    list.calories = calorieValue2.value;
    list.time = time2.value;
    list.text = text2.value;
    alertText2.style = 'visibility: hidden; color:red';
    alertHome2.style = 'visibility: hidden; color:red';
    alertTime2.style = 'visibility: hidden; color:red';
  } else if (lunchTag2.checked === true
        && Number(calorieValue2.value) >= 700 && Number(calorieValue2.value) <= 900) {
    list.meals = 'Lunch';
    list.calories = calorieValue2.value;
    list.time = time2.value;
    list.text = text2.value;
    alertText2.style = 'visibility: hidden; color:red';
    alertHome2.style = 'visibility: hidden; color:red';
    alertTime2.style = 'visibility: hidden; color:red';
  } else if (dinnerTag2.checked === true
        && Number(calorieValue2.value) >= 700 && Number(calorieValue2.value) <= 900) {
    list.meals = 'Dinner';
    list.calories = calorieValue2.value;
    list.time = time2.value;
    list.text = text2.value;
    alertText2.style = 'visibility: hidden; color:red';
    alertHome2.style = 'visibility: hidden; color:red';
    alertTime2.style = 'visibility: hidden; color:red';
  }
  if (breakfastTag2.checked === true
    && (Number(calorieValue2.value) < 300 || Number(calorieValue2.value) > 700)) {
    alertText2.innerHTML = 'please enter value between 300 - 700';
    alertText2.style = 'visibility: visible; color:red';
  } else if (lunchTag2.checked === true
    && (Number(calorieValue2.value) < 700 || Number(calorieValue2.value) > 900)) {
    alertText2.innerHTML = 'please enter value between 700 - 900';
    alertText2.style = 'visibility: visible; color:red';
  } else if (dinnerTag2.checked === true
    && (Number(calorieValue2.value) < 700 || Number(calorieValue2.value) > 900)) {
    alertText2.innerHTML = 'please enter value between 700 - 900';
    alertText2.style = 'visibility: visible; color:red';
  } else if (text2.value === '') {
    alertHome2.innerHTML = 'please enter the text';
    alertHome2.style = 'visibility: visible; color:red';
  } else if (time2.value === '') {
    alertTime2.innerHTML = 'please enter the time';
    alertTime2.style = 'visibility: visible; color:red';
  } else if (calorieValue2.value === '') {
    alertText2.innerHTML = 'please enter the value';
    alertText2.style = 'visibility: visible; color:red';
  } else {
    list.id = id;
    const fileEl = document.getElementById('image-input1').files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      base64 = reader.result;
      list.image = base64;
      const newData = data.map((item) => (item.id !== list.id ? item : list));
      localStorage.removeItem('array1');
      localStorage.setItem('array1', JSON.stringify(newData));
    });
    if (fileEl) { reader.readAsDataURL(fileEl); } else {
      const newData = data.map((item) => {
        if (item.id !== list.id) {
          return item;
        }
        list.image = item.image;
        return list;
      });
      localStorage.removeItem('array1');
      localStorage.setItem('array1', JSON.stringify(newData));
    }

    alerts.style = 'visibility:visible; display:block';
  }

  const watch = document.querySelectorAll('.edit');
  watch.forEach((el) => {
    el.addEventListener('click', () => {
      edit(id);
    });
  });
};
export default upDate;
