<script>
    export let name, date, description, link 
</script>

<div class="card flex flex-col justify-center items-center rounded-xl border-2 border-black bg-card m-3 cursor-pointer max-w-96">
    <h3 class="text-green-100 border-b-2 border-black w-full p-1 px-3 text-lg font-semibold tracking-wider lg:text-xl lg:px-4">{name}</h3>
    <span class="p-2 w-full text-end font-semibold lg:p-4">{date}</span>
    <p class="px-2 py-1 text-green-100 tracking-wide lg:px-4 lg:py-2 lg:text-base">{description}</p>
    <a href={link} target="_blank" class="p-2 lg:p-4 underline hover:text-green-100 transition-colors">See more about {name}</a>
</div>

<style>
    p, span {
        font-family: 'Ubuntu', sans-serif;
    }

    .card:hover {
        background-color: #00000050;
    }
</style>