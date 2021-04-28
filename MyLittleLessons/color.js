// Document.ready(function () {
    function changeColor(element) {
        let currentColor = element.style.backgroundColor;
        var lastColor;
        if (currentColor != 'yellow')
            lastColor = currentColor;
        console.log(currentColor);
    
        if(currentColor == 'red' || currentColor == 'green'){
            element.style.backgroundColor = 'yellow';
        }
        else if(currentColor == 'yellow'){
            console.log('4444',lastColor);
            if(lastColor == 'red')
                element.style.backgroundColor = 'green';
            else
                element.style.backgroundColor = 'red';
        }
        else{
            element.style.backgroundColor = 'red';
        }
        
    }
// })
    




// function changeColor(element) {
//     var currentColor = element.style.backgroundColor;
//     if(currentColor == "red" || currentColor == "green" ){
//        const color={"last":currentColor} ;
//        element.style.backgroundColor = "yellow";
//     } else if(currentColor == "yellow" && color.last!="red" ) {
//        element.style.backgroundColor = "red"; 
//     } else if (current Color == "yellow" && color.last!="green"){
// element.style.backgroundColor = "green" 
//     } 
//  }