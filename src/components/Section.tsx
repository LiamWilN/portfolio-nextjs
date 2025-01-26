type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <section className="max-w-screen-md mx-auto h-full w-full">
      {children}
    </section>
  );
};

export default Section;
