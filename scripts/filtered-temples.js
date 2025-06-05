document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
    hamburger.textContent = '\u2630';
  } else {
    navMenu.style.display = 'flex';
    hamburger.textContent = '\u2715';
  }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 11200,
  imageUrl:
    "https://churchofjesuschrist.org/imgs/bf73f132564c2d84658d4cd8d4a3c9fab184dd22/full/1920%2C/0/default"
},
{
  templeName: "Paris France",
  location: "Le Chesnay, France",
  dedicated: "2017, May, 21",
  area: 18500,
  imageUrl:
    "https://churchofjesuschrist.org/imgs/bc89f1767a767ab8490d5c6a33cabf651d577b47/full/1920%2C/0/default"
},
{
  templeName: "Tokyo Japan",
  location: "Tokyo, Japan",
  dedicated: "1980, October, 27",
  area: 43000,
  imageUrl:
    "https://www.churchofjesuschrist.org/imgs/f36ff27e1c9f11ecac0eeeeeac1e10ba7fe5b940/full/1920%2C/0/default"
},
{
  templeName: "Salt Lake Temple",
  location: "Salt Lake City, Utah, United States",
  dedicated: "1893, April, 6",
  area: 253000,
  imageUrl:
    "https://www.churchofjesuschrist.org/imgs/91f72978620d6101375903141c161989b54a54f2/full/1920%2C/0/default"
},
{
  templeName: "Sydney Australia",
  location: "Sydney, New South Wales, Australia",
  dedicated: "1984, September, 20",
  area: 24500,
  imageUrl:
    "https://churchofjesuschrist.org/imgs/f4b7c0c0406bc7ad39a70c6f051f071f999f534e/full/1920%2C/0/default"
}

];


const container = document.querySelector('.container');

// Renders given array of temples
function renderTemples(templeArray) {
  container.innerHTML = '';

  templeArray.forEach(temple => {
    const card = document.createElement('article');
    card.classList.add('temple-card');

    const nameEl = document.createElement('h3');
    nameEl.textContent = temple.templeName;
    card.appendChild(nameEl);

    const locationEl = document.createElement('p');
    locationEl.textContent = `Location: ${temple.location}`;
    card.appendChild(locationEl);

    const dedicatedEl = document.createElement('p');
    dedicatedEl.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicatedEl);

    const areaEl = document.createElement('p');
    areaEl.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
    card.appendChild(areaEl);

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = 'lazy';
    card.appendChild(img);

    container.appendChild(card);
  });
}

// Filter functions
function filterTemples(criteria) {
  let filtered = temples;

  switch (criteria) {
    case 'old':
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filtered = temples.filter(t => t.area > 90000);
      break;
    case 'small':
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  renderTemples(filtered);
}

// Event listeners for navigation
document.getElementById('home').addEventListener('click', () => filterTemples('all'));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));

// Initial render of all temples
renderTemples(temples);

