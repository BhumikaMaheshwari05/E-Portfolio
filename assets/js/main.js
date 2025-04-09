/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 



const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Get current theme/icon
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx-sun' : 'bx-moon';

// Apply previously selected theme
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme);
}

// Toggle theme on button click
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Save theme preference
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=scrollReveal({
	origin:'top',
	distance:'60px',
	duration:2500,
	delay:400,
})



sr.reveal(`.home__data`)
sr.reveal(`.home__handle`,{delay:700})
sr.reveal(`.home__social,.home__scroll`,{delay:900,origin:'bottom'})