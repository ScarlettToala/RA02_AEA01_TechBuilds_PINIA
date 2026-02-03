import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { groupBy } from 'lodash'
import { ref, computed } from 'vue'


export const useBuildStore = defineStore('build', () => {

    const items = useLocalStorage("arrayCart", [])

    /*===== G E T T E R S=====*/

    //Devuelve el total de items en el carrito
    const cantidad = computed(() => items.value.length)

    //Es un boolenao para saber si el carrito esta vacio 
    const isEmpty = computed(() => cantidad.value === 0)

    //Borrar pro name +typr 
    const clearItemByNameAndType = (name, type) => {
        items.value = items.value.filter(
            item => !(item.name === name && item.type === type)
        )
    }


    //Agrupar productos por el type
    const groupedByTypeAndName = computed(() => {

        const byType = groupBy(items.value, (item) => item.type)

        //Dentro de cada typo agrupamos por el nombre
        Object.keys(byType).forEach(type => {
            byType[type] = groupBy(byType[type], item => item.name)
        })

        //Ordenas alfabéticamente los nombres
        const sorted = Object.keys(byType).sort()

        //Devuelves el objeto ordenado
        let inOrder = {}
        sorted.forEach((key) => (inOrder[key] = byType[key]))

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

    //Vaciar carrito, $reset es un nombre especial de Pinia
    function $reset() {
        items.value = []
    }

    //Eliminar un producto por nombre
    const clearItem = (itemName) => (items.value = items.value.filter((item) => item.name != itemName))

    //Borra el producto y lo vuelve a agregar con la nueva cantidad.
    const setItemCount = (item, count) => {
        clearItem(item.name)
        add(count, item)
    }

    //Simular el check out
    function checkout() {
        //Comprobamos que existe algo
        if (items.value.length === 0) {
            alert("El carrito está vacío")
            return
        }

        // Simular pedido
        const order = {
            id: Date.now(),
            items: items.value,
            total: total.value,
            date: new Date().toISOString(),
        }

        console.log("Pedido enviado:", order)

        // Simula delay de API
        setTimeout(() => {
            alert("Compra realizada con éxito 🎉")
            items.value = [] // vaciar carrito
        }, 800)
    }

    return { items, add, cantidad, isEmpty, groupedByTypeAndName, $reset, total, clearItem, setItemCount, checkout, clearItemByNameAndType };
})
