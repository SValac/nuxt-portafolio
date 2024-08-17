<script setup>
const colorMode = useColorMode();
const modes = ['system', 'light', 'dark'];
const nextModeIcons = {
	system: '🌙',
	light: '☀️',
	dark: '🌑'
};
const showNextModeLabel = ref(false);

const nextMode = computed(() => {
	const currentModeIndex = modes.indexOf(colorMode.preference);
	let nextModeIndex = null;

	if (currentModeIndex + 1 === modes.length) {
		nextModeIndex = 0;
	} else {
		nextModeIndex = currentModeIndex + 1;
	}

	return modes[nextModeIndex];
});

const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

const toggleColorMode = () => {
	colorMode.preference = nextMode.value;
};
</script>

<template>
	<div class="flex items-center space-x-2">
		<div
			v-show="showNextModeLabel"
			class="text-gray-500 text-xs"
		>
			change to {{ nextMode }}
		</div>
		<button
			class="hover:bg-slate-200 dark:hover:bg-slate-400 px-2 py-1 text-gray-600 rounded text-4xl md:text-base"
			@click="toggleColorMode"
			@mouseenter="showNextModeLabel = true"
			@mouseleave="showNextModeLabel = false"
		>
			{{ nextModeIcon }}
		</button>
	</div>
</template>

<style scoped></style>
