<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	const baseUrl = 'http://localhost:5003/api/student';
// 	let students = [];

// 	onMount(async () => {
// 		let res = await fetch(baseUrl);
// 		students = await res.json();
// 		console.log('onMount', students);
// 	});
</script>

<svelte:head>
	<title>Svelte Project</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Project</h1>

<div class="container py-2 mx-auto">
	<div class="p-3">
		<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mt-16">
			{#if students.length === 0}
				<p>Loading</p>
			{:else}
				{#each students as student}
				<li class="border py-4 px-2  lg:py-6 shadow-xl" transition:fade>
				  <a class="list-none flex flex-col items-center" href={`/students/${student._id}`}>
				  <h2 class="pb-4 text-2xl capitalize">{student.name}</h2>
				  <p class=""><span class="capitalize">grade</span>: {student.grade}</p>
				  <p class=""><span class="capitalize">gender</span>: {student.gender}</p>
				  <p class=""><span class="capitalize">School</span>: {student.school}</p>
				</a>
				</li>
				{/each}
			{/if}
		</ul>
	</div>
</div>
