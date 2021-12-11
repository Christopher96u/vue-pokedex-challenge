import { shallowMount } from "@vue/test-utils";
import MainButton from "@/components/buttons/mainButton.vue";

describe("MainButton.vue", () => {
    it("Should have the active class when button is active", () => {
        const wrapper = shallowMount(MainButton, {
            propsData: { active: true },
        });
        expect(wrapper.classes()).toContain("active");
        expect(wrapper.classes()).not.toContain("disabled");
    });
    it("Should have disabled class when button is disabled, and not contain active class ", () => {
        const wrapper = shallowMount(MainButton, {
            propsData: { active: false },
        });
        expect(wrapper.classes()).toContain("disabled");
        expect(wrapper.classes()).not.toContain("active");
    });
    it("Should have block class if block prop is true", () => {
        const wrapper = shallowMount(MainButton, {
            propsData: { block: true },
        });
        expect(wrapper.classes()).toContain("block");
    });
    it("Shouldnt have block class if block prop is false", () => {
        const wrapper = shallowMount(MainButton, {
            propsData: { block: false },
        });
        expect(wrapper.classes()).not.toContain("block");
    });
    it("Shouldnt render <i> element if iconName prop is null", () => {
        const wrapper = shallowMount(MainButton, {
            propsData: { iconName: null },
        });
        expect(wrapper.find("i").exists()).toBe(false);
    });
    it("Shouldnt render <i> element if button hasnt a valid iconName('arrow-icon') as example", () => {
        const wrapper = shallowMount(MainButton, {
            propsData: { iconName: "arrow" },
        });
        expect(wrapper.find("i").exists()).toBe(false);
    });
});
