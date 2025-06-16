import { SVGProps } from 'react';

export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M13.99 6C13.98 3.82 13.88 2.64 13.12 1.87C12.24 1 10.82 1 8 1L7 1C4.17 1 2.75 1 1.87 1.87C1 2.75 1 4.17 1 7L1 15C1 17.82 1 19.24 1.87 20.12C2.75 21 4.17 21 7 21L8 21C10.82 21 12.24 21 13.12 20.12C13.88 19.35 13.98 18.17 13.99 16'
      stroke='#000'
      strokeOpacity={1}
      strokeWidth={2}
      strokeLinecap='round'
    />
    <path
      d='M8 11L21 11M17.5 14L21 11L17.5 8'
      stroke='#000'
      strokeOpacity={1}
      strokeWidth={2}
      strokeLinejoin='round'
      strokeLinecap='round'
    />
  </svg>
);
