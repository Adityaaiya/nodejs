var rect = require("./rectangle");

function solverect(l, b) {
  console.log("solving rectangle with l = " + l + " and b = " + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(
        "area of rectangle  of dimension  l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.area()
      );

      console.log(
        "perimeter of rectangle dimension solving for rectangle with l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.perimeter()
      );
    }
  });
  console.log("this statement is after the call to rect() ");
}
