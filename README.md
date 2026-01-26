# RA02_AEA01_TechBuilds

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
---
# RA02_AEA01_TechBuilds

## 3. Funcionalitats obligatòries
### 3.1 Gestió d’usuari
Crea una store UserSessionStore que guardi el nom de l'usuari actual (per defecte "Guest Builder").
Afegeix una acció per visitar el perfil de GitHub de l'usuari (similant el Twitter de l'exemple).

### 3.2 Catàleg
Crea una store HardwareStore.
Ha de tenir una acció loadHardware() que importi dinàmicament el fitxer hardware.json (simulant una API).

### 3.3 El Muntatge del PC
Crea la BuildStore. Aquesta serà el cor de l'app.
Estat: Ha de tenir un array components (buit inicialment).
Persistència: Fes servir useLocalStorage perquè el muntatge no es perdi en recarregar. (Encara no està explicat)
Getters:
totalPrice: Suma dels preus.
groupedByType: Fes servir lodash per agrupar els items per la seva propietat type. (Així al carret es veuran separats: CPUs juntes, GPUs juntes).
Accions: addComponent, removeComponent, checkout.

### 3.4 Components Visuals
NavBar.vue: Has d'implementar la barra de navegació superior per mostrar el nom de l'usuari. Objectiu: 
ComponentCard.vue: Un component senzill que rep un objecte component i emet l'esdeveniment add quan es clica.
CurrentBuildWidget.vue: Un component que mostri el resum del PC i obrir un modal amb els components agrupats per tipus.
