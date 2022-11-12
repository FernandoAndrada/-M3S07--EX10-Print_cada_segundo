
let from = 1;
let to = 10;
let i;

function fromTo(from, to){
    alert('setTimeout, From ' + from + ' To ' + to);
}

for(i = 1; i<=to; i++){
setTimeout (fromTo, 1000, i, to);
clearTimeout(fromTo);
}
