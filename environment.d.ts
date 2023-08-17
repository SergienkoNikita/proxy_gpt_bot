declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string
      PORT: '8000'

      DB_NAME: string
      DB_HOST: string
      DB_PORT: string
      DB_USER: string
      DB_PASSWORD: string
    }
  }
}

export {}
