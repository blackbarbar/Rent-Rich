let cart = [];
let totalPrice = 0;

function addToCart() {
  // Anzahl der Personen und Preis des Angebots abrufen
  const persons = parseInt(document.getElementById('persons_asia_restaurant').value, 10);
  const asia_restaurantTypeElement = document.getElementById('type_asia_restaurant');
  const asia_restaurantTypeText = asia_restaurantTypeElement.options[asia_restaurantTypeElement.selectedIndex].text;
  const asia_restaurantPrice = parseFloat(asia_restaurantTypeElement.value);

  // Einzelpreis berechnen
  const itemPrice = asia_restaurantPrice * persons;

  // Zum Warenkorb hinzufügen
  const cartItem = {
    persons: persons,
    asia_restaurantType: asia_restaurantTypeText,
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
    cartItem.innerHTML = `<p>${item.asia_restaurantType} - Total: ${item.price.toFixed(2)} €</p>`;
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
