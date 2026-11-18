import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";
import PageTitle from "@/components/PageTitle";
import { Container, Row, Separator } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Bio",
  description:
    "Biografia di Ferruccio Cainero: dal duo Teatro Ingenuo al teatro di narrazione, oltre 40 spettacoli come autore e regista. Biografie auf Deutsch und Lebenslauf zum Herunterladen.",
  path: "/biography/",
});

export default function BiographyPage() {
  return (
    <>
      <PageTitle>Bio</PageTitle>
      <Container>
        <Row>
          <div className="prose-fc md:col-span-7">
            <h2>L’attore e narratore</h2>
            <p>
              Ferruccio Cainero ha iniziato la sua carriera artistica alla fine degli anni ’70, come
              clown e artista di strada, in coppia con Giovanni De Lucia, nello storico duo Teatro
              Ingenuo. Per otto anni ha collaborato con il teatro CRT di Milano, che veniva
              frequentato da grandi maestri degli anni ’80 come Eugenio Barba, Tadeusz Kantor, Bolek
              Polívka, i fratelli Colombaioni e tanti altri.
            </p>
            <p>
              Dopo 20 anni di carriera, s’è tolto la maschera del pagliaccio, iniziando a narrare di
              se stesso, della sua vita, della sua famiglia, della sua terra,{" "}
              <em>
                «con una passione capace di trasformare i fatti della vita quotidiana in meravigliose
                epopee surreali, esilaranti, tragiche e graffianti, che donano all’ascoltatore
                inaspettate e folgoranti chiavi di lettura di questo nostro tempo.»
              </em>
            </p>

            <h2 className="mt-8">L’autore e regista</h2>
            <p>
              Abitualmente Ferruccio presta la sua opera come autore e regista per grandi e piccoli
              teatri o compagnie teatrali, in Germania, Svizzera, Italia e Spagna, dove si è fatto un
              nome come esperto della commedia dell’arte, della clownerie, del teatro musicale e del
              teatro di narrazione. Negli ultimi 40 anni ha scritto e messo in scena più di 40
              spettacoli teatrali e canzoni. Molti di questi sono stati grandi successi, alcuni hanno
              girato tutto il mondo e sono da anni in cartellone. Come autore e regista ha creato,
              insieme alla clown Gardi Hutter, i primi tre spettacoli che hanno reso famosa
              l’artista.
            </p>
            <p>
              Ha scritto e messo in scena vari spettacoli per il Teatro Stabile di Bolzano e le
              Vereinigte Bühnen Bozen, lo Stadttheater e la Klibühni di Coira. Ha firmato diverse
              regie per il produttore e attore Krishan Krone di Zurigo, come anche per il Teatro del
              Chiodo, la Compagnia Dimitri, il Kindertheater Mummpitz a Norimberga e per il musicista
              e narratore Alvaro Solar a Brema.
            </p>
            <p>
              Per il Teatro Sociale di Bellinzona ha adattato e messo in scena il romanzo di
              Giovanni Orelli <em>L’anno della valanga</em>.
              <br />
              In Spagna ha sviluppato per e con la famosa clown catalana Pepa Plana lo spettacolo{" "}
              <em>Paradís pintat</em>.
              <br />
              Per la clown portoghese Pina Polar ha ideato e messo in scena lo spettacolo{" "}
              <em>The Revenge of Bat-Lady</em>.
              <br />
              Da vari anni scrive e mette in scena per la ONLUS Barabba’s Clown di Arese, impegnata
              nel teatro sociale a fianco dei ragazzi in difficoltà.
              <br />
              Inoltre è autore e regista di tutti i suoi spettacoli di narrazione.
              <br />
              Autore, coautore e regista di diversi radiodrammi per la RSI e DRS 1.
            </p>
            <p className="mt-6">
              <DownloadButton href="/downloads/cv/ferruccio-cainero-curriculum.pdf" meta="PDF, 80 KB">
                Scarica il curriculum artistico
              </DownloadButton>
            </p>
          </div>
          <div className="md:col-span-5">
            <Image
              src="/images/photos/ferruccio-cainero-media-01.jpg"
              alt="Ritratto sorridente di Ferruccio Cainero in polo blu"
              width={1800}
              height={1200}
              loading="eager"
              sizes="(min-width: 768px) 400px, 100vw"
              className="h-auto w-full md:sticky md:top-24"
            />
          </div>
        </Row>

        <Separator />

        <Row lang="de">
          <div className="prose-fc md:col-span-12">
            <h2>Der Schauspieler und Erzähler</h2>
            <p>
              In den 70er-Jahren begann Ferruccio Cainero seine künstlerische Karriere als Clown und
              Strassenkünstler. Mit seinem Kollegen Giovanni De Lucia bildete er das Duo{" "}
              <em>Teatro Ingenuo</em>. Acht Jahre lang arbeitete er am Theater «CRT» in Mailand.
              Dort begegnete er allen wichtigen Theatergrössen der freien Theaterszene der
              80er-Jahre, wie Eugenio Barba, Tadeusz Kantor, Bolek Polívka und vielen anderen
              bekannten oder damals noch unbekannten Künstlern.
            </p>
            <p>
              Nach einer zwanzigjährigen Karriere mit dem Duo <em>Teatro Ingenuo</em> begann er, für
              und über sich selbst zu schreiben. Mit seiner grossen Fähigkeit als Erzähler schafft er
              es, Alltagsereignisse in wunderbaren, imaginären, tragisch-komischen Bildern entstehen
              zu lassen, die dem Zuschauer einen unerwarteten und ergreifenden Einblick in die
              Geschehnisse unserer Zeit eröffnen. Seine Monologe sind immer sozialkritisch und
              autobiografisch. Er entwickelte eine ganz eigene und für die europäische Theaterwelt
              neue Erzählkunst, wofür er mit wichtigen nationalen und internationalen Preisen
              ausgezeichnet wurde.
            </p>

            <h2 className="mt-8">Der Autor und Regisseur</h2>
            <p>
              Als Regisseur und Autor inszeniert und schreibt er für kleine und grosse Theater,
              Theatergruppen oder einzelne Künstler, vor allem in der Schweiz, in Deutschland,
              Italien, Spanien und Portugal.
              <br />
              In den letzten 40 Jahren hat er mehr als 40 Theaterstücke geschrieben und inszeniert.
              Etliche dieser Inszenierungen wurden grosse Erfolge, andere gingen um die Welt, einige
              sind <em>Klassiker</em> geworden und seit Jahren in den Spielplänen der Theater zu
              finden.
              <br />
              Als Autor, Co-Autor und Regisseur hat er mit der Clownin Gardi Hutter ihre ersten drei
              wichtigsten Stücke entwickelt.
            </p>
            <p>
              Er schrieb und inszenierte unter anderem für das Stadttheater und die Vereinigten Bühnen
              in Bozen sowie für das Stadttheater und die Klibühni in Chur. Er schrieb und
              inszenierte verschiedene Produktionen für den Produzenten und Schauspieler Krishan
              Krone in Zürich, sowie für das Teatro del Chiodo, die Compagnia Dimitri, das
              Kindertheater Mummpitz in Nürnberg und für den Musiker und Erzähler Alvaro Solar in
              Bremen.
            </p>
            <p>
              Für das Teatro Sociale in Bellinzona adaptierte und inszenierte er den Roman{" "}
              <em>L’anno della valanga</em> von Giovanni Orelli.
              <br />
              In Spanien entwickelte er mit der berühmten katalanischen Clownin Pepa Plana{" "}
              <em>Paradís pintat</em>.
              <br />
              In Portugal erarbeitete er mit der Clownin Pina Polar <em>The Revenge of Bat-Lady</em>.
              <br />
              Für die ONLUS Barabba’s Clown schrieb und inszenierte er einige Stücke.
              <br />
              Im Übrigen ist er Autor und Regisseur all seiner eigenen Erzählungen.
              <br />
              Er ist Autor, Co-Autor und Regisseur etlicher Hörspiele für RSI und DRS 1.
            </p>
            <p className="mt-6">
              <DownloadButton href="/downloads/cv/ferruccio-cainero-lebenslauf.pdf" meta="PDF, 190 KB">
                Künstlerischen Lebenslauf herunterladen
              </DownloadButton>
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}
