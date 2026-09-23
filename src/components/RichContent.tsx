'use client'

import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'

interface RichContentProps {
  value: any[]
}

// Composants PortableText avec support des styles d'alignement — définis côté client
const portableTextComponents: PortableTextComponents = {
  block: {
    blockCenter: ({ children }) => <p style={{ textAlign: 'center' }}>{children}</p>,
    blockRight: ({ children }) => <p style={{ textAlign: 'right' }}>{children}</p>,
    blockJustify: ({ children }) => <p style={{ textAlign: 'justify' }}>{children}</p>,
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    'strike-through': ({ children }) => <span className="line-through">{children}</span>,
    code: ({ children }) => <code className="bg-accent/10 text-accent px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
    link: ({ children, value }) => {
      const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value?.href} rel={rel} className="text-accent hover:underline">
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) =>
      value?.asset?.url ? (
        <div className="my-6 rounded-2xl overflow-hidden">
          <Image
            src={value.asset.url}
            alt={value.alt || ''}
            width={800}
            height={500}
            className="w-full object-cover"
          />
        </div>
      ) : null,
  },
}

export default function RichContent({ value }: RichContentProps) {
  return (
    <div className="prose-custom max-w-none">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  )
}
