
const button = document.querySelectorAll('.gun');
const emmo = document.querySelectorAll('.emmo')
const emmoImg = document.querySelectorAll('.emmoImg')
const line = document.querySelectorAll('.line1')
const botImg = document.querySelectorAll(".botImg")
const bot = document.querySelectorAll(".bot")
const bot1 = document.querySelectorAll(".bot1")
const bot2 = document.querySelectorAll(".bot2")
const bot3 = document.querySelectorAll(".bot3")
//---------moves---------------------

function animationSetShot(Element,x){
    const randomNumber = Math.floor(Math.random() * 15) + 1;
    Element[x].style.animation=`Shot${randomNumber}`
    Element[x].style.animationDuration='0.5s'
}

function animationSetMovie(Element,x){
    const randomNumber = Math.floor(Math.random() * 15) + 1;
    Element[x].style.animation=`Move${randomNumber}`
    Element[x].style.animationDuration='3.2s'
}

//----------------------------------
for(let x = 0 ; x<4 ; x++){
    button[x].addEventListener('click',function(){
    var count1 = document.querySelectorAll('.gun')

    if(x===0){
        animationSetShot(emmo,x);
        
    }else if(x===1){
        animationSetShot(emmo,x)

    }else if(x===2){
        animationSetShot(emmo,x)
    
    }else if(x===3){
        animationSetShot(emmo,x)

    }
  })
}


    
//------------------------------------------------------


//---atlz

setInterval(() => {
    //const numberX = parseInt(numberGun);
    const botPosition1  = bot[0].getBoundingClientRect();
    const botPosition2  = bot[1].getBoundingClientRect();
    const botPosition3  = bot[2].getBoundingClientRect();
    const botPosition4  = bot[3].getBoundingClientRect();
    const botPositionZ5 = bot[4].getBoundingClientRect();
    const botPositionZ6 = bot[5].getBoundingClientRect();
    const botPositionZ7 = bot[6].getBoundingClientRect();
    const botPositionZ8 = bot[7].getBoundingClientRect();

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

    var count1 = document.querySelectorAll('.gun')
    
    if(emmoPosition1.bottom<botPosition1.bottom){
        bot[0].remove()
        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`

        emmoImg[0].style.display='none'
        setTimeout(() => {
            emmoImg[0].style.display='flex'
        }, 600);
        console.log("on")

    }else if(emmoPosition1.bottom<botPosition2.bottom){
        bot[1].remove()
        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`

        emmoImg[0].style.display='none'
        setTimeout(() => {
            emmoImg[0].style.display='flex'
        }, 600);
        console.log("on")

        
    }else if(emmoPosition1.bottom<botPosition3.bottom){
        bot[2].remove()
        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`

        emmoImg[0].style.display='none'
        setTimeout(() => {
            emmoImg[0].style.display='flex'
        }, 600);
        console.log("on")
        
    }else if(emmoPosition1.bottom<botPosition4.bottom){
        bot[3].remove()
        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`

        emmoImg[0].style.display='none'
        setTimeout(() => {
            emmoImg[0].style.display='flex'
        }, 600);
        console.log("on")

    }else if(emmoPosition1.bottom<botPositionZ5.bottom){
        bot[4].remove()
        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`

        emmoImg[0].style.display='none'
        setTimeout(() => {
            emmoImg[0].style.display='flex'
        }, 600);
        console.log("on")

    }else if(emmoPosition1.bottom<botPositionZ6.bottom){
        bot[5].remove()
        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`

        emmoImg[0].style.display='none'
        setTimeout(() => {
            emmoImg[0].style.display='flex'
        }, 600);
        console.log("on")

    }else if(emmoPosition1.bottom<botPositionZ7.bottom){
        bot[6].remove()
        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`

        emmoImg[0].style.display='none'
        setTimeout(() => {
            emmoImg[0].style.display='flex'
        }, 600);
        console.log("on")

    }else if(emmoPosition1.bottom<botPositionZ8.bottom){
        bot[7].remove()
        var countt1 = parseInt(count1[0].innerHTML)
        count1[0].innerHTML=`${countt1+1}`

        emmoImg[0].style.display='none'
        setTimeout(() => {
            emmoImg[0].style.display='flex'
        }, 600);
        console.log("on")
    }

    //======================================================
    if(emmoPosition2.bottom<botPosition5.bottom){
        bot1[0].remove()
        var countt1 = parseInt(count1[1].innerHTML)
        count1[1].innerHTML=`${countt1+1}`


        emmoImg[1].style.display='none'
        setTimeout(() => {
            emmoImg[1].style.display='flex'
        }, 600);
        console.log("on")
        
    }else if(emmoPosition2.bottom<botPosition6.bottom){
        bot1[1].remove()
        var countt1 = parseInt(count1[1].innerHTML)
        count1[1].innerHTML=`${countt1+1}`

        emmoImg[1].style.display='none'
        setTimeout(() => {
            emmoImg[1].style.display='flex'
        }, 600);
        console.log("on")

        
    }else if(emmoPosition2.bottom<botPosition7.bottom){
        bot1[2].remove()
        var countt1 = parseInt(count1[1].innerHTML)
        count1[1].innerHTML=`${countt1+1}`

        emmoImg[1].style.display='none'
        setTimeout(() => {
            emmoImg[1].style.display='flex'
        }, 600);
        console.log("on")

        
    }else if(emmoPosition2.bottom<botPosition8.bottom){
        bot1[3].remove()
        var countt1 = parseInt(count1[1].innerHTML)
        count1[1].innerHTML=`${countt1+1}`

        emmoImg[1].style.display='none'
        setTimeout(() => {
            emmoImg[1].style.display='flex'
        }, 600);
        console.log("on")
    }

    //======================================================
    if(emmoPosition3.bottom<botPosition9.bottom){
        bot2[0].remove()
        var countt1 = parseInt(count1[2].innerHTML)
        count1[2].innerHTML=`${countt1+1}`

        emmoImg[2].style.display='none'
        setTimeout(() => {
            emmoImg[2].style.display='flex'
        }, 600);
        console.log("on")
        
    }else if(emmoPosition3.bottom<botPosition10.bottom){
        bot2[1].remove()
        var countt1 = parseInt(count1[2].innerHTML)
        count1[2].innerHTML=`${countt1+1}`

        emmoImg[2].style.display='none'
        setTimeout(() => {
            emmoImg[2].style.display='flex'
        }, 600);
        console.log("on")

        
    }else if(emmoPosition3.bottom<botPosition11.bottom){
        bot2[2].remove()
        var countt1 = parseInt(count1[2].innerHTML)
        count1[2].innerHTML=`${countt1+1}`

        emmoImg[2].style.display='none'
        setTimeout(() => {
            emmoImg[2].style.display='flex'
        }, 600);
        console.log("on")
        
    }else if(emmoPosition3.bottom<botPosition12.bottom){
        bot2[3].remove()
        var countt1 = parseInt(count1[2].innerHTML)
        count1[2].innerHTML=`${countt1+1}`

        emmoImg[2].style.display='none'
        setTimeout(() => {
            emmoImg[2].style.display='flex'
        }, 600);
        console.log("on")
    }
    //======================================================
    if(emmoPosition4.bottom<botPosition13.bottom){
        bot3[0].remove()
        var countt1 = parseInt(count1[3].innerHTML)
        count1[3].innerHTML=`${countt1+1}`

        emmoImg[3].style.display='none'
        setTimeout(() => {
            emmoImg[3].style.display='flex'
        }, 600);
        console.log("on")
        
        
    }else if(emmoPosition4.bottom<botPosition14.bottom){
        bot3[1].remove()
        var countt1 = parseInt(count1[3].innerHTML)
        count1[3].innerHTML=`${countt1+1}`

        emmoImg[3].style.display='none'
        setTimeout(() => {
            emmoImg[3].style.display='flex'
        }, 600);
        console.log("on")
        
    }else if(emmoPosition4.bottom<botPosition15.bottom){
        bot3[2].remove()
        var countt1 = parseInt(count1[3].innerHTML)
        count1[3].innerHTML=`${countt1+1}`

        emmoImg[3].style.display='none'
        setTimeout(() => {
            emmoImg[3].style.display='flex'
        }, 600);
        console.log("on")
        
    }else if(emmoPosition4.bottom<botPosition16.bottom){
        bot3[3].remove()
        var countt1 = parseInt(count1[3].innerHTML)
        count1[3].innerHTML=`${countt1+1}`

        emmoImg[3].style.display='none'
        setTimeout(() => {
            emmoImg[3].style.display='flex'
        }, 600);
        console.log("on")
    }

}, 50);



const BotMovie =(TimeBot)=>{

    
    const times = [3000,2900,2800,2000,1000];
    const times2 = [3000,2900,2800,2000,1000];
    const times3 = [3000,2900,2800,2000,1000];

setInterval(() => {
    var count1 = document.querySelectorAll('.gun')
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    animationSetMovie(bot,randomNumber-1)
    const timeNumber= parseInt(count1[0].innerHTML);


}, 1400 )



setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    animationSetMovie(bot1,randomNumber-1)
    
}, 1900);
setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    animationSetMovie(bot2,randomNumber-1)
    
}, 1800);
setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    animationSetMovie(bot3,randomNumber-1)
    
}, 1600);

}



BotMovie()

