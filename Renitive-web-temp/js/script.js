$('.datas').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
          items:2
        },
        1200:{
            items:2
  
        }
    }
  })

  $('.team-wrapper').owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        993: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    })
  
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        993: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    })

  

  


    function chnage() {
      document.getElementsByClassName("items")[0].style.display = ""
      document.getElementsByClassName("items")[1].style.display = "none"
      document.getElementsByClassName("items")[2].style.display = "none"
      document.getElementsByClassName("items")[3].style.display = "none"
      document.getElementsByClassName("items")[4].style.display = "none"
    }

    function chnage1() {
      document.getElementsByClassName("items")[0].style.display = "none"
      document.getElementsByClassName("items")[1].style.display = "flex"
      document.getElementsByClassName("items")[2].style.display = "none"
      document.getElementsByClassName("items")[3].style.display = "none"
      document.getElementsByClassName("items")[4].style.display = "none"
    }
    function chnage2() {
      document.getElementsByClassName("items")[0].style.display = "none"
      document.getElementsByClassName("items")[1].style.display = "none"
      document.getElementsByClassName("items")[2].style.display = "flex"
      document.getElementsByClassName("items")[3].style.display = "none"
      document.getElementsByClassName("items")[4].style.display = "none"
    }
    function chnage3() {
      document.getElementsByClassName("items")[0].style.display = "none"
      document.getElementsByClassName("items")[1].style.display = "none"
      document.getElementsByClassName("items")[2].style.display = "none"
      document.getElementsByClassName("items")[3].style.display = "flex"
      document.getElementsByClassName("items")[4].style.display = "none"
    }
    function chnage4() {
      document.getElementsByClassName("items")[0].style.display = "none"
      document.getElementsByClassName("items")[1].style.display = "none"
      document.getElementsByClassName("items")[2].style.display = "none"
      document.getElementsByClassName("items")[3].style.display = "none"
      document.getElementsByClassName("items")[4].style.display = "flex"
    }
