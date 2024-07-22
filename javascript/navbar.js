const navbar = document.querySelector(".navbar");
const observerWatcher = document.querySelector(".header");

const callBack = (entries) => {
    navbar.classList.toggle('sticky', !entries[0].isIntersecting);
}

const options = {
    threshold: 0
}
const observer = new IntersectionObserver(callBack, options);

observer.observe(observerWatcher);
