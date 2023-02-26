<script lang="ts">
	export let languages: string[] = [];

	$: languagesList = languages
		.map((language, index) =>
			index !== languages.length - 1
				? `${language}, `
				: `and ${language}`
		)
		.join('');

	const gradientClasses = [
		'from-purple-400 to-purple-600',
		'from-rose-400 to-rose-600',
		'from-pink-400 to-pink-600',
		'from-orange-400 to-orange-600',
		'from-amber-400 to-amber-600',
		'from-green-400 to-green-600',
		'from-lime-400 to-lime-600',
		'from-teal-400 to-teal-600',
		'from-cyan-400 to-cyan-600',
		'from-indigo-400 to-indigo-600',
		'from-violet-400 to-violet-600',
		'from-sky-400 to-sky-600'
	];
</script>

<div class="space-y-3 rounded-2xl bg-gray-900 p-4 sm:p-8">
	<h3
		class="bg-gradient-to-tr bg-clip-text text-xl font-semibold leading-tight text-transparent {gradientClasses[
			Math.floor(Math.random() * gradientClasses.length)
		]}"
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
