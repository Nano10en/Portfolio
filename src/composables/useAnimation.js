import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fade in + slide up on scroll
 * @param {string|Element} target - CSS selector or DOM element
 * @param {object} options
 */
export function useScrollReveal(target, options = {}) {
  const defaults = {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15,
    start: 'top 85%',
  }

  const config = { ...defaults, ...options }

  gsap.fromTo(
    target,
    { y: config.y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: config.duration,
      ease: config.ease,
      stagger: config.stagger,
      scrollTrigger: {
        trigger: target,
        start: config.start,
      },
    }
  )
}

/**
 * Animate a single element into view
 * @param {string|Element} target
 * @param {object} fromVars
 * @param {object} toVars
 */
export function useEnter(target, fromVars = {}, toVars = {}) {
  return gsap.fromTo(target, { opacity: 0, ...fromVars }, { opacity: 1, duration: 0.8, ease: 'power3.out', ...toVars })
}

/**
 * GSAP timeline shortcut
 */
export function useTimeline(options = {}) {
  return gsap.timeline(options)
}

export { gsap, ScrollTrigger }
