async function loadPlaces() {
    let res = await fetch('http://localhost:3000/places');
    let data = await res.json();
    
    let container = document.getElementById('gallery-grid');
    
    data.forEach(item => {
        container.innerHTML += `
            <div class="img">
                <img src="${item.image}">
                <h4>${item.title}</h4>
                <p>${item.location}</p>
            </div>`;
    });
}
window.onload = loadPlaces;

function filterPlaces() {
    let query = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.img'); 

    cards.forEach(card => {
        let text = card.innerText.toLowerCase(); 
        
        if (text.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}