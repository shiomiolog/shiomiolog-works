<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import type { Work } from '~/types/work'

const props = defineProps<{
    work: Work | null
}>()

const emit = defineEmits<{
    close: []
}>()

const close = () => {
    emit('close')
}

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.work) {
        close()
    }
}

watch(
    () => props.work,
    (work) => {
        document.body.style.overflow = work ? 'hidden' : ''
    }
)

onMounted(() => {
    window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
})
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="work"
                class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 py-6 backdrop-blur-sm"
                @click.self="close">
                <article
                    class="relative max-h-[88svh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-blue-100 bg-white shadow-xl"
                    role="dialog" aria-modal="true" :aria-label="`${work.title} の詳細`">
                    <button type="button" aria-label="閉じる"
                        class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-xl text-slate-500 backdrop-blur transition hover:bg-blue-50 hover:text-blue-600"
                        @click="close">
                        ×
                    </button>

                    <!-- Image -->
                    <div v-if="work.image" class="aspect-[16/9] overflow-hidden rounded-t-[2rem] bg-blue-50">
                        <img :src="work.image" :alt="work.title" class="h-full w-full object-cover">
                    </div>

                    <div v-else
                        class="flex aspect-[16/9] items-center justify-center rounded-t-[2rem] bg-gradient-to-br from-blue-50 to-sky-100">
                        <span class="text-5xl text-blue-200" aria-hidden="true">
                            🐾
                        </span>
                    </div>

                    <!-- Content -->
                    <div class="p-7 md:p-10">
                        <div class="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                            <span>{{ work.category }}</span>

                            <span v-if="work.year">
                                {{ work.year }}
                            </span>
                        </div>

                        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            {{ work.title }}
                        </h2>

                        <p class="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                            {{ work.description }}
                        </p>

                        <div class="mt-7 flex flex-wrap gap-2">
                            <span v-for="tag in work.tags" :key="tag"
                                class="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600">
                                {{ tag }}
                            </span>
                        </div>

                        <div v-if="work.url || work.github || work.article"
                            class="mt-9 flex flex-wrap gap-3 border-t border-blue-50 pt-7">
                            <a v-if="work.url" :href="work.url" target="_blank" rel="noopener noreferrer"
                                class="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600">
                                サイトを見る
                            </a>

                            <a v-if="work.github" :href="work.github" target="_blank" rel="noopener noreferrer"
                                class="rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100">
                                GitHub
                            </a>

                            <a v-if="work.article" :href="work.article" target="_blank" rel="noopener noreferrer"
                                class="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">
                                関連記事
                            </a>
                        </div>

                        <div class="pointer-events-none mt-8 text-right text-2xl text-blue-200" aria-hidden="true">
                            🐾
                        </div>
                    </div>
                </article>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.25s ease;
}

.modal-enter-active article,
.modal-leave-active article {
    transition:
        transform 0.25s ease,
        opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from article,
.modal-leave-to article {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
}

@media (prefers-reduced-motion: reduce) {

    .modal-enter-active,
    .modal-leave-active,
    .modal-enter-active article,
    .modal-leave-active article {
        transition: none;
    }
}
</style>