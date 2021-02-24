// const container = document.getElementById("container");

(async () => {
    let refFetch = await fetch("../.netlify/functions/token-hider/token-hider");
    let refresh = await refFetch.text()
    refresh = JSON.parse(refresh)
    let refresh_token = refresh["REFRESH"]
    // console.log(refresh)

    // let code = "AQBcyYZJQ8HNchabRgf6dA3w-ycAQReBc-MtTLpBUBuOudGiSiqRei1mHcCPvxT_1QdVq4UQjd508mcBxdc7jaOMgS69qID2wa6szWkLsIIpUmguCPTFa4e-Qkj0a8qniP5uFZS_7g0p4ZKLGOfN_tZhTPzMJz_-A4s6PMcuklwoKu8sJv64GuwV6q3iKY35quuTqazBBeoaz2m9tDlkyaLN33O7smiMsVx6HCTfeGuuCXvkW4ElaQ9Qy3Qjzw3G3bTv8Uo8Fv82LRoMG4c7eviALSuiyAAqvf3e"

    let grant_type = "refresh_token"
    let code_type = "refresh_token"
    

    // console.log(code)
    
    let client_id = "046b829766094645b6cef22e6583cfec"
    // let client_secret = "b6fe72496f49427692b2eabe5a952ce6"
    let client_secret = refresh["CLIENT_SECRET"]
    let myurl = "https:%2F%2Fexample.com%2Fcallback"

    console.log(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${myurl}&scope=user-read-private%20user-read-email%20user-read-currently-playing%20user-read-playback-state&state=34fFs29kd09`)
    
    // if (document.cookie.split(';').some((item) => item.trim().startsWith('refresh='))) {
    //     let cookieValue = document.cookie
    //      .split('; ')
    //      .find(row => row.startsWith('refresh='))
    //      .split('=')[1];

    //     grant_type = "refresh_token"
    //     code_type = "refresh_token"
    //     code = cookieValue;
    //  }

    let auth = await fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
        body: `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&${code_type}=${refresh_token}&redirect_uri=${myurl}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },       
    })

    let response = await auth.text();
    response = JSON.parse(response)
    // refresh_token = response["refresh_token"]

    // if (!document.cookie.split(';').some((item) => item.trim().startsWith('refresh='))) {
    //     document.cookie = `refresh=${refresh_token}`
    // }
    let access_token =  response["access_token"]

    getPlayback()
    setInterval(getPlayback, 5000)

    async function getPlayback() {
        let playback = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {headers: {
            "Authorization": "Bearer " + access_token,
            "Accept" :"application/json",
            "Content-Type": "application/json"
        }})
    
        try {
            let playbackReponse = await playback.text()
            playbackReponse = JSON.parse(playbackReponse)

            document.querySelector(".container_inner").style.display = "flex"
            document.querySelector(".widget_title p").textContent = "Currently vibing with"
            document.querySelector(".error").style.display = "none"
        
            let image = document.querySelector(".cover")
            let trackName = document.querySelector("#track-name")
            let artist = document.querySelector("#artist")
        
            image.setAttribute("src", playbackReponse["item"]["album"]["images"][0]["url"])
            trackName.textContent = playbackReponse["item"]["name"]
            let artists = playbackReponse["item"]["artists"].map((artist) => {
                return artist["name"]
            })
            
            artist.textContent = artists.join(", ")
        } catch(e) {
            document.querySelector(".error").style.display = "inline-block"
            document.querySelector(".container_inner").style.display = "none"
            document.querySelector(".widget_title p").textContent = "Currently offline"
        }
    }
})()

console.log("height: ", $("#container .error").height())

let offsetTop = 100;
let ratio = $("#container .error").outerHeight() / $("#container").outerHeight()
let h = $("#container").height();

$(window).resize(() => {
    ratio = $("#container .error").outerHeight() / $("#container").outerHeight()
    h = $("#container").height();
})

setInterval(() => {
    if(offsetTop < -h * ratio / 1.1) {
        document.querySelector(".error").style.marginTop = 0;
        offsetTop = 100;
    }

    document.querySelector(".error").style.marginTop = offsetTop + "%"
    offsetTop -= 0.1;
}, 10)