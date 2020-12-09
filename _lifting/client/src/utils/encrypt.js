// Recibirá el string agregado, el abecedario y el numero de rotacion
  // 1. Separará cada letra del string agregado 
  // 2. Mapeamos el array y comprobamos si no es un espacio
    // a. Si lo es, agregamos solamente el espacio.
    // b. Si no lo es, buscaremos en el abecedario la letra y le sumaremos a la posición de esa letra el número de rotación
  // 3. Unimos el resultado y lo exportamos

export const getEncrypt = (str, arr, rotation) =>
  str
    .split("")
    .map((char) => char !== " " ? arr[arr.indexOf(char) + Number(rotation)] : char)
    .join("");
