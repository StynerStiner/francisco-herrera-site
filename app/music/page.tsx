import { StubPage } from "@/components/layout/StubPage";

// /music remains as a stub for direct URL hits — the primary music
// experience lives on the homepage. The recording-studio image conveys
// "music being made" rather than a passive catalog landing.
export default function MusicPage() {
  return (
    <StubPage
      title={{ en: "Music", es: "Música" }}
      heroImage="/images/client-sent-images/69846564008__2864B8A4-74A6-440A-B1A2-60F232DAC2AA.jpeg"
      imagePosition="center"
      watermark={{ en: "Estudio", es: "Estudio" }}
      intro={{
        en: "Albums, songs, and recordings — listen on the homepage or browse the discography here.",
        es: "Álbumes, canciones y grabaciones — escucha en la página principal o explora la discografía aquí.",
      }}
    />
  );
}
