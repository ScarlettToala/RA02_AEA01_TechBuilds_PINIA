/* ### 3.2 Catàleg
Crea una store HardwareStore.
Ha de tenir una acció loadHardware() que importi dinàmicament el fitxer hardware.json (simulant una API). */

import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useHardwareStore = defineStore('hardwareStore', () =>{
    
    //Guadamos los componentes de hardware
    const hardware = ref([])
    //simula la carga de datos
    const loading = ref(false)

    /*Función*/
    async function loadHardware(){
        loading.value = true //conforme ha entrado

        //Importa dinámicamente el json devolviendo una promesa
        const data = await import('@/data/hardware.json')
        hardware.value = data.default
        // data.default recibe un array con los objetos del jsonpero se ve de etsa forma {default:[{producto},{producto},...]}
        loading.value = false //Vuelve al estado inicial
    }

    return {hardware, loading, loadHardware}
})