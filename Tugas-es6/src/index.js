import {sapa, biodata, checkScore, filterData} from './libs/soal'

const myArgs = process.argv;
const command = myArgs[2]; //sapa, biodata, checkScore

switch(command){
    case 'sapa': //soal 1
        console.log(sapa(myArgs[3]));
        break;
    case 'biodata': //soal 2
        console.log(biodata(myArgs[3], myArgs[4], myArgs[5]));
        break;
    case 'checkScore': //soal 3
        console.log(checkScore(myArgs[3]));
        break;
    case 'filterData':
        console.log(filterData(myArgs[3]));
        break;
    default:
        break;
}