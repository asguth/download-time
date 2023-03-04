const tamanho = document.getElementById('tamanho');
    const velocidade = document.getElementById('velocidade');
    const calcularBtn = document.querySelector('button');
    const resultado = document.querySelector('.result input');

    calcularBtn.addEventListener('click', function() {
      const tamanhoArquivoGB = parseFloat(tamanho.value);
      const tamanhoArquivoMB = tamanhoArquivoGB * 1024; // 1 GB = 1024 MB
      const velocidadeConexao = velocidade.value;

      const tempoSegundos = (tamanhoArquivoMB / velocidadeConexao) * 8;

      // convert the time in seconds to hours:minutes:seconds format
      const tempoHoras = Math.floor(tempoSegundos / 3600);
      const tempoMinutos = Math.floor((tempoSegundos % 3600) / 60);
      const tempoSegundosRestantes = Math.floor(tempoSegundos % 60);

      // create the time string in the format "hours:minutes:seconds"
      let tempoString = '';
      if (tempoHoras > 0) {
        tempoString += tempoHoras + 'Hr ';
      }
      if (tempoMinutos > 0) {
        tempoString += tempoMinutos + 'Min ';
      }
      tempoString += tempoSegundosRestantes.toString().padStart(2, '0') + 'seg';

      resultado.value = tempoString;

      // show the result only if it's greater than 1
      if (tempoSegundos > 1) {
        resultado.parentElement.style.display = 'block';
      } else {
        resultado.parentElement.style.display = 'none';
      }
    });