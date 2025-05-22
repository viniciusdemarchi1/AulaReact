export default function Exercicio4({ tipo, base, altura }) {
    
    let area;


    if (tipo == "triangulo") 
    {
        area = Number(base * altura / 2);

      
           
    } 
    else if (tipo == "retangulo") {
        area = Number(base * altura);
        
    }

    return(
        <div>
           o poligno {tipo} de base {base} e a altura {altura} possui a Area {area}
        </div>   
       );


}