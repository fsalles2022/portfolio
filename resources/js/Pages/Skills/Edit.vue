<template>
  <Head title="Editar Skill" />
  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Editar Skill
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-md mx-auto sm:px-6 lg:px-8 bg-white">
        <form class="p-4" @submit.prevent="submit">
          <div>
            <BreezeLabel for="name" value="Name" />
            <BreezeInput
              id="name"
              type="text"
              class="mt-1 block w-full"
              v-model="form.name"
              autofocus
              autocomplete="username"
            />
            <BreezeInputError class="mt-2" :message="$page.props.errors.name" />
          </div>
          <div class="mt-2">
            <BreezeLabel for="image" value="Image" />
            <BreezeInput
              id="image"
              type="file"
              class="mt-1 block w-full"
              @input="form.image = $event.target.files[0]"
            />
            <BreezeInputError
              class="mt-2"
              :message="$page.props.errors.image"
            />
          </div>
          <div class="flex items-center justify-end mt-4">
            <BreezeButton
              class="ml-4"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
            >
              Atualizar
            </BreezeButton>
          </div>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
//import AuthenticatedLayout from "@/Layouts/Authenticated.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import BreezeButton from "/resources/js/Components/Button.vue";
import BreezeInput from "/resources/js/Components/Input.vue";
import BreezeInputError from "/resources/js/Components/InputError.vue";
import BreezeLabel from "/resources/js/Components/Label.vue";
// import {Inertia} from '@inertiajs/inertia';
// ** Depreciated, exchange for -> " import { router } from '@inertiajs/vue3'"
import { router } from "@inertiajs/vue3";


const props = defineProps({
    skill: Object,
});

const form = useForm({
    name: props.skill.name,
    image: null,
});

const submit = () => {
    router.post(`/skills/${props.skill.id}`, {
        _method: "put",
        name: form.name,
        image: form.image,
    });
};
//  Inertia.post(`/skills/${props.skill.id}`, ** Depreciated, exchange for ->  router.post(`/skills/${props.skill.id}
</script>


