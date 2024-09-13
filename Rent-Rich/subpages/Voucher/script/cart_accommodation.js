const cart = document.getElementById('cart');
const totalElement = document.getElementById('total');
const emptyMessage = document.getElementById('empty-message');
const cartTitle = document.getElementById('cart-title');
let totalPrice = 0;
let cartItems = 0; // Zählt die Artikel im Warenkorb

// Event Listener für den "Zu Warenkorb hinzufügen" Button
document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
  const nights = document.getElementById('nights').value;
  const roomType = document.getElementById('room-type').value;
  const breakfast = document.getElementById('breakfast').value;
  const exclusive = document.getElementById('exclusive').value;

  // Preise aus den ausgewählten Optionen extrahieren
  const roomPrice = getRoomPrice(roomType);
  const breakfastPrice = getBreakfastPrice(breakfast);
  const exclusivePrice = getExclusivePrice(exclusive);

  const itemPrice = (roomPrice * nights) + breakfastPrice + exclusivePrice;
  totalPrice += itemPrice;
  cartItems++;

  // Artikel in den Warenkorb hinzufügen
  const cartItem = document.createElement('p');
  cartItem.textContent = `Rooms: ${roomType}, Nights: ${nights}, Breakfast: ${breakfast}, Exclusive: ${exclusive}, Total: ${itemPrice.toFixed(2)} €`;
  
  cart.appendChild(cartItem);

  // Gesamtpreis aktualisieren
  totalElement.textContent = `Total price: ${totalPrice.toFixed(2)} €`;

  // Überprüfen, ob der Warenkorb leer ist
  updateCartVisibility();
});

// Funktion, um den Preis für das Zimmer zu bestimmen
function getRoomPrice(roomType) {
  switch (roomType) {
    case 'Grand Deluxe Room only for 300,00 € per Night':
      return 300;
    case 'Deluxe Room only for 150,00 € per Night':
      return 150;
    case 'Grand Superior Room only for 400,00 Euro per Night':
      return 400;
    case 'Executive Suite only for 500,00 € per Night':
      return 500;
    case 'Excelsior Suite only for 700,00 € per Night':
      return 700;
    default:
      return 0;
  }
}

// Funktion, um den Preis für das Frühstück zu bestimmen
function getBreakfastPrice(breakfast) {
  switch (breakfast) {
    case 'Breakfast for 1 Person only for 40,00 €':
      return 40;
    case 'Breakfast for 2 Persons only for 80,00€':
      return 80;
    default:
      return 0;
  }
}

// Funktion, um den Preis für das exklusive Angebot zu bestimmen
function getExclusivePrice(exclusive) {
  switch (exclusive) {
    case '1 Bootle Ruinard Champaign on Departure only for 730,00 €':
      return 730;
    case 'Gourmetpralines (9 St) on Departure only for 80,00 €':
      return 80;
    default:
      return 0;
  }
}

// Funktion, um die Sichtbarkeit des Warenkorbs zu aktualisieren
function updateCartVisibility() {
  if (cartItems > 0) {
    emptyMessage.style.display = 'none';  // Nachricht ausblenden, wenn Artikel hinzugefügt werden
    cartTitle.style.display = 'block';    // Titel des Warenkorbs anzeigen
  } else {
    emptyMessage.style.display = 'block'; // Nachricht anzeigen, wenn keine Artikel vorhanden sind
    cartTitle.style.display = 'none';     // Titel des Warenkorbs ausblenden
  }
}

// Beim Laden der Seite: Warenkorb-Titel ausblenden, wenn keine Artikel vorhanden sind
updateCartVisibility();
