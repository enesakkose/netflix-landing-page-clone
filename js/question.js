const listItem = document.querySelectorAll('.list-item');


window.addEventListener('DOMContentLoaded', () =>{
    listItem.forEach(question =>{
        const que = question.querySelector('.question')
        que.addEventListener('click', () => {
            question.classList.toggle('ans')
            listItem.forEach(item => {
                if(item !== question){
                    item.classList.remove('ans')
                }
            })
        })
    })
})

   




