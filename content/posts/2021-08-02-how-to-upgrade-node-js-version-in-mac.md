---
template: post
title: How to upgrade node.js version in mac?
slug: how-to-upgrade-nodejs-version-in-mac
socialImage: /media/image-2.jpg
draft: false
date: 2021-08-01T23:56:22.885Z
description: This tutorial will help you if you need to upgrade your node.js
  version in your Mac
category: Web Development
tags:
  - Web Development
  - node.js
---
Follow these commands to upgrade your node.js version

### 1. Clean you npm cache

```shell
sudo npm cache clean -f
```

### 2. Intall n

[N](https://github.com/tj/n) is an npm-based node version manager

```shell
sudo npm install -g n
```

### 3. Install the latest version

```shell
sudo n stable
```