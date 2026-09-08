<script setup lang="ts">
const { target, isVisible } = useReveal();

const links = [
    {
        label: 'GitHub',
        description: '開発したもの',
        href: 'https://github.com/shiomiolog',
        icon: 'simple-icons:github',
    },
    {
        label: 'Blog',
        description: '日々の記録や記事',
        href: 'https://blog.shiomiolog.com/',
        icon: 'material-symbols:article-outline',
    },
    {
        label: 'YouTube',
        description: 'VTuber活動',
        href: 'https://www.youtube.com/@shiomiolog',
        icon: 'simple-icons:youtube',
    },
    {
        label: 'Circle',
        description: '同人・寄稿活動',
        href: 'https://circle.shiomiolog.com/',
        icon: 'material-symbols:menu-book-outline',
    },
    {
        label: 'researchmap',
        description: '研究・学術活動',
        href: 'https://researchmap.jp/mayu2664',
        icon: 'material-symbols:school-outline',
    },
    {
        label: 'ORCID',
        description: '研究者ID',
        href: 'https://orcid.org/0009-0008-4197-3331',
        icon: 'simple-icons:orcid',
    },
]
</script>

<template>
    <section id="links" ref="target" class="section-panel bg-[#f9fbff] px-6 py-10 md:px-10 md:py-14">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 text-center transition-all duration-700 ease-out" :class="isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                ">
                <h2 class="text-center">
                    <img src="/images/logo/LINKS.png" alt="LINKS" class="mx-auto h-auto w-48 md:w-64">
                </h2>

                <p class="mt-3 text-sm tracking-[0.12em] text-slate-400">
                    いろいろなところ
                </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a v-for="(link, index) in links" :key="link.label" :href="link.href" target="_blank"
                    rel="noopener noreferrer" class="
                        link-card
                        group
                        border border-blue-100/60
                        bg-white/85
                        p-6
                        shadow-[0_6px_18px_rgba(15,23,42,0.035)]
                        backdrop-blur-sm
                        transition-all
                        duration-700
                        ease-out
                        hover:-translate-y-1
                        hover:border-blue-200
                        hover:bg-white
                        hover:shadow-[0_10px_24px_rgba(15,23,42,0.055)]
                    " :class="[
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0',

                        index === 1 ? 'lg:translate-y-3' : '',
                        index === 2 ? 'lg:-translate-y-1' : '',
                        index === 3 ? 'lg:translate-y-2' : '',
                        index === 5 ? 'lg:-translate-y-2' : '',
                    ]" :style="{
                        transitionDelay: isVisible
                            ? `${100 + index * 70}ms`
                            : '0ms',
                    }">
                    <div class="flex items-center gap-4">
                        <div class="
                                flex h-12 w-12 shrink-0
                                items-center justify-center
                                rounded-full
                                bg-blue-50/70
                                text-blue-500
                            ">
                            <Icon :name="link.icon" class="h-6 w-6" />
                        </div>

                        <div class="min-w-0">
                            <h3 class="
                                    text-lg font-semibold
                                    text-slate-800
                                    transition
                                    group-hover:text-blue-600
                                ">
                                {{ link.label }}
                            </h3>

                            <p class="mt-1 text-sm text-slate-500">
                                {{ link.description }}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.link-card:nth-child(3n + 1) {
    border-radius: 2rem 1.6rem 2.2rem 1.8rem;
}

.link-card:nth-child(3n + 2) {
    border-radius: 1.7rem 2.2rem 1.8rem 2rem;
}

.link-card:nth-child(3n) {
    border-radius: 2.2rem 1.8rem 1.7rem 2.1rem;
}
</style>