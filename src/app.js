// eslint-disable-next-line import/extensions
import edit from './editView.js';
// eslint-disable-next-line import/no-cycle, import/extensions
import Delete from './delete.js';

const breakfastTag = document.getElementById('BreakFast');
const lunchTag = document.getElementById('Lunch');
const dinnerTag = document.getElementById('Dinner');
const calorieValue = document.getElementById('Calories');
const text = document.getElementById('text');
const time = document.getElementById('apps');
let base64;
let pushed = false;
const array1 = [];
let i = 0;
const alertText = document.getElementById('alertText');
const alertTime = document.getElementById('alertTime');
const alertPalce = document.getElementById('alertPalce');
const alertMeal = document.getElementById('alertMeal');
const formSubmit = document.getElementById('lint');
const reset = document.getElementById('nonLint');
const listIteam = document.getElementById('listIteam');
/**
 *dataLocal will render the data from localStorage and display in table
*/
const dataLocal = () => {
  const tell = document.getElementById('body');
  tell.innerHTML = '';
  i += 1;
  const listCalories = JSON.parse(localStorage.getItem('array1'));
  if (listCalories) {
    listCalories.map((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.meals}</td>
        <td>${item.calories}</td>
        <td>${item.time}</td>
        <td>${item.text}</td>
        <td>
        <button type="button" class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" value = ${item.id}>
        edit
        </button>
        <button type="button" class="btn btn-danger delete" value= ${item.id} data-bs-toggle="modal" data-bs-target="#exampleModal">
        delete
        </button>
        </td>
        <td><img src = ${item.image}  class = 'imag' ></td>
        `;
      tell.appendChild(row);
      return null;
    });
    const some = document.querySelectorAll('.edit');
    some.forEach((el) => {
      el.addEventListener('click', (e) => {
        edit(Number(e.target.value));
      });
    });
    const dele = document.querySelectorAll('.delete');
    dele.forEach((el) => {
      el.addEventListener('click', (e) => {
        Delete(e.target.value);
      });
    });
  }
};

/**
  *submitRequest will collect the data provide by the user and store the data in localstorage
*/

formSubmit.addEventListener('click', () => {
  const list = {};
  if (breakfastTag.checked === true
    && Number(calorieValue.value) >= 300 && Number(calorieValue.value) <= 700) {
    list.meals = breakfastTag.id;
    list.calories = calorieValue.value;
    list.time = time.value;
    list.text = text.value;
    alertText.style = 'visibility: hidden; color:red';
    alertTime.style = 'visibility: hidden; color:red';
    alertPalce.style = 'visibility: hidden; color:red';
    alertMeal.style = 'visibility: hidden; color:red';
  } else if (lunchTag.checked === true
    && Number(calorieValue.value) >= 700 && Number(calorieValue.value) <= 900) {
    list.meals = lunchTag.id;
    list.calories = calorieValue.value;
    list.time = time.value;
    list.text = text.value;
    alertText.style = 'visibility: hidden; color:red';
    alertTime.style = 'visibility: hidden; color:red';
    alertPalce.style = 'visibility: hidden; color:red';
    alertMeal.style = 'visibility: hidden; color:red';
  } else if (dinnerTag.checked === true
    && Number(calorieValue.value) >= 700 && Number(calorieValue.value) <= 900) {
    list.meals = dinnerTag.id;
    list.calories = calorieValue.value;
    list.time = time.value;
    list.text = text.value;
    alertText.style = 'visibility: hidden; color:red';
    alertTime.style = 'visibility: hidden; color:red';
    alertPalce.style = 'visibility: hidden; color:red';
    alertMeal.style = 'visibility: hidden; color:red';
  }
  if (breakfastTag.checked === true
    && (Number(calorieValue.value) < 300 || Number(calorieValue.value) > 700)) {
    alertText.innerHTML = 'please enter value between 300 - 700';
    alertText.style = 'visibility: visible; color:red';
  } else if (lunchTag.checked === true
    && (Number(calorieValue.value) < 700 || Number(calorieValue.value) > 900)) {
    alertText.innerHTML = 'please enter value between 700 - 900';
    alertText.style = 'visibility: visible; color:red';
  } else if (dinnerTag.checked === true
    && (Number(calorieValue.value) < 700 || Number(calorieValue.value) > 900)) {
    alertText.innerHTML = 'please enter value between 700 - 900';
    alertText.style = 'visibility: visible; color:red';
  }
  if (text.value === '') {
    alertPalce.innerHTML = 'please enter the text';
    alertPalce.style = 'visibility: visible; color:red';
  }
  if (time.value === '') {
    alertTime.innerHTML = 'please enter the time';
    alertTime.style = 'visibility: visible; color:red';
  }
  if (calorieValue.value === '') {
    alertText.innerHTML = 'please enter the value';
    alertText.style = 'visibility: visible; color:red';
  }
  if (breakfastTag.checked === false && lunchTag.checked === false && dinnerTag.checked === false) {
    alertMeal.innerHTML = 'please select any meal';
    alertMeal.style = 'visibility: visible; color:red';
  }
  list.id = i;
  const fileEl = document.getElementById('image-input').files[0];
  const imageUpload = () => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      base64 = reader.result;
      list.image = base64;
      if (list.meals !== undefined
      && list.calories !== undefined
      && list.time !== undefined
      && list.text !== undefined && list.image !== undefined) {
        array1.push(list);
        pushed = true;
        localStorage.setItem('array1', JSON.stringify(array1));
      }
      if (pushed === true) {
        breakfastTag.checked = false;
        lunchTag.checked = false;
        dinnerTag.checked = false;
        calorieValue.value = '';
        text.value = '';
        time.value = '';
        document.getElementById('image-input').value = '';
        pushed = false;
      }
      dataLocal();
    });

    if (fileEl) { reader.readAsDataURL(fileEl); }
  };
  imageUpload();
  return false;
});

/**
 *resetLocal this function will delete the data stored in the localstorage
*/
reset.addEventListener('click', () => {
  breakfastTag.checked = false;
  lunchTag.checked = false;
  dinnerTag.checked = false;
  calorieValue.value = '';
  text.value = '';
  time.value = '';
  document.getElementById('image-input').value = '';
});

/**
 * this function is used to render back when edit button is clicked with particular id
*/
listIteam.addEventListener('click', () => {
  window.location.href = './index.html';
});

document.addEventListener('DOMContentLoaded', dataLocal());

/**
 * myTimer will display the current time in the ui
*/

setInterval(() => {
  const date = new Date();
  document.getElementById('header_2').innerHTML = date.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', hour12: true });
}, 1000);

export default dataLocal;
