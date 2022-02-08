
function changeText() {
    document.body.style.backgroundColor = 'slateblue';
    document.body.style.color = 'white';
}


function another() {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
}

let makeCrimson = document.getElementById('makeAnother')
makeCrimson.onclick = another


function fname(headerText) {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'yellow';
}

let changeColor = document.getElementById('headerText')
changeColor.onclick = fname

function fnameTwo(request) {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

let changeColor2 = document.getElementById('first')
changeColor2.onclick = fnameTwo

// 4th system and another way + most common way


let makeGold = document.getElementById('makeGold') // যাকে ক্লিক করলে ইভেন্ট ঘটবে তার আইডি // 
makeGold.onclick = function () { // anonymous function 

    document.body.style.background = 'goldenrod';
    document.body.style.color = 'white'; // কাকে এবং কি স্টাইল দিতে চাই // // document হচ্ছে DOM এর কারনে // 
}


let makeOrangeBtn = document.getElementById('makeOrange')
makeOrangeBtn.addEventListener('click', request)

function request(request){
    document.body.style.background = '#FF5733';
}


let changeWidth = document.getElementById('button')
changeWidth.addEventListener('click', widthChange)


function widthChange(){
    box.style.width = '400px';
    box.style.backgroundColor = 'crimson';
}

