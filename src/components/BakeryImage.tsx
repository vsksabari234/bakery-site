import { useState } from 'react';
import { Wheat } from 'lucide-react';

interface BakeryImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function BakeryImage({
  src,
  alt,
  className = '',
  fallbackLabel,
}: BakeryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#FFE8EF] text-[#6D5046] p-6 text-center ${className}`}
      >
        <Wheat className="w-7 h-7 text-[#B84364] mb-2" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide text-[#462C24]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
