# Duxiana - Headless BigCommerce Setup

Custom BigCommerce headless project built with Gatsby, Netlify Functions and BigCommerce API

[![Netlify Status](https://api.netlify.com/api/v1/badges/2fab0d0d-dfd9-41f4-9b0f-835dd3d752f0/deploy-status)](https://app.netlify.com/sites/duxiana-gatsby-headless-demo/deploys)

## Features

- Automated dependency updates via `dependabot` support
- Font Awesome support
- Google Analytics support
- Google Fonts support
- Code linting support with `eslint`
- Heroicons support
- TailwindCSS support
- Sentry monitoring support
- SEO support

## Requirements

- [NodeJS](https://nodejs.org/en/download/)

  > **Recommended**: Use `nvm` instead of downloading a specific node package for better node version management (<https://github.com/nvm-sh/nvm>)

## Installation

- Inside root directory, type `yarn` to install package dependencies

## How to Run
### Netlify Dev

- If you want to use [Netlify Dev](https://www.netlify.com/products/dev/) built-in feature for local development, you need to authorize the repo to run the local its setup first. To start, login first to Netlify by typing: `yarn netlify:login`. Follow the instructions that will follow. You only need to do this once. After authenticating, you can start running the site by typing `yarn netlify:start`. **Netlify Dev** will run its setup locally and afterwards run both `gatsby clean` and `gatsby develop` automatically. Open a browser tab/window and type `localhost:8888` to run the setup and start developing.

	> **Note**: When the `env` variables are already in the **Netlify** admin panel, `netlify dev` will load those into your local development environment instead. Adding `env` variables locally via the provided `.env.sample` file will instruct `netlify dev` to override the values and use those local `env` variables instead.

	- You can access the GraphQL Playground by visiting `localhost:8888/__graphql`, assuming you already run `yarn start` command.
### Gatsby CLI

- Start by typing `yarn gatsby:start`. This will run both `gatsby clean` and `gatsby develop` automatically. Open a browser tab/window and type `localhost:8000` to run the setup and start developing.

	> **Note**: Adding valid `env` variables locally via the provided `.env.sample` file is required for `gatsby develop` to run.

- You can access the GraphQL Playground by visiting `localhost:8000/__graphql`, assuming you already run `yarn start` command.

## Work In Progress

- [ ] Internalization
- [ ] `react-testing-library` support
- [ ] Unit testing with `jest` Support
- [ ] E2E tests with `cypress` Support
- [ ] Performance profiling (e.g. `Lighthouse`)
- [ ] Visual testing with `Storybook`
- [ ] Page transitions support
- [ ] Third-party analytics support (e.g. `Hubspot`, etc)
- [ ] Search engine feature (e.g. `Algolia`, etc)
- [X] Third-party form support (e.g. `Formik`, `React Hook Form`, etc.)
- [ ] Third-party `store` support (e.g. payment, shipping, tax, etc.)
- [ ] Third-party site authentication support (e.g. `Facebook`, `Google`, etc.)

