function contarVogais(palavra) {
    if (typeof palavra !== "string") {
      return "O argumento esta incorreto. Por favor informe uma string.";
    }
    
    let contarVogais = 0;
    const vogais = ["a", "e", "i", "o", "u"];
    
    palavra.toLowerCase().split("").forEach((letra) => {
      if (vogais.includes(letra)) {
        contarVogais++;
      }
    });
    
    if (contarVogais === 0) {
      return "Esta palavra não possui vogal.";
    } else {
      return `A palavra "${palavra}" possui ${contarVogais} vogais.`;
    }
  }
  
 
  console.log(contarVogais("mmmm")); 
  console.log(contarVogais(3333)); 
  console.log(contarVogais("Iluminar")); 