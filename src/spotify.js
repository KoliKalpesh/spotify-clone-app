export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

// token const clientId="BQDAjqqJn41i9BpSH2d8DS_z9p5QQWy9zwtBOEwoF8Q0woYvt4rIDk5Uh98T89GiVmsqLzxMoVSGMdNJQkZmr1mgtJQLLB_IBX-1trRMbuSF8nIzWGYrpgIPl_WtN6ugZtsQwco19ec4g9FHOxyfUWGfkuXfmDV9395ctVugFan-bG0LezvE1_cyzJUwxxtFz3-3_IqCNLPxg0Z1-2oJhebl";

const clientId = "59b414a3ba4545dc9c5d9670be48b921";

const scopes =["user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"];

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) =>{
        let parts = item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);

        return initial;
    },{});

}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;