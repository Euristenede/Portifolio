<template>
  <div>
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
      <div class="hero-container" data-aos="fade-in">
        <h1>Euristenede Santos</h1>
        <!-- infinite loop -->
        <vue-typed-js :strings="['Desenvolvedor Desktop', 
                                 'Desenvolvedor Web', 
                                 'Desenvolvedor Mobile', 
                                 'Freelancer', 
                                 'Empreendedor', 
                                 'Consultor de Negócios']" 
                      :loop="true">
          <p>
            Eu sou <span class="typing"/>
          </p>
        </vue-typed-js>
      </div>
    </section><!-- End Hero -->
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
