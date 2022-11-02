// eslint-disable-next-line import/extensions, import/no-cycle
import upDate from './update.js';

const marble = document.getElementById('lime');
const breakfastTag2 = document.getElementById('BreakFast2');
const lunchTag2 = document.getElementById('Lunch2');
const dinnerTag2 = document.getElementById('Dinner2');
const calorieValue2 = document.getElementById('Calories2');
const text2 = document.getElementById('text2');
const time2 = document.getElementById('apps2');
const image = document.getElementById('image');
let base55;
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
  image.src = filteredData[0].image;
  time2.value = filteredData[0].time;
  const fileEl = document.getElementById('image-input1');
  fileEl.addEventListener('change', () => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      base55 = reader.result;
      image.src = base55;
    });
    if (fileEl) { reader.readAsDataURL(fileEl.files[0]); }
  });

  marble.addEventListener('click', () => {
    upDate(value);
  });
};
export default edit;
