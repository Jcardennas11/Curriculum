var array;

function cargarpagina(){
     array = [
        {nombre:"juan",codigo:"192070",doc:"123456",prog:"ing. de sistemas"},
        {nombre:"Johan",codigo:"192070",doc:"123456",prog:"ing. de sistemas"},
        {nombre:"alberto",codigo:"192070",doc:"123456",prog:"ing. de sistemas"}
    ];
    console.log(array);
}

function calcular(){
    var nombre = $("#nombre").val();
    for(let i =0;i<array.length;i++){
        if(nombre==array[i].nombre){
            console.log("EL NOMBRE ENCONTRADO ES: " +nombre);
            break;
            
        }else{
            console.log("QUE PASA MANI "+nombre+ " ESO NO EXISTE ");
        }

    }
    
    
}