
let randomno1 = () =>{
    const hex = "1234567890ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        
        let random = (Math.floor(Math.random()*16));
        let randomno = hex[random];
        color += randomno;
    }

    return color;
    

} ;






