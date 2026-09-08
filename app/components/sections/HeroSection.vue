<script setup lang="ts">
const scrollToWorks = () => {
    document
        .getElementById('works')
        ?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <section class="section-panel relative flex min-h-[100svh] items-center overflow-hidden bg-[#f9f9f9] px-6 md:px-10">
        <!-- Decorative background -->
        <div class="pointer-events-none absolute inset-0">
            <div class="hero-dots absolute inset-0" />

            <div class="hero-blob hero-blob-one" />
            <div class="hero-blob hero-blob-two" />

            <div class="paw paw-one absolute left-[8%] top-[18%] text-4xl text-blue-200/50">
                🐾
            </div>

            <div class="paw paw-three absolute bottom-[24%] right-[24%] text-2xl text-blue-200/30">
                🐾
            </div>
        </div>

        <!-- Main content -->
        <div class="relative z-10 mx-auto w-full max-w-7xl">
            <div class="max-w-3xl">
                <p class="hero-enter hero-enter-1 mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">
                    Portfolio
                </p>

                <h1 class="sr-only">
                    汐猫みお
                </h1>

                <img src="/images/logo/shiomio-sign.png" alt="汐猫みお"
                    class="hero-enter hero-logo hero-enter-2 w-full max-w-[520px] md:max-w-[680px]">

                <div class="mt-3 max-w-2xl">
                    <p class="hero-note hero-enter hero-enter-3 text-xl leading-9 text-slate-600 md:text-2xl">
                        <img src="/images/hero/text.png" alt="セキュリティや情報法を勉強しつつ、Webを作ったり、文章を書いたりしています。"
                            class="inline-block w-full max-w-[300px] md:max-w-[500px]">
                    </p>

                    <p class="hero-note-sub hero-enter hero-enter-4 mt-1 text-sm text-slate-400">
                        <img src="/images/hero/text2.png" alt="たまに3Dモデルをいじったり、同人誌を書いたり。"
                            class="inline-block w-full max-w-[250px] md:max-w-[400px]">
                    </p>
                </div>

                <div class="hero-enter hero-enter-5 mt-9 flex flex-wrap gap-4">
                    <button type="button"
                        class="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
                        @click="scrollToWorks">
                        Worksを見る
                    </button>

                    <a href="https://github.com/shiomiolog" target="_blank" rel="noopener noreferrer"
                        class="rounded-full border border-blue-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-blue-300 hover:bg-blue-50">
                        GitHub
                    </a>
                </div>

                <!-- Mobile cat message -->
                <div class="hero-enter hero-enter-6 mt-10 flex justify-center md:hidden">
                    <CatMessage />
                </div>
            </div>
        </div>

        <!-- Desktop cat message -->
        <div class="hero-enter hero-enter-6 absolute bottom-24 right-[8%] z-20 hidden md:block">
            <CatMessage />
        </div>

        <!-- Walking cat -->
        <div class="cat-walk pointer-events-none absolute bottom-5 left-0 z-20" aria-hidden="true">
            <div class="cat-sprite">
                <img src="/images/cat-pixel-1.svg" alt="" class="cat-frame cat-frame-a">

                <img src="/images/cat-pixel-2.svg" alt="" class="cat-frame cat-frame-b">
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-enter {
    opacity: 0;
    transform: translateY(18px);

    animation: hero-enter 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-enter-1 {
    animation-delay: 0.08s;
}

.hero-enter-2 {
    animation-delay: 0.2s;
}

.hero-enter-3 {
    animation-delay: 0.36s;
}

.hero-enter-4 {
    animation-delay: 0.5s;
}

.hero-enter-5 {
    animation-delay: 0.66s;
}

.hero-enter-6 {
    animation-delay: 0.88s;
}

.hero-logo {
    transform: translateY(22px) scale(0.97);

    animation-name: hero-logo-enter;
}

@keyframes hero-logo-enter {
    from {
        opacity: 0;
        transform: translateY(22px) scale(0.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes hero-enter {
    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-note {
    font-family:
        "Hiragino Maru Gothic ProN",
        "Yu Gothic",
        sans-serif;

    letter-spacing: 0.04em;
    transform: rotate(-0.7deg);
}

.hero-note-sub {
    letter-spacing: 0.05em;
    transform: rotate(0.5deg);
}

.hero-dots {
    background-image:
        radial-gradient(circle,
            rgba(96, 165, 250, 0.18) 1.5px,
            transparent 1.5px);

    background-size: 32px 32px;

    mask-image:
        linear-gradient(to bottom,
            rgba(0, 0, 0, 0.8),
            transparent 90%);

    -webkit-mask-image:
        linear-gradient(to bottom,
            rgba(0, 0, 0, 0.8),
            transparent 90%);
}

.hero-blob {
    position: absolute;
    border-radius: 9999px;
    filter: blur(90px);
    opacity: 0.35;
}

.hero-blob-one {
    top: -10rem;
    right: -8rem;
    width: 34rem;
    height: 34rem;
    background: #bfdbfe;
}

.hero-blob-two {
    bottom: -10rem;
    left: -8rem;
    width: 30rem;
    height: 30rem;
    background: #dbeafe;
}

.cat-walk {
    animation: cat-walk-x 18s linear infinite;
}

.cat-sprite {
    position: relative;
    width: 64px;
    height: 48px;

    image-rendering: pixelated;

    animation: cat-bob 0.6s steps(1) infinite;
}

.cat-frame {
    position: absolute;
    inset: 0;

    width: 64px;
    height: 48px;

    image-rendering: pixelated;
}

.cat-frame-a {
    animation: cat-frame-a 0.6s steps(1) infinite;
}

.cat-frame-b {
    animation: cat-frame-b 0.6s steps(1) infinite;
}

@keyframes cat-walk-x {
    from {
        transform: translateX(-80px);
    }

    to {
        transform: translateX(calc(100vw + 80px));
    }
}

@keyframes cat-bob {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-2px);
    }
}

@keyframes cat-frame-a {

    0%,
    49.999% {
        opacity: 1;
    }

    50%,
    100% {
        opacity: 0;
    }
}

@keyframes cat-frame-b {

    0%,
    49.999% {
        opacity: 0;
    }

    50%,
    100% {
        opacity: 1;
    }
}

.paw {
    animation:
        paw-rotate 12s linear infinite,
        paw-float 4s ease-in-out infinite;

    transform-origin: center;
}

.paw-three {
    animation-duration: 20s, 6s;
}

@keyframes paw-rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes paw-float {

    0%,
    100% {
        translate: 0 0;
    }

    50% {
        translate: 0 -8px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .hero-enter,
    .hero-logo,
    .cat-walk,
    .cat-sprite,
    .cat-frame-a,
    .cat-frame-b,
    .paw {
        opacity: 1;
        transform: none;
        animation: none;
    }
}
</style>