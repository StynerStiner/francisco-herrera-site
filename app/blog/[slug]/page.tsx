import { StubPage } from "@/components/layout/StubPage";

type Params = Promise<{ slug: string }>;

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  return (
    <StubPage
      title={{ en: "Blog post", es: "Entrada del blog" }}
      detail={`Post: ${slug} — coming soon`}
    />
  );
}
