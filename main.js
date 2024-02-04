'use strict';

const Btn = document.getElementById('Btn');
let   s   = true;


function playJump() {
  let Jump = document.getElementById('Jump');
  Jump.currentTime = 0,
  Jump.play();
}

Btn.addEventListener (
  "click",
  function jumping() {
    if(s == true) {
      s = false;
      playJump();
      anime({
        targets: '.container > :not(.shadow)', // '.shadow'クラスを除外します
        keyframes: [
            {translateY: -500, duration: 400, easing:'easeOutQuad'},
            {translateY: 0, duration: 400, easing:'easeInQuad'}
        ]
      });
      anime({
        targets: '.shadow',
        keyframes: [
            {translateX: 500, duration: 400, easing:'easeOutQuad'},
            {translateX: 0, duration: 400, easing:'easeInQuad'}
        ],
        complete: function() {
          s = true;
        }
      });
    }
  }
);

