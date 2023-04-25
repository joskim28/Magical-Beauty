const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Evento de clic en el botón de búsqueda
searchButton.addEventListener('click', search);

// Evento de presionar Enter en el campo de búsqueda
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    search();
  }
});

// Función para realizar la búsqueda
function search() {
  const searchTerm = searchInput.value;
  searchResults.innerHTML = '';

  // Aquí puedes agregar tu lógica de búsqueda
  // y generar dinámicamente los resultados en la lista <ul>

  // Ejemplo de resultado de búsqueda
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = 'https://drive.google.com/drive/folders/19SgSAi-Brj19dJpsCSSUiXoKvw_RRMZ4';
  a.textContent = 'Resultado de búsqueda';
  li.appendChild(a);
  searchResults.appendChild(li);
  {const li = document.createElement('li');
const a = document.createElement('a');
a.href = 'https://drive.google.com/drive/folders/19SgSAi-Brj19dJpsCSSUiXoKvw_RRMZ4';
a.textContent = 'gato';
li.appendChild(a);
searchResults.appendChild(li);}
}
