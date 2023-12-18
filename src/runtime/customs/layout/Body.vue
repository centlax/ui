<template>
  <div id="div.layout">
    <header id="slot.header">
      <slot name="header" />
    </header>
    <main id="slot.main">
      <slot />
    </main>
    <footer id="slot.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
