<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	export let status;
	export let error;
	console.log(error);
</script>

<div class="flex flex-col gap-4 items-center bg-gradient-to-b from-gray-300 py-8 font-mono">
	<h1 class="text-4xl ">SOMETHING HAPPEND!</h1>

	<h3 class="text-2xl">{status}</h3>
	<h3 class="text-2xl">{error.message}</h3>
</div>
