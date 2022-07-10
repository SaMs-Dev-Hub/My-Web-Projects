console.log("hello")
var inputByid= $("#input");
console.log(inputByid)
var emptykey="";
function keyupListener(e){
    console.log(e.target.value)
  emptykey=e.target.value

}

inputByid.on("keyup",keyupListener);
var form=$("#form");
var ol=$("#ullist");
function onsubmitHandler(e){
    e.preventDefault();
    var list=$("<li>");
    list.css({
        color:'red',
      

    
    })
    list.text(emptykey);
    ol.append(list);
    inputByid.val("");


    console.log("submit is triggred");
}



form.on("submit",onsubmitHandler)

function ondelethandler (){
    $(this).closest('list').remove()
  };
  form.on('click','.delete',ondelethandler) 