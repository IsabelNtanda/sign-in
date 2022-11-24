//seleção do html

const password=document.getElementById('password')
const eyes =document.getElementById('eyes')

function eyeclick(){
 
    let inputTypePassword = password.type == 'password'

    if (inputTypePassword) {
        showpassword()
    } else {
        hidepassword()
    }

        function showpassword(){
            password.setAttribute('type','text')
           eyes.setAttribute('src', '../assets/images/closed-eye.svg')
        }

        function hidepassword(){
            password.setAttribute('type','password')
            eyes.setAttribute('src', '../assets/images/eyes.svg')
        }
}