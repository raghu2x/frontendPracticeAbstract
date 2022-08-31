<template>
	<section class="flex flex-wrap container mx-auto py-12 min-h-screen">
		<div v-for="card in cards" :key="card.id" class="w-full p-6 md:w-1/2 flex">
			<div class="w-24 mr-6 shrink-0">
				<img class="h-auto" :src="require(`@/assets/${card.image}`)" alt="" />
			</div>
			<div>
				<h1 class="text-2xl font-bold capitalize">{{ card.title }}</h1>
				<p class="text-xl">
					{{ card.body }}
				</p>
				<a
					class="text-blue-600 text-lg font-semibold hover:border-b border-blue-600"
					href="/abstract"
				>
					Learn More
					<font-awesome-icon icon="fa-solid fa-arrow-right" />
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				cards: [
					{
						id: 1,
						image: "branch.png",
						title: "using abstract",
						body: "Abstract lets you manage, version, and document your designs in one place.",
					},
					{
						id: 2,
						image: "profiles.png",
						title: "Manage your account",
						body: "Configure your account settings, such as your email, profile details, and password.",
					},
					{
						id: 3,
						image: "piece.png",
						title: "Manage organizations, teams, and projects",
						body: "Use Abstract organizations, teams, and projects to organize your people and your work.",
					},
					{
						id: 4,
						image: "dollar.png",
						title: "Manage billing",
						body: "Change subscriptions and payment details.",
					},
					{
						id: 5,
						image: "key.png",
						title: "Authenticate to Abstract",
						body: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
					},
					{
						id: 6,
						image: "msg.png",
						title: "Abstract support",
						body: "Get in touch with a human.",
					},
				],
			};
		},
	};
</script>
