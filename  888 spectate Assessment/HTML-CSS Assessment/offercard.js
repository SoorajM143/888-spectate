window.onload = function () {
  document.getElementById('terms-cnds-btn').addEventListener('click', flipCard);
  document.getElementById('back-flip-btn').addEventListener('click', flipCard);

  function flipCard() {
    if (
      document.getElementById('side-banner').style['display'] == '' ||
      document.getElementById('side-banner').style['display'] == 'inline'
    )
      document.getElementById('side-banner').style['display'] = 'none';
    else document.getElementById('side-banner').style['display'] = 'inline';

    if (
      document.getElementById('flip-card-main').style['transform'].length == 0
    ) {
      document.getElementById('flip-card-main').style['transition'] =
        'transform 0.4s';
      document.getElementById('flip-card-main').style['transform'] =
        'rotateY(180deg)';
    } else {
      document.getElementById('flip-card-main').removeAttribute('style');
    }
  }
};
