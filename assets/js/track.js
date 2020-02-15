(async () => {
	const UUID = () => {
		let s = []
		let hexDigits = '0123456789abcdef'
		for (let i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
		}
	    s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
	    s[8] = s[13] = s[18] = s[23] = '-'

	    return s.join('')
	}

	if (!localStorage.getItem('uid')) {
		localStorage.setItem('uid', UUID())
	}
	const uid = localStorage.getItem('uid')

	if (!sessionStorage.getItem('sid')) {
		sessionStorage.setItem('sid', UUID())
	}
	const sid = sessionStorage.getItem('sid')

	const v = 'v0.4.6'

	const ec = '访问文档'
	const ea = window.location.pathname
	const el = ''

	const url = 'https://api.crawlab.cn/track' + 
	`?uid=${uid}` +
	`&sid=${sid}` +
	`&ec=${ec}` +
	`&ea=${ea}` +
	`&el=${el}` + 
	`&v=${v}`

	await fetch(url)
})()