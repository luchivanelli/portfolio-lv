<script>
    import img from '../images/Static website-amico.png'
</script>

<section class="lg:grid lg:grid-cols-6">
    <div class="home p-4 lg:col-span-4 bg-gradient-to-b from-purple-200 to-purple-500 grid place-content-center text-center">
        <p class="font-semibold text-2xl bg-transparent lg:text-3xl">Hi, I'm <b class="bg-gradient-to-t from-purple-500 to-purple-900 text-transparent bg-clip-text">Luciana</b> 👋</p>
        <h2 class="font-extrabold text-5xl py-2 inline-block bg-gradient-to-t from-purple-500 to-purple-900 text-transparent bg-clip-text lg:text-6xl">Frontend Developer</h2>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={img} alt="image-home" class="w-60 mt-4 lg:flex justify-center mx-auto lg:w-72"/>
    </div>
    <div class="bg-purple-500 min-h-full lg:col-span-2 p-2 grid place-content-center lg:gap-2">
        <div class="relative">
            <h3 class="text-5xl text-center text-purple-300 font-extrabold tracking-wider opacity-40">About me</h3>
            <p class="title font-semibold text-3xl opacity-100 tracking-wider absolute top-1/2 bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">About me</p>
        </div>
        <div class="border-2 border-purple-300 bg-card backdrop-blur-xl m-4 p-2 rounded-xl max-w-80 lg:py-4 lg:pb-6">
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

    .home {
        height: calc(100vh - 68px);
    }

    @media screen and (min-width: 1024px) {
        section {
            height: calc(100vh - 68px);
        }
    }
</style>