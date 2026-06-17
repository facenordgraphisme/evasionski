import { NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe';

export async function POST(request: Request) {
  try {
    const { title, price, image, slug, date, spots = 1 } = await request.json();

    if (!title || !price) {
      return NextResponse.json({ error: 'Missing title or price' }, { status: 400 });
    }

    const origin = request.headers.get('origin') || 'http://localhost:3000';

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `${title}${date ? ` - ${date}` : ''}`,
              images: image ? [image] : [],
            },
            unit_amount: Math.round(price * 100), // Stripe expects cents
          },
          quantity: spots,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/booking/cancel?slug=${slug || ''}`,
      metadata: {
        title,
        date: date || '',
        slug: slug || '',
        spots: spots.toString(),
      },
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe Checkout session creation error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
