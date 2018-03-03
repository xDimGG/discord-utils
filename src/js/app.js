$(() => {
  $('#loader').fadeOut(750);
  const path = location.pathname.replace(/\/$/, '').toLowerCase();
  if (path === '/emojify') {
    const emojiMap = {
      a: '🇦',
      b: '🇧',
      c: '🇨',
      d: '🇩',
      e: '🇪',
      f: '🇫',
      g: '🇬',
      h: '🇭',
      i: '🇮',
      j: '🇯',
      k: '🇰',
      l: '🇱',
      m: '🇲',
      n: '🇳',
      o: '🇴',
      p: '🇵',
      q: '🇶',
      r: '🇷',
      s: '🇸',
      t: '🇹',
      u: '🇺',
      v: '🇻',
      w: '🇼',
      x: '🇽',
      y: '🇾',
      z: '🇿',
      0: '0⃣',
      1: '1⃣',
      2: '2⃣',
      3: '3⃣',
      4: '4⃣',
      5: '5⃣',
      6: '6⃣',
      7: '7⃣',
      8: '8⃣',
      9: '9⃣',
      '#': '#️⃣',
      '*': '✳',
      '!': '❗',
      '?': '❓'
    }
    const input = $('#input');
    const output = $('#output');
    input.on('input', () => {
      const newText = input.val().split('').map(char => char.toLowerCase() in emojiMap ? emojiMap[char.toLowerCase()] : char).join(' ');
      output.val(newText);
    });
    output.click(() => output.select());
  } else if (path === '/webhook') {
    $(() => {
      $('textarea, input').each(function() {
        $(this).val(localStorage.getItem($(this).attr('id')));
      });
    });
    window.onbeforeunload = () => {
      $('textarea, input').each(function() {
        localStorage.setItem($(this).attr('id'), $(this).val());
      });
    };
    $('#submit > .button').on('click', () => {
      const embed = {
        author: {
          name: $('#author_name').val(),
          url: $('#author_link').val(),
          icon_url: $('#author_icon').val(),
        },
        color: parseInt($('#color').val(), 16),
        description: $('#text').val(),
        title: $('#title').val(),
        url: $('#title_link').val(),
        image: { url: $('#image').val() },
        thumbnail: { url: $('#thumb_url').val() },
        footer: {
          text: $('#footer').val(),
          icon_url: $('#footer_icon').val(),
        },
      };
      const props = [];
      for (const val of Object.values(embed)) {
        if (typeof val === 'string')
          props.push(val);
        else
          for (const v of Object.values(val))
            props.push(v);
      }
      $.ajax({
        type: 'POST',
        url: $('#url').val(),
        crossDomain: true,
        data: JSON.stringify({
          content: $('#content').val(),
          username: $('#webhook_name').val(),
          avatar_url: $('#webhook_icon').val(),
          embeds: props.some(Boolean) ? [embed] : undefined,
        }),
        success: success => {
          alert('WebHook Sent');
          console.log(success);
        },
        error: error => {
          alert('WebHook Error || check console for more info');
          console.log(error);
        }
      });
    });
  }
  // else if (path === '/react') {
  //   const emojis = fetch('https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json')
  //     .then(res => res.json())
  //     .then(emojis => {
  //       for (const emoji of emojis) {
  //         const el = document.createElement('option');
  //         el.value = emoji.unified;
  //         el.appendChild(document.createTextNode(eval(`\\u${emoji.unified}`)));
  //         document.querySelector('select').appendChild(el);
  //       }
  //     });
  // }
});