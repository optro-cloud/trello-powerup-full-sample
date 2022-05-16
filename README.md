## Trello Power-Up Full Sample

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/optro-cloud/trello-powerup-full-sample/Lint)
![GitHub issues](https://img.shields.io/github/issues/optro-cloud/trello-powerup-full-sample)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![TypeScript](https://img.shields.io/badge/typescript-v4-orange)
![React](https://img.shields.io/badge/react-v17-blue)
![Webpack](https://img.shields.io/badge/webpack-v5-green)

This repository contains a feature-complete [Trello Power-Up](https://developer.atlassian.com/cloud/trello/guides/power-ups/your-first-power-up/) that can be used as a template for new Power-Ups! It implements a simple note-taking (To-Do App) application which allows you to add notes to Cards and then interact with these Cards across the interface.

All available capabilities are implemented in TypeScript, with the UI provided by React Components. The project takes advantage of the Hot Reload technology provided by React and Webpack to make development a breeze!

### Try it now! (no download required)

We've hosted the Power-Up on GitHub Pages so that you can try out the Power-Up without needing to download or install anything. Simply follow the instructions below to see what the sample offers:

1. Create a new Power-Up at https://www.trello.com/power-ups/admin
2. Paste the following URL in the 'Power-Up URL' field `https://optro-cloud.github.io/trello-powerup-full-sample/`
3. Enable the Capabilities you'd like to try out on the 'Capabilities' tab
4. Finally, navigate to a Trello Board and add the Power-Up from the 'Custom' tab
5. You should see the Power-Up added to the Board and any functionality is active.

### Customize it

Create a custom build of this sample using our [Generator](https://github.com/optro-cloud/create-trello-powerup).

It's as easy as running ```npx @optro/create-trello-powerup@latest``` in your command line and following the on screen instructions.

The generator allows you to select which features to enable and has integrated support for monetization with [Optro](https://www.optro.cloud/about) using [Optro vendor](https://vendor.optro.cloud/)

**To get started with the generator you can follow our [step-by-step walkthrough](https://docs.appfox.io/optro-vendor/Use-the-Power-Up-Generator.150732928.html).**

### What capability examples are included?

This template contains everything you need to get developing, hosting and monetizing your own Power-Up, with example extension points, such as:

* 🛹 [**Board Button**](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/board-buttons/) - A button shown in the top-right of the Board, which can be clicked to show a full-screen panel which shows Notes from all Cards in the Board.
* 🃏 [**Card Button**](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/card-buttons/) - A button shown in the right sidebar of a Card, which allows you add new notes to the Card using a form.
* 🛠 [**Settings**](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/show-settings/) - Accessible from the Power-Up menu of the Board, this panel allows you to configure global options of the Power-Up - in this case, it allows you to configure the colors used to differentiate notes.
* 🎒 [**Card Back Section**](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/card-back-section/) - This section is shown when you click on a Card, underneath the Description field and shows all the Notes currently attached to it.
* 📛 [**Card Badges**](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/card-badges/) - Shown on the front of the Card, Badges let you summarize information about the contents of the Card, in this case, we show the number of Notes attached to the Card.
* 🛣 [**List Sorters**](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/list-sorters/) - Sort Cards within a List using the '...' menu at the top of the List, this allows users to sort their Cards by the number of Notes they have attached.
* 🏃‍♀️ [**List Actions**]() - You can perform actions on a List in Trello from the '...' menu. This is used in this example to allow users to remove all notes from Cards in the List.

### What technology has been utilized?

This template aims to provide a good starting point for new development and as such, it endorses the latest technologies:

* 👩‍💻 **TypeScript** - All files related to the Power-Up are written in [TypeScript](https://www.typescriptlang.org/) and types for the Trello API are included (src/types/trello.d.ts).
* ⚛️ **React** - The Front-end of the Power-Up is written in [React](https://reactjs.org/), which let's you use the latest methodologies and features of React such as Hooks, as well as enabling you to utilize a huge library of React libraries and UI Packs from npm.
* 🌍 **Webpack** - This [framework](https://webpack.js.org/) allows the Power-Up to be built in a variety of different ways:
   * Development  (`yarn watch`) - Use the [Hot Reload](https://github.com/gaearon/react-hot-loader) and Dev Server together to refresh changes to the Power-Up automatically - meaning you can spend less time refreshing the browser and more time developing. This makes changing the UI and CSS as seamless as possible during development. This script also automatically configures and starts an ngrok tunnel that provides you with a public HTTPS URL that can be entered into the Power-Up Admin interface to add it to Trello.
   * Production (`yarn build`) - Build your Power-Up into static files in the `dist` folder, which can be used to deploy your Power-Up to a hosting solution like S3, Google Cloud Storage or Azure Storage.
   * Production (`yarn serve`) - If you're hosting the Power-Up within a runtime such as Node.js or Docker, you can use a simple static file server to serve the files. Make sure you're built the Power-Up with `yarn build` first!
* 🐟 **Babel** - We use [Babel](https://babeljs.io/) to enable you to write the Power-Up in the latest version of [ECMAScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/), while transpiling the code to a language level that most browsers can understand (ES6).
* ☂ **ESLint** - Use [ESLint](https://eslint.org/) to check the code for common problems and differences from style guidelines stored in `.eslintrc.json`

### Would you like to make money from your Power-Up?

Until now, adding monetization to a Trello Power-Up is time consuming and can bring a lot of extra work. The great news is that’s now a thing of the past!

[Optro](https://www.optro.cloud), the first marketplace platform for Trello Power-Ups, has now been made available to any developer and makes it easy to monetize your Power-Ups with an integrated licensing system.

It’s [free to sign up](https://vendor.optro.cloud/apply), and once registered follow this [step-by-step guide](https://docs.appfox.io/optro-vendor/Monetize-your-Trello-Power-Ups.153878549.html) to begin adding monetization to your Power-Up.

### How do I get started developing?

The best way to get started is to use the Power-Up Generator to build a template for you in minutes. The Generator uses this repository to generate a new Power-Up (Project) based on your requirements. We would recommend this approach for most developers, especially if you are considering monetization.

However, if you'd like to use the template directly without the Power-Up Generator, please follow the steps below to get going:

1. Create a new Power-Up on Trello from the [Admin Page](https://trello.com/power-ups/admin)
2. Enable the capabilities in the 'Capabilities' section that you'd like to enable (e.g. all)
3. Create a `.env` file based on the `.env.example` file and change the following values:
	* POWERUP_NAME - The name of your new Power-Up
	* POWERUP_ID - The Power-Up ID, retrieved from the URL of the Power-Up configuration page that you landed on in Step 1 (e.g. https://trello.com/power-ups/**abc001**/edit)
	* POWERUP_APP_KEY - Get your App Key from Trello on [this page](https://trello.com/app-key)
4. Install dependencies with `yarn install` or `npm install`
5. Run the Power-Up in development mode with `yarn dev` or `npm run dev`
6. You will be provided a URL endpoint like https://a0d9081f2351.ngrok.io/ - this should be pasted in the 'Iframe Connector URL' field on the Power-Up configuration page.
7. Open a Trello Board and add the Power-Up you created in Step 1 from the 'Custom' section.
8. You now have a Power-Up running and should see any changes you make to the React front-end are automatically reflected in the browser!

### Project Structure

Find out how the project is structured and what the files do!

 * `src/`
 	* `capabilities.ts` - This is the Power-Up descriptor and describes which capabilities are implemented - e.g. Card Buttons. Any UI elements that are rendered by Trello itself are contained in this file.
 	* `router.ts` - This file contains the React-Router code, which is used to render the correct React components for their corresponding URL's.
	* `server.ts` - A basic script to serve the pages using Node.js (not recommended, as you can use the static files in /dist to save overhead/money). Call it with `yarn start`
	* `dev-watch.ts` - A script that runs a self-contained development environment. Call it with `yarn watch`
    * `dev-server.ts` - Runs the 'server.ts' file after reading in any environmental variables from your `.env` file. Call it with `yarn start:dev`.
  	*  `api/` - Contains any abstracted API functions that are used by the App (e.g. openPopup, getNotesForCard).
 	* `<capability>/` - Each capability that includes a React Front-End has its own folder components and styles.
 	* `types/` - Contains Typings for the Power-Up and for Trello.
 * `static/` - Contains static files that should be included in the Power-Up distribution (e.g. Favicon)
 * `templates/` - Contains handlebars templates that are used by Webpack to build matching *.html files for each extension point.
 * `.env.example` - An example environmental variables file that can be used during development (make a copy of this file, name it `.env` and modify it according to your requirements.
 * `package.json` - This file describes the dependencies used by the Power-Up, basic information and scripts.
 * `webpack.config.ts` - The Webpack file describes 'how the Power-Up should be compiled' and handles transpiling, file generation and also contains the configuration for running the Webpack Dev Server.
	* Run `yarn build` to build the app in production mode.
	* Run `yarn build:dev` to build and watch for changes in development mode.

### Running in Production

There are a number of ways you can run your Power-Up in production.

We recommend compiling the Power-Up into static HTML and CSS files and serving this using a Cloud Hosting Provider.

#### Option 1 - Deploy the Power-Up as Static Files

The easiest way to deploy your Power-Up is by compiling it into static files and serving them from a Hosting Provider:

1. Compile the Power-Up into static files using the `yarn build` or `npm run build` command.
2. Deploy the `dist/` folder to your chosen Hosting Provider:
	* AWS - [Host a static website using AWS Amplify](https://aws.amazon.com/getting-started/hands-on/host-static-website/) or [Host a static website with Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
	* Azure - [Static website hosting in Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)
	* Heroku - [Host a static website with Heroku Static Buildpack](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static)
	* GitHub - [Host a static website with GitHub Pages](https://pages.github.com/) (Not suitable for monetized Power-Ups)

#### Option 2 - Deploy the Power-Up in a Runtime

You can choose to host the Power-Up using a runtime, or server, which has to be running in order for the Power-Up to work. This template doesn't provide a full server-side platform, such as Express.js, but does provide a simple static website server to get you up and running - including a Dockerfile for running the Power-Up on a number of providers.

There are too many ways to fully describe the options here, but the following resources should explain how to deploy using a runtime:

* AWS - [Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html), [ECS](https://aws.amazon.com/getting-started/hands-on/deploy-docker-containers/) or [EKS](https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_EKS.html)
* Azure - [Azure Container Instances](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-app)
* Google Cloud (GCP) - [Cloud Run](https://cloud.google.com/run/docs/deploying)
* Heroku - [Using the Heroku Container Registry](https://devcenter.heroku.com/articles/container-registry-and-runtime) or [Use heroku.yml to automate build/deployment](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)

### Where can I get assistance?

There are a number of resources available to help build and customize your Trello Power-Up:

* [Step-by-step Guide to Building a Power-Up ](https://vendor.optro.cloud/build-trello-powerup)
* [Trello Developer Guides](https://developer.atlassian.com/cloud/trello/)
* [Trello Developer Capability Reference](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/)
* [Trello Developer REST API Reference](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/)
* [Atlassian Developer Community](https://community.developer.atlassian.com/)
