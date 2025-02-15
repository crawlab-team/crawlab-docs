(function (w, d, s, q, i) {
  w[q] = w[q] || []
  var f = d.getElementsByTagName(s)[0], j = d.createElement(s)
  j.async = true
  j.id = 'beacon-aplus'
  j.src = 'https://d.alicdn.com/alilog/mlog/aplus/' + i + '.js'
  f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'aplus_queue', '203467608');

(async function () {
  //集成应用的appKey
  window.aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['appKey', '6193a6b7e014255fcb7d60b8']
  })

  //发送pv
  window.aplus_queue.push({
    action: 'aplus.sendPV',
    arguments: [{ is_auto: true }, {}]
  })

})()
