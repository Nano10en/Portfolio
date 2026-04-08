<template>
    <section id="projects" class="project-section section" ref="sectionRef">
        <div class="projects-container">
            <div class="section-header" ref="headerRef" :class="{ visible: headerVisible }">
                <span class="section-label">What I've Built</span>
                <h2>Projects</h2>
                <p>A selection of projects I've worked on — from full-stack web apps to frontend SPAs.</p>
            </div>
            <div class="project-list">
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    class="project-card"
                    :class="{ visible: visibleCards[index] }"
                    :style="{ transitionDelay: `${index * 0.15}s` }"
                    :ref="el => { if (el) cardRefs[index] = el }"
                    @click="openProject(index)"
                >
                    <div class="card-accent"></div>
                    <div class="card-content">
                        <div class="card-header">
                            <span class="card-number">{{ String(index + 1).padStart(2, '0') }}</span>
                            <div class="card-tags">
                                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                            </div>
                        </div>
                        <h3 class="card-title">{{ project.title }}</h3>
                        <p class="card-desc">{{ project.shortDesc }}</p>
                        <div class="card-footer">
                            <span class="view-more">View Details <span class="arrow">→</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Transition name="modal">
        <div class="modal-overlay" v-if="activeProject !== null" @click.self="closeProject">
            <div class="modal-inner">
                <button class="modal-close" @click="closeProject">✕</button>
                <div class="modal-header">
                    <div class="modal-title-row">
                        <h2>{{ projects[activeProject].title }}</h2>
                        <a :href="projects[activeProject].link" target="_blank" rel="noopener" class="github-link">
                            GitHub →
                        </a>
                    </div>
                    <div class="modal-tags">
                        <span v-for="tag in projects[activeProject].tags" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                </div>
                <p class="modal-desc">{{ projects[activeProject].fullDesc }}</p>
                <div class="modal-images">
                    <swiper :navigation="true" :modules="modules" class="modal-swiper" :loop="false">
                        <swiper-slide v-for="(img, i) in projects[activeProject].images" :key="i">
                            <div v-if="img.src" class="slide-img-wrap">
                                <img :src="img.src" :alt="img.alt">
                            </div>
                            <div v-else class="slide-placeholder">
                                <span>{{ img.alt }}</span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation } from 'swiper/modules';

    export default {
        components: { Swiper, SwiperSlide },
        data() {
            return {
                activeProject: null,
                headerVisible: false,
                visibleCards: [],
                cardRefs: [],
                projects: [
                    {
                        title: 'Spotify Album Rating',
                        shortDesc: 'Django web app with Spotify OAuth — browse albums, rate them, and leave reviews with a community feed.',
                        fullDesc: 'A full-stack web application integrating the Spotify Web API via OAuth 2.0. After authenticating with their Spotify account, users can search for any album, view detailed info (tracks, artists, release date), and leave a star rating with a written review. All ratings are stored in a database and visible to other users. The project covers the full OAuth flow including token refresh, Django ORM modelling for users and reviews, and clean HTML/CSS templates.',
                        tags: ['Python', 'Django', 'Spotify API', 'OAuth 2.0', 'SQLite'],
                        link: 'https://github.com/Nano10en/spotify-album-rating',
                        images: [
                            { src: '/public/project_img/spotify_album_rating/main.png', alt: 'Main page' },
                            { src: '/public/project_img/spotify_album_rating/search.png', alt: 'Search page' },
                            { src: '/public/project_img/spotify_album_rating/album.png', alt: 'Album page' },
                            { src: '/public/project_img/spotify_album_rating/trackComment.png', alt: 'Track comment' },
                            { src: '/public/project_img/spotify_album_rating/albumComment.png', alt: 'Album comment' },
                        ]
                    },
                    {
                        title: 'Inventory System',
                        shortDesc: 'Laravel inventory management with full CRUD, category filtering, CSV/XML export, and a complete audit log.',
                        fullDesc: 'A business-focused web application built with PHP 8 and the Laravel framework. The system handles complete inventory management: users can register, log in, and manage stock items through a clean Blade-templated UI. Key features include category-based filtering, soft delete with restore, data export to CSV and XML, and a full audit trail — every create, update, and delete is logged to the database, making it possible to trace any change. Built with Vite for frontend assets and MySQL as the database.',
                        tags: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Vite'],
                        link: 'https://github.com/Nano10en/Inventory-Sytem',
                        images: [
                            { src: '/public/project_img/inventory_system/inventoryMain.png', alt: 'Main page' },
                            { src: '/public/project_img/inventory_system/inventoryList.png', alt: 'List page' },
                            { src: '/public/project_img/inventory_system/inventoryFilter.png', alt: 'Filter' },
                            { src: '/public/project_img/inventory_system/inventoryChange.png', alt: 'Change page' },
                            { src: '/public/project_img/inventory_system/inventoryAdd.png', alt: 'Add page' },
                        ]
                    },
                    {
                        title: 'Workout SPA',
                        shortDesc: 'Vue 3 single-page app for a fitness brand — responsive layouts, client-side routing, and reusable component system.',
                        fullDesc: 'A frontend-focused single-page application built with Vue 3 and Webpack. The project demonstrates a clean component architecture with reusable UI blocks, Vue Router navigation between Home and Pricing pages, and fully responsive layouts styled with SCSS. This was a deep-dive into Vue 3 best practices: scoped styles, props-driven components, and a scalable folder structure — all bundled via Webpack with a fast dev server.',
                        tags: ['Vue 3', 'Vue Router', 'SCSS', 'Webpack', 'JavaScript'],
                        link: 'https://github.com/Nano10en/Workout',
                        images: [
                            { src: '/public/project_img/workout/workoutMain.png', alt: 'Main page' },
                            { src: '/public/project_img/workout/workoutTranings.png', alt: 'Tranings section' },
                            { src: '/public/project_img/workout/workoutSpecials.png', alt: 'Specials section' },
                            { src: '/public/project_img/workout/workoutPrices.png', alt: 'Prices page' },
                            { src: '/public/project_img/workout/workoutWorking.png', alt: 'Working section' },
                        ]
                    },
                ],
            };
        },
        setup() {
            return { modules: [Navigation] };
        },
        mounted() {
            this.visibleCards = new Array(this.projects.length).fill(false);

            const headerObserver = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        this.headerVisible = true;
                        headerObserver.disconnect();
                    }
                },
                { threshold: 0.15 }
            );
            this.$nextTick(() => {
                if (this.$refs.headerRef) headerObserver.observe(this.$refs.headerRef);
            });

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = this.cardRefs.indexOf(entry.target);
                            if (index !== -1) this.visibleCards[index] = true;
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );

            this.$nextTick(() => {
                this.cardRefs.forEach((el) => { if (el) observer.observe(el); });
            });
        },
        methods: {
            openProject(index) {
                this.activeProject = index;
                document.body.style.overflow = 'hidden';
            },
            closeProject() {
                this.activeProject = null;
                document.body.style.overflow = '';
            },
        },
    };
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.project-section {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: $space-lg 0;
}

.projects-container {
    width: 80%;
}

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

.project-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

/* ── Card ── */
.project-card {
    position: relative;
    display: flex;
    background: $color-surface;
    border: 1px solid $color-border;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-60px);
    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    &:hover {
        border-color: $color-primary;
        box-shadow: 0 0 24px rgba($color-primary, 0.15);

        .card-accent {
            background: $color-primary-light;
        }

        .view-more .arrow {
            transform: translateX(5px);
        }
    }
}

.card-accent {
    width: 4px;
    flex-shrink: 0;
    background: $color-primary;
    transition: background $transition-base;
}

.card-content {
    flex: 1;
    padding: 1.5rem 2rem;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
}

.card-number {
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $color-primary;
    letter-spacing: 0.05em;
}

.card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
}

.tag {
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $color-primary-light;
    background: rgba($color-primary, 0.1);
    border: 1px solid rgba($color-primary, 0.25);
    border-radius: 4px;
    padding: 0.15rem 0.5rem;
}

.card-title {
    font-size: $fs-xl;
    font-weight: 600;
    color: $color-text;
    margin-bottom: 0.5rem;
}

.card-desc {
    font-size: $fs-sm;
    color: $color-text-muted;
    line-height: 1.6;
}

.card-footer {
    margin-top: 1rem;
}

.view-more {
    font-size: $fs-sm;
    color: $color-primary-light;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    .arrow {
        display: inline-block;
        transition: transform $transition-fast;
    }
}

/* ── Modal ── */
.modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.modal-inner {
    position: relative;
    background: $color-surface;
    border: 1px solid $color-border;
    border-radius: 16px;
    width: 100%;
    max-width: 860px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 2.5rem;
    scrollbar-width: thin;
    scrollbar-color: $color-border transparent;
}

.modal-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: rgba($color-primary, 0.1);
    border: 1px solid rgba($color-primary, 0.25);
    color: $color-text;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    font-size: $fs-base;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background $transition-fast;

    &:hover {
        background: rgba($color-primary, 0.25);
    }
}

.modal-header {
    margin-bottom: 1.25rem;

    h2 {
        font-size: $fs-2xl;
        font-weight: 700;
        color: $color-text;
    }

    .modal-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.75rem;
    }
}

.modal-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.github-link {
    font-family: $font-mono;
    font-size: $fs-sm;
    color: $color-primary-light;
    background: rgba($color-primary, 0.1);
    border: 1px solid rgba($color-primary, 0.3);
    border-radius: 6px;
    padding: 0.35rem 0.85rem;
    text-decoration: none;
    white-space: nowrap;
    transition: background $transition-fast, border-color $transition-fast;
    flex-shrink: 0;
    margin-right: 50px;

    &:hover {
        background: rgba($color-primary, 0.22);
        border-color: $color-primary;
    }
}

.modal-desc {
    font-size: $fs-base;
    color: $color-text-muted;
    line-height: 1.7;
    margin-bottom: 2rem;
}

.modal-images {
    border-radius: 10px;
    overflow: hidden;
}

.modal-swiper {
    width: 100%;

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
        color: $color-primary-light;
    }

    :deep(.swiper-button-next::after),
    :deep(.swiper-button-prev::after) {
        font-size: 1.25rem;
    }
}

.slide-img-wrap {
    display: flex;
    justify-content: center;
    background: #000;
    border-radius: 8px;
    overflow: hidden;

    img {
        max-height: 500px;
        width: auto;
        max-width: 100%;
        object-fit: contain;
    }
}

.slide-placeholder {
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($color-primary, 0.04);
    border: 2px dashed $color-border;
    border-radius: 8px;
    color: $color-text-muted;
    font-family: $font-mono;
    font-size: $fs-sm;
}

/* ── Modal transition ── */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;

    .modal-inner {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;

    .modal-inner {
        transform: scale(0.95);
        opacity: 0;
    }
}
</style>
