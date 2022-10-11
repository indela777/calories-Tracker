const breakfastTag2= document.getElementById('BreakFast2');
const lunchTag2= document.getElementById('Lunch2');
const dinnerTag2= document.getElementById('Dinner2');
let calorieValue2= document.getElementById('Calories2')
const text2 = document.getElementById('text2');
const time2 = document.getElementById('appt2');




function datamap (){    
    const location = window.location.href;
    const data = JSON.parse (localStorage.getItem('array1'))
    const filteredData=  data.filter((item)=>{
        const id =location.slice(location.length-1,location.length);
            return item.id == id;
        })
   
    if(filteredData[0].meals=="BreakFast"){
        breakfastTag2.checked=true;
    }
    if(filteredData[0].meals=='Lunch'){
        lunchTag2.checked=true;
    }
    if(filteredData[0].meals=='Dinner'){
        dinnerTag2.checked=true;
    }
    calorieValue2.value= filteredData[0].calories;
    text2.value= filteredData[0].text;
    time2.value= filteredData[0].time;
}
datamap();

// eslint-disable-next-line no-unused-vars
const listIteam = () =>{
    
    window.location.href=`./index.html`;
     
}

// eslint-disable-next-line no-unused-vars
const upDate = () => {
    const location = window.location.href;
    const id =location.slice(location.length-1,location.length);
    const data = JSON.parse(localStorage.getItem('array1'))
    const filteredData=  data.filter((item)=>{
        const id =location.slice(location.length-1,location.length);
            return item.id == id;
        })
        const array1 = data.filter((item) => {
            return item!=filteredData[0]

        })
        let list = {};
        if (document.getElementById('BreakFast2').checked == true && Number(calorieValue2.value) >= 300 && Number(calorieValue2.value) <= 700 ) {
            list.meals='BreakFast';
            list.calories = calorieValue2.value;
    
    
        } else if(document.getElementById('Lunch2').checked == true && Number(calorieValue2.value) >= 700 && Number(calorieValue2.value) <= 900) {
            list.meals='Lunch';
    
            list.calories=calorieValue2.value
    
    
        }else if(document.getElementById('Dinner2').checked == true && Number(calorieValue2.value) >= 700 && Number(calorieValue2.value) <= 900) {
            list.meals='Dinner';
    
            list.calories=calorieValue2.value
        }
        list.time = time2.value
        list.text = text2.value
        list.id = id;
        array1.push(list);
        localStorage.removeItem('array1')
        localStorage.setItem('array1',JSON.stringify( array1));
        
    alert('updated successfuly')
}
