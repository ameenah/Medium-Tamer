console.log(lol())

function lol() {
	let theCookies = document.cookie.split(';')
	let cookies = ''
	for (let i = 1; i <= theCookies.length; i++) {
		cookies += i + ' ' + theCookies[i - 1] + '\n'
	}
	return cookies
}
