<script>
    export let img, name, skills, description, deploy, repository
    import Modal from "./Modal.svelte";

    $: handleModal = (name,skills,description,deploy,repository)=> {
        let modal = document.querySelector('.modal')
        document.querySelector('.name-modal').innerHTML = name
        document.querySelector('.description').innerHTML = description
        document.querySelector('.skills').innerHTML = skills
        document.getElementById('deploy').setAttribute('href', deploy)
        document.getElementById('repository').setAttribute('href', repository)
        
        modal.classList.remove('hidden')
    }
</script>


<div class="flex flex-col max-w-48 relative border-2 border-yellow-100 transition-all lg:max-w-64">
    <img src={img} alt="project img" class=""/>
    <p class="absolute bottom-0 text-yellow-100 z-20 p-1 pl-2 text-sm tracking-wide lg:text-lg">{name}</p>
    <button on:click={(e)=>handleModal(name,skills,description,deploy,repository)} class="hidden text-yellow-500 absolute top-0 right-0 left-0 bottom-0 py-1 px-3 font-semibold z-30 tracking-wider lg:text-lg">See more</button>
</div>
<Modal/>


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