while(true){
    var a=parseInt(prompt("Enter First Number"));
    var b=parseInt(prompt("Enter second Number"));
    var op=prompt("Enter operator");
    var res;
    if(op.toLowerCase()==='exit'){
        console.log('Calculator Closed');
        break;
    }
    if(op==='+'){
        res=a+b;
    }
    else if(op==='-'){
        res=a-b;
    }
    
     else if(op==='*'){
        res=a*b;
    }
    
    else if(op==='/'){
        res=a/b;
    }
    
    else {
      res="Invalid Operator";
    }
    console.log("output :",res)
    }