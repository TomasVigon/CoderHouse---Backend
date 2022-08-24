fs = require('fs') //si esto es una dependencia de terceros tengo que instalarla y ver la version
//version 1.0.0
// el num mas a la izquierda implica la major release
// el del medio la minor release, detalles de funcionamiento de la libreria
// el de la derercha representa los patches agregados
// instalo con npm i moment
// desinstalo con npm uninstall moment
// npm i moment@1.6.0 le indico q version instale
// iconos. 
//    ~ indica instalar hasta la version mas actual de patch
//    ^ indica instalar hasta la version mas actual de minor release
// npm outdated indica cual de todas las independecias estan desactualizadas
// npm update actualiza las librerias
fs.leerArchivoPlano(file)