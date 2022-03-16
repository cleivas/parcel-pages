const img = document.createElement('img');
document.body.append(img);
//Detta funkar inte!
// img.src = './img/drake.jpg';

const imgUrl = new URL('./img/drake.jpg', import.meta.url );
img.src = imgUrl.href;
console.log(imgUrl);