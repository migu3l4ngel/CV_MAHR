window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 3000,
        rotate: {
            x: 1,
            y: -180,
            z: 0
        },
        reset: false
    });
    sr.reveal('.img-container', {
        duration: 3000,
        easing: 'ease-in',
        reset: true
    })
    sr.reveal('.text-container', {
        duration: 3000,
        origin: 'left',
        distance: '-100px',
        reset: true
    })
    sr.reveal('.sect-skills', {
        duration: 3000,
        origin: 'right',
        distance: '-100px',
        reset: true
    })
    sr.reveal('.sect-porfolio', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px',
        reset: true
    })
    sr.reveal('.floating-box', { 
        duration: 3000,
        easing: 'ease-in-out'
        
    })