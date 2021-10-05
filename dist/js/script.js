function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// LINKS

const makeIntersect = (parentID, observerID) => {
  observerID = document.querySelector(observerID);
  parentID = document.querySelector(parentID);
  const handler = (entries) => {
    !entries[0].isIntersecting
      ? observerID.style.marginLeft = `0px`
      : observerID.style.marginLeft = `-${observerID.clientWidth}px`;
  }
  const observer = new IntersectionObserver(handler);
  observer.observe(parentID);
}