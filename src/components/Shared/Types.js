import tw, { styled } from "twin.macro";

export const HeadingOne = styled.h1(({ center, noMargin }) => [
  tw`font-light text-5xl md:text-hero leading-tight md:mb-10 mb-10 `,
  noMargin && tw`md:mb-0 mb-0`,
  center && tw`text-center`,
]);
export const HeadingOneVariant = styled.h1`
  ${tw`font-light text-4xl md:text-5xl leading-tight md:mb-10 mb-8`}
`;
export const HeadingTwoVariant = styled.h1`
  ${tw`font-light text-4xl md:text-5xl leading-tight `}
`;
export const HeadingThree = styled.h1`
  ${tw`font-light text-4xl md:text-5xl leading-tight md:mb-10 mb-8`}
`;
export const HeadingTwo = styled.h2`
  ${tw`font-light text-5xl md:text-headingtwo leading-tight md:mb-10 mb-10 `}
`;

export const HeroText = styled.p(({ noMargin }) => [
  tw`font-light text-lg leading-relaxed md:text-xl  tracking-normal md:mb-12 mb-8`,
  noMargin && tw`md:mb-0 `,
]);
export const SectionText = styled.p(({ center }) => [
  tw`font-light text-lg leading-relaxed md:text-xl tracking-normal md:mb-12 mb-8`,

  center && tw`text-center`,
]);
