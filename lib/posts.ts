import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export function getPosts() {
  let posts: { id: string }[] = [];

  const fileNames = fs.readdirSync(postsDir).filter((name) => name[0] != '.');
  fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContent);

    if (matterResult.data.published) {
      posts.push({
        id,
        ...matterResult.data,
      });
    }
  });

  console.log(posts);

  return posts;
}

export function getPostIds() {
  const fileNames = fs.readdirSync(postsDir).filter((name) => name[0] != '.');

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
