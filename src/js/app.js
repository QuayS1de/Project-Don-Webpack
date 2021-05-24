
document.addEventListener('DOMContentLoaded', function(){
        

//     VANTA.WAVES({
//       el: ".header",
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       minHeight: 100.00,
//       minWidth: 100.00,
//       scale: 1.00,
//       scaleMobile: 1.00,
//       color: 0xf0f02,
//       shininess: 52.00,
//       waveHeight: 116.00,
//       waveSpeed: 0.30,
//       zoom: 1.5
//     })


    
    $(document).on('mouseover', '.pic1', function(){
        $('.pic1').animate({
                'left': '-60px',
        })
        $('.pic1').animate({
                'left': '0px'
        }, 1000)
        console.log('----123')
    })
    
    $(document).on('mouseover', '.pic2', function(){
        $('.pic2').animate({
                'left': '60px',
        })
        $('.pic2').animate({
                'left': '0px'
        }, 1000)
    })
    
    $(document).on('mouseover', '.pic3', function(){
        $('.pic3').animate({
                'top': '60px',
        })
        $('.pic3').animate({
                'top': '0px'
        }, 1000)
    })
    
        $(document).on('mouseover', '.pic4', function(){
        $('.pic4').animate({
                'left': '-60px',
        })
        $('.pic4').animate({
                'left': '0px'
        }, 1000)
    })
    
    $(document).on('mouseover', '.pic5', function(){
        $('.pic5').animate({
                'left': '60px',
        })
        $('.pic5').animate({
                'left': '0px'
        }, 1000)
    })
    
    $(document).on('mouseover', '.pic6', function(){
        $('.pic6').animate({
                'top': '60px',
        })
        $('.pic6').animate({
                'top': '0px'
        }, 1000)
    })
    
    if(window.innerWidth < 830){
        
        
         $(document).ready(function(){

                    $(document).on('click', '.button-add', function(){
                        $('.sidebar-dws').fadeOut(150);
                        $('.sidebar-dws').addClass('btn-switch-display')

                        $('.button-add').addClass('btn-switch-display');

                        $('.button-add2').addClass('btn-switch-color');
                        $('.button-add2').toggleClass('btn-switch-display')
                        $('.button-add2').addClass('positionButtons');

                        $('.bgimage').css('filter', 'none');
                        $('.bgimage2').css('filter', 'none');

                    })


                    $(document).on('click', '.button-add2', function(){
                        $('.sidebar-dws').fadeIn(200);
                        $('.sidebar-dws').removeClass('btn-switch-display')
                        $('.button-add').removeClass('btn-switch-display');
                        $('.button-add').css('color', '#1e6025');
                        $('.button-add2').removeClass('positionButtons');
                        $('.button-add2').toggleClass('btn-switch-display');

                        $('.bgimage').css('filter', 'blur(4px)');
                        $('.bgimage2').css('filter', 'blur(4px)');
                    })
        })
    }
//     wow.init();
})

    
    
    
    console.log('---')
    console.log('----')
    console.log('-----')

    
    
    


