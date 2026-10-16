interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 160, height = 52 }: LogoProps) {
  return (
    <img
      src="/lakat-iloilo-logo.svg"
      alt="Lakat Iloilo"
      width={width}
      height={height}
      className={className}
    />
  );
}
