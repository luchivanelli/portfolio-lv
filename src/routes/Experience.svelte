<script>
    import Card from "../components/Card.svelte";

    let experience = [
        {name: 'Daira IT Group', date: 'feb 2024 - present', description: 'Freelance and part-time work, web page development with Svelte and GoLang. Scrum Methodology', link: 'https://dairaitgroup.com.ar/'},
        {name: 'Inkua', date: 'sep 2022 - mar 2023', description: 'Development and layout of responsive web pages with HTML, CSS and JavaScript. Teamwork using Github and Trello.', link: 'https://inkua.de/'}
    ]
</script>

<section class="bg-gradient-to-b from-green-300 to-green-700 flex flex-col items-center justify-center gap-10">
    <div class="relative m-4 lg:m-10">
        <h3 class="text-5xl lg:text-6xl text-center text-green-600 font-extrabold tracking-wider opacity-40">Experience</h3>
        <p class="title font-semibold text-3xl lg:text-4xl opacity-100 tracking-wider absolute top-1/2 bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Experience</p>
    </div>
    <div class="grid grid-rows-2 place-content-center gap-1 lg:flex">
        {#each experience as card}
            <Card name={card.name} date={card.date} description={card.description} link={card.link} />
        {/each}
    </div>
</section>

<style>
    section {
        height: calc(100vh - 68px);
    }
</style>