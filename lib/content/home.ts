import type { Localized } from "@/lib/i18n";

/* ─── Existing exports (kept for back-compat) ─────────────────────────── */

type ThemeCard = {
  id: string;
  title: Localized;
  blurb: Localized;
};

type LegacyHomeContent = {
  hero: {
    eyebrow: Localized;
    title: Localized;
    tagline: Localized;
    ctaPrimary: Localized;
    ctaSecondary: Localized;
  };
  catalogIntro: Localized;
  themes: ThemeCard[];
};

export const homeContent: LegacyHomeContent = {
  hero: {
    eyebrow: { en: "Public Art / Arte Público", es: "Arte Público" },
    title: { en: "Francisco J. Herrera", es: "Francisco J. Herrera" },
    tagline: {
      en: "Songs of liberation, migration, family, and faith — sung in churches, plazas, schools, picket lines, and everywhere people are organizing.",
      es: "Cantos de liberación, migración, familia y fe — cantados en iglesias, plazas, escuelas, líneas de piquete, y donde la gente se organiza.",
    },
    ctaPrimary: { en: "Listen", es: "Escuchar" },
    ctaSecondary: { en: "Book Now", es: "Contrátanos" },
  },
  catalogIntro: {
    en: "Music for movements, families, and the journey home.",
    es: "Música para los movimientos, las familias, y el camino a casa.",
  },
  themes: [
    {
      id: "migration",
      title: { en: "Migration & Liberation", es: "Migración y Liberación" },
      blurb: {
        en: "Honor Migrante and the songs of the journey.",
        es: "Honor Migrante y los cantos del camino.",
      },
    },
    {
      id: "family",
      title: { en: "Children & Family", es: "Niños y Familia" },
      blurb: {
        en: "Francisco y L@s Niñ@s — songs in Spanish for the whole family.",
        es: "Francisco y L@s Niñ@s — canciones en español para toda la familia.",
      },
    },
    {
      id: "faith",
      title: { en: "Faith & Reflection", es: "Fe y Reflexión" },
      blurb: {
        en: "Songs for churches, vigils, and the work of justice.",
        es: "Cantos para iglesias, vigilias, y el trabajo de la justicia.",
      },
    },
  ],
};

/* ─── Guitare-section content (new) ───────────────────────────────────── */

export type HeroSlide = {
  id: string;
  image: string;
  imageAlt: Localized;
  eyebrow: Localized;
  title: Localized;
  tagline: Localized;
  cta: { label: Localized; href: string };
};

export type DealBannerContent = {
  background: string;
  eyebrow: Localized;
  title: Localized;
  body: Localized;
  cta: { label: Localized; href: string };
};

export type CustomBlock = {
  id: string;
  image: string;
  imageAlt: Localized;
  reverse: boolean;
  eyebrow: Localized;
  title: Localized;
  body: Localized;
  cta: { label: Localized; href: string };
};

export type CustomSectionContent = {
  sectionEyebrow: Localized;
  sectionTitle: Localized;
  blocks: CustomBlock[];
};

export type AlbumCard = {
  id: string;
  image: string;
  title: Localized;
  theme: Localized;
  href: string;
};

export type ProductCarouselContent = {
  eyebrow: Localized;
  title: Localized;
  description: Localized;
  ctaLabel: Localized;
  items: AlbumCard[];
};

export type VideoBannerContent = {
  poster: string;
  eyebrow: Localized;
  title: Localized;
  caption: Localized;
  videoUrl: string;
};

export type SpecRow = { label: Localized; value: Localized };

export type GridBannerCard = {
  id: string;
  image: string;
  title: Localized;
  series: Localized;
  price: Localized;
  originalPrice?: Localized;
  specs: SpecRow[];
  cta: { label: Localized; href: string };
};

export type GridBannerContent = {
  background: string;
  eyebrow: Localized;
  title: Localized;
  cards: GridBannerCard[];
};

export type BlogPostCard = {
  id: string;
  image: string;
  date: Localized;
  title: Localized;
  excerpt: Localized;
  href: string;
};

export type FeaturedBlogContent = {
  background: string;
  eyebrow: Localized;
  title: Localized;
  posts: BlogPostCard[];
};

export type GuitareHomeContent = {
  hero: HeroSlide[];
  dealBanner: DealBannerContent;
  customSection: CustomSectionContent;
  productCarousel: ProductCarouselContent;
  videoBanner: VideoBannerContent;
  gridBanner: GridBannerContent;
  featuredBlog: FeaturedBlogContent;
};

const PIC = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const guitareHome: GuitareHomeContent = {
  hero: [
    {
      id: "honor-migrante",
      image: PIC("honor-migrante", 1750, 800),
      imageAlt: { en: "Album cover — Honor Migrante", es: "Portada del álbum — Honor Migrante" },
      eyebrow: { en: "ALBUM", es: "ÁLBUM" },
      title: { en: "HONOR MIGRANTE", es: "HONOR MIGRANTE" },
      tagline: {
        en: "Songs of the journey home / Cantos del camino a casa",
        es: "Cantos del camino a casa / Songs of the journey home",
      },
      cta: { label: { en: "LISTEN / ESCUCHAR", es: "ESCUCHAR / LISTEN" }, href: "/music" },
    },
    {
      id: "booking",
      image: PIC("booking", 1750, 800),
      imageAlt: { en: "Francisco performing live", es: "Francisco actuando en vivo" },
      eyebrow: { en: "LIVE", es: "EN VIVO" },
      title: { en: "BOOK FRANCISCO", es: "CONTRÁTANOS" },
      tagline: {
        en: "Music for movements, churches, schools, and family",
        es: "Música para movimientos, iglesias, escuelas y familias",
      },
      cta: { label: { en: "BOOK NOW / CONTRÁTANOS", es: "CONTRÁTANOS / BOOK NOW" }, href: "/booking" },
    },
    {
      id: "ninos",
      image: PIC("ninos", 1750, 800),
      imageAlt: { en: "Francisco singing with children", es: "Francisco cantando con niños" },
      eyebrow: { en: "CHILDREN", es: "NIÑOS" },
      title: { en: "FRANCISCO Y L@S NIÑ@S", es: "FRANCISCO Y L@S NIÑ@S" },
      tagline: {
        en: "Bilingual songs for kids and families",
        es: "Canciones bilingües para niñ@s y familias",
      },
      cta: { label: { en: "EXPLORE / EXPLORAR", es: "EXPLORAR / EXPLORE" }, href: "/music/francisco-y-los-ninos" },
    },
  ],

  dealBanner: {
    background: PIC("publicart", 1920, 600),
    eyebrow: { en: "PUBLIC ART / ARTE PÚBLICO", es: "ARTE PÚBLICO / PUBLIC ART" },
    title: { en: "Music as Public Art", es: "Música como Arte Público" },
    body: {
      en: "Francisco's music is sung in churches, plazas, schools, picket lines — and everywhere people are organizing, having fun, and making a difference.",
      es: "La música de Francisco se canta en iglesias, plazas, escuelas, líneas de piquete — y donde sea que la gente se organice, se divierta, y haga la diferencia.",
    },
    cta: { label: { en: "READ MORE / LEER MÁS", es: "LEER MÁS / READ MORE" }, href: "/about" },
  },

  customSection: {
    sectionEyebrow: { en: "ABOUT", es: "ACERCA" },
    sectionTitle: { en: "Cultural Worker. Songwriter. Bridge.", es: "Trabajador Cultural. Cantautor. Puente." },
    blocks: [
      {
        id: "bio",
        image: PIC("bio", 1920, 1024),
        imageAlt: { en: "Francisco at the microphone", es: "Francisco frente al micrófono" },
        reverse: false, // image left, text right
        eyebrow: { en: "BIO", es: "BIO" },
        title: { en: "Cultural Worker. Songwriter. Bridge.", es: "Trabajador Cultural. Cantautor. Puente." },
        body: {
          en: "For over four decades Francisco has carried songs across borders — between English and Spanish, between churches and union halls, between elders and children. His work is rooted in the Bay Area, harvested from across the Americas.",
          es: "Por más de cuatro décadas Francisco ha llevado cantos a través de fronteras — entre inglés y español, entre iglesias y salones sindicales, entre ancianos y niños. Su trabajo está arraigado en el Área de la Bahía, cosechado en todas las Américas.",
        },
        cta: {
          label: { en: "MORE ABOUT FRANCISCO / SOBRE FRANCISCO", es: "SOBRE FRANCISCO / MORE ABOUT FRANCISCO" },
          href: "/about",
        },
      },
      {
        id: "mission",
        image: PIC("mission", 840, 1224),
        imageAlt: { en: "Portrait", es: "Retrato" },
        reverse: true, // image right, text left
        eyebrow: { en: "MISSION", es: "MISIÓN" },
        title: { en: "Songs of Liberation / Cantos de Liberación", es: "Cantos de Liberación / Songs of Liberation" },
        body: {
          en: "The themes are constant: migration as a sacred journey, family as the first community, faith as the ground beneath movement. The songs are written to be sung — by you, with us, for each other.",
          es: "Los temas son constantes: la migración como peregrinaje sagrado, la familia como primera comunidad, la fe como tierra bajo el movimiento. Los cantos están escritos para ser cantados — por ti, con nosotros, los unos por los otros.",
        },
        cta: {
          label: { en: "EXPLORE THE MUSIC / EXPLORA LA MÚSICA", es: "EXPLORA LA MÚSICA / EXPLORE THE MUSIC" },
          href: "/music",
        },
      },
    ],
  },

  productCarousel: {
    eyebrow: { en: "DISCOGRAPHY / DISCOGRAFÍA", es: "DISCOGRAFÍA / DISCOGRAPHY" },
    title: { en: "Albums & Singles", es: "Álbumes y Sencillos" },
    description: {
      en: "Six recordings spanning four decades — from solo acoustic to full-band productions, in English, Spanish, and the spaces between.",
      es: "Seis grabaciones a lo largo de cuatro décadas — desde acústica solista hasta producciones de banda completa, en inglés, español, y los espacios intermedios.",
    },
    ctaLabel: { en: "VIEW / VER", es: "VER / VIEW" },
    items: [
      {
        id: "honor-migrante",
        image: PIC("alb-honor", 600, 600),
        title: { en: "Honor Migrante", es: "Honor Migrante" },
        theme: { en: "Migration & Liberation", es: "Migración y Liberación" },
        href: "/music/honor-migrante",
      },
      {
        id: "fuerza-de-la-raiz",
        image: PIC("alb-fuerza", 600, 600),
        title: { en: "Fuerza De La Raíz", es: "Fuerza De La Raíz" },
        theme: { en: "Migration & Liberation", es: "Migración y Liberación" },
        href: "/music/fuerza-de-la-raiz",
      },
      {
        id: "francisco-y-los-ninos",
        image: PIC("alb-ninos", 600, 600),
        title: { en: "Francisco y L@s Niñ@s", es: "Francisco y L@s Niñ@s" },
        theme: { en: "Children & Family", es: "Niños y Familia" },
        href: "/music/francisco-y-los-ninos",
      },
      {
        id: "singles",
        image: PIC("alb-singles", 600, 600),
        title: { en: "Singles", es: "Sencillos" },
        theme: { en: "Various", es: "Varios" },
        href: "/music/singles",
      },
      {
        id: "caminando",
        image: PIC("alb-caminando", 600, 600),
        title: { en: "Caminando — Coming Soon", es: "Caminando — Próximamente" },
        theme: { en: "Migration & Liberation", es: "Migración y Liberación" },
        href: "/music/caminando",
      },
      {
        id: "archive",
        image: PIC("alb-archive", 600, 600),
        title: { en: "Archive", es: "Archivo" },
        theme: { en: "Faith & Reflection", es: "Fe y Reflexión" },
        href: "/music/archive",
      },
    ],
  },

  videoBanner: {
    poster: PIC("liveposter", 1920, 700),
    eyebrow: { en: "LIVE", es: "EN VIVO" },
    title: { en: "Saber Ante La Migra", es: "Saber Ante La Migra" },
    caption: { en: "Live at Posada Sin Fronteras", es: "En Vivo en Posada Sin Fronteras" },
    videoUrl: "https://player.vimeo.com/video/234974022",
  },

  gridBanner: {
    background: PIC("gridbg", 1920, 800),
    eyebrow: { en: "FEATURED RELEASES / LANZAMIENTOS DESTACADOS", es: "LANZAMIENTOS DESTACADOS / FEATURED RELEASES" },
    title: { en: "Two Albums to Start With", es: "Dos Álbumes Para Comenzar" },
    cards: [
      {
        id: "honor-migrante",
        image: PIC("grid-honor", 600, 600),
        title: { en: "Honor Migrante", es: "Honor Migrante" },
        series: { en: "Migration & Liberation", es: "Migración y Liberación" },
        price: { en: "$10.00 USD", es: "$10.00 USD" },
        specs: [
          { label: { en: "Tracks", es: "Pistas" }, value: { en: "12", es: "12" } },
          { label: { en: "Length", es: "Duración" }, value: { en: "42 min", es: "42 min" } },
          { label: { en: "Released", es: "Lanzado" }, value: { en: "2014", es: "2014" } },
          { label: { en: "Producer", es: "Productor" }, value: { en: "Greg Landau", es: "Greg Landau" } },
          {
            label: { en: "Featured", es: "Invitados" },
            value: { en: "Omar Sosa, Mike Spiro, Camilo Landau", es: "Omar Sosa, Mike Spiro, Camilo Landau" },
          },
          { label: { en: "Lang", es: "Idioma" }, value: { en: "Bilingual (EN/ES)", es: "Bilingüe (EN/ES)" } },
        ],
        cta: { label: { en: "BUY CD / COMPRAR CD", es: "COMPRAR CD / BUY CD" }, href: "/store/honor-migrante" },
      },
      {
        id: "fuerza-de-la-raiz",
        image: PIC("grid-fuerza", 600, 600),
        title: { en: "Fuerza De La Raíz", es: "Fuerza De La Raíz" },
        series: { en: "Strength from the Roots", es: "Fuerza desde las Raíces" },
        price: { en: "$5.00 USD", es: "$5.00 USD" },
        originalPrice: { en: "$15.00 USD", es: "$15.00 USD" },
        specs: [
          { label: { en: "Tracks", es: "Pistas" }, value: { en: "16", es: "16" } },
          { label: { en: "Length", es: "Duración" }, value: { en: "52 min", es: "52 min" } },
          { label: { en: "Released", es: "Lanzado" }, value: { en: "2010", es: "2010" } },
          {
            label: { en: "Style", es: "Estilo" },
            value: { en: "Folk · Blues · Hip-Hop · Electronic", es: "Folk · Blues · Hip-Hop · Electrónica" },
          },
          {
            label: { en: "Includes", es: "Incluye" },
            value: { en: "A Desalambrar, Wade in the Water, Danny Boy", es: "A Desalambrar, Wade in the Water, Danny Boy" },
          },
          { label: { en: "Lang", es: "Idioma" }, value: { en: "Bilingual (EN/ES)", es: "Bilingüe (EN/ES)" } },
        ],
        cta: { label: { en: "BUY CD / COMPRAR CD", es: "COMPRAR CD / BUY CD" }, href: "/store/fuerza-de-la-raiz" },
      },
    ],
  },

  featuredBlog: {
    background: PIC("blogbg", 1920, 800),
    eyebrow: { en: "BLOG", es: "BLOG" },
    title: { en: "On the Road / En Camino", es: "En Camino / On the Road" },
    posts: [
      {
        id: "song-of-liberation",
        image: PIC("blog1", 600, 400),
        date: { en: "March 6, 2016", es: "6 de marzo de 2016" },
        title: { en: "Song of Liberation / Canto de Liberación", es: "Canto de Liberación / Song of Liberation" },
        excerpt: {
          en: "Whether singing with your children or as community at a rally...",
          es: "Sea cantando con tus hijos o como comunidad en una marcha...",
        },
        href: "/blog/song-of-liberation",
      },
      {
        id: "on-the-road-1",
        image: PIC("blog2", 600, 400),
        date: { en: "Coming Soon", es: "Próximamente" },
        title: { en: "On the Road #1", es: "En Camino #1" },
        excerpt: {
          en: "Notes from a tour through churches and schools...",
          es: "Notas de una gira por iglesias y escuelas...",
        },
        href: "/blog/on-the-road-1",
      },
      {
        id: "pensamientos-uno",
        image: PIC("blog3", 600, 400),
        date: { en: "Coming Soon", es: "Próximamente" },
        title: { en: "Pensamientos #1", es: "Pensamientos #1" },
        excerpt: {
          en: "Reflexiones desde el camino...",
          es: "Reflexiones desde el camino...",
        },
        href: "/pensamientos/uno",
      },
      {
        id: "notes-from-the-studio",
        image: PIC("blog4", 600, 400),
        date: { en: "Coming Soon", es: "Próximamente" },
        title: { en: "Notes from the Studio", es: "Notas del Estudio" },
        excerpt: {
          en: "Recording the next album...",
          es: "Grabando el próximo álbum...",
        },
        href: "/blog/notes-from-the-studio",
      },
    ],
  },
};
