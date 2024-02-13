<script>
    export let img, name, skills, description, deploy, repository
</script>

<div class="flex flex-col max-w-48 relative border-2 border-yellow-100 transition-all lg:max-w-64">
    <img src={img} alt="project img" class=""/>
    <p class="absolute bottom-0 text-yellow-100 z-20 p-1 pl-2 text-sm tracking-wide lg:text-lg">{name}</p>
    <button class="hidden text-yellow-500 absolute top-0 right-0 left-0 bottom-0 py-1 px-3 font-semibold z-30 tracking-wider lg:text-lg">See more</button>
</div>

<style>
    div::after {
        position: absolute;
        content:"";
        height:100%;
        width:100%;
        top:0;
        left:0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.055) 0%,rgb(0, 0, 0) 100%);
    }

    div:hover {
        border-color: #000;
    }

    div:hover button {
        display: inline-block;
        background-color: #00000095;
    }
    
    p {
        font-family: 'Ubuntu', sans-serif;
    }
</style>