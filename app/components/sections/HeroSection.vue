<script setup lang="ts">
const scrollToWorks = () => {
    document
        .getElementById('works')
        ?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <section class="relative flex min-h-[100svh] items-center overflow-hidden bg-[#f9f9f9] px-6 md:px-10">
        <!-- Decorative background -->
        <div class="pointer-events-none absolute inset-0">
            <div class="hero-dots absolute inset-0" />

            <div class="hero-blob hero-blob-one" />
            <div class="hero-blob hero-blob-two" />

            <!-- paw marks -->
            <div class="paw paw-one absolute left-[8%] top-[18%] text-4xl text-blue-200/50">
                🐾
            </div>

            <div class="paw paw-two absolute right-[12%] top-[24%] text-3xl text-blue-200/40">
                🐾
            </div>

            <div class="paw paw-three absolute right-[24%] bottom-[24%] text-2xl text-blue-200/30">
                🐾
            </div>
        </div>

        <!-- Main content -->
        <div class="relative z-10 mx-auto w-full max-w-7xl">
            <div class="max-w-3xl">
                <p class="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">
                    Portfolio
                </p>

                <h1 class="sr-only">
                    汐猫みお
                </h1>

                <img src="/images/logo/shiomio-sign.png" alt="汐猫みお" class="w-full max-w-[520px] md:max-w-[680px]">

                <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                    研究、セキュリティ、情報法、
                    開発と執筆。
                </p>

                <p class="mt-4 max-w-xl text-base leading-7 text-slate-500">
                    技術と法を学びながら、Web開発や執筆、
                    ものづくりをしています。
                </p>

                <div class="mt-9 flex flex-wrap gap-4">
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
            </div>
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
.hero-dots {
    background-image:
        radial-gradient(circle,
            rgba(96, 165, 250, 0.18) 1.5px,
            transparent 1.5px);
    background-size: 32px 32px;
    mask-image: linear-gradient(to bottom,
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

@media (prefers-reduced-motion: reduce) {

    .cat-walk,
    .cat-sprite,
    .cat-frame-a,
    .cat-frame-b {
        animation: none;
    }
}

.paw {
    animation:
        paw-rotate 12s linear infinite,
        paw-float 4s ease-in-out infinite;
    transform-origin: center;
}

.paw-two {
    animation-duration: 16s, 5s;
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
    .paw {
        animation: none;
    }
}
</style>