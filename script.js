//your JS code here. If required.
 document.getElementById('openModal').addEventListener('click', openModal);

  function openModal() {
    document.getElementById('myModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target === document.getElementById('myModal')) {
      closeModal();
    }
  };
