<template>
	<div class="flex flex-col gap-10 z-1">
		<div
			v-motion="{
				initial: { opacity: 0, x: -100 },
				animate: { opacity: 1, x: 0 },
				transition: { duration: 0.4 }
			}"
			class="flex flex-col gap-2"
		>
			<h1 class="text-7xl">Hampus Tuvesson</h1>
			<h2 class="text-4xl font-extralight text-primary">Software Developer</h2>
		</div>
		<div class="flex flex-col sm:flex-row justify-between gap-10">
			<div
				v-motion="{
					initial: { opacity: 0, x: -100 },
					animate: { opacity: 1, x: 0 },
					transition: { duration: 0.4 }
				}"
				class="text-black flex justify-center items-center "
			>
				<img src="../assets/images/hampus.jpeg" alt="Picture" class="rounded-lg w-56 object-cover">
			</div>
			<div
				v-motion="{
					initial: { opacity: 0, x: 100 },
					animate: { opacity: 1, x: 0 },
					transition: { duration: 0.4 }
				}"
				class="flex flex-col gap-2 w-full sm:w-3/5 font-light text-lg"
			>
				<p>I'm a full-stack developer who enjoys solving problems and building things for the web. 
					I mainly work with Vue/Nuxt, Quarkus, Java, and TypeScript across both frontend and backend.
				</p>
				<p>I currently work as a consultant at CGI, where I help develop software for clients using these 
					technologies along with CI/CD and agile ways of working.
				</p>
			</div>
		</div>
	</div>
</template>