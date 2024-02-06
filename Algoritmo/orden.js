function ordenarNumeros(array)
{
    // Algoritmo de ordenamiento por inserción
    let largo = array.length;
    let i = 1;
    
    // console.log(array, largo, i);

    while (i < largo)
    {
        let x = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > x)
        {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = x;
        i = i + 1;
    }

    // Se devuelven los números ordenados en formato JSON
    let res = JSON.stringify(array);

    return res;
}

// Uso
let arregloOriginal = [1, 55, 6, 98, 2, 5];
console.log('Arreglo original:', arregloOriginal);

let ArregloOrdenado = ordenarNumeros(arregloOriginal);
console.log('Arreglo ordenado:', ArregloOrdenado);
