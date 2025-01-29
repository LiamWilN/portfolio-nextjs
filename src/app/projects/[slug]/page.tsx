import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Project({ params }: any) {
  const { slug } = await params;
  return (
    <section>
      <Link href="/work">
        <ChevronLeft />
      </Link>
      {slug}
    </section>
  );
}
