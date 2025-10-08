// Get the form
const form = document.getElementById('reserve_form');

// Add submit event listener
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission (e.g., page reload)

  // Get form data
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = key === "phone" ? iti.getNumber() : value;
  });

   const form_body = document.getElementById("modal-body");
   const success   = document.getElementById("successMsg");

  fetch('https://console.eleveight.ai/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({data})
  })
    .then(() => {
      form_body.style.display = "none";
      success.style.display = "block";

      setTimeout(() => {  
        form.reset();
        form_body.style.display = "block";
        success.style.display = "none";
        MicroModal.close('modal-1');}, 1000)
      })
    .catch(() => {
      alert('There was an error submitting the form. Please try again.');
    });
});