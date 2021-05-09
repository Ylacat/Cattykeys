// Created by Tacaly - aka Frederick Ambo
const lockSystem = require('lock-system');

if (window.focus == true){
    enableKeys()
}
if (window.focus == false){
    disableKeys()
    lockSystem();
}
