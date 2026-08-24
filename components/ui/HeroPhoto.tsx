import Image from "next/image";

export function HeroPhoto() {
  return (
       <div className="avatar-float pointer-events-none absolute right-8 top-1/2 z-[5] hidden h-64 w-64 translate-y-[calc(-50%+36px)] md:right-16 md:flex md:h-72 md:w-72">
      <div className="absolute -inset-1.5 rounded-full border border-primary/30 shadow-[0_0_30px_4px_rgba(0,229,255,0.18)]" />
      <div className="absolute -left-1 -top-1 h-5 w-5 border-l-2 border-t-2 border-primary" />
      <div className="absolute -bottom-1 -right-1 h-5 w-5 border-b-2 border-r-2 border-primary" />
      <div className="relative h-full w-full overflow-hidden rounded-full">
        <Image
          src="/images/profile.jpg"
          alt="Ghayoor Khan"
          fill
          sizes="288px"
          className="object-cover"
          style={{ filter: "grayscale(0.5) contrast(1.05) brightness(0.9)" }}
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent" />
      </div>
    </div>
  );
}