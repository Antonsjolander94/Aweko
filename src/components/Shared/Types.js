import tw, { styled, css } from "twin.macro";

export const HeadingOne = styled.h1(({ center, noMargin }) => [
  tw`font-light text-5xl md:text-hero leading-tight md:mb-10 mb-10 `,
  noMargin && tw`md:mb-0 mb-0`,
  center && tw`text-center`,
  css`
    /* iPhone 5 Retina regardless of IOS version */
    @media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) /* and (orientation: todo: you can add orientation or delete this comment) */ {
      /*IPhone 5 only CSS here*/
      ${tw`text-4xl`}
    }
  `,
]);
export const HeadingOneVariant = styled.h1`
  ${tw`font-light text-4xl md:text-5xl leading-tight md:mb-10 mb-8`}
  /* iPhone 5 Retina regardless of IOS version */
    @media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) /* and (orientation: todo: you can add orientation or delete this comment) */ {
    /*IPhone 5 only CSS here*/
    ${tw`text-4xl`}
  }
`;
export const HeadingTwoVariant = styled.h1`
  ${tw`font-light text-4xl md:text-5xl leading-tight `}
  /* iPhone 5 Retina regardless of IOS version */
      @media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) /* and (orientation: todo: you can add orientation or delete this comment) */ {
    /*IPhone 5 only CSS here*/
    ${tw`text-4xl`}
  }
`;
export const HeadingThree = styled.h1`
  ${tw`font-light text-4xl md:text-5xl leading-tight md:mb-10 mb-8`}
  /* iPhone 5 Retina regardless of IOS version */
      @media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) /* and (orientation: todo: you can add orientation or delete this comment) */ {
    /*IPhone 5 only CSS here*/
    ${tw`text-4xl`}
  }
`;
export const HeadingTwo = styled.h2`
  ${tw`font-light text-5xl md:text-headingtwo leading-tight md:mb-10 mb-10 `}
  /* iPhone 5 Retina regardless of IOS version */
      @media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) /* and (orientation: todo: you can add orientation or delete this comment) */ {
    /*IPhone 5 only CSS here*/
    ${tw`text-4xl`}
  }
`;

export const HeroText = styled.p(({ noMargin }) => [
  tw`font-light text-lg leading-relaxed md:text-xl  tracking-normal md:mb-12 mb-8`,
  noMargin && tw`md:mb-0 `,
]);
export const SectionText = styled.p(({ center }) => [
  tw`font-light text-lg leading-relaxed md:text-xl tracking-normal md:mb-12 mb-8`,

  center && tw`text-center`,
]);
