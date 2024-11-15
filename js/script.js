
/*boton whatsapp abrir en la web*/
function whatsapp() {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      href: "https://wa.me/+541122224444"
    }).click();
  };
  