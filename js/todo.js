function jsonTest(){

    var xobj = new XMLHttpRequest();
    //xobj.overrideMimeType("application/json");

    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            var json = JSON.parse(this.responseText);
           // json1 = json;
            console.log(json.todoList.length);
            //alert(json.todoList.length);
            tableCreate(json);
           // tableCreate();

            // var x = json[0].name;
            // alert(x);
            //  var ul = document.getElementById("myUL");
            //     for(var k = 0 ; k<json.length ; k++)
            //     {
            //         var li = document.createElement("li");
            //         var text = document.createTextNode(json[k].name);
            //         li.appendChild(text);
            //         ul.appendChild(li);
            //     }
            // }
        }
    };
    xobj.open('GET', 'js/Data/todoData.json', true); // Replace 'my_data' with the path to your file
    xobj.send();
}

function tableCreate(){
    //var

    var divElement = document.createElement("Div");
    divElement.className = "tableDivCss";
    divElement.id = "tableDiv";


    var body = document.body,
        tbl  = document.createElement('table');

    //div.id = "divId";
    tbl.id = "taId";
    tbl.style.width  = '100%';
    tbl.style.border = '1px solid black';
    tbl.style.padding = '10px';

   //var json1 = jsonTest();

//console.log("2" + json1.todoList.length);

    for(var i = 0; i <= json1.todoList.length; i++){
        var tr = tbl.insertRow();
        if(i==0) {
            for(var j = 0; j < 4; j++){
                if(j == 0){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode("Author"));
                    td.style.border = '1px solid black';
                    td.style.backgroundColor = "Black";
                }if(j == 1){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode("TODO ITEM"));
                    td.style.border = '1px solid black';
                    td.style.backgroundColor = "Black";
                }if(j == 2){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode("CREATED DATE"));
                    td.style.border = '1px solid black';
                    td.style.backgroundColor = "Black";
                }if(j == 3){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode("TODO TITLE"));
                    td.style.border = '1px solid black';
                    td.style.backgroundColor = "Black";
                }

            }
        }else{
            for(var j = 0; j < 4; j++){
                if(j == 0){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(json1.todoList[i-1].author));
                    td.style.border = '1px solid black';
                }if(j == 1){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(json1.todoList[i-1].item));
                    td.style.border = '1px solid black';
                }if(j == 2){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(json1.todoList[i-1].DATE));
                    td.style.border = '1px solid black';
                }if(j == 3){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(json1.todoList[i-1].title));
                    td.style.border = '1px solid black';
                }

            }
        }
    }
    //body.appendChild(tbl);
    divElement.appendChild(tbl);
    body.appendChild(divElement);

}
//document.onload(tableCreate());

function newElement() {

    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var inputValue1 = document.getElementById("myInput1").value;
    var inputValue2 = document.getElementById("myInput2").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } /*else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";*/

    /*var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }*/
    var d = new Date();
    var month  = d.getMonth() + 1;
    var date  = d.getDate();
    var year  = d.getFullYear();
    var dateFull  = month +"-"+ date +"-"+ year;


    var tbl = document.getElementById("taId");
    for(var i = 0; i < 1; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j <4; j++){
            if(j == 0){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(inputValue));
                td.style.border = '1px solid black';
            }
            if(j == 1){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(inputValue1));
                td.style.border = '1px solid black';
            }if(j == 2){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(dateFull));
                td.style.border = '1px solid black';
            }if(j == 3){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(inputValue2));
                td.style.border = '1px solid black';
            }

        }
    }
/*
    var test = document.getElementById("taId");
    var newRow = test.insertRow();
    var td = tr.insertCell();
    newRow.appendChild(document.createTextNode(inputValue));
    newRow.style.border = '1px solid black';
    var td = tr.insertCell();
    newRow.appendChild(document.createTextNode(inputValue));
    newRow.style.border = '1px solid black';*/

}




