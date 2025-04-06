const card = document.getElementById('card');

// Permitir flip al hacer clic
card.addEventListener('click', () => {
  card.classList.toggle('flip');
});

// Flip con teclas izquierda/derecha
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    card.classList.toggle('flip');
  }
});

// Compartir la tarjeta

document.getElementById('shareBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('/img/QR.png');
    const blob = await response.blob();
    const file = new File([blob], '/img/QR.png', { type: blob.type });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: 'Mi Tarjeta Digital',
        text: 'Aquí tienes mi código QR',
        files: [file],
      });
    } else {
      // Mostrar fallback
      document.getElementById('fallbackShare').style.display = 'block';
    }
  } catch (error) {
    console.error('Error al compartir:', error);
    document.getElementById('fallbackShare').style.display = 'block';
  }
});



// Descargar archivo PDF directamente
function downloadCard() {
  const link = document.createElement("a");
  link.href = "Card.pdf"; 
  link.download = "SistemasIntegrales.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
