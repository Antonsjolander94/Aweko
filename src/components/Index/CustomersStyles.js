import tw, { styled } from "twin.macro";

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4em;
  .gatsby-image-wrapper {
    width: 300px;
  }
`;

export const Container = styled.header`
  ${tw`py-6 sm:py-2 py-0 border-t border-b`} border-color: rgba(0, 0, 0, 0.05);
  background: #f6f5ef;
  background: #fff;

  .container-variant {
    max-width: 1320px;
  }
`;

export const CustomersWrapper = styled.section`
  .slick-slide {
    ${tw`px-10`}
    @media (max-width: 1325px) {
      padding: 0.25rem 5rem;
    }
    @media (max-width: 1024px) {
      padding: 0.25rem 4rem;
    }
    @media (max-width: 768px) {
      padding: 0.45rem 3.35rem;
    }
    @media (max-width: 520px) {
      padding: 0.75rem 1.5rem;
    }

    transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
    opacity: 0.5;
    /* filter: grayscale(1); */
    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }
  }
  .slick-slide img {
    width: 100% !important;
  }
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
  }
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;
    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`;
