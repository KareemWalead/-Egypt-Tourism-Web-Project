console.log('museum main.js loaded');

const bookBtnElement = document.getElementById("bookBtn");
const heroBookBtn = document.getElementById("heroBookBtn");

function handleBookingClick(e) {
    if(e) e.preventDefault();
    let name = prompt("ادخل اسمك للحجز:");
    if(name) {
        alert(`شكرًا ${name}! تم تسجيل طلب زيارتك للمتحف.`);
    } else {
        alert("تم إلغاء الحجز.");
    }
}

if(bookBtnElement){
    bookBtnElement.addEventListener("click", handleBookingClick);
} else {
    console.warn('bookBtn not found');
}

if(heroBookBtn){
    heroBookBtn.addEventListener("click", handleBookingClick);
} else {
    console.warn('heroBookBtn not found');
}

(function(){
    const artifactModal = document.getElementById('artifactModal');
    if(!artifactModal) return;
    const artClose = artifactModal.querySelector('.close-modal');
    const artImg = document.getElementById('artifactImg');
    const artTitle = document.getElementById('artifactTitle');
    const artDesc = document.getElementById('artifactDesc');
    const artStory = document.getElementById('artifactStory');

    function openArtModal(card){
        const img = card.querySelector('img');
        const title = card.querySelector('h3') ? card.querySelector('h3').textContent : '';
        const desc = card.querySelector('.card-content p') ? card.querySelector('.card-content p').textContent : '';
        const story = card.dataset.story || '';

        artImg.src = img ? img.src : '';
        artImg.alt = title;
        artTitle.textContent = title;
        artDesc.textContent = desc;
        artStory.textContent = story;

        artifactModal.classList.add('open');
        artifactModal.setAttribute('aria-hidden','false');
    }

    function closeArtModal(){
        artifactModal.classList.remove('open');
        artifactModal.setAttribute('aria-hidden','true');
    }

// delegate clicks on card or details button
   document.addEventListener('click', function(e){
     const card = e.target.closest('.card');
     if(card){
       openArtModal(card);
     }
   });

    if(artClose){
        artClose.addEventListener('click', function(e){
            closeArtModal();
        });
    } else {
        console.warn('artClose button not found');
    }
    artifactModal.addEventListener('click', function(){ closeArtModal(); });
    const inner = artifactModal.querySelector('.modal-content');
    inner && inner.addEventListener('click', function(e){ e.stopPropagation(); });

})();

// fallback initializer (previously inline in HTML)
document.addEventListener('DOMContentLoaded', function(){
  // hide detail buttons (redundant but harmless)
  document.querySelectorAll('.card .details-btn').forEach(b=>b.style.display='none');
  document.querySelectorAll('.artifacts .card').forEach(function(card){
    card.addEventListener('click', function(){
      var img = card.querySelector('img');
      var title = card.querySelector('h3') ? card.querySelector('h3').textContent : '';
      var desc = card.querySelector('.card-content p') ? card.querySelector('.card-content p').textContent : '';
      var story = card.dataset.story || '';
      var modal = document.getElementById('artifactModal');
      if(!modal) return;
      modal.querySelector('#artifactImg').src = img ? img.src : '';
      modal.querySelector('#artifactImg').alt = title;
      modal.querySelector('#artifactTitle').textContent = title;
      modal.querySelector('#artifactDesc').textContent = desc;
      modal.querySelector('#artifactStory').textContent = story;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    });
  });
  var fallbackClose = document.querySelector('#artifactModal .close-modal');
  if(fallbackClose){
    fallbackClose.addEventListener('click', function(){
      var modal = document.getElementById('artifactModal');
      if(modal){
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden','true');
      }
    });
  }
});