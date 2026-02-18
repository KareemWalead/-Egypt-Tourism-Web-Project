document.getElementById("bookBtn").addEventListener("click", function() {
    let name = prompt("ادخل اسمك للحجز:");
    if(name) {
        alert(`شكرًا ${name}! تم تسجيل طلب زيارتك للمتحف.`);
    } else {
        alert("تم إلغاء الحجز.");
    }
});
