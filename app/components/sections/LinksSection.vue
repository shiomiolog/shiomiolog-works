<script setup lang="ts">
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
    <section id="links" class="bg-[#f9f9f9] px-6 py-10 md:px-10 md:py-14">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 text-center">
                <h2 class="text-center">
                    <img src="/images/logo/LINKS.png" alt="LINKS" class="mx-auto w-48 h-auto md:w-64">
                </h2>


                <p class="mt-3 text-sm tracking-[0.12em] text-slate-400">
                    いろいろなところ
                </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a v-for="link in links" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer"
                    class="
                    group
                    rounded-[1.75rem]
                    border border-slate-200/70
                    bg-[#fafafa]
                    p-6
                    shadow-[0_6px_18px_rgba(15,23,42,0.04)]
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:bg-blue-50/40
                    hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]
                ">
                    <div class="flex items-center gap-4">
                        <div
                            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-blue-500 shadow-sm">
                            <Icon :name="link.icon" class="h-6 w-6" />
                        </div>

                        <div class="min-w-0 flex-1">
                            <h3 class="text-lg font-semibold text-slate-800 transition group-hover:text-blue-600">
                                {{ link.label }}
                            </h3>

                            <p class="mt-1 text-sm text-slate-500">
                                {{ link.description }}
                            </p>
                        </div>

                        <Icon name="material-symbols:arrow-forward-rounded"
                            class="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>