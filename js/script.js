var menuContainer = document.getElementById('menu-container');

window.onscroll = function(e){
  if(window.scrollY > 10){
    menuContainer.classList.add('floatingNav');
    // console.log('hi');
  }else {
    menuContainer.classList.remove('floatingNav');
  }
}

/* when checkbox is clicked, container id is added an overlay class */

 function dim(e){
   var overlay = document.getElementById('overlay');
   overlay.classList.toggle('overlay');

}

//
// var checkbox = document.querySelector("input[name=checkbox]");
// checkbox.addEventListener('change',function(){
//
// });
