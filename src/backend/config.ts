function requireEnvVariable(name: string): string {
  function fail(): never {
    console.error(`Environment variable ${name} is not set, exiting.`);
    process.exit(1);
  }
  return process.env[name] ?? fail();
}

export const port: number = Number(process.env.PORT ?? 8000);
export const host: string = process.env.HOST ?? "localhost";
export const giphyApiKey: string = requireEnvVariable("GIPHY_API_KEY");
