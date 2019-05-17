(function () {
  let element = document.querySelector('.scroll-horizontal-container')
  element.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault()
      window.requestAnimationFrame(() => {
        element.scrollLeft += e.deltaY
      })
    }
  })
})()

var Controller = new ScrollMagic.Controller({
  vertical: false });

var tween1 = TweenMax.to('.box', .5, { 
  width: '+=800',
  height:'100%'
});

var tween2 = TweenMax.to(".box1", 0.5, {
  width: '+=800'
});

var tween5 = TweenMax.to('.box5', .5, { 
  width: '+=800',
  height:'100%'
});

var tween6 = TweenMax.to(".box6", 0.5, {
  width: '+=800'
});

var tween7 = TweenMax.to(".box7", 0.5, {
  width: '+=800'
});

var tween8 = TweenMax.to(".box8", 0.5, {
  width: '+=800'
});



// the scenes

var Scene1 = new ScrollMagic.Scene({
  triggerElement: '.box',
  duration: 600 });

Scene1.setTween(tween1).
addIndicators().
addTo(Controller);

var Scene2 = new ScrollMagic.Scene({
  triggerElement: '.box1',
  duration: 600 });

Scene2.setTween(tween2).
addIndicators().
addTo(Controller);


var Scene5 = new ScrollMagic.Scene({
  triggerElement: '.box5',
  duration: 600 });

Scene5.setTween(tween5).
addIndicators().
addTo(Controller);

var Scene6 = new ScrollMagic.Scene({
  triggerElement: '.box6',
  duration: 600 });

Scene6.setTween(tween6).
addIndicators().
addTo(Controller);

var Scene7 = new ScrollMagic.Scene({
  triggerElement: '.box7',
  duration: 600 });

Scene7.setTween(tween7).
addIndicators().
addTo(Controller);

var Scene8 = new ScrollMagic.Scene({
  triggerElement: '.box8',
  duration: 600 });

Scene8.setTween(tween8).
addIndicators().
addTo(Controller);