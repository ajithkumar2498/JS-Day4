let mydetails=[{"fullname":{"fname":"ajithkumar","lname":"Thandapani"}},
{"dob":{"year":"1998","month":"Sep","Day":"24"}},
{"place":{"district":"theni","Area":"Allinagaram","pincode":"625531"}},
{"family":{"fathername":"Thandapani","mothername":"Deepa","sibling":"Thamodharan"}},
{"hobbies":{"cricket":"decentplayer","volleyball":"beginner"}}]
for (var a in mydetails) {

    console.log(mydetails[a])
    // console.log(mydetails[a].dob)
    
}
for(let i=0; i<mydetails.length; i++){
    console.log(mydetails[i])
    
}
for (var i of mydetails){
    console.log(i)
}
mydetails.forEach((Element)=>console.log(Element))