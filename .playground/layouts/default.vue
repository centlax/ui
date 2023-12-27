<template>
  <section>
     <UHeader :links="links" >
      <template #right>
        <UColorPicker />
        <UColorButton color="gray" />
      </template>
    </UHeader>
    <slot/>
  </section>
</template>
<script setup lang="ts">
const links = computed(() => {
  return [{
    label: 'People',
    icon: 'i-fluent-people-team-24-regular',
    to: '/about'
  }, {
    label: 'Goods',
    icon: 'i-fluent-food-apple-24-regular',
    to: '/about'
  }, {
    label: 'Services',
    icon: 'i-fluent-service-bell-24-regular',
    to: '/about'
  }, {
    label: 'Depot',
    icon: 'i-fluent-apps-24-regular',
    to: '/about',
    children: [{
      label: 'Features',
      to: '/about#features',
      exactHash: true,
      icon: 'i-heroicons-beaker',
      description: 'Discover all the features of Nuxt UI Pro.'
    }, {
      label: 'Pricing',
      to: '/about#pricing',
      exactHash: true,
      icon: 'i-heroicons-credit-card',
      description: 'A simple pricing, for solo developers or teams.'
    }]
  }].filter(Boolean)
})
</script>
