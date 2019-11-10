

const scrollAnim = () => {

  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-quart',
    delay: 0,
  });
}

scrollAnim();


const slideCard = () => {

    new Glide('.glide').mount()
    
    var select = document.querySelector('.glide__slide')
    var glide;
        if(screen.width >= 1400){
         glide = new Glide('.glide', {
            type: 'carousel',
            perView: 3.3,
            startAt : 0,
            gap : 20,
            //   autoplay : 3000
        })

      } else if(screen.width >=900) {
        glide = new Glide('.glide', {
          type: 'carousel',
          perView: 2.3,
          startAt : 0,
          // gap : 100,
          //   autoplay : 3000
        })
      }else {
        glide = new Glide('.glide', {
          type: 'carousel',
          perView: 1.5,
          startAt : 0,
          // gap : 100,
          //   autoplay : 3000
      })
      }

  
    select.addEventListener('change', function (event) {
      glide.update({
        type: event.target.value
      })
    })
    
    glide.mount()
  }

  slideCard()



