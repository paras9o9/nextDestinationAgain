import React from "react";
import { HeaderStyled } from "./styles/Hero.styled";
import { Container } from "./styles/Container.styled";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <HeaderStyled>
      <Container>
        <div class="hero-section" imgUrl="../assest/bg-img-jpg">
          <Navbar />
          <div class="hero-section-content">
            <div class="hero-content">
              <div class="hero-text">
                Documenting the very best in food and travel.
              </div>
              <div class="explore-btn">
                <a href="#"> Explore </a>
              </div>
            </div>
            <div class="hero-cards-container">
              <div class="hero-card">
                <div class="hero-img-container">
                  <img
                    src="https://picsum.photos/id/93/600/600
              "
                    alt=""
                    class="img"
                  />
                </div>
                <div class="hero-card-content">
                  <p class="hero-card-date">Sep 5, 2023</p>
                  <p class="hero-card-heading">Aenean eu leo Quam</p>
                  <p class="hero-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    officia cumque aliquam laboriosam.
                  </p>
                  <div class="read-more">
                    <a href="#">read more</a>
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </div>
                </div>
              </div>
              <div class="hero-card">
                <div class="hero-img-container">
                  <img
                    src="https://picsum.photos/id/176/600/600
              "
                    alt=""
                    class="img"
                  />
                </div>
                <div class="hero-card-content">
                  <p class="hero-card-date">Aug 29, 2023</p>
                  <p class="hero-card-heading">Elit Condimentum</p>
                  <p class="hero-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam nobis aliquid. Lorem, ipsum.
                  </p>
                  <div class="read-more">
                    <a href="#">read more</a>
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HeaderStyled>
  );
};

export default Hero;
