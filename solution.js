// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementByClassName("bar").style.height = "2px";
//   } 
// }

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".bar").classList.add("barscroll");
        document.querySelector(".logo").classList.add("logoscroll");
        document.querySelector(".compname").classList.add("compnamescroll");
      } else {
        document.querySelector(".bar").classList.remove("barscroll");
        document.querySelector(".logo").classList.remove("logoscroll");
        document.querySelector(".compname").classList.remove("compnamescroll");
      }
    };

// var counter = 1;
// setInterval(function()  {
//     document.getElementById('radio'+ counter).checked = true;
//     counter++; 
//     if(counter>4){
//        counter=1
//     }
// }, 200000);