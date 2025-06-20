let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio, imagen) {
  carrito.push({ nombre, precio, imagen });
  total += precio;
  actualizarCarrito();

  // Subir hacia el carrito al agregar
  const carritoNav = document.getElementById("carrito-toggle");
  carritoNav.scrollIntoView({ behavior: "smooth" });
}

function actualizarCarrito() {
  const miniLista = document.getElementById("mini-lista");
  const miniTotal = document.getElementById("mini-total");
  const contador = document.getElementById("contador-carrito");

  miniLista.innerHTML = "";

  carrito.forEach((item, index) => {
    const miniLi = document.createElement("li");
    miniLi.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <span>${item.nombre}</span>
      <button onclick="eliminarDelCarrito(${index})">❌</button>
    `;
    miniLista.appendChild(miniLi);
  });

  miniTotal.textContent = total.toLocaleString();
  contador.textContent = carrito.length;
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();

  // Ocultar el mini-carrito al vaciar
  const mini = document.getElementById("mini-carrito");
  if (mini) mini.style.display = "none";
}

function irAPagar() {
  alert("Redirigiendo a la página de pago... (funcionalidad en desarrollo)");
  // window.location.href = 'checkout.html';
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarCarrito();
  document.getElementById("carrito-toggle").addEventListener("click", () => {
    const mini = document.getElementById("mini-carrito");
    mini.style.display = mini.style.display === "block" ? "none" : "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formContacto");
  const mensajeExito = document.getElementById("mensaje-exito");

  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita que recargue la página
      mensajeExito.style.display = "block";

      // Limpiar los campos del formulario
      formulario.reset();

      // Ocultar mensaje después de unos segundos
      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 4000);
    });
  }
});
