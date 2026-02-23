
import schemaData from './seo_schema.json' with { type: 'json' };


lucide.createIcons();


document.getElementById('json-ld-data').textContent = JSON.stringify(schemaData);


gsap.registerPlugin(ScrollTrigger);


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md', 'py-0');
        navbar.classList.remove('py-2'); // Adjust depending on original padding
    } else {
        navbar.classList.remove('shadow-md', 'py-0');
        navbar.classList.add('py-2');
    }
});


const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


const revealElements = document.querySelectorAll('.reveal-up');

revealElements.forEach(element => {
    gsap.fromTo(element, 
        { 
            y: 50, 
            opacity: 0 
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});


gsap.from(".product-card", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#products",
        start: "top 75%"
    }
});


window.handleFormSubmit = function(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'Sending...';
    btn.disabled = true;


    setTimeout(() => {
        btn.innerText = 'Message Sent!';
        btn.classList.add('bg-green-600', 'text-white');
        document.getElementById('formStatus').classList.remove('hidden');
        event.target.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
            btn.classList.remove('bg-green-600', 'text-white');
            document.getElementById('formStatus').classList.add('hidden');
        }, 3000);
    }, 1500);
};


window.openWhatsApp = function(topic) {
    const phoneNumber = "919876543210";
    const text = encodeURIComponent(`Hello Jaunpur Traders, I am interested in ${topic}. Please provide more details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
};
