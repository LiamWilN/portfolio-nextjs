type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <section className="max-w-screen-sm mx-auto h-full w-full">
      {children}
    </section>
  );
};

export default Section;
