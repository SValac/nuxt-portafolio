<script setup>
defineProps({
	limit: {
		type: Number,
		default: null
	}
});
</script>

<template>
	<BlogPosts
		v-slot="{ posts }"
		:limit="limit"
	>
		<div v-for="post in posts">
			<NuxtLink :to="post._path">
				{{ post.title }}
			</NuxtLink>
		</div>
	</BlogPosts>
</template>
