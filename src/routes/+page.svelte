<script lang="ts">
	import AppleStoreLogo from '$lib/assets/app-store-sessions.svg';
	import EventCard from '$lib/components/EventCard.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';

	// TODO: take this list from API
	const eventsList = [
		{
			id: 1,
			title:
				'Measure and improve acquisition with App Analytics',
			description:
				'Learn how App Analytics can help you better understand user acquisition, so you can make data-informed decisions. Explore ways to find out where your users are coming from and review definitions of key metrics. We’ll also discuss how peer group benchmarks and other features can help improve your acquisition strategy.',
			languages: [
				'English',
				'Brazilian',
				'Portuguese',
				'Japanese',
				'Korean',
				'Mandarin',
				'Spanish'
			]
		},
		{
			id: 2,
			title:
				'Measure and improve acquisition with App Analytics',
			description:
				'Learn how App Analytics can help you better understand user acquisition, so you can make data-informed decisions. Explore ways to find out where your users are coming from and review definitions of key metrics. We’ll also discuss how peer group benchmarks and other features can help improve your acquisition strategy.',
			languages: [
				'English',
				'Brazilian',
				'Portuguese',
				'Japanese'
			]
		}
	];
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
			{#each eventsList as event (event.id)}
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
