<script>
    export let name, icon, range
</script>

<div>
    <div class="flex justify-start items-center gap-2 text-xl">
        <i class='ti {icon} inline-block text-3xl lg:text-4xl bg-transparent text-white my-1'></i>
        <h4 class="font-medium lg:text-2xl">{name}</h4>
    </div>
    <div class="w-30 h-4 lg:w-40 lg:h-5 border-2 border-black rounded mx-auto grid grid-cols-8 bg-white">
        <div class="{range} bg-gradient-to-l from-blue-300 to-blue-800 {range === 'col-span-8' ? 'border-0' : 'border-r-2' } border-black"></div>
    </div>
</div>

<style>
    h4 {
        font-family: 'Ubuntu', sans-serif;
    }

    .ti {
        animation: icon 2.5s infinite forwards ease-out ;
    }

    @keyframes icon {
        0% {
            color: white;
        }

        50% {
            color: #1d4ed8;
        }
    }
</style>