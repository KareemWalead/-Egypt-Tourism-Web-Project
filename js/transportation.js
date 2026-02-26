        // اختيار نوع المركبة
        const vehicleOptions = document.querySelectorAll('.vehicle-option');
        let selectedVehicle = 'سيارة';
        
        vehicleOptions.forEach(option => {
            option.addEventListener('click', function() {
                vehicleOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                selectedVehicle = this.getAttribute('data-type');
            });
        });
        
        // التعامل مع نموذج الحجز
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع بيانات النموذج
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const period = document.getElementById('period').value;
            const passengers = document.getElementById('passengers').value;
            
            // عرض رسالة التأكيد مع التفاصيل
            const confirmationDetails = document.getElementById('confirmationDetails');
            confirmationDetails.innerHTML = `
                <p><strong>الاسم:</strong> ${name}</p>
                <p><strong>رقم الهاتف:</strong> ${phone}</p>
                <p><strong>البريد الإلكتروني:</strong> ${email}</p>
                <p><strong>نوع المركبة:</strong> ${selectedVehicle}</p>
                <p><strong>تاريخ الحجز:</strong> ${date}</p>
                <p><strong>مدة التأجير:</strong> ${period}</p>
                <p><strong>عدد الركاب:</strong> ${passengers}</p>
            `;
            
            // إظهار نافذة التأكيد
            document.getElementById('confirmationModal').style.display = 'flex';
            
            // هنا في التطبيق الحقيقي، سيتم إرسال طلب إلى الخادم لإرسال رسالة تأكيد
            // محاكاة إرسال رسالة تأكيد
            simulateSendingConfirmation(name, phone, email, selectedVehicle, date);
            
            // إعادة تعيين النموذج
            setTimeout(() => {
                document.getElementById('bookingForm').reset();
                vehicleOptions.forEach(opt => opt.classList.remove('active'));
                vehicleOptions[0].classList.add('active');
                selectedVehicle = 'سيارة';
            }, 1000);
        });
        
        // إغلاق نافذة التأكيد
        document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('confirmationModal').style.display = 'none';
        });
        
        // محاكاة إرسال رسالة تأكيد
        function simulateSendingConfirmation(name, phone, email, vehicle, date) {
            console.log('جاري إرسال رسالة تأكيد...');
            console.log(`إلى: ${phone} و ${email}`);
            console.log(`المحتوى: عزيزي/عزيزتي ${name}، تم تأكيد حجز ${vehicle} بتاريخ ${date} بنجاح. شكراً لاختيارك رحال.`);
            
            // في التطبيق الحقيقي، هنا سيتم إرسال طلب AJAX إلى الخادم
            // لإرسال رسالة SMS أو بريد إلكتروني فعلي
        }
        
        // تعيين الحد الأدنى لتاريخ الحجز ليكون اليوم
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);