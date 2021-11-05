const btn = document.querySelector('.free-trial');
const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const inputSelect = document.querySelectorAll('input');
const inputContain = document.querySelectorAll('.input-container')
const errorList = document.querySelectorAll('.error');
let value = [];
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    inputSelect.forEach(element=>{
    value.push(element.value)
    })
    verify(value);
    value = [];
    console.log(value)

})

let verify = (e)=>{
    for (let i=0;i<4;i++){
        if(e[i]== ''){
            inputContain[i].classList.remove('active')
            void inputContain[i].offsetWidth
            inputContain[i].classList.add('active')
        }
        else{
            inputContain[i].classList.remove('active')
        }
    }
}