# STRA Website Development
This document provides instructions on how to build the website for a **development** environment.

## Requirements
1. NodeJS 18 or newer
2. A text editor, preferably [Visual Studio Code](https://code.visualstudio.com/) with the official [Vue (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension.
3. Git 2.25 or newer.
4. Terminal, and terminal knowledge.

## Steps
First, we clone the repository from the source.
```bash
git clone https://codeberg.org/stra/website && cd website
```
We also make use of submodules, so clone those too.
```bash
git submodule init && git submodule update --init --recursive
```
However, by default, the submodules clone **everything** in the submodule, so we must enable sparse checkouts. This is **required** for parts of the website to properly function.
```bash
git config core.sparseCheckout true
```
We also must add the correct patterns to our Git sparse checkout settings.
```gitignore
# This goes in .git/modules/content/info/sparse-checkout
policies/*.md
!README.md
```
And finally, update the submodules.
```bash
git submodule foreach 'git sparse-checkout init'
```

To install dependencies (_including dev dependencies_), we can run the following.
```bash
npm install
```

## Important Commands
- `npm run dev` - Runs the development server
- `npm run preview` - Runs a preview of the production server
- `npm run build` - Builds the output of the Nuxt application
