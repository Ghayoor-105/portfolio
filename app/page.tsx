import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { Systems } from "@/components/sections/Systems";
import { Experiments } from "@/components/sections/Experiments";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Identity />
      <Systems />
      <Experiments />
    </main>
  );
}