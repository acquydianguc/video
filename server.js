var express = require('express')
var base64 = require('base64url');
var request = require('request')
var config = require('./lib/config')
var app = express()


app.get('/videoplayback',(req,res) => {
var url = req.query.I1bHJ4dX
var cookie =  req.query.tdD0xNTEzNDg1ND
	if(cookie && url){
		cookie = base64.decode(cookie)
		url = base64.decode(url)

		 var arrayCookie = cookie.split(',')
		 req.pipe(request(url,{ 
			      headers : {
			          'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1',
			          'cookie' : arrayCookie
			      }
			   })).pipe(res)
	}else{
		res.startus(404).send('404')
	}
})




const PORT = config.port

app.listen(PORT,() => {
	console.log(`app listen port ${PORT}`)
})
