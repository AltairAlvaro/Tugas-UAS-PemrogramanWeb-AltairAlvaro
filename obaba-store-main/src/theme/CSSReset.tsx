/* eslint-disable unicorn/filename-case */
import { Global } from '@emotion/react';

export function CSSReset() {
  return (
    <Global
      styles={`
        :host,
        :root,
        [data-theme] {
          --chakra-ring-inset: var(--chakra-empty, /*!*/ /*!*/);
          --chakra-ring-offset-width: 0px;
          --chakra-ring-offset-color: #fff;
          --chakra-ring-color: rgba(66, 153, 225, 0.6);
          --chakra-ring-offset-shadow: 0 0 #0000;
          --chakra-ring-shadow: 0 0 #0000;
          --chakra-space-x-reverse: 0;
          --chakra-space-y-reverse: 0;
          --chakra-colors-transparent: transparent;
          --chakra-colors-current: currentColor;
          --chakra-colors-black: #000000;
          --chakra-colors-white: #ffffff;
          --chakra-colors-whiteAlpha-50: rgba(255, 255, 255, 0.04);
          --chakra-colors-whiteAlpha-100: rgba(255, 255, 255, 0.06);
          --chakra-colors-whiteAlpha-200: rgba(255, 255, 255, 0.08);
          --chakra-colors-whiteAlpha-300: rgba(255, 255, 255, 0.16);
          --chakra-colors-whiteAlpha-400: rgba(255, 255, 255, 0.24);
          --chakra-colors-whiteAlpha-500: rgba(255, 255, 255, 0.36);
          --chakra-colors-whiteAlpha-600: rgba(255, 255, 255, 0.48);
          --chakra-colors-whiteAlpha-700: rgba(255, 255, 255, 0.64);
          --chakra-colors-whiteAlpha-800: rgba(255, 255, 255, 0.8);
          --chakra-colors-whiteAlpha-900: rgba(255, 255, 255, 0.92);
          --chakra-colors-blackAlpha-50: rgba(0, 0, 0, 0.04);
          --chakra-colors-blackAlpha-100: rgba(0, 0, 0, 0.06);
          --chakra-colors-blackAlpha-200: rgba(0, 0, 0, 0.08);
          --chakra-colors-blackAlpha-300: rgba(0, 0, 0, 0.16);
          --chakra-colors-blackAlpha-400: rgba(0, 0, 0, 0.24);
          --chakra-colors-blackAlpha-500: rgba(0, 0, 0, 0.36);
          --chakra-colors-blackAlpha-600: rgba(0, 0, 0, 0.48);
          --chakra-colors-blackAlpha-700: rgba(0, 0, 0, 0.64);
          --chakra-colors-blackAlpha-800: rgba(0, 0, 0, 0.8);
          --chakra-colors-blackAlpha-900: rgba(0, 0, 0, 0.92);
          --chakra-colors-gray-50: #f7fafc;
          --chakra-colors-gray-100: #edf2f7;
          --chakra-colors-gray-200: #e2e8f0;
          --chakra-colors-gray-300: #cbd5e0;
          --chakra-colors-gray-400: #a0aec0;
          --chakra-colors-gray-500: #718096;
          --chakra-colors-gray-600: #4a5568;
          --chakra-colors-gray-700: #2d3748;
          --chakra-colors-gray-800: #1a202c;
          --chakra-colors-gray-900: #171923;
          --chakra-colors-red-50: #fff5f5;
          --chakra-colors-red-100: #fed7d7;
          --chakra-colors-red-200: #feb2b2;
          --chakra-colors-red-300: #fc8181;
          --chakra-colors-red-400: #f56565;
          --chakra-colors-red-500: #e53e3e;
          --chakra-colors-red-600: #c53030;
          --chakra-colors-red-700: #9b2c2c;
          --chakra-colors-red-800: #822727;
          --chakra-colors-red-900: #63171b;
          --chakra-colors-orange-50: #fffaf0;
          --chakra-colors-orange-100: #feebc8;
          --chakra-colors-orange-200: #fbd38d;
          --chakra-colors-orange-300: #f6ad55;
          --chakra-colors-orange-400: #ed8936;
          --chakra-colors-orange-500: #dd6b20;
          --chakra-colors-orange-600: #c05621;
          --chakra-colors-orange-700: #9c4221;
          --chakra-colors-orange-800: #7b341e;
          --chakra-colors-orange-900: #652b19;
          --chakra-colors-yellow-50: #fffff0;
          --chakra-colors-yellow-100: #fefcbf;
          --chakra-colors-yellow-200: #faf089;
          --chakra-colors-yellow-300: #f6e05e;
          --chakra-colors-yellow-400: #ecc94b;
          --chakra-colors-yellow-500: #d69e2e;
          --chakra-colors-yellow-600: #b7791f;
          --chakra-colors-yellow-700: #975a16;
          --chakra-colors-yellow-800: #744210;
          --chakra-colors-yellow-900: #5f370e;
          --chakra-colors-green-50: #f0fff4;
          --chakra-colors-green-100: #c6f6d5;
          --chakra-colors-green-200: #9ae6b4;
          --chakra-colors-green-300: #68d391;
          --chakra-colors-green-400: #48bb78;
          --chakra-colors-green-500: #38a169;
          --chakra-colors-green-600: #2f855a;
          --chakra-colors-green-700: #276749;
          --chakra-colors-green-800: #22543d;
          --chakra-colors-green-900: #1c4532;
          --chakra-colors-teal-50: #e6fffa;
          --chakra-colors-teal-100: #b2f5ea;
          --chakra-colors-teal-200: #81e6d9;
          --chakra-colors-teal-300: #4fd1c5;
          --chakra-colors-teal-400: #38b2ac;
          --chakra-colors-teal-500: #319795;
          --chakra-colors-teal-600: #2c7a7b;
          --chakra-colors-teal-700: #285e61;
          --chakra-colors-teal-800: #234e52;
          --chakra-colors-teal-900: #1d4044;
          --chakra-colors-blue-50: #ebf8ff;
          --chakra-colors-blue-100: #bee3f8;
          --chakra-colors-blue-200: #90cdf4;
          --chakra-colors-blue-300: #63b3ed;
          --chakra-colors-blue-400: #4299e1;
          --chakra-colors-blue-500: #3182ce;
          --chakra-colors-blue-600: #2b6cb0;
          --chakra-colors-blue-700: #2c5282;
          --chakra-colors-blue-800: #2a4365;
          --chakra-colors-blue-900: #1a365d;
          --chakra-colors-cyan-50: #edfdfd;
          --chakra-colors-cyan-100: #c4f1f9;
          --chakra-colors-cyan-200: #9decf9;
          --chakra-colors-cyan-300: #76e4f7;
          --chakra-colors-cyan-400: #0bc5ea;
          --chakra-colors-cyan-500: #00b5d8;
          --chakra-colors-cyan-600: #00a3c4;
          --chakra-colors-cyan-700: #0987a0;
          --chakra-colors-cyan-800: #086f83;
          --chakra-colors-cyan-900: #065666;
          --chakra-colors-purple-50: #faf5ff;
          --chakra-colors-purple-100: #e9d8fd;
          --chakra-colors-purple-200: #d6bcfa;
          --chakra-colors-purple-300: #b794f4;
          --chakra-colors-purple-400: #9f7aea;
          --chakra-colors-purple-500: #805ad5;
          --chakra-colors-purple-600: #6b46c1;
          --chakra-colors-purple-700: #553c9a;
          --chakra-colors-purple-800: #44337a;
          --chakra-colors-purple-900: #322659;
          --chakra-colors-pink-50: #fff5f7;
          --chakra-colors-pink-100: #fed7e2;
          --chakra-colors-pink-200: #fbb6ce;
          --chakra-colors-pink-300: #f687b3;
          --chakra-colors-pink-400: #ed64a6;
          --chakra-colors-pink-500: #d53f8c;
          --chakra-colors-pink-600: #b83280;
          --chakra-colors-pink-700: #97266d;
          --chakra-colors-pink-800: #702459;
          --chakra-colors-pink-900: #521b41;
          --chakra-colors-linkedin-50: #e8f4f9;
          --chakra-colors-linkedin-100: #cfedfb;
          --chakra-colors-linkedin-200: #9bdaf3;
          --chakra-colors-linkedin-300: #68c7ec;
          --chakra-colors-linkedin-400: #34b3e4;
          --chakra-colors-linkedin-500: #00a0dc;
          --chakra-colors-linkedin-600: #008cc9;
          --chakra-colors-linkedin-700: #0077b5;
          --chakra-colors-linkedin-800: #005e93;
          --chakra-colors-linkedin-900: #004471;
          --chakra-colors-facebook-50: #e8f4f9;
          --chakra-colors-facebook-100: #d9dee9;
          --chakra-colors-facebook-200: #b7c2da;
          --chakra-colors-facebook-300: #6482c0;
          --chakra-colors-facebook-400: #4267b2;
          --chakra-colors-facebook-500: #385898;
          --chakra-colors-facebook-600: #314e89;
          --chakra-colors-facebook-700: #29487d;
          --chakra-colors-facebook-800: #223b67;
          --chakra-colors-facebook-900: #1e355b;
          --chakra-colors-messenger-50: #d0e6ff;
          --chakra-colors-messenger-100: #b9daff;
          --chakra-colors-messenger-200: #a2cdff;
          --chakra-colors-messenger-300: #7ab8ff;
          --chakra-colors-messenger-400: #2e90ff;
          --chakra-colors-messenger-500: #0078ff;
          --chakra-colors-messenger-600: #0063d1;
          --chakra-colors-messenger-700: #0052ac;
          --chakra-colors-messenger-800: #003c7e;
          --chakra-colors-messenger-900: #002c5c;
          --chakra-colors-whatsapp-50: #dffeec;
          --chakra-colors-whatsapp-100: #b9f5d0;
          --chakra-colors-whatsapp-200: #90edb3;
          --chakra-colors-whatsapp-300: #65e495;
          --chakra-colors-whatsapp-400: #3cdd78;
          --chakra-colors-whatsapp-500: #22c35e;
          --chakra-colors-whatsapp-600: #179848;
          --chakra-colors-whatsapp-700: #0c6c33;
          --chakra-colors-whatsapp-800: #01421c;
          --chakra-colors-whatsapp-900: #001803;
          --chakra-colors-twitter-50: #e5f4fd;
          --chakra-colors-twitter-100: #c8e9fb;
          --chakra-colors-twitter-200: #a8dcfa;
          --chakra-colors-twitter-300: #83cdf7;
          --chakra-colors-twitter-400: #57bbf5;
          --chakra-colors-twitter-500: #1da1f2;
          --chakra-colors-twitter-600: #1a94da;
          --chakra-colors-twitter-700: #1681bf;
          --chakra-colors-twitter-800: #136b9e;
          --chakra-colors-twitter-900: #0d4d71;
          --chakra-colors-telegram-50: #e3f2f9;
          --chakra-colors-telegram-100: #c5e4f3;
          --chakra-colors-telegram-200: #a2d4ec;
          --chakra-colors-telegram-300: #7ac1e4;
          --chakra-colors-telegram-400: #47a9da;
          --chakra-colors-telegram-500: #0088cc;
          --chakra-colors-telegram-600: #007ab8;
          --chakra-colors-telegram-700: #006ba1;
          --chakra-colors-telegram-800: #005885;
          --chakra-colors-telegram-900: #003f5e;
          --chakra-colors-generalColor: #1c1c1c;
          --chakra-colors-backgroundPrimary: #5f6783;
          --chakra-colors-backgroundSecondary: #f6f9ff;
          --chakra-colors-backgroundTopdown: #f3f8ff;
          --chakra-colors-backgroundCardProduct: #ffffff;
          --chakra-colors-backgroundCardProductItem: #ffffff;
          --chakra-colors-backgroundCardPayment: #f8fbff;
          --chakra-colors-backgroundDot: #313131;
          --chakra-colors-backgroundButton: #313131;
          --chakra-colors-textPrimary: #000000;
          --chakra-colors-textSecondary: #718096;
          --chakra-colors-textInvert: #313131;
          --chakra-colors-textTopdown: #313131;
          --chakra-colors-textDot: #ffffff;
          --chakra-colors-textButton: #ffffff;
          --chakra-colors-backgroundCardGeneral: #ffffff;
          --chakra-colors-backgroundCardPaymentCarousel: #ffffff;
          --chakra-borders-none: 0;
          --chakra-borders-1px: 1px solid;
          --chakra-borders-2px: 2px solid;
          --chakra-borders-4px: 4px solid;
          --chakra-borders-8px: 8px solid;
          --chakra-fonts-heading: Roboto, serif;
          --chakra-fonts-body: Roboto, sans-serif;
          --chakra-fonts-mono: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
            monospace;
          --chakra-fontSizes-xs: 0.75rem;
          --chakra-fontSizes-sm: 0.875rem;
          --chakra-fontSizes-md: 1rem;
          --chakra-fontSizes-lg: 1.125rem;
          --chakra-fontSizes-xl: 1.25rem;
          --chakra-fontSizes-2xl: 1.5rem;
          --chakra-fontSizes-3xl: 1.875rem;
          --chakra-fontSizes-4xl: 2.25rem;
          --chakra-fontSizes-5xl: 3rem;
          --chakra-fontSizes-6xl: 3.75rem;
          --chakra-fontSizes-7xl: 4.5rem;
          --chakra-fontSizes-8xl: 6rem;
          --chakra-fontSizes-9xl: 8rem;
          --chakra-fontWeights-hairline: 100;
          --chakra-fontWeights-thin: 200;
          --chakra-fontWeights-light: 300;
          --chakra-fontWeights-normal: 400;
          --chakra-fontWeights-medium: 500;
          --chakra-fontWeights-semibold: 600;
          --chakra-fontWeights-bold: 700;
          --chakra-fontWeights-extrabold: 800;
          --chakra-fontWeights-black: 900;
          --chakra-letterSpacings-tighter: -0.05em;
          --chakra-letterSpacings-tight: -0.025em;
          --chakra-letterSpacings-normal: 0;
          --chakra-letterSpacings-wide: 0.025em;
          --chakra-letterSpacings-wider: 0.05em;
          --chakra-letterSpacings-widest: 0.1em;
          --chakra-lineHeights-3: 0.75rem;
          --chakra-lineHeights-4: 1rem;
          --chakra-lineHeights-5: 1.25rem;
          --chakra-lineHeights-6: 1.5rem;
          --chakra-lineHeights-7: 1.75rem;
          --chakra-lineHeights-8: 2rem;
          --chakra-lineHeights-9: 2.25rem;
          --chakra-lineHeights-10: 2.5rem;
          --chakra-lineHeights-normal: normal;
          --chakra-lineHeights-none: 1;
          --chakra-lineHeights-shorter: 1.25;
          --chakra-lineHeights-short: 1.375;
          --chakra-lineHeights-base: 1.5;
          --chakra-lineHeights-tall: 1.625;
          --chakra-lineHeights-taller: 2;
          --chakra-radii-none: 0;
          --chakra-radii-sm: 0.125rem;
          --chakra-radii-base: 0.25rem;
          --chakra-radii-md: 0.375rem;
          --chakra-radii-lg: 0.5rem;
          --chakra-radii-xl: 0.75rem;
          --chakra-radii-2xl: 1rem;
          --chakra-radii-3xl: 1.5rem;
          --chakra-radii-full: 9999px;
          --chakra-space-1: 0.25rem;
          --chakra-space-2: 0.5rem;
          --chakra-space-3: 0.75rem;
          --chakra-space-4: 1rem;
          --chakra-space-5: 1.25rem;
          --chakra-space-6: 1.5rem;
          --chakra-space-7: 1.75rem;
          --chakra-space-8: 2rem;
          --chakra-space-9: 2.25rem;
          --chakra-space-10: 2.5rem;
          --chakra-space-12: 3rem;
          --chakra-space-14: 3.5rem;
          --chakra-space-16: 4rem;
          --chakra-space-20: 5rem;
          --chakra-space-24: 6rem;
          --chakra-space-28: 7rem;
          --chakra-space-32: 8rem;
          --chakra-space-36: 9rem;
          --chakra-space-40: 10rem;
          --chakra-space-44: 11rem;
          --chakra-space-48: 12rem;
          --chakra-space-52: 13rem;
          --chakra-space-56: 14rem;
          --chakra-space-60: 15rem;
          --chakra-space-64: 16rem;
          --chakra-space-72: 18rem;
          --chakra-space-80: 20rem;
          --chakra-space-96: 24rem;
          --chakra-space-px: 1px;
          --chakra-space-0-5: 0.125rem;
          --chakra-space-1-5: 0.375rem;
          --chakra-space-2-5: 0.625rem;
          --chakra-space-3-5: 0.875rem;
          --chakra-space-container: 0 16px;
          --chakra-shadows-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);
          --chakra-shadows-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --chakra-shadows-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          --chakra-shadows-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --chakra-shadows-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --chakra-shadows-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --chakra-shadows-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          --chakra-shadows-outline: 0 0 0 3px rgba(66, 153, 225, 0.6);
          --chakra-shadows-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          --chakra-shadows-none: none;
          --chakra-shadows-dark-lg: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px,
            rgba(0, 0, 0, 0.4) 0px 15px 40px;
          --chakra-sizes-1: 0.25rem;
          --chakra-sizes-2: 0.5rem;
          --chakra-sizes-3: 0.75rem;
          --chakra-sizes-4: 1rem;
          --chakra-sizes-5: 1.25rem;
          --chakra-sizes-6: 1.5rem;
          --chakra-sizes-7: 1.75rem;
          --chakra-sizes-8: 2rem;
          --chakra-sizes-9: 2.25rem;
          --chakra-sizes-10: 2.5rem;
          --chakra-sizes-12: 3rem;
          --chakra-sizes-14: 3.5rem;
          --chakra-sizes-16: 4rem;
          --chakra-sizes-20: 5rem;
          --chakra-sizes-24: 6rem;
          --chakra-sizes-28: 7rem;
          --chakra-sizes-32: 8rem;
          --chakra-sizes-36: 9rem;
          --chakra-sizes-40: 10rem;
          --chakra-sizes-44: 11rem;
          --chakra-sizes-48: 12rem;
          --chakra-sizes-52: 13rem;
          --chakra-sizes-56: 14rem;
          --chakra-sizes-60: 15rem;
          --chakra-sizes-64: 16rem;
          --chakra-sizes-72: 18rem;
          --chakra-sizes-80: 20rem;
          --chakra-sizes-96: 24rem;
          --chakra-sizes-px: 1px;
          --chakra-sizes-0-5: 0.125rem;
          --chakra-sizes-1-5: 0.375rem;
          --chakra-sizes-2-5: 0.625rem;
          --chakra-sizes-3-5: 0.875rem;
          --chakra-sizes-max: max-content;
          --chakra-sizes-min: min-content;
          --chakra-sizes-full: 100%;
          --chakra-sizes-3xs: 14rem;
          --chakra-sizes-2xs: 16rem;
          --chakra-sizes-xs: 20rem;
          --chakra-sizes-sm: 24rem;
          --chakra-sizes-md: 28rem;
          --chakra-sizes-lg: 32rem;
          --chakra-sizes-xl: 36rem;
          --chakra-sizes-2xl: 42rem;
          --chakra-sizes-3xl: 48rem;
          --chakra-sizes-4xl: 56rem;
          --chakra-sizes-5xl: 64rem;
          --chakra-sizes-6xl: 72rem;
          --chakra-sizes-7xl: 80rem;
          --chakra-sizes-8xl: 90rem;
          --chakra-sizes-container-sm: 640px;
          --chakra-sizes-container-md: 768px;
          --chakra-sizes-container-lg: 1024px;
          --chakra-sizes-container-xl: 1280px;
          --chakra-sizes-container-xs: 480px;
          --chakra-sizes-screen: 100vh;
          --chakra-zIndices-hide: -1;
          --chakra-zIndices-auto: auto;
          --chakra-zIndices-base: 0;
          --chakra-zIndices-docked: 10;
          --chakra-zIndices-dropdown: 1000;
          --chakra-zIndices-sticky: 1100;
          --chakra-zIndices-banner: 1200;
          --chakra-zIndices-overlay: 1300;
          --chakra-zIndices-modal: 1400;
          --chakra-zIndices-popover: 1500;
          --chakra-zIndices-skipLink: 1600;
          --chakra-zIndices-toast: 1700;
          --chakra-zIndices-tooltip: 1800;
          --chakra-transition-property-common: background-color, border-color, color, fill, stroke, opacity,
            box-shadow, transform;
          --chakra-transition-property-colors: background-color, border-color, color, fill, stroke;
          --chakra-transition-property-dimensions: width, height;
          --chakra-transition-property-position: left, right, top, bottom;
          --chakra-transition-property-background: background-color, background-image, background-position;
          --chakra-transition-easing-ease-in: cubic-bezier(0.4, 0, 1, 1);
          --chakra-transition-easing-ease-out: cubic-bezier(0, 0, 0.2, 1);
          --chakra-transition-easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
          --chakra-transition-duration-ultra-fast: 50ms;
          --chakra-transition-duration-faster: 100ms;
          --chakra-transition-duration-fast: 150ms;
          --chakra-transition-duration-normal: 200ms;
          --chakra-transition-duration-slow: 300ms;
          --chakra-transition-duration-slower: 400ms;
          --chakra-transition-duration-ultra-slow: 500ms;
          --chakra-blur-none: 0;
          --chakra-blur-sm: 4px;
          --chakra-blur-base: 8px;
          --chakra-blur-md: 12px;
          --chakra-blur-lg: 16px;
          --chakra-blur-xl: 24px;
          --chakra-blur-2xl: 40px;
          --chakra-blur-3xl: 64px;
        }
        html {
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          font-family: roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          touch-action: manipulation;
        }
        body {
          position: relative;
          min-height: 100%;
          font-feature-settings: 'kern';
        }
        *,
        *::before,
        *::after {
          border-width: 0;
          border-style: solid;
          box-sizing: border-box;
        }
        main {
          display: block;
        }
        hr {
          border-top-width: 1px;
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        pre,
        code,
        kbd,
        samp {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 1em;
        }
        a {
          background-color: transparent;
          color: inherit;
          -webkit-text-decoration: inherit;
          text-decoration: inherit;
        }
        abbr[title] {
          border-bottom: none;
          -webkit-text-decoration: underline;
          text-decoration: underline;
          -webkit-text-decoration: underline dotted;
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
        }
        b,
        strong {
          font-weight: bold;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        img {
          border-style: none;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
        }
        button,
        input {
          overflow: visible;
        }
        button,
        select {
          text-transform: none;
        }
        button::-moz-focus-inner,
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
        fieldset {
          padding: 0.35em 0.75em 0.625em;
        }
        legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }
        progress {
          vertical-align: baseline;
        }
        textarea {
          overflow: auto;
        }
        [type='checkbox'],
        [type='radio'] {
          box-sizing: border-box;
          padding: 0;
        }
        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none !important;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        [type='search'] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none !important;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        details {
          display: block;
        }
        summary {
          display: -webkit-box;
          display: -webkit-list-item;
          display: -ms-list-itembox;
          display: list-item;
        }
        template {
          display: none;
        }
        [hidden] {
          display: none !important;
        }
        body,
        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre {
          margin: 0;
        }
        button {
          background: transparent;
          padding: 0;
        }
        fieldset {
          margin: 0;
          padding: 0;
        }
        ol,
        ul {
          margin: 0;
          padding: 0;
        }
        textarea {
          resize: vertical;
        }
        button,
        [role='button'] {
          cursor: pointer;
        }
        button::-moz-focus-inner {
          border: 0 !important;
        }
        table {
          border-collapse: collapse;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          padding: 0;
          line-height: inherit;
          color: inherit;
        }
        img,
        svg,
        video,
        canvas,
        audio,
        iframe,
        embed,
        object {
          display: block;
        }
        img,
        video {
          max-width: 100%;
          height: auto;
        }
        [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
          outline: none;
          box-shadow: none;
        }
        select::-ms-expand {
          display: none;
        }
        body {
          font-family: var(--chakra-fonts-body);
          color: var(--chakra-colors-textPrimary);
          background: var(--chakra-colors-backgroundPrimary);
          transition-property: background-color;
          transition-duration: var(--chakra-transition-duration-normal);
          line-height: var(--chakra-lineHeights-base);
        }
        *::-webkit-input-placeholder {
          color: var(--chakra-colors-gray-400);
        }
        *::-moz-placeholder {
          color: var(--chakra-colors-gray-400);
        }
        *:-ms-input-placeholder {
          color: var(--chakra-colors-gray-400);
        }
        *::placeholder {
          color: var(--chakra-colors-gray-400);
        }
        *,
        *::before,
        ::after {
          border-color: var(--chakra-colors-gray-200);
          word-wrap: break-word;
        }
        @-webkit-keyframes animation-1gn7xcy {
          0% {
            -webkit-background-position: -200px 0;
            background-position: -200px 0;
          }
          100% {
            -webkit-background-position: calc(200px + 100%) 0;
            background-position: calc(200px + 100%) 0;
          }
        }
        @keyframes animation-1gn7xcy {
          0% {
            -webkit-background-position: -200px 0;
            background-position: -200px 0;
          }
          100% {
            -webkit-background-position: calc(200px + 100%) 0;
            background-position: calc(200px + 100%) 0;
          }
        }
      `}
    />
  );
}
