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
      const data = {
        username: $('#webhook_username').val(),
        icon_url: $('#webhook_avatar').val(),
		    attachments: [{
          author_icon: $('#author_avatar').val(),
          author_name: $('#author_username').val(),
          color: $('#color').val(),
          fields: [{
            title: $('#title').val(),
            value: $('#message').val()
          }]
        }]
      };
      $.ajax({
        type: 'POST',
        url: `${$('#url').val()}/slack`,
        crossDomain: true,
        data: JSON.stringify(data),
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
});