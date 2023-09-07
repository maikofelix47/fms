import { SignJWT, jwtVerify } from "jose";
const alg = "HS256";
const EXPIRATION_TIME = process.env.JWT_EXPIRES_IN || "2h";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_KEY);

export async function generateJwtToken(payload: any) {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime(EXPIRATION_TIME)
    .setIssuedAt()
    .setSubject(payload.sub)
    .sign(JWT_SECRET);
  return jwt;
}

export async function verifyToken(token: string) {
  const verified = await jwtVerify(token, JWT_SECRET);
  return verified;
}
