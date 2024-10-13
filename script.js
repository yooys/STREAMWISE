document.getElementById('genre-select').addEventListener('change', function(event) {
    const selectedGenres = Array.from(this.selectedOptions).map(option => option.value);
    const items = document.querySelectorAll('.content-item');

    items.forEach(item => {
        const itemGenres = item.classList;
        const matches = selectedGenres.every(genre => itemGenres.contains(genre));

        if (matches) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    });
});

// 모달 열기 및 닫기 기능
const items = document.querySelectorAll('.content-item');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');

items.forEach(item => {
    item.addEventListener('click', function() {
        modalTitle.textContent = this.getAttribute('data-title');
        modalDescription.textContent = this.getAttribute('data-description');
        modal.style.display = 'block';
    });
});

// 모달 닫기
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});









