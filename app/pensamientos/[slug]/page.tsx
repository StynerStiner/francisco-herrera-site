import { StubPage } from "@/components/layout/StubPage";

type Params = Promise<{ slug: string }>;

export default async function PensamientoPage({ params }: { params: Params }) {
  const { slug } = await params;
  return (
    <StubPage
      title={{ en: "Pensamiento", es: "Pensamiento" }}
      detail={`Pensamiento: ${slug} — próximamente`}
      lang="es"
    />
  );
}
