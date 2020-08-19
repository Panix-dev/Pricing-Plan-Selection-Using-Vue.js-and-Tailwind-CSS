# Pricing Plan Selection Using Vue.js and Tailwind CSS

> A different approach to creating a UI for selecting subscription plans using Vue.js and Tailwind CSS for better user experience.

By combining the capabilities of a Javascript framework like Vue.js we can achieve extraordinarily functionalities replicating dropdowns, select boxes, etc. with our custom design providing the user unique user experience.

<br/>
<img src="https://pagapiou.com/images/vue-tailwind-pricing.png" title="Vue & Tailwind Pricing Selection" alt="Vue & Tailwind Pricing Selection">


## Table of Contents


> Try `clicking` on each of the `anchor links` below so you can get redirected to the appropriate section.


- [Tailwind CSS](#laravel-livewire)
- [App.vue](#appvue)
- [SelectablePlan.vue](#pelectableplanvue)
- [Contact Details](#contact-details)
- [Inspiration](#inspiration)


## Tailwind CSS


Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

- :link: [Tailwind CSS](https://tailwindcss.com/)


## App.vue


```javascript
<div class="md:w-custom mx-auto pt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
  <selectable-plan plan-name="Hobby" plan-gigs="1" plan-dollars="15" v-model="activePlan"></selectable-plan>
  <selectable-plan plan-name="Growth" plan-gigs="5" plan-dollars="25" v-model="activePlan"></selectable-plan>
  <selectable-plan plan-name="Business" plan-gigs="10" plan-dollars="50" v-model="activePlan"></selectable-plan>
  <selectable-plan plan-name="Enterprise" plan-gigs="20" plan-dollars="90" v-model="activePlan"></selectable-plan>
</div>
```


## SelectablePlan.vue


```javascript
export default {
	model: {
		prop: 'activePlan',
		event: 'onUpdatePlan'
	},
	props: [
		'planName',
		'planGigs',
		'planDollars',
		'activePlan'
	],
	methods: {
		updateActivePlan() {
			this.$emit('onUpdatePlan', this.planName)
		}
	}
}
```


## Contact Details


> :computer: [https://pagapiou.com](https://pagapiou.com)

> :email: [hello@pagapiou.com](mailto:hello@pagapiou.com)

> :iphone: [LinkedIn](https://www.linkedin.com/in/agapiou/)

> :iphone: [Instagram](https://www.instagram.com/panos_agapiou/)

> :iphone: [Facebook](https://www.facebook.com/panagiotis.agapiou)


## Inspiration


- **[Andre Madarang](https://www.youtube.com/channel/UCtb40EQj2inp8zuaQlLx3iQ)**
