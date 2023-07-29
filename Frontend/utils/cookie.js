// utils/cookie.js
import { parse } from 'cookie';

export function getUserIDFromCookie(req) {
  const cookies = parse(req?.headers?.cookie || '');
  return cookies.user_id || null;
}

export function getAuthTokenFromCookie(req) {
  const cookies = parse(req.headers.cookie || '');
  return cookies.authToken || null;
}
