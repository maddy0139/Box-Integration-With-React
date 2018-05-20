
import BoxSdk from '../BoxSdk/sdk';
import * as $ from 'jquery';
let moment = require('moment');

const BoxHelper = {
    Box : "",
    adminToken: "",
    adminClient:"",
    userClient:""
};
BoxHelper.Box = new BoxSdk();

/*BoxHelper.GetTokenData = () => {
    let siteUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Configuration')/items?select=Title,Value,Time&$filter=Title eq 'Admin Token'";
    return $.ajax({
        url: siteUrl,
        method: 'GET',
        headers: { 'Accept': 'application/json; odata=nometadata' }
    }).then(result => result);
};*/

BoxHelper.GetAdminUser = () => {
    let deferred = $.Deferred();
    deferred.resolve("mahendra.gohel@spadeworx.com");
    return deferred.promise();
    /*let siteUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Configuration')/items?select=Title,Value,Time&$filter=Title eq 'Admin User'";
    return $.ajax({
        url: siteUrl,
        method: 'GET',
        headers: { 'Accept': 'application/json; odata=nometadata' }
    }).then(result => result.value[0].Value);*/
};


BoxHelper.GetUserId = (userLogin) =>
{
    return BoxHelper.adminClient.users.getEnterpriseUsers({ params: { filter_term: userLogin } })//_spPageContextInfo.userEmail
    .then(result =>result.entries[0]);
};

BoxHelper.GetGroupMembershipsOfUser = (userId,offset,limit) =>
{
    return BoxHelper.adminClient.users.getGroupMemberships({ userId: userId, params: { fields: "group,role",limit:limit.toString(),offset:offset.toString()} })
    .then(result=>result.entries);
};


BoxHelper.GetGroupInfo = (groupId)=>
{
    return BoxHelper.userClient.groups.get({ groupId: groupId, params: { fields: "invitability_level,item,user,created_by,created_at,accessible_by,description" } })
    .then(result=>result);
};


BoxHelper.GetGroupUsers = (groupId) =>
{
    return BoxHelper.adminClient.groups.getMembershipsForGroup({ groupId: groupId, params: { fields: "id,user,role" } })
    .then(members=>members.entries);
};


BoxHelper.GetCollaborationsForGroup = (groupId) =>
{
    return BoxHelper.userClient.groups.getCollaborationsForGroup({ groupId: groupId, params: { fields: "item,created_by,created_at,accessible_by" } })
    .then(collabInfo =>collabInfo.entries);
};


BoxHelper.GetFoldersInformation = (folderId) =>
{
    return BoxHelper.adminClient.folders.get({ folderId: folderId, params: { fields: "name,modified_at,id,owned_by,size" } })
    .then(folderInfo => folderInfo);
};

/*BoxHelper.serverDateTime = (date) => {
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
};*/
BoxHelper.IsTokenAvailable = () => 
{
    BoxHelper.adminToken = "CWSuYckRtkUv6la8WN5LhTfq04iUJpMH";
    let deferred = $.Deferred();
    deferred.resolve(true);
    /*let deferred = $.Deferred();
    BoxHelper.GetTokenData().then(data => {
        BoxHelper.serverDateTime(new Date()).then(curDate => {
            let currentDate = moment(new Date(curDate));
            BoxHelper.serverDateTime(new Date(data.value[0].Modified)).then(tokenDt => {
                let tokenDate = moment(new Date(tokenDt));
                let minuteDiff = parseInt(currentDate.diff(tokenDate, 'm'));
                let hourDiff = parseInt(currentDate.diff(tokenDate, 'h'));
                let dayDiff = parseInt(currentDate.diff(tokenDate, 'd'));
                if (minuteDiff < 55 && hourDiff === 0 && dayDiff === 0) {
                    BoxHelper.adminToken = data.value[0].Value;
                    deferred.resolve(true);
                }
                else {
                    alert("Admin Token has Expired");
                    deferred.resolve(false);
                }
            });
        });
    });*/
    return deferred.promise();
};

BoxHelper.OnReadyJqueryFunctions =()=>
{
      $("#success-alert").hide();
      
      // Share folder Popup make screen height
      function shareFolderPopupHeight() {
          $("#folderListonPopup").css({"max-height":$(window).height()-200,"overflow-y":"auto"});
      }
      shareFolderPopupHeight();
      
      $(window).resize(function(){
        shareFolderPopupHeight();
      });
      
      
      
      function tabActive() {
        $(".bxDashboardAccordion > .panel").each(function(){
          var i=0;
          
          $(this).find(".panel-heading").on("click",function(){
            
            $(this).children("a").each(function(){
              if(($(this).attr("aria-expanded"))=="true") {
                i=1;
              }
            });
            if(i==1) {
              $(this).addClass("active");
            } else {
              $(this).removeClass("active");
            }
          });
        });
      }
      setTimeout(function(){ tabActive(); }, 2000);
};
export default BoxHelper;