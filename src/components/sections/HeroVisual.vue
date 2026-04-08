<template>
  <div class="hero-visual">
    <!-- Ambient glow -->
    <div class="hero-visual__glow" />

    <!-- Orbit ring guides -->
    <div class="orbit-ring orbit-ring--inner" />
    <div class="orbit-ring orbit-ring--outer" />

    <!-- Inner icons (6) -->
    <div
      v-for="(icon, i) in innerIcons"
      :key="icon.name"
      class="orbit-item orbit-item--lg"
      :ref="el => { if (el) innerRefs[i] = el }"
    >
      <img :src="icon.url" :alt="icon.name" draggable="false" />
      <span class="orbit-item__tip">{{ icon.name }}</span>
    </div>

    <!-- Outer icons (8) -->
    <div
      v-for="(icon, i) in outerIcons"
      :key="icon.name"
      class="orbit-item orbit-item--sm"
      :ref="el => { if (el) outerRefs[i] = el }"
    >
      <img :src="icon.url" :alt="icon.name" draggable="false" />
      <span class="orbit-item__tip">{{ icon.name }}</span>
    </div>

    <!-- Lotus figure -->
    <div class="hero-visual__figure-wrap">
      <div ref="figureRef" class="hero-visual__figure">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#6366f1" width="800px" height="800px" version="1.1" viewBox="144 144 512 512">
          <path d="m423.17 574.32h-1.0078-107.31c-8.5664 0-16.121-4.5352-20.152-12.09-6.0469-10.578-5.543-25.695 1.5117-37.281 1.5117-2.0156 32.746-36.777 59.449-66v-2.5195c-16.121 11.082-50.883 34.762-58.441 40.809-9.0703 6.5508-23.68 7.5586-32.746-4.0312-6.0469-8.0625-7.5586-20.656 4.0312-30.73l60.961-53.406c0.50391-1.0078 0.50391-2.0156 1.0078-3.0234 6.5508-22.168 15.113-49.879 32.242-49.879h74.059c17.633 0 25.695 27.711 32.242 49.879 0.50391 1.0078 0.50391 2.0156 1.0078 3.0234l61.465 53.402c11.586 10.078 10.078 23.176 4.0312 30.73-6.5508 8.5664-20.656 13.098-32.746 4.0312-8.0625-5.543-42.32-29.223-58.441-40.809v2.5195c26.703 29.223 57.938 63.48 59.449 66 7.0547 11.586 7.5586 26.199 1.5117 37.281-4.5352 7.5586-11.586 12.09-20.152 12.09h-0.50391-59.449c-0.50391 0.003906-1.5117 0.003906-2.0156 0.003906zm24.688-11.082h37.281c5.543 0 9.0703-3.5273 10.578-6.5508 4.0312-7.0547 3.5273-17.633-1.0078-25.695-3.0234-3.5273-37.281-41.312-59.953-66-1.0078-1.0078-1.5117-2.5195-1.5117-3.5273v-15.113c0-2.0156 1.0078-4.0312 3.0234-5.0391 2.0156-1.0078 4.0312-1.0078 5.543 0.50391 2.5195 1.5117 56.93 39.297 67.512 46.855 6.5508 5.0391 13.602 2.5195 17.633-2.0156 3.0234-4.0312 4.0312-10.078-2.5195-15.617l-62.469-54.41c-1.0078-0.50391-1.5117-1.5117-1.5117-2.5195-0.50391-1.5117-1.0078-3.0234-1.5117-4.5352-4.5352-14.609-12.594-41.816-21.664-41.816h-74.062c-9.0703 0-17.633 27.207-21.664 41.816-0.50391 1.5117-1.0078 3.0234-1.5117 4.5352-0.50391 1.0078-1.0078 2.0156-1.5117 2.5195l-63.477 53.906c-6.5508 5.543-5.543 12.09-2.5195 15.617 3.5273 4.5352 11.082 7.0547 17.633 2.0156 10.578-7.5586 65.496-45.344 67.512-46.855 1.5117-1.0078 4.0312-1.5117 5.543-0.50391 2.0156 1.0078 3.0234 3.0234 3.0234 5.0391v15.113c0 1.5117-0.50391 2.5195-1.5117 3.5273-22.172 25.191-56.43 62.473-59.453 66.504-4.5352 8.0625-5.0391 18.641-1.0078 25.695 1.5117 3.0234 5.0391 6.5508 10.578 6.5508h110.34c9.5742-1.0078 18.641-6.5508 18.641-19.145 0-13.098-10.578-19.145-20.656-19.145h-84.137c-3.0234 0-5.543-2.5195-5.543-5.543 0-3.0234 2.5195-5.543 5.543-5.543h84.137c12.09 0 19.648 5.0391 23.68 9.5742 5.0391 5.543 8.0625 13.098 8.0625 20.656 0 7.0508-2.5195 13.602-7.0547 19.145zm46.855-32.75m-189.43 0m94.719-183.39c-26.199 0-47.863-21.16-47.863-47.863s21.16-47.863 47.863-47.863c26.199 0 47.863 21.16 47.863 47.863-0.003906 26.703-21.668 47.863-47.863 47.863zm0-84.137c-20.152 0-36.777 16.625-36.777 36.777 0 20.152 16.625 36.777 36.777 36.777s36.777-16.625 36.777-36.777c0-20.148-16.625-36.777-36.777-36.777z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/composables/useAnimation'

const innerRefs = ref([])
const outerRefs = ref([])
const figureRef  = ref(null)

const INNER_R = 150
const OUTER_R = 220

const innerIcons = [
  { name: 'Laravel',  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Vue',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'Django',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
  { name: 'React',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'PHP',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Python',   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
]

const outerIcons = [
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML5',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'SASS',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
  { name: 'MySQL',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Docker',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Git',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Node.js',    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
]

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    // Place each icon at its orbit position, hidden
    innerRefs.value.forEach((el, i) => {
      if (!el) return
      const a = (i / innerIcons.length) * Math.PI * 2 - Math.PI / 2
      gsap.set(el, {
        xPercent: -50, yPercent: -50,
        x: Math.cos(a) * INNER_R,
        y: Math.sin(a) * INNER_R,
        scale: 0, opacity: 0,
      })
    })

    outerRefs.value.forEach((el, i) => {
      if (!el) return
      const a = (i / outerIcons.length) * Math.PI * 2 - Math.PI / 2
      gsap.set(el, {
        xPercent: -50, yPercent: -50,
        x: Math.cos(a) * OUTER_R,
        y: Math.sin(a) * OUTER_R,
        scale: 0, opacity: 0,
      })
    })

    // Pop-in entrance (staggered)
    const all = [...innerRefs.value, ...outerRefs.value].filter(Boolean)
    gsap.to(all, {
      scale: 1, opacity: 1,
      duration: 0.5, stagger: 0.07,
      ease: 'back.out(1.7)', delay: 0.8,
    })

    // Orbit — starts slightly after entrance begins
    const DELAY = 1.6

    const inner = { a: -Math.PI / 2 }
    gsap.to(inner, {
      a: inner.a + Math.PI * 2,
      duration: 30, ease: 'none', repeat: -1, delay: DELAY,
      onUpdate() {
        innerRefs.value.forEach((el, i) => {
          if (!el) return
          const angle = inner.a + (i / innerIcons.length) * Math.PI * 2
          gsap.set(el, { x: Math.cos(angle) * INNER_R, y: Math.sin(angle) * INNER_R })
        })
      },
    })

    const outer = { a: -Math.PI / 2 }
    gsap.to(outer, {
      a: outer.a - Math.PI * 2,  // reverse direction
      duration: 45, ease: 'none', repeat: -1, delay: DELAY,
      onUpdate() {
        outerRefs.value.forEach((el, i) => {
          if (!el) return
          const angle = outer.a + (i / outerIcons.length) * Math.PI * 2
          gsap.set(el, { x: Math.cos(angle) * OUTER_R, y: Math.sin(angle) * OUTER_R })
        })
      },
    })

    // Figure gentle float
    gsap.to(figureRef.value, {
      y: -12, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1,
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.hero-visual {
  position: relative;
  width: 500px;
  height: 500px;
  flex-shrink: 0;
}

// Central ambient glow
.hero-visual__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba($color-primary, 0.1) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
}

// Dashed orbit guides
.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px dashed rgba($color-primary, 0.15);
  pointer-events: none;

  &--inner { width: 300px; height: 300px; }
  &--outer { width: 440px; height: 440px; }
}

// Tech icon pills
.orbit-item {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($color-surface, 0.85);
  border: 1px solid rgba($color-primary, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(6px);
  cursor: default;
  z-index: 3;
  transition: border-color $transition-fast, box-shadow $transition-fast;

  &--lg {
    width: 52px;
    height: 52px;
    img { width: 28px; height: 28px; }
  }

  &--sm {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    img { width: 24px; height: 24px; }
  }

  img {
    object-fit: contain;
    pointer-events: none;
    user-select: none;
  }

  &:hover {
    border-color: $color-primary;
    box-shadow: 0 0 18px rgba($color-primary, 0.35);

    .orbit-item__tip {
      opacity: 1;
      transform: translateX(-50%) translateY(-4px);
    }
  }

  // Tooltip on hover
  &__tip {
    position: absolute;
    bottom: calc(100% + 7px);
    left: 50%;
    transform: translateX(-50%) translateY(0px);
    background: $color-surface;
    border: 1px solid $color-border;
    color: $color-text;
    font-size: $fs-xs;
    font-family: $font-mono;
    white-space: nowrap;
    padding: 3px 8px;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity $transition-fast, transform $transition-fast;
  }
}

// Lotus figure
.hero-visual__figure-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.hero-visual__figure {
  width: 175px;
  height: 175px;

  svg { width: 100%; height: 100%; }
}
</style>
