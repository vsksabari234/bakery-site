export function BakeryBackdrop() {
  return (
    <div
      aria-hidden="true"
      data-testid="bakery-pattern-backdrop"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pandu-bakes-candies"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            {/* 1. Wrapped Candy (top-left) */}
            <g
              transform="translate(26, 28) rotate(-18)"
              fill="none"
              stroke="#4A2810"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.14"
            >
              <path d="M2 8 L9 12 L2 16 Z" fill="#B45309" fillOpacity="0.18" />
              <path d="M30 8 L23 12 L30 16 Z" fill="#B45309" fillOpacity="0.18" />
              <rect
                x="9"
                y="6"
                width="14"
                height="12"
                rx="6"
                fill="#4A2810"
                fillOpacity="0.10"
              />
              <path d="M13 7.5 Q16 12 13 16.5" />
              <path d="M19 7.5 Q16 12 19 16.5" />
            </g>

            {/* 2. Mini Croissant / Crescent Cookie (top-center) */}
            <g
              transform="translate(115, 22) rotate(14)"
              fill="none"
              stroke="#4A2810"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.13"
            >
              <path
                d="M4 18 C7 8, 25 8, 28 18 C24 21, 21 17, 16 17 C11 17, 8 21, 4 18 Z"
                fill="#B45309"
                fillOpacity="0.15"
              />
              <path d="M11 11 L12 17" />
              <path d="M16 10 L16 17" />
              <path d="M21 11 L20 17" />
            </g>

            {/* 3. Swirl Lollipop / Candy (top-right) */}
            <g
              transform="translate(192, 34) rotate(12)"
              fill="none"
              stroke="#4A2810"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.14"
            >
              <circle cx="12" cy="12" r="9" fill="#B45309" fillOpacity="0.14" />
              <path d="M12 12 m-1 0 a 1 1 0 1 0 2 0 a 2.5 2.5 0 1 0 -5 0 a 4.5 4.5 0 1 0 9 0" />
              <line x1="12" y1="21" x2="12" y2="33" />
            </g>

            {/* 4. Cupcake / Butter Rosette (middle-left) */}
            <g
              transform="translate(56, 108) rotate(-8)"
              fill="none"
              stroke="#4A2810"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.14"
            >
              <path
                d="M6 17 L9 27 L21 27 L24 17 Z"
                fill="#4A2810"
                fillOpacity="0.10"
              />
              <path
                d="M5 17 C5 12, 10 10, 15 10 C20 10, 25 12, 25 17 Z"
                fill="#B45309"
                fillOpacity="0.16"
              />
              <circle cx="15" cy="7.5" r="2.2" fill="#4A2810" fillOpacity="0.22" />
              <line x1="12" y1="18" x2="13" y2="26" />
              <line x1="18" y1="18" x2="17" y2="26" />
            </g>

            {/* 5. Heart Cookie / Putri Salju (center) */}
            <g
              transform="translate(148, 102) rotate(10)"
              fill="none"
              stroke="#4A2810"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.13"
            >
              <path
                d="M14 23 C8 18, 4 14, 4 9.5 C4 6.5, 6.5 4.5, 9.2 4.5 C11.3 4.5, 13.1 5.7, 14 7.3 C14.9 5.7, 16.7 4.5, 18.8 4.5 C21.5 4.5, 24 6.5, 24 9.5 C24 14, 20 18, 14 23 Z"
                fill="#4A2810"
                fillOpacity="0.09"
              />
            </g>

            {/* 6. Scalloped Nastar Tart Cookie (bottom-left) */}
            <g
              transform="translate(22, 184) rotate(15)"
              fill="none"
              stroke="#4A2810"
              strokeWidth="1.4"
              opacity="0.14"
            >
              <circle cx="14" cy="14" r="10" fill="#B45309" fillOpacity="0.14" />
              <circle cx="14" cy="14" r="5" fill="#4A2810" fillOpacity="0.14" />
              <line x1="10" y1="10" x2="18" y2="18" />
              <line x1="18" y1="10" x2="10" y2="18" />
            </g>

            {/* 7. Pretzel / Sweet Roll (bottom-center) */}
            <g
              transform="translate(110, 178) rotate(-12)"
              fill="none"
              stroke="#4A2810"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.13"
            >
              <path d="M15 24 C7 24, 4 17, 7 12 C10 7, 15 11, 15 16 C15 11, 20 7, 23 12 C26 17, 23 24, 15 24 Z" />
              <path d="M9 19 L21 13" />
              <path d="M21 19 L9 13" />
            </g>

            {/* 8. Candy Cane / Peppermint Drop (bottom-right) */}
            <g
              transform="translate(194, 176) rotate(-20)"
              fill="none"
              stroke="#4A2810"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.14"
            >
              <circle cx="13" cy="13" r="8" fill="#4A2810" fillOpacity="0.09" />
              <path d="M7 9 L19 17" />
              <path d="M17 7 L9 19" />
            </g>

            {/* Subtle tiny sugar/crumb sprinkles */}
            <circle cx="84" cy="54" r="1.8" fill="#4A2810" opacity="0.14" />
            <circle cx="176" cy="76" r="1.5" fill="#B45309" opacity="0.18" />
            <circle cx="102" cy="146" r="1.8" fill="#B45309" opacity="0.16" />
            <circle cx="218" cy="128" r="1.6" fill="#4A2810" opacity="0.14" />
            <circle cx="72" cy="218" r="1.5" fill="#4A2810" opacity="0.14" />
            <circle cx="164" cy="222" r="1.7" fill="#B45309" opacity="0.16" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pandu-bakes-candies)" />
      </svg>
    </div>
  );
}
