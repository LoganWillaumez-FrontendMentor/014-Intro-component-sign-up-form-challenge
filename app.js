const btn = document.querySelector('.free-trial');
const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const inputSelect = document.querySelectorAll('input');
const emailError = document.querySelector('.email-error');
const inputContain = document.querySelectorAll('.input-container');
const errorList = document.querySelectorAll('.error');
let value = [];
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    inputSelect.forEach(element=>{
    value.push(element.value)
    })
    verify(value);
    value = [];
})

let verify = (e)=>{
    for (let i=0;i<4;i++){
        if(e[i]=== ''){
           resetAnim(i);
           if(e[2]=== ''){
                     emailError.innerText = "E-mail cannot be embpty";
           }
        }
        else{
           inputContain[i].classList.remove('active')
        if (!e[2].match(regExp)){
                emailError.innerText = "Look like this is not an email";
                resetAnim(2);
            }
            else{
                inputContain[2].classList.remove('active')
            }
        }
    }
}
let resetAnim = (e) =>{
    inputContain[e].classList.remove('active')
    void inputContain[e].offsetWidth
    inputContain[e].classList.add('active')
}