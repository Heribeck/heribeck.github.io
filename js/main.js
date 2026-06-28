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
    initTechCarousel();
    initStatsCounter();
    initParticles();
    initLoader();
    initBackToTop();
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
        const isActive = navMenu.classList.toggle('active');
        
        // Actualizar aria-expanded
        navToggle.setAttribute('aria-expanded', isActive);
        navToggle.setAttribute('aria-label', isActive ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        
        // Animar las barras del botón hamburguesa
        const bars = navToggle.querySelectorAll('.nav-toggle-bar');
        if (isActive) {
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
            
            // Actualizar aria-expanded
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            
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
            
            // Actualizar aria-expanded
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            
            // Restaurar animación del botón hamburguesa
            const bars = navToggle.querySelectorAll('.nav-toggle-bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            navToggle.focus();
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
    const statCards = document.querySelectorAll('.stat-card');
    
    // Agregar delays escalonados para stagger animation
    techCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    portfolioCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
    
    statCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
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

// ============================================
// CARRUSEL DE TECH STACK - SIMPLE Y FLUIDO
// ============================================
function initTechCarousel() {
    const techGrid = document.querySelector('.technologies-grid');
    const arrowLeft = document.getElementById('tech-arrow-left');
    const arrowRight = document.getElementById('tech-arrow-right');
    
    if (!techGrid || !arrowLeft || !arrowRight) {
        console.log('Carousel elements not found');
        return;
    }
    
    const cardWidth = 280 + 32; // 280px card width + 32px gap
    let autoScrollInterval;
    let isPaused = false;
    
    // Función para scroll automático con reset suave
    function autoScroll() {
        if (!isPaused) {
            const maxScroll = techGrid.scrollWidth - techGrid.clientWidth;
            const currentScroll = techGrid.scrollLeft;
            
            if (currentScroll >= maxScroll - 50) {
                // Reset instantáneo al inicio sin animación
                techGrid.scrollLeft = 0;
            } else {
                // Scroll suave
                techGrid.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            }
        }
    }
    
    // Iniciar auto-scroll cada 3 segundos
    autoScrollInterval = setInterval(autoScroll, 3000);
    
    // Navegación con flechas
    arrowLeft.addEventListener('click', function() {
        isPaused = true;
        techGrid.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
        setTimeout(() => { isPaused = false; }, 2000);
    });
    
    arrowRight.addEventListener('click', function() {
        isPaused = true;
        techGrid.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
        setTimeout(() => { isPaused = false; }, 2000);
    });
    
    // Pausar al hacer hover
    techGrid.addEventListener('mouseenter', function() {
        isPaused = true;
    });
    
    techGrid.addEventListener('mouseleave', function() {
        isPaused = false;
    });
    
    // Mostrar flechas
    arrowLeft.style.display = 'flex';
    arrowRight.style.display = 'flex';
    
    console.log('Simple carousel initialized');
}

// ============================================
// CONTADOR ANIMADO DE ESTADÍSTICAS
// ============================================
function initStatsCounter() {
    const statCards = document.querySelectorAll('.stat-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const target = parseInt(statNumber.getAttribute('data-target'));
                animateCounter(statNumber, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statCards.forEach(card => observer.observe(card));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// ============================================
// EFECTO DE PARTÍCULAS EN HERO
// ============================================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 255, 136, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function createParticles() {
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.15;
                    ctx.strokeStyle = `rgba(0, 255, 136, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animate);
    }
    
    createParticles();
    animate();
    
    window.addEventListener('resize', createParticles);
}

// ============================================
// LOADER INICIAL
// ============================================
function initLoader() {
    const loader = document.getElementById('loader');
    
    // Ocultar loader después de 1.5 segundos
    setTimeout(function() {
        loader.classList.add('hidden');
        
        // Remover loader del DOM después de la transición
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
}

// ============================================
// BOTÓN VOLVER ARRIBA
// ============================================
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    // Mostrar/ocultar botón al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Scroll suave al inicio al hacer clic
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
