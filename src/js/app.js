$(() => {
  $('#loader').addClass('done-loading').fadeOut(750);
  const path = location.pathname.replace(/\/$/, '');
  if (path === '/RichEmbed') {
    var json = {
      name: "JsonViewer",
      author: {
        name: null,
        email: true,
        contact: [
          {
            location: "office",
            number: 123456
          },
          {
            location: "home",
            number: 987654
          }
        ]
      }
    };

    $('#json-container').jsonview(json);
  }
});