// eslint-disable-next-line import/extensions, import/no-cycle
import upDate from './update.js';

const marble = document.getElementById('lime');
const breakfastTag2 = document.getElementById('BreakFast2');
const lunchTag2 = document.getElementById('Lunch2');
const dinnerTag2 = document.getElementById('Dinner2');
const calorieValue2 = document.getElementById('Calories2');
const text2 = document.getElementById('text2');
const time2 = document.getElementById('apps2');
const edit = (value) => {
  const data = JSON.parse(localStorage.getItem('array1'));
  const filteredData = data.filter((item) => item.id == value);
  if (filteredData[0].meals === 'BreakFast') {
    breakfastTag2.checked = true;
  }
  if (filteredData[0].meals === 'Lunch') {
    lunchTag2.checked = true;
  }
  if (filteredData[0].meals === 'Dinner') {
    dinnerTag2.checked = true;
  }
  calorieValue2.value = filteredData[0].calories;
  text2.value = filteredData[0].text;
  time2.value = filteredData[0].time;
  marble.addEventListener('click', (e) => {
    console.log(e.target);
    upDate(value);
  });
};
export default edit;
