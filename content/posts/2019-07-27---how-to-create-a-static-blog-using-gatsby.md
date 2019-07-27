---
title: How to create a static blog using Gatsby
date: "2019-07-27T21:26:56.354Z"
template: post
draft: false
slug: posts/how-to-create-a-static-blog-using-gatsby/
category: Blogging
tags:
  - "Blogging"
  - "Web Development"
description: A tutorial on creating a static blog using Gatsby and creating a new post
---

There are many static site generators avaialble. But I felt Gatsby is very easy to learn and maintain.

In this tutorial we will learn

1. Getting Started
2. Select Starter
3. Creating a new post
4. Run & build blog

### Getting Started

Install `gatsby-cli` using this command

```shell
npm install -g gatsby-cli
```

### Select Starter

There are multiple starters available at Gatsby. I love the [lumen starter](https://github.com/alxshelepenok/gatsby-starter-lumen) by [@Alexander Shelepenok](https://github.com/alxshelepenok) which is used in building this site.

Install starter using this command

```shell
gatsby new blog https://github.com/alxshelepenok/gatsby-starter-lumen
```

This will create a `blog` folder with this structure

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils
```

### Creating a new post

We need to create a new file inside `content/posts/` folder with a format like this `date---new-blog-post.md`.
Example like this

```
└── content
    └── posts
        └── 2016-01-09---new-blog-post.md
```

In the markdown file we need to define these properties at the top.

```
---
title: New Blog Post
date: "2016-09-01T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/new-blog-post/"
category: "Blogging"
tags:
  - "Blogginh"
  - "Web development"
description: "My first blog post"
---
Hello World
```

This will display a blog post with title `New Blog Post` and content `Hello World`

To ease up the process I added this node.js script to populate a new post file

```js
/* create.js */
const prompt = require("prompt");
const moment = require("moment");
const _ = require("underscore.string");
const yaml = require("js-yaml");
const fs = require("fs");

prompt.start();

/*eslint-disable */
prompt.get(["title", "category", "description"], (err, result) => {
  "use strict";
  const dir = `./content/posts/${moment().format("YYYY-MM-DD")}---${_.slugify(
    result.title
  )}`;
  let postFileStr = "---\n";

  const frontmatter = {
    title: result.title,
    date: moment().toJSON(),
    template: "post",
    draft: true,
    slug: `posts/${_.slugify(result.title)}/`,
    category: result.category,
    tags: "",
    description: result.description
  };

  postFileStr += yaml.safeDump(frontmatter);
  postFileStr += "---\n";

  fs.writeFileSync(`${dir}.md`, postFileStr, {
    encoding: "utf-8"
  });

  return console.log(dir);
});
```

This file takes 3 inputs title, category and description. It automatically generates a markdown file with these values.

Add this script to package.json file like this

```json
{
  "scripts": {
    "create": "node create.js"
  }
}
```

Now you can execute this script using

```shell
npm run create
```

### Run & build blog

To run this blog in development with hot-reloading use this command

```shell
gatsby develop
```

It will run the local server at [localhost:8000](http://localhost:8000/)

To create production build use this command

```shell
gatsby build
```

To run the production build use this

```shell
gatsby serve
```

In next post I will explain more detail on deployment and adding other plugins to Gatsby
