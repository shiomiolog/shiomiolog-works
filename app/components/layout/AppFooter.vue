<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <footer class="bg-[#fafafa] px-6 py-8 text-center">
        <p class="text-sm text-slate-400">
            © {{ year }} 汐猫みお
        </p>

        <p class="mt-2 text-xs text-slate-300">
            Made with Nuxt & TypeScript
        </p>
    </footer>
</template>