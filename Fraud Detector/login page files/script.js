    let passward=document.querySelector('#passward')
    let email=document.querySelector('#email')
    let eye=document.querySelector('#eye-icon')
    
    passward.addEventListener('focus',()=>{     //! EventListner Passward
        if(passward.classList.length==0){
            passward.classList.add('after-clicked-width')
            passward.style.width='80%'
        }
        else if(passward.classList[0]=='normal-width'){
            passward.classList.remove('normal-width')
            passward.classList.add('after-clicked-width')
            passward.style.width='80%'

        }
        email.style.width='60%'
        passward.style.borderColor='rgb(163, 236, 52)'
        email.style.borderColor='red'
        eye.style.right='15%'
    })
    email.addEventListener('focus',()=>{        //! EventListner Email

        if(passward.classList.length==0){
            email.style.width='80%'
        }
        else if(passward.classList[0]=='after-clicked-width'){
            passward.classList.remove('after-clicked-width')
            passward.classList.add('normal-width')
            eye.style.right='15%'
        }
         email.style.width='80%'
         email.style.borderColor='aqua'
         eye.style.right='25%'
         passward.style.borderColor='red'
         passward.style.width='60%'
    })

    eye.addEventListener('click',()=>{      //! EventListner For Eye
        if(passward.type==='password'){
            passward.type='text'
            eye.classList.add('bi-eye')
            eye.classList.remove('bi-eye-slash')
        }
        else{
            passward.type='password'
            eye.classList.remove('bi-eye')
            eye.classList.add('bi-eye-slash')
        }
    })