/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


// global variable to hold the navbar Unordered List
const navUl = document.querySelector('#navbar__list');

// Actual menu items
let navMenuItems = "";

// Array to represent the various page sections
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

    // helper function to determine if a section is in the viewport
    const isInViewPort = (section) => {
        // get the viewport bounding coordinates
        let rect = section.getBoundingClientRect();

        // get window height
        let viewportHeight = window.innerHeight;

        var is_in_viewport = false;
        

        // if the section has made it more than 30% into the viewport return true
        if(rect.top < (viewportHeight * 7/10) && rect.bottom >= (viewportHeight * 7/10)){
            is_in_viewport = true;
        }
        
        return is_in_viewport;
    }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const initNav = () => {
    sections.forEach((section)=>{
        // append individual links to navigation that will be added to the nav ul
        navMenuItems += `<li><a class = "menu__link" href ="#${section.id}">${ section.dataset.nav }</a></li>`;
    });


    // add the navigation links to the navbar UL 
    navUl.innerHTML = navMenuItems;
}

// display the navbar
initNav();

// Add class 'active' to section when near top of viewport

const activateSection = () => {
    sections.forEach((section)=>{
        // get the section bounding rectangle to determine if the section is in the viewport
        if(isInViewPort(section)){
            section.classList.add('your-active-class');
            section.style.cssText = 'box-shadow: 0px 0px 10px yellow';
        }else{
            section.classList.remove('your-active-class');
            section.style.cssText = 'box-shadow: none';
        }
    });
}

// add event listener to watch for user scrolls so as to activate sections
document.addEventListener('scroll', activateSection);

// Scroll to anchor ID using scrollTO event

// query all the list items in the nav ul and add an event-listener to listen for clicks   
navUl.querySelectorAll('li').forEach((menu_item) => {
    let anchor = menu_item.querySelector('a');
    
    anchor.addEventListener('click', (e) => {
        // prevent default action after clicking navbar links
        e.preventDefault();
        
        // scroll to the top of section
        window.scrollTo({
            top: document.querySelector(anchor.hash).offsetTop - 80,
            left: 0,
            behavior: 'smooth'
        });
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


