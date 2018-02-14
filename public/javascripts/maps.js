$(function () {
  var locations = [
    {
      lat: 48.874422,
      lon: 2.335399,
      html: [
        '<h3>Store 1</h3>',
        '<p>Store 1</p>',
        '<p>Phone: 0750353191</p>'
      ].join(''),
      title: "1st point",
      icon: 'http://maps.google.com/mapfiles/markerA.png'
    },
    {
      lat: 48.85172663,
      lon: 2.37999916,
      icon: 'http://maps.google.com/mapfiles/markerB.png'
    },
    {
      lat: 48.8418986,
      lon: 2.32506752,
      icon: 'http://maps.google.com/mapfiles/markerC.png'
    }
  ];

  var maplace = new Maplace({
    locations: locations,
    map_options: {
      set_center: [48.856614, 2.3522219],
      zoom: 12
    }
  });

  maplace.Load();
});