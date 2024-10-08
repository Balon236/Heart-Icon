const bodyEl = document.querySelector("body")
bodyEl.addEventListener("mousemove", (event) => {
   const xPos = event.offsetX
   const yPos = event.offsetY

   const spanEL = document.createElement("span");
   spanEL.style.left = xPos + "px";
   spanEL.style.top = yPos + "px";
   const size = Math.random()*100;
   spanEL.style.width = size + "px";
   spanEL.style.height = size + "px";
   bodyEl.appendChild(spanEL);
   setTimeout(() => {
    spanEl.remove();
   }, 3000);

});