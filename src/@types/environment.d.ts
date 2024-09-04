namespace NodeJS {
  interface ProcessEnv {
    OPENAI_API_KEY: string;
    CHROMA_HOST: string;
    NODE_ENV: "development" | "production";
  }
}
