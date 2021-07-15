<script>
	import { onMount } from 'svelte';
	const baseUrl = 'http://localhost:5003/api/student';
	let students = [];

	onMount(async () => {
		let res = await fetch(baseUrl);
		students = await res.json();
		console.log('onMount', students);
	});
</script>

<svelte:head>
	<title>Svelte Project</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Project</h1>

<div class="container py-2 mx-auto">
	<div class="p-2">
		<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mt-16">
			<li class="border py-4 px-2 flex flex-col items-center lg:py-6 shadow-xl ">
				<h2 class="pb-4 text-2xl">Ermias Kidane</h2>
				<p class=""><span class="capitalize">grade</span>: 16</p>
				<p class=""><span class="capitalize">gender</span>: male</p>
				<p class=""><span class="capitalize">School</span>: Institute of may nefhi</p>
			</li>
			<li class="border py-4 px-2 flex flex-col items-center lg:py-6 shadow-xl ">
				<h2 class="pb-4 text-2xl">Ermias Kidane</h2>
				<p class=""><span class="capitalize">grade</span>: 16</p>
				<p class=""><span class="capitalize">gender</span>: male</p>
				<p class=""><span class="capitalize">School</span>: Institute of may nefhi</p>
			</li>
			<li class="border py-4 px-2 flex flex-col items-center lg:py-6 shadow-xl ">
				<h2 class="pb-4 text-2xl">Ermias Kidane</h2>
				<p class=""><span class="capitalize">grade</span>: 16</p>
				<p class=""><span class="capitalize">gender</span>: male</p>
				<p class=""><span class="capitalize">School</span>: Institute of may nefhi</p>
			</li>
			<li class="border py-4 px-2 flex flex-col items-center lg:py-6 shadow-xl ">
				<h2 class="pb-4 text-2xl">Ermias Kidane</h2>
				<p class=""><span class="capitalize">grade</span>: 16</p>
				<p class=""><span class="capitalize">gender</span>: male</p>
				<p class=""><span class="capitalize">School</span>: Institute of may nefhi</p>
			</li>
		</ul>
	</div>
</div>
