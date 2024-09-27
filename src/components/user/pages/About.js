import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const About = () => {
  return (
    <>
      <Header />
      <section id="about" class="about section">

      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>About Us</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div class="container">

        <div class="row gy-5">

          <div class="content col-xl-5 d-flex flex-column aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <h3>Voluptatem dignissimos provident quasi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <a href="#" class="about-btn align-self-center align-self-xl-start"><span>About us</span> <i class="bi bi-chevron-right"></i></a>
          </div>

          <div class="col-xl-7 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="row gy-4">

              <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-briefcase"></i>
                <h4><a href="" class="stretched-link">Corporis voluptates sit</a></h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>

              <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-gem"></i>
                <h4><a href="" class="stretched-link">Ullamco laboris nisi</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>

              <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-broadcast"></i>
                <h4><a href="" class="stretched-link">Labore consequatur</a></h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>

              <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-easel"></i>
                <h4><a href="" class="stretched-link">Beatae veritatis</a></h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
    <Footer />
    </>
    
  );
};

export default About;
