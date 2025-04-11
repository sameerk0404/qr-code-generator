function generateQR() {
    const qrText = document.getElementById("qrText").value;
    const qrCanvas = document.getElementById("qrCanvas");
    const qrWrapper = document.getElementById("qrWrapper");
    const downloadBtn = document.getElementById("downloadBtn");
  
    if (qrText.trim() === "") {
      alert("Please enter some text or URL");
      return;
    }
  
    const ctx = qrCanvas.getContext("2d");
    ctx.clearRect(0, 0, qrCanvas.width, qrCanvas.height);
  
    qrWrapper.style.display = "inline-block";
    downloadBtn.style.display = "inline-block";
  
    QRCode.toCanvas(qrCanvas, qrText, { width: 200 }, function (error) {
      if (error) 
        console.error(error);
    });
  }
  
  function downloadQR() {
    const qrCanvas = document.getElementById("qrCanvas");
    const imageData = qrCanvas.toDataURL("image/png");
  
    const a = document.createElement("a");
    a.href = imageData;
    a.download = "qr-code.png";
    a.click();
  }
  