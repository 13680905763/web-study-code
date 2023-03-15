const info = {
  url: '123.com',
  method: 'GET'
}
function request(url: string, method: 'GET' | 'POST') {
  console.log(url, method)
}
request(info.url, info.method)
