import * as React from "react";
const BandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    color={props.color || "#000"}
    data-sentry-component="SvgHeatingPatch"
    data-sentry-element="svg"
    data-sentry-source-file="NavHeatingPatch.tsx"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M20.639 8.239C19.248 7.59 15.345 7 11.939 7c-3.407 0-7.31.59-8.702 1.239-.853.398-1.334 1.206-1.22 2.057.115.876.813 1.532 1.822 1.708 2.166.378 4.884 2.482 5.793 3.472.42.457 1.346 1.133 2.309 1.133.963 0 1.883-.675 2.303-1.133.908-.99 3.627-3.094 5.793-3.472 1.009-.176 1.707-.83 1.823-1.708.113-.852-.367-1.66-1.221-2.057Z"
      data-sentry-element="path"
      data-sentry-source-file="NavHeatingPatch.tsx"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M10.938 9.144v3.91c0 .268-.514.917-1.283.225-.77-.691-2.941-2.06-4.703-2.314-1.236-.178-1.334-1.256-.342-1.637s4.685-.795 5.61-.734c.632.042.717.367.717.55ZM12.938 9.144v3.91c0 .268.512.917 1.282.225.77-.691 2.941-2.06 4.703-2.314 1.236-.178 1.334-1.256.342-1.637s-4.685-.795-5.61-.734c-.632.042-.717.367-.717.55Z"
      data-sentry-element="path"
      data-sentry-source-file="NavHeatingPatch.tsx"
    />
  </svg>
);
export default BandIcon;
