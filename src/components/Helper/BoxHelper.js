import $ from 'jquery';
import BoxSdk from '../../sdk';
var moment = require('moment');

const BoxHelper = {};
BoxHelper.Box = new BoxSdk();
BoxHelper.adminToken = "";

BoxHelper.GetTokenData= () =>
{
  let siteUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Configuration')/items?select=Title,Value,Time&$filter=Title eq 'Admin Token'";

 return $.ajax({
   url: siteUrl,
    method: 'GET',
    headers: {'Accept': 'application/json; odata=nometadata'}
 }).then(result=>result);
}
BoxHelper.serverDateTime = (date) => 
{
    let dt = date || new Date();
    let context = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
    let web = context.get_web();
    let timeZone = web.get_regionalSettings().get_timeZone();
    let deferred = $.Deferred();
    context.load(timeZone);
    context.executeQueryAsync(function (data) {
        let info = timeZone.get_information();
        let offset = (info.get_bias() + info.get_daylightBias()) / 60.0;
        let serverDateTimeNow = new Date(dt.getTime() - offset * 3600 * 1000);
        deferred.resolve(serverDateTimeNow.toISOString());
    },
        function (sender, args) {
            console.log(args.get_message());
            deferred.reject();
        });
    return deferred.promise();
}
BoxHelper.IsTokenAvailable = ()=>
{
    let deferred = $.Deferred();
    BoxHelper.GetTokenData().then(data=>{
        BoxHelper.serverDateTime(new Date()).then(curDate=>{
            let currentDate = moment(new Date(curDate));
            BoxHelper.serverDateTime(new Date(data.value[0].Modified)).then(tokenDt=>{
                let tokenDate = moment(new Date(tokenDt));           
                let minuteDiff = parseInt(currentDate.diff(tokenDate, 'm'));
                let hourDiff = parseInt(currentDate.diff(tokenDate, 'h'));
                let dayDiff = parseInt(currentDate.diff(tokenDate, 'd'));
                
                if(minuteDiff < 55 && hourDiff === 0 && dayDiff === 0)
                {
                    BoxHelper.adminToken = data.value[0].Value;
                    deferred.resolve(true);
                }
                else
                {
                    alert("Admin Token has Expired");
                    deferred.resolve(false);
                }
            });
        });
      });
      return deferred.promise();
}

export default BoxHelper;