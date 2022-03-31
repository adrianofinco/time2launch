# 🚀 T2L

![Version](https://img.shields.io/github/package-json/version/adrianofinco/time2launch)
[![License](https://img.shields.io/github/license/adrianofinco/time2launch)](LICENSE.txt)
[![Issues](https://img.shields.io/github/issues/adrianofinco/time2launch)](https://github.com/adrianofinco/time2launch/issues)
[![Pull requests](https://img.shields.io/github/issues-pr-closed/adrianofinco/time2launch)](https://github.com/adrianofinco/time2launch/pulls)

![Vite](https://img.shields.io/github/package-json/dependency-version/adrianofinco/time2launch/dev/vite?logo=vite)
![Vue](https://img.shields.io/github/package-json/dependency-version/adrianofinco/time2launch/vue?logo=vue.js)
![Vue Router](https://img.shields.io/github/package-json/dependency-version/adrianofinco/time2launch/vue-router)
![Tailwind CSS](https://img.shields.io/github/package-json/dependency-version/adrianofinco/time2launch/dev/tailwindcss?logo=tailwindcss)

Time2Launch is a website for tracking upcoming spacecraft launches. Made with Vite, VueJs, and TailwindCSS.

Using the **Launch Library 2 API** the website allows following space launches from multiples companies and governments while providing detailed information about the launch.

Part of the shown information include:
- mission name
- provider (responsible for the launch)
- launch site
- location (city, state, country)
- countdown timer

## Getting started

```sh
git clone https://github.com/adrianofinco/time2launch
cd time2launch
npm i -D
npm run dev
```
Then access [localhost:300](localhost:3000) for viewing the site. Any changes to source files will take effect immediately on the website

### Building for production
```sh
npm run build
```
