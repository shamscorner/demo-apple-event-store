<script lang="ts">
	export let languages: string[] = [];

	$: languagesList = languages
		.map((language, index) =>
			index !== languages.length - 1
				? `${language}, `
				: `and ${language}`
		)
		.join('');
</script>

<div class="space-y-3 rounded-2xl bg-gray-900 p-4 sm:p-8">
	<h3
		class="bg-gradient-to-tr from-purple-400 to-purple-600 bg-clip-text text-xl font-semibold leading-tight  text-transparent"
	>
		<slot name="title" />
	</h3>
	<p class="text-sm">
		<slot />
	</p>
	<div class="text-xs text-gray-400">
		Presented in {languagesList}.
	</div>
</div>
