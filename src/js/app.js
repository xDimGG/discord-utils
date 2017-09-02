$(() => {
  $('#loader').fadeOut(750);
  const path = location.pathname.replace(/\/$/, '');
  if (path === '/RichEmbed') {
    const json = {
      author: {
        name: 'Discord.JS-Utils',
        icon_url: 'https://utils.dim.codes/src/favicon/favicon-32x32.png',
        url: 'https://utils.dim.codes'
      },
      color: '#ffffff',
      description: 'A site that provides many useful tools for helping with Discord.JS',
      fields: [
        {
          name: 'Field 2',
          value: 'Text for field 1',
          inline: true
        },
        {
          name: 'Field 2',
          value: 'Text for field 2',
          inline: true
        }
      ],
      file: 'https://utils.dim.codes/src/favicon/icon.jpg',
      footer: {
        text: 'RichEmbed by utils.dim.codes',
        icon_url: 'https://utils.dim.codes/src/favicon/favicon-32x32.png'
      },
      image: {
        url: 'https://utils.dim.codes/src/favicon/icon.jpg'
      },
      thumbnail: {
        url: 'https://utils.dim.codes/src/favicon/icon.jpg'
      },
      timestamp: Date.now(),
      title: 'Discord.JS-Utils',
      url: 'https://utils.dim.codes'
    };
    const updateJSON = options => {
      const $json = $('#json');
      $json.text(JSON.stringify(json, null, 2));
    };
    updateJSON();
  }
});
