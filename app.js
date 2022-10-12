const breakfastTag= document.getElementById('BreakFast');
const lunchTag= document.getElementById('Lunch');
const dinnerTag= document.getElementById('Dinner');
let calorieValue = document.getElementById('Calories')
const text = document.getElementById('text');
const time = document.getElementById('appt');
const array1 = [] 
let i =0;


// eslint-disable-next-line no-unused-vars
const submitRequest = () => {
    // const group2 = document.getElementById('rock');
    let list ={}


    if (document.getElementById('BreakFast').checked == true && Number(calorieValue.value) >= 300 && Number(calorieValue.value) <= 700) {
        list.meals=breakfastTag.id;
        list.calories = calorieValue.value;
        list.time = time.value
        list.text = text.value
        document.getElementById('alertText').style='visibility: hidden; color:red'
        document.getElementById('alertTime').style = 'visibility: hidden; color:red';
        document.getElementById('alertPalce').style = 'visibility: hidden; color:red';
        document.getElementById('alertMeal').style='visibility: hidden; color:red'
    } else if(document.getElementById('Lunch').checked == true && Number(calorieValue.value) >= 700 && Number(calorieValue.value) <= 900) {
        list.meals=lunchTag.id;
        list.calories=calorieValue.value
        list.time = time.value
        list.text = text.value
        document.getElementById('alertText').style='visibility: hidden; color:red'
        document.getElementById('alertTime').style = 'visibility: hidden; color:red';
        document.getElementById('alertPalce').style = 'visibility: hidden; color:red';
        document.getElementById('alertMeal').style='visibility: hidden; color:red'
    } else if(document.getElementById('Dinner').checked == true && Number(calorieValue.value) >= 700 && Number(calorieValue.value) <= 900) {
        list.meals=dinnerTag.id;

        list.calories=calorieValue.value
        list.time = time.value
        list.text = text.value
        document.getElementById('alertText').style='visibility: hidden; color:red'
        document.getElementById('alertTime').style = 'visibility: hidden; color:red';
        document.getElementById('alertPalce').style = 'visibility: hidden; color:red';
        document.getElementById('alertMeal').style='visibility: hidden; color:red';
    }

    if (document.getElementById('BreakFast').checked == true && (Number(calorieValue.value) <= 300 || Number(calorieValue.value) >= 700)) {
        document.getElementById('alertText').innerHTML='please enter correct value';
        document.getElementById('alertText').style='visibility: visible; color:red'


    } else if(document.getElementById('Lunch').checked == true && (Number(calorieValue.value) <= 700 && Number(calorieValue.value) >= 900) ) {
        document.getElementById('alertText').innerHTML='please enter correct value';
        document.getElementById('alertText').style='visibility: visible; color:red'


    } else if(document.getElementById('Dinner').checked == true && (Number(calorieValue.value) <= 700 && Number(calorieValue.value) >= 900)) {
        document.getElementById('alertText').innerHTML='please enter correct value';
        document.getElementById('alertText').style='visibility: visible; color:red'
    }
    if (text.value==='') {
        document.getElementById('alertPalce').innerHTML = 'please enter the text';
        document.getElementById('alertPalce').style = 'visibility: visible; color:red';
    }
    if (time.value==='') {
        document.getElementById('alertTime').innerHTML = 'please enter the time';
        document.getElementById('alertTime').style = 'visibility: visible; color:red';
    }
    if (calorieValue.value==='') {
        document.getElementById('alertText').innerHTML='please enter correct value';
        document.getElementById('alertText').style='visibility: visible; color:red'
    }
    if (breakfastTag.checked===false&&lunchTag.checked===false&&dinnerTag.checked===false) {
        document.getElementById('alertMeal').innerHTML='please select any meal';
        document.getElementById('alertMeal').style='visibility: visible; color:red'
    }
    list.id = i;
    if (list.meals!==undefined&&list.calories!==undefined&&list.time!==undefined&&list.text!==undefined) {
        array1.push(list); 
    }
    localStorage.setItem('array1',JSON.stringify( array1));
    breakfastTag.checked=false;
    lunchTag.checked=false;
    dinnerTag.checked=false;
    calorieValue.value='';
    text.value='';
    time.value ='';
    dataLocal()
    return false;
};
// set data to localStorage and read the data from localStorage
const dataLocal = () => {
    const tell = document.getElementById('body')
    tell.innerHTML='';
    i++
    let listCalories = JSON.parse( localStorage.getItem('array1'));
    if (listCalories) {
        listCalories.map( (item) => {
            let row = document.createElement('tr')
            row.innerHTML=`
            <td>${item.meals}</td>
            <td>${item.calories}</td>
            <td>${item.time}</td>
            <td>${item.text}</td>
            <td><button onclick = 'edit(${item.id})'>edit</button></td>
            `
            tell.appendChild(row);
        })
    }
    
}
// Remove the data from localstorage and refresh the page
// eslint-disable-next-line no-unused-vars
const resetLocal = () => {
    localStorage.clear();
    window.location.href=`./index.html`


}
// to edit particular iteam in table
// eslint-disable-next-line no-unused-vars
const edit = (id) =>{
    
    window.location.href=`./edit.html?=${id}`
        
}
document.addEventListener('DOMContentLoaded',dataLocal())

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("header_2").innerHTML = date.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', hour12:true});
}

