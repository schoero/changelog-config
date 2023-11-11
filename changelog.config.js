/** @type {import('changelogen').ChangelogConfig} */
export default {
  excludeAuthors: [
    "Roger Schönbächler"
  ],
  output: "CHANGELOG.md",
  scopeMap: {},
  templates: {
    commitMessage: "chore(release): v{{newVersion}}",
    tagBody: "v{{newVersion}}",
    tagMessage: "v{{newVersion}}"
  },
  types: {
    build: { semver: "patch", title: "Build" },
    chore: { title: "Chore" },
    ci: { title: "CI" },
    docs: { semver: "patch", title: "Documentation" },
    examples: { title: "Examples" },
    feat: { semver: "minor", title: "Features" },
    fix: { semver: "patch", title: "Fixes" },
    perf: { semver: "patch", title: "Performance" },
    refactor: { semver: "patch", title: "Refactors" },
    style: { title: "Styles" },
    test: { title: "Tests" },
    types: { semver: "patch", title: "Types" }
  }
};
