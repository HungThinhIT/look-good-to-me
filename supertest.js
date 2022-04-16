var obj = JSON.parse($response.body);
obj.vip = true;
obj.vip_lifetime: 1,
obj.vip_plus: true,
obj.vip_plus_life_time: 1,

$done({body: JSON.stringify(obj)});
