"use strict";
let viettel = [];
let mobifone = [];
let vinaphone = [];
let listPhoneNumber = ['0387201334', '0798726299', '0852721368'];
for (let i = 0; i < listPhoneNumber.length; i++) {
    if (listPhoneNumber[i].substring(0, 3) == '037' ||
        listPhoneNumber[i].substring(0, 3) == '038' ||
        listPhoneNumber[i].substring(0, 3) == '039') {
        viettel.push(listPhoneNumber[i]);
    }
    if (listPhoneNumber[i].substring(0, 3) == '070' ||
        listPhoneNumber[i].substring(0, 3) == '079' ||
        listPhoneNumber[i].substring(0, 3) == '077') {
        mobifone.push(listPhoneNumber[i]);
    }
    if (listPhoneNumber[i].substring(0, 3) == '085' ||
        listPhoneNumber[i].substring(0, 3) == '081' ||
        listPhoneNumber[i].substring(0, 3) == '082') {
        vinaphone.push(listPhoneNumber[i]);
    }
}
console.log(viettel);
console.log(mobifone);
console.log(vinaphone);
