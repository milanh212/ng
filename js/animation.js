var tl = gsap.timeline();
var tl2 = gsap.timeline();

tl.from(".logo__img", {duration: 0.1, opacity: 0, x: -50, ease: "none"});
tl.from(".nav__item", {duration: 0.2, opacity: 0, x: -20, ease: "none", stagger: 0.25});
tl.from(".header__item", {duration: 0.3, delay: -0.5, opacity: 0, x: 50, ease: "none", stagger: 0.25});
tl.to(".btn--header", {duration: 0.2, opacity: 1, ease: "none"});
tl.from(".hero__title", {duration: 0.4, opacity: 0, y: 20, ease: "none"});
tl.from(".form__input", {duration: 0.4, opacity: 0, y: 10, ease: "none"});
tl.from(".form__select", {duration: 0.4, opacity: 0, y: 10, ease: "none"});
tl.from(".form__button", {duration: 0.4, opacity: 0, y: 10, ease: "none"});

tl2.from(".bar", {duration: 0.6, delay: 0.4, width:"0px", ease: "none"});
tl2.from(".intro__title", {duration: 0.2, opacity: 0, x: -50, ease: "none"});
tl2.from(".intro__img", {duration: 0.2, opacity: 0, ease: "none"});
tl2.from(".pricing__p", {duration: 0.2, opacity: 0, y: 5, ease: "none"});
tl2.from(".pricing__col-1-4", {duration: 0.3, opacity: 0, y: 10, ease: "none", stagger: 0.1});