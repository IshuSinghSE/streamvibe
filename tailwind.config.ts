import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
    theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: 'hsl(var(--card))',
    			cardForeground: 'hsl(var(--card-foreground))',
    			popover: 'hsl(var(--popover))',
    			popoverForeground: 'hsl(var(--popover-foreground))',
    			primary: {
    				'100': 'hsl(var(--primary-100))',
    				'200': 'hsl(var(--primary-200))',
    				'300': 'hsl(var(--primary-300))',
    				'400': 'hsl(var(--primary-400))',
    				'500': 'hsl(var(--primary-500))',
    				'600': 'hsl(var(--primary-600))',
    				'700': 'hsl(var(--primary-700))',
    				'800': 'hsl(var(--primary-800))',
    				DEFAULT: 'hsl(var(--primary))'
    			},
    			secondary: {
    				'100': 'hsl(var(--secondary-100))',
    				'200': 'hsl(var(--secondary-200))',
    				'300': 'hsl(var(--secondary-300))',
    				'400': 'hsl(var(--secondary-400))',
    				'500': 'hsl(var(--secondary-500))',
    				'600': 'hsl(var(--secondary-600))',
    				'700': 'hsl(var(--secondary-700))',
    				'800': 'hsl(var(--secondary-800))',
    				DEFAULT: 'hsl(var(--secondary))'
    			},
    			primaryForeground: 'hsl(var(--primary-foreground))',
    			secondaryForeground: 'hsl(var(--secondary-foreground))',
    			muted: 'hsl(var(--muted))',
    			mutedForeground: 'hsl(var(--muted-foreground))',
    			accent: 'hsl(var(--accent))',
    			accentForeground: 'hsl(var(--accent-foreground))',
    			destructive: 'hsl(var(--destructive))',
    			destructiveForeground: 'hsl(var(--destructive-foreground))',
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart1: 'hsl(var(--chart-1))',
    			chart2: 'hsl(var(--chart-2))',
    			chart3: 'hsl(var(--chart-3))',
    			chart4: 'hsl(var(--chart-4))',
    			chart5: 'hsl(var(--chart-5))'
    		},
    		fontFamily: {
    			manrope: [
    				'var(--font-manrope)',
    				'sans-serif'
    			],
    			righteous: [
    				'var(--font-righteous)',
    				'sans-serif'
    			]
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
} satisfies Config;
