const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');


buttons.forEach(function(button){

    button.addEventListener('click',function(e){

        console.log(e);//it is a mouse event
        console.log(e.target);//event is happening from where
        

        //e.target means from where the event is being triggered from
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }

    });
});