const prompt = require('prompt');
const moment = require('moment');
const _ = require('underscore.string');
const yaml = require('js-yaml');
const fs = require('fs');

prompt.start();

/*eslint-disable */
prompt.get(['title', 'category', 'description'], (err, result) => {
  'use strict';
  const dir = `./content/posts/${moment().format('YYYY-MM-DD')}---${_.slugify(result.title)}`;
  let postFileStr = '---\n';

  const frontmatter = {
    title: result.title,
    date: moment().toJSON(),
    template: 'post',
    draft: true,
    slug: `posts/${_.slugify(result.title)}/`,
    category: result.category,
    tags: "",
    description: result.description
  };

  postFileStr += yaml.safeDump(frontmatter);
  postFileStr += '---\n';

  fs.writeFileSync(`${dir}.md`, postFileStr, {
    encoding: 'utf-8'
  });

  return console.log(dir);
});
