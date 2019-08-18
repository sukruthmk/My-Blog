---
title: How to deploy React apps to Netlify
date: "2019-08-18T21:22:31.553Z"
template: post
draft: false
slug: posts/how-to-deploy-react-apps-to-netlify/
category: Deployment
tags:
  - "Web Development"
  - "React"
  - "Netlify"
  - "Deployment"
description: Steps to build a production React app and deploy it to Netlify
---

If you are a React developer, then you might have come across a situation to deploy it to a live site for testing purpose. There are various options available for deploying a React app. I love Netlify because of its simplicity and lambda functions.

First, you need to create a Netlify account. Netlify offers a free plan and you can register here.. [Netlify Signup](https://app.netlify.com/signup)

There are two ways to deploy a React app to Netlify. One way is through Netlify CLI and another way is with Netlify website. I am going to talk only about Netlify CLI option since it's more suited for developers.

##### Netlify CLI

First, we will install Netlify CLI globally. Since we might want to use it across different projects.

```shell
npm install netlify-cli -g
```

Once we installed Netlify CLI. We need to create a production build of our React app. Use this command to create the build from the root of your project.

```shell
npm run build
```

This will create a `./build` folder which we will use it for deployment.

Next, we run this command to start the deployment process.

```shell
netlify deploy
```

If you are running this for the first time you might get a popup saying login to your Netlify account like this.

![Netlify auth popup](/media/netlify-auth-popup.png)

Once you have authorized follow these steps to deploy.

1. In the console, if it says **This folder isn’t linked to a site yet. What would you like to do?**. Select the option **Create & configure a new site**. Since we are creating a new site

2. Next, choose a name for the site. I’ll type `portfolio on Netlify` (You can type any available name which you like).

3. Now it will ask for the Netlify account which you want to use, So, select your account here.

4. After that step, we will be asked to enter the deployment path. So, just type `./build` in the command prompt.

5. Now, our site will get created and will have a draft URL which we use to test.

Now once everything is tested and looks good with draft URL. We will move on to deployment in production. Use this command.

```shell
netlify deploy --prod
```

It will ask again to enter the deployment path. Just enter `./build` again.

Now we will get the live URL which is where our site will be accessible.

Now you might end up with **Page not found error** when you access the URL.

This is happening because we might be using React router in our application.

To fix this issue we need to create `_redirects` file inside the `./build` folder.

After creating the file. Add this content to it.

```
/*    /index.html  200
```

If you are like me and you feel this is an extra step that you have to repeat every time. Since, `./build` the folder is overwritten whenever we create a production build. It becomes painful to create the `_redirects` file now and then.

So, I created this script to fix that issue.

Just create the `netlify.js` file inside the root of your project.

`gist:sukruthmk/a7ee5a2e9e9352663d1e4b46e3543a0c#netlify.js`

After that, we might need to add this dependency to your project. So, run this command.

```shell
npm i -D fs
```

Once this is completed. Update your `package.json` file like this.

```json
{
  "scripts": {
    "build": "react-scripts build && node netlify.js"
  }
}
```

So, now every time you run build command it will automatically create a `_redirects` file inside the `./build` folder.

You can also deploy your React app to Github. But, I will cover that in another article.

Happy Hacking!
