<template>
  <footer class="footer">
    <div class="container footer__inner">

      <div class="footer__left">
        <span class="footer__name">Nikita Velicko</span>
        <span class="footer__role">Junior Web Developer · Laravel / Django</span>
      </div>

      <nav class="footer__links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="footer__socials">
        <a href="https://github.com/Nano10en" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/nikita-velicko-19a371270/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:velicko129@gmail.com" aria-label="Email">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>

    </div>

    <div class="footer__bottom">
      <span>© {{ year }} Nikita Velicko. All rights reserved.</span>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.footer {
  border-top: 1px solid $color-border;
  padding: $space-md 0 $space-sm;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-md;
    flex-wrap: wrap;

    @media (max-width: $bp-md) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: $space-sm;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__name {
    font-size: $fs-base;
    font-weight: 700;
    color: $color-text;
  }

  &__role {
    font-size: $fs-xs;
    font-family: $font-mono;
    color: $color-primary-light;
  }

  &__links {
    display: flex;
    gap: $space-md;

    a {
      font-size: $fs-sm;
      color: $color-text-muted;
      text-decoration: none;
      transition: color $transition-fast;

      &:hover {
        color: $color-primary-light;
      }
    }
  }

  &__socials {
    display: flex;
    gap: 1rem;

    a {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      border: 1px solid $color-border;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color-text-muted;
      font-size: $fs-base;
      text-decoration: none;
      transition: border-color $transition-fast, color $transition-fast;

      &:hover {
        border-color: $color-primary;
        color: $color-primary-light;
      }
    }
  }

  &__bottom {
    text-align: center;
    margin-top: $space-sm;
    padding-top: $space-sm;
    border-top: 1px solid $color-border;

    span {
      font-size: $fs-xs;
      color: $color-text-muted;
      font-family: $font-mono;
    }
  }
}
</style>
