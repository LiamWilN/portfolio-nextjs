export default async function Work({ params }: any) {
  const { slug } = await params;
  return <section>{slug}</section>;
}
