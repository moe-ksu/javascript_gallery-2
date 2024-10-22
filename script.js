// JavaScript
//console.log('Hello world!');

const items = document.querySelectorAll('.img-item');
console.log(items);

console.log(items.length);

// for文
for(let i = 0; i < items.length; i++){

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 -30px', 0],//-の値にすると上からフェードインする
    filter: ['blur(10px)', 'blur(0)'],
  };
  
  const options = {
    duration: 600,
    delay: i * 400, //一枚0.4秒ずつ遅れて表示される
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}