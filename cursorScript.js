let pointer = document.querySelector('#mouse-pointer');
window.onmousemove = (evt) => {
    // console.log(evt, evt.pageX, evt.pageY);
    pointer.style.left = `${evt.pageX}px`,
    pointer.style.top = `${evt.pageY}px`;
}
let imgs = document.querySelectorAll('.player>a');
console.log(imgs);
imgs.forEach((img)=>{
    img.onmouseenter = () => pointer.classList.add('hover');
    img.onmouseleave = () => pointer.classList.remove('hover');
});
//enter,leave : 자기 자신 / over,out : 자식에게까지 전파, 이벤트 버블링