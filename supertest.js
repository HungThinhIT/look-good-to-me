/**
API
// http://api.hskonline.com/v4/my/info
**/
var obj = JSON.parse($response.body);
obj.vip = 1;
obj.vip_lifetime: 1,
obj.vip_plus: 1,
obj.ip_plus_life_time: 1,

$done({body: JSON.stringify(obj)});
