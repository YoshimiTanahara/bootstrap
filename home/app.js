function picture(name) {
  let picture = ['Mac','iPhone','iPhone x','iWatch','TV','Music','only all'];
  let category = picture.length;
  let rand = Math.floor(Math.random() * category);

  return name + 'の運勢は' + picture[rand] +'です';
}

console.log(picture('Yoshimi'));


$(function(){
  let mySwiper = new Swiper('.swiper-container',{
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true
  },
  effect: 'fade',
  })
});