// Dark Mode Toggle
function toggleDark(){
    document.body.classList.toggle("dark-mode");
}

// Form Validation & Success Alert
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e){
    e.preventDefault(); // أهم سطر يمنع Reload

    // إزالة رسائل الأخطاء القديمة
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let valid = true;

    // Validation
    if(name.length < 3){
        document.getElementById("nameError").innerText = "الاسم يجب أن يكون 3 أحرف على الأقل";
        valid = false;
    }
    if(!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){
        document.getElementById("emailError").innerText = "بريد إلكتروني غير صالح";
        valid = false;
    }
    if(message.length < 10){
        document.getElementById("messageError").innerText = "الرسالة قصيرة جداً";
        valid = false;
    }

    if(valid){
        // عرض رسالة نجاح
        const success = document.getElementById("successMsg");
        success.style.display = "block";

        // Animation fade out بعد 3 ثواني
        setTimeout(() => { success.style.display = "none"; }, 3000);

        form.reset();
    }
});