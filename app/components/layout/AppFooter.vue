<script setup lang="ts">
const year = new Date().getFullYear()

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/shiomiolog',
        icon: 'simple-icons:github',
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@shiomiolog',
        icon: 'simple-icons:youtube',
    },
    {
        label: 'Blog',
        href: 'https://blog.shiomiolog.com/',
        icon: 'material-symbols:article-outline',
    },
    {
        label: 'X',
        href: 'https://x.com/shiomiolog',
        icon: 'simple-icons:x',
    },
]

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

<template>
    <footer class="relative overflow-hidden bg-[#fffdfb] px-6 py-16 md:px-10 md:py-20">
        <!-- Background decorations -->
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="footer-paw footer-paw-one">
                🐾
            </div>

            <div class="footer-paw footer-paw-two">
                🐾
            </div>

            <div class="footer-cloud footer-cloud-one" />
            <div class="footer-cloud footer-cloud-two" />

            <div class="footer-circle footer-circle-one" />
        </div>

        <div class="
                relative z-10
                mx-auto
                grid max-w-7xl
                gap-12
                md:grid-cols-[1fr_auto_1fr]
                md:items-center
            ">
            <!-- Left decoration -->
            <div class="hidden md:block">
                <div class="footer-panel footer-panel-left">
                    <span class="footer-cat">
                        🐈
                    </span>

                    <span class="footer-letter">
                        M
                    </span>

                    <span class="footer-letter-small">
                        W
                    </span>
                </div>
            </div>

            <!-- Center -->
            <div class="text-center">
                <!-- Social -->
                <div class="flex justify-center gap-3">
                    <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank"
                        rel="noopener noreferrer" :aria-label="link.label" class="
                            footer-social
                            flex h-11 w-11
                            items-center justify-center
                            rounded-full
                            border border-slate-200/70
                            bg-white
                            text-slate-600
                            shadow-[0_4px_12px_rgba(15,23,42,0.05)]
                            hover:border-blue-200
                            hover:text-blue-500
                        ">
                        <Icon :name="link.icon" class="h-5 w-5" />
                    </a>
                </div>

                <!-- Contact -->
                <a href="mailto:mail@shiomiolog.com" class="
                        footer-contact
                        mt-6
                        inline-flex
                        rounded-full
                        bg-slate-800
                        px-7 py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-[0_6px_18px_rgba(15,23,42,0.12)]
                        hover:bg-slate-700
                    ">
                    お問い合わせ
                </a>

                <p class="mt-10 text-xs leading-6 text-slate-400">
                    このサイトの文章・画像等の無断転載はご遠慮ください。
                </p>

                <p class="mt-3 text-xs text-slate-400">
                    © {{ year }} 汐猫みお
                </p>
            </div>

            <!-- Right decoration -->
            <div class="hidden md:flex md:justify-end">
                <div class="footer-panel footer-panel-right">
                    <div class="footer-numbers">
                        <span class="footer-number">
                            1
                        </span>

                        <span class="footer-number active">
                            2
                        </span>

                        <span class="footer-number">
                            3
                        </span>
                    </div>

                    <div class="footer-face">
                        (=^･ω･^=)
                    </div>
                </div>
            </div>
        </div>

        <!-- Back to top -->
        <button type="button" class="
                back-to-top
                absolute bottom-6 right-6 z-20
                flex h-11 w-11
                items-center justify-center
                rounded-full
                bg-slate-800
                text-white
                shadow-lg
                hover:bg-slate-700
            " aria-label="ページ上部へ戻る" @click="scrollToTop">
            <Icon name="material-symbols:keyboard-arrow-up-rounded" class="h-6 w-6" />
        </button>
    </footer>
</template>

<style scoped>
.footer-panel {
    position: relative;
    width: 280px;
    height: 190px;
    opacity: 0.55;
}

.footer-panel-left {
    border-right: 1px solid rgba(148, 163, 184, 0.15);
}

.footer-panel-right {
    border-left: 1px solid rgba(148, 163, 184, 0.15);
}

/* Cat */

.footer-cat {
    position: absolute;
    left: 1rem;
    bottom: 2rem;

    font-size: 3.5rem;

    animation: cat-float 4s ease-in-out infinite;
}

@keyframes cat-float {

    0%,
    100% {
        transform: translateY(0) rotate(-2deg);
    }

    50% {
        transform: translateY(-7px) rotate(2deg);
    }
}

/* Letters */

.footer-letter {
    position: absolute;
    left: 5rem;
    top: 1rem;

    font-size: 4rem;
    font-weight: 700;

    color: #cbd5e1;

    animation: letter-wobble 5s ease-in-out infinite;
}

.footer-letter-small {
    position: absolute;
    left: 10rem;
    bottom: 1.5rem;

    font-size: 3rem;
    font-weight: 700;

    color: #dbeafe;

    animation: letter-wobble-small 6s ease-in-out infinite;
}

@keyframes letter-wobble {

    0%,
    100% {
        transform: rotate(-8deg) translateY(0);
    }

    50% {
        transform: rotate(-3deg) translateY(-6px);
    }
}

@keyframes letter-wobble-small {

    0%,
    100% {
        transform: rotate(6deg) translateY(0);
    }

    50% {
        transform: rotate(10deg) translateY(-4px);
    }
}

/* Numbers */

.footer-numbers {
    display: flex;
    justify-content: center;
    gap: 0.35rem;
}

.footer-number {
    display: inline-flex;

    width: 2.5rem;
    height: 2.5rem;

    align-items: center;
    justify-content: center;

    color: #cbd5e1;
}

.footer-number.active {
    border-radius: 9999px;

    background: #bfdbfe;
    color: white;

    animation: number-pulse 4s ease-in-out infinite;
}

@keyframes number-pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.08);
    }
}

/* Face */

.footer-face {
    position: relative;

    margin-top: 2rem;

    border-radius: 2rem 1.5rem 2.2rem 1.7rem;

    background: #f1f5f9;

    padding: 2rem;

    text-align: center;

    font-size: 1.5rem;

    color: #94a3b8;

    animation: face-float 4s ease-in-out infinite;
}

@keyframes face-float {

    0%,
    100% {
        transform: translateY(0) rotate(-1deg);
    }

    50% {
        transform: translateY(-5px) rotate(1deg);
    }
}

/* Paws */

.footer-paw {
    position: absolute;

    color: #bfdbfe;

    opacity: 0.25;

    user-select: none;
}

.footer-paw-one {
    left: 8%;
    top: 20%;

    font-size: 2.5rem;

    animation: paw-float-one 4.5s ease-in-out infinite;
}

.footer-paw-two {
    right: 10%;
    bottom: 18%;

    font-size: 2rem;

    animation: paw-float-two 5.5s ease-in-out infinite;
    animation-delay: -1.2s;
}

@keyframes paw-float-one {

    0%,
    100% {
        transform: translateY(0) rotate(-15deg);
    }

    50% {
        transform: translateY(-8px) rotate(-9deg);
    }
}

@keyframes paw-float-two {

    0%,
    100% {
        transform: translateY(0) rotate(12deg);
    }

    50% {
        transform: translateY(-7px) rotate(18deg);
    }
}

/* Clouds */

.footer-cloud {
    position: absolute;

    border-radius: 9999px;

    background: #eff6ff;

    opacity: 0.6;
}

.footer-cloud-one {
    right: 8%;
    top: 18%;

    width: 11rem;
    height: 4rem;

    animation: cloud-drift-one 8s ease-in-out infinite;
}

.footer-cloud-two {
    left: 5%;
    bottom: 12%;

    width: 8rem;
    height: 3rem;

    animation: cloud-drift-two 10s ease-in-out infinite;
}

@keyframes cloud-drift-one {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(18px);
    }
}

@keyframes cloud-drift-two {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-14px);
    }
}

/* Floating circle */

.footer-circle {
    position: absolute;

    border-radius: 9999px;

    background: #fce7f3;

    opacity: 0.3;
}

.footer-circle-one {
    right: 24%;
    top: 12%;

    width: 5rem;
    height: 5rem;

    animation: circle-float 6s ease-in-out infinite;
}

@keyframes circle-float {

    0%,
    100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-10px) scale(1.05);
    }
}

/* Social buttons */

.footer-social {
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        color 0.25s ease,
        border-color 0.25s ease;
}

.footer-social:hover {
    transform: translateY(-4px) rotate(-3deg);

    box-shadow:
        0 8px 18px rgba(15, 23, 42, 0.08);
}

.footer-social:nth-child(even):hover {
    transform: translateY(-4px) rotate(3deg);
}

/* Contact */

.footer-contact {
    transition:
        transform 0.25s ease,
        background-color 0.25s ease,
        box-shadow 0.25s ease;
}

.footer-contact:hover {
    transform: translateY(-2px);

    box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.16);
}

/* Back to top */

.back-to-top {
    animation: back-to-top-float 3s ease-in-out infinite;

    transition:
        background-color 0.25s ease,
        box-shadow 0.25s ease;
}

@keyframes back-to-top-float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-4px);
    }
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {

    .footer-cat,
    .footer-letter,
    .footer-letter-small,
    .footer-number.active,
    .footer-face,
    .footer-paw-one,
    .footer-paw-two,
    .footer-cloud-one,
    .footer-cloud-two,
    .footer-circle-one,
    .back-to-top {
        animation: none;
    }

    .footer-social,
    .footer-contact {
        transition: none;
    }

    .footer-social:hover,
    .footer-contact:hover {
        transform: none;
    }
}
</style>