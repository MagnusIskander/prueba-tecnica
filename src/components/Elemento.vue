<template>
    <div class="card mb-3 oscuro">
        <div class="row g-0">
            <div class="col-md-4 text-center">
                <img v-if="libro.cover_i" :src="'http://covers.openlibrary.org/b/id/' + libro.cover_i + '-M.jpg'"
                    alt="Portada del libro" class="img-fluid rounded-start">
                <img v-else src="../assets/no-image.png" alt="Sin imagen" class="img-fluid rounded-start" style="max-width: 300px;">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">{{ libro.title }}</h3>
                    <p v-if="libro.author_name" class="card-text">Autor(es): {{ libro.author_name.join(', ') }}</p>
                    <p v-else class="card-text">No hay autor disponible</p>
                    <p class="card-text"><small class="text-body-secondary">Año de edición: {{ obtenerFecha(libro)
                    }}</small></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default
{
    name: 'Elemento',
    props: {
        libro: {
            type: Object,
            required: true
        }
    },
    methods: {
        obtenerFecha(libro)
        {
            if (libro.publish_date)
            {
                return libro.publish_date[0];
            } else {
                return 'No disponible';
            }
        }
    }
};
</script>

<style scoped>
</style>
