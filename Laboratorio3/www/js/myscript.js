/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function funcion(expresion,target){
    var valor =expresion;
    functionPlot({
        title: "grafico de la curva",
        target: target,
        data: [{
            fn: valor
        }]
    });
}

function evaluar(){
    var a=parseInt(document.getElementById("a").value);
    var resultado=document.getElementById("resultado1");
    if(a===0){
        resultado.innerHTML="Error: A no puede ser 0.";
        return;
    }
    var b=parseInt(document.getElementById("b").value);
    var c=parseInt(document.getElementById("c").value);
    var delta=b*b-4*a*c;
    if(delta<0){
        resultado.innerHTML="Solucion Imaginaria.";
    }
    if(delta===0){
        resultado.innerHTML="Solucion Unica.";
        var sol=(-b/(2*a));
        resultado.innerHTML+=" X = "+sol;
    }
    if(delta>0){
        resultado.innerHTML="Solucion de dos raices.";
        var sol1=(-b+Math.sqrt(delta))/(2*a);
        var sol2=(-b-Math.sqrt(delta))/(2*a);
        resultado.innerHTML+=" X1 = "+sol1+" X2 = "+sol2;
    }
    funcion(a+"x^2+"+b+"x+"+c,"#resultado1");
}

function solTrian(){
    var resultado=document.getElementById("resultado2");
    var a=document.getElementById("co").value;
    var b=document.getElementById("ca").value;
    var c=document.getElementById("hip").value;
    if(c==="X"){
        var co=parseInt(a);
        var ca=parseInt(b);
        if(co<=0||ca<=0){
            resultado.innerHTML="Este Triangulo no se puede realizar";
            return;
        }
        resultado.innerHTML="La hipotenusa vale: "+Math.sqrt(co*co+ca*ca);
        functionPlot({
            target: '#resultado2',
            data: [{
                points: [
                    [0,0],
                    [ca,0],
                    [ca,co],
                    [0,0]
                ],
                fnType: 'points',
                graphType: 'polyline'
            }]
        });
    }
    if(a==="X"){
        var hip=parseInt(c);
        var ca=parseInt(b);
        var sol=hip*hip-ca*ca;
        if(sol<=0){
            resultado.innerHTML="Este Triangulo no se puede realizar";
            return;
        }
        var co=Math.sqrt(sol);
        resultado.innerHTML="El Cateto Opuesto vale: "+co;
        functionPlot({
            target: '#resultado2',
            data: [{
                points: [
                    [0,0],
                    [ca,0],
                    [ca,co],
                    [0,0]
                ],
                fnType: 'points',
                graphType: 'polyline'
            }]
        });
    }
    if(b==="X"){
        var hip=parseInt(c);
        var co=parseInt(a);
        var sol=hip*hip-co*co;
        if(sol<=0){
            resultado.innerHTML="Este Triangulo no se puede realizar";
            return;
        }
        resultado.innerHTML="El Cateto Adyacente vale: "+Math.sqrt(sol);
        var ca=Math.sqrt(sol);
        resultado.innerHTML="El Cateto Opuesto vale: "+ca;
        functionPlot({
            target: '#resultado2',
            data: [{
                points: [
                    [0,0],
                    [ca,0],
                    [ca,co],
                    [0,0]
                ],
                fnType: 'points',
                graphType: 'polyline'
            }]
        });
    }
}

function hiden(num){
    for(var i=0;i<document.querySelectorAll("div").length;i++){
        document.querySelectorAll("div")[i].classList.add("hide");
    }
    for(var i=0;i<document.querySelectorAll(".resultado").length;i++){
        document.querySelectorAll(".resultado")[i].classList.remove("hide");
    }
    document.querySelectorAll("div")[num].classList.remove("hide");
}
