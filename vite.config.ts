import { defineConfig,loadEnv,CommonServerOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dotenv from 'dotenv'
import { DotenvParseOutput } from 'dotenv'
import * as fs from 'fs'
// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
   const env = loadEnv(mode, process.cwd() );
   const envFileName = '.env';
   const curEnvFileName = `${envFileName}.${mode}`;
   let server: CommonServerOptions = {};
   const envData = fs.readFileSync(curEnvFileName);
   const envMap: DotenvParseOutput = dotenv.parse(envData)
   //console.log('env-->',env,curEnvFileName,envMap);
   if (mode === 'development') {
      server = {
         host: envMap.VITE_HOST,
         port: Number(envMap.VITE_PORT),
         proxy: {
            [envMap.VITE_BASE_URL]: {
               target: envMap.VITE_PROXY_DOMAIN,
            },
         },
      }
   } else if (mode === 'production') {
      console.log('我是生成者环境')
      server = {
         port: Number(envMap.VITE_PORT),
         host: envMap.VITE_HOST,
      }
   }
   return {
    plugins: [vue()],
    server
   }
})
