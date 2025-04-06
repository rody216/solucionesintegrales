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
function shareCard() {
  const url = "https://tutarjeta.ejemplo.com"; // Sustituye con tu URL real
  if (navigator.share) {
    navigator.share({
      title: "Mi Tarjeta Digital",
      text: "Revisa mi tarjeta digital",
      url
    }).catch(() => {
      alert("No se pudo compartir.");
    });
  } else {
    navigator.clipboard.writeText(url).then(() => {
      alert("Enlace copiado al portapapeles");
    }).catch(() => {
      alert("No se pudo copiar el enlace.");
    });
  }
}

// Descargar archivo PDF directamente
function downloadCard() {
  const link = document.createElement("a");
  link.href = "Card.pdf"; // Asegúrate de que Card.pdf esté en el mismo directorio
  link.download = "SolucionesIntegrales.pdf"; // Nombre personalizado opcional
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
