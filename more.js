

document.getElementById('delete-btn').addEventListener('click',function(){
    let remove = document.getElementById('secret-info')
    remove.style.display = 'none';
})


document.getElementById('delete-confirm').addEventListener('focus', function () {
    document.body.style.background = 'crimson';
    document.body.style.color = 'white';

})

document.getElementById('delete-confirm').addEventListener('blur', function () {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
    
})

document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    let deleteBtn = document.getElementById('delete-btn')
    if(event.target.value == 'delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled', true)
    }
    document.body.style.background = 'white';
    document.body.style.color = 'black';

})
