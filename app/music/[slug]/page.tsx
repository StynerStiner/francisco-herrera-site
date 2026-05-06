import { StubPage } from "@/components/layout/StubPage";

type Params = Promise<{ slug: string }>;

export default async function AlbumPage({ params }: { params: Params }) {
  const { slug } = await params;
  return (
    <StubPage
      title={{ en: "Album", es: "Álbum" }}
      detail={`Album: ${slug} — coming soon`}
    />
  );
}
