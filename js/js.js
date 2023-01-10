window.onscroll = (e)=>{
    let call = document.querySelector(".top-contact")

    if(scrollY < 624){
        ch(0)
        call.style.opacity = "0.6"
    }else{
        call.style.opacity = "1"
        if(scrollY > 620 && scrollY < 1200){
            ch(1)
        } else if(scrollY > 1200 && scrollY < 1600){
            ch(2)
        }else if(scrollY > 1600){
            ch(3)
        }
    }
}

function ch(num){
    link =  document.querySelectorAll(".link")

    link.forEach((element,n) => {

        if(num != n){
            element.style.fill = "white"
            
        }
        else{    
            element.style.fill = "black"

        }
    });


}


function copy(val){
    navigator.clipboard.writeText(val)    
}
