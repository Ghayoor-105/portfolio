import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { Systems } from "@/components/sections/Systems";
import { Experiments } from "@/components/sections/Experiments";
import { Journey } from "@/components/sections/Journey";
import { Thinking } from "@/components/sections/Thinking";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Identity />
      <Systems />
      <Experiments />
      <Journey />
      <Thinking />
    </main>
  );
}