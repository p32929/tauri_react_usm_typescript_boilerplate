# tauri_react_usm_typescript_boilerplate

A starter template for desktop apps with Tauri, React, TypeScript, Material-UI and usm-redux. Electron apps ship a whole browser and end up with big downloads. Tauri uses the system's own webview and a small Rust core, so your app stays a few MB, and this template gives you that setup ready to go.

## What's included

1. **Tauri:** a Rust backend and the system's native webview, for small and fast desktop apps.
2. **Vite, React and TypeScript** on the front end.
3. **Material-UI** components.
4. **usm-redux** state on top of `react-redux`: you write classes instead of reducer boilerplate.
5. **`@tauri-apps/api`** is installed, so you can call into Rust from React when you need to.

## Project layout

```
src/                 the React app
src-tauri/           the Rust side and tauri.conf.json
vite.config.ts       Vite config
```

## Getting started

First install the [Tauri prerequisites](https://tauri.app/start/prerequisites/): a Rust toolchain and your system's webview packages. Then:

```bash
git clone https://github.com/p32929/tauri_react_usm_typescript_boilerplate.git
cd tauri_react_usm_typescript_boilerplate
npm install

npm run tauri dev     # run the desktop app
npm run tauri build   # make an installer for your system
```

> It uses Tauri 1 and Vite 3. To start on Tauri 2, follow Tauri's own upgrade guide after cloning.

## Recommended editor setup

[VS Code](https://code.visualstudio.com/) with the [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) and [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) extensions.

## Related templates

1. [pomota](https://github.com/p32929/pomota): a finished app built on this setup.
2. [electron-shadcn-typescript](https://github.com/p32929/electron-shadcn-typescript): the Electron version, with shadcn/ui.
3. [react_typescript_materialui_usm_boilerplate](https://github.com/p32929/react_typescript_materialui_usm_boilerplate): the web-only version of this stack.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make this template better.

## You might also like

<p><a href="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/0"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/0-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/0-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (1)"></picture></a><a href="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/1"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/1-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/1-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (2)"></picture></a><br><a href="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/2"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/2-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/2-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (3)"></picture></a><a href="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/3"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/3-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/tauri_react_usm_typescript_boilerplate/3-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (4)"></picture></a></p>

<p><a href="https://p32929.github.io/share/?repo=tauri_react_usm_typescript_boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
