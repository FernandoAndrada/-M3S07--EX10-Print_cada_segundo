


function fromTo(from, to){
    let current = from;

    let timerId = setInterval(function(){
        alert(current);
        if(current == to){
            clearInterval(timerId);
        }
        current++;
    }, 1000);

}

fromTo(1 , 5);