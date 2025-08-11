while(true){
    var a=parseInt(prompt("Enter First Number"));
    var b=parseInt(prompt("Enter second Number"));
    var op=prompt("Enter operator");
    var res;
    if(op==='+'){
        res=a+b;
        document.getElementById('output').innerHTML+='ouput is' +res;
        break;
    }
    else if(op==='-'){
        res=a-b;
        document.getElementById('output').innerHTML+='ouput is' +res;
        break;
    }
    
     else if(op==='*'){
        res=a*b;
         document.getElementById('output').innerHTML+='ouput is' +res;
        break;
    }
    
    else if(op==='/'){
        res=a/b;
        document.getElementById('output').innerHTML+='ouput is' +res;
        break;
    }
    
    else {
      res="Invalid Operator";
    }
    }
