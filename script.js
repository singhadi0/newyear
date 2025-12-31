// Create sparkles
function createSparkles() {
    const particles = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 6 + 's';
        particles.appendChild(sparkle);
    }
}

// Create floating hearts
function createFloatingHearts() {
    const particles = document.getElementById('particles');
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💓', '💞'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        particles.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }, 800);
}

// Confetti hearts on load
function createConfetti() {
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💓', '💞'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-heart';
            confetti.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            confetti.style.animationDelay = (Math.random() * 0.5) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 50);
    }
}

// Countdown Timer
function updateCountdown() {
    const newYear = new Date('2026-01-01T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        document.getElementById('timer').innerHTML = '<h2 style="color: #ff6b9d; font-size: 48px;">🎉 Happy New Year 2026! 🎉</h2>';
        triggerNewYearCelebration();
    }
}

// New Year Celebration when timer hits zero
function triggerNewYearCelebration() {
    // Show celebration background
    const celebrationBg = document.getElementById('celebrationBg');
    if (celebrationBg) {
        celebrationBg.classList.add('active');
    }
    
    // Create massive gift box explosion
    createGiftBoxExplosion();
    
    // Create heart explosion
    createMassiveHeartExplosion();
    
    // Create continuous fireworks
    createFireworks();
    
    // Repeat fireworks every 2 seconds
    setInterval(() => {
        createFireworks();
    }, 2000);
    
    // Add screen pulse effect
    document.body.style.animation = 'screenPulse 3s ease-in-out infinite';
}

// Gift box explosion animation
function createGiftBoxExplosion() {
    const gifts = ['🎁', '🎀', '🎉', '🎊', '🎈'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const gift = document.createElement('div');
            gift.className = 'gift-box';
            gift.textContent = gifts[Math.floor(Math.random() * gifts.length)];
            gift.style.left = Math.random() * 100 + '%';
            gift.style.top = Math.random() * 100 + '%';
            gift.style.fontSize = (Math.random() * 30 + 30) + 'px';
            gift.style.animationDelay = Math.random() * 0.5 + 's';
            gift.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
            
            document.body.appendChild(gift);
            
            setTimeout(() => gift.remove(), 3000);
        }, i * 100);
    }
}

// Massive heart explosion
function createMassiveHeartExplosion() {
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💓', '💞', '❤️', '💙', '💜'];
    
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'confetti-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = (Math.random() * 25 + 20) + 'px';
            
            const angle = (Math.PI * 2 * i) / 80;
            const velocity = 150 + Math.random() * 200;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            if (typeof gsap !== 'undefined') {
                gsap.to(heart, {
                    x: tx,
                    y: ty,
                    rotation: Math.random() * 720,
                    opacity: 0,
                    duration: 2.5,
                    ease: "power2.out",
                    onComplete: () => heart.remove()
                });
            } else {
                heart.style.animation = 'confettiFall 3s ease-out forwards';
            }
            
            document.body.appendChild(heart);
        }, i * 30);
    }
}

// Music Toggle
let musicPlaying = false;
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicToggle');
    
    if (musicPlaying) {
        music.pause();
        btn.textContent = '🎵';
        musicPlaying = false;
    } else {
        music.play();
        btn.textContent = '🎶';
        musicPlaying = true;
    }
}

// Show Surprise Message (called from HTML onclick, delegates to enhanced version)
function showSurprise() {
    if (typeof window.showSurpriseEnhanced === 'function') {
        window.showSurpriseEnhanced();
    } else {
        const message = document.getElementById('surpriseMessage');
        message.style.display = 'block';
        createHeartBurst();
        createFireworks();
    }
}

// Heart Burst Animation
function createHeartBurst() {
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💓', '💞'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'confetti-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = '24px';
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 100 + Math.random() * 100;
            heart.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            heart.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 2000);
        }, i * 30);
    }
}

// Enhanced Fireworks Animation with pastel colors
function createFireworks() {
    const colors = ['#ff9a9e', '#fecfef', '#ffd6e8', '#c78fc7', '#e8d5f2', '#ffb6c1', '#dda0dd'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.top = Math.random() * 60 + '%';
            
            const color = colors[Math.floor(Math.random() * colors.length)];
            firework.style.setProperty('--color', color);
            
            document.body.appendChild(firework);
            
            setTimeout(() => {
                for (let j = 0; j < 30; j++) {
                    const particle = document.createElement('div');
                    particle.style.position = 'fixed';
                    particle.style.width = '6px';
                    particle.style.height = '6px';
                    particle.style.borderRadius = '50%';
                    particle.style.background = color;
                    particle.style.boxShadow = `0 0 10px ${color}`;
                    particle.style.left = firework.style.left;
                    particle.style.top = firework.style.top;
                    particle.style.pointerEvents = 'none';
                    particle.style.zIndex = '9999';
                    
                    const angle = (Math.PI * 2 * j) / 30;
                    const velocity = 80 + Math.random() * 200;
                    const vx = Math.cos(angle) * velocity;
                    const vy = Math.sin(angle) * velocity;
                    const duration = 1.5 + Math.random() * 1;
                    
                    let startTime = Date.now();
                    let posX = parseFloat(particle.style.left);
                    let posY = parseFloat(particle.style.top);
                    
                    const animate = () => {
                        const elapsed = (Date.now() - startTime) / 1000;
                        if (elapsed < duration) {
                            posX += vx * 0.016;
                            posY += (vy + 98 * elapsed) * 0.016; // Add gravity
                            particle.style.left = posX + 'px';
                            particle.style.top = posY + 'px';
                            particle.style.opacity = 1 - (elapsed / duration);
                            requestAnimationFrame(animate);
                        } else {
                            particle.remove();
                        }
                    };
                    
                    document.body.appendChild(particle);
                    animate();
                }
                firework.remove();
            }, 100);
        }, i * 300);
    }
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    createSparkles();
    createFloatingHearts();
    createConfetti();
    setInterval(updateCountdown, 1000);
    updateCountdown();
});