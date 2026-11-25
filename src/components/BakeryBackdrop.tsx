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
            id="cake-gallery-motifs"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            {/* 1. Tiered Celebration Cake (top-left) */}
            <g
              transform="translate(24, 24) rotate(-10)"
              fill="none"
              stroke="#D9778F"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.16"
            >
              <rect
                x="5"
                y="18"
                width="22"
                height="11"
                rx="2"
                fill="#D9778F"
                fillOpacity="0.16"
              />
              <rect
                x="9"
                y="9"
                width="14"
                height="9"
                rx="2"
                fill="#F4A7BB"
                fillOpacity="0.22"
              />
              <line x1="16" y1="4" x2="16" y2="9" />
              <circle cx="16" cy="3" r="1.5" fill="#D9778F" fillOpacity="0.25" />
            </g>

            {/* 2. Wrapped Candy (top-center) */}
            <g
              transform="translate(115, 24) rotate(14)"
              fill="none"
              stroke="#D9778F"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.14"
            >
              <path d="M2 8 L9 12 L2 16 Z" fill="#F4A7BB" fillOpacity="0.22" />
              <path d="M30 8 L23 12 L30 16 Z" fill="#F4A7BB" fillOpacity="0.22" />
              <rect
                x="9"
                y="6"
                width="14"
                height="12"
                rx="6"
                fill="#D9778F"
                fillOpacity="0.14"
              />
            </g>

            {/* 3. Swirl Lollipop (top-right) */}
            <g
              transform="translate(192, 34) rotate(12)"
              fill="none"
              stroke="#D9778F"
              strokeWidth="1.35"
              strokeLinecap="round"
              opacity="0.15"
            >
              <circle cx="12" cy="12" r="9" fill="#F4A7BB" fillOpacity="0.18" />
              <path d="M12 12 m-1 0 a 1 1 0 1 0 2 0 a 2.5 2.5 0 1 0 -5 0 a 4.5 4.5 0 1 0 9 0" />
              <line x1="12" y1="21" x2="12" y2="33" />
            </g>

            {/* 4. Cupcake with Cherry (middle-left) */}
            <g
              transform="translate(56, 108) rotate(-8)"
              fill="none"
              stroke="#C2855C"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.15"
            >
              <path
                d="M6 17 L9 27 L21 27 L24 17 Z"
                fill="#C2855C"
                fillOpacity="0.12"
              />
              <path
                d="M5 17 C5 12, 10 10, 15 10 C20 10, 25 12, 25 17 Z"
                fill="#F4A7BB"
                fillOpacity="0.22"
              />
              <circle cx="15" cy="7.5" r="2.2" fill="#D9778F" fillOpacity="0.28" />
              <line x1="12" y1="18" x2="13" y2="26" />
              <line x1="18" y1="18" x2="17" y2="26" />
            </g>

            {/* 5. Brownie Slice / Cake Slice (center) */}
            <g
              transform="translate(148, 102) rotate(10)"
              fill="none"
              stroke="#C2855C"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.14"
            >
              <path
                d="M4 16 L24 9 L24 23 L4 23 Z"
                fill="#C2855C"
                fillOpacity="0.12"
              />
              <line x1="4" y1="19" x2="24" y2="19" />
              <circle cx="16" cy="9" r="2.2" fill="#D9778F" fillOpacity="0.24" />
            </g>

            {/* 6. Butterfly Topper (bottom-left) */}
            <g
              transform="translate(22, 184) rotate(15)"
              fill="none"
              stroke="#D9778F"
              strokeWidth="1.3"
              opacity="0.14"
            >
              <ellipse cx="10" cy="11" rx="6" ry="4.5" fill="#F4A7BB" fillOpacity="0.18" />
              <ellipse cx="20" cy="11" rx="6" ry="4.5" fill="#F4A7BB" fillOpacity="0.18" />
              <ellipse cx="11" cy="18" rx="4.5" ry="3.5" fill="#C2855C" fillOpacity="0.12" />
              <ellipse cx="19" cy="18" rx="4.5" ry="3.5" fill="#C2855C" fillOpacity="0.12" />
              <line x1="15" y1="8" x2="15" y2="21" />
            </g>

            {/* 7. Glazed Donut (bottom-center) */}
            <g
              transform="translate(110, 178) rotate(-12)"
              fill="none"
              stroke="#C2855C"
              strokeWidth="1.35"
              strokeLinecap="round"
              opacity="0.15"
            >
              <circle cx="15" cy="15" r="10" fill="#F4A7BB" fillOpacity="0.20" />
              <circle cx="15" cy="15" r="3.5" fill="#FFFBF7" />
              <path d="M9 11 Q12 13 15 10 Q18 13 21 11" />
            </g>

            {/* 8. Peppermint Candy (bottom-right) */}
            <g
              transform="translate(194, 176) rotate(-20)"
              fill="none"
              stroke="#D9778F"
              strokeWidth="1.35"
              strokeLinecap="round"
              opacity="0.14"
            >
              <circle cx="13" cy="13" r="8" fill="#F4A7BB" fillOpacity="0.16" />
              <path d="M7 9 L19 17" />
              <path d="M17 7 L9 19" />
            </g>

            {/* Subtle tiny sprinkles */}
            <circle cx="84" cy="54" r="1.8" fill="#D9778F" opacity="0.18" />
            <circle cx="176" cy="76" r="1.5" fill="#C2855C" opacity="0.18" />
            <circle cx="102" cy="146" r="1.8" fill="#D9778F" opacity="0.18" />
            <circle cx="218" cy="128" r="1.6" fill="#C2855C" opacity="0.16" />
            <circle cx="72" cy="218" r="1.5" fill="#D9778F" opacity="0.16" />
            <circle cx="164" cy="222" r="1.7" fill="#C2855C" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cake-gallery-motifs)" />
      </svg>
    </div>
  );
}
