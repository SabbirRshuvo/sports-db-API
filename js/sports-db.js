const sportsDbData = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
    .then(res => res.json())
    .then(data => sportsdbGetData(data.leagues));
}

const sportsdbGetData = leagues =>{
    console.log(leagues);
    leagues.forEach(league=>{
        console.log(league.strLeague)
        const conatinerDiv = document.getElementById('get-data');
        const div = document.createElement('div');
        div.classList.add('card-body');
        div.innerHTML = `
          <h5 class="card-title">Id: ${league.idLeague}</h5>
          <h4 class="card-subtitle mb-2 text-muted">Name: ${league.strLeague}</h4>
          <p class="card-text">League: ${league.strSport}</p>
        `
        conatinerDiv.appendChild(div);
    })
}