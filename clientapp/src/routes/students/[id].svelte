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
    <div class="flex justify-between max-w-xs bg-red-100 mx-auto">
        <button>Edit</button>
        <button>Delete</button>
    </div>
</div>
