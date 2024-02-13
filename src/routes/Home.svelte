<script>
    import img from '../images/Static website-amico.png'
</script>

<section class="lg:grid lg:grid-cols-6">
    <div class="p-4 lg:col-span-4 bg-gradient-to-b from-purple-200 to-white h-52 grid place-content-center text-center min-h-full">
        <p class="font-semibold text-2xl bg-transparent lg:text-3xl">Hi, I'm <b class="bg-gradient-to-r from-purple-500 to-purple-900 text-transparent bg-clip-text">Luciana</b> 👋</p>
        <h2 class="font-extrabold text-5xl py-2 inline-block bg-gradient-to-l from-purple-400 to-purple-900 text-transparent bg-clip-text lg:text-6xl">Frontend Developer</h2>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={img} alt="image-home" class="hidden lg:flex justify-center mx-auto w-72"/>
    </div>
    <div class="bg-purple-500 min-h-full lg:col-span-2 p-2 grid place-content-center">
        <div class="border-2 border-purple-300 bg-card backdrop-blur-xl m-4 p-2 rounded-xl max-w-80 lg:py-4 lg:pb-6">
            <h3 class="text-2xl lg:text-3xl text-end pt-2 pr-4 font-semibold text-transparent">About me</h3>
            <p class="text-lg py-1 px-2 font-normal text-white">Junior web developer, specialized in React. I studied Systems Engineering for 2 years at the National Technological University of Rosario</p>
            <p class="text-lg py-1 px-2 font-normal text-white">Self-taught person eager to grow and acquire new skills. I take courses to improve myself and expand my skills.</p>
            <a href='' download target='_blank' class="flex justify-center mx-auto mt-2 w-1/2 font-semibold tracking-wider border-2 rounded-md border-purple-300 text-white items-center gap-1 hover:bg-purple-500 transition-colors">Download <i class="ti ti-file-cv text-2xl"></i></a>
        </div>
    </div>
</section>

<style>
    p, h3 {
        font-family: 'Ubuntu', sans-serif;
    }

    h3 {
        -webkit-text-stroke: 1px #d8b4fe;
    }

    @media screen and (min-width: 1024px) {
        section {
            height: calc(100vh - 68px);
        }
    }
</style>