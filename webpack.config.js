const path = require('path');
const json = require('./webpack.config.json');
module.exports = ((plugins) => {const $a=($1,$2,$3,$4)=>$2($3,$1[$4],$4),$b=($1,$2,$3)=>$1.substring($2,$3),$c=($1,...$2)=>$1.bind(null,...$2),
$d=$1=>$b($1,0,1)==='$'&&$h[$b($1,1,2)]?$h[$b($1,1,2)]($b($1,2)):$1,$e=$1=>Object.keys($1),$f=($1,$2) => ($1===null?'u':(Array.isArray($1)?'a':
$b(typeof $1,0,1))===$2),$g=($1,$2,$3) => $2.reduce($3,$1),$h=plugins,$k=(a, i, k) => (a[k]=($f(i,'a')?$g([],i,$k):($f(i,'o')?$g({},$e(i),$c($a,
i,$k)):($f(i,'s')?$d(i):i))),a);return $k;})({
  r: i => (new RegExp(i)),
  p: i => path.resolve(__dirname, i)
})({}, json, 0)[0];