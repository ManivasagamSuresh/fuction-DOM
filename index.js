var first=label("label","for","first","First Name");
var br1=linebreaker("br");
var inp1=inputelement("input","type","text","id","first");
var br2=linebreaker("br");

var second=label("label","for","middle","Middle Name");
var br3=linebreaker("br");
var inp2=inputelement("input","type","text","id","middle");
var br4=linebreaker("br");

var third=label("label","for","last","Last Name");
var br5=linebreaker("br");
var inp3=inputelement("input","type","text","id","Last");
var br6=linebreaker("br");

var fourth=label("label","for","mail","Mail id");
var br7=linebreaker("br");
var inp4=inputelement("input","type","email","id","mail");
var br8=linebreaker("br");

var fifth=label("label","for","contact","Contact No.");
var br9=linebreaker("br");
var inp5=inputelement("input","type","number","id","contact");
var br10=linebreaker("br");

document.body.append(first,br1,inp1,br2,second,br3,inp2,br4,third,br5,inp3,br6,fourth,br7,inp4,br8,fifth,br9,inp5,br10);



function label(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
     ele.innerHTML=content;
     return ele;
   
    }
   
    function linebreaker(element){
    var ele=document.createElement(element);
    return ele;
    }
    
  
    function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
    
    }
