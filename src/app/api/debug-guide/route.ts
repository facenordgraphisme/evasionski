import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { guideQuery } from '@/sanity/lib/queries';

export async function GET() {
  const data = await client.fetch(guideQuery);

  return NextResponse.json({
    source: 'API Route - Direct Sanity Fetch',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    mockEnabled: process.env.NEXT_PUBLIC_USE_MOCK_DATA,
    data
  }, {
    headers: {
      'Cache-Control': 'no-store, max-age=0'
    }
  });
}
