# Entrega de projeto - Simulador de Corridas do Mario Kart com Node.js | DIO

Neste projeto, foi desenvolvida uma corrida que considera as habilidades dos personagens e as variáveis das pistas. O desenvolvimento foi realizado utilizando NodeJS.

<table>
  <tr>
    <td>
      <img src="./docs/header.gif" alt="Mario Kart" width="200">
    </td>
    <td>
      <b>Objetivo:</b>
      <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
    </td>
  </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p>Mario</p>
      <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 4</p>
      <p>Manobrabilidade: 3</p>
      <p>Poder: 3</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Peach</p>
      <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 2</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Yoshi</p>
      <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 2</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 3</p>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p>Bowser</p>
      <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 5</p>
      <p>Manobrabilidade: 2</p>
      <p>Poder: 5</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Luigi</p>
      <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 4</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Donkey Kong</p>
      <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 2</p>
      <p>Manobrabilidade: 2</p>
      <p>Poder: 5</p>
    </td>
  </tr>
</table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<b>Pistas:</b>

<ul>
  <li> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-4-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

---

### 📖 Explicação de Funcionamento

1. **Inicialização**: definimos dois personagens com atributos pessoais e contadores de vitória (`blocks` e `winnerPoints`).
2. **Sorteio de blocos**: cada rodada chama `getRandomBlock()`, retornando `straight`, `curve` ou `confrontation`.
3. **Jogada de dados**: cada jogador roda `rollDice()` (1–6).
4. **Cálculo de pontos**: soma-se ao atributo correto via `translateParameters()`.
5. **Registro de resultado**:

   * Incrementa `winnerPoints` do vencedor.
   * Adiciona o bloco vencido em `player.blocks`.
   * Loga detalhes da rodada no console.
6. **Encerramento**: após 5 rodadas, exibimos:

   * Histórico de blocos vencidos por jogador.
   * Totais de vitórias (`winnerPoints`).
   * Campeão geral.

---

### 📂 Estrutura de Arquivos

```
├── README.md
├── docs
│   ├── header.gif
│   ├── mario.gif
│   ├── luigi.gif
│   ├── peach.gif
│   ├── yoshi.gif
│   ├── bowser.gif
│   └── dk.gif
└── src
    ├── index.js        # ponto de entrada (main)
    └── functions
        └── index.js    # engine da corrida
```

---

### ⚙️ Arquitetura e Fluxo de Dados

**`src/index.js`**

```js
import { players, playRaceEngine } from "./functions/index.js";

(async function main() {
  console.log(`Game started with players: ${players.player1.name} and ${players.player2.name}`);
  await playRaceEngine();
})();
```

**`src/functions/index.js`**

* `players`: atributos iniciais e contadores (`blocks`, `winnerPoints`).
* `parameters`: probabilidades de blocos.
* `rollDice()`: dado (1–6).
* `getRandomBlock()`: retorna tipo de bloco.
* `translateParameters()`: mapeia bloco → atributo.
* `logResult()`: calcula pontos, atualiza `players`, registra rodada.
* `playRaceEngine()`: executa 5 rodadas e exibe resumo e campeão.

---

## 🚀 Como Executar o Projeto

**Pré-requisitos**

* Node.js v14+

**Passos**

1. Clone o repositório:

   ```bash
   git clone https://github.com/victorbraga8/dio-mariokart.git  
   cd dio-mariokart  
   ```
2. (Opcional) Instale dependências:

   ```bash
   npm install  
   ```

   *não há pacotes externos; esse passo é opcional.*
3. Execute:

   ```bash
   npm run dev  
   ```

> Acompanhe cada rodada no console e descubra o grande campeão!
