# Contributing to the Ferdium Website

:tada: First off, thanks for taking the time and your effort to make Ferdium better! :tada:

## Table of contents

<!-- TOC depthFrom:2 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table of contents](#table-of-contents)
- [Code of Conduct](#code-of-conduct)
- [How do I contribute?](#how-do-i-contribute)
	- [Setup your development environment](#setup-your-development-environment)
		- [Node.js, pnpm](#nodejs-pnpm)
		- [Git](#git)
	- [Clone the repository](#clone-the-repository)
	- [Install dependencies](#install-dependencies)
	- [Add your modifications](#add-your-modifications)
	- [Build the website locally](#build-the-website-locally)
- [Learn More](#learn-more)

<!-- /TOC -->

## Code of Conduct

This project and everyone participating in it is governed by the [Ferdium Code of Conduct](https://raw.githubusercontent.com/ferdium/ferdium-app/develop/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.
Please report unacceptable behavior to [hello@ferdium.org](mailto:hello@ferdium.org).

## How do I contribute?

### Setup your development environment

#### Node.js, pnpm

You will need a working installation of Node.js, with the `pnpm` package manager.
It is advised to use the version recommended in the [`ferdium-app` repository](https://github.com/ferdium/ferdium-app/blob/develop/CONTRIBUTING.md#nodejs-npm-pnpm).

_Note:_ You can choose any version manager to manage multiple versions of `node` and `npm`. For eg, [nvm](https://github.com/nvm-sh/nvm) or [asdf](https://github.com/asdf-vm/asdf).

#### Git

The version [2.23.0](https://git-scm.com/downloads) for Git is working fine for development. You can then use the console from Git to do the development procedure.

### Clone the repository

```bash
git clone https://github.com/ferdium/ferdium-website.git
```

### Install dependencies

Run the following command to install all dependencies for NextJS.

```bash
pnpm install
```

### Add your modifications

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the content by modifying `.tsx` files in `pages/` or `components/`. The page auto-updates as you edit the files.

### Build the website locally

Ferdium website is statically generated to be served by GitHub Pages.
To locally build and export the next website, run the following command. The static output will be generated in `out/`.

```bash
pnpm run export
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
