const path = require('path'),
  json = JSON.stringify(require('./webpack.config.json')),
  rf = (v) => (/\$(.*?)\$(.*?)$/.exec(v)),
  $ = {
    'path': v => path.resolve(__dirname, v),
    'regex': v => (new RegExp(v)),
  };

module.exports=JSON.parse(json,(k,v,a)=>typeof v==='string'
?(v.startsWith('$')?(a=rf(v),$[a[1]](a[2])):v):v);