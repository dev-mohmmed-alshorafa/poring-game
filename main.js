let distance = 40;
let distance1=40;
let poring = document.querySelector(`.poring`);
let playing =document.querySelector(`.playing`);
let press =document.querySelector(`.press`);
// Ferist 
window.addEventListener('keydown',function(e){
  keyR=this.document.querySelector(`.left[data-key="${e.keyCode}"]`)

  if(!keyR){
    return;
  }else if (keyR){
    keyR.classList.add('playing')
    poring.style.left =" "+distance+"px"
    distance +=10;
    if(distance>720){
      return distance=720;
    }
  }
})
// 2nd
window.addEventListener('keydown',function(e){
  keyL=this.document.querySelector(`.right[data-key="${e.keyCode}"]`)
  if(!keyL){
return; 
 }else if (keyL){
  keyL.classList.add('playing')
  poring.classList.add(".poring-left")
  poring.style.left =" "+distance+"px"
    distance -=10;
    if(distance<0){
      return distance=0;
    }
  }
})
// 3rd
window.addEventListener('keydown',function(e){
  keyT=this.document.querySelector(`.top[data-key="${e.keyCode}"]`)

  if(!keyT){
return; 
 }else if (keyT){
  keyT.classList.add('playing')
  poring.style.top =" "+distance1+"px"
  distance1 -=10;
    if(distance1<0){
      return distance1=0;
    }
  }
})
// 4th
window.addEventListener('keydown',function(e){
  keyB=this.document.querySelector(`.bottom[data-key="${e.keyCode}"]`)

  if(!keyB){
return; 
 }else if (keyB){
  keyB.classList.add('playing')
  poring.style.top =" "+distance1+"px"
  distance1 +=10;
    if(distance1>440){
      return distance1=440;
    }
  }
})

window.addEventListener('transitionend', function removeTransition(e) {
 
    if (e.propertyName !== 'transform') {
      return
    }else{
    e.target.classList.remove('playing');

  }});
