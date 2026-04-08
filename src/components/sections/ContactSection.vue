<template>
    <section id="contact" class="contact-section section" ref="sectionRef">
        <div class="contact-container">
            <div class="contact-header" ref="headerRef" :class="{ visible: headerVisible }">
                <span class="section-label">Get In Touch</span>
                <h2>Contact Me</h2>
                <p>Open to opportunities and collaboration — feel free to reach out.</p>
            </div>

            <div class="contact-links" ref="linksRef" :class="{ visible: linksVisible }">
                <a href="tel:+37129767397" class="contact-card">
                    <div class="contact-card__icon"><i class="fa-solid fa-phone"></i></div>
                    <div class="contact-card__info">
                        <span class="contact-card__label">Phone</span>
                        <span class="contact-card__value">+371 297 67 397</span>
                    </div>
                    <span class="contact-card__arrow">→</span>
                </a>
                <a href="mailto:velicko129@gmail.com" class="contact-card">
                    <div class="contact-card__icon"><i class="fa-solid fa-envelope"></i></div>
                    <div class="contact-card__info">
                        <span class="contact-card__label">Email</span>
                        <span class="contact-card__value">velicko129@gmail.com</span>
                    </div>
                    <span class="contact-card__arrow">→</span>
                </a>
                <a href="https://github.com/Nano10en" target="_blank" rel="noopener" class="contact-card">
                    <div class="contact-card__icon"><i class="fa-brands fa-github"></i></div>
                    <div class="contact-card__info">
                        <span class="contact-card__label">GitHub</span>
                        <span class="contact-card__value">github.com/Nano10en</span>
                    </div>
                    <span class="contact-card__arrow">→</span>
                </a>
                <a href="https://www.linkedin.com/in/nikita-velicko-19a371270/" target="_blank" rel="noopener" class="contact-card">
                    <div class="contact-card__icon"><i class="fa-brands fa-square-linkedin"></i></div>
                    <div class="contact-card__info">
                        <span class="contact-card__label">LinkedIn</span>
                        <span class="contact-card__value">Nikita Velicko</span>
                    </div>
                    <span class="contact-card__arrow">→</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                headerVisible: false,
                linksVisible: false,
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
            observe(this.$refs.linksRef,  () => { this.linksVisible  = true; }, 150);
        },
    };
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.contact-section {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: $space-xl;
}

.contact-container {
    width: 80%;
}

/* ── Header ── */
.contact-header {
    text-align: center;
    margin-bottom: $space-md;
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.visible {
        opacity: 1;
        transform: translateX(0);
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
        margin-bottom: 0.75rem;
    }

    p {
        font-size: $fs-lg;
        color: $color-text-muted;
        max-width: 480px;
        margin: 0 auto;
    }
}

/* ── Contact link cards ── */
.contact-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: $bp-md) {
        grid-template-columns: 1fr;
    }
}

.contact-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: $color-surface;
    border: 1px solid $color-border;
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    text-decoration: none;
    transition: border-color $transition-fast, box-shadow $transition-fast, transform $transition-fast;

    &:hover {
        border-color: $color-primary;
        box-shadow: 0 0 20px rgba($color-primary, 0.12);
        transform: translateX(4px);

        .contact-card__arrow {
            transform: translateX(4px);
        }
    }

    &__icon {
        width: 44px;
        height: 44px;
        border-radius: 10px;
        background: rgba($color-primary, 0.12);
        border: 1px solid rgba($color-primary, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: $fs-base;
        color: $color-primary-light;
        flex-shrink: 0;
        font-family: $font-mono;
        font-weight: 700;
    }

    &__info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    &__label {
        font-size: $fs-xs;
        color: $color-text-muted;
        font-family: $font-mono;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    &__value {
        font-size: $fs-sm;
        color: $color-text;
        font-weight: 500;
    }

    &__arrow {
        color: $color-primary-light;
        font-size: $fs-lg;
        transition: transform $transition-fast;
        flex-shrink: 0;
    }
}
</style>
