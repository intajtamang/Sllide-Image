const imageslide=document.querySelector('.image-slide');
const imgaeImage=document.querySelector('.image-slide img');

//buttons
const prev=document.querySelector('#Prev');
const next=document.querySelector('#Next');

//counter
let counter=1;
const size=imgaeImage[0].clientWidth;

imageslide.transform.transform='translateX('+(-size * counter) +'px)';

//button listener
next.addEventListener('click', () =>{
    if(counter >=imageImage.length -1) return;
    imageslide.style.transform = "transform 0.4s ease-in-out";
    counter++;
    imageslide.transform.transform='translateX('+(-size * counter) +'px)';
});

prev.addEventListener('click', () =>{
    if(counter <=0) return;
    imageslide.style.transform = "transform 0.4s ease-in-out";
    counter--;
    imageslide.transform.transform='translateX('+(-size * counter) +'px)';
});

imageslide.addEventListener('transitioned', ()=>{
    
    if(imageImage[counter].id==='last-clone'){
        imageslide.style.transition="none";
        counter = imageImage.length -2;
        imageslide.transform.transform='translateX('+(-size * counter) +'px)';
    }
     
    if(imageImage[counter].id==='first-clone'){
        imageslide.style.transition="none";
        counter = imageImage.length -counter;
        imageslide.transform.transform='translateX('+(-size * counter) +'px)';
    }
});