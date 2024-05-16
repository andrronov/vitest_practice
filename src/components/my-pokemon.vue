<template>
<button @click="getPokemon">Get PKM</button>

<div v-for="(pokemon, idx) in pokemons" :key="idx">
   <p>{{ pokemon.name }}</p>
</div>
</template>

<script setup>
import {ref} from 'vue'
const pokemons = ref([])
async function getPokemon(){
   const data = await fetch('https://pokeapi.co/api/v2/pokemon')
   const pokemon = await data.json()
   console.log(pokemon)
   pokemons.value = pokemon.results
}
</script>

<style>

</style>