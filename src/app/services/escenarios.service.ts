import { Injectable } from '@angular/core';

@Injectable()
export class EscenariosService {
    
    public lista_src_escenarios = [
        [	
            "../../assets/img/fotos_escenarios/escenario_fundadores_1.JPG",
            "../../assets/img/fotos_escenarios/escenario_fundadores_2.JPG",
            "../../assets/img/fotos_escenarios/escenario_fundadores_3.JPG",
            "../../assets/img/fotos_escenarios/escenario_fundadores_4.JPG",
		],
		[
			"../../assets/img/fotos_escenarios/escenario_cancha_bloque19_1.JPG",
			"../../assets/img/fotos_escenarios/escenario_cancha_bloque19_2.JPG",
            "../../assets/img/fotos_escenarios/escenario_cancha_bloque19_3.JPG",
            "../../assets/img/fotos_escenarios/escenario_cancha_bloque19_4.JPG",
		],
		[
            "../../assets/img/fotos_escenarios/escenario_polideportivo_1.JPG",
            "../../assets/img/fotos_escenarios/escenario_polideportivo_2.JPG",
            "../../assets/img/fotos_escenarios/escenario_polideportivo_3.JPG",
			"../../assets/img/fotos_escenarios/escenario_polideportivo_4.JPG",
        ],
        [
            "../../assets/img/fotos_escenarios/escenario_tenis_1.JPG",
            "../../assets/img/fotos_escenarios/escenario_tenis_2.JPG",
            "../../assets/img/fotos_escenarios/escenario_tenis_3.JPG",
            "../../assets/img/fotos_escenarios/escenario_tenis_4.JPG",
        ],
        [
            "../../assets/img/fotos_escenarios/escenario_placas_1.JPG",
            "../../assets/img/fotos_escenarios/escenario_placas_2.JPG",
            "../../assets/img/fotos_escenarios/escenario_placas_3.JPG",
            "../../assets/img/fotos_escenarios/escenario_placas_4.JPG",

		],
	]    
    
    prueba(nombre_prenda:string) {
        return nombre_prenda;
    } 

    getEscenarios(index) {
        return this.lista_src_escenarios[index];
    }
}