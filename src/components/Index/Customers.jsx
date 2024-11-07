import React from "react";
import Slider from "react-slick";
import useCustomers from "../../hooks/use-customers";
import { CustomersWrapper, ImageWrapper, Container } from "./CustomersStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customers = () => {
  const { edges } = useCustomers();
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    swipe: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="container-variant mx-auto">
        <CustomersWrapper>
          <Slider {...settings}>
            {edges.map(({ node }) => (
              <a
                href={node.url}
                alt={node.rubrik}
                target="_blank"
                rel="noreferrer"
                key={node.id}
              >

                {node?.rubrik && node?.logotyp?.fluid?.src && (
                 <ImageWrapper>
                  <img alt={node.rubrik} src={node.logotyp.fluid.src} />
                </ImageWrapper> 
                )}
              </a>
            ))}
          </Slider>
        </CustomersWrapper>
      </div>
    </Container>
  );
};

export default Customers;
