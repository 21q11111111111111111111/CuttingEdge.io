  // Booking Modal Functions
        function openBookingModal() {
            document.getElementById('bookingModal').style.display = 'flex';
        }

        function closeBookingModal() {
            document.getElementById('bookingModal').style.display = 'none';
        }

        function submitBooking(event) {
            event.preventDefault();
            alert('Спасибо за запись! Мы свяжемся с вами в ближайшее время.');
            closeBookingModal();
        }

        // Newsletter Subscription
        function subscribeNewsletter(event) {
            event.preventDefault();
            const email = event.target.querySelector('input[type="email"]').value;
            alert(`Спасибо за подписку! Мы будем отправлять новости на ${email}`);
            event.target.reset();
        }

        // Testimonial Navigation
        let currentTestimonial = 0;
        const testimonials = [
            {
                quote: '«Лучший салон, в котором я когда-либо была! Мастера знают свое дело и всегда готовы помочь.»',
                author: 'Анна Петрова',
                position: 'Директор, Beauty Co.'
            },
            {
                quote: '«Профессиональный подход и отличное качество услуг. Рекомендую всем!»',
                author: 'Мария Иванова',
                position: 'Стилист'
            },
            {
                quote: '«Уютная атмосфера и внимательное отношение к клиентам. Всегда довольна результатом!»',
                author: 'Елена Смирнова',
                position: 'Дизайнер'
            }
        ];

        function updateTestimonial() {
            const testimonial = testimonials[currentTestimonial];
            document.querySelector('.testimonial-quote').textContent = testimonial.quote;
            document.querySelector('.testimonial-author').textContent = testimonial.author;
            document.querySelector('.testimonial-position').textContent = testimonial.position;
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial();
        }

        function previousTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Close modal when clicking outside
        document.getElementById('bookingModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeBookingModal();
            }
        });

        // Form validation and feedback
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('blur', function() {
                if (this.required && !this.value) {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = '#ddd';
                }
            });
        });

        // Auto-set minimum date for booking to today
        document.addEventListener('DOMContentLoaded', function() {
            const dateInput = document.querySelector('input[type="date"]');
            if (dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.setAttribute('min', today);
            }
        });