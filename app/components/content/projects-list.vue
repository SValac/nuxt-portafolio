<script setup lang="js">
const { data, error, status } = await useFetch(
	'https://api.github.com/users/piotr-jura-udemy/repos'
);
const repos = computed( () => data.value.filter( repo => repo.description).sort((a, b) => b.stargazers_count - a.stargazers_count) );
</script>

<template>
	<div class="not-prose">
		<h2>Projects</h2>
		<section v-if="status != 'success'">Esperando...</section>
		<section v-else-if="error"></section>
		<section v-else>
			<ul class="grid grid-cols-1 gap-4">
				<li
					v-for="repo in repos"
					:key="repo.id"
					class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-400 dark:hover:bg-gray-800 font-mono"
				>
					<a
						:href="repo.html_url"
						target="_blank"
					>
						<div class="flex items-center justify-between text-sm">
							<div class="semibold">{{ repo.name }}</div>
							<div>{{ repo.stargazers_count }} ⭐</div>
						</div>
						<p class="text-xs">{{ repo.description }}</p>
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>

<style scoped></style>
