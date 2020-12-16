let redItemsCuadr = document.querySelectorAll("rect");
let redItemsCirc = document.querySelectorAll("circle");

const deleteRed = (arr) => {
  arr.forEach((element) => {
    if (element.getAttribute("fill") === "red") {
      element.remove();
    }
  });
};

deleteRed(redItemsCuadr);
deleteRed(redItemsCirc);
