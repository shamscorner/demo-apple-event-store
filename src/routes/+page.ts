import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		events: [
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
					'Get started with app discovery and marketing',
				description:
					'Learn how you can improve the discovery of your app on the App Store. We’ll explore the different ways people find apps on the App Store and show you how to make your own app more discoverable. Get to know the elements of a great product page, the role of search, referral traffic, and promotional features you can use to encourage new downloads.',
				languages: [
					'English',
					'Brazilian',
					'Portuguese',
					'Korean',
					'Spanish',
					'Thai'
				]
			},
			{
				id: 3,
				title:
					'Use Game Center to boost discovery and engagement',
				description:
					'Explore how Game Center, Apple’s social gaming network, helps players discover and engage with your game. Learn about Game Center and App Store features that can help you connect with new players and keep them coming back, as well as Apple technologies designed to deliver powerful gameplay experiences.',
				languages: [
					'English',
					'Brazilian',
					'Portuguese',
					'Mandarin',
					'Spanish'
				]
			},
			{
				id: 4,
				title:
					'Optimize subscriptions for success: acquisition',
				description:
					'Learn how you can acquire subscribers and grow your business using App Store features. We’ll explore subscriber acquisition strategies, share implementation best practices, and show you how to integrate these processes into your app for success.',
				languages: [
					'English',
					'Korean',
					'Mandarin',
					'Spanish'
				]
			},
			{
				id: 5,
				title: 'Get started with in-app events',
				description:
					'Discover how you can highlight your app or game’s content on the App Store. We’ll take you through the in-app events feature, as well as provide tips and best practices for helping people discover content or events within your app.',
				languages: [
					'English',
					'Brazilian',
					'Portuguese',
					'Korean',
					'Mandarin',
					'Spanish',
					'Thai'
				]
			},
			{
				id: 6,
				title: 'Make the most of in-app events',
				description:
					'Discover how you can highlight your app or game’s content on the App Store. We’ll take you through best practices, provide data-based recommendations, and share success stories from developers who have used in-app events to grow their business.',
				languages: [
					'English',
					'Brazilian',
					'Korean',
					'Spanish'
				]
			}
		]
	};
};
