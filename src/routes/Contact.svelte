<script>
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup"

   
    const { form, handleChange, handleSubmit, errors } = createForm({
      initialValues: {

      },
      validationSchema: yup.object({
        
      }),
      onSubmit: values => {
        console.log(values)
      }
    })
</script>


<section class="bg-gradient-to-b from-red-300 to-red-700 flex flex-col items-center gap-2">
    <div class="relative m-4 lg:m-10">
        <h3 class="text-5xl lg:text-6xl text-center text-red-600 font-extrabold tracking-wider opacity-40">Contact</h3>
        <p class="title font-semibold text-3xl lg:text-4xl opacity-100 tracking-wider absolute top-1/2 bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Contact</p>
    </div>

</section>

<style>
    section {
        height: calc(100vh - 68px);
    }
</style>
