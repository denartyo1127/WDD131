
function calculateWindChill(tempF, windSpeedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windSpeedMph, 0.16) +
    0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const temperature = 80; 
  const windSpeed = 5;    

  const windChillElement = document.getElementById("windChill");
  const tempElement = document.getElementById("temperature");
  const windSpeedElement = document.getElementById("windSpeed");
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  if (tempElement) tempElement.textContent = temperature;
  if (windSpeedElement) windSpeedElement.textContent = windSpeed;

  if (windChillElement) {
    if (temperature <= 50 && windSpeed > 3) {
      windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    } else {
      windChillElement.textContent = "N/A";
    }
  }

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
});

