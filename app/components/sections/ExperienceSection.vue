<script setup lang="ts">
const certifications = [
    {
        date: '2019.03',
        title: 'ITパスポート試験 合格',
        note: '平成31年3月',
    },
    {
        date: '2022.06',
        title: 'ITパスポート試験 合格',
        note: '令和4年6月',
    },
    {
        date: '2023.01',
        title: '情報セキュリティマネジメント試験 合格',
        note: '令和5年1月',
    },
]

const events = [
    {
        date: '2026.04',
        title: 'セキュリティ・キャンプ2026 ミニ（東京開催）',
        note: 'セキュリティの学習に参加した。',
    },
    {
        date: '2025.10',
        title: 'セキュリティキャンプ2025 ミニ（オンライン開催）',
        note: 'オンライン開催のセキュリティキャンプミニに参加。',
    },
    {
        date: '2025.09',
        title: 'Google Hardware Hackathon Tokyo 2025',
        note: 'データセンターやサーバーについて学び、チームでハードウェアの組み立て・セットアップを体験。',
    },
    {
        date: '2025.08',
        title: 'セキュリティ・キャンプ2025 ミニ（東京開催）',
        note: 'Bトラックに参加し、ランサムウェア調査などを体験。',
    },
]

const contests = [
    {
        date: '2019.12',
        title: '日本情報オリンピック 予選',
        note: 'Bランク',
    },
]
</script>

<template>
    <section id="experience" class="bg-[#f9f9f9] px-6 py-10 md:px-10 md:py-14">
        <div class="mx-auto max-w-7xl">
            <!-- Heading -->
            <div class="mb-10 text-center">
                <h2 class="sr-only">
                    資格・参加歴
                </h2>

                <img src="/images/logo/EXPERIENCE.png" alt="EXPERIENCE" class="mx-auto h-auto w-44 md:w-60">

                <p class="mt-3 text-sm tracking-[0.12em] text-slate-400">
                    資格と参加したイベント
                </p>
            </div>

            <div class="grid gap-8 lg:grid-cols-2">
                <!-- Certifications -->
                <article
                    class="rounded-[2rem] border border-slate-200/70 bg-[#fafafa] p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:p-8">
                    <div class="flex items-center gap-3">
                        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl"
                            aria-hidden="true">
                            🎓
                        </span>

                        <h3 class="text-xl font-semibold text-slate-800">
                            資格
                        </h3>
                    </div>

                    <div class="mt-6 divide-y divide-slate-200/70">
                        <div v-for="item in certifications" :key="`${item.date}-${item.title}`"
                            class="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[80px_1fr]">
                            <p class="text-sm font-medium text-blue-500">
                                {{ item.date }}
                            </p>

                            <div>
                                <p class="font-semibold text-slate-800">
                                    {{ item.title }}
                                </p>

                                <p v-if="item.note" class="mt-1 text-sm leading-6 text-slate-500">
                                    {{ item.note }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 border-t border-slate-200/70 pt-6">
                        <div class="flex items-center gap-3">
                            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl"
                                aria-hidden="true">
                                🏆
                            </span>

                            <h3 class="text-xl font-semibold text-slate-800">
                                コンテスト・大会
                            </h3>
                        </div>

                        <div class="mt-6 divide-y divide-slate-200/70">
                            <div v-for="item in contests" :key="`${item.date}-${item.title}`"
                                class="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[80px_1fr]">
                                <p class="text-sm font-medium text-blue-500">
                                    {{ item.date }}
                                </p>

                                <div>
                                    <p class="font-semibold text-slate-800">
                                        {{ item.title }}
                                    </p>

                                    <p v-if="item.note" class="mt-1 text-sm leading-6 text-slate-500">
                                        {{ item.note }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Events -->
                <article
                    class="rounded-[2rem] border border-slate-200/70 bg-[#fafafa] p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:p-8">
                    <div class="flex items-center gap-3">
                        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl"
                            aria-hidden="true">
                            🛠️
                        </span>

                        <h3 class="text-xl font-semibold text-slate-800">
                            ハッカソン・セキュリティキャンプ
                        </h3>
                    </div>

                    <div class="mt-6 divide-y divide-slate-200/70">
                        <div v-for="item in events" :key="`${item.date}-${item.title}`"
                            class="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[80px_1fr]">
                            <p class="text-sm font-medium text-blue-500">
                                {{ item.date }}
                            </p>

                            <div>
                                <p class="font-semibold text-slate-800">
                                    {{ item.title }}
                                </p>

                                <p v-if="item.note" class="mt-1 text-sm leading-6 text-slate-500">
                                    {{ item.note }}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>