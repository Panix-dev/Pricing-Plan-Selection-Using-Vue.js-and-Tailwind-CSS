<template>
  <div id="app" class="min-h-screen bg-gray-100 font-sans">

    <div class="md:w-custom mx-auto pt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <selectable-plan plan-name="Hobby" plan-gigs="1" plan-dollars="15" v-model="activePlan"></selectable-plan>
      <selectable-plan plan-name="Growth" plan-gigs="5" plan-dollars="25" v-model="activePlan"></selectable-plan>
      <selectable-plan plan-name="Business" plan-gigs="10" plan-dollars="50" v-model="activePlan"></selectable-plan>
      <selectable-plan plan-name="Enterprise" plan-gigs="20" plan-dollars="90" v-model="activePlan"></selectable-plan>
    </div>

    <div class="container mx-auto mt-10 pb-12">
      <pricing-table></pricing-table>
    </div>

  </div>
</template>

<script>
import SelectablePlan from './components/SelectablePlan.vue'
import PricingTable from './components/PricingTable.vue'
import './assets/css/main.css'

export default {
  name: 'App',
  components: {
    SelectablePlan,
    PricingTable
  },
  data() {
    return {
      activePlan: ''
    }
  }
}
</script>

<style>

</style>
