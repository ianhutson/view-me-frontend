const authEndpoint = 'https://id.twitch.tv/oauth2/authorize';

const scopes = [
  'user:read:email',
];

export const getAuthorizeHref = (): string => {
  const clientId = process.env.REACT_APP_id;
  const redirectUri = "http://localhost:3000/"
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scopes.join("%20")}&response_type=token`;
}