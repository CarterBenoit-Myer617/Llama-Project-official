import {Carousel} from "@fancyapps/ui";
import {Fancybox} from "@fancyapps/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Fancybox,Carousel } from "@fancyapps/ui";
const mainTL = gsap.timeline();

window.addEventListener('load', function(){

    const myCarousel = new Carousel(document.querySelector(".carousel"), {
        // Options
        // 'center' : false
      });

});


function fadein() {
  const tl = gsap.timeline()
gsap.set("#wheat", {alpha:0, x:-600})
tl.to("#wheat", {alpha:1, x:0, scrollTrigger:{trigger: "#maintain", scrub:true}})
}
ScrollTrigger.defaults({
    toggleActions: "restart pause resume none",
    markers:true
})


function fader() {
  const tl = gsap.timeline()
gsap.set("#maintain-content", {alpha:0,  x:-600})
tl.to("#maintain-content", {alpha:1, x:0, scrollTrigger:{trigger: "#stickout", scrub:true}})
}


function faderright() {
  const tl = gsap.timeline()
gsap.set("#stickout-image", {alpha:0,  y:400})
tl.to("#stickout-image", {alpha:1, y:0, scrollTrigger:{trigger: "#stickout-content h2", scrub:true}})
}

function sherringfadeup() {
  const tl = gsap.timeline()
gsap.set("#sheering", {alpha:0, duration:1, y:400})
tl.to("#sheering", {alpha:1, y:0, scrollTrigger:{trigger: "#sheering-up", scrub:true}})
}




mainTL.add(fadein())
.add(fader())
.add(sherringfadeup())
.add(faderright());