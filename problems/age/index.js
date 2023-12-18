const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

// Realizar la solicitud GET
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  let data = '';

  // Recibir datos en formato JSON
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // Los datos han sido completamente recibidos
  resp.on('end', () => {
    // Parsear los datos JSON
    const jsonData = JSON.parse(data);
    // Obtener la cadena de datos
    const dataArray = jsonData.data.split(', ');



    const newArrayData = [];

    // Iterar sobre el arreglo de strings
    for (let i = 0; i < dataArray.length; i += 2) {
      // Crear un objeto con las claves y valores correspondientes
      const objeto = {
        key: dataArray[i].split('=')[1],
        age: parseInt(dataArray[i + 1].split('=')[1], 10)
      };

      // Agregar el objeto al arreglo resultante
      newArrayData.push(objeto);
    }

    // Crear un flujo de escritura para output.txt

    const age32Items = newArrayData.filter(data => data.age == 32)
    // Escribir cada elemento en una línea separada
    const keyValues = age32Items.map(obj => obj.key);
    const fileContent = keyValues.join('\n') + '\n';
    fs.writeFileSync('output.txt', fileContent);

    // Calculate the SHA1 hash of the file content
    const hash = crypto.createHash('sha1');
    hash.update(fileContent);
    const sha1Hash = hash.digest('hex');
    console.log(sha1Hash)
  });
}).on('error', (error) => {
  console.error(`Error: ${error.message}`);
});
