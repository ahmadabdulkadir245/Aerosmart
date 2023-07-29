// utils/cookie.js
import { parse } from 'cookie';

export function getUserIdFromCookie() {
  const cookies = parse(document.cookie || ''); // Use document.cookie instead of req.headers.cookie
  return cookies.user_id || null;
}
