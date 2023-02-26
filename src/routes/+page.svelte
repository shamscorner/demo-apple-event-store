<script lang="ts">
	import AppleStoreLogo from '$lib/assets/app-store-sessions.svg';
	import EventCard from '$lib/components/EventCard.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="py-10">
	<img
		src={AppleStoreLogo}
		alt="Apple Store Logo"
		width="100"
		height="100"
	/>

	<HeroSection />

	<section id="section-event-list" class="mt-10">
		<ul class="flex flex-col gap-4">
			{#each data.events as event (event.id)}
				<li>
					<EventCard languages={event.languages}>
						<svelte:fragment slot="title">
							{event.title}
						</svelte:fragment>

						<p>{event.description}</p>
					</EventCard>
				</li>
			{/each}
		</ul>
	</section>
</div>
