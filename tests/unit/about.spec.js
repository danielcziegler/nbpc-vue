import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  it("renders expected text", () => {
    const wrapper = shallowMount(About, {
      propsData: {},
    });
    const expected = "Welcome to the New Bradwell Parish Council Webpage";
    expect(wrapper.text()).toMatch(expected);
  });
});
