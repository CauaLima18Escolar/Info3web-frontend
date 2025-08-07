export const Icons = {
  Home: ({ width = "32px", height = "32px" }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 29.3332V15.9998H20V29.3332M4 11.9998L16 2.6665L28 11.9998V26.6665C28 27.3737 27.719 28.052 27.219 28.5521C26.7189 29.0522 26.0406 29.3332 25.3333 29.3332H6.66667C5.95942 29.3332 5.28115 29.0522 4.78105 28.5521C4.28095 28.052 4 27.3737 4 26.6665V11.9998Z"
        stroke="#1E1E1E"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Photo: ({ width = "32px", height = "32px" }) => {
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 28C5.93333 28 5.3 27.7444 4.76667 27.2333C4.25556 26.7 4 26.0667 4 25.3333V6.66667C4 5.93333 4.25556 5.31111 4.76667 4.8C5.3 4.26667 5.93333 4 6.66667 4H25.3333C26.0667 4 26.6889 4.26667 27.2 4.8C27.7333 5.31111 28 5.93333 28 6.66667V25.3333C28 26.0667 27.7333 26.7 27.2 27.2333C26.6889 27.7444 26.0667 28 25.3333 28H6.66667ZM6.66667 25.3333H25.3333V6.66667H6.66667V25.3333ZM8 22.6667H24L19 16L15 21.3333L12 17.3333L8 22.6667ZM6.66667 25.3333V6.66667V25.3333Z"
        fill="#1D1B20"
      />
    </svg>;
  },
  Users: ({ width = "32px", height = "32px" }) => {
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_348_95)">
        <path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
          stroke="#1E1E1E"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_348_95">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>;
  },
  User: ({ width = "32px", height = "32px" }) => {
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        stroke="#1E1E1E"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>;
  },
  Add: ({width="56px", height="56px"}) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_148_103)">
        <circle cx="28" cy="28" r="24" fill="#962AE8" />
      </g>
      <path
        d="M28 20V36M20 28H36M48 28C48 39.0457 39.0457 48 28 48C16.9543 48 8 39.0457 8 28C8 16.9543 16.9543 8 28 8C39.0457 8 48 16.9543 48 28Z"
        stroke="#F3F3F3"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_f_148_103"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_148_103"
          />
        </filter>
      </defs>
    </svg>
  ),
};
