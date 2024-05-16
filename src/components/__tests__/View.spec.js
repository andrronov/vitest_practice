import {render, screen} from "@testing-library/vue";
import {describe, test, expect} from 'vitest';
import View from '/src/View.vue'

describe("View", () => {
   const viewText = "Hello from inside a view"
   test('render span correctly', async () => {
      const viewId = 'viewId'
      render(View, {
         props: {element: "span", id: viewId},
         slots: {default: viewText}
      })

      const view = await screen.findByText(viewText)
      expect(view.id).toBe(viewId)
      expect(view.innerHTML).toBe(viewText)

   })
   test('snapshot matches', () => {
      const wrapper = render(View, {props: {element: 'div'}})
      expect(wrapper).toMatchSnapshot();
   })
})