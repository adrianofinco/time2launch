var endpoints = {
  upcoming: 'https://ll.thespacedevs.com/2.0.0/launch/upcoming/',
  // http://localhost/spacedevs // local test endpoint
}

/**
 * 
 * @param {'upcoming'} endpoint - Name of the requested endpoint
 * @returns Promise<any>
 */
async function getJSON (endpoint, id) {
  endpoint = endpoints[endpoint]

  if (endpoint == undefined) return [];
  
  return await fetch(endpoint, {
    method: 'GET',
    headers: new Headers({'accept': 'application/json'}),
    cache: 'default' // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
  }).then(r => {
      return r.json().then(json => json)
    })
    .catch(err => {
      console.error(err);
      return [];
    });
}

export const fetchData = getJSON;
