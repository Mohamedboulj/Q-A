const questions = document.querySelectorAll('.Q');


questions.forEach((element) => {
    element.addEventListener('click',()=>{
        element.nextElementSibling.classList.toggle('hide');
    })
});
