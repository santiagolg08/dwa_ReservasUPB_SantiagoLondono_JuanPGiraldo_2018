import { Injectable } from '@angular/core';

@Injectable()
export class EscenariosService {
    
    public coleccion_ropa = ['Medias de colores', 'Camiseta Verde', 'Pantalones Azules']
    
    prueba(nombre_prenda:string) {
        return nombre_prenda;
    }

    addRopa(nombre_prenda:string):Array<string> {
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    deleteRopa(index:number) {
        this.coleccion_ropa.splice(index, 1);
        return this.getRopa();
    }

    getRopa() {
        return this.coleccion_ropa;
    }
}