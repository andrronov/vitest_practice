import {render, screen} from "@testing-library/vue";
import {describe, test, expect} from 'vitest';
import MyPokemon from '../my-pokemon.vue'

describe("my-pokemon", () => {
   const viewText = "Hello from inside a view"
   test('render span correctly', async () => {
      render(MyPokemon)
      const pokemon = await screen.findByText('Get Pokemon')
      await fireEvent.click(pokemon)
      const value = await screen.findByText('bulbasaur')
      expect(value.innerHTML).toBe('bulbasaur')
   })
})