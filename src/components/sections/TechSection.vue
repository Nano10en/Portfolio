<template>
    <section id="technologies" class="tech-section section">
        <div class="tech-container">
            <div class="section-header" ref="headerRef" :class="{ visible: headerVisible }">
                <span class="section-label">My Stack</span>
                <h2>Technologies</h2>
                <p>Tools and languages I use to build reliable, maintainable web applications.</p>
            </div>

            <div class="tech-groups">
                <div
                    v-for="(group, gi) in groups"
                    :key="gi"
                    class="tech-group"
                    :ref="el => { if (el) groupRefs[gi] = el }"
                    :class="{ visible: visibleGroups[gi] }"
                    :style="{ transitionDelay: `${gi * 0.12}s` }"
                >
                    <h3 class="group-title">{{ group.name }}</h3>
                    <div class="tech-grid">
                        <div
                            v-for="tech in group.items"
                            :key="tech.name"
                            class="tech-pill"
                        >
                            <span class="tech-pill__dot" :style="{ background: tech.color }"></span>
                            <span class="tech-pill__name">{{ tech.name }}</span>
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
                visibleGroups: [],
                groupRefs: [],
                groups: [
                    {
                        name: 'Backend',
                        items: [
                            { name: 'Python',     color: '#3b82f6' },
                            { name: 'Django',     color: '#16a34a' },
                            { name: 'PHP',        color: '#818cf8' },
                            { name: 'Laravel',    color: '#ef4444' },
                            { name: 'REST API',   color: '#f59e0b' },
                            { name: 'OAuth 2.0',  color: '#ec4899' },
                        ],
                    },
                    {
                        name: 'Frontend',
                        items: [
                            { name: 'Vue 3',        color: '#4ade80' },
                            { name: 'JavaScript',   color: '#facc15' },
                            { name: 'HTML5',        color: '#f97316' },
                            { name: 'CSS3 / SCSS',  color: '#a78bfa' },
                            { name: 'Tailwind CSS', color: '#38bdf8' },
                        ],
                    },
                    {
                        name: 'Database',
                        items: [
                            { name: 'MySQL',      color: '#60a5fa' },
                            { name: 'SQLite',     color: '#94a3b8' },
                            { name: 'PostgreSQL', color: '#6366f1' },
                        ],
                    },
                    {
                        name: 'Tools & DevOps',
                        items: [
                            { name: 'Git',        color: '#fb923c' },
                            { name: 'Docker',     color: '#38bdf8' },
                            { name: 'Vite',       color: '#a78bfa' },
                            { name: 'Webpack',    color: '#60a5fa' },
                            { name: 'Linux',      color: '#facc15' },
                        ],
                    },
                ],
            };
        },
        mounted() {
            this.visibleGroups = new Array(this.groups.length).fill(false);

            const headerObs = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        this.headerVisible = true;
                        headerObs.disconnect();
                    }
                },
                { threshold: 0.15 }
            );

            const groupObs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const i = this.groupRefs.indexOf(entry.target);
                            if (i !== -1) this.visibleGroups[i] = true;
                            groupObs.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );

            this.$nextTick(() => {
                if (this.$refs.headerRef) headerObs.observe(this.$refs.headerRef);
                this.groupRefs.forEach((el) => { if (el) groupObs.observe(el); });
            });
        },
    };
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.tech-section {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: $space-lg 0;
}

.tech-container {
    width: 80%;
}

/* ── Header (same pattern as Projects / Contact) ── */
.section-header {
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

/* ── Groups grid ── */
.tech-groups {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media (max-width: $bp-md) {
        grid-template-columns: 1fr;
    }
}

.tech-group {
    background: $color-surface;
    border: 1px solid $color-border;
    border-radius: 14px;
    padding: 1.75rem;
    opacity: 0;
    transform: translateX(-60px);
    transition: opacity 0.55s ease, transform 0.55s ease, border-color $transition-fast;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    &:hover {
        border-color: rgba($color-primary, 0.4);
    }
}

.group-title {
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $color-primary-light;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
}

.tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.tech-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid $color-border;
    border-radius: 20px;
    padding: 0.35rem 0.85rem;
    transition: border-color $transition-fast, background $transition-fast;

    &:hover {
        border-color: rgba($color-primary, 0.4);
        background: rgba($color-primary, 0.06);
    }

    &__dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    &__name {
        font-size: $fs-sm;
        color: $color-text;
        font-weight: 500;
    }
}
</style>
