<script setup lang="ts">
import { ref } from 'vue'
import type { Work } from '~/types/work'
import { works } from '~/data/works'

const selectedWork = ref<Work | null>(null)

const openWork = (work: Work) => {
    selectedWork.value = work
}

const closeWork = () => {
    selectedWork.value = null
}
</script>

<template>
    <section id="works" class="bg-white px-6 pt-22 pb-22 md:px-10 md:pt-20 md:pb-20">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 text-center">
                <h2 class="text-center">
                    <img src="/images/logo/WORKS.png" alt="WORKS" class="mx-auto w-48 h-auto md:w-64">
                </h2>

                <p class="mt-3 text-sm tracking-[0.18em] text-slate-400">
                    つくったもの
                </p>
            </div>

            <div class="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                <WorkCard v-for="work in works" :key="work.id" :work="work" @select="openWork" />
            </div>

            <WorkModal :work="selectedWork" @close="closeWork" />
        </div>
    </section>
</template>