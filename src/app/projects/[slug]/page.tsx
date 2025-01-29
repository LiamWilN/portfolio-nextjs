export default async function Project({ params }: any) {
  const { slug } = await params;
  return <section>{slug}</section>;
}
