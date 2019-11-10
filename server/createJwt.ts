import jwt from 'jsonwebtoken';

const TOKEN_DURATION_IN_SECONDS = 3600;

export default (
  issuedAt = Math.floor(Date.now() / 1000),
  serviceAccount: {private_key:string,private_key_id:string,client_email:string,scope:String}
) =>
  jwt.sign(
    {
      'iss': serviceAccount.client_email,
      'sub': serviceAccount.client_email,
      'aud': serviceAccount.scope,
      'iat': issuedAt,
      'exp': issuedAt + TOKEN_DURATION_IN_SECONDS,
    },
    serviceAccount.private_key,
    {
      algorithm: 'RS256',
      header: {
        'kid': serviceAccount.private_key_id,
        'typ': 'JWT',
        'alg': 'RS256',
      },
    }
  );
