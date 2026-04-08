<template>
  <section class="hero section">
    <div class="container hero__inner">

      <!-- Left: text -->
      <div class="hero__content">
        <p ref="tagline" class="hero__tagline text-mono text-primary">Hi, I'm</p>
        <h1 ref="name" class="hero__name">Nikita Velicko</h1>
        <h2 ref="role" class="hero__role">
          Web Developer <span class="text-primary">Laravel / Django</span>
        </h2>
        <p ref="desc" class="hero__desc">
          Building clean, maintainable web apps with a focus on backend logic and smooth interfaces.
        </p>
        <div ref="cta" class="hero__cta">
          <a href="#projects" class="btn btn--primary">View Projects</a>
          <a href="#contact" class="btn btn--outline">Contact Me</a>
          <a href="/Nikita_Velicko_CV_EN.pdf" download="Nikita_Velicko_CV.pdf" class="btn btn--cv">
            <i class="fa-solid fa-download"></i> Download CV
          </a>
        </div>
      </div>

      <!-- Right: orbiting visual -->
      <HeroVisual ref="visual" class="hero__visual" />

    </div>
  </section>
  <AboutSection></AboutSection>
  <ProjectSection></ProjectSection>
  <TechSection></TechSection>
  <ContactSection></ContactSection>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTimeline } from '@/composables/useAnimation'
import HeroVisual from '@/components/sections/HeroVisual.vue'
import AboutSection from './AboutSection.vue'
import ProjectSection from './ProjectSection.vue'
import TechSection from './TechSection.vue'
import ContactSection from './ContactSection.vue'

const tagline = ref(null)
const name    = ref(null)
const role    = ref(null)
const desc    = ref(null)
const cta     = ref(null)

onMounted(() => {
  const tl = useTimeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo(tagline.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
    .fromTo(name.value,    { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
    .fromTo(role.value,    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .fromTo(desc.value,    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .fromTo(cta.value,     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-lg;

    @media (max-width: $bp-lg) {
      flex-direction: column-reverse;
      text-align: center;
      gap: $space-md;
    }
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__visual {
    @media (max-width: $bp-lg) {
      transform: scale(0.72);
      transform-origin: center center;
      margin: -60px 0;
    }

    @media (max-width: $bp-md) {
      transform: scale(0.58);
      margin: -90px 0;
    }
  }

  &__tagline {
    font-size: $fs-lg;
    margin-bottom: $space-xs;
    opacity: 0;
  }

  &__name {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    margin-bottom: $space-xs;
    opacity: 0;
  }

  &__role {
    font-size: clamp(1.1rem, 2.5vw, 1.75rem);
    font-weight: 400;
    color: $color-text-muted;
    margin-bottom: $space-md;
    opacity: 0;
  }

  &__desc {
    max-width: 480px;
    margin-bottom: $space-md;
    font-size: $fs-lg;
    opacity: 0;

    @media (max-width: $bp-lg) {
      margin: 0 auto $space-md;
    }
  }

  &__cta {
    display: flex;
    gap: $space-sm;
    flex-wrap: wrap;
    opacity: 0;

    @media (max-width: $bp-lg) {
      justify-content: center;
    }
  }
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  font-size: $fs-base;
  font-weight: 600;
  transition: transform $transition-fast, box-shadow $transition-fast;

  &:hover { transform: translateY(-2px); }

  &--primary {
    background: $color-primary;
    color: #fff;
    &:hover { box-shadow: 0 8px 24px rgba($color-primary, 0.4); }
  }

  &--outline {
    border: 1px solid $color-border;
    color: $color-text;
    &:hover { border-color: $color-primary; color: $color-primary; }
  }

  &--cv {
    border: 1px solid rgba($color-primary, 0.35);
    color: $color-primary-light;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    &:hover {
      background: rgba($color-primary, 0.1);
      border-color: $color-primary;
      box-shadow: 0 8px 24px rgba($color-primary, 0.15);
    }
  }
}
</style>
