import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_mock_secret_key_for_dev';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16' as any, // Cast to any to prevent strict type version checks
});
