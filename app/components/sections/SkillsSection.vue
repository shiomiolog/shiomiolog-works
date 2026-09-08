<script setup lang="ts">
const skillGroups = [
    {
        title: 'Web',
        items: ['Nuxt', 'Vue', 'TypeScript', 'Cloudflare'],
    },
    {
        title: 'Development',
        items: ['Git', 'GitHub', 'Linux', 'VS Code'],
    },
    {
        title: 'Writing',
        items: ['LaTeX', 'Markdown'],
    },
    {
        title: 'Creative',
        items: ['VRoid Studio', 'OBS'],
    },
]

const { target, isVisible } = useReveal()
</script>

<template>
    <section id="skills" ref="target" class="bg-white section-panel px-6 py-10 md:px-10 md:py-14">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 text-center transition-all duration-700 ease-out" :class="isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
                ">
                <h2 class="text-center">
                    <div class="relative inline-block">
                        <img src="/images/logo/SKILLS.png" alt="SKILLS" class="mx-auto w-48 md:w-64">

                        <span class="absolute -right-5 -top-2 rotate-12 text-lg opacity-30" aria-hidden="true">
                            🐾
                        </span>
                    </div>
                </h2>

                <p class="mt-3 text-sm tracking-[0.12em] text-slate-400">
                    つかっているもの
                </p>
            </div>

            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <article v-for="(group, index) in skillGroups" :key="group.title" class="
                            soft-card
                            border border-blue-100/60
                            bg-white/90
                            p-6
                            shadow-[0_8px_22px_rgba(15,23,42,0.04)]
                            transition-all duration-700 ease-out
                        " :class="isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                            " :style="{
                                transitionDelay: isVisible
                                    ? `${100 + index * 80}ms`
                                    : '0ms',
                            }">
                    <h3 class="text-lg font-semibold text-slate-800">
                        {{ group.title }}
                    </h3>

                    <div class="mt-5 flex flex-wrap gap-2">
                        <span v-for="item in group.items" :key="item" class="rounded-full border border-blue-100 bg-white px-3 py-1.5
                                   text-sm text-slate-600">
                            {{ item }}
                        </span>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>