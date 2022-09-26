<template>
  <div>
    <!-- ======= Mobile nav toggle button ======= -->
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    <!-- ======= Header ======= -->
    <header id="header">
      <div class="d-flex flex-column">
        <div class="profile">
          <img src="static/assets/img/perfil4.png" class="img-fluid rounded-circle">
          <h1 class="text-light">
            <a href="index.html">Euristenede Santos</a>
          </h1>
          <div class="social-links mt-3 text-center">
            <a href="https://twitter.com/euristenede" class="twitter" title="Twitter" target="_blank">
              <i class="bx bxl-twitter" />
            </a>
            <a href="https://www.facebook.com/euristenede.vanuel.1" class="facebook" title="Facebook" target="_blank">
              <i class="bx bxl-facebook" />
            </a>
            <a href="https://www.instagram.com/euristenede_santos/" class="instagram" title="Instagran"
              target="_blank"><i class="bx bxl-instagram" />
            </a>
            <a href="https://github.com/Euristenede" class="github" title="GitHub" target="_blank">
              <i class="bx bxl-github" />
            </a>
            <a href="https://www.linkedin.com/in/euristenede-s-1976abb1" class="linkedin" title="Linkedin"
              target="_blank">
              <i class="bx bxl-linkedin" />
            </a>
          </div>
        </div>

        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" class="nav-link scrollto active">
                <i class="bx bx-home"/> 
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" class="nav-link scrollto">
                <i class="bx bx-user"/>
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="#skills" class="nav-link scrollto">
                <i class="bx bx-bar-chart"/>
                <span>Habilidades</span>
              </a>
            </li>
            <li>
              <a href="#resume" class="nav-link scrollto">
                <i class="bx bx-file-blank"/>
                <span>Resumo</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" class="nav-link scrollto">
                <i class="bx bx-book-content"/>
                <span>Portfólio</span>
              </a>
            </li>
            <li>
              <a href="#services" class="nav-link scrollto">
                <i class="bx bx-server"/> 
                <span>Serviços</span>
              </a>
            </li>
            <li>
              <a href="#contact" class="nav-link scrollto">
                <i class="bx bx-envelope"/>
                  <span>Contato</span>
                </a>
            </li>
          </ul>
        </nav><!-- .nav-menu -->
      </div>
    </header><!-- End Header -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
