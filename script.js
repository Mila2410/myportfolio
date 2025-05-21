function toggleMenu() {
const navLinks = document.getElementById('nav-links').querySelector('ul');
navLinks.classList.toggle('show');
}

//-------------------------------------------------------------------

// STRELICA, -->
 const toTopBtn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });




//-------------------------------------------------------------------

//jezici
//PREVOD EN/DE
function setLanguage(lang) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });
}

//-------------------------------------------------------------------

// TEKST se sam ispisuje

function typeWriter(element, text, speed = 50) {
let i = 0;
 element.textContent = ''; // Brise prethodni tekst!
function typing() {
if (i < text.length) {
element.textContent += text.charAt(i);
i++;
setTimeout(typing, speed);
}
}
typing();
}

// Observer callback
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const el = entry.target;
const lang = document.documentElement.lang || 'en';
const text = el.dataset[lang] || el.dataset.en;
typeWriter(el, text);
observer.unobserve(el); // Zaustavi dalje posmatranje
}
});
}, {
  threshold: 0.5 // Pokreni kada je 50% elementa vidljivo
});

// Pronađi element i pokreni observer
const typewriterText = document.getElementById('typewriter-text');
if (typewriterText) {
observer.observe(typewriterText);
}





//-------------------------------------------------------------------

//za filtere i otvaranje projekata
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// FILTER funkcionalnost
filterButtons.forEach(button => {
button.addEventListener('click', () => {
filterButtons.forEach(btn => btn.classList.remove('active'));
button.classList.add('active');

const filter = button.getAttribute('data-filter');

portfolioItems.forEach(item => {
const category = item.getAttribute('data-category');
if (filter === 'all' || category === filter) {
item.classList.remove('hide');
} else {
item.classList.add('hide');
}
});
});
});

//-------------------------------------------------------------------


// Dugmad koja otvaraju SLIKU-Projekti!!!
document.querySelectorAll('.show-lightbox').forEach(button => {
  button.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const imgSrc = button.getAttribute('data-img');

    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
  });
});

// Zatvori kad klikneš na X projekti, slike, ansehen, about
document.querySelector('#lightbox .close-btn').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});



//-------------------------------------------------------------------

//ulazna animacija kad skrolam, kontakt

function revealColumns() {
const columns = document.querySelectorAll('.contact-column');
const windowHeight = window.innerHeight;

columns.forEach(col => {
const colTop = col.getBoundingClientRect().top;
if (colTop < windowHeight - 100) {
col.classList.add('visible');
}
});
}

window.addEventListener('scroll', revealColumns);
window.addEventListener('load', revealColumns);


//-------------------------------------------------------------------



//Kundenstimme
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
testimonials[currentTestimonial].classList.remove('active');
currentTestimonial = (currentTestimonial + 1) % testimonials.length;
testimonials[currentTestimonial].classList.add('active');
}

// Promijeni testimonial svakih 5 sekundi
setInterval(showNextTestimonial, 5000);


//-------------------------------------------------------------------

// Animacija završena nakon 3 sekunde
const ballsSection = document.querySelector('.balls-section');
let animacijaPokrenuta = false;

// Kad stranica učita, resetuj lopte
window.addEventListener('load', () => {
document.querySelector('.green').style.animation = 'none';
document.querySelector('.purple').style.animation = 'none';
});

// Kad dođeš do sekcije, pokreni sve:
window.addEventListener('scroll', () => {
const rect = ballsSection.getBoundingClientRect();
if (rect.top < window.innerHeight && !animacijaPokrenuta) {
animacijaPokrenuta = true;

// VRATI animaciju loptama
document.querySelector('.green').style.animation = '';
document.querySelector('.purple').style.animation = '';

// Postojeći kod (ništa se ne dira)
setTimeout(() => {
showStars();
shakeScreen();
document.querySelector('.cards-container').style.opacity = '1';
document.querySelector('.green').classList.add('hidden');
document.querySelector('.purple').classList.add('hidden');
}, 3000);
}
});


// Zvjezdice
function showStars() {
const section = document.querySelector('.balls-section');
for (let i = 0; i < 8; i++) {
const star = document.createElement('div');
star.classList.add('star');
star.innerHTML = '★';
const angle = (i / 8) * 2 * Math.PI;
const radius = 80;
star.style.left = `calc(50% + ${radius * Math.cos(angle)}px)`;
star.style.top = `calc(50% + ${radius * Math.sin(angle)}px)`;
section.appendChild(star);

setTimeout(() => {
star.style.opacity = '1';
}, 100);

setTimeout(() => {
star.style.opacity = '0';
section.removeChild(star);
}, 800);
}
}

// Shake efekt
function shakeScreen() {
const section = document.querySelector('.balls-section');
section.style.animation = 'shake 0.5s';
setTimeout(() => {
section.style.animation = '';
},6800);
}


// MODAL, certifikati, lebenslauf
document.getElementById('open-zeugnisse').onclick = () => {
document.getElementById('zeugnisse-modal').style.display = 'block';
};
document.getElementById('open-lebenslauf').onclick = () => {
document.getElementById('lebenslauf-modal').style.display = 'block';
};

// Modal close
function closeModal(id) {
document.getElementById(id).style.display = 'none';
}

//------------------------------------------------------------------- Naslovi dolaze od gore 20px
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
origin: 'top',
distance: '20px',
duration: 2000,
delay: 200,
//reset: true
});

sr.reveal('.intro,  .about-section h2,  .contact-section h2, .skills__text, .mila, .linien_liste , .projects-section-header, .projects-grid, .zertifikaten, .contact,  .footer',{}); 
sr.reveal('.intro,  .about__subtitle, .about__text, .skills__img', {delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== SCROLL REVEAL ANIMATION =====*/
const sn = ScrollReveal({
origin: 'top',
distance: '5px',
duration: 2000,
delay: 200,
//     reset: true
});







//  Projekti da vidim tekst, sliku, details, ansehen--------------------------------------

 function openInfoView(imgSrc, description) {
  const img = document.getElementById('infoViewImage');
  const text = document.getElementById('infoViewText');
  const infoView = document.getElementById('imgInfoView');

  if (imgSrc) {
    img.src = imgSrc;
    img.style.display = 'block';
  } else {
    img.src = '';
    img.style.display = 'none';
  }

  text.innerHTML = description;
  infoView.style.display = 'flex';
}

function closeInfoView() {
  document.getElementById('imgInfoView').style.display = 'none';
  document.getElementById('infoViewImage').src = '';
  document.getElementById('infoViewText').innerText = '';
}

window.addEventListener('click', function(event) {
  const infoView = document.getElementById('imgInfoView');
  if (event.target === infoView) {
    closeInfoView();
  }
});



 