document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. APAGAR LAS VELITAS DEL PASTEL
    // ==========================================
    const botonSoplar = document.getElementById("soplar");

    if (botonSoplar) {
        botonSoplar.addEventListener("click", function () {
            const llamas = document.querySelectorAll(".llama");
            llamas.forEach(function (llama) {
                llama.classList.add("apagada");
            });

            const mensajeVelas = document.getElementById("mensajeVelas");
            if (mensajeVelas) {
                mensajeVelas.textContent = "¡Deseo concedido preciosa! ♡";
            }
            botonSoplar.textContent = "¡Feliz cumpleaños! ♡";
        });
    }

    // ==========================================
    // 2. SISTEMA DE PARTÍCULAS FLOTANTES
    // ==========================================
    const contenedor = document.querySelector(".particulas");
    const simbolos = ["♡", "♥", "✧", "☆", "⁂", "⋆", "⁂"];

    if (contenedor) {
        function crearParticula() {
            const particula = document.createElement("span");

            particula.className = "particula";
            particula.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

            particula.style.left = Math.random() * 100 + "%";
            particula.style.fontSize = (12 + Math.random() * 18) + "px";
            
            // Colores variados y bonitos para los destellos
            particula.style.color = [
                "#ffffff", "#f5a9c8", "#d9c4ff", "#f8d77b", "#e28fae"
            ][Math.floor(Math.random() * 5)];

            particula.style.animationDuration = (7 + Math.random() * 5) + "s";

            contenedor.appendChild(particula);

            // Eliminar la partícula del DOM cuando termine su animación para no sobrecargar la página
            setTimeout(function() {
                particula.remove();
            }, 12000);
        }

        // Crear algunas de golpe al iniciar y luego mantener el flujo constante
        for (let i = 0; i < 15; i++) {
            crearParticula();
        }
        setInterval(crearParticula, 500);
    }

    // ==========================================
    // 3. CARRUSEL DE FOTOS Y VIDEOS (Opcional)
    // ==========================================
    const diapositivas = document.querySelectorAll(".diapositiva");
    const botonAnterior = document.getElementById("anterior");
    const botonSiguiente = document.getElementById("siguiente");
    const contador = document.getElementById("contador");

    if (diapositivas.length > 0 && botonAnterior && botonSiguiente) {
        let actual = 0;

        function mostrarDiapositiva(numero) {
            // Pausar cualquier video antes de cambiar de recuerdo
            const videos = document.querySelectorAll(".diapositiva video");
            videos.forEach(function (video) {
                video.pause();
                video.currentTime = 0;
            });

            diapositivas[actual].classList.remove("activa");
            actual = (numero + diapositivas.length) % diapositivas.length;
            diapositivas[actual].classList.add("activa");
            
            if (contador) {
                contador.textContent = (actual + 1) + " / " + diapositivas.length;
            }
        }

        botonAnterior.addEventListener("click", function () {
            mostrarDiapositiva(actual - 1);
        });

        botonSiguiente.addEventListener("click", function () {
            mostrarDiapositiva(actual + 1);
        });
    }

});