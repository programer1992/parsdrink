document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    // تابع نمایش تصویر بر اساس ایندکس
    function showImage(index) {
        if (index >= galleryItems.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = galleryItems.length - 1;
        } else {
            currentIndex = index;
        }

        const item = galleryItems[currentIndex];
        modalImg.src = item.dataset.src;
        captionText.innerHTML = item.dataset.alt;
    }

    // باز کردن مودال
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            showImage(index);
        });
    });

    // دکمه بعدی و قبلی
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex - 1);
    });

    // بستن مودال
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // پیمایش با کیبورد
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') showImage(currentIndex + 1); // در حالت RTL جهت ها متفاوت است
            if (e.key === 'ArrowRight') showImage(currentIndex - 1);
            if (e.key === 'Escape') modal.style.display = 'none';
        }
    });

    // بستن با کلیک روی فضای خالی
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});