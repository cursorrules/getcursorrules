import { elixirRules } from "@/data/rules/elixir";
import { astroRules } from "./rules/astro";
import { cRules } from "./rules/c";
import { dataAnalystRules } from "./rules/data-analyst";
import { deepLearningRules } from "./rules/deep-learning";
import { djangoRules } from "./rules/django";
import { expoReactNativeRules } from "./rules/expo";
import { fastapiRules } from "./rules/fastapi";
import { flaskRules } from "./rules/flask";
import { goRules } from "./rules/go";
import { juliaRules } from "./rules/julia";
import { laravelRules } from "./rules/laravel";
import { metaPromptRules } from "./rules/meta-prompt";
import { nestjsRules } from "./rules/nestjs";
import { nextjsRules } from "./rules/nextjs";
import { pythonRules } from "./rules/python";
import { railsRules } from "./rules/rails";
import { reactNativeRules } from "./rules/react-native";
import { swiftuiRules } from "./rules/swift";
import { tauriRules } from "./rules/tauri";
import { unityCSharpRules } from "./rules/unity-c-sharp";
import { vueTsRules } from "./rules/vue";
import { flutterRules } from "./rules/flutter";
import { angularRules } from "./rules/angular";
import { dotnetRules } from "./rules/dotnet";
import { svelteKit5Rules } from "./rules/sveltekit";
import { gatsbyRules } from "./rules/gastby";
import { springBootRules } from "./rules/spring-boot";

export const rules = [
  ...springBootRules,
  ...astroRules,
  ...nextjsRules,
  ...swiftuiRules,
  ...laravelRules,
  ...railsRules,
  ...fastapiRules,
  ...flaskRules,
  ...djangoRules,
  ...cRules,
  ...vueTsRules,
  ...metaPromptRules,
  ...expoReactNativeRules,
  ...reactNativeRules,
  ...juliaRules,
  ...dataAnalystRules,
  ...goRules,
  ...pythonRules,
  ...elixirRules,
  ...deepLearningRules,
  ...tauriRules,
  ...nestjsRules,
  ...unityCSharpRules,
  ...flutterRules,
  ...angularRules,
  ...dotnetRules,
  ...svelteKit5Rules,
  ...gatsbyRules,
];

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));
  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule.tags.includes(tag)),
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}
