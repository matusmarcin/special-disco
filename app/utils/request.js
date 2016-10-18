import 'whatwg-fetch';
import { API } from 'containers/App/constants';

/**
 * Parses the JSON returned by a network request, check it and throws error
 *
 * @param  {object} response A response from a network request
 *
 * @return {object|undefined} The parsed JSON from the request, or throws an error
 */
function parseJSON(response) {
  response = response.json();
  
  if(response.status == 'OK') {
    return response;
  }
  
  const error = new Error(response.message);
  error.response = response;
  throw error;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {objct} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(API + url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}