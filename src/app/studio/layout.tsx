export const metadata = {
  title: 'Sanity Studio',
  description: 'Administration du contenu',
  robots: { index: false, follow: false },
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
