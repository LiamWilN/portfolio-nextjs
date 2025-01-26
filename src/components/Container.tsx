import Section from "./Section";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <main className="">
      <Section>{children}</Section>
    </main>
  );
}
