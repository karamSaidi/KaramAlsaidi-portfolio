function Buttontoggle() {
  var t = document.getElementById("nav");
  t.classList.toggle("show-nav");
}

function activeChange(index) {
  let active = document.getElementsByClassName("link");
  for (let i = 0; i < active.length; i++) {
    active[i].classList.remove("active");
  };
  index.classList.toggle('active');
  Buttontoggle();
}

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
})()