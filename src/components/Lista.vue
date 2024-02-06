<template>
    <ul class="list-group">
        <div>
            <Elemento v-for="libro in libros" :key="libro.key" :libro="libro" />
        </div>
        <li v-if="libros.length === 0" class="list-group-item">No se encontraron resultados</li>
    </ul>
</template>

<script>
import Elemento from './Elemento.vue';


export default
{
    props: {
        libros: {
            type: Array,
            default: () => []
        }
    },
    components: {
      Elemento,
    },
};
</script>

<style scoped>
</style>
