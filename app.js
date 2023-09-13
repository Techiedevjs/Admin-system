const players = [
    {
        id: "Wrersi45",
        firstname: "john",
        lastname: "oils",
        DOB: "",
        lixBalance: "",
        bankBalance: 0,
        helixName: "",
        XP: 0,
        rank: 0,
        job: "",
        phoneNumber: "",
        country: "",
    },
    {
        id: "qewrsi25",
        firstname: "sander",
        lastname: "jones",
        DOB: "",
        lixBalance: "",
        bankBalance: 0,
        helixName: "",
        XP: 0,
        rank: 0,
        job: "",
        phoneNumber: "",
        country: "",
    },
    {
        id: "rsitey65",
        firstname: "james",
        lastname: "bond",
        DOB: "",
        lixBalance: "",
        bankBalance: 0,
        helixName: "",
        XP: 0,
        rank: 0,
        job: "",
        phoneNumber: "",
        country: "",
    },
    {
        id: "wer34yus9",
        firstname: "martinez",
        lastname: "cruz",
        DOB: "",
        lixBalance: "",
        bankBalance: 0,
        helixName: "",
        XP: 0,
        rank: 0,
        job: "",
        phoneNumber: "",
        country: "",
    },
    {
        id: "W678iops",
        firstname: "jane",
        lastname: "doe",
        DOB: "",
        lixBalance: "",
        bankBalance: 0,
        helixName: "",
        XP: 0,
        rank: 0,
        job: "",
        phoneNumber: "",
        country: "",
    },
]

const fetchPlayers = (data) => {
    document.querySelector('.players').innerHTML = ""
    data.map((player) => {
        const {firstname, lastname, id} = player
        document.querySelector('.players').innerHTML  += `
            <div class="player" id="${id}">
            <svg xmlns="http://www.w3.org/2000/svg" class="player-glow" width="18" height="52" viewBox="0 0 18 52" fill="none">
                <g filter="url(#filter0_d_13919_1220)">
                <path d="M1 13C3.20914 13 5 14.7909 5 17V35C5 37.2091 3.20914 39 1 39V13Z" fill="#57FFAF" fill-opacity="0.4" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter1_d_13919_1220)">
                <path d="M1 15C2.10457 15 3 15.8954 3 17V35C3 36.1046 2.10457 37 1 37V15Z" fill="#57FFAF" fill-opacity="0.7" shape-rendering="crispEdges"/>
                </g>
                <defs>
                <filter id="filter0_d_13919_1220" x="-9" y="3" width="24" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 1 0 0 0 0 0.686275 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13919_1220"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13919_1220" result="shape"/>
                </filter>
                <filter id="filter1_d_13919_1220" x="-14" y="0" width="32" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 1 0 0 0 0 0.686275 0 0 0 0.45 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13919_1220"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13919_1220" result="shape"/>
                </filter>
                </defs>
            </svg>
            <div><img src="images/player.svg" alt=""></div>
            <article>
                <h5>NAME</h5>
                <p>${firstname + " " + lastname}</p>
            </article>
        </div>
        `
    })
}
fetchPlayers(players)
document.querySelector('#player-search').addEventListener('input', (e) => {
    let val = e.target.value.toLowerCase()
    let data = players.filter((player) => player.firstname.includes(val) || player.lastname.includes(val))
    fetchPlayers(data)
})
const closeAdmin = () => {
    document.querySelector('#admin').classList.add('hide-element')
}
const toggleDisplay = () =>{
    document.querySelector('#admin').classList.toggle('hide-element')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});