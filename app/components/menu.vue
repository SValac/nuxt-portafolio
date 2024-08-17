<script setup></script>

<template>
	<nav class="">
		<ul class="flex flex-col md:flex-row gap-2">
			<li>
				<NuxtLink
					to="/"
					class="link"
					>Home</NuxtLink
				>
			</li>
			<li>
				<NuxtLink
					to="/projects"
					class="link"
					>Projects</NuxtLink
				>
			</li>
			<li>
				<NuxtLink
					to="/blog"
					class="link"
					>Blog</NuxtLink
				>
			</li>
			<li>
				<NuxtLink
					to="/about"
					class="link"
					>About</NuxtLink
				>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
.link {
	@apply p-2 hover:bg-gray-200 rounded dark:hover:bg-gray-800 text-2xl md:text-base;
}
</style>
