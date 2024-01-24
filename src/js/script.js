document.addEventListener('DOMContentLoaded', () => {
    initSwiper();
    animate();
})

function initSwiper() {
    const breakpoint = window.matchMedia('(min-width: 768px)');
    let swiper;

    if (breakpoint.matches) {
        if(swiper) {
            swiper.destroy();
        }
    } else {
      swiper = new Swiper('.swiper', {})
    }
}

function animate() {
    gsap.registerPlugin(ScrollTrigger);

    let mediaAnimation = gsap.matchMedia();

    mediaAnimation.add('(min-width: 1025px)', () => {
        const preloaderSvg = document.querySelector('.preloader svg');
        const preloaderPath = preloaderSvg.querySelector('path');
        const pathLength = preloaderPath.getTotalLength();
    
        gsap.set(preloaderSvg, {
            opacity: 0,
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });
    
        const tlPreloader = gsap.timeline({})
    
        tlPreloader.to('.preloader__title', {
            opacity: 1
        })
        .to(preloaderSvg, {
            opacity: 1,
        })
        .to(preloaderSvg, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power1.in'
        })
        .to('.preloader', {
            xPercent: 100,
            duration: 0.6,
            ease: 'power1.in'
          }, '+=0.5')
        .to('.preloader', {
            display: 'none',
        })
    
        gsap.set('.about__bg', {
            yPercent: 20,
        });
    
        gsap.set('.about__wrap', {
            yPercent: 200,
        });
    
        const tlPromo = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: 'top top',
                end: 'bottom+=100%',
                scrub: 1,
                pin: true,
            }
        });
    
        tlPromo.to('.about__bg', {
            yPercent: 0,
        })
        .to('.about__inner', {
            width: '100%',
            height: '100%',
        }, '<')
        .to('.about__decor', {
            opacity: 0,
        }, '<')
        .to('.about__wrap', {
            yPercent: 0,
        }, '<');
    
        const tlAim = gsap.timeline({
            scrollTrigger:{
                trigger: '.aim',
                start: 'top top',
                end: 'bottom+=100%',
                pin: true,
                scrub: 1,
            }
        });
    
        tlAim.to('.aim__first', {
            xPercent: -100,
        })
        .to('.aim__second', {
            xPercent: -100
        }, '<')
        .from('.aim__text', {
            autoAlpha: 0,
            yPercent: 100,
        })
        .from('.experience__item', {
            autoAlpha: 0,
            stagger: 0.2,
        })
        .to('.experience__border', {
            width: '100%',
        });
       
        const tlEducation = gsap.timeline({repeat: -1});
    
        tlEducation.from('.education__item', {
            duration: 1,
            yPercent: 100,
            autoAlpha: 0,
            stagger: 2,
        })
        .to('.education__item', {
            duration: 1,
            yPercent: -100,
            stagger: 2,
        }, 2);
        
        const tlResults = gsap.timeline({paused: true});
    
        tlResults.from('.results__item', {
            xPercent: 100,
            stagger: 1,
            autoAlpha: 0,
        })
        .to('.results__item:not(:last-child)', {
            xPercent: -100,
            stagger: 1
        }, 1);
    
        const traningItems = document.querySelectorAll('.training__item');
    
        traningItems.forEach((item, index) => {
            gsap.set(item, {
                xPercent: 100 + index * 10,
            })
        });
    
        gsap.set('.training__title', {
            xPercent: 80,
        })

        const tlTraining = gsap.timeline({paused: true});
    
        tlTraining.to('.results', {
            xPercent: -100,
        })
        .to('.training__item', {
            xPercent: 0,
        }, '<')
        .to('.training__title', {
            xPercent: 0,
        }, '<')
    
        const tlDoubleSection = gsap.timeline();
    
        tlDoubleSection.to(tlResults, {
            duration: 0.8,
            progress: 1,
        })
        .to(tlTraining, {
            duration: 0.6,
            progress: 1,
            ease: 'power3.in'
        })
    
        ScrollTrigger.create({
            animation: tlDoubleSection,
            trigger: '.double-section',
            start: 'top top',
            end: `bottom+=${tlDoubleSection.duration() * 4000} bottom`,
            pin: true,
            scrub: 1,
        });
    
        gsap.to('.reviews', {
            yPercent: -110,
            scrollTrigger: {
                trigger: '.double-section2',
                start: 'top top',
                end: 'bottom+=70%',
                pin: true,
                scrub: true,
            }
        })
    });

    mediaAnimation.add('(max-width: 1024px)', () => {
        const preloaderSvg = document.querySelector('.preloader svg');
        const preloaderPath = preloaderSvg.querySelector('path');
        const pathLength = preloaderPath.getTotalLength();
    
        gsap.set(preloaderSvg, {
            opacity: 0,
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });
    
        const tlPreloader = gsap.timeline({})
    
        tlPreloader.to('.preloader__title', {
            opacity: 1
        })
        .to(preloaderSvg, {
            opacity: 1,
        })
        .to(preloaderSvg, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power1.in'
        })
        .to('.preloader', {
            xPercent: 100,
            duration: 0.6,
            ease: 'power1.in'
          }, '+=0.5')
        .to('.preloader', {
            display: 'none',
        }) 

        gsap.from('.aim__text', {
            duration: 0.8,
            autoAlpha: 0,
            yPercent: 100,
            scrollTrigger: {
                trigger:'.aim__text',
                start: 'top 70%'
            }
        })

        const tlAim = gsap.timeline({
            scrollTrigger:{
                trigger: '.experience',
                start: 'top 70%',
            }
        });
    
        tlAim.from('.experience__item', {
            autoAlpha: 0,
            stagger: 0.2,
        })
        .to('.experience__border', {
            width: '100%',
        });
       
       
        const tlEducation = gsap.timeline({repeat: -1});
    
        tlEducation.from('.education__item', {
            duration: 1,
            yPercent: 100,
            autoAlpha: 0,
            stagger: 2,
        })
        .to('.education__item', {
            duration: 1,
            yPercent: -100,
            stagger: 2,
        }, 2);
    
        const resultsItems = document.querySelectorAll('.results__item');
    
        resultsItems.forEach((item, index) => {
            gsap.from(item, {
                autoAlpha: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            })
        });
    });   
}
