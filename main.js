
const button = document.querySelectorAll('.gun');
const emmo = document.querySelectorAll('.emmo')
const line = document.querySelectorAll('.line1')
const bot = document.querySelectorAll(".bot")
const bot1 = document.querySelectorAll(".bot1")
const bot2 = document.querySelectorAll(".bot2")
const bot3 = document.querySelectorAll(".bot3")
//---------moves---------------------

function animationSetShot(Element,x){
    const randomNumber = Math.floor(Math.random() * 15) + 1;
    console.log(randomNumber)
    Element[x].style.animation=`Shot${randomNumber}`
    Element[x].style.animationDuration='0.5s'
}

function animationSetMovie(Element,x){
    const randomNumber = Math.floor(Math.random() * 15) + 1;
    console.log(randomNumber)
    Element[x].style.animation=`Move${randomNumber}`
    Element[x].style.animationDuration='3.2s'
}

//----------------------------------
for(let x = 0 ; x<4 ; x++){
    button[x].addEventListener('click',function(){
    var count1 = document.querySelectorAll('.gun')

    if(x===0){
       // console.log('gun1')
        animationSetShot(emmo,x);

        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`
        
    }else if(x===1){
        console.log('gun2')
        animationSetShot(emmo,x)

        var countt1 = parseInt(count1[1].innerHTML)
        count1[1].innerHTML=`${countt1+1}`
    }else if(x===2){
        console.log('gun3')
        animationSetShot(emmo,x)
        
        var countt1 = parseInt(count1[2].innerHTML)
        count1[2].innerHTML=`${countt1+1}`
    }else if(x===3){
        console.log('gun4')
        animationSetShot(emmo,x)
        
        var countt1 = parseInt(count1[3].innerHTML)
        count1[3].innerHTML=`${countt1+1}`
    }
  })
}


/*function...
const addAtributeClass = (Element) =>{
    const atributo = document.createAttribute('class')
    atributo.value = 'bot'
    Element.setAttributeNode(atributo)
}*/
//------------------------------------------------------

//---atlz

setInterval(() => {
    //const numberX = parseInt(numberGun);
    const botPosition1  = bot[0].getBoundingClientRect();
    const botPosition2  = bot[1].getBoundingClientRect();
    const botPosition3  = bot[2].getBoundingClientRect();
    const botPosition4  = bot[3].getBoundingClientRect();
    const emmoPosition1 = emmo[0].getBoundingClientRect();
    //------------------------------------------------
    
    const botPosition5  = bot1[0].getBoundingClientRect();
    const botPosition6  = bot1[1].getBoundingClientRect();
    const botPosition7  = bot1[2].getBoundingClientRect();
    const botPosition8  = bot1[3].getBoundingClientRect();
    const emmoPosition2 = emmo[1].getBoundingClientRect();
    
    
    const botPosition9  = bot2[0].getBoundingClientRect();
    const botPosition10  = bot2[1].getBoundingClientRect();
    const botPosition11  = bot2[2].getBoundingClientRect();
    const botPosition12  = bot2[3].getBoundingClientRect();
    const emmoPosition3 = emmo[2].getBoundingClientRect();
    //------------------------------------------------
    const botPosition13  = bot3[0].getBoundingClientRect();
    const botPosition14  = bot3[1].getBoundingClientRect();
    const botPosition15  = bot3[2].getBoundingClientRect();
    const botPosition16  = bot3[3].getBoundingClientRect();
    const emmoPosition4 = emmo[3].getBoundingClientRect();
    //------------------------------------------------
    
    if(emmoPosition1.bottom<botPosition1.bottom){
        bot[0].remove()

    }else if(emmoPosition1.bottom<botPosition2.bottom){
        bot[1].remove()
        
    }else if(emmoPosition1.bottom<botPosition3.bottom){
        bot[2].remove()
        
    }else if(emmoPosition1.bottom<botPosition4.bottom){
        bot[3].remove()
    }

    //======================================================
    if(emmoPosition2.bottom<botPosition5.bottom){
        bot1[0].remove()
        
    }else if(emmoPosition2.bottom<botPosition6.bottom){
        bot1[1].remove()
        
    }else if(emmoPosition2.bottom<botPosition7.bottom){
        bot1[2].remove()
        
    }else if(emmoPosition2.bottom<botPosition8.bottom){
        bot1[3].remove()
    }

    //======================================================
    if(emmoPosition3.bottom<botPosition9.bottom){
        bot2[0].remove()
        
    }else if(emmoPosition3.bottom<botPosition10.bottom){
        bot2[1].remove()
        
    }else if(emmoPosition3.bottom<botPosition11.bottom){
        bot2[2].remove()
        
    }else if(emmoPosition3.bottom<botPosition12.bottom){
        bot2[3].remove()
    }
    //======================================================
    if(emmoPosition4.bottom<botPosition13.bottom){
        bot3[0].remove()
        
    }else if(emmoPosition4.bottom<botPosition14.bottom){
        bot3[1].remove()
        
    }else if(emmoPosition4.bottom<botPosition15.bottom){
        bot3[2].remove()
        
    }else if(emmoPosition4.bottom<botPosition16.bottom){
        bot3[3].remove()
    }

}, 50);



const BotMovie =()=>{

    const times = [2000,2003,2006,2009];
    const times2 = [1000,1003,1006,1009];
    const times3 = [400,603,806,909];

setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    animationSetMovie(bot,randomNumber-1)
    console.log(randomNumber)
}, 2300);
setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    animationSetMovie(bot1,randomNumber-1)
    console.log(randomNumber)
}, 2000);
setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    animationSetMovie(bot2,randomNumber-1)
    console.log(randomNumber)
}, 2800);
setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    animationSetMovie(bot3,randomNumber-1)
    console.log(randomNumber)
}, 2600);

}

