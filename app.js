const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const color = document.querySelector(".color")
const activeClass = "is-show";
window.addEventListener("scroll", (e)=>{
  const scroll = window.pageYOffset
  const heightReal = document.documentElement.scrollHeight- document.documentElement.clientHeight
  const width = scroll / heightReal * 100
  color.style.width = `${width}%`
})
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});
window.addEventListener("load", function () {
  const sliderItems = document.querySelectorAll(".testimonial-item");
  const sliderItemWidth = sliderItems[0].clientWidth;
  console.log("sliderItemWidth", sliderItemWidth);
  const slider = document.querySelector(".testimonial-list");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  let positionX = 0;
  let index = 0;
  arrowRight.addEventListener("click", function () {
    arrowLeft.classList.remove("disabled");
    if (index >= sliderItems.length - 1) {
      this.classList.add("disabled");
      return;
    }
    positionX += sliderItemWidth;
    index++;
    slider.setAttribute("style", `transform:translateX(-${positionX}px);`);
  });
  arrowLeft.addEventListener("click", function () {
    arrowRight.classList.remove("disabled");

    if (index <= 0) {
      this.classList.add("disabled");
      return;
    }
    positionX -= sliderItemWidth;
    index--;
    slider.setAttribute("style", `transform:translateX(-${positionX}px);`);
  });
});

const storyMore = document.querySelectorAll(".story-more")
const dot = document.querySelector(".dots")
const more = document.querySelector(".more");
console.log(more.classList.contains("hide"));

[...storyMore].forEach(element =>{
  element.addEventListener("click", (e)=>{
    const storyContent = e.target.parentNode
    const dots = storyContent.querySelector(".dots")
    const more = storyContent.querySelector(".more")

    dots.classList.toggle("hide")
    more.classList.toggle("hide")

    if(!more.classList.contains("hide")){
          e.target.textContent = "Read less"
        } else{
          e.target.textContent = "Read more"
        }
  } )
})

