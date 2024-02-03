'use strict';

const Btn = document.getElementById('Btn');
let   s   = true;

// let jump = anime({
//   targets: '.container > :not(.shadow)', // '.shadow'クラスを除外します
//   keyframes: [
//       {translateY: -500, duration: 400, easing:'easeOutQuad'},
//       {translateY: 0, duration: 400, easing:'easeInQuad'}
//   ],
// });

// let jumps = anime({
//   targets: '.shadow',
//   keyframes: [
//       {translateX: 500, duration: 400, easing:'easeOutQuad'},
//       {translateX: 0, duration: 400, easing:'easeInQuad'}
//   ]
// });


// let animation2 = anime({
//   targets: '.l-hand, .r-foot',
//   translateY: ['-3px', '3px'],
//   duration: 300,
//   easing: 'easeInOutSine',
//   direction: 'alternate',
//   loop: true,
//   autoplay: true,
// });


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
      playJump();
    }
  }
);

// function handleKeyUp(e){
//   if(e.keyCode == 32){
//       document.body.removeEventListener('keyup', handleKeyUp); // スペースキーが押されたときにイベントリスナーを削除します
//       // (animation2, animation3).pause(); // スペースキーが押されたときにアニメーションを一時停止します
//       anime({
//           targets: '.container > :not(.shadow)', // '.shadow'クラスを除外します
//           keyframes: [
//               {translateY: -500, duration: 400, easing:'easeOutQuad'},
//               {translateY: 0, duration: 400, easing:'easeInQuad'}
//           ],
//           complete: function() { // アニメーションが完了したら
//             // (animation2, animation3).play(); // 元のアニメーションを再開します
//             document.body.addEventListener('keyup', handleKeyUp); // アニメーションが完了したらイベントリスナーを再度追加します
//           }
//       });
//       anime({
//         targets: '.shadow',
//         keyframes: [
//             {translateX: 500, duration: 400, easing:'easeOutQuad'},
//             {translateX: 0, duration: 400, easing:'easeInQuad'}
//         ]
//     });
//   }};
