import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initGSAP = () => {
  // Can be called to initialize plugin registry or defaults if needed.
};

// Common Timeline Creators
export const createFadeUpTimeline = (element: Element, stagger: number = 0.1) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  }).from(element.children, {
    y: 30,
    opacity: 0,
    stagger,
    duration: 0.8,
    ease: "power3.out",
  });
};

export const createScrollParallax = (element: Element, yOffset: number) => {
  return gsap.to(element, {
    y: yOffset,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};
