<template>
	<nav class="bg-black text-white px-16 flex py-4 capitalize flex-wrap">
		<div class="flex items-center w-full justify-between border-">
			<a class="text-3xl flex hover:opacity-80" href="#">
				<svg
					class="h-10 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 51 51"
					preserveAspectRatio="xMinYMid slice"
				>
					<g class="abstract-logo-mark-footer" fill="#fff">
						<path
							d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"
						></path>
						<circle cx="21.24" cy="29.58" r="4.96"></circle>
					</g>
				</svg>
				Abstract
			</a>

			<a class="hidden md:block text-3xl border-l-2 ml-2 pl-2 hover:underline" href="/help">
				help center
			</a>
			<button
				class="hidden md:block border-2 text-lg font-semibold transition-all px-4 py-2 rounded-lg ml-auto"
			>
				submit a request
			</button>
			<button
				class="hidden md:block text-white bg-[#4C5FD5] hover:bg-white hover:text-black text-lg font-semibold transition-all px-6 py-2 rounded ml-5"
			>
				Sign in
			</button>
			<font-awesome-icon
				@click="isOpen = !isOpen"
				class="md:hidden cursor-pointer"
				:icon="isOpen?'fa-solid fa-bars':'fa-solid fa-xmark'"
				size="xl"
			/>
		</div>
		<div
			:class="{ 'h-0': isOpen }"
			class="md:hidden ease-linear w-full overflow-hidden flex flex-col gap-3 items-center mt-3 text-lg font-semibold"
		>
			<a class="" href="/help">help center</a>
			<button class="">submit a request</button>
			<button class="">Sign in</button>
		</div>
	</nav>
</template>
<script>
	export default {
		name: "Navbar",
		data() {
			return {
				isOpen: true,
			};
		},
	};
</script>
<style scoped></style>
