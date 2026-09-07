<script setup lang="ts">
</script>

<template>
    <section id="vtuber" class="relative overflow-hidden bg-[#f9f9f9] px-6 py-10 md:px-10 md:py-14">
        <!-- Background paws -->
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
            <div class="paw paw-1">🐾</div>
            <div class="paw paw-2">🐾</div>
            <div class="paw paw-3">🐾</div>
        </div>

        <div class="relative z-10 mx-auto max-w-7xl">
            <div class="mb-10 text-center">
                <h2 class="text-center">
                    <img src="/images/logo/STUDIO.png" alt="STUDIO" class="mx-auto w-48 h-auto md:w-64">
                </h2>


                <p class="mt-3 text-sm tracking-[0.12em] text-slate-400">
                    配信とものづくり
                </p>
            </div>
            <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <!-- Text -->
                <div>

                    <p class="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                        個人勢VTuber「汐猫みお」として活動しています。
                        公式Webサイトや3Dモデルの制作、
                        配信環境の構成・運用など、
                        活動に必要なものを少しずつ自分で整えています。
                    </p>

                    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div class="cloud-card">
                            <p class="font-semibold text-slate-900">
                                🌐 公式サイト
                            </p>

                            <p class="mt-2 text-sm leading-6 text-slate-500">
                                NuxtとTypeScriptを使って、公式サイトを制作・運用しています。
                            </p>
                        </div>

                        <div class="cloud-card">
                            <p class="font-semibold text-slate-900">
                                🐈 3Dモデル
                            </p>

                            <p class="mt-2 text-sm leading-6 text-slate-500">
                                VTuber活動で使用する3Dアバターを自分で制作しています。
                            </p>
                        </div>

                        <div class="cloud-card">
                            <p class="font-semibold text-slate-900">
                                🎙 配信環境
                            </p>

                            <p class="mt-2 text-sm leading-6 text-slate-500">
                                OBSやアバター表示ソフトなどを組み合わせ、
                                配信環境を構成しています。
                            </p>
                        </div>

                        <div class="cloud-card">
                            <p class="font-semibold text-slate-900">
                                ✨ 制作・運営
                            </p>

                            <p class="mt-2 text-sm leading-6 text-slate-500">
                                Web、3D、配信、執筆などを横断して活動しています。
                            </p>
                        </div>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a href="https://shiomiolog.com/" target="_blank" rel="noopener noreferrer"
                            class="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600">
                            公式サイト
                        </a>

                        <a href="https://hub.vroid.com/characters/5938156979909452831/models/8534789753162588607"
                            target="_blank" rel="noopener noreferrer"
                            class="rounded-full border border-blue-100 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
                            3Dモデルを見る
                        </a>
                    </div>
                </div>

                <!-- Visual placeholder -->
                <div class="
                    flex min-h-[360px] items-center justify-center
                    rounded-[2rem]
                    border border-blue-100
                    bg-gradient-to-br from-blue-50 to-sky-100
                    p-8
                    shadow-[0_10px_28px_rgba(15,23,42,0.06)]
                ">
                    <div class="text-center">
                        <div class="text-6xl" aria-hidden="true">
                            🐾
                        </div>

                        <p class="mt-4 text-sm text-slate-400">
                            ここに3DモデルやVTuber画像を配置
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.paw {
    position: absolute;
    opacity: 0.08;
    font-size: 4rem;
    user-select: none;
}

.paw-1 {
    top: 10%;
    left: 4%;
    transform: rotate(-18deg);
}

.paw-2 {
    top: 45%;
    right: 6%;
    transform: rotate(14deg);
}

.paw-3 {
    bottom: 8%;
    left: 36%;
    transform: rotate(-8deg);
}

.cloud-card {
    position: relative;
    padding: 1.4rem 1.25rem 1.25rem;
    border-radius: 1.75rem;
    border: 1px solid #dbeafe;
    background: rgba(255, 255, 255, 0.96);

    box-shadow:
        0 6px 18px rgba(15, 23, 42, 0.05),
        0 2px 6px rgba(59, 130, 246, 0.04);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.cloud-card:hover {
    transform: translateY(-2px);

    box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.07),
        0 4px 10px rgba(59, 130, 246, 0.05);
}

.cloud-card::before,
.cloud-card::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: -0.45rem;
    border: 1px solid #dbeafe;
    border-bottom: 0;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 9999px 9999px 0 0;

    box-shadow:
        0 -2px 6px rgba(15, 23, 42, 0.025);
}

.cloud-card::before {
    left: 1.5rem;
    width: 3.5rem;
    height: 1.4rem;
}

.cloud-card::after {
    left: 4rem;
    width: 4rem;
    height: 1.7rem;
}

.cloud-card>* {
    position: relative;
    z-index: 1;
}
</style>