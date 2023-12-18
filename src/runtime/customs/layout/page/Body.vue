<template>
  <div class="h-screen">
    <header id="div.header">
      <slot name="header" />
    </header>
    <main id="div.main" class="h-full">
      <slot />
    </main>
    <footer id="div.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
