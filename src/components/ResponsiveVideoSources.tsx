// Sources vidéo allégées : 720p sur mobile, 1080p au-delà.
// Les fichiers "-720.mp4" et "-1080.mp4" sont générés à partir de l'original
// (ffmpeg, sans piste audio puisque les vidéos de fond sont muettes).
export default function ResponsiveVideoSources({ src }: { src: string }) {
  const base = src.replace(/\.mp4$/, '')
  return (
    <>
      <source src={`${base}-720.mp4`} type="video/mp4" media="(max-width: 767px)" />
      <source src={`${base}-1080.mp4`} type="video/mp4" />
    </>
  )
}
