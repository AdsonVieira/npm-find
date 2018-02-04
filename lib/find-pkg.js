module.exports = function find( pkg ) {
    var https = require('https')
    https.get('https://www.npmjs.com/-/search?text='+pkg, function(res){
        var data = ''

        res.on('data', function(newData){
            data += newData
        });

        var obj;
        res.on('end', function(){
            obj = JSON.parse(data)
            console.log("Total de pacotes encontrados "+obj.total)
            for (var index = 0; index < obj.objects.length; index++) {
                console.log("Name package: "+obj.objects[index].package.name)
                console.log('\x1b[33m%s\x1b[0m',"Package description: "+obj.objects[index].package.description)
                console.log('\x1b[33m%s\x1b[0m',"Package version: "+obj.objects[index].package.version)
                console.log('\x1b[33m%s\x1b[0m',"Package repository: "+obj.objects[index].package.links.repository)
                console.log("===========================================================");
            }
        })
    })
};