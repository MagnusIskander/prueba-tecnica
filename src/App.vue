<template>
  <div class="container-fluid p-4 text-light dark-mode bg-dark layout-footer-fixed">
    <Header />
    <Busqueda @resultados="gestionarResultados" />
    <Lista :libros="buscarLibros" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Busqueda from './components/Busqueda.vue';
import Lista from './components/Lista.vue';


export default
{
    name: 'App',
    components: {
      Header,
      Footer,
      Busqueda,
      Lista
    },
    data()
    {
      return {
        buscarLibros: []
      };
    },
    methods: {
      gestionarResultados(resultados)
      {
        this.buscarLibros = resultados;
      }
    }
};
</script>

<style scoped>
</style>
