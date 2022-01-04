const listItem = document.querySelectorAll('.list-item');
const question = document.querySelector('.question')
const answer = document.querySelector('.answer');
function questionItem(e){
    question.classList.toggle('i-open');



    answer.classList.toggle('closed')

    
    
}



listItem.forEach(item => item.addEventListener('click', questionItem))

// faq tarafında js düzelt , 2. section 3 bölüm responsivini düzelt