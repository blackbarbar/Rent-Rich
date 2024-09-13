// cart_meeting_room.js
function addToCart() {
  // Get selected values
  const roomType = parseFloat(document.getElementById('type_meeting_room').value);
  const bookingTime = parseFloat(document.getElementById('meeting_room_booking_time').value);

  // Calculate item total based on room type and booking time
  const itemTotal = (roomType * bookingTime) / 100;

  // Get the cart and total elements
  const cart = document.getElementById('cart');
  const totalElement = document.getElementById('total');
  const emptyMessage = document.getElementById('empty-message');
  
  // Create a new cart item
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.textContent = `Room price: ${roomType.toFixed(2)} €, Booking Time: ${bookingTime.toFixed(2)} %, Total price: ${itemTotal.toFixed(2)} €`;
  cart.appendChild(cartItem);
  
  // Update total price
  let currentTotal = parseFloat(totalElement.textContent.split(' ')[1].replace('€', '')) || 0;
  currentTotal += itemTotal;
  totalElement.textContent = `Total price: ${currentTotal.toFixed(2)} €`;
  
  // Show or hide the empty message
  if (cart.children.length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}
