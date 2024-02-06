<template>
    <div>
        <h1 class="mb-4 text-center">Buscador Open Library</h1>
        <input type="text" v-model="busqueda" @input="buscarLibros" class="form-control mb-3"
            placeholder="Ingrese el título o autor del libro...">
    </div>
</template>

<script>
export default
{
    data()
    {
        return {
            busqueda: ''
        };
    },
    methods: {
        async buscarLibros()
        {
            try
            {
                if (this.busqueda.length > 2)
                {
                    const response = await fetch(`https://openlibrary.org/search.json?title=${this.busqueda}`);
                    const data = await response.json();
                    this.$emit('resultados', data.docs.slice(0, 10));
                }
            }
            catch (error)
            {
                console.error('Error al buscar libros:', error);
                alert('Error al buscar libros');
            }
        }
    }
};
</script>

<style scoped>
</style>
