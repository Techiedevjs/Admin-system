let players = [
    {
        id: "Wrersi45uirtu456",
        firstname: "john",
        lastname: "oils",
        DOB: "06/07/1989",
        lixBalance: 340,
        bankBalance: 0,
        cashBalance: 23450,
        helixName: "theKillerWhale",
        XP: 9,
        rank: 3,
        job: "taxi job",
        phoneNumber: "034-456-986",
        country: "Canada",
    },
    {
        id: "qewrsi25805694",
        firstname: "sander",
        lastname: "jones",
        DOB: "07/07/1999",
        lixBalance: 450,
        bankBalance: 3000,
        cashBalance: 23450,
        helixName: "brokeNigga",
        XP: 32,
        rank: 12,
        job: "jagun jagun",
        phoneNumber: "987-345-123",
        country: "England",
    },
    {
        id: "rsitey65werier45643yu",
        firstname: "james",
        lastname: "bond",
        DOB: "09/12/2004",
        lixBalance: 700,
        bankBalance: 15789,
        cashBalance: 23450,
        helixName: "Kindkiller",
        XP: 0,
        rank: 1,
        job: "Tracker",
        phoneNumber: "784-345-234",
        country: "egypt",
    },
    {
        id: "wer34yus9eruuer5674s",
        firstname: "martinez",
        lastname: "cruz",
        DOB: "12/09/1989",
        lixBalance: 50,
        bankBalance: 0,
        cashBalance: 23450,
        helixName: "AbsoluteDanger",
        XP: 35,
        rank: 50,
        job: "police",
        phoneNumber: "009-876-345",
        country: "belarus",
    },
    {
        id: "W678iops673jsdkyierss34",
        firstname: "jane",
        lastname: "doe",
        DOB: "10/08/2023",
        lixBalance: "",
        bankBalance: 0,
        cashBalance: 23450,
        helixName: "daggerman",
        XP: 40,
        rank: 10,
        job: "driver",
        phoneNumber: "345-907-563",
        country: "nigeria",
    },
    {
        id: "W678iopsfgf43jsdkyierss34",
        firstname: "jackson",
        lastname: "dreed",
        DOB: "10/08/2001",
        lixBalance: 67,
        bankBalance: 0,
        cashBalance: 23450,
        helixName: "mohbad",
        XP: 40,
        rank: 10,
        job: "taxi job",
        phoneNumber: "346-997-563",
        country: "nigeria",
    },
    {
        id: "W678iops673jsdkyieiop34",
        firstname: "opera",
        lastname: "winnie",
        DOB: "10/08/2003",
        lixBalance: 90,
        bankBalance: 9070,
        cashBalance: 23450,
        helixName: "despicable-me",
        XP: 40,
        rank: 10,
        job: "villian",
        phoneNumber: "345-987-063",
        country: "russia",
    },
]
let allpages = document.querySelectorAll('#pages div');
allpages.forEach((page) => {
    page.addEventListener('click', () => {
        page.classList.add('page-active');
        let otherpages = []
        allpages.forEach((el) => {
            if(el !== page){
                el.classList.remove('page-active')
            }
        })
        otherpages.map((i) => i.classList.remove())
    })
})
const refreshTotalPlayers = () => {
    document.querySelector('.total-players').innerHTML = players.length;
}
const fetchPlayers = (data) => {
    document.querySelector('.players').innerHTML = ""
    refreshTotalPlayers()
    data.map((player) => {
        const {firstname, lastname, id} = player
        document.querySelector('.players').innerHTML  += `
            <div class="player" id="${id}" onclick="playerDetail('${id}')">
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
let currentPlayer;
const playersTab = document.querySelectorAll('.player');
playersTab.forEach((p) => {
    p.addEventListener('click', () => {
        p.classList.add('active')
        let others = []
        playersTab.forEach((i) => {
            i !== p && others.push(i)
        })
        others.map((i) => i.classList.remove('active'))
    })
})
document.querySelector('#player-search').addEventListener('input', (e) => {
    let val = e.target.value.toLowerCase()
    let data = players.filter((player) => player.firstname.includes(val) || player.lastname.includes(val))
    fetchPlayers(data)
})
const playerDetail = (pid) => {
    let play = players.filter((player) => player.id === pid);
    document.querySelector('.banpage').classList.add('hideban')
    const {firstname, lastname, lixBalance, bankBalance, DOB, helixName, job, XP, rank, country, cashBalance, phoneNumber, id} = play[0]
    document.querySelector('.firstname').innerHTML = firstname;
    document.querySelector('.lastname').innerHTML = lastname;
    document.querySelector('.dob').innerHTML = DOB;
    document.querySelector('.phonenumber').innerHTML = phoneNumber;
    document.querySelector('.rank').innerHTML = rank;
    document.querySelector('.xp').innerHTML = XP;
    document.querySelector('.country').innerHTML = country;
    document.querySelector('.job').innerHTML = job
    document.querySelector('.bankbalance').innerHTML = bankBalance + " $"
    document.querySelector('.cashbalance').innerHTML = cashBalance + " $"
    document.querySelector('.helixname').innerHTML = helixName
    document.querySelector('.lixbalance').innerHTML = lixBalance
    document.querySelector('.helixid').innerHTML = id
}
playerDetail(players[0].id);
playersTab[0].classList.add('active');
document.querySelectorAll('.actions').forEach((action) => {
    action.addEventListener('click', () => {
        action.classList.toggle('active-action');
    })
})
const banPlayer = () => {
    document.querySelector('.banpage').classList.remove('hideban');
    document.querySelector('.hammerban').classList.remove('hideban');
}
const confirmBan = () => {
    document.querySelector('.banpage').classList.add('hideban');
    document.querySelector('.hammerban').classList.add('hideban');
    document.querySelector('.bantab').classList.add('active-action');
}
const backToProfile = () => {
    document.querySelector('.banpage').classList.add('hideban');
    document.querySelector('.hammerban').classList.add('hideban');
    document.querySelector('.bantab').classList.remove('active-action');
}
document.querySelector('#ban-reason').addEventListener('input', (e) => {
    let reason = e.target.value
    document.querySelector('.wordcount').innerHTML = reason.length;
})
const closeAdmin = () => {
    document.querySelector('#admin').classList.add('hide-element');
}
const toggleDisplay = () =>{
    document.querySelector('#admin').classList.toggle('hide-element');
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});
