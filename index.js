const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
const container = document.getElementById("container");
let prevItem = null;
shuffleArray(arr);
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let count = 0;
arr.forEach((element) => {
  const item = document.createElement("div");
  item.classList.add("item");
  item.value = element;
  item.addEventListener("click", clicked);
  container.appendChild(item);
});
let t=0;
let i=0;
let start;
let delta = 0;
let win = 0;
const timer = document.createElement("div");
document.body.appendChild(timer);
timer.style.position = "absolute";
timer.style.left = "1080px"
timer.style.top = "100px"
let myTimer;
function clicked(event){
    if(t==0){
        start = Date.now();
        myTimer = setInterval(function() {
            delta = Date.now()-start;
        console.log(Math.round(delta/1000));
    
timer.style.width = "fit-content";
timer.style.height = "fit-content";
timer.style.fontSize = "50px";
timer.innerHTML = " ";
timer.innerHTML = Math.floor(delta/1000);
timer.style.color = "gray"
}, 1000);
        t=1;
    }
    let item = event.target;
    count++;
    item.innerHTML = item.value; 
    if (count == 2) {
      if (item.value == prevItem.value) {
        item.removeEventListener("click", clicked);
        prevItem.removeEventListener("click", clicked);
        count = 0;
        win++;
        if(win == 8){clearInterval(myTimer)}
      } else {
        document.body.style.pointerEvents = "none";
        setTimeout(() => {
          document.body.style.pointerEvents = "auto";
          item.innerHTML = "";
          prevItem.innerHTML = "";
        }, 1000);
      prevItem.addEventListener("click",clicked);
        count = 0;
      }
    }
    if (count == 1) {
      prevItem = item;
      prevItem.removeEventListener("click",clicked);
    }
  }

