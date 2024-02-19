import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en-us', 'pt-br'],

  // Used when no locale matches
  defaultLocale: 'en-us'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en-us|pt-br)/:path*']
};
