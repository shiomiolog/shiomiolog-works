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
</script>

<template>
    <section id="skills" class="bg-white px-6 py-10 md:px-10 md:py-14">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 text-center">
                <h2 class="text-center">
                    <img src="/images/logo/SKILLS.png" alt="SKILLS" class="mx-auto w-48 h-auto md:w-64">
                </h2>


                <p class="mt-3 text-sm tracking-[0.12em] text-slate-400">
                    つかっているもの
                </p>
            </div>

            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <article v-for="group in skillGroups" :key="group.title"
                    class="rounded-[1.75rem] border border-slate-200/70 bg-[#fafafa] p-6 shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
                    <h3 class="text-lg font-semibold text-slate-800">
                        {{ group.title }}
                    </h3>

                    <div class="mt-5 flex flex-wrap gap-2">
                        <span v-for="item in group.items" :key="item"
                            class="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-sm text-slate-600">
                            {{ item }}
                        </span>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>