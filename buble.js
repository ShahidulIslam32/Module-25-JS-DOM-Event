// second item click

document.getElementById('second').addEventListener('click', function(event){
    let second = document.getElementById('second')
    console.log('Front end Development Clicked !!')
    event.stopPropagation()
})

document.getElementById('bubble-list').addEventListener('click', function(event){
    let listparent = document.getElementById('bubble-list')
    console.log('bubble-list the UL Clicked !!')
})