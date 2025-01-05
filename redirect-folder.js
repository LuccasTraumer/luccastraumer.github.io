const fs = require('fs');
const path = require('path');

// Função para mover arquivos e pastas de uma pasta para outra
function moverArquivosEPastas(origem, destino) {
  // Lê os arquivos da pasta de origem
  fs.readdir(origem, (err, itens) => {
    if (err) throw err;

    // Move cada item para a pasta de destino
    itens.forEach(item => {
      const origemItem = path.join(origem, item);
      const destinoItem = path.join(destino, item);
      fs.rename(origemItem, destinoItem, err => {
        if (err) throw err;
        console.log(`Item ${item} movido para ${destino}`);
      });
    });
  });
}

// Função para excluir uma pasta
function excluirPasta(pasta) {
  // Exclui a pasta especificada
  fs.rmdirSync(pasta, { recursive: true });
  console.log(`Pasta ${pasta} excluída com sucesso.`);
}

// Defina a pasta de origem (dist do Angular) e a pasta de destino
const pastaOrigem = './dist/browser'; // Substitua pelo caminho real do seu projeto Angular
const pastaDestino = './dist'; // Substitua pelo caminho da pasta para onde deseja mover

// Verifica se a pasta de destino existe, se não, cria ela
if (!fs.existsSync(pastaDestino)) {
  fs.mkdirSync(pastaDestino, { recursive: true });
  console.log(`Pasta ${pastaDestino} criada.`);
}

// Move os arquivos e pastas da pasta de origem para a pasta de destino
moverArquivosEPastas(pastaOrigem, pastaDestino);

// excluirPasta(pastaOrigem);
