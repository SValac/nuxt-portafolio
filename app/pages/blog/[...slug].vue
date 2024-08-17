<script setup>
const activeId = ref(null);

onMounted(() => {
	const callback = (entries) => {
		console.log(entries);
		for (const entry of entries) {
			if (entry.isIntersecting) {
				activeId.value = entry.target.id;
				break;
			}
		}
	};
	const elements = document.querySelectorAll('h2, h3');
	const observer = new IntersectionObserver(callback, {
		root: null, // viewport
		threshold: 0.5 // percentage of visibility to trigger
	});

	for (const element of elements) {
		observer.observe(element);
	}
	// because is a SPA all pages are renderder inside browser
	// so we need to do a clean up. so when someone navigates
	// to another page we need to stop observing the elements
	onBeforeUnmount(() => {
		for (const element of elements) {
			observer.unobserve(element);
		}
	});
});
</script>

<template>
	<article class="prose dark:prose-invert max-w-none">
		<ContentDoc>
			<template v-slot="{ doc }">
				<div class="grid grid-cols-6 gap-16">
					<div
						:class="{
							'col-span-6 md:col-span-4': doc.toc,
							'col-span-6': !doc.toc
						}"
					>
						<ContentRenderer :value="doc" />
					</div>
					<div
						v-if="doc.toc"
						class="not-prose col-span-2"
					>
						<aside
							class="hidden md:col-span-2 md:block sticky top-10"
						>
							<div class="font-semibold mb-2">
								Table of Contents
							</div>
							<nav>
								<TocLinks
									:links="doc.body.toc.links"
									:active-id="activeId"
								/>
							</nav>
						</aside>
					</div>
				</div>
			</template>
			<template #not-found>
				<div class="text-center">Not found (404)</div>
				<p class="text-center">This blog post could not be found.</p>
			</template>
		</ContentDoc>
	</article>
</template>

<style scoped></style>
