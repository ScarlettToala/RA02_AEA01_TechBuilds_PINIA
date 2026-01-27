import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash' //Agrupa lso productos por el nombre 

//Store del carrito
export const useLocalStorage = defineStore('cartStore', () => {
    
    const items = ref([])

    /*===== G E T T E R S=====*/
    
    //Devuelve el total de items en el carrito
    const cantidad = computed(() => items.value.length)
    
    //Es un boolenao para saber si el carrito esta vacio 
    const isEmpty = computed(() => cantidad.value === 0)
    
    //Agrupar productos por el nombre
    const grouper = computed(() =>{ 
       const gruper = groupBy(items.value, (item) => item.name)
       
       //Ordenas alfabéticamente los nombres
       const sorted = Object.keys(gruper).sort()
       
       //Devuelves el objeto ordenado
       let inOrder = {}
       sorted.forEach((key)=>(inOrder[key]= gruper[key]))
       
       return inOrder
    })
    
    //Suma todos los precios 
    const total = computed(() => items.value.reduce((acumulador, elemento) => acumulador + elemento.price, 0))


    /*============= A C T I O N S ===============*/
    
    //agregar productos (cont es la cantidad)
    function add(cont, item) {

        for (let index = 0; index < cont; index++) {
            items.value.push(item)
        }
    }

    /*function cantidad(){
            return items.value.length
        }*/

//Vaciar carrito, $reset es un nombre especial de Pinia
    function $reset() {
        items.value = []
    }

	//Eliminar un producto por nombre
    const clearItem = (itemName) => (items.value = items.value.filter((item)=> item.name != itemName))

//Borra el producto y lo vuelve a agregar con la nueva cantidad.
    const setItemCount = (item,count) => {
        clearItem(item.name)
        add(count,item)
    } 

    return { items, add, cantidad, isEmpty, grouper, $reset, total, clearItem, setItemCount};
})