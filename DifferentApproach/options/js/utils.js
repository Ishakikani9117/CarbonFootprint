/**
 * Created by Kolpa on 18.04.2016.
 */

var Utils = {};

Utils.Converter = {};

Utils.Converter.constants = {
    KM_TO_KM: 1.0,
    KM_TO_MI: 0.621371,
    L_TO_L: 1.0,
    L_TO_GAL: 0.264172,
    G_TO_G: 1.0,
    G_TO_KG: 0.001,
    G_TO_LBS: 0.00220462
};

Utils.Converter.getConstant = function (unit) {
    switch(unit) {
        case 'g'  : return this.constants.G_TO_G;
            break;
        case 'kg' : return this.constants.G_TO_KG;
            break;
        case 'lbs': return this.constants.G_TO_LBS;
            break;
        case 'km' : return this.constants.KM_TO_KM;
            break;
        case 'mi' : return this.constants.KM_TO_MI;
            break;
        case 'L'  : return this.constants.L_TO_L;
            break;
        case 'gal': return this.constants.L_TO_GAL;
            break;
        default :  return  -1;
    }
};

Utils.Converter.convert = function (value,prevN,curN,prevD,curD) {
    // conversion should take place if previous numerator and new numerator are different
    // Conversion for numerator
    if(prevN != curN) {
        value = ( value / this.getConstant(prevN) ) * this.getConstant(curN) ;
    }
    // Conversion for denominator
    if(prevD != curD) {
        value = ( value * this.getConstant(prevD) ) / this.getConstant(curD) ;
    }
    return  value;
};