import PageTitle from "@/components/PageTitle";
import { Container, Row } from "@/components/Section";
import VideoEmbed from "@/components/VideoEmbed";
import { videos } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Video",
  description:
    "Video e trailer degli spettacoli di Ferruccio Cainero: Zwischen den Regentropfen, Da Socrate a Putin, Acqua, Leise rieselt es nicht e altri.",
  path: "/media/video/",
});

export default function VideoPage() {
  return (
    <>
      <PageTitle>Video</PageTitle>
      <Container className="space-y-10">
        {videos.map((video) => (
          <Row key={video.id} lang={video.lang}>
            <div className="md:col-span-8">
              <VideoEmbed
                provider={video.provider}
                id={video.id}
                start={video.start}
                aspect={video.aspect}
                title={`${video.title}${video.details ? ` – ${video.details[0]}` : ""}`}
              />
            </div>
            <div className="prose-fc md:col-span-4">
              <h2>
                {video.heading
                  ? video.heading.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))
                  : video.title}
              </h2>
              {video.details && (
                <p>
                  {video.details.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </Row>
        ))}
      </Container>
    </>
  );
}
