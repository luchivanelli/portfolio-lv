<script>
    import Skill from "../components/Skill.svelte";

    let skills = [
        ['HTML','ti-brand-html5','col-span-8'],
        ['CSS','ti-brand-css3', 'col-span-8'], 
        ['Bootstrap','ti-brand-bootstrap', 'col-span-7'],
        ['Tailwind','ti-brand-tailwind', 'col-span-6'],
        ['Sass','ti-brand-sass', 'col-span-5'],
        ['JavaScript','ti-brand-javascript', 'col-span-7'],
        ['React','ti-brand-react', 'col-span-6'],
        ['Svelte','ti-brand-svelte', 'col-span-6'],
        ['GoLang','ti-brand-golang', 'col-span-4'],
        ['Git','ti-brand-git', 'col-span-6']
    ]
</script>

<section class="bg-gradient-to-b from-blue-300 to-blue-700 flex flex-col items-center justify-center gap-10 pb-20">
    <div class="relative m-4 lg:m-10">
        <h3 class="text-5xl lg:text-6xl text-center text-blue-600 font-extrabold tracking-wider opacity-40">Skills</h3>
        <p class="title font-semibold text-3xl lg:text-4xl opacity-100 tracking-wider absolute top-1/2 bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Skills</p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10 lg:my-10">
        {#each skills as skill}
            <Skill name={skill[0]} icon={skill[1]} range={skill[2]}/>
        {/each}
    </div>
</section>

<style>
    section {
        height: calc(100vh - 68px);
    }

    .title {
        font-family: 'Ubuntu', sans-serif;
    }
</style>

