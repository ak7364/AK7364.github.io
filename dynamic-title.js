function animateTitle() {
    i >= message.length - 1 ? (i = 0) : i++,
      (document.title = message[i]),
      setTimeout('animateTitle()', 100)
  }
  var message = [
    ' AK/7364',
    'ㅤ',
    ' A',
    ' AK',
    ' AK/',
    ' AK/7',
    ' AK/73',
    ' AK/736',
    ' AK/7364',
    ' AK/7364 ',

  ],
    i = 0
  animateTitle()

  