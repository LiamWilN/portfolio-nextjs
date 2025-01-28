import Section from "./Section";
import me from "@/assets/me.json";

export default function Hero() {
  return (
    <Section>
      <div className="my-4 pb-4">
        <h1 className="text-2xl font-bold">{me.name}</h1>
        <h3 className="text-sm">{me.aspiretobe}</h3>
      </div>
      <div className="mt-4 space-y-4">
        {me.hero.map((item) => (
          <p key={item.id}>{item.content}</p>
        ))}
      </div>
    </Section>
  );
}
