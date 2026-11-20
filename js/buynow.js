const TO_ADDRESS = "orders@examplewebsite142.com";

const form = document.querySelector("#order-form");

function buildMailto() {
  const product = document.querySelector("#product-name").value;
  const price = document.querySelector("#product-price").value;
  const size = document.querySelector("#shirt-size").value;
  const qty = document.querySelector("#shirt-quantity").value;
  const name = document.querySelector("#customer-name").value;
  const notes = document.querySelector("#order-notes").value;

  const subject = "Order: " + product;
  const body =
    "Hello! I would like to order:\r\n\r\n" +
    "Product: " + product + "\r\n" +
    "Price: " + price + "\r\n" +
    "Size: " + size + "\r\n" +
    "Quantity: " + qty + "\r\n\r\n" +
    "Name: " + name + "\r\n" +
    "Address / notes: " + notes;

  return (
    "mailto:" + TO_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = buildMailto();
});
