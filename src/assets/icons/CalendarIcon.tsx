export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <defs>
      <clipPath id='clip-calendar'>
        <rect width='23' height='23' transform='translate(0.5 0.5)' fill='white' fillOpacity='0' />
      </clipPath>
    </defs>
    <rect width='23' height='23' transform='translate(0.5 0.5)' fill='#FFFFFF' fillOpacity='0' />
    <g clipPath='url(#clip-calendar)'>
      <path
        d='M3.17 5.17C4.34 4 6.22 4 10 4H14C17.77 4 19.65 4 20.82 5.17C22 6.34 22 8.22 22 12V14C22 17.77 22 19.65 20.82 20.82C19.65 22 17.77 22 14 22H10C6.22 22 4.34 22 3.17 20.82C2 19.65 2 17.77 2 14V12C2 8.22 2 6.34 3.17 5.17Z'
        stroke='#000'
        strokeWidth='2'
      />
      <path d='M7 4V2.5M17 4V2.5' stroke='#000' strokeWidth='2' strokeLinecap='round' />
      <path
        d='M16 18C14.89 18 14 17.1 14 16C14 14.89 14.89 14 16 14C17.1 14 18 14.89 18 16C18 17.1 17.1 18 16 18Z'
        stroke='#000'
        strokeWidth='2'
      />
      <path d='M2.5 9H21.5' stroke='#000' strokeWidth='2' strokeLinecap='round' />
    </g>
  </svg>
);
