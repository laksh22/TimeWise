var http = require('http');
const port = 8000;
const host = "localhost"
var options = {
    hostname : host ,
    port : port ,
    method : "POST",
    path : "/"
}
const data = JSON.stringify({
  username: '',
  password: ''
})

const request = http.request(options, response => {
  console.log(`statusCode: ${response.statusCode}`)

  response.on('data', d => {
    process.stdout.write(d)//d = 'success' if webscraper successful
  })
})
request.on('error', error => {
  console.error(error)
})

request.write(data)
    request.end();
