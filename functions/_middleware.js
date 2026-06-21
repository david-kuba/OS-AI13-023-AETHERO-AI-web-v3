/**
 * CF Pages middleware — Accept-Language redirect
 * Runs only on bare "/" to avoid redirect loops on /cs/ and /en/.
 */
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Only intercept root — let all other paths pass through
  if (url.pathname !== '/') {
    return next();
  }

  const acceptLang = request.headers.get('Accept-Language') || '';
  // Prefer English if Accept-Language starts with 'en'
  const preferEn = /^en\b/i.test(acceptLang);
  const target = preferEn ? '/en/' : '/cs/';

  return Response.redirect(new URL(target, request.url).toString(), 302);
}
