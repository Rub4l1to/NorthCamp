// Piramide central
//   #
//  ###
// #####

const pyramid = (n) => {
    let piramide = "";
    let espacios = n - 1;
    for (i = 1; i <= n; i++) {
      piramide = piramide.trim();
      piramide = " ".repeat(espacios) + piramide + (i > 1 ? " " : "") + "#";
      espacios--;
      console.log(piramide);
    }
  };
  
  pyramid(5);
