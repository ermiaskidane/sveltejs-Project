<script context="module">
    export async function load({ page }) {
        const id = page.params.id
        const url = `http://localhost:5003/api/student/${id}`
        const res = await fetch(url);
        const student = await res.json();
        console.log(student)
        return {props: {student}}
    }

</script>

<script>
    export let student;
</script>

<div class=" border py-4 px-2  lg:py-6 shadow-xl">
    <h2 class="pb-4 text-2xl capitalize">{student.name}</h2>
    <p class=""><span class="capitalize">grade</span>: {student.grade}</p>
    <p class=""><span class="capitalize">gender</span>: {student.gender}</p>
    <p class=""><span class="capitalize">School</span>: {student.school}</p>
    <div class="flex">
        <button>Edit</button>
        <button>Delete</button>
    </div>
</div>