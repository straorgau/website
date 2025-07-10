import { TidyHQ } from "./tidyhq";
import { Zitadel } from "./zitadel";

const runtimeConfig = useRuntimeConfig();

export const tidyhq = new TidyHQ(
  runtimeConfig.public.tidyHq.clientId,
  runtimeConfig.tidyHq.clientSecret,
  "" // todo: create option in Nuxt runtimeConfig for callback URL
);

export const zitadel = new Zitadel(
  runtimeConfig.zitadel.authEndpoint,
  runtimeConfig.zitadel.clientId,
  runtimeConfig.zitadel.clientSecret,
  "http://localhost:3000/api/redirect"
)