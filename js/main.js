// function initMap() {
//   // The location of place
//   var place = {lat: -37.859153, lng: 145.039300};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//     document.querySelector('.map'), {zoom: 13, center: place});
//   // The marker, positioned at place
//   var marker = new google.maps.Marker({position: place, map: map});
// }

// // Smooth Scroll
// // Smooth Scrolling
// $('#navbar a, .btn').on('click', function(event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top - 100
//       },
//       800
//     );
//   }
// });

// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});