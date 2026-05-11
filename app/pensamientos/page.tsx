import { StubPage } from "@/components/layout/StubPage";

export default function PensamientosPage() {
  return (
    <StubPage
      title={{ en: "Pensamientos", es: "Pensamientos" }}
      lang="es"
      heroImage="/images/client-sent-images/IMG_0139.jpeg"
      imagePosition="center"
      watermark={{ en: "Reflexión", es: "Reflexión" }}
      intro={{
        en: "Reflections in Spanish — notes from the road, from the altar, from the kitchen table.",
        es: "Reflexiones en español — notas del camino, del altar, de la mesa de la cocina.",
      }}
    />
  );
}
