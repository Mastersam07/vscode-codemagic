# Codemagic Yaml Linter as an Extension

<div align="center">

[![Vs Code](https://img.shields.io/badge/Vs_Code-Marketplace-blue?color=Success)](https://marketplace.visualstudio.com/items?itemName=Mastersam.vscode-codemagic "Go to VS code Marketplace")
[![Editor - Vs Code](https://img.shields.io/badge/Editor-VS_code-green?logo=visualstudiocode&logoColor=white&color=Success)](https://marketplace.visualstudio.com/items?itemName=Mastersam.vscode-codemagic "Go to VS code Marketplace")
[![Config- Codemagic](https://img.shields.io/badge/Config-Codemagic-green?logo=codemagic&logoColor=white&color=Success)](http://codemagic.io/ "Go to Codemagic Home")
[![contributions - welcome](https://img.shields.io/badge/Contributions-Welcome-white?color=Success)](/CONTRIBUTING.md "Go to contributions doc")

</div>

Provides linting and intellisense support for codemagic yaml files.

## Features

-  Auto completion
-  Yaml validation
-  Hover support

## Demo
<p align="center">
    <img src="./assets/codemagic.gif">
</p>

> This extension is not affiliated with codemagic.io product.
>
> It is a 3rd party extension designed to provide linting and intellisense support for codemagic yaml files 
>
> If any issues, contact the [developer](https://github.com/mastersam07)


## Extension Settings

This extension contributes the following settings:

* `yaml.schemaStore.enable`: Enable/disable this extension.

By default, this extension sets `yaml.schemaStore.enable` to false for the user, workspace and workspace folder. To change this, set the value to true in vs code settings sync or make the following changes to settings.json:

```json
yaml.schemaStore.enable: true
```

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.