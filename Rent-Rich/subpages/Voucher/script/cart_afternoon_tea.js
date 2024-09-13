let cart = [];
let totalPrice = 0;

function addToCart() {
  // Anzahl der Personen und Preis des Angebots abrufen
  const persons = parseInt(document.getElementById('persons_tea_time').value, 10);
  const teaTypeElement = document.getElementById('type_tea_time');
  const teaTypeText = teaTypeElement.options[teaTypeElement.selectedIndex].text;
  const teaPrice = parseFloat(teaTypeElement.value);

  // Einzelpreis berechnen
  const itemPrice = teaPrice * persons;

  // Zum Warenkorb hinzufügen
  const cartItem = {
    persons: persons,
    teaType: teaTypeText,
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
    cartItem.innerHTML = `<p>${item.persons}x ${item.teaType} - Total: ${item.price.toFixed(2)} €</p>`;
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
