import type { Config } from 'tailwindcss';
import threeD from 'tailwindcss-3d';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				'rotate-3d-xfast': 'rotation 5s infinite linear',
				'rotate-3d-fast': 'rotation 6.5s infinite linear',
				'rotate-3d-medium': 'rotation 8s infinite linear',
				'rotate-3d-slow': 'rotation 9s infinite linear',
				'rotate-3d-xslow': 'rotation 11s infinite linear',
				'rotate-3d-xxslow': 'rotation 14s infinite linear',
				open: 'open 1s linear',
			},
			keyframes: {
				rotation: {
					from: {
						transform: 'translateZ(-100px) rotateY(50deg) rotateX(-5deg) rotateZ(-30deg)',
					},
					to: {
						transform: 'translateZ(-100px) rotateY(409deg) rotateX(-5deg) rotateZ(-30deg)',
					},
				},
				open: {
					to: {
						transform: 'translateZ(-100px) rotateY(450deg) rotateX(-5deg) rotateZ(-30deg)',
					},
				},
			},
		},
	},
	plugins: [
		threeD,
		// @ts-ignore
		function ({ addUtilities, matchUtilities, theme }) {
			addUtilities({
				'.side-front': { transform: 'rotateY(0deg) translateZ(100px)' },
				'.side-back': { transform: 'rotateY(180deg) translateZ(100px)' },
				'.side-left': { transform: 'rotateY(-90deg) translateZ(100px)' },
				'.side-right': { transform: 'rotateY(90deg) translateZ(100px)' },
				'.side-top': { transform: 'rotateX(90deg) translateZ(100px)' },
				'.side-bottom': { transform: 'rotateX(-90deg) translateZ(100px)' },
				'.lid-front': { transform: 'rotateY(0deg) translateZ(110px) translateX(-10px) translateY(-10px)' },
				'.lid-back': { transform: 'rotateY(180deg) translateZ(110px) translateX(10px) translateY(-10px)' },
				'.lid-left': { transform: 'rotateY(-90deg) translateZ(120px)  translateY(-10px)' },
				'.lid-right': { transform: 'rotateY(90deg) translateZ(100px)  translateY(-10px)' },
				'.lid-top': { transform: 'rotateX(90deg) translateZ(120px) translateX(-10px) translateY(0)' },
				'.lid-bottom': { transform: 'rotateX(-90deg) translateZ(120px) translateX(-10px) translateY(0)' },

				'.paused': { 'animation-play-state': 'paused' },
				'.fill-forward': { 'animation-fill-mode': 'forwards' },
			});
		},
	],
} satisfies Config;
