
$(window).ready(function() {
    $(window).scrollTop(0)
})


$('.goto-top').click(function() {
    $(window).ready(function() {
        $(window).scrollTop(0)
    })
    
})


$(window).scroll(function() {

    if($(window).scrollTop() >= 600){
        console.log('working')
            $('.goto-top').addClass('d-block')
            $('.goto-top').removeClass('d-none')
        
        
        }else{
        
            $('.goto-top').removeClass('d-block')
            $('.goto-top').addClass('d-none')
        
            

        }

})




window.addEventListener('scroll', function() {				
				
    let content = document.querySelectorAll(".anim")				
    content.forEach(function(e){				
    let contentposition = e.getBoundingClientRect().top;				
    let screenposition = window.innerHeight /1.7;				
    if (contentposition < screenposition){

        if(e.classList.contains('sec')){

            e.classList.add("show")				
            e.classList.remove("sec")

        } else if(e.classList.contains('service-right-hide')){
            console.log('working')
            e.classList.add("service-right-show")
            e.classList.remove("service-right-hide")
        }else if(e.classList.contains('service-left-hide')){
            console.log('working')
            e.classList.add("service-left-show")
            e.classList.remove("service-left-hide")
        }
    				
    				
    }				
    })				
                    
    })				