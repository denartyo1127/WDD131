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
  // Add more temple objects here...

  {
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 11200,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior.jpg"
},
{
  templeName: "Paris France",
  location: "Le Chesnay, France",
  dedicated: "2017, May, 21",
  area: 18500,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior.jpg"
},
{
  templeName: "Tokyo Japan",
  location: "Tokyo, Japan",
  dedicated: "1980, October, 27",
  area: 43000,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior.jpg"
},
{
  templeName: "Salt Lake Temple",
  location: "Salt Lake City, Utah, United States",
  dedicated: "1893, April, 6",
  area: 253000,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city/400x250/salt-lake-temple-exterior.jpg"
},
{
  templeName: "Sydney Australia",
  location: "Sydney, New South Wales, Australia",
  dedicated: "1984, September, 20",
  area: 24500,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-exterior.jpg"
}

];

// Select the container div where cards will go
const container = document.querySelector('.container');

// Clear container content (optional, but safe)
container.innerHTML = '';

// Loop over temples array and create cards
temples.forEach(temple => {
  const card = document.createElement('article');
  card.classList.add('temple-card');

  // Temple name
  const nameEl = document.createElement('h3');
  nameEl.textContent = temple.templeName;
  card.appendChild(nameEl);

  // Location
  const locationEl = document.createElement('p');
  locationEl.textContent = `Location: ${temple.location}`;
  card.appendChild(locationEl);

  // Dedicated date
  const dedicatedEl = document.createElement('p');
  dedicatedEl.textContent = `Dedicated: ${temple.dedicated}`;
  card.appendChild(dedicatedEl);

  // Area (formatted)
  const areaEl = document.createElement('p');
  areaEl.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
  card.appendChild(areaEl);

  // Image with native lazy loading
  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = 'lazy';
  card.appendChild(img);

  // Append card to container
  container.appendChild(card);
});
