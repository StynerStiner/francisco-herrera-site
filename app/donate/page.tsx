import { StubPage } from "@/components/layout/StubPage";

export default function DonatePage() {
  return (
    <StubPage
      title={{ en: "Donate", es: "Donar" }}
      heroImage="/images/client-sent-images/Image-1.jpeg"
      imagePosition="center 25%"
      watermark={{ en: "Gracias", es: "Gracias" }}
      intro={{
        en: "Your support keeps the songs traveling — to picket lines, vigils, churches, and schools.",
        es: "Tu apoyo mantiene los cantos viajando — a piquetes, vigilias, iglesias y escuelas.",
      }}
    />
  );
}
