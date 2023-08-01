declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string
      PORT: '8000'
    }
  }
}

export {}
