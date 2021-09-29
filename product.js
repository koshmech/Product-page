function increment() {
  document.getElementById("demoInput").stepUp();
}
function decrement() {
  document.getElementById("demoInput").stepDown();
}
// let items = document.querySelectorAll(".carousel .carousel-item");

// items.forEach((el) => {
//   const minPerSlide = 4;
//   let next = el.nextElementSibling;
//   for (var i = 1; i < minPerSlide; i++) {
//     if (!next) {
//       // wrap carousel by using first child
//       next = items[0];
//     }
//     let cloneChild = next.cloneNode(true);
//     el.appendChild(cloneChild.children[0]);
//     next = next.nextElementSibling;
//   }
// });
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
function quantity(){
    let x=[];
    let quantityNo=document.getElementsByClassName("quantity")[0].value;
        x.push({
            you:quantityNo,
        });
        b=JSON.stringify(x);
        localStorage.setItem("no",b);
        console.log(x);
}
// function quantity() {
//   let x = [];
//   let quantityNo = document.getElementsByClassName("quantity")[0].value;
//   x.push({
//     key: "products",
//     value: quantityNo,
//   });
//   console.log(x);
// }
