let players = [
    {
        id: "Wrersi45uirtu456-opiui-jkioloi-90o",
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
        flag: "images/country.svg"
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
        flag: "images/country.svg"
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
        flag: "images/country.svg"
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
        flag: "images/country.svg"
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
        flag: "images/country.svg"
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
        flag: "images/country.svg"
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
        flag: "images/country.svg"
    },
]
let vehicles = [
    {
        name: "bugatti",
        id: "bgt124io"
    },
    {
        name: "benz",
        id: "bnz893ko"
    },
    {
        name: "Lexus",
        id: "lex908ry"
    },
    {
        name: "porche",
        id: "prh67ui"
    },
    {
        name: "prada",
        id: "prd567gf"
    },
    {
        name: "mazda",
        id: "mzd72hj"
    },
    {
        name: "corolla",
        id: "cll91hi"
    },
]
let jobs = [
    {
        name: "driver",
        id: "drv78yi"
    },
    {
        name: "developer",
        id: "dvp90er"
    },
    {
        name: "police",
        id: "pol34ie"
    },
    {
        name: "doctor",
        id: "dct12hu"
    },
    {
        name: "lawyer",
        id: "law47ey"
    },
    {
        name: "thug",
        id: "thg87lf"
    },
    {
        name: "banker",
        id: "bke89rw"
    },
]
let selectedJob = ""
let selectedVehicle = ""
const selectJob = (jid) => {
    let selected = document.querySelector(`#${jid}`);
    selected.classList.add('selecteditem')
    document.querySelectorAll('.setjob').forEach((item) => {
        if(item !== selected){
            item.classList.remove('selecteditem')
        }
    })
    selectedJob = jid;
}
const pushJobs = (data) => {
    document.querySelector('.jobs').innerHTML = "";
    data.map((item) => {
        const {name, id} = item;
        document.querySelector('.jobs').innerHTML += `
        <div class="setjob" id="${id}" onclick="selectJob('${id}')">
            <h4>${name}</h4>
            <p>ID: ${id}</p>
        </div>
        `
    })
}
document.querySelector('#searchjobs').addEventListener('input', (e) => {
    let val = e.target.value;
    let searchOutput = jobs.filter((item) => item.name.includes(val.toLowerCase()))
    pushJobs(searchOutput)
})   
const selectVehicle = (vid) => {
    let selected = document.querySelector(`#${vid}`);
    selected.classList.add('selecteditem')
    document.querySelectorAll('.vehicle').forEach((item) => {
        if(item !== selected){
            item.classList.remove('selecteditem')
        }
    })
    selectedVehicle = vid;
}                                                                                                                                                                                                                                                                                                                                                                                                                   
const pushVehicles = (data) => {
    document.querySelector('.vehicles').innerHTML = "";
    data.map((item) => {
        const {name, id} = item;
        document.querySelector('.vehicles').innerHTML += `
        <div class="vehicle" id="${id}" onclick="selectVehicle('${id}')">
            <h4>${name}</h4>
            <p>ID: ${id}</p>
        </div>
        `
    })
}
document.querySelector('#searchvehicles').addEventListener('input', (e) => {
    let val = e.target.value;
    let searchOutput = vehicles.filter((item) => item.name.includes(val.toLowerCase()))
    pushVehicles(searchOutput)
})
pushJobs(jobs)
pushVehicles(vehicles)
document.querySelector('.idbox').addEventListener('click', () => {
    document.querySelector('.full-id').classList.toggle('hideban');
    document.querySelector('.functions').classList.toggle('toggle-opacity');
    document.querySelector('.action-buttons').classList.toggle('toggle-opacity');
    document.querySelector('.page-header').classList.toggle('toggle-opacity');
    document.querySelector('.personal').classList.toggle('toggle-opacity');
    document.querySelector('.spacebetween').classList.toggle('toggle-opacity');
    document.querySelector('.helixnamecont').classList.toggle('toggle-opacity');
    document.querySelector('.rank-country').classList.toggle('toggle-opacity');
})

const copyContent = () => {
    let text = document.querySelector('.helixfullid').textContent;
    navigator.clipboard.writeText(text);
}

const contents = ['.page1', '.page2', '.page3'];
const displayPage = (page) => {
    backToProfile('.banpage', '.hammer');
    backToProfile('.setjobpage', '.setjobsvg');
    backToProfile('.givevehiclepage', '.givevehicle');
    let p = contents.filter(cont => cont === page);
    let others = contents.filter(cont => cont !== page);
    others.map((i) => {
        document.querySelector(i).classList.remove('page-active')
        document.querySelector(`${i}-content`).classList.add('hide-element')
    })
    document.querySelector(p).classList.add('page-active')
    document.querySelector(`${p}-content`).classList.remove('hide-element')
}
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
let selectedPlayer = {
    playerId : players[0].id,
}
let options = ['hours', 'days', 'weeks', 'months'];
let selectedOption = "days"
const selectOption = (option) => {
    selectedOption = option;
    document.querySelector('.selected').innerHTML = option
    let otheroptions = options.filter((opt) => opt !== option)
    document.querySelector(`.${option} span`).classList.add('option-picked')
    otheroptions.map((op) => {
        document.querySelector(`.${op} span`).classList.remove('option-picked')
    })
}
const backToProfile = (elem, elemimage) => {
    selectOption('days')
    document.querySelector('.period').classList.remove('duration-active');
    document.querySelector('.duration').classList.add('hideban');
    document.querySelector(elem).classList.add('hideban');
    document.querySelector(elemimage).classList.add('hide-element');
    document.querySelector('.bantab').classList.remove('active-action');
    document.querySelector('.page-header').style.filter = 'none';
    document.querySelector('.player-info').style.filter = 'none';
    document.querySelector('.action-buttons section').style.filter = 'none';
    document.querySelectorAll('.actions').forEach(elem => elem.style.filter = 'none');
    document.querySelectorAll('.vehicle').forEach(elem => elem.classList.remove('selecteditem'));
    document.querySelectorAll('.setjob').forEach(elem => elem.classList.remove('selecteditem'));
    document.querySelector('.initial').style.opacity = 1;
    document.querySelector('.functions').style.opacity = 1;
}
const playerDetail = (pid) => {
    selectedPlayer.playerId = pid
    let play = players.filter((player) => player.id === pid);
    backToProfile('.banpage', '.hammer');
    backToProfile('.setjobpage', '.setjobsvg');
    backToProfile('.givevehiclepage', '.givevehicle');
    const {firstname, lastname, lixBalance, bankBalance, DOB, flag, helixName, job, XP, rank, country, cashBalance, phoneNumber, id} = play[0]
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
    document.querySelector('.helixid').innerHTML = id.substring(0, 20) + '...';
    document.querySelector('.helixfullid').innerHTML = id;
    document.querySelector('.flag').src = flag;
}
playerDetail(players[0].id);
playersTab[0].classList.add('active');
document.querySelectorAll('.toggle').forEach((action) => {
    action.addEventListener('click', () => {
        action.classList.toggle('active-action');
    })
})
const actionPage = (elem, elemimage) => {
    document.querySelector(elem).classList.remove('hideban');
    document.querySelector(elemimage).classList.remove('hide-element');
    document.querySelector('.page-header').style.filter = 'blur(7.5px)';
    document.querySelector('.player-info').style.filter = 'blur(7.5px)';
    document.querySelector('.action-buttons section').style.filter = 'blur(7.5px)';
    document.querySelectorAll('.actions').forEach(elem => elem.style.filter = 'blur(7.5px)');
    document.querySelector('.initial').style.opacity = '.5';
    document.querySelector('.functions').style.opacity = '.5';
}
const confirmAction = (elem, elemimage) => {
    if(elem === '.banpage'){
        let reason = document.querySelector('#ban-reason').value
        let time = document.querySelector('#time').value
        selectedPlayer.banreason = reason
        selectedPlayer.period = time + " " + selectedOption
        console.log(selectedPlayer)
    } else if(elem === '.setjobpage'){
        console.log(selectedJob);
    } else if(elem === '.givevehiclepage'){
        console.log(selectVehicle)
    }
    document.querySelector(elem).classList.add('hideban');
    document.querySelector(elemimage).classList.add('hide-element');
    document.querySelector('.page-header').style.filter = 'none';
    document.querySelector('.player-info').style.filter = 'none';
    document.querySelector('.action-buttons section').style.filter = 'blur(7.5px)';
    document.querySelectorAll('.actions').forEach(elem => elem.style.filter = 'none');
    document.querySelector('.initial').style.opacity = 1;
    document.querySelector('.functions').style.opacity = 1;
}
document.querySelector('#ban-reason').addEventListener('input', (e) => {
    let reason = e.target.value
    document.querySelector('.wordcount').innerHTML = reason.length;
})
const toggleDuration = () => {
    document.querySelector('.period').classList.toggle('duration-active');
    document.querySelector('.duration').classList.toggle('hideban');
}

document.querySelector('.go-to').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "go to player")
})
document.querySelector('.kill').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "kill player")
})
document.querySelector('.visibility').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "toggle player visibility")
})
document.querySelector('.noclip').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "noclip")
})
document.querySelector('.bring').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "bring player")
})
document.querySelector('.kick').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "kick player")
})
document.querySelector('.revive').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "revive player")
})
document.querySelector('.godmode').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "give godMode to player")
})
document.querySelector('.freeze').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "freeze player")
})
// document.querySelector('.set-job').addEventListener('click', () => {
//     console.log(selectedPlayer.playerId, "set-job")
// })
// document.querySelector('.give-vehicle').addEventListener('click', () => {
//     console.log(selectedPlayer.playerId, "give vehicle")
// })
document.querySelector('.fix-vehicle').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "fix-vehicle")
})
document.querySelector('.delete-vehicle').addEventListener('click', () => {
    console.log(selectedPlayer.playerId, "delete vehicle")
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