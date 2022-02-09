
document.getElementById('submit-comment').addEventListener('mouseover', function(){
    const commentBox = document.getElementById('new-comment')
    //const userComments = commentBox.value;
    const test = document.createElement('p')
    test.innerText = commentBox.value 

    let commentContainer = document.getElementById('comment-container')
    commentContainer.appendChild(test);
    commentBox.value = '';
})