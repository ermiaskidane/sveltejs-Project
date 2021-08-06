<script context="module">
    export async function load({page}) {
		const baseUrl = `http://localhost:5003/api/student/${page.params.id}`;
		const res = await fetch(baseUrl);
		const data = await res.json();
		// console.log(data)
		return {
			props: {data}
		}
		
	}
</script>

<script>
    export let data
</script>
 
<h1 class="text-3xl text-center mt-4">Student Detail</h1>

<div class="pt-4 bg-gray-50 max-w-screen-sm mx-auto shadow-md" >
    <div class="flex flex-col items-center gap-1">
        <h3 class="">{data.name}</h3>
        <p class="">{data.grade}</p>
        <p class="">{data.gender}</p>
        <p class="">{data.school}</p>
    </div>
    <div class="flex justify-between max-w-xs mt-3  mx-auto py-4">
	<button class="border rounded-sm border-blue-500 px-6 py-1 text-lg bg-blue-300" on:click={editStudentDetails(data)}>Edit</button>
	<button  on:click={deleteStudent(data._id)} class="border rounded-sm border-red-700 px-4 py-1 text-lg bg-red-400">Delete</button>
    </div>
</div>
