// ============================================
// FUNCIONALIDAD PRINCIPAL DE LA PÁGINA
// ============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initMobileMenu();
    initScrollAnimations();
    initNavbarScroll();
    initSmoothScroll();
    initContactForm();
});

// ============================================
// MENÚ HAMBURGUESA PARA MÓVIL
// ============================================
function initMobileMenu() {
    // Obtener elementos del DOM
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle del menú al hacer clic en el botón hamburguesa
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animar las barras del botón hamburguesa
        const bars = navToggle.querySelectorAll('.nav-toggle-bar');
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            // Restaurar animación del botón hamburguesa
            const bars = navToggle.querySelectorAll('.nav-toggle-bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            
            // Restaurar animación del botón hamburguesa
            const bars = navToggle.querySelectorAll('.nav-toggle-bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
}

// ============================================
// ANIMACIONES DE SCROLL (SCROLL REVEAL)
// ============================================
function initScrollAnimations() {
    // Configurar el Intersection Observer para detectar cuando los elementos entran en el viewport
    const observerOptions = {
        root: null, // Usar el viewport como raíz
        rootMargin: '0px',
        threshold: 0.1 // Activar cuando el 10% del elemento es visible
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // Cuando el elemento entra en el viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejar de observar el elemento una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar todas las cards que necesitan animación
    const techCards = document.querySelectorAll('.tech-card');
    const serviceCards = document.querySelectorAll('.service-card');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    // Agregar cada card al observer
    techCards.forEach(card => observer.observe(card));
    serviceCards.forEach(card => observer.observe(card));
    portfolioCards.forEach(card => observer.observe(card));
}

// ============================================
// EFECTO DE NAVBAR AL HACER SCROLL
// ============================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    // Escuchar el evento de scroll
    window.addEventListener('scroll', function() {
        // Si el scroll es mayor a 50px, agregar sombra a la navbar
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1rem 0';
        }
    });
}

// ============================================
// SCROLL SUAVE PARA ENLACES DE NAVEGACIÓN
// ============================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto
            
            // Obtener el ID de la sección destino
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Calcular la posición de la sección (restando el height de la navbar)
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            // Hacer scroll suave hacia la sección
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// ============================================
// MANEJO DEL FORMULARIO DE CONTACTO
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    // Escuchar el evento de submit del formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío por defecto
        
        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validar que los campos no estén vacíos
        if (name && email && message) {
            // Mostrar mensaje de éxito (visual, sin backend)
            alert('¡Gracias por tu mensaje, ' + name + '! Me pondré en contacto contigo pronto.');
            
            // Limpiar el formulario
            contactForm.reset();
        } else {
            // Mostrar mensaje de error
            alert('Por favor, completa todos los campos del formulario.');
        }
    });
}

// ============================================
// EFECTO PARALLAX EN ELEMENTO DECORATIVO
// ============================================
function initParallaxEffect() {
    const heroDecoration = document.querySelector('.hero-decoration');
    
    window.addEventListener('mousemove', function(e) {
        // Calcular la posición del mouse relativa al centro de la pantalla
        const mouseX = (e.clientX - window.innerWidth / 2) / 50;
        const mouseY = (e.clientY - window.innerHeight / 2) / 50;
        
        // Aplicar transformación al elemento decorativo
        if (heroDecoration) {
            heroDecoration.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
    });
}

// Inicializar efecto parallax
initParallaxEffect();

// ============================================
// ANIMACIÓN DE TYPING EN EL TÍTULO HERO
// ============================================
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    const typingSpeed = 100; // Velocidad de escritura en ms
    
    // Limpiar el texto inicial
    heroTitle.textContent = '';
    
    let charIndex = 0;
    
    // Función para escribir el texto carácter por carácter
    function typeChar() {
        if (charIndex < originalText.length) {
            heroTitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        }
    }
    
    // Iniciar la animación después de un pequeño retraso
    setTimeout(typeChar, 1000);
}

// Comentar/descomentar la siguiente línea para activar/desactivar el efecto de typing
// initTypingEffect();

// ============================================
// TRACKING DE SECCIÓN ACTIVA EN NAVBAR
// ============================================
function initActiveSectionTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            // Verificar si la sección está en el viewport
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remover clase active de todos los links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Agregar clase active al link correspondiente
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Inicializar tracking de sección activa
initActiveSectionTracking();
