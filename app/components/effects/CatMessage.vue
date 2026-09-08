<script setup lang="ts">
import { computed, ref } from 'vue'

const messages = [
    '見に来てくれてありがとう！\nゆっくりしていってね。',
    '作品も見ていってね！',
    '肉球を追いかけてみてね。',
    '今日も何かつくってるかも。',
]

const messageIndex = ref(0)
const isClicked = ref(false)

const currentMessage = computed(() => messages[messageIndex.value])

const changeMessage = () => {
    messageIndex.value = (messageIndex.value + 1) % messages.length

    isClicked.value = true

    window.setTimeout(() => {
        isClicked.value = false
    }, 350)
}
</script>

<template>
    <div class="cat-message-wrapper">
        <!-- Message -->
        <div class="cat-message">
            <p>
                {{ currentMessage }}
            </p>

            <span class="cat-message-hint" aria-hidden="true">
                ねこをクリックしてみて
            </span>
        </div>

        <!-- Cat -->
        <button type="button" class="cat-button" aria-label="ねこをクリックしてメッセージを変える" @click="changeMessage">
            <svg class="cat" :class="{ 'cat-clicked': isClicked }" viewBox="0 0 180 140"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <!-- Tail -->
                <path class="cat-tail" d="
                        M128 106
                        C155 104 163 86 152 72
                        C145 63 135 68 139 76
                        C143 84 143 91 134 94
                    " fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" />

                <!-- Body -->
                <path d="
                        M47 132
                        C47 101 58 82 75 75
                        C83 71 97 71 105 75
                        C123 82 133 101 133 132
                        Z
                    " fill="currentColor" />

                <!-- Left ear -->
                <path d="
                        M58 67
                        L64 36
                        L83 58
                        Z
                    " fill="currentColor" />

                <!-- Right ear -->
                <path d="
                        M122 67
                        L116 36
                        L97 58
                        Z
                    " fill="currentColor" />

                <!-- Head -->
                <ellipse cx="90" cy="75" rx="38" ry="32" fill="currentColor" />

                <!-- Eyes -->
                <circle cx="77" cy="73" r="3.2" fill="white" />

                <circle cx="103" cy="73" r="3.2" fill="white" />

                <!-- Mouth -->
                <path d="
                        M82 83
                        Q86 89 90 83
                        Q94 89 98 83
                    " fill="none" stroke="white" stroke-width="3" stroke-linecap="round" />
            </svg>
        </button>
    </div>
</template>

<style scoped>
.cat-message-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0;
}

.cat-message {
    position: relative;

    width: min(280px, 70vw);

    margin-bottom: 1.25rem;

    padding: 1rem 1.25rem;

    border-radius:
        1.3rem 1.3rem 0.8rem 1.3rem;

    background: rgba(241, 245, 249, 0.96);

    color: #475569;

    box-shadow:
        0 8px 24px rgba(15, 23, 42, 0.045);
}

.cat-message::after {
    content: "";

    position: absolute;

    right: -15px;
    bottom: 18px;

    width: 0;
    height: 0;

    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-left: 16px solid rgba(241, 245, 249, 0.96);
}

.cat-message p {
    margin: 0;

    white-space: pre-line;

    font-size: 0.9rem;
    line-height: 1.7;
}

.cat-message-hint {
    position: absolute;

    top: -1.65rem;
    right: 0;

    font-size: 0.7rem;
    color: #94a3b8;
}

.cat-button {
    flex-shrink: 0;

    width: 130px;

    padding: 0;

    border: 0;

    background: transparent;

    color: #85898f;

    cursor: pointer;
}

.cat {
    display: block;

    width: 100%;
    height: auto;

    overflow: visible;

    transform-origin: center bottom;

    animation: cat-float 3s ease-in-out infinite;

    transition:
        color 0.25s ease,
        transform 0.25s ease;
}

.cat-button:hover .cat {
    transform: translateY(-2px);
}

.cat-clicked {
    animation:
        cat-jump 0.35s ease,
        cat-float 3s ease-in-out 0.35s infinite;
}

.cat-tail {
    transform-box: fill-box;
    transform-origin: left center;

    animation: tail-wag 2.4s ease-in-out infinite;
}

@keyframes cat-float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-3px);
    }
}

@keyframes cat-jump {
    0% {
        transform: translateY(0) scale(1);
    }

    45% {
        transform: translateY(-10px) scale(1.03);
    }

    100% {
        transform: translateY(0) scale(1);
    }
}

@keyframes tail-wag {

    0%,
    100% {
        transform: rotate(-8deg);
    }

    50% {
        transform: rotate(10deg);
    }
}

@media (max-width: 640px) {
    .cat-message-wrapper {
        align-items: center;
    }

    .cat-message {
        width: min(220px, 62vw);

        margin-bottom: 0.75rem;

        padding: 0.85rem 1rem;
    }

    .cat-button {
        width: 100px;
    }

    .cat-message p {
        font-size: 0.82rem;
    }

    .cat-message-hint {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {

    .cat,
    .cat-tail,
    .cat-clicked {
        animation: none;
    }
}
</style>