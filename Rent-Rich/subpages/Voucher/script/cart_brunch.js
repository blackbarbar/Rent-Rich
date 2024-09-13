let cart = [];
let totalPrice = 0;

function addToCart() {
  // Anzahl der Personen und Preis des Angebots abrufen
  const persons = parseInt(document.getElementById('persons_brunch').value, 10);
  const brunchTypeElement = document.getElementById('type_brunch');
  const brunchTypeText = brunchTypeElement.options[brunchTypeElement.selectedIndex].text;
  const brunchPrice = parseFloat(brunchTypeElement.value);

  // Einzelpreis berechnen
  const itemPrice = brunchPrice * persons;

  // Zum Warenkorb hinzufügen
  const cartItem = {
    persons: persons,
    brunchType: brunchTypeText,
    price: itemPrice
  };

  cart.push(cartItem);

  // Warenkorb anzeigen
  updateCartDisplay();

  // Gesamtpreis aktualisieren
  updateTotalPrice();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = ''; // Warenkorb leeren, um neuen Inhalt anzuzeigen

  cart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `<p>${item.persons}x ${item.brunchType} - ${item.price.toFixed(2)} €</p>`;
    cartContainer.appendChild(cartItem);
  });

  if (cart.length === 0) {
    document.getElementById('empty-message').style.display = 'block';
  } else {
    document.getElementById('empty-message').style.display = 'none';
  }
}

function updateTotalPrice() {
  totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total').textContent = `Total price: ${totalPrice.toFixed(2)} €`;
}
