window.onscroll = (e)=>{
    if(scrollY < 624){
        ch(0)
    }
    else if(scrollY > 620 && scrollY < 1200){
        ch(1)
    } else if(scrollY > 1200 && scrollY < 1600){
        ch(2)
    }else if(scrollY > 1600){
        ch(3)
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


function copy(){
    navigator.clipboard.writeText("+251956954712")    
}
