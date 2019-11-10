

const homePage = () => {

  const contactPage = document.querySelector('.contact');
  const aboutPage = document.querySelector('.about_main');
  const contactButton = document.querySelector('.about_link--contact');
  const aboutButton = document.querySelector('.about_link--about');
  const allPages = document.querySelectorAll('.page');
  
  
  // Toggle between pages (display/hide pages from Ui)
  const functt = (page) => {
    return () => {
      allPages.forEach(current  => {
        current.classList.remove('display');
      })
      page.classList.toggle('display',true);
      
    }    
  } 
  
  // EventListner for Home navigation buttons 
  contactButton.addEventListener('click', functt(contactPage));
  aboutButton.addEventListener('click', functt(aboutPage));
}

homePage();



