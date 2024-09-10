const qrInput = document.getElementById("qr-input");
const qrButton = document.getElementById("qr-button");
const qrImage = document.getElementById("qr-image");
qrButton.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    alert("please enter a value");
  } else {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${qrValue}`;
    qrImage.alt = `QR Code for ${qrValue}`;
  }
});