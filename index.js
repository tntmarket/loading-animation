function ripple(event) {
   document.body.insertAdjacentHTML(
      'afterbegin',
      (
         '<div style="left: '
         + event.x + 'px; top: ' + event.y
         + 'px;" class="ripple"></div>'
      )
   );

   var rippleElement = document.querySelector('.ripple');
   rippleElement.addEventListener('animationend', function() {
      rippleElement.remove();
   }, false);
}

setInterval(ripple.bind(window, {x: 100, y: 100}), 200);
