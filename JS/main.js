
// Calcolo prezzo biglietto
// sotto 18 anni sconto 20%
// sopra 65 anni sconto 40%
// prezzo base 0.21 euro/km

let eta, distanza, sconto, prezzoBiglietto
// Prezzo al km
const prezzoBase = 0.21

// Recupero l'età del passeggero tramite la scelta nella select
const etaElement = document.getElementById('eta')
// Recupero i km percorsi dall'input compilato dall'utente
const distanzaElement = document.getElementById('distanza')
// Invio i dati del form tramite il button
const submitElement = document.getElementById('submit')



// Recupero  il prezzo intero del biglietto
const prezzoBaseElement = document.getElementById('prezzoBase')
// Recupero lo sconto da applicare
const scontoElement = document.getElementById('sconto')
// Recupero il prezzo finale del biglietto
const totaleElement = document.getElementById('totale')

// Calcolare prezzo biglieto a base di chilometri
submitElement.addEventListener('click', function () {
    // Recupero l'età del passeggero tramite la scelta nella select
    eta = etaElement.value
    // Recupero i km percorsi dall'input compilato dall'utente
    distanza = distanzaElement.value
    // Creo una costante con il prezzo base moltiplicato in base ai km inseriti nell'input
    prezzoBiglietto = (prezzoBase * distanza)
    // In base alle scelte dell'utente verrà stampato l'opzione corretta
    if (eta === 'minorenne') {
        // calcolo sconto del 20% moltiplico prezzo biglietto per 0.2
        sconto = (prezzoBiglietto * 0.2)
        // calcolo prezzo scontato
        const prezzoScontato = (prezzoBiglietto - sconto)
        prezzoBaseElement.innerHTML += `${prezzoBiglietto.toFixed(2)}`
        scontoElement.innerHTML += `${sconto.toFixed(2)}`
        totaleElement.innerHTML += `${prezzoScontato.toFixed(2)}`

    } else if (eta === 'over65') {
        // calcolo sconto del 40% moltiplico prezzo biglietto per 0.4         
        sconto = (prezzoBiglietto * 0.4)
        // calcolo prezzo scontato
        const prezzoScontato = (prezzoBiglietto - sconto)
        prezzoBaseElement.innerHTML += `${prezzoBiglietto.toFixed(2)}`
        scontoElement.innerHTML += `${sconto.toFixed(2)}`
        totaleElement.innerHTML += `${prezzoScontato.toFixed(2)}`

    } else {
        // calcolo sconto del 40% moltiplico prezzo biglietto per 0.4         
        sconto = 0
        // calcolo prezzo scontato
        const prezzoScontato = (prezzoBiglietto - sconto)
        prezzoBaseElement.innerHTML += `${prezzoBiglietto.toFixed(2)}`
        scontoElement.innerHTML += `${sconto.toFixed(2)}`
        totaleElement.innerHTML += `${prezzoScontato.toFixed(2)}`
    }
    username = document.getElementById("name").value;
    document.getElementById("myUsername").textContent = `${username}`;


})
