'use strict';

let animation = anime({
  targets: '.container',
  translateX: 500, 
  duration: 2000,
  easing: 'linear',
  loop: true,
  direction: 'alternate',
  autoplay: false, // アニメーションの自動再生を無効にします
});

function playJump() {
  let Jump = document.getElementById('Jump');
  Jump.currentTime = 0,
  Jump.play();
}

function handleKeyUp(e){
  if(e.keyCode == 32){
      document.body.removeEventListener('keyup', handleKeyUp); // スペースキーが押されたときにイベントリスナーを削除します
      animation.pause(); // スペースキーが押されたときにアニメーションを一時停止します
      anime({
          targets: '.container',
          keyframes: [
              {translateY: -300, duration: 300, easing:'easeOutQuad'},
              {translateY: 0, duration: 300, easing:'easeInQuad'}
          ],
          complete: function() { // アニメーションが完了したら
            animation.play(); // 元のアニメーションを再開します
            document.body.addEventListener('keyup', handleKeyUp); // アニメーションが完了したらイベントリスナーを再度追加します
          }
      });
      playJump();
  }
}

document.body.addEventListener('keyup', handleKeyUp); // イベントリスナーを追加します

animation.play(); // 初期アニメーションの再生を開始します
