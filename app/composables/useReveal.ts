import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useReveal = (threshold = 0.15) => {
    const target = ref<HTMLElement | null>(null)
    const isVisible = ref(false)

    let observer: IntersectionObserver | null = null

    onMounted(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            isVisible.value = true
            return
        }

        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    isVisible.value = true
                    observer?.disconnect()
                }
            },
            {
                threshold,
            },
        )

        if (target.value) {
            observer.observe(target.value)
        }
    })

    onBeforeUnmount(() => {
        observer?.disconnect()
    })

    return {
        target,
        isVisible,
    }
}