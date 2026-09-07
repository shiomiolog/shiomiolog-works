<script setup lang="ts">
const navItems = [
    { label: 'WORKS', href: '#works' },
    { label: 'STUDIO', href: '#vtuber' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'WRITING', href: '#writing' },
    { label: 'LINKS', href: '#links' },
]
</script>

<template>
    <header class="
      fixed inset-x-0 top-0 z-50
      border-b border-slate-200/50
      bg-white/90
      backdrop-blur-md
    ">
        <div class="
        mx-auto flex h-16 max-w-7xl
        items-center justify-between
        px-6 md:px-10
      ">
            <!-- Logo -->
            <a href="#" class="flex items-center" aria-label="トップへ戻る">
                <img src="/images/logo/shiomio-sign-black.png" alt="汐猫みお" class="h-8 w-auto">
            </a>

            <!-- Desktop nav -->
            <nav class="hidden items-center gap-7 md:flex">
                <a v-for="item in navItems" :key="item.href" :href="item.href" class="
            font-mono-system
            text-xs
            tracking-[0.12em]
            text-slate-500
            transition
            hover:text-blue-500
          ">
                    {{ item.label }}
                </a>
            </nav>
        </div>
    </header>
</template>