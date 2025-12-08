import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// This page only renders when the `locale` is missing
export default function RootPage() {
  // Redirect to default locale if no locale is provided
  redirect(`/${routing.defaultLocale}`);
}
