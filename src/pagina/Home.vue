<template>
  <div>
    <Header></Header>
    <Hero></Hero>
    <main id="main">
      <About></About>
      <Skills></Skills>
      <Resume></Resume>
      <Portifolio></Portifolio>
      <Services></Services>
      <!--<Testimonials></Testimonials>-->
      <Contact></Contact>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Header from '../components/Header.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Resume from '../components/Resume.vue'
import Portifolio from '../components/Portifolio.vue'
import Services from '../components/Services.vue'
import Testimonials from '../components/Testimonials.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { 
    Header, 
    Hero,
    About,
    Skills,
    Resume,
    Portifolio,
    Services,
    Testimonials,
    Contact,
    Footer
  },
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
