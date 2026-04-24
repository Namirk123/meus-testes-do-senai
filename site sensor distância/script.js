let port;
let reader;

let minInput = document.getElementById("min");
let maxInput = document.getElementById("max");

document.getElementById("connect").addEventListener("click", async () => {
  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    document.getElementById("status").innerText = "🟢 Conectado";

    reader = port.readable.getReader();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      let texto = new TextDecoder().decode(value);

      if (texto.includes("DIST:")) {
        let distancia = parseFloat(texto.replace("DIST:", "").trim());

        atualizarInterface(distancia);
      }
    }

  } catch (erro) {
    document.getElementById("status").innerText = "❌ Erro";
    console.error(erro);
  }
});

function atualizarInterface(distancia) {
  let min = parseFloat(minInput.value);
  let max = parseFloat(maxInput.value);

  let display = document.getElementById("distancia");
  let barra = document.getElementById("barra");

  display.innerText = distancia.toFixed(1) + " cm";

  let porcentagem = ((distancia - min) / (max - min)) * 100;
  porcentagem = Math.max(0, Math.min(100, porcentagem));

  barra.style.width = porcentagem + "%";

  // Cor dinâmica tipo sensor de estacionamento
  if (distancia < min) {
    barra.style.background = "red";
  } else if (distancia < max / 2) {
    barra.style.background = "orange";
  } else {
    barra.style.background = "lime";
  }
}