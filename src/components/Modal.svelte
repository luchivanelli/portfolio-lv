<script>
    const handleModal = ()=> {
        let modal = document.querySelector('.modal')
        modal.classList.add('hidden')
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section on:click={handleModal} class="modal hidden absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center bg-modal z-40">
    <div class="border-4 text-black border-black m-8 bg-gradient-to-b from-yellow-100 to-yellow-50 rounded-lg shadow-lg shadow-black">
        <h2 class="name-modal tracking-wide border-b-2 border-black font-bold py-3 px-2 pl-5 text-xl font-extrabold"></h2>
        <div>
            <div>
                <p class="description px-2 py-4 text-lg tracking-wide"></p>
                <p class="skills p-2 pb-4 text-black text-end border-b-2 border-black"></p>
            </div>
            <div class="flex justify-center items-center gap-3 p-3">
                <a href="/#" id="deploy" target="_blank" class="deploy border-2 border-black py-1 px-2 rounded-xl font-semibold hover:bg-black hover:text-yellow-50 transition-all">Deploy</a>
                <a href="/#" id="repository" target="_blank" class="repository border-2 border-black py-1 px-2 rounded-xl font-semibold hover:bg-black hover:text-yellow-50 transition-all">Repository</a>
            </div>
        </div>
    </div>
</section>
