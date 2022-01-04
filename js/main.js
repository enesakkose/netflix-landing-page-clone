const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
/*const question = document.querySelectorAll('.question');*/

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');

   const tabContentItem = document.querySelector(`#${this.id}-content`);
   tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}

/*function removeOpen(){
    question.forEach(item => item.classList.remove('i-open'))
}

function questionItem(e){
    removeOpen();
    this.classList.toggle('i-open');
}*/

tabItems.forEach(item => item.addEventListener('click', selectItem));
/*question.forEach(item => item.addEventListener('click', questionItem))*/