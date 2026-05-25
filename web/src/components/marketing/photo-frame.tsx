import Image from 'next/image';

type PhotoFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  /** Skip Next image optimizer cache (use for updated static photos in dev). */
  unoptimized?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export function PhotoFrame({
  src,
  alt,
  priority = false,
  unoptimized = false,
  className = '',
  imageClassName = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: PhotoFrameProps) {
  return (
    <div className={`photo-frame relative overflow-hidden ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized={unoptimized}
        sizes={sizes}
        className={`object-cover ${imageClassName}`.trim()}
      />
    </div>
  );
}
