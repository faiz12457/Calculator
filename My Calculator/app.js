let button= document.querySelectorAll("button");
let input= document.querySelector("input");
let string="";


button.forEach((val)=>{
   // console.log(val);
    val.addEventListener("click",(evt)=>{
        if(evt.target.innerHTML =='=' && input.value ==""){
            input.value="Error";
            
        }
          else if(evt.target.innerHTML =='='){
            try{
           string=eval(string);
            input.value=string;

            }
            catch(error){
                input.value="Error";
                string="";
        
        
            }


        }
        else if(evt.target.innerHTML =='AC'|| evt.target.innerHTML =='DEL'){
               string="";
               input.value=string;

        }
        else{
        
            
            let value=val.innerHTML;
        
            string+=value;
            input.value=string;
            //console.log(string)
        }



        





    })

   






})