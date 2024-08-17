<script setup>
const props = defineProps({
	limit: {
		type: Number,
		default: null
	}
});
const { data } = await useAsyncData('blog-list', () => {
	const query = queryContent('/blog')
		.only(['title', '_path', 'publishedAt'])
		.where({ _path: { $ne: '/blog' } })
		.sort({ publishedAt: 1 });
	if (props.limit) {
		query.limit(props.limit);
	}
	return query.find();
});

const posts = computed(() => {
	if (!data.value) {
		return [];
	}

	const result = [];
	let lastYear = null;

	for (const post of data.value) {
		const year = new Date(post.publishedAt).getFullYear();
		const displayYear = lastYear !== year;
		post.displayYear = displayYear;
		post.year = year;
		lastYear = year;
		result.push(post);
	}

	return result;
});
</script>

<template>
	<slot :posts="posts">
		<section class="not-prose font-mono">
			<div class="column text-gray-400 text-sm">
				<div>date</div>
				<div>title</div>
			</div>
			<ul>
				<li
					v-for="post in posts"
					:key="post._path"
				>
					<NuxtLink
						:to="post._path"
						class="column group hover:bg-gray-100 dark:hover:bg-gray-800 ease-in duration-200"
					>
						<div
							:class="{
								'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800 ease-in duration-200':
									!post.displayYear,
								'text-gray-400 ': post.displayYear
							}"
						>
							{{ post.year }}
						</div>
						<div>
							{{ post.title }}
						</div>
					</NuxtLink>
				</li>
			</ul>
		</section>
	</slot>
</template>

<style scoped>
.column {
	@apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
