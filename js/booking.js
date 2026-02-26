// const travelers = document.getElementById("travelers");
// const totalPrice = document.getElementById("totalPrice");
// const travelerCount = document.getElementById("travelerCount");

// const pricePerPerson = 350;

// travelers.addEventListener("change", function(){
//     let count = parseInt(this.value);
//     travelerCount.textContent = count;
//     totalPrice.textContent = (count * pricePerPerson) + "$";
// });
// document.getElementById("bookingForm").addEventListener("submit", function(e){
//     e.preventDefault(); // يمنع الفورم من إعادة تحميل الصفحة
//     sendBookingData();
// });

// function sendBookingData() {
//     const form = document.getElementById("bookingForm");

//     // جمع البيانات من الفورم
//     const data = {
//         fullName: form.fullName.value,
//         email: form.email.value,
//         phone: form.phone.value,
//         nationality: form.nationality.value,
//         departureDate: form.departureDate.value,
//         travelers: form.travelers.value,
//         hotelType: form.hotelType.value,
//         roomType: form.roomType.value,
//         payment: form.payment.value,
//         cardNumber: form.cardNumber.value,
//         cardName: form.cardName.value,
//         expiryDate: form.expiryDate.value,
//         cvv: form.cvv.value
//     };

//     fetch("/api/booking", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(result => {
//         if(result.success){
//             alert("✅ تم إرسال الحجز بنجاح!"); // رسالة نجاح
//             form.reset(); // تفريغ الفورم
//         } else {
//             alert("❌ حدث خطأ أثناء الحجز: " + result.message);
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("❌ حدث خطأ في الاتصال بالسيرفر");
//     });
// }

// // --------------
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('bookingForm');
//     const cardFields = document.getElementById('cardFields');

//     // إظهار/إخفاء بيانات البطاقة حسب طريقة الدفع
//     form.payment_method.forEach(radio => {
//         radio.addEventListener('change', () => {
//             cardFields.style.display = (radio.value === 'card') ? 'block' : 'none';
//         });
//     });

//     form.addEventListener('submit', async (e) => {
//         e.preventDefault(); // يمنع reload الصفحة

//         const formData = new FormData(form);

//         try {
//             const res = await fetch(form.action, {
//                 method: 'POST',
//                 body: formData
//             });

//             const data = await res.json();

//             if(data.success){
//                 alert(data.message); // رسالة نجاح
//                 form.reset();        // تصفير الفورم
//             } else {
//                 alert('خطأ: ' + data.message);
//             }
//         } catch(err) {
//             alert('حدث خطأ في الاتصال بالباك اند.');
//             console.error(err);
//         }
//     });
// });

      // تحديد الحد الأدنى لتاريخ اليوم
        const today = new Date().toISOString().split('T')[0];
        document.getElementById("checkIn").setAttribute('min', today);
        
        // ربط تاريخ المغادرة بتاريخ الوصول (لا يمكن المغادرة قبل الوصول)
        document.getElementById("checkIn").addEventListener('change', function() {
            document.getElementById("checkOut").setAttribute('min', this.value);
        });

        // التعامل مع الباك إند (إرسال الفورم)
        const bookingForm = document.getElementById('bookingForm');
        const submitBtn = document.getElementById('submitBtn');
        const successMessage = document.getElementById('successMessage');

        bookingForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // منع إعادة تحميل الصفحة الافتراضي

            // إضافة الأنيميشن لزر التحميل
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // 1. تجميع البيانات وتجهيزها للباك إند
            const formData = new FormData(bookingForm);
            const bookingData = Object.fromEntries(formData.entries());

            // طباعة البيانات في الكونسول لتراها (كما ستصل للباك إند)
            console.log("البيانات الجاهزة للإرسال للباك إند (JSON):", JSON.stringify(bookingData));

            /* 
            =========================================
            هنا سيكتب مبرمج الباك إند كود الـ Fetch أو Axios 
            مثال:
            try {
                const response = await fetch('https://your-api.com/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookingData)
                });
                const result = await response.json();
            } catch(error) {
                console.error(error);
            }
            =========================================
            */

            // 2. محاكاة وهمية للإرسال (Simulation) لمدة ثانيتين لعرض الأنيميشن
            setTimeout(() => {
                // إيقاف التحميل
                submitBtn.classList.remove('loading');
                submitBtn.style.display = 'none'; // إخفاء الزر
                
                // إظهار رسالة النجاح
                successMessage.style.display = 'block';

                // تفريغ الحقول بعد الإرسال
                bookingForm.reset();
            }, 2000);
        });