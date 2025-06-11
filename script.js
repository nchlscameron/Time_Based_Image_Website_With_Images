const image = document.getElementById("timeImage");
const hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
  image.src = "images/morning.jpg";
  image.alt = "Morning Scene";
} else if (hour >= 12 && hour < 18) {
  image.src = "images/afternoon.jpg";
  image.alt = "Afternoon Scene";
} else {
  image.src = "images/night.jpg";
  image.alt = "Night Scene";
}
