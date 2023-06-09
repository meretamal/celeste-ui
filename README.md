<p align="center"><img src="https://raw.githubusercontent.com/meretamal/celeste-ui/main/assets/logo.png" /></p>

<h1 align="center">The Vue component library you were waiting for</h1>
<br />

<p>
Celeste UI is a library with predesigned Vue 3 components still in development. If you want to help finish this project, please follow the <a href="https://github.com/meretamal/celeste-ui/blob/main/CONTRIBUTING.md">CONTRIBUTING</a> guide.
</p>

<h2>Table of contents</h2>
<ul>
  <li><a href="#Documentation">Documentation</a></li>
  <li><a href="#Installation">Installation</a></li>
  <li><a href="#Usage">Usage</a></li>
</ul>

<h3 id="Documentation">Documentation</h3>
<p>A documentation is still being developed. For now, you can check out the deployed storybook build <a href="https://delicate-rolypoly-ac40db.netlify.app/">here</a>.</p>

<h3 id="Installation">Installation</h3>
<p>
First, install the necessary packages. This library uses <a href="https://emotion.sh/docs/@emotion/css">@emotion/css</a> to handle the component styles, so it must also be installed:
</p>

<h4>NPM</h4>

```bash
npm install celeste-ui @emotion/css
```

<h4>Yarn</h4>

```bash
yarn add celeste-ui @emotion/css
```

Finally, install the Lato font. For this, you can use Google Web Fonts:

<h4>link</h4>

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
```

<h4>@import</h4>

```html
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
</style>
```

<h3 id="Usage">Usage</h3>

<p>To start using the components, please follow these steps:</p>

1. Wrap your application with the `CThemeProvider`
```html
<template>
  <CThemeProvider>
    <!-- The rest of your app -->
  </CThemeProvider>
</template>
<script setup lang="ts">
import { CThemeProvider } from 'celeste-ui';
</script>
```

1. Now you can start using components like so!:
```html
<template>
  <CButton>Click me!</CButton>
</template>
<script setup lang="ts">
import { CButton } from 'celeste-ui';
</script>
```
