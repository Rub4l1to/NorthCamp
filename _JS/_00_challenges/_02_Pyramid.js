// Piramide central
//   #
//  ###
// #####

const pyramid = (n) => {
    let p = "";
    let m = n - 1;
    for (i = 1; i <= n; i++) {
      p = p.trim();
      p = " ".repeat(m) + p + (i > 1 ? " " : "") + "#";
      m--;
      console.log(p);
    }
  };
  
  pyramid(3);
  