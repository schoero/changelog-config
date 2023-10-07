# changelog-config

Shared config for changelogen

## Installation

```sh
npm i --save-dev @schoero/eslint-config
```

## Usage

Create a `changelog.config.js` with the following content:

```js
export * from "@schoero/changelog-config";
```

## Scripts

Add the following scripts to the `package.json`:

```json
{
  "postrelease:alpha": "npm run postrelease",
  "postrelease:beta": "npm run postrelease",
  "postrelease:latest": "eslint --fix package.json && markdownlint-cli2-fix 'CHANGELOG.md'",
  "prerelease:alpha": "npm run test -- --run && npm run build",
  "prerelease:beta": "npm run test -- --run && npm run build",
  "prerelease:latest": "npm run test -- --run && npm run build",
  "publish:alpha": "npm run publish:latest -- --publishTag alpha",
  "publish:beta": "npm run publish:latest -- --publishTag beta",
  "publish:latest": "changelogen gh release && changelogen --publish",
  "release:alpha": "npm run release -- --prerelease alpha",
  "release:beta": "npm run release -- --prerelease beta",
  "release:latest": "changelogen --bump --output --no-tag"
}
```
