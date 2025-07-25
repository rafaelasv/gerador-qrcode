//Função criar o QR Code
const qrCode = new QRCodeStyling({
  width: 150,
  height: 150,
  data: "Exemplo",
  dotsOptions: {
    color: "#002631",
    type: "rounded"
  },
  backgroundOptions: {
    color: "#9fffcb"
  }
});

//Função renderizar o QR Code
qrCode.append(document.getElementById("qrcode"));

//Função gerar o QR Code
function gerarQRCode() {
  const texto = document.getElementById("texto").value.trim();

  if (!texto) {
    alert("Digite algum texto ou link para gerar o QR Code.");
    return;
  }

  qrCode.update({
    data: texto
  });
}

//Função baixar o QR Code
function baixarQRCode() {
  qrCode.download({ name: "qrcode", extension: "png" });
}


const botaoTema = document.querySelector(".toggle-theme-btn");

  // Aplica tema salvo no carregamento da página
  document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo) {
      document.body.classList.add(temaSalvo);
    }
  });

  // Alterna o tema
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-claro");

    // Salva no localStorage
    if (document.body.classList.contains("tema-claro")) {
      localStorage.setItem("tema", "tema-claro");
    } else {
      localStorage.removeItem("tema");
    }
  });