const urls = [
  'https://fonts.googleapis.com/css?family=Raleway:300,500,700,900',
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
]
for (var i = 0; i < urls.length; i++) {
  var giftofspeed = document.createElement('link')
  giftofspeed.rel = 'stylesheet'
  giftofspeed.href = urls[i]
  giftofspeed.type = 'text/css'
  var godefer = document.getElementsByTagName('link')[0]
  godefer.parentNode.insertBefore(giftofspeed, godefer)
}
