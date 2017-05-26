var moment = require('moment');
module.exports = function(app){
	app.get('/:query',function(req,res){
		var date=req.params.query;
		var unix=null;
		var nat=null;
		if(+date>=0){
			unix=+date;
			nat = unixtonat(unix);
		}
		if(isNaN(+date) && moment(date,"MMMM D,YYYY").isValid())
		{
			unix=nattounix(date);
			nat=unixtonat(unix);
		}
		var obj ={"unix":unix , "natural":nat};
		res.send(obj);
	});
}
function nattounix(date)
{
	return moment(date,"MMMM D, YYYY").format("X");
}
function unixtonat(unix)
{
	return moment.unix(unix).format("MMMM D, YYYY");
}