function checkLocalStorageSpace() {
    // Límite teórico (5 MB en la mayoría de navegadores)
    const maxSize = 5 * 1024 * 1024; // 5 MB en bytes
    let usedSize = 0;
  
    // Calcular espacio usado
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        usedSize += (key.length + localStorage.getItem(key).length) * 2; // Tamaño en bytes (UTF-16)
      }
    }
  
    // Mostrar resultados
    console.log(`Espacio usado: ~${(usedSize / 1024).toFixed(2)} KB`);
    console.log(`Espacio disponible: ~${((maxSize - usedSize) / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Límite máximo: ~5 MB`);
  
    return {
      usedKB: (usedSize / 1024).toFixed(2),
      remainingMB: ((maxSize - usedSize) / 1024 / 1024).toFixed(2),
      maxMB: 5
    };
  }
  
  // Ejecutar la función
  checkLocalStorageSpace();

  function calcularElementos() {
    const maxKB = 5120; // 5 MB en KB
    const tamañoElementoKB = 0.3; // Tamaño de cada elemento en KB
    const overheadClaveKB = 0.1; // Espacio estimado de la clave (ajústalo)
    
    const espacioTotalPorElemento = tamañoElementoKB + overheadClaveKB;
    const numeroElementos = Math.floor(maxKB / espacioTotalPorElemento);
    
    console.log(`Puedes guardar ~${numeroElementos} elementos de ${tamañoElementoKB} KB cada uno.`);
    console.log(`Espacio total ocupado: ${(numeroElementos * espacioTotalPorElemento).toFixed(2)} KB`);
  }
  
  calcularElementos();