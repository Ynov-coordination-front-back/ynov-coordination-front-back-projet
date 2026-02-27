<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="error-page">
    <div class="error-code">500</div>
    <h1 class="error-title">Erreur serveur</h1>
    <p class="error-message">
      Une erreur inattendue s'est produite côté serveur. L'équipe technique a été notifiée.
    </p>
    <div class="error-actions">
      <button class="btn btn-primary" @click="router.push('/')">Retour à l'accueil</button>
      <button class="btn btn-secondary" @click="router.go(0)">Réessayer</button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
  gap: 1rem;
}

.error-code {
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  color: #e53e3e;
  letter-spacing: -0.05em;
}

.error-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
}

.error-message {
  font-size: 1rem;
  color: var(--color-text);
  max-width: 420px;
  margin: 0;
}

.error-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.85;
}

.btn-primary {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border-hover);
}
</style>
