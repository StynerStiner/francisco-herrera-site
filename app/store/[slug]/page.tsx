import { StubPage } from "@/components/layout/StubPage";

type Params = Promise<{ slug: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  return (
    <StubPage
      title={{ en: "Product", es: "Producto" }}
      detail={`Product: ${slug} — coming soon`}
    />
  );
}
