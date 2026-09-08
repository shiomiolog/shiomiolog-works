<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

type Paw = {
    el: HTMLSpanElement
    timer: number
}

const paws: Paw[] = []

let lastX = 0
let lastY = 0

const DISTANCE = 48

const createPaw = (x: number, y: number) => {
    const paw = document.createElement('span')

    paw.className = 'paw-trail'
    paw.style.left = `${x}px`
    paw.style.top = `${y}px`
    paw.style.transform =
        `translate(-50%, -50%) rotate(${Math.random() * 24 - 12}deg)`

    document.body.appendChild(paw)
    requestAnimationFrame(() => {
        paw.classList.add('paw-trail-visible')
    })

    const timer = window.setTimeout(() => {
        paw.classList.remove('paw-trail-visible')

        window.setTimeout(() => {
            paw.remove()
        }, 500)
    }, 350)

    paws.push({
        el: paw,
        timer,
    })
}

const onMouseMove = (event: MouseEvent) => {
    const dx = event.clientX - lastX
    const dy = event.clientY - lastY
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < DISTANCE) {
        return
    }

    lastX = event.clientX
    lastY = event.clientY

    createPaw(event.clientX, event.clientY)
}

onMounted(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
        return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
    }

    window.addEventListener('mousemove', onMouseMove)
})

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMouseMove)

    for (const paw of paws) {
        window.clearTimeout(paw.timer)
        paw.el.remove()
    }
})
</script>

<template>
    <div aria-hidden="true" />
</template>