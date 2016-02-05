app = require('express')();
emailEx = require('email-existence');


app.get('/',function(req,res){
	
	emailEx.check('markus.veijola@opiame.com',function(err,val){
		
		res.send('Error:' + err + 'Val:' + val);
		
	});
});


app.listen(3000);