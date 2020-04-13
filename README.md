![Nuxt + Amplify](https://hackernoon.com/hn-images/1*8IWuzPLE7Yv2mOmtucn1WQ.jpeg "Nuxt + Amplify")

# Make Sure You Have NPM
[Go here to install NPM.](https://www.npmjs.com/get-npm)

# About Nuxt Amplify Auth Starter
Nuxt Amplify Auth Starter is a starter template for adding Amplify Auth to a [Nuxt.js](https://nuxtjs.org/) single page web application. All you have to do is connect your Amazon Web Services account to it by using the Amplify CLI, and you will be able to add [Amazon Cognito Authentication](https://aws.amazon.com/cognito/) to your app in minutes.

## Install and configure the Amplify CLI
You must have the Amplify CLI installed on your machine to continue with this installation.
In order to do this, [head on over to the Amplify docs](https://aws-amplify.github.io/docs/).

## Add Amplify to your project
1. Run `amplify init` in your terminal.
2. When prompted *"Enter a name for the project"*, name it whatever you would like.
3. When prompted *"Enter a name for the environment"*, I recommend naming it **dev**, but this is also up to you.
4. When prompted *"Choose your default code editor"*, choose the code editor you use from the list.
5. When prompted *"Choose the type of app that you're building"*, choose **javascript**.
6. When prompted *"What javascript framework are you using"*, choose **vue**.
7. When prompted *"Source Directory Path:"*, choose **.** (just a period) since the default Nuxt.js structure doesn't use a **src** directory.
8. When prompted *"Distribution Directory Path:"*, choose the default **dist**.
9. When prompted *"Build Command:"*, choose the default `npm.cmd run-script build`.
10. When prompted *"Start Command:"*, enter `npm.cmd run-script start`.
11. When prompted *"Do you want to use an AWS profile?"*, choose **Y** and select the profile you want to use.

## Add Authentication to your project
1. Run `amplify add auth` in your terminal.
2. When prompted *"Do you want to use the default authentication and security configuration?"*, choose **Default configuration**.
3. When prompted *"How do you want users to be able to sign in?"*, choose **Username**.
4. When prompted *"Do you want to configure advanced settings?"*, choose **No, I am done**.

## Add Hosting for your project
1. Run `amplify add hosting` in your terminal.
2. When prompted *Select the environment setup*, choose **DEV (S3 only with HTTP)**.
The difference between DEV and PROD in this situation is what all resources AWS provisions for your app when you publish it.
DEV only uses an S3 for hosting your static files; whereas, PROD uses S3 for hosting your static files, CloudFront to deliver your static files through a CDN, and HTTPS.
3. When prompted *hosting bucket name*, name it whatever you would like or choose the default.
4. When prompted *index doc for the website*, choose the default.
5. When prompted *error doc for the website*, choose the default.

## Provisioning your Authentication and Hosting backend services
1. Run `amplify push` in your terminal.
2. When prompted *"Are you sure you want to continue?"*, choose **Y**.
List step takes a few minutes to complete.

## Launch the app for development
1. Run `npm run dev` in your terminal.

## Deploy the app to Hosting
1. Run `amplify publish` to auto-build your SPA and upload it to your S3 bucket.