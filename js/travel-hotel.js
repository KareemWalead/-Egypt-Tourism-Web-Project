        // Hotel Data - Updated with Egyptian hotels
        const hotels = [
            {
                id: 1,
                name: "فندق حياة القاهرة",
                location: "القاهرة، مصر",
                description: "فندق فاخر يقع في قلب القاهرة مع إطلالات رائعة على المدينة ومرافق فاخرة.",
                image: "../img/carlton-hotel.jpg",
                features: ["واي فاي مجاني", "سبا", "مسبح", "مركز لياقة", "مطعم"],
                price: 250,
                rating: 4.8
            },
            {
                id: 2,
                name: "منتجع سيدي عبد الرحمن",
                location: "الساحل الشمالي، مصر",
                description: "منتجع على شاطئ البحر مع شاليهات خاصة وصول مباشر للشاطئ الخاص.",
                image: "../img/hotel2.jpg",
                features: ["شاطئ خاص", "سبا", "مسبح", "رياضات مائية", "مطعم فاخر"],
                price: 350,
                rating: 4.9
            },
            {
                id: 3,
                name: "فندق موفنبيك الغردقة",
                location: "الغردقة، مصر",
                description: "فندق على البحر الأحمر مع إطلالات بانورامية على البحر وإمكانية الوصول المباشر للغوص.",
                image: "../img/hotel3.jpg",
                features: ["غوص", "مسبح داخلي", "جاكوزي", "مطاعم", "واي فاي مجاني"],
                price: 280,
                rating: 4.7
            },
            {
                id: 4,
                name: "فندق ماريوت الزمالك",
                location: "القاهرة، مصر",
                description: "فندق حديث يدمج بين التصميم العصبي والموقع المتميز في منطقة الزمالك بالقاهرة.",
                image: "../img/hotel4.jpg",
                features: ["إطلالة على النيل", "سبا", "صالة ألعاب رياضية", "واي فاي مجاني", "مطعم"],
                price: 320,
                rating: 4.6
            },
            {
                id: 5,
                name: "فندق سوفيتيل الأقصر",
                location: "الأقصر، مصر",
                description: "فندق فاخر مع فيلات خاصة وخدمة عالمية المستوى على ضفاف نهر النيل.",
                image: "../img/hotel5.jpg",
                features: ["مسبح خاص", "سبا", "جولات أثرية", "مطعم فاخر", "رحلات نيلية"],
                price: 400,
                rating: 4.8
            },
            {
                id: 6,
                name: "فندق وينتر بالاس الأقصر",
                location: "الأقصر، مصر",
                description: "فندق تاريخي أنيق بالقرب من معبد الأقصر مع سحر كلاسيكي فرعوني.",
                image: "../img/hotel6.jpg",
                features: ["مبنى تاريخي", "وسط المدينة", "مطعم فاخر", "سبا", "كونسيرج"],
                price: 380,
                rating: 4.9
            }
        ];
        
        // DOM Elements
        const hotelGrid = document.getElementById('hotelGrid');
        const bookingModal = document.getElementById('bookingModal');
        const closeModalBtn = document.getElementById('closeModal');
        const bookingForm = document.getElementById('bookingForm');
        const modalHotelName = document.getElementById('modalHotelName');
        const successMessage = document.getElementById('successMessage');
        const confirmationText = document.getElementById('confirmationText');
        
        let selectedHotel = null;
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderHotels();
            setupEventListeners();
            setDefaultDates();
        });
        
        // Render hotels to the page
        function renderHotels() {
            hotelGrid.innerHTML = '';
            
            hotels.forEach(hotel => {
                const hotelCard = document.createElement('div');
                hotelCard.className = 'hotel-card';
                hotelCard.innerHTML = `
                    <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                    <div class="hotel-details">
                        <h3 class="hotel-name">${hotel.name}</h3>
                        <div class="hotel-location">
                            <span>${hotel.location}</span>
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <p class="hotel-description">${hotel.description}</p>
                        <div class="hotel-features">
                            ${hotel.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                        </div>
                        <div class="hotel-price">
                            <div class="price"><span> / ليلة</span>${hotel.price} جنيه</div>
                            <div class="rating">★ ${hotel.rating}</div>
                        </div>
                        <button class="book-btn" data-id="${hotel.id}">
                            <i class="fas fa-calendar-check"></i> احجز الآن
                        </button>
                    </div>
                `;
                
                hotelGrid.appendChild(hotelCard);
            });
            
            // Add event listeners to book buttons
            document.querySelectorAll('.book-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const hotelId = parseInt(this.getAttribute('data-id'));
                    selectedHotel = hotels.find(hotel => hotel.id === hotelId);
                    openBookingModal(selectedHotel);
                });
            });
        }
        
        // Set up event listeners
        function setupEventListeners() {
            // Close modal when clicking X or outside modal
            closeModalBtn.addEventListener('click', closeBookingModal);
            bookingModal.addEventListener('click', function(e) {
                if (e.target === bookingModal) {
                    closeBookingModal();
                }
            });
            
            // Handle booking form submission
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                submitBooking();
            });
        }
        
        // Set default dates for check-in and check-out
        function setDefaultDates() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const formatDate = (date) => {
                return date.toISOString().split('T')[0];
            };
            
            document.getElementById('checkIn').value = formatDate(today);
            document.getElementById('checkOut').value = formatDate(tomorrow);
            document.getElementById('checkIn').min = formatDate(today);
            document.getElementById('checkOut').min = formatDate(tomorrow);
            
            // Update check-out min date when check-in changes
            document.getElementById('checkIn').addEventListener('change', function() {
                document.getElementById('checkOut').min = this.value;
                const checkOutDate = new Date(this.value);
                checkOutDate.setDate(checkOutDate.getDate() + 1);
                document.getElementById('checkOut').value = formatDate(checkOutDate);
            });
        }
        
        // Open booking modal with hotel details
        function openBookingModal(hotel) {
            modalHotelName.textContent = `احجز ${hotel.name}`;
            bookingModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close booking modal
        function closeBookingModal() {
            bookingModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Submit booking and show confirmation
        function submitBooking() {
            const guestName = document.getElementById('guestName').value;
            const guestEmail = document.getElementById('guestEmail').value;
            const checkIn = document.getElementById('checkIn').value;
            const checkOut = document.getElementById('checkOut').value;
            const guests = document.getElementById('guests').value;
            const roomType = document.getElementById('roomType').value;
            
            // Format dates for display
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedCheckIn = checkInDate.toLocaleDateString('ar-EG', options);
            const formattedCheckOut = checkOutDate.toLocaleDateString('ar-EG', options);
            
            // Calculate total nights and price
            const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
            const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
            const totalPrice = nights * selectedHotel.price;
            
            // Get room type text
            let roomTypeText = "";
            switch(roomType) {
                case "standard": roomTypeText = "غرفة عادية"; break;
                case "deluxe": roomTypeText = "غرفة ديلوكس"; break;
                case "suite": roomTypeText = "سويت"; break;
                case "executive": roomTypeText = "سويت تنفيذي"; break;
                default: roomTypeText = roomType;
            }
            
            // Get guests text
            let guestsText = "";
            switch(guests) {
                case "1": guestsText = "ضيف واحد"; break;
                case "2": guestsText = "ضيفان"; break;
                case "3": guestsText = "ثلاثة ضيوف"; break;
                case "4": guestsText = "أربعة ضيوف"; break;
                case "5+": guestsText = "خمسة ضيوف أو أكثر"; break;
                default: guestsText = guests;
            }
            
            // Create confirmation message
            const confirmationMessage = `
                <p>شكرًا لك، <strong>${guestName}</strong>!</p>
                <p>تم تأكيد حجزك في <strong>${selectedHotel.name}</strong>.</p>
                <p><strong>تفاصيل الحجز:</strong></p>
                <ul>
                    <li><strong>الفندق:</strong> ${selectedHotel.name}، ${selectedHotel.location}</li>
                    <li><strong>التواريخ:</strong> ${formattedCheckIn} إلى ${formattedCheckOut} (${nights} ليلة)</li>
                    <li><strong>الضيوف:</strong> ${guestsText}</li>
                    <li><strong>نوع الغرفة:</strong> ${roomTypeText}</li>
                    <li><strong>السعر الإجمالي:</strong> ${totalPrice} جنيه مصري</li>
                </ul>
                <p>تم إرسال بريد تأكيد إلى <strong>${guestEmail}</strong>.</p>
            `;
            
            confirmationText.innerHTML = confirmationMessage;
            
            // Show success message
            successMessage.classList.add('active');
            
            // Close modal
            closeBookingModal();
            
            // Reset form
            bookingForm.reset();
            setDefaultDates();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Auto-hide success message after 10 seconds
            setTimeout(() => {
                successMessage.classList.remove('active');
            }, 10000);
        }