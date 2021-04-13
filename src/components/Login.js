
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setLoggedIn,
  setAccessToken,
  setTokenExpiryDate,
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from './authSlice';
import { setUserProfileAsync } from '../features/spotifyExample/spotifyExampleSlice';
import { getAuthorizeHref } from '../oauthConfig';
import { getHashParams, removeHashParamsFromUrl } from '../utils/hashUtils';

const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromUrl();

export function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenExpiryDate = useSelector(selectTokenExpiryDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(access_token));
      dispatch(setTokenExpiryDate(Number(expires_in)));
      dispatch(setUserProfileAsync(access_token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
    <div className="square">
      <image src="/img/logo.png" width="98" height="107" title="Logo" alt="Logo"></image>
      <p style={{color: 'black', fontSize: '35px'}}>Welcome to ViewMe! Please login. </p>
      <a className="login_button" style={{width: '15%', margin: 'auto', textAlign: 'center'}}  onClick={() => window.open(getAuthorizeHref(), '_self')} ><image src="/img/twitch.png">Login with Twitch</image></a>
    </div>)
    }


export default (Login)
