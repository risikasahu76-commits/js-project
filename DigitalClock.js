const clock = document.querySelector('#clock');

// let date = new Date();
// console.log(date.toLocaleTimeString());//this will print in the console the exact time every time the page refreshes

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
},1000);