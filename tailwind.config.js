module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            aspectRatio: {
                'vertical': '9 / 16'
            },
            animation: {
                marquee: 'marquee 60s linear infinite',
                marquee2: 'marquee2 60s linear infinite',
              },
            keyframes: {
            marquee: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-100%)' },
            },
            marquee2: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0%)' },
            },
            }
        }
    }
}