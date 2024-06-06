$('.btn').on('click',function(){

    $(this).toggleClass('is-active');
    $('#btn-menu').toggleClass('is-active');
});


// const scrollElement = document.querySelector(".bio-scroll-area");

// var wheel_flg = false;
// scrollElement.addEventListener("wheel", (e) => {
//     if (wheel_flg) {
//         if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

//         const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

//         if (
//             (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
//             (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
//         )
//             return;

//         e.preventDefault();
//         scrollElement.scrollLeft += e.deltaY;
//     }
// });


const scrollElement = document.querySelector(".scroll-area");

scrollElement.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

  const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

  if (
    (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
    (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
  )
    return;

  e.preventDefault();
  scrollElement.scrollLeft += e.deltaY;
});