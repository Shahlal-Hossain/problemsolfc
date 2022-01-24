// 0 - 1 kilometer = per kilometer 2 ta timi
// 2 - 5 k.m = per kilometer 25 ta timi
// 6 - 10 k.m = por k.m 30 ta timi
// 10 - infinity = por k.m 50 ta  timi;


function allKM(condition){

    let protiKMtimi = 2;
    let kilometerAllTimi = protiKMtimi * condition;

    if (condition > 2) {

        let newTimi = condition + 2;
        kilometerAllTimi = newTimi* 25 + 2;
        
    }

    if (condition > 6) {
        let newTimi = condition + 6;
        kilometerAllTimi = newTimi * 30 + 177;
    }

    if (condition > 10) {
        let newTimi = condition - 10;
        kilometerAllTimi = newTimi * 50 + 657;
    }

       return kilometerAllTimi
}
// console.log(allKM(4));


// Bus vara nirdharon
// 1 theke 10 kilometer = 5 SAR vara
// 11 theke 30  k.m     = 3  SAR vara
// 31 theke 50  k.m     = 1  SAR vara
// 51 theke all k.m     = 0.20 SAR vara 

const shahlalHossain = 1200 ; //(kilometer 220 S.R) Jizan to Riyadh ))

function busVara(array) {
    let narmalBusVara = 5;
    let allBusVara = narmalBusVara * array;

    if(array > 10){
        let calculatVara = array -10;
        allBusVara = (calculatVara * 3) + 50;
    }
    if (array > 30) {
        let calculatVara = array - 30;
        allBusVara = (calculatVara * 1 )+ 110;
    }
    if (array > 50) {
        const calculatVara = array - 50;
        allBusVara = (calculatVara * 0.18 )+ 130;
    }
    // if (array >700) {
    //     let calculatVara = array - 700;
    //     allBusVara = calculatVara * 0.18 +130;//this 
    // }
    return allBusVara
}

console.log(busVara(1200));
