<script>
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// export let editStudent;
	let loading = false;

	let data = {
		name: '',
		gender: '',
		grade: '',
		school: ''
	};


	const baseUrl = 'http://localhost:5003/api/student';

	let URL, method;
	let addStudent = async () => {
		if (
			data.name.trim() === '' ||
			data.gender.trim() === '' ||
			data.grade === '' ||
			data.school.trim() === ''
		) {
			return;
		}

		loading = true;

		
		const res = await fetch(`${baseUrl}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		// const res = await fetch(URL, {
		// 	method,
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(data)
		// });

		const post = res.json();
// 		dispatch('studentCreated', post);
		goto("/")

		data = {
			name: '',
			gender: '',
			grade: '',
			school: ''
		};
		loading = false;
	};
</script>

<section class=" mt-6">
	<div class="container py-4">
		<div class="py-4 px-3">
			<h2 class="text-center text-2xl">Student Form</h2>
			{#if !loading}
				<form class="flex flex-col items-center" on:submit|preventDefault={addStudent}>
					<div class="flex flex-col w-3/4 ">
						<label for="name" class="py-2  text-base">Name</label>
						<input
							bind:value={data.name}
							type="text"
							class="p-2 outline-none rounded-sm  border border-gray-400"
							id="name"
							placeholder="Enter Name"
						/>
					</div>
					<div class="flex flex-col w-3/4 ">
						<label for="gender" class="py-2 text-base">Gender</label>
						<input
							bind:value={data.gender}
							type="text"
							class="p-2 outline-none rounded-sm  border border-gray-400"
							id="gender"
							placeholder="Enter Gender"
						/>
					</div>
					<div class="flex flex-col w-3/4 ">
						<label for="grade" class="py-2 text-base">Grade</label>
						<input
							bind:value={data.grade}
							type="number"
							class="p-2 outline-none rounded-sm  border border-gray-400"
							id="grade"
							placeholder="Enter Grade"
						/>
					</div>
					<div class="flex flex-col w-3/4 ">
						<label for="school" class="py-2 text-base">School</label>
						<input
							bind:value={data.school}
							type="text"
							class="p-2 outline-none rounded-sm  border border-gray-400"
							id="school"
							placeholder="Enter School"
						/>
					</div>
					<button type="submit" class="mt-8 bg-gray-500 py-2 px-2 rounded-sm w-1/4">Submit</button>
				</form>
			{:else}
				<p>Loading...</p>
			{/if}
		</div>
	</div>
</section>
