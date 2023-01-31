const shareButtons = document.querySelectorAll(".tile-share-button");

async function copyText(event) {
  // Evitando ser redirecionado para outro site
  event.preventDefault();

  // Pegando o link de um atributo personalizado
  const link = this.getAttribute("link");
  
  try {

    await navigator.clipboard.writeText(link);

    alert(`Texto copiado: ${link}`);

  } catch (error) {

    console.error(error);

  }
}

shareButtons.forEach(shareButton => 
  shareButton.addEventListener("click", copyText)
);
