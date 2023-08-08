// utils/cookie.js
import { parse } from 'cookie';

export function getUserIDFromCookie(req) {
  const cookies = parse(req?.headers?.cookie || ''); // Use an empty object if req is undefined
  return cookies.user_id || null;
}

export function getAuthTokenFromCookie(req) {
  const cookies = parse(req.headers.cookie || '');
  return cookies.authToken || null;
}
