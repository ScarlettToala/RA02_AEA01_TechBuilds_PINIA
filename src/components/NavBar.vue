<script setup>
import { useUserSessionStore } from '@/stores/UseUserSessionStore.js'

const userStore = useUserSessionStore()

</script>

<template>
    <nav>
        <span>👤 {{ userStore.userName }}</span>
        <button @click="userStore.visitGitHubProfile">
            GitHub
        </button>
    </nav>
</template>

<style scoped>
nav{
    width: 98%; 
    background-color: rgb(219, 180, 255);
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

span{
    margin-bottom: 5px;
}
button {
  padding: 10px 20px;
  border: rgb(247, 244, 65) solid 1px;
  color: rgb(39, 60, 255);

  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(247, 244, 65);
}

button:active {
  background-color: #3e8e41;
}
</style>