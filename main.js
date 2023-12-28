'use strict';

let animation1 = anime({
  targets: '.container',
  translateX: 1000, 
  duration: 2000,
  easing: 'linear',
  loop: true,
  direction: 'alternate',
  autoplay: true,
});

let animation2 = anime({
  targets: '.l-hand, .r-foot',
  translateY: ['-3px', '3px'],
  duration: 300,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true,
  autoplay: true,
});

let animation3 = anime({
  targets: '.r-hand, .l-foot',
  translateY: ['3px', '-3px'],
  duration: 300,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true,
  autoplay: true,
});



function playJump() {
  let Jump = document.getElementById('Jump');
  Jump.currentTime = 0,
  Jump.play();
}

function handleKeyUp(e){
  if(e.keyCode == 32){
      document.body.removeEventListener('keyup', handleKeyUp); // スペースキーが押されたときにイベントリスナーを削除します
      (animation1, animation2, animation3).pause(); // スペースキーが押されたときにアニメーションを一時停止します
      anime({
          targets: '.container > :not(.shadow)', // '.shadow'クラスを除外します
          keyframes: [
              {translateY: -300, duration: 300, easing:'easeOutQuad'},
              {translateY: 0, duration: 300, easing:'easeInQuad'}
          ],
          complete: function() { // アニメーションが完了したら
            (animation1, animation2, animation3).play(); // 元のアニメーションを再開します
            document.body.addEventListener('keyup', handleKeyUp); // アニメーションが完了したらイベントリスナーを再度追加します
          }
      });
      anime({
        targets: '.shadow',
        keyframes: [
            {translateX: 300, duration: 300, easing:'easeOutQuad'},
            {translateX: 0, duration: 300, easing:'easeInQuad'}
        ]
    });
      playJump();
  }
}

document.body.addEventListener('keyup', handleKeyUp); // イベントリスナーを追加します

(animation1, animation2, animation3).play(); // 初期アニメーションの再生を開始します
