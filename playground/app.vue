<template>
  <UHeader
    :links="links"
  >
    <UColorButton />
  </UHeader>

  <ULink
    to="/elements/link"
    active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
  >
    Link
  </ULink>
</template>

<script setup lang="ts">
const links = [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: '/getting-started'
}, {
  label: 'Playground',
  icon: 'i-simple-icons-stackblitz',
  to: '/playground'
}, {
  label: 'Roadmap',
  icon: 'i-heroicons-academic-cap',
  to: '/roadmap'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro',
  children: [{
    label: 'Features',
    to: '/pro#features',
    exactHash: true,
    icon: 'i-heroicons-beaker',
    description: 'Discover all the features of Nuxt UI Pro.'
  }, {
    label: 'Pricing',
    to: '/pro#pricing',
    exactHash: true,
    icon: 'i-heroicons-credit-card',
    description: 'A simple pricing, for solo developers or teams.'
  }, {
    label: 'Guide',
    to: '/pro/guide',
    icon: 'i-heroicons-book-open',
    description: 'Learn how to use Nuxt UI Pro in your app.'
  }, {
    label: 'Components',
    to: '/pro/components',
    icon: 'i-heroicons-cube-transparent',
    description: 'Discover all the components available in Nuxt UI Pro.'
  }]
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>




