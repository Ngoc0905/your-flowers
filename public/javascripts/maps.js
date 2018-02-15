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
      icon: 'http://maps.google.com/mapfiles/markerA.png'
    },
    {
      lat: 48.85172663,
      lon: 2.37999916,
      html: [
        '<h3>Store 2</h3>',
        '<p>Store 2</p>',
        '<p>Phone: 0750353191</p>'
      ].join(''),
      icon: 'http://maps.google.com/mapfiles/markerB.png'
    },
    {
      lat: 48.8418986,
      lon: 2.32506752,
      html: [
        '<h3>Store 3</h3>',
        '<p>Store 3</p>',
        '<p>Phone: 0750353191</p>'
      ].join(''),
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