function solve(obj){
    let metods = ['GET', 'POST', 'DELETE', 'CONNECT']
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let pattern = /[<>\\&'")_\W\w]+/g
    let newPAttern = /[A-Za-z0-9.]+/g
    if(obj.method == undefined || !metods.includes(obj.method)){
        throw new Error ('Invalid request header: Invalid Method')
    }else if(obj.uri ==undefined || obj.uri === '*' || !newPAttern.test(obj.uri)){
        throw new Error ('Invalid request header: Invalid URI')
    }else if(obj.version == undefined || !versions.includes(obj.version)){
        throw new Error ('Invalid request header: Invalid Version')
    }else if(!obj.message == ''|| obj.message == undefined || pattern.test(obj.message)){
        throw new Error ('Invalid request header: Invalid Message')
    }

return obj



}
console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }))

// solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   })