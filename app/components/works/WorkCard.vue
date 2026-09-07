<script setup lang="ts">
import type { Work } from '~/types/work'

defineProps<{
    work: Work
}>()

const emit = defineEmits<{
    select: [work: Work]
}>()
</script>

<template>
    <article
        class="group cursor-pointer overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        @click="emit('select', work)">
        <div v-if="work.image" class="aspect-[16/10] overflow-hidden bg-blue-50">
            <img :src="work.image" :alt="work.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]">
        </div>

        <div class="p-6 md:p-7">
            <div class="mb-3 flex items-center gap-3 text-sm text-slate-400">
                <span>{{ work.category }}</span>

                <span v-if="work.year">
                    {{ work.year }}
                </span>
            </div>

            <h3 class="text-xl font-bold text-slate-900 md:text-2xl">
                {{ work.title }}
            </h3>

            <p class="mt-3 leading-7 text-slate-500">
                {{ work.description }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                <span v-for="tag in work.tags" :key="tag"
                    class="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                    {{ tag }}
                </span>
            </div>
        </div>
    </article>
</template>