<script setup>
defineProps({
	error: Object
});
</script>
<template>
	<NuxtLayout>
		<section class="text-center">
			<h1 class="text-4xl mb-2">Opps {{ error.statusCode }}</h1>
			<h2 class="text-xl text-gray-600 dark:text-gray-400">
				{{ error.statusMessage }}
			</h2>
		</section>
	</NuxtLayout>
</template>
