import { getPostIds, getPostData } from '../../lib/posts';
import Nav from '../../components/intro/nav';
import Head from 'next/head';

import styles from '../../styles/Post.module.css';

export default function Post({ postData }) {
	return (
		<>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<div className={styles.container}>
				<Nav />
			</div>
			<div className={styles.post}>
				<h1 className={styles.title}>{postData.title}</h1>
				<div className={styles.body} dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const paths = getPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
