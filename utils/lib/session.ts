// import { setCookie, getCookie, deleteCookie } from 'cookies-next';
// import { SignJWT, jwtVerify } from 'jose';

// const secretKey = process.env.NEXT_PUBLIC_SESSION_SECRET; // Use a public environment variable
// const encodedKey = new TextEncoder().encode(secretKey);

// // Encrypt the payload and create a JWT
// export async function encrypt(payload) {
//   return new SignJWT(payload)
//     .setProtectedHeader({ alg: 'HS256' })
//     .setIssuedAt()
//     .setExpirationTime('7d')
//     .sign(encodedKey);
// }

// // Decrypt the JWT and verify the session
// export async function decrypt(session = '') {
//   try {
//     const { payload } = await jwtVerify(session, encodedKey, {
//       algorithms: ['HS256'],
//     });
//     return payload;
//   } catch (error) {
//     console.log('Failed to verify session:', error);
//     return null;
//   }
// }

// // Create a session and store it in a cookie
// export async function createSession(userId) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
//   const session = await encrypt({ userId, expiresAt });

//   setCookie('session', session, {
//     expires: expiresAt,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'lax',
//     path: '/',
//   });
// }

// // Update the session expiration in the cookie
// export async function updateSession() {
//   const session = getCookie('session');
//   if (!session) return null;

//   const payload = await decrypt(session);
//   if (!payload) return null;

//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Extend for another 7 days
//   const newSession = await encrypt({ ...payload, expiresAt });

//   setCookie('session', newSession, {
//     expires: expiresAt,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'lax',
//     path: '/',
//   });
// }

// // Delete the session cookie
// export function deleteSession() {
//   deleteCookie('session', { path: '/' });
// }
