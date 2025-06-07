import querystring from 'querystring';
 
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
 
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
 
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  return response.json();
};

export const getPlaylist = async (playlistId:any) => {
  const { access_token } = await getAccessToken();
 
  return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getArtist = async (artistId:any) => {
  const { access_token } = await getAccessToken();
 
  return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getLikedSongs = async ( n = 30 ) => {
  const { access_token } = await getAccessToken();
 
  return fetch(`https://api.spotify.com/v1/me/tracks?limit=${n}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getPlaylists = async()=>{
  const ids = ['48nvVtayUQjnlgiQcXiddI','3aBzudNO7ez7SnKQyDroV2', '4QlYhuqAMNIWIM9DwmmVZB'];
    let playlists = new Array;
    for (let id of ids) {
      const response = await getPlaylist(id);
      const item  = await response.json();
      console.log(item)
      const playlist = {
          playlistUrl: item.external_urls.spotify,
          id: item.id,
          name: item.name,
          songs: item.tracks.items.map((_track:any) => ({
            songUrl: _track.track.external_urls.spotify,
            album_name: _track.track.album.name,
            album_link: _track.track.album.href,
            album_image: _track.track.album.images[0].url,
            artists: _track.track.artists.map((_artist:any)=>({name:_artist.name,artistUrl:_artist.external_urls.spotify})),
            name:_track.track.name,
            popularity: _track.track.popularity
          })
          ),
      }
      playlists.push(playlist)
    }
    return playlists;
}

export const getArtists = async()=>{
  const ids = ['4hhmN9QgEWfcZyUClXGXdm','37O1JxzsmW46wxTE2qdShj','1ve8PA1ZvwlsF0BX586Xdz','2ZlnbgF8wCIoj1iPy0SxPO','492v2yeqY8XcEdTOFBdqDi','6RubjTZ123VH3iDaGbi7hM','3UrgupfKn6X95DFf0f7uk5','7cLpOMioHNlfhx7hInzeRQ','3QBTzSl77da8AneG2kJSlj','7pNCSsicJGpwrn2wwGD91g','7FRkiYA24RIXPNG3zdzo2l','2bJ8pwwyjQJfeVcLRQDnlx','0Jh4pnOiWjf6s6KsV2mLTV','4QOWxkUYIKvnV7AcjF4k6w','1GyHIEILIuWwQ5HA5x2BvD'];
  let artists = new Array;
  for (let id of ids) {
    const response = await getArtist(id);
    const item  = await response.json();
    console.log(item)
    const artist = {
      artistUrl:item.external_urls.spotify,
      followers:item.followers.total,
      artistImage: item.images[0].url,
      name:item.name,
      popularity:item.popularity,
      id:item.id,
    }
    artists.push(artist)
  }
  return artists;
}

export const getSongs = async () => {
  try {
    const numOfSongs = 30;
    const response = await getLikedSongs(numOfSongs);
    
    if (!response.ok) {
      console.error('Spotify API error:', response.statusText);
      return [];
    }

    const data = await response.json();
    
    // Check if items exists and is an array
    if (!data?.items || !Array.isArray(data.items)) {
      console.error('Invalid response format from Spotify API');
      return [];
    }

    const songs = data.items.map((el:any) => {
      if (!el?.track) return null;

      const formattedDate = el.track.album?.release_date
        ? el.track.album.release_date.split('-').reverse().join('-')
        : '';

      return {
        title: el.track.name || '',
        link: el.track.external_urls?.spotify || '',
        date: formattedDate,
        artists: el.track.artists?.map((_artist: any) => ({
          name: _artist?.name || ''
        })) || [],
        album_cover: el.track.album?.images?.[0]?.url || ''
      };
    }).filter(Boolean); // Remove any null entries

    return songs.reverse();
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
};