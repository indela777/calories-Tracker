const breakfastTag = document.getElementById('BreakFast');
const lunchTag = document.getElementById('Lunch');
const dinnerTag = document.getElementById('Dinner');
const calorieValue = document.getElementById('Calories');
const text = document.getElementById('text');
const time = document.getElementById('appt');
const array1 = [];
let i = 0;
const breakfastTag2 = document.getElementById('BreakFast2');
const lunchTag2 = document.getElementById('Lunch2');
const dinnerTag2 = document.getElementById('Dinner2');
const calorieValue2 = document.getElementById('Calories2');
const text2 = document.getElementById('text2');
const time2 = document.getElementById('appt2');
const alerts = document.getElementById('alerts');
// eslint-disable-next-line no-unused-vars
const submitRequest = () => {
  // const group2 = document.getElementById('rock');
  const list = {};
  if (document.getElementById('BreakFast').checked === true && Number(calorieValue.value) >= 300 && Number(calorieValue.value) <= 700) {
    list.meals = breakfastTag.id;
    list.calories = calorieValue.value;
    list.time = time.value;
    list.text = text.value;
    document.getElementById('alertText').style = 'visibility: hidden; color:red';
    document.getElementById('alertTime').style = 'visibility: hidden; color:red';
    document.getElementById('alertPalce').style = 'visibility: hidden; color:red';
    document.getElementById('alertMeal').style = 'visibility: hidden; color:red';
  } else if (document.getElementById('Lunch').checked === true && Number(calorieValue.value) >= 700 && Number(calorieValue.value) <= 900) {
    list.meals = lunchTag.id;
    list.calories = calorieValue.value;
    list.time = time.value;
    list.text = text.value;
    document.getElementById('alertText').style = 'visibility: hidden; color:red';
    document.getElementById('alertTime').style = 'visibility: hidden; color:red';
    document.getElementById('alertPalce').style = 'visibility: hidden; color:red';
    document.getElementById('alertMeal').style = 'visibility: hidden; color:red';
  } else if (document.getElementById('Dinner').checked === true && Number(calorieValue.value) >= 700 && Number(calorieValue.value) <= 900) {
    list.meals = dinnerTag.id;

    list.calories = calorieValue.value;
    list.time = time.value;
    list.text = text.value;
    document.getElementById('alertText').style = 'visibility: hidden; color:red';
    document.getElementById('alertTime').style = 'visibility: hidden; color:red';
    document.getElementById('alertPalce').style = 'visibility: hidden; color:red';
    document.getElementById('alertMeal').style = 'visibility: hidden; color:red';
  }

  if (document.getElementById('BreakFast').checked === true && (Number(calorieValue.value) <= 300 || Number(calorieValue.value) >= 700)) {
    document.getElementById('alertText').innerHTML = 'please enter value between 300 - 700';
    document.getElementById('alertText').style = 'visibility: visible; color:red';
  } else if (document.getElementById('Lunch').checked === true && (Number(calorieValue.value) <= 700 && Number(calorieValue.value) >= 900)) {
    document.getElementById('alertText').innerHTML = 'please enter value between 700 - 900';
    document.getElementById('alertText').style = 'visibility: visible; color:red';
  } else if (document.getElementById('Dinner').checked === true && (Number(calorieValue.value) <= 700 && Number(calorieValue.value) >= 900)) {
    document.getElementById('alertText').innerHTML = 'please enter value between 700 - 900';
    document.getElementById('alertText').style = 'visibility: visible; color:red';
  }
  if (text.value === '') {
    document.getElementById('alertPalce').innerHTML = 'please enter the text';
    document.getElementById('alertPalce').style = 'visibility: visible; color:red';
  }
  if (time.value === '') {
    document.getElementById('alertTime').innerHTML = 'please enter the time';
    document.getElementById('alertTime').style = 'visibility: visible; color:red';
  }
  if (calorieValue.value === '') {
    document.getElementById('alertText').innerHTML = 'please enter the value';
    document.getElementById('alertText').style = 'visibility: visible; color:red';
  }
  if (breakfastTag.checked === false && lunchTag.checked === false && dinnerTag.checked === false) {
    document.getElementById('alertMeal').innerHTML = 'please select any meal';
    document.getElementById('alertMeal').style = 'visibility: visible; color:red';
  }
  list.id = i;
  // eslint-disable-next-line max-len
  if (list.meals !== undefined || list.calories !== undefined || list.time !== undefined || list.text !== undefined) {
    array1.push(list);
    localStorage.setItem('array1', JSON.stringify(array1));
  }
  breakfastTag.checked = false;
  lunchTag.checked = false;
  dinnerTag.checked = false;
  calorieValue.value = '';
  text.value = '';
  time.value = '';
  // eslint-disable-next-line no-use-before-define
  dataLocal();
  return false;
};
// set data to localStorage and read the data from localStorage
const dataLocal = () => {
  const tell = document.getElementById('body');
  tell.innerHTML = '';
  // eslint-disable-next-line no-plusplus
  i++;
  const listCalories = JSON.parse(localStorage.getItem('array1'));
  if (listCalories) {
    // eslint-disable-next-line array-callback-return
    listCalories.map((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
            <td>${item.meals}</td>
            <td>${item.calories}</td>
            <td>${item.time}</td>
            <td>${item.text}</td>
            <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick = 'edit(${item.id})'><i class="bi bi-pencil-fill" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">edit</i></button>
            <button class="btn btn-danger" onclick = 'Delete(${item.id})'><i class="bi bi-trash" viewBox="0 0 16 16"width="16" height="16" fill="currentColor">delete</i></button>
            </td>
            `;
      tell.appendChild(row);
    });
  }
};
// Remove the data from localstorage and refresh the page
// eslint-disable-next-line no-unused-vars
const resetLocal = () => {
  localStorage.clear();
  window.location.href = './index.html';
};
// to edit particular iteam in table
// eslint-disable-next-line no-unused-vars
const edit = (id) => {
  const data = JSON.parse(localStorage.getItem('array1'));
  const filteredData = data.filter((item) => item.id === id);
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
  const marble = document.getElementById('lime');
  marble.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    upDate(id);
  });
};
// eslint-disable-next-line no-unused-vars
const Delete = (id) => {
  const listCalori = JSON.parse(localStorage.getItem('array1'));
  const updatedList = listCalori.filter((item) => item.id !== id);
  localStorage.setItem('array1', JSON.stringify(updatedList));
  dataLocal();
};
const upDate = (id) => {
  const data = JSON.parse(localStorage.getItem('array1'));
  const filteredData = data.filter((item) => item.id === id);
  // eslint-disable-next-line no-shadow
  const array1 = data.filter((item) => item !== filteredData[0]);
  const list = {};
  if (document.getElementById('BreakFast2').checked === true && Number(calorieValue2.value) >= 300 && Number(calorieValue2.value) <= 700) {
    list.meals = 'BreakFast';
    list.calories = calorieValue2.value;
  } else if (document.getElementById('Lunch2').checked === true && Number(calorieValue2.value) >= 700 && Number(calorieValue2.value) <= 900) {
    list.meals = 'Lunch';
    list.calories = calorieValue2.value;
  } else if (document.getElementById('Dinner2').checked === true && Number(calorieValue2.value) >= 700 && Number(calorieValue2.value) <= 900) {
    list.meals = 'Dinner';
    list.calories = calorieValue2.value;
  }
  list.time = time2.value;
  list.text = text2.value;
  list.id = id;
  array1.push(list);
  localStorage.removeItem('array1');
  localStorage.setItem('array1', JSON.stringify(array1));
  alerts.style.display = 'block';
};
// eslint-disable-next-line no-unused-vars
const listIteam = () => {
  window.location.href = './index.html';
};
document.addEventListener('DOMContentLoaded', dataLocal());
// eslint-disable-next-line no-use-before-define
setInterval(myTimer, 1000);
function myTimer() {
  const date = new Date();
  document.getElementById('header_2').innerHTML = date.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', hour12: true });
}
