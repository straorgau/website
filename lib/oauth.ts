import { TidyHQ } from "./tidyhq";

const runtimeConfig = useRuntimeConfig();

export const tidyhq = new TidyHQ(
  runtimeConfig.public.tidyHq.clientId,
  runtimeConfig.tidyHq.clientSecret,
  "" // todo: create option in Nuxt runtimeConfig for callback URL
);