<script lang="ts">
	import AppleStoreLogo from '$lib/assets/app-store-sessions.svg';
	import EventCard from '$lib/components/EventCard.svelte';

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

	<section
		id="section-hero"
		class="space-y-4 text-lg leading-tight"
	>
		<h1 class="text-2xl font-bold">
			Meet with App Store experts
		</h1>
		<h2 class="mt-2 font-semibold text-gray-400">
			February 28 to April 13, 2023
		</h2>
		<p>
			Want to make your product pages even better? Have
			questions about in-app events or implementing
			subscriptions? Connect with App Store experts and
			learn how you can make the most of these features.
			Discover how to attract new customers, test marketing
			strategies, optimize subscriptions, and so much more.
			Live presentations with Q&A will be held in multiple
			time zones and languages.
		</p>
		<p>
			Registration is open to members of the Apple Developer
			Program. Please sign in with your Apple ID associated
			with your membership in the Apple Developer Program.
		</p>
		<div class="flex">
			<a
				href="https://developer.apple.com/events/view/"
				target="_blank"
				rel="noreferrer"
				class="flex items-center justify-center rounded-full bg-gradient-to-t from-blue-600 to-blue-500 px-3 py-1 text-sm transition hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600"
			>
				View schedule and register
			</a>
		</div>
	</section>

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
