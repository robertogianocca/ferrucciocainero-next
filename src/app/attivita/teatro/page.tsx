import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import { Container, Row, Separator } from "@/components/Section";
import VideoEmbed from "@/components/VideoEmbed";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Teatro / Theater",
  description:
    "Gli spettacoli di narrazione di Ferruccio Cainero: Zwischen den Regentropfen, Acqua, Pensieri vegetali, Da Socrate a Putin, Leise rieselt es nicht e il programma di gala.",
  path: "/attivita/teatro/",
});

function ShowImage({
  src,
  alt,
  width,
  height,
  eager = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : undefined}
      sizes="(min-width: 768px) 300px, 100vw"
      className="mb-4 h-auto w-full"
    />
  );
}

export default function TeatroPage() {
  return (
    <>
      <PageTitle>Teatro / Theater</PageTitle>
      <Container>
        {/* Zwischen den Regentropfen */}
        <Row lang="de" id="zwischen-den-regentropfen">
          <div className="prose-fc md:col-span-8">
            <h2>Zwischen den Regentropfen</h2>
            <p>
              Der extrem heisse und trockene Sommer 2026 hat uns kurz aufgeschreckt. Aber schon
              verschwenden wir es wieder: das Wasser, unsere Lebensgrundlage und wertvollste
              Ressource. In seinem Programm «Zwischen den Regentropfen» spricht Ferruccio Cainero
              leidenschaftlich Klartext – und bleibt doch der verspielte, humorvolle und poetische
              Geschichtenerzähler, der sein Publikum seit vielen Jahren begeistert.
            </p>
            <p>
              <strong>Dauer: 80 Minuten</strong>
            </p>
            <VideoEmbed provider="vimeo" id="1125777797" title="Zwischen den Regentropfen – Video" />
          </div>
          <div className="prose-fc md:col-span-4">
            <ShowImage
              src="/images/shows/zwischen-den-regentropfen.jpeg"
              alt="Plakat «Zwischen den Regentropfen»: Kinderfoto von Ferruccio Cainero im Regen"
              width={451}
              height={640}
              eager
            />
            <p>
              Erzähler: <strong>Ferruccio Cainero</strong>
              <br />
              Autor: <strong>Ferruccio Cainero</strong>
              <br />
              Regie: <strong>Ferruccio Cainero</strong>
            </p>
          </div>
        </Row>

        <Separator />

        {/* Pensieri vegetali */}
        <Row id="pensieri-vegetali">
          <div className="prose-fc md:col-span-8">
            <h2>
              Pensieri vegetali
              <br />
              <span className="font-medium">(Vegeto ergo sum)</span>
            </h2>
            <p>
              Se un leone mi vuole mangiare io scappo, con le gambe, ma se il leone anche solo mi
              spezza il collo, sono morto. Perché sono un individuo, cioè uno che non si può
              dividere. Ho sviluppato organi specializzati, cuore, polmoni, cervello ecc.: se mi
              danneggi uno di questi organi principali… ciao… Le piante non possono scappare per
              mettersi in salvo. Eppure non si sono estinte. Come cavolo hanno fatto? Fanno come Totò
              nella scenetta di Pasquale…
            </p>
            <p>
              Reading (sarebbe lettura, ma in inglese fa figo) di e con Ferruccio Cainero
              <br />
              Chitarra di Pierluigi Ferrari (che la suona lui)
              <br />
              Durata: 50 minuti (per ora, ma la pianta sta crescendo, mi sa che arriverà a 70)
            </p>
          </div>
          <div className="prose-fc md:col-span-4">
            <h3>Contatti</h3>
            <p>
              Ferruccio: <a href="tel:+41793515602">+41 79 351 56 02</a>
              <br />
              Karin: <a href="tel:+41799222436">+41 79 922 24 36</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              Pierluigi: <a href="tel:+393475514664">+39 347 551 4664</a>
              <br />
              <a href="mailto:ferrari.pierluigi@tin.it">ferrari.pierluigi@tin.it</a>
              <br />
              <a href="https://www.pierluigiferrari.eu" target="_blank" rel="noopener noreferrer">
                www.pierluigiferrari.eu
              </a>
            </p>
          </div>
        </Row>

        <Separator />

        {/* C’era clima io! */}
        <Row id="cera-clima-io">
          <div className="prose-fc md:col-span-8">
            <h2>C’era clima io!</h2>
            <p>Ideato e scritto come reading da Ferruccio Cainero e Franco Di Leo</p>
            <p>
              Il contenuto dei cinque dialoghi è divertente, ma non banale. Il tema di fondo riguarda
              le sfide che ci attendono davanti al cambiamento climatico con citazioni storiche ed
              esempi di popoli e paesi che nel passato o oggi hanno dovuto o devono affrontare
              questa sfida esiziale. Le informazioni e gli spunti di riflessione sono proposti con
              verve tramite un vivace dialogo. Gli scambi di battute tra gli autori ed interpreti
              Ferruccio Cainero e Franco Di Leo sono ironici e divertenti, ma le informazioni serie
              passano a chi ascolta e rimangono come spunti di riflessione.
            </p>
            <p>Durata: circa 60 minuti (5 episodi da circa 10 minuti)</p>
          </div>
        </Row>

        <Separator />

        {/* Acqua */}
        <Row id="acqua">
          <div className="prose-fc md:col-span-8">
            <h2>Acqua</h2>
            <h3>Di e con Ferruccio Cainero</h3>
            <p>
              Le acque dell’Indo ormai non arrivano più al mare. Il fiume è in secca. Se volete
              vedere dove finiscono i tre quarti dell’acqua dell’Indo aprite il vostro armadio.
              <br />
              Per produrre una maglietta di cotone serve l’acqua di 25 vasche da bagno. Il Pakistan
              vende cotone a tutto il mondo. Per l’Indo non fa differenza se voi andate in giro con
              una maglietta con su scritto «me ne frego» o con scritto «salviamo l’Indo».
              <br />
              Non ci avevate mai pensato?
              <br />
              Neanch’io e ci sono tante altre cose che non avevamo mai pensato.
            </p>
            <p>Durata: 60 minuti</p>
          </div>
          <div className="prose-fc md:col-span-4">
            <ShowImage
              src="/images/shows/acqua.png"
              alt="Locandina di «Acqua» di Ferruccio Cainero: foto d’epoca di un bambino in costume da bagno"
              width={420}
              height={595}
            />
            <p>
              Narratore: <strong>Ferruccio Cainero</strong>
              <br />
              Autore: <strong>Ferruccio Cainero</strong>
              <br />
              Consulenza: <strong>Professor Claudio Valsangiacomo</strong>, direttore del Centre for
              Development and Cooperation della SUPSI
              <br />
              Genere: reading
            </p>
          </div>
        </Row>

        <Separator />

        {/* Da Socrate a Putin / Von Sokrates bis Putin */}
        <Row id="da-socrate-a-putin">
          <div className="prose-fc md:col-span-4">
            <h2>Da Socrate a Putin</h2>
            <h3>Di e con Ferruccio Cainero</h3>
            <p>
              Anziché sforzarmi di essere giovane nonostante i miei 68 anni ho pensato sia più facile
              immaginarsi di essere antico. Così vi racconterò di persone che ho conosciuto in questi
              miei 2400 anni di vita. Vi parlerò di Socrate, di un ragazzo ebreo che è diventato
              Dio, di Cristoforo Colombo, di Galileo Galilei, del terribile uomo Vespa, di Ivan il
              Terribile, di Putin, di Zuckerberg… Insomma: del Dio caro e del Dio buono. È una storia
              lunga, sperando che non sia anche la fine della nostra storia.
            </p>
            <p>Durata: 80 minuti</p>
          </div>
          <div className="prose-fc md:col-span-4" lang="de">
            <h2>Von Sokrates bis Putin</h2>
            <h3>von und mit Ferruccio Cainero</h3>
            <p>
              2500 Jahre in 80 Minuten und am Ende fühlen Sie sich gar nicht müde, im Gegenteil, gut
              gelaunt und voller Energie.
              <br />
              Aber aufgepasst! Mit auf der Reise sind die unterschiedlichsten Persönlichkeiten:
              Götter und Sterbliche, Diktatoren und Heilige, Poeten und Philosophen. Das Abenteuer
              ist spannend… und sein Ende ungewiss.
            </p>
            <p>Gute Reise! Dauer: 80 Minuten</p>
          </div>
          <div className="md:col-span-4">
            <ShowImage
              src="/images/shows/da-socrate-a-putin.jpeg"
              alt="Ferruccio Cainero sul palco buio con le mani sulla testa"
              width={640}
              height={427}
            />
          </div>
        </Row>

        <Separator />

        {/* Te piace o’ presepe / Leise rieselt es nicht */}
        <Row id="te-piace-o-presepe">
          <div className="prose-fc md:col-span-4">
            <h2>Te piace o’ presepe</h2>
            <h3>
              Testo e narrazione di Ferruccio Cainero
              <br />
              Musica: Luca Domenicali
            </h3>
            <p>
              Accompagnato dalla chitarra di Luca Domenicali, Ferruccio Cainero ci racconta con la
              sua usuale verve l’origine del presepe e le sue tradizioni. Ci parla di San Francesco,
              del presepe napoletano, del caganer catalano. Ci racconta la storia di Babbo Natale e
              dell’albero di Natale, ma la chitarra di Luca non sempre si accorda perfettamente con
              le intenzioni di Ferruccio. C’è in Luca una certa faciloneria e un ottimismo
              incosciente che Ferruccio odia e in Ferruccio un doloroso pessimismo che Luca non
              capisce. La mielosa atmosfera natalizia non salverà l’amicizia. A salvarli sarà la…?
            </p>
            <p>Durata: 90 minuti</p>
          </div>
          <div className="prose-fc md:col-span-4" lang="de">
            <h2>Leise rieselt es nicht</h2>
            <h3>Die faszinierende Geschichte des berühmten Weihnachtssymbols</h3>
            <p>
              <strong>Erzählung: Ferruccio Cainero</strong>
              <br />
              <strong>Musik: Luca Domenicali</strong>
            </p>
            <p>
              Der bekannte Erzählkünstler Ferruccio Cainero erzählt in seiner gewohnten lebhaften
              Manier über den Ursprung der Krippe und ihre Traditionen. Musikalisch begleitet wird er
              dabei von Luca Domenicali.
              <br />
              Ferruccio erzählt vom heiligen Franziskus, der neapolitanischen Krippe, dem
              katalanischen Caganer und den Santons der Provence. Er erzählt uns die Geschichte des
              Weihnachtsmanns und des Weihnachtsbaums, aber Lucas Gitarre passt nicht immer zu
              Ferruccios Absichten. Luca hat eine gewisse Unbeschwertheit und einen rücksichtslosen
              Optimismus, den Ferruccio nicht erträgt, und Ferruccio einen schmerzhaften
              Pessimismus, den Luca nicht versteht. Die honigsüsse Weihnachtsatmosphäre wird die
              Freundschaft der beiden Italiener nicht retten, sondern eher die…?
            </p>
            <p>Dauer: 90 Minuten</p>
          </div>
          <div className="prose-fc md:col-span-4">
            <ShowImage
              src="/images/shows/leise-rieselt-es-nicht.jpg"
              alt="Ferruccio Cainero mette un cappello da Babbo Natale a Luca Domenicali che suona la chitarra"
              width={1024}
              height={746}
            />
            <p>
              Luca Domenicali:{" "}
              <a href="http://www.microband.it" target="_blank" rel="noopener noreferrer">
                www.microband.it
              </a>
            </p>
          </div>
        </Row>

        <Separator />

        {/* Impara ridendo */}
        <Row id="impara-ridendo">
          <div className="prose-fc md:col-span-8">
            <h2>
              Impara ridendo: <em>il Caganer e altre figure del presepe</em>
            </h2>
            <h3>(L’incredibile storia del più famoso simbolo natalizio)</h3>
            <p>
              <strong>Testo e narrazione di Ferruccio Cainero</strong>
              <br />
              <strong>Musiche scelte e commentate da Franco Di Leo</strong>
            </p>
            <p>
              Un racconto storicamente rigoroso e rigorosamente divertente sulla tradizione del
              presepe e del suo inventore, una storia che vi farà scoprire le vere origini di uno dei
              simboli natalizi più conosciuti e diffusi nel mondo.
            </p>
            <p>Durata: 90 minuti</p>
          </div>
          <div className="prose-fc md:col-span-4">
            <ShowImage
              src="/images/shows/ferruccio-franco.jpg"
              alt="Ritratti affiancati di Ferruccio Cainero e Franco Di Leo"
              width={865}
              height={597}
            />
            <p>
              Franco Di Leo:{" "}
              <a href="http://www.francodileo.com" target="_blank" rel="noopener noreferrer">
                www.francodileo.com
              </a>
            </p>
          </div>
        </Row>

        <Separator />

        {/* Programma di gala / Galaprogramm */}
        <Row id="programma-di-gala">
          <div className="prose-fc md:col-span-4">
            <h2>
              Programma di gala /
              <br />
              feste private
            </h2>
            <p>
              Ferruccio Cainero propone un programma speciale pensato per cene di gala di aziende o
              feste private con un repertorio frizzante e adattato su misura ad ogni circostanza
              particolare.
            </p>
            <p>
              Interessati per favore rivolgersi a:
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div className="prose-fc md:col-span-4" lang="de">
            <h2>
              Galaprogramm /
              <br />
              für Firmenevent oder Privatanlass
            </h2>
            <p>
              Ferruccio Cainero – ein grossartiger Kabarettist und Schauspieler, dem es auf
              wunderbare, höchst köstliche Art gelingt, mit viel Tiefgang und italienischer
              Leichtigkeit die Absurditäten des Alltags aufzuzeigen.
            </p>
            <p>
              Seit über 25 Jahren fasziniert Ferruccio Cainero sein Publikum in ganz Europa mit
              seiner kabarettistischen Erzählkunst, wobei er sich durch seinen intelligenten Witz und
              seinen feinfühligen Sinn für Humor auszeichnet.
            </p>
            <p>
              Überraschen Sie Ihre Kunden oder Gäste mit einem Abend voller Charme, Esprit und einer
              Prise «italianità»!
            </p>
            <p>
              Die Programme sind auf Deutsch oder Italienisch buchbar.
              <br />
              <strong>Die Dauer wird mit dem Kunden nach Wunsch festgelegt.</strong>
            </p>
          </div>
          <div className="md:col-span-4">
            <ShowImage
              src="/images/shows/programma-gala.jpg"
              alt="Ferruccio Cainero ride di gusto durante uno spettacolo"
              width={614}
              height={416}
            />
          </div>
        </Row>

        <Separator />

        {/* L’apologo delle api */}
        <Row id="apologo-delle-api">
          <div className="prose-fc md:col-span-8">
            <h2>L’apologo delle api</h2>
            <p>
              Si tratta di un monologo critico, divertente, informativo, satirico, umoristico e serio
              allo stesso tempo. Dedicato alle api e al miele in primo luogo, ma anche alle
              contraddizioni della moderna produzione agricola, alle razze in via di estinzione e ai
              pericoli derivanti dalle pratiche di coltivazione intensiva. Lo spettacolo è stato
              scritto da Ferruccio Cainero e Franco Di Leo e interpretato da Ferruccio Cainero.
            </p>
            <p>Durata: 70 minuti</p>
          </div>
          <div className="md:col-span-4">
            <ShowImage
              src="/images/shows/apologo-delle-api.jpg"
              alt="Illustrazione: un apicoltore in tuta protettiva sorregge un’ape gigante addormentata"
              width={768}
              height={450}
            />
          </div>
        </Row>
      </Container>
    </>
  );
}
