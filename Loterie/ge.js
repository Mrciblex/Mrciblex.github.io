function ge(min,max){
    var nr1 = Math.round(Math.random() * (max - min) + min);
    var nr2 = Math.round(Math.random() * (max - min) + min);
    var nr3 = Math.round(Math.random() * (max - min) + min);
    var nr4 = Math.round(Math.random() * (max - min) + min);
    var nr5 = Math.round(Math.random() * (max - min) + min);
    var nr6 = Math.round(Math.random() * (max - min) + min);
}

const bge = document.getElementById("bge");


bge.addEventListener("click", function (){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
    var n5 = document.getElementById("n5").value;
    var n6 = document.getElementById("n6").value;
    var ng = document.getElementById("ng").value;
    var table = document.getElementById("tb");
    var rtable = document.getElementById("tbt");
    if(ng >= 1 && ng < 1001){ /* Génération vérif */
        if(n1 >= 1 && n1 <= 49 ){ /* N°1 vérif */
            if(n2 >= 1 && n2 <= 49 ){ /* N°2 vérif */
                if(n3 >= 1 && n3 <= 49 ){ /* N°3 vérif */
                    if(n4 >= 1 && n4 <= 49 ){ /* N°4 vérif */
                        if(n5 >= 1 && n5 <= 49 ){ /* N°5 vérif */
                            if(n6 >= 1 && n6 <= 10 ){ /* N°C vérif */
                                switch(n1){
                                    case n2:
                                        alert("Vous ne pouvez pas choisir deux fois le même numéro parmis les 5.");
                                        break;
                                    case n3:
                                        alert("Vous ne pouvez pas choisir deux fois le même numéro parmis les 5.");
                                        break;
                                    case n4:
                                        alert("Vous ne pouvez pas choisir deux fois le même numéro parmis les 5.");
                                        break;
                                    case n5:
                                        alert("Vous ne pouvez pas choisir deux fois le même numéro parmis les 5.");
                                        break;
                                    default:
                                        var bontot = 0;
                                        var gt = 0;
                                        var bonn1 = 0;
                                        var bonn2 = 0;
                                        var bonn3 = 0;
                                        var bonn4 = 0;
                                        var bonn5 = 0;
                                        var bonn6 = 0;
                                        for(let i=1; i <= ng; i++){
                                            var bonn = 0;
                                            var bonnc = 0;
                                            var g = 0;
                                            
                                            var nr1 = Math.round(Math.random() * (49 - 1) + 1);
                                            var nr2 = Math.round(Math.random() * (49 - 1) + 1);
                                            var nr3 = Math.round(Math.random() * (49 - 1) + 1);
                                            var nr4 = Math.round(Math.random() * (49 - 1) + 1);
                                            var nr5 = Math.round(Math.random() * (49 - 1) + 1);
                                            var nr6 = Math.round(Math.random() * (10 - 1) + 1);
                                            
                                            if(n1==nr1){
                                                var bonn = bonn + 1;
                                                var bontot = bontot + 1;
                                                var bonn1 = bonn1 + 1
                                            }; 
                                            if(n2==nr2){
                                                var bonn = bonn + 1;
                                                var bontot = bontot + 1;
                                                var bonn2 = bonn2 + 1
                                            };
                                            if(n3==nr3){
                                                var bonn = bonn + 1;
                                                var bontot = bontot + 1;
                                                var bonn3 = bonn3 + 1
                                            };
                                            if(n4==nr4){
                                                var bonn = bonn + 1;
                                                var bontot = bontot + 1;
                                                var bonn4 = bonn4 + 1
                                            };
                                            if(n5==nr5){
                                                var bonn = bonn + 1;
                                                var bontot = bontot + 1;
                                                var bonn5 = bonn5 + 1
                                            };
                                            if(n6==nr6){
                                                var bonnc = bonnc + 1;
                                                var bontot = bontot + 1;
                                                var bonn6 = bonn6 + 1
                                            };
                                            /*- Calculs -*/
                                            if(bonn == 5 && bonnc == 1){
                                                var g = 2000000;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 5 && bonnc == 0){
                                                var g = 100000;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 4 && bonnc == 1){
                                                var g = 1000;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 4 && bonnc == 0){
                                                var g = 400;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 3 && bonnc == 1){
                                                var g = 50;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 3 && bonnc == 0){
                                                var g = 20;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 2 && bonnc == 1){
                                                var g = 10;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 2 && bonnc == 0){
                                                var g = 4.40;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 1 && bonnc == 1){
                                                var g = 2.20;
                                                var gt = gt + g;
                                            }
                                            else if(bonn == 0 && bonnc == 1){
                                                var g = 2.20;
                                                var gt = gt + g;
                                            }
                                            else {
                                            };
                                            /*- Tableau -*/
                                            let template =`
                                                        <tr>
                                                            <td>${nr1}</td>
                                                            <td>${nr2}</td>
                                                            <td>${nr3}</td>
                                                            <td>${nr4}</td>
                                                            <td>${nr5}</td>
                                                            <td>${nr6}</td>
                                                            <td>${g+"$"}</td>
                                                        </tr>
                                                            `;
                                            table.innerHTML += template;
                                            };
                                        var gt = Math.round(gt)
                                        let rtemplate =`
                                                    <tr>
                                                        <td>${bonn1}</td>
                                                        <td>${bonn2}</td>
                                                        <td>${bonn3}</td>
                                                        <td>${bonn4}</td>
                                                        <td>${bonn5}</td>
                                                        <td>${bonn6}</td>
                                                        <td>${gt+"$"}</td>
                                                    </tr>
                                                            `;
                                        rtable.innerHTML += rtemplate;
                                };
                            }
                            else /* N°C vérif */
                            alert("Le numéro chance est compris entre 1 à 10 inclus.                             Votre numéro chance n'est pas inclus.");
                
                        }
                        else /* N°5 vérif */
                        alert("Les numéros vont de 1 à 49 inclus et le numéro chance de 1 à 10.           Votre numéro 5 n'est pas inclus.");
                
                    }
                    else /* N°4 vérif */
                    alert("Les numéros vont de 1 à 49 inclus et le numéro chance de 1 à 10.           Votre numéro 4 n'est pas inclus.");
                
                }
                else /* N°3 vérif */
                alert("Les numéros vont de 1 à 49 inclus et le numéro chance de 1 à 10.           Votre numéro 3 n'est pas inclus.");
            
            }
            else /* N°2 vérif */
            alert("Les numéros vont de 1 à 49 inclus et le numéro chance de 1 à 10.           Votre numéro 2 n'est pas inclus.");
        
        }
        else /* N°1 vérif */
        alert("Les numéros vont de 1 à 49 inclus et le numéro chance de 1 à 10.           Votre numéro 1 n'est pas inclus.");
    }
    else /* Génération vérif */
    alert("Il doit y avoir au moin une génération et pas plus de 1000.");
});