import 'dotenv'
declare module 'dotenv' {
	export interface DotenvParseOutput {
		VITE_BASE_URL: string
		VITE_HOST: string
		VITE_PORT: number
		VITE_PROXY_DOMAIN: string
	}
}
