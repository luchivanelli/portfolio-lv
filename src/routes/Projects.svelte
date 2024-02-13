<script>
  import Project from "../components/Project.svelte";
  import img1 from '../images/boca.jpg'
  import img2 from '../images/friends.jpg'
  import img3 from '../images/pia.jpg'

    let projects = [
        {img: img1, name: 'Arroyo Seco es de Boca', skills: 'React, Formik, Bootstrap', description: 'Responsive page made to inform about the institution', deploy: 'https://luchivanelli.github.io/arroyosecoesdeboca/', repository: 'https://github.com/luchivanelli/arroyosecoesdeboca'},
        {img: img2, name: 'Friends Calculator', skills: 'React, Formik, react-router, Sass', description: 'Personal project carried out to put algorithms into practice in JavaScript.', deploy: 'https://luchivanelli.github.io/calculator/', repository: 'https://github.com/luchivanelli/calculator'},
        {img: img3, name: 'PIA', skills: 'HTML, CSS', description: 'Responsive landing page for Workana client', deploy: 'https://luchivanelli.github.io/LandingPagePIA/', repository: 'https://github.com/luchivanelli/LandingPagePIA'}
    ]

    console.log(img1)
</script>

<section class="bg-gradient-to-b from-yellow-200 to-yellow-600 flex flex-col items-center gap-2">
    <div class="relative m-4 lg:m-10">
        <h3 class="text-5xl lg:text-6xl shad text-center text-yellow-500 font-extrabold tracking-wider opacity-40">Projects</h3>
        <p class="title font-semibold text-3xl lg:text-4xl opacity-100 tracking-wider absolute top-1/2 bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Projects</p>
    </div>

    <div>
        <div class=""></div>
        <div class="grid place-content-center gap-1 mt-2 lg:grid-cols-3 lg:gap-10 lg:mt-6">
            {#each projects as {img, name, skills, description, deploy, repository} }
                <Project img={img} name={name} skills={skills} description={description} deploy={deploy} repository={repository}/>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        height: calc(100vh - 68px);
    }
</style>