import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdoc from '@markdoc/markdoc';

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

	/*
	posts.sort(function(a, b) {
		// Turn your strings into dates, and then subtract them
		// to get a value that is either negative, positive, or zero.
		return new Date(b["date"]) > new Date(a.["date"]);
	});
	*/

	console.log(posts[0]["date"])

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

	// convert markdown to html using Markdoc
	const ast = Markdoc.parse(fileContents)
	const content = Markdoc.transform(ast)
	const htmlContent = Markdoc.renderers.html(content)

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Combine the data with the id and contentHtml
	return {
		id,
		htmlContent,
		...matterResult.data,
	};
}
