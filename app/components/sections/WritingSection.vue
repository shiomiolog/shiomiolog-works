<script setup lang="ts">
const writings = [
    {
        title: 'Nuxt4 & TypeScript でブログを自作した',
        description:
            'Nuxt 4 と TypeScript を使ってブログを構築したときの記録です。',
        category: 'ブログ',
        year: '2026',
        href: 'https://blog.shiomiolog.com/2026/07/29-new-blog',
    },
    {
        title: '学術アイマス合同誌への寄稿',
        description:
            '2026年夏の学術アイマス合同誌に寄稿した作品です。',
        category: '寄稿',
        year: '2026',
        href: 'https://circle.shiomiolog.com/works/guest/2026-summer-guest-imas',
    },
]
</script>

<template>
    <section id="writing" class="bg-white px-6 py-10 md:px-10 md:py-14">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 text-center">
                <h2 class="text-center">
                    <img src="/images/logo/WRITING.png" alt="WRITING" class="mx-auto w-48 h-auto md:w-64">
                </h2>


                <p class="mt-3 text-sm tracking-[0.12em] text-slate-400">
                    書いたもの
                </p>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
                <a v-for="writing in writings" :key="writing.title" :href="writing.href" target="_blank"
                    rel="noopener noreferrer" class="
            group
            rounded-[1.75rem]
            border border-slate-200/70
            bg-white
            p-6
            shadow-[0_6px_18px_rgba(15,23,42,0.04)]
            transition
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_10px_26px_rgba(15,23,42,0.07)]
          ">
                    <div class="flex items-center gap-3 text-sm text-slate-400">
                        <span>{{ writing.category }}</span>
                        <span>{{ writing.year }}</span>
                    </div>

                    <h3
                        class="mt-3 text-xl font-semibold text-slate-800 transition group-hover:text-blue-600 md:text-2xl">
                        {{ writing.title }}
                    </h3>

                    <p class="mt-3 leading-7 text-slate-500">
                        {{ writing.description }}
                    </p>

                    <div class="mt-5 text-sm font-medium text-blue-500">
                        読む →
                    </div>
                </a>
            </div>

            <div class="mt-8 text-center">
                <a href="https://blog.shiomiolog.com/" target="_blank" rel="noopener noreferrer" class="
            inline-flex
            rounded-full
            border border-blue-100
            bg-white
            px-5 py-2.5
            text-sm font-semibold
            text-blue-700
            transition
            hover:bg-blue-50
          ">
                    ブログをもっと見る
                </a>
            </div>
        </div>
    </section>
</template>