

// event - common js code start from here 

function justFunction() {
    let changeText = document.getElementById('clicking-method')
    changeText.innerText = 'Wellcome to my website'
    changeText.style.color = 'slateblue';
}


// direct event 

document.getElementById('direct').addEventListener('click', function () {
    let result = document.getElementById('direct-method')
    result.innerText = 'This is Direct Function'
    result.style.marginBottom = '30px'
})

// another direct example 

document.getElementById('updateBtn').addEventListener('click', function(){
    let Btn = document.getElementById('textInput')
    let otherBtn = document.getElementById('direct-method')

    otherBtn.innerText = textInput.value;
    textInput.value = '';
    
})