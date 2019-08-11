// $.ajax({
//     url:'',
//     data:'',
//     method: '',
//     dataType:''
// });

function ajax({url='', type='post', dataType='json'}) {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest;
        xhr.open(type, url, true);
        xhr.responseType = dataType;
        xhr.onload = function () { // onload===xhr.readState=4&&xhr.status=200
            if(xhr.status === 200){
                resolve(xhr.response);
            }
        };
        xhr.onerror = function (err) {
          reject(err);
        };
        xhr.send();
    }).then((data)=>{}, (err)=>{

    })
}
// ajax({url:'carts.json'}).then(()=>{
//
// }, ()=>{
//
// });