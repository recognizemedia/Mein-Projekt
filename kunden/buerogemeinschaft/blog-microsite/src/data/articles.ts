export type RundgangKey = "monheim" | "leverkusen" | "both";

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  id: number;
  slug: string;
  headline: string;
  teaser: string;
  image: string;
  sections: ArticleSection[];
  rundgang?: RundgangKey;
}

export const rundgangLinks: Record<"monheim" | "leverkusen", string> = {
  monheim:
    "https://www.google.com/maps/place/1A+B%C3%BCrogemeinschaft+Monheim+am+Rhein/@51.1103367,6.8953918,3a,75y,114.22h,90.34t/data=!3m6!1e1!3m4!1sAF1QipMd9gFmqQqAE_R1GWElnfXylw7mAADlb84yg-1M!2e10!7i11008!8i5504!4m7!3m6!1s0x47bf32f06435abcf:0xfd10e4458ae9c026!8m2!3d51.1103534!4d6.8953839!10e5!16s%2Fg%2F11fxvq8yvs",
  leverkusen:
    "https://www.google.com/maps/place/1A+B%C3%BCrogemeinschaft/@51.0312041,7.0163148,3a,75y,312.4h,88.58t/data=!3m8!1e1!3m6!1sAF1QipOSv1A8cR0jc5zM3h9dxVNy_6kMw6sKSABqE6YD!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipOSv1A8cR0jc5zM3h9dxVNy_6kMw6sKSABqE6YD%3Dw900-h600-k-no-pi1.4200000000000017-ya296.0394462585449-ro0-fo100!7i11008!8i5504!4m7!3m6!1s0x47bf2ff9da881801:0xc7c4406269f044a2!8m2!3d51.0312677!4d7.0163476!10e5!16s%2Fg%2F11vm7pm0n4",
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "artikel-1",
    headline: "Warum Ihr Unternehmen von der Gewerbesteuer in Leverkusen profitiert",
    teaser:
      "Der Gewerbesteuer-Hebesatz in Leverkusen zählt zu den günstigsten in Nordrhein-Westfalen. So wirkt sich das auf Ihre Firma aus.",
    image: "kollegen-flur-gespraech.jpg",
    rundgang: "leverkusen",
    sections: [
      {
        paragraphs: [
          "Der Standort Ihres Unternehmens entscheidet mit über Ihre Steuerlast. Viele Gründer wählen ihre Adresse nach Optik oder Zufall aus. Dabei liegt genau hier ein echter Hebel für mehr Gewinn.",
        ],
      },
      {
        heading: "Der Hebesatz macht den Unterschied",
        paragraphs: [
          "Leverkusen setzt den Gewerbesteuer-Hebesatz auf 250 Punkte fest. Das gehört zu den Bestwerten in ganz Nordrhein-Westfalen. Wer sein Unternehmen hier ansiedelt, zahlt spürbar weniger als in vielen Nachbarstädten. Über die Jahre summiert sich dieser Unterschied zu einer echten Ersparnis.",
        ],
      },
      {
        heading: "Eine Adresse, viele Vorteile",
        paragraphs: [
          "Leverkusen liegt direkt an der A3 und ist von Köln und Düsseldorf aus schnell erreichbar. Auch die Flughäfen beider Städte erreichen Sie in kurzer Zeit. Ihr Unternehmen sitzt damit mitten im Rheinland, ohne die hohen Mietpreise einer Großstadt tragen zu müssen.",
        ],
      },
      {
        heading: "So sichern Sie sich Ihren Platz in Leverkusen",
        paragraphs: [
          "Ein personalisiertes Büro bei der Bürogemeinschaft in Leverkusen bringt Ihnen die günstige Adresse, ohne dass Sie selbst vor Ort sein müssen. Postannahme, Weiterleitung und eine echte Geschäftsadresse gehören dazu. Vereinbaren Sie einen ersten Kontakt und klären Sie, welches Paket zu Ihrem Unternehmen passt.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "artikel-2",
    headline: "Ihr passendes Büro zwischen Düsseldorf und Köln",
    teaser:
      "Monheim am Rhein und Leverkusen liegen mitten im Rheinland. Was das für die Wahl Ihres Firmensitzes bedeutet.",
    image: "frau-cafe-notizbuch.jpg",
    rundgang: "both",
    sections: [
      {
        paragraphs: [
          "Die Lage Ihres Büros beeinflusst, wie schnell Sie Kunden und Partner erreichen. Zwischen Düsseldorf und Köln treffen gleich zwei starke Wirtschaftsräume aufeinander.",
        ],
      },
      {
        heading: "Zwei Städte, eine starke Region",
        paragraphs: [
          "Monheim am Rhein und Leverkusen liegen beide in unmittelbarer Nähe zu Köln und Düsseldorf. Die A3 und die A59 verbinden beide Standorte mit dem gesamten Rheinland. Auch die Flughäfen Köln/Bonn und Düsseldorf erreichen Sie in wenigen Minuten.",
        ],
      },
      {
        heading: "Vorteile für Ihr Unternehmen",
        paragraphs: [
          "Ihre Kunden und Geschäftspartner sitzen wahrscheinlich in einer dieser beiden Städte oder ganz in der Nähe. Ein Büro in Monheim am Rhein oder Leverkusen verkürzt diesen Weg deutlich. Gleichzeitig sparen Sie im Vergleich zu einer Adresse mitten in Köln oder Düsseldorf bei Miete und Nebenkosten.",
        ],
      },
      {
        heading: "Wählen Sie Ihren Standort",
        paragraphs: [
          "Bei der Bürogemeinschaft entscheiden Sie sich für Monheim am Rhein oder Leverkusen, je nachdem, wo Ihre Kunden sitzen. Beide Standorte bieten Ihnen ein personalisiertes oder möbliertes Büro mit denselben Leistungen. Werfen Sie vorab einen virtuellen Blick in beide Standorte.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "artikel-3",
    headline: "Wachstum eines Unternehmens mit repräsentativem Firmensitz",
    teaser:
      "Eine seriöse Adresse öffnet Türen. So unterstützt ein repräsentativer Firmensitz das Wachstum Ihres Unternehmens.",
    image: "team-begruessung-buero.jpg",
    sections: [
      {
        paragraphs: [
          "Kunden und Partner bilden sich in Sekunden ein Urteil über Ihr Unternehmen. Ihre Geschäftsadresse gehört zu den ersten Signalen, die dabei zählen.",
        ],
      },
      {
        heading: "Der erste Eindruck zählt",
        paragraphs: [
          "Eine Privatadresse oder ein Postfach wirkt schnell unprofessionell. Ein repräsentativer Firmensitz signalisiert dagegen sofort Seriosität. Genau dieses Signal entscheidet häufig, ob ein Angebot überhaupt ernst genommen wird.",
        ],
      },
      {
        heading: "Raum für echtes Wachstum",
        paragraphs: [
          "Mit einer starken Adresse gewinnen Sie leichter neue Kunden und Kooperationspartner. Gleichzeitig öffnet ein professionelles Umfeld auch Türen bei Banken und Investoren. So wächst Ihr Unternehmen auf einem soliden Fundament weiter.",
        ],
      },
      {
        heading: "Vom Firmensitz zum Netzwerk",
        paragraphs: [
          "In einer Bürogemeinschaft treffen Sie automatisch auf andere Unternehmerinnen und Unternehmer. Aus kurzen Gesprächen im Flur werden nicht selten neue Kontakte oder sogar Aufträge. Ihr Firmensitz wird so zu einem Ort, an dem Ihr Unternehmen aktiv wächst.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "artikel-4",
    headline: "Wie ein personalisiertes Büro Ihren Start deutlich erleichtert",
    teaser:
      "Der Sprung in die Selbstständigkeit fällt leichter mit dem richtigen Fundament. Ein personalisiertes Büro nimmt Ihnen viel Aufwand ab.",
    image: "mann-laptop-laecheln-buero.jpg",
    sections: [
      {
        paragraphs: [
          "Der Start in die Selbstständigkeit bringt genug eigene Herausforderungen mit sich. Die Büroausstattung sollte keine davon sein.",
        ],
      },
      {
        heading: "Ohne hohe Anfangsinvestition loslegen",
        paragraphs: [
          "Ein eigenes Büro einzurichten kostet schnell mehrere tausend Euro. Mit einem personalisierten Büro entfällt diese Investition komplett. Sie schließen Ihren Laptop an und arbeiten sofort los.",
        ],
      },
      {
        heading: "Alles Wichtige bereits inklusive",
        paragraphs: [
          "Postannahme, Weiterleitung und eine eigene Telefonnummer gehören zum Leistungspaket dazu. Auch WLAN und die Nutzung von Besprechungsräumen sind enthalten. So konzentrieren Sie sich von Anfang an auf Ihr Kerngeschäft.",
        ],
      },
      {
        heading: "Kurze Laufzeiten für einen sicheren Start",
        paragraphs: [
          "Ein Vertrag über 6, 12 oder 24 Monate gibt Ihnen die nötige Flexibilität für den Anfang. Die Kaution beträgt nur eine Monatsmiete und lässt sich in zwei Raten zahlen. So bleibt Ihr Startkapital für die Dinge, die wirklich zählen.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "artikel-5",
    headline: "Warum Ihr Unternehmen von der Gewerbesteuer in Monheim am Rhein profitiert",
    teaser:
      "Monheim am Rhein gilt als eine der unternehmerfreundlichsten Städte in Deutschland. Das steckt dahinter.",
    image: "frau-laptop-fokussiert.jpg",
    rundgang: "monheim",
    sections: [
      {
        paragraphs: [
          "Manche Städte werben mit Lebensqualität, andere mit Infrastruktur. Monheim am Rhein punktet vor allem mit einem Argument, das direkt auf Ihrem Kontoauszug landet.",
        ],
      },
      {
        heading: "Ein Hebesatz mit Signalwirkung",
        paragraphs: [
          "Monheim am Rhein hat sich als unternehmerfreundliche Stadt am Rhein etabliert. Der niedrige Gewerbesteuer-Hebesatz zieht seit Jahren Unternehmen aus der Region an. Wer hier seinen Sitz hat, zahlt deutlich weniger als in vielen umliegenden Städten.",
        ],
      },
      {
        heading: "Mehr als nur Steuern sparen",
        paragraphs: [
          "Monheim am Rhein bietet zusätzlich eine hohe Kaufkraft und eine gute Anbindung an die A59. Der Flughafen Düsseldorf ist in rund 30 Minuten erreichbar. Ihr Unternehmen profitiert damit von Standortvorteilen, die weit über die Steuerlast hinausgehen.",
        ],
      },
      {
        heading: "Ihr Sitz in Monheim am Rhein",
        paragraphs: [
          "Mit einem personalisierten Büro der Bürogemeinschaft in Monheim am Rhein sichern Sie sich diesen Standortvorteil, ohne selbst vor Ort zu sitzen. Eine postzustellfähige Adresse mit Postweiterleitung gehört automatisch dazu. Vereinbaren Sie einen Termin und klären Sie die Details für Ihr Unternehmen.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "artikel-6",
    headline: "So bekommt Ihr Unternehmen eine starke Adresse",
    teaser: "Eine starke Adresse entsteht nicht durch Zufall. So bauen Sie sie gezielt auf.",
    image: "frau-lachend-whiteboard.jpg",
    sections: [
      {
        paragraphs: [
          "Eine gute Adresse allein macht noch kein starkes Unternehmen. Zusammen mit den richtigen Bausteinen wird daraus aber ein echtes Aushängeschild.",
        ],
      },
      {
        heading: "Die Basis: eine seriöse Adresse",
        paragraphs: [
          "Der erste Baustein ist eine postzustellfähige Geschäftsadresse an einem angesehenen Standort. Damit vermeiden Sie von Anfang an den Eindruck eines reinen Briefkastens. Kunden und Behörden nehmen Ihr Unternehmen dadurch ernster.",
        ],
      },
      {
        heading: "Service, der mitdenkt",
        paragraphs: [
          "Ein eigener Sekretariatsservice, Schreibservice und die Annahme von Einschreiben runden das Bild ab. Auf Wunsch erhalten Sie zusätzlich eine eigene Telefonnummer mit lokaler Vorwahl. So wirkt Ihr Unternehmen von Anfang an etabliert.",
        ],
      },
      {
        heading: "Der Empfang zählt",
        paragraphs: [
          "Auch ein repräsentativer Kundenempfang mit Besprechungsraum gehört zu einer starken Adresse dazu. Wer Kunden vor Ort trifft, hinterlässt hier einen bleibenden Eindruck. Genau diese Details entscheiden am Ende, wie stark Ihre Adresse wirklich wirkt.",
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "artikel-7",
    headline: "Ihre Geschäftsadresse in Leverkusen oder Monheim am Rhein",
    teaser: "Beide Standorte bieten ähnliche Vorteile, unterscheiden sich aber in Details. Ein direkter Vergleich.",
    image: "maenner-dachterrasse-laptop.jpg",
    rundgang: "both",
    sections: [
      {
        paragraphs: [
          "Zwei Standorte, ein Vorteil: Sowohl Leverkusen als auch Monheim am Rhein punkten mit einem niedrigen Gewerbesteuer-Hebesatz. Trotzdem lohnt sich ein genauer Blick auf die Unterschiede.",
        ],
      },
      {
        heading: "Leverkusen: zentral und gut angebunden",
        paragraphs: [
          "Leverkusen liegt direkt an der A3 und in unmittelbarer Nähe zu Köln. Die Bahnstation Leverkusen-Manfort bringt Sie in wenigen Minuten zur Kölner Messe. Für Unternehmen mit häufigem Kundenkontakt in Köln ist das ein klarer Vorteil.",
        ],
      },
      {
        heading: "Monheim am Rhein: unternehmerfreundlich und ruhig",
        paragraphs: [
          "Monheim am Rhein bietet eine ruhigere Lage bei ähnlich guter Anbindung über die A59. Der Flughafen Düsseldorf ist in etwa 30 Minuten erreichbar. Für Unternehmen mit Fokus auf Düsseldorf bietet dieser Standort klare Vorteile.",
        ],
      },
      {
        heading: "Beide Standorte im direkten Vergleich",
        paragraphs: [
          "An beiden Standorten erhalten Sie ein personalisiertes oder möbliertes Büro mit denselben Leistungen. Die Entscheidung fällt daher meist über die Lage Ihrer Kunden und Partner. Werfen Sie vorab einen virtuellen Blick in beide Standorte und vergleichen Sie selbst.",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "artikel-8",
    headline: "Wann sich Ihr eigener Raum für konzentriertes Arbeiten lohnt",
    teaser: "Nicht jedes Unternehmen braucht ein Büro in Vollzeit. Diese Anzeichen sprechen für einen eigenen Raum an festen Tagen.",
    image: "mann-homeoffice-kaffee.jpg",
    sections: [
      {
        paragraphs: [
          "Manche Aufgaben gelingen zu Hause einfach nicht. Ruhe, ein fester Schreibtisch und keine Ablenkung machen dann den Unterschied.",
        ],
      },
      {
        heading: "Wenn Konzentration fehlt",
        paragraphs: [
          "Wer im Homeoffice ständig unterbrochen wird, kennt das Problem. Ein eigener Raum an einem festen Wochentag schafft hier klare Grenzen. Termine, Präsentationen oder Buchhaltung erledigen sich dort deutlich schneller.",
        ],
      },
      {
        heading: "Ein Büro, das mitwächst",
        paragraphs: [
          "Ein Büro für einen oder zwei feste Tage pro Woche kostet deutlich weniger als eine dauerhafte Anmietung. Gleichzeitig steht Ihnen das ganze Jahr über ein möbliertes Büro mit Internet und Drucker zur Verfügung. So bleibt Ihr Zuhause weiterhin Ihr Zuhause.",
        ],
      },
      {
        heading: "Der richtige Zeitpunkt",
        paragraphs: [
          "Sobald Kundentermine, Konzentration oder ein professionelles Umfeld regelmäßig fehlen, lohnt sich der Schritt. Ein fester Tag pro Woche reicht oft schon aus, um spürbar produktiver zu arbeiten. Testen Sie, welcher Rhythmus zu Ihrem Unternehmen passt.",
        ],
      },
    ],
  },
  {
    id: 9,
    slug: "artikel-9",
    headline: "So bleiben Sie flexibel, wenn Ihr Geschäft wächst",
    teaser: "Wachstum bringt neue Anforderungen an Ihr Büro mit sich. So passen Sie sich an, ohne sich langfristig zu binden.",
    image: "team-laptop-lachend.jpg",
    sections: [
      {
        paragraphs: [
          "Ein wachsendes Unternehmen verändert sich schnell. Ihr Büro sollte diesem Tempo folgen können, statt es zu bremsen.",
        ],
      },
      {
        heading: "Das Problem mit langen Verträgen",
        paragraphs: [
          "Klassische Büromietverträge laufen häufig über fünf Jahre oder länger. Für ein wachsendes Unternehmen bedeutet das ein hohes Risiko. Ändert sich der Platzbedarf, sitzen Sie trotzdem an die alte Fläche gebunden.",
        ],
      },
      {
        heading: "Flexibilität als Standard",
        paragraphs: [
          "Verträge über 6, 12 oder 24 Monate lassen sich deutlich leichter an Ihr Wachstum anpassen. Vom Einzelbüro über ein Doppelbüro bis zum Großraumbüro für mehrere Mitarbeiter ist alles möglich. So zahlen Sie immer nur für die Fläche, die Sie aktuell wirklich brauchen.",
        ],
      },
      {
        heading: "Mitwachsen statt umziehen",
        paragraphs: [
          "Ein Umzug kostet Zeit, Geld und Nerven, die in einer Wachstumsphase fehlen. Innerhalb derselben Bürogemeinschaft wechseln Sie stattdessen einfach in eine größere Einheit. Ihre Adresse, Ihre Telefonnummer und Ihr Netzwerk bleiben dabei erhalten.",
        ],
      },
    ],
  },
  {
    id: 10,
    slug: "artikel-10",
    headline: "Eigenes Büro oder Coworking: Was passt besser zu Ihrer Arbeitsweise?",
    teaser: "Beide Modelle haben ihre Berechtigung. So finden Sie heraus, welches zu Ihnen passt.",
    image: "aelterer-mann-laptop-laechelnd.jpg",
    sections: [
      {
        paragraphs: [
          "Nicht jedes Unternehmen arbeitet gleich. Die Wahl zwischen einem eigenen Büro und offenem Coworking hängt vor allem von Ihrer Arbeitsweise ab.",
        ],
      },
      {
        heading: "Wenn Ruhe im Vordergrund steht",
        paragraphs: [
          "Wer viel telefoniert, vertrauliche Unterlagen bearbeitet oder einfach ungestört arbeiten möchte, profitiert von einem eigenen, abschließbaren Büro. Ein eigener Schreibtisch bleibt außerdem dauerhaft eingerichtet. Sie müssen nicht jeden Tag neu aufbauen.",
        ],
      },
      {
        heading: "Wenn Austausch im Vordergrund steht",
        paragraphs: [
          "Wer dagegen Kontakte knüpfen und sich mit anderen Unternehmen austauschen möchte, findet im offenen Bereich mehr Gelegenheiten dazu. Kurze Gespräche in der Küche oder im Empfangsbereich führen oft zu neuen Ideen. Genau dieser Austausch fehlt in einem geschlossenen Büro.",
        ],
      },
      {
        heading: "Beide Welten unter einem Dach",
        paragraphs: [
          "In einer Bürogemeinschaft müssen Sie sich nicht endgültig entscheiden. Ein Einzelbüro für konzentriertes Arbeiten lässt sich jederzeit mit der Nutzung gemeinsamer Räume kombinieren. So wählen Sie die Mischung, die zu Ihrem Unternehmen passt.",
        ],
      },
    ],
  },
];
