import type { Work } from '~/types/work'

export const works: Work[] = [
    {
        id: 'shiomiolog-official',
        title: '汐猫みお 公式サイト',
        description:
            '個人勢VTuber「汐猫みお」のプロフィールや活動情報、各種リンクをまとめた公式Webサイトです。',
        image: '/images/works/shiomiolog-official.webp',
        tags: ['Nuxt', 'TypeScript', 'Cloudflare'],
        category: 'Web',
        year: '2026',
        github: 'https://github.com/shiomiolog/shiomiolog.com',
        url: 'https://shiomiolog.com/',
    },
    {
        id: 'shiomiolog-blog',
        title: 'Shiomiolog Blog',
        description:
            'Nuxt 4 と TypeScript を用いて構築した個人ブログです。',
        image: '/images/works/shiomiolog-blog.webp',
        tags: ['Nuxt', 'TypeScript', 'Cloudflare'],
        category: 'Web',
        year: '2026',
        github: 'https://github.com/shiomiolog/my-blog',
        url: 'https://blog.shiomiolog.com/',
    },
    {
        id: '2026-summer-guest-imas',
        title: '学術アイマス合同誌への寄稿',
        description:
            '2026年夏の学術アイマス合同誌に寄稿した作品です。',
        image: '/images/works/2026-summer-guest-imas.png',
        tags: ['Writing', 'LaTeX', 'Doujin'],
        category: '寄稿',
        year: '2026',
        url: 'https://circle.shiomiolog.com/works/guest/2026-summer-guest-imas',
    }
]