<script setup lang="ts">
useSeoMeta({
    title: '汐猫みお Portfolio',
    description:
        '情報セキュリティ、情報法、Web開発、執筆、VTuber活動などをまとめた汐猫みおのポートフォリオサイトです。',

    ogTitle: '汐猫みお Portfolio',
    ogDescription:
        '情報セキュリティ、情報法、Web開発、執筆、VTuber活動などをまとめたポートフォリオサイトです。',
    ogImage: 'https://portfolio.shiomiolog.com/images/ogp.png',
    ogType: 'website',

    twitterCard: 'summary_large_image',
})
</script>

<template>
    <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <VTuberSection />
        <SkillsSection />
        <ExperienceSection />
        <WritingSection />
        <LinksSection />
    </main>
</template>