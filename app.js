const group1 = (e) => {
    debugger
    e.preventDefault();
    let x = document.getElementById('Calories')
    // console.log(x.value);
    if (document.getElementById('BreakFast').checked == true && Number(x.value) >= 300 && Number(x.value) <= 700 ) {
        console.log('checked braedgdm')
    } else if(document.getElementById('Lunch').checked == true && Number(x.value) >= 700 && Number(x.value) <= 900) {
        console.log('checked lunch');
    }else if(document.getElementById('Dinner').checked == true && Number(x.value) >= 700 && Number(x.value) <= 900) {
        console.log('checked lunch');
    } else {
        console.log('please select the meals')
    }
    return false;

};


// const group2 = document.getElementById('Lunch');
// const group3 = document.getElementById('Dinner');
// const group4 = document.getElementById('Calories');
// if (group1.checked === true) {

// }