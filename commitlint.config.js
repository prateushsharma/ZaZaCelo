/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2, "always",
      ["feat","fix","chore","docs","style","refactor","perf","test","build","ci","revert","contract","infra"],
    ],
    "subject-max-length": [2, "always", 100],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [2, "always", "lower-case"],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "scope-enum": [
      2, "always",
      ["root","contracts","indexer","search-api","messaging-node","payment-adapter","sdk","dashboard","types","logger","tsconfig","eslint-config","infra","docker","k8s","deps"],
    ],
    "scope-empty": [2, "never"],
  },
};