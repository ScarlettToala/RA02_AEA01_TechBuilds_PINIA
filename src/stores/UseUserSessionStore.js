//Guarda el nombre del usuario y el perfil de github

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
    //dato que pudiera cambiar y vue debe tenerlo en cuenta
    //Si mañana cambiase el nombre de usuario, vue debe actualizar la vista userName.value = "María" cmabia en todos los sitios donde se use

    const userName = ref("Guest Builder")
    const githubProfile = ref("https://github.com/GuestBuilder")

    //usa el estado, puede modificarlo o usrlo, se lee el githubProfile y se abre una nueva pestaña.
    function visitGitHubProfile() {
        window.open(githubProfile.value, '_blank')
    }

    return { userName, githubProfile, visitGitHubProfile }
})
