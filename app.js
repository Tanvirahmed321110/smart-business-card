let btnAddToContact = document.getElementById('btn-add-contact')
let btnCall = document.getElementById('btn-call-now');
let btnFollow = document.getElementById('btn-follow');



btnCall.addEventListener('click',()=>{
    let callConfirm = confirm('Are You Sure?')
    if(callConfirm){
        window.location.href='tel:01351515151'
    }
})


// follow facebook button
btnFollow.addEventListener('click',function(){
    window.open('https://facebook.com/tanvir321110','_blank')
})



// btn dark mode 
let btnDark =document.getElementById('btn-dark-mode')

btnDark.addEventListener('click',()=>{
    const mainProfile = document.getElementById('profile');
    const aboutMe = document.querySelector('.about-me p');
    const h4 = document.querySelector('.h4')
    let icon='<i class="fa-regular fa-sun"></i>'
    
    if(btnDark.innerHTML==='Dark <i class="fa-regular fa-moon"></i>'){
        btnDark.innerHTML=`Light ${icon}`
        btnDark.style.backgroundColor='orange';
        
        mainProfile.style.backgroundColor='navy'
        mainProfile.style.color='white'
        aboutMe.style.color='white'
        h4.style.color='white'
    }
    else{
        btnDark.innerHTML=`Dark <i class="fa-regular fa-moon"></i>`;
        btnDark.style.backgroundColor='black';
        mainProfile.style.backgroundColor='white';
        mainProfile.style.color='black'
        aboutMe.style.color='#808080'
        h4.style.color='red'
    }
    
})