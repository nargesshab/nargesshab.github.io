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



var tween = TweenMax.to('.box', .5, { 
  width: '+=800',
  height:'100%'
});

var tween1 = TweenMax.to(".box1", 0.5, {
  width: '+=800'
});



var Controller = new ScrollMagic.Controller({
  vertical: false });


var Scene = new ScrollMagic.Scene({
  triggerElement: '.box',
  duration: 600 });

Scene.setTween(tween).
addIndicators().
addTo(Controller);

var Scene1 = new ScrollMagic.Scene({
  triggerElement: '.box1',
  duration: 600 });

Scene1.setTween(tween1).
addIndicators().
addTo(Controller);

