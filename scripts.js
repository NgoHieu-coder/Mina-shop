const submitEmailBtn = document.getElementById('submitEmail'); 
const emailInput = document.getElementById('email'); 
const emailAlert = document.getElementById('alertEmail'); 
console.log(emailInput.value);

submitEmailBtn.addEventListener('click', () => { 
    const email = emailInput.value; 
    if (email.length === 0) { 
        submitEmailBtn.style.transform = 'translateY(32px)'; 
        emailAlert.style.opacity = '1'; 
    } 
})

emailInput.addEventListener('input', (e) => { 
    const email = e.target.value; 
   if (email.length > 0) { 
       submitEmailBtn.style.transform = 'translateY(0)'; 
       emailAlert.style.opacity = '0'; 
   }
})