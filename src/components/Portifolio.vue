<template>
  <div>
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Portifólio</h2>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">Tudo</li>
              <li data-filter=".filter-desktop">Desktop</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-mobile">Mobile</li>
              <!--<li data-filter=".filter-card">Mobile</li>-->
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="static/assets/img/portfolio/web/Templates/portifolio.png" 
                   class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="static/assets/img/portfolio/web/Templates/portifolio.png" 
                   data-gallery="portfolioGallery" 
                   class="portfolio-lightbox" 
                   title="Portifolio">
                   <i class="bx bx-plus"/>
                </a>
                <a href="https://github.com/Euristenede/Portifolio" title="Repositório" target="_blank">
                  <i class="bx bx-link"/>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-desktop">
            <div class="portfolio-wrap">
              <img src="static/assets/img/portfolio/desktop/Financeiro-Pessoal/index.png" 
                   class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="static/assets/img/portfolio/desktop/Financeiro-Pessoal/index.png" 
                   data-gallery="portfolioGallery" 
                   class="portfolio-lightbox" 
                   title="Fluxo Caixa">
                   <i class="bx bx-plus"/>
                  </a>
                <a href="https://github.com/Euristenede/ControleFinanceiro"  title="Repositório" target="_blank">
                  <i class="bx bx-link"/>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="static/assets/img/portfolio/web/Rede-Social/index.png" 
                   class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="static/assets/img/portfolio/web/Rede-Social/index.png" 
                   data-gallery="portfolioGallery" 
                   class="portfolio-lightbox" 
                   title="Rede Social">
                   <i class="bx bx-plus"/>
                  </a>
                <a href="https://github.com/Euristenede/RedeSocial-VueJs" title="Repositório" target="_blank">
                  <i class="bx bx-link"/>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-desktop">
            <div class="portfolio-wrap">
              <img src="static/assets/img/portfolio/desktop/Fluxo-Caixa/index.png" 
                   class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="static/assets/img/portfolio/desktop/Fluxo-Caixa/index.png" 
                   data-gallery="portfolioGallery" 
                   class="portfolio-lightbox" 
                   title="Controle Transportes">
                   <i class="bx bx-plus"/>
                </a>
                <a href="https://github.com/Euristenede/FluxoCaixa" title="Repositório" target="_blank">
                  <i class="bx bx-link"/>
                </a>
              </div>
            </div>
          </div>
               
          <div class="col-lg-4 col-md-6 portfolio-item filter-mobile">
            <div class="portfolio-wrap">
              <img src="static/assets/img/portfolio/mobile/vakinha.png" 
                   class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="static/assets/img/portfolio/mobile/vakinha.png" 
                   data-gallery="portfolioGallery" 
                   class="portfolio-lightbox" 
                   title="Controle Transportes">
                   <i class="bx bx-plus"/>
                </a>
                <a href="https://github.com/Euristenede/VakinhaBurger" title="Repositório" target="_blank">
                  <i class="bx bx-link"/>
                </a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="static/assets/img/portfolio/web/Templates/afro.png" 
                   class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="static/assets/img/portfolio/web/Templates/afro.png" 
                   data-gallery="portfolioGallery" 
                   class="portfolio-lightbox" 
                   title="Afroandlisokris">
                   <i class="bx bx-plus"/>
                </a>
                <a href="https://afroandlisokris.com.br/" title="Site" target="_blank">
                  <i class="bx bx-link"/>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Section -->
  </div>
</template>

<script>
export default {
  name: 'Portifolio',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
