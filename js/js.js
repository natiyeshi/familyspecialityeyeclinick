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
    navigator.clipboard.writeText("+251 91 086 1012")    
}

tr = 0 

function nextService(b = false) {
    if (b == false && tr > -500)
        tr -=  103  
    else if(b == true && tr < 0)
        tr += 103
    else
        return
    console.log(tr);
    services = document.querySelectorAll(".service-div-files")
    services.forEach(element => {
        element.style.transition = "transform 0.4s ease-in-out";
        element.style.transform = "translateX("+tr+"%)";
    });
}

// nextService()

c = 0

function changeLanguage(){
    if (c == 0){
        c++
        toAmharic()
    } else if(c == 1){
        toOromigna();
        c ++;

    } else{
        c = 0;
        toEnglish()
        
    }
}


languages = {
    "oro" : ["Moora ljaa baqaqsanii yaaluu fi Leensii nam-tolchee galchuu","Wal'aansa Infeekshinii Ijaa (Tiraakoomaa Dabalatee)","Wal'aansaa fi hordoffii dhukkuba GILAAKOOMAA","Hordoffii namoota dhibee Sukkaaraa fi Dhiibbaa Dhiigaa qabanii","Wal'aansa Foroforii Ijaa fi Gogiinsa ljaa","Safaraa fi Ajaja Golgituu IjaaTeessoo Naqamtee, gamoo Q/ Mikaa'elii fuuldura, katangaa xiqqoo seenee"]
    ,
    "amh" : ["የዐይን ሞራ ግርዶሽ ቀዶ-ህክምና እና በአርቴፊሻአል ሌንስ መተካት","የዐይን ኢንፌክሽን ህክምና (ትራኮማን ጨምሮ)","የግላኮማ በሽታ ህክምና እና ክትትል","የስኳር እና የደም ግፊት ታካሚዎች ክትትል","የዐይን ፎሮፎር እና ድርቀት ህክምና","የዐይን መነጸር መለካትና መግጠም እና የዖይን ጤና አጠባበቅ ምክር አገልግሎት"]
    ,
    "eng" : ["Cataract surgery and artificial lens replacement","Eye infection treatment(including tracoma)","Treatment and monitoring of glaucoma","Monitoring of diabetes and hypertension patients","Eye dandruff and dryness treatment","Eyeglass measurement and fitting and eye health care advice service"]
}


headerTopic = document.querySelector(".header-topic")
cont = document.querySelector(".cont")
headerMidPara = document.querySelector(".header-mid-para")
headerLast = document.querySelector(".header-last")
aboutTopic = document.querySelector(".about-topic")
aboutMidPara = document.querySelector(".about-mid-para")

aboutButton = document.querySelector(".about-button")
aboutMidPara = document.querySelector(".about-mid-para")

serviceTopic = document.querySelector(".service-topic")
servicMidPara = document.querySelector(".service-mid-para")
serviceTopic = document.querySelector(".service-topic")
serviceDivTopic = document.querySelectorAll(".service-div-topic")
serviceDivNotes = document.querySelectorAll(".service-div-notes")

function toAmharic(){
    cont.innerHTML = "ነቀምት ከቅዱስ ሚካኤል ቤ/ክ ፊትለፊት"
    headerMidPara.innerHTML = `ፋሚሊ እስፔሻሊቲ የዐይን ህክምና ክሊኒክ ... ዐላማችን <span class="make-white">እይታዎት</span>  ነው፡፡ 
    ከዶክተሮ ጋር መመካከር እይታዎን ለመጠበቅ አንድ እርምጃ ነው፡፡`
    headerLast.innerHTML = `<a href="#about" class="header-button">ቀጥል</a>`
    


    aboutTopic.innerHTML = `<span class="dash"></span>   <h1>ስለኛ</h1> <span class="dash"></span> `
    aboutMidPara.innerHTML = `
                                <span class="make-white">ከ 2021 ጀምሮ...</span> 
                                የተለያዮ የዐይን እና ተያያዥ ህክምናዎችን ስንሰጥ የቆየን ሲሆን  
                                የአይን ህክምና ፣በዘርፉ የተካኑ ሀኪሞቻችን ለእርሶ የአይን ደህንነት ሁሌም ይጨነቃሉ።
                            `
    aboutButton.innerHTML = "አገልግሎታችን"
    serviceTopic.innerHTML = ` <span class="dash"></span>   <h1>አገልግልታችን</h1> <span class="dash"></span>`
    servicMidPara.innerHTML = `የምንሰጣቸው አገልግሎቶች <span class="make-white">...</span>`
    serviceDivTopic.forEach(element =>{
        element.innerHTML = "አገልግሎታችን"
    })
    serviceDivNotes.forEach((element,c) =>{
        element.innerHTML = languages["amh"][c]
    })
}

function toEnglish(){
    cont.innerHTML = "Nekemte, infront of St.Michael Building"
    headerTopic.innerHTML = "<h1>Family SPECIALITY EYE CLINIC </h1>"
    headerMidPara.innerHTML = ` Talking with your <span class="make-white">doctor</span> is one step toward protecting your vision.`
    headerLast.innerHTML = `<a href="#about" class="header-button">Continue</a>`
    

    aboutTopic.innerHTML = `<span class="dash"></span>   <h1>About-us</h1> <span class="dash"></span> `
    aboutMidPara.innerHTML = `
                                From providing our patients with truly comprehensive eye exams to the diagnosis 
                                and treatment of <span class="make-white">eye diseases, </span> 
                                our team of highly skilled doctors and staff are passionate about your eye health.
                            `
    aboutButton.innerHTML = "service"
    serviceTopic.innerHTML = ` <span class="dash"></span>   <h1>Services</h1> <span class="dash"></span>`
    servicMidPara.innerHTML = `
                                We provide services regarding eye  
                                problems  <span class="make-white">including</span> 
                            `
    serviceDivTopic.forEach(element =>{
            element.innerHTML = "Service"
        })
    
    serviceDivNotes.forEach((element,c) =>{
            element.innerHTML = languages["eng"][c]
        })
}


function toOromigna(){
    cont.innerHTML = "Naqamtee, gamoo Q/ Mikaa'elii fuuldura, katangaa xiqqoo seenee"
    
    headerTopic.innerHTML = "<h1>Family SPECIALITY EYE CLINIC </h1>"
    headerMidPara.innerHTML = ` <span class="make-white">Doktora</span> kee waliin haasa’uun mul’ata kee eeguuf tarkaanfii tokko.`
    headerLast.innerHTML = `<a href="#about" class="header-button">itti fufaa</a>`
    

    aboutTopic.innerHTML = `<span class="dash"></span>   <h1>Waa'ee keenya</h1> <span class="dash"></span> `
    aboutMidPara.innerHTML = `
                    <span class="make-white">Bara 2021 ...</span>irraa eegalee wal'aansa ijaa fi 
                    kanneen kanaan walqabatan adda addaa kennaa kan 
                    turre yoo ta'u, <span class="make-white">hakiimonni</span> keenya wal'aansa ijaa 
                    irratti adda ta'an yeroo hunda nageenya ija
                    keessaniif yaaddoo qabu.
            `
    aboutButton.innerHTML = "Tajaajila keenya"
    serviceTopic.innerHTML = ` <span class="dash"></span>   <h1>Tajaajila keenya</h1> <span class="dash"></span>`
    servicMidPara.innerHTML = `
                                Tajaajilli keenya<span class="make-white">...</span>              
                            `
    serviceDivTopic.forEach(element =>{
            element.innerHTML = "Tajaajila keenya"
        })
    
    serviceDivNotes.forEach((element,c) =>{
            element.innerHTML = languages["oro"][c]
        })

}