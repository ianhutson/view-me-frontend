const authEndpoint = 'https://id.twitch.tv/oauth2/authorize';

const scopes = [
  'user:read:email',
];

  const clientId = process.env.REACT_APP_id;
  const redirectUri = "http://localhost:3000/"
  const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scopes.join("%20")}&response_type=token`;
