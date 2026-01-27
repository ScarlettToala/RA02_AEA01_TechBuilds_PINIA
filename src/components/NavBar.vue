<script setup>
import { useUserStore } from '@/stores/UseUserSessionStore.js'

const userStore = useUserStore()

</script>

<template>
    <nav>
        <span>👤 {{ userStore.userName }}</span>
        <button @click="userStore.visitGitHubProfile">
            GitHub
        </button>
    </nav>
</template>
