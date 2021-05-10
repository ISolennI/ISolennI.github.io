import locomotiveScroll from 'https://cdn.skypack.dev/locomotive-scroll';



(function () {

    'use strict';

    document.querySelector('.material-design-hamburger__icon').addEventListener(
        'click',
        function () {
            var child;

            document.body.classList.toggle('background--blur');
            this.parentNode.nextElementSibling.classList.toggle('menu--on');

            child = this.childNodes[1].classList;

            if (child.contains('material-design-hamburger__icon--to-arrow')) {
                child.remove('material-design-hamburger__icon--to-arrow');
                child.add('material-design-hamburger__icon--from-arrow');
            } else {
                child.remove('material-design-hamburger__icon--from-arrow');
                child.add('material-design-hamburger__icon--to-arrow');
            }

        });

})();







/*
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: { smooth: true },
  tablet: { smooth: true }
});




let jeSuis = document.getElementById("jeSuis");

jeSuis.onclick = function(){
  scroll.scrollTo("#mainContent")
}

document.addEventListener('DOMContentLoaded', function() {
   scroll.start();

});*/
