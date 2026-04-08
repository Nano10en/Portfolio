<template>
  <section id="about" class="about section" ref="sectionRef">
    <div class="container about__inner">

      <div class="about__header" ref="headerRef" :class="{ visible: headerVisible }">
        <span class="section-label">About Me</span>
        <h2>Who I Am</h2>
      </div>

      <div class="about__body" ref="bodyRef" :class="{ visible: bodyVisible }">
        <div class="about__text">
          <p>
            I'm a Junior Web Developer focused on building practical, maintainable web
            applications. I work with <span class="highlight">Laravel/PHP</span> and
            <span class="highlight">Django/Python</span>, and I'm comfortable delivering
            core product features — authentication, CRUD, filtering, data export, and
            integrating REST APIs.
          </p>
          <p>
            I care about clean structure, readable code, and steady progress, especially
            in a team environment where feedback drives growth.
          </p>
        </div>

        <div class="about__traits">
          <div class="trait-card" v-for="trait in traits" :key="trait.label">
            <div class="trait-card__icon"><i :class="trait.icon"></i></div>
            <div class="trait-card__content">
              <span class="trait-card__label">{{ trait.label }}</span>
              <span class="trait-card__desc">{{ trait.desc }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      headerVisible: false,
      bodyVisible: false,
      traits: [
        {
          icon: 'fa-solid fa-code',
          label: 'Clean Code',
          desc: 'Readable structure over clever shortcuts',
        },
        {
          icon: 'fa-solid fa-users',
          label: 'Team-Oriented',
          desc: 'Feedback-driven, collaborative by default',
        },
        {
          icon: 'fa-solid fa-music',
          label: '10+ Years Music',
          desc: 'Trumpet & guitar — discipline built through practice',
        },
        {
          icon: 'fa-solid fa-dumbbell',
          label: 'Consistent Growth',
          desc: 'Long-term focus in sport and development alike',
        },
      ],
    };
  },
  mounted() {
    const observe = (el, callback, delay = 0) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(callback, delay);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      this.$nextTick(() => { if (el) observer.observe(el); });
    };

    observe(this.$refs.headerRef, () => { this.headerVisible = true; });
    observe(this.$refs.bodyRef,   () => { this.bodyVisible   = true; }, 150);
  },
};
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.about {
  padding: $space-xl 0;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: $space-md;
  }

  &__header {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .section-label {
      font-family: $font-mono;
      font-size: $fs-xs;
      color: $color-primary;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: $fs-3xl;
      font-weight: 700;
      color: $color-text;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-lg;
    align-items: start;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: $bp-lg) {
      grid-template-columns: 1fr;
      gap: $space-md;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    p {
      font-size: $fs-lg;
      color: $color-text-muted;
      line-height: 1.8;
    }

    .highlight {
      color: $color-primary-light;
      font-weight: 500;
    }
  }

  &__traits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
    }
  }
}

.trait-card {
  background: $color-surface;
  border: 1px solid $color-border;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: border-color $transition-fast, box-shadow $transition-fast;

  &:hover {
    border-color: $color-primary;
    box-shadow: 0 0 20px rgba($color-primary, 0.1);
  }

  &__icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba($color-primary, 0.12);
    border: 1px solid rgba($color-primary, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $fs-base;
    color: $color-primary-light;
    flex-shrink: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__label {
    font-size: $fs-sm;
    font-weight: 600;
    color: $color-text;
  }

  &__desc {
    font-size: $fs-xs;
    color: $color-text-muted;
    line-height: 1.5;
  }
}
</style>
