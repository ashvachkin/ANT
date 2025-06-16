export const ArchiveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <defs>
      <clipPath id='clip-archive'>
        <rect width='23' height='23' transform='translate(0.5 0.5)' fill='white' fillOpacity='0' />
      </clipPath>
    </defs>
    <rect width='23' height='23' transform='translate(0.5 0.5)' fill='#FFFFFF' fillOpacity='0' />
    <g clipPath='url(#clip-archive)'>
      <path
        d='M2 12C2 7.28 2 4.92 3.46 3.46C4.92 2 7.28 2 12 2C16.71 2 19.07 2 20.53 3.46C22 4.92 22 7.28 22 12'
        stroke='#000'
        strokeWidth='2'
      />
      <path
        d='M2.54 8.73C3.02 7.78 3.78 7.02 4.73 6.54C5.8 6 7.19 6 10 6H14C16.8 6 18.19 6 19.26 6.54C20.21 7.02 20.97 7.78 21.45 8.73C22 9.79 22 11.2 22 14C22 16.79 22 18.2 21.45 19.26C20.97 20.21 20.21 20.97 19.26 21.45C18.19 22 16.8 22 14 22H10C7.19 22 5.8 22 4.73 21.45C3.78 20.97 3.02 20.21 2.54 19.26C2 18.2 2 16.79 2 14C2 11.2 2 9.79 2.54 8.73Z'
        stroke='#000'
        strokeWidth='2'
      />
      <path
        d='M9.5 14.4L10.92 16L14.5 12'
        stroke='#000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);
