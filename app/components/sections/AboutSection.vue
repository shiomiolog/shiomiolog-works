<script setup lang="ts">
const profileLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/shiomiolog',
    },
    {
        label: 'Blog',
        href: 'https://blog.shiomiolog.com/',
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/',
    },
]

const profileDetails = [
    {
        label: '研究',
        value: '情報セキュリティ、情報法、プライバシー、セキュリティガバナンス',
    },
    {
        label: '開発',
        value: 'Nuxt、Vue、TypeScript、Linux、Cloudflare、Git',
    },
    {
        label: '執筆',
        value: '技術記事、学術系文章、同人誌・寄稿',
    },
    {
        label: 'ツール',
        value: 'VS Code、GitHub、Figma、Google Workspace',
    },
    {
        label: '好きなこと',
        value: 'セキュリティ、法律、Web、鉄道、創作活動',
    },
]

import { onMounted, onBeforeUnmount, ref } from 'vue'

const aboutSection = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry?.isIntersecting) {
                isVisible.value = true
                observer?.disconnect()
            }
        },
        {
            threshold: 0.2,
        }
    )

    if (aboutSection.value) {
        observer.observe(aboutSection.value)
    }
})

onBeforeUnmount(() => {
    observer?.disconnect()
})
</script>

<template>
    <section id="about" ref="aboutSection"
        class="bg-[#f9f9f9] section-panel px-10 pt-20 pb-20 md:px-10 md:pt-24 md:pb-24">
        <div class="mx-auto max-w-7xl">
            <div class="grid gap-8 transition-all duration-700 ease-out lg:grid-cols-[0.9fr_1.1fr]" :class="isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
                ">
                <!-- Profile card -->
                <article class="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm md:p-9">
                    <div class="flex items-center gap-5">
                        <img src="/images/profile/icon.webp" alt="汐猫みお"
                            class="h-20 w-20 rounded-full border border-blue-100 object-cover">

                        <div>
                            <h3 class="text-2xl font-bold text-slate-900 md:text-3xl">
                                汐猫みお
                            </h3>

                            <p class="mt-1 text-sm text-slate-400">
                                @shiomiolog
                            </p>
                        </div>
                    </div>

                    <div class="mt-8 space-y-4 text-base leading-8 text-slate-600">
                        <p>
                            情報セキュリティと情報法を中心に学びながら、
                            Web開発、執筆、同人活動などを行っています。
                        </p>

                        <p>
                            技術と法制度の両面から、
                            情報通信やデジタル社会について考えています。
                        </p>
                        <p>
                            女です。VTuber活動もしています。
                        </p>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a v-for="link in profileLinks" :key="link.label" :href="link.href" target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:border-blue-200 hover:bg-blue-100">
                            {{ link.label }}
                        </a>
                    </div>

                    <div class="pointer-events-none mt-8 text-right text-2xl text-blue-200" aria-hidden="true">
                        🐾
                    </div>
                </article>

                <!-- Detail card -->
                <article class="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">
                    <dl>
                        <div v-for="detail in profileDetails" :key="detail.label"
                            class="grid gap-3 border-b border-blue-50 px-7 py-6 last:border-b-0 md:grid-cols-[140px_1fr] md:px-9">
                            <dt class="font-semibold text-slate-900">
                                {{ detail.label }}
                            </dt>

                            <dd class="leading-7 text-slate-500">
                                {{ detail.value }}
                            </dd>
                        </div>
                    </dl>
                </article>
            </div>
        </div>
    </section>
</template>