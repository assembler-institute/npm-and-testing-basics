`#npm` `#js` `#moment-js` `#lodash` `#jest` `#master-in-software-engineering`

# NPM & Testing Basics <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> In this pill you will learn the basics of the **npm** tool to handle the dependencies and how to test your code with **Jest**.
>
> **npm** is a tool that manages the **dependencies** of our Javascript project, both in client and in backend (NodeJs).
>
> **Jest** is a JavaScript test runner, that is, a JavaScript library for creating, running, and structuring tests to ensure your code is doing what you expected it to do.

## Table of contents <!-- omit in toc -->

- [Installing an NPM package](#installing-an-NPM-package)
- [Install a specific version of the package](#Install-a-specific-version-of-the-package)
- [Install production package](#install-production-package)
- [Install development package](#install-development-package)
- [Uninstalling an npm package](#Uninstalling-an-npm-package)
- [Upgrade NPM](#NPM-upgrade)
- [Technologies used](#technologies-used)
- [Resources](#resources)

## Installing an NPM package

To install an <code>moment</code> package simply run the command:

```
 npm install moment
```

## Install a specific version of the package

To install a specific version of the package add the version to the package like:

```
 npm install lodash@4.17.14
```

## Install production package

To install a prodDependency append --save to the command. Let’s install <code>jQuery</code> as a production dependency:

```
 npm install jquery --save
```

## Install development package

To install a devDependency append --save-dev to the command:

```
 npm install jest --save-dev
```

## Uninstalling an NPM package

To uninstall an npm package use the following command:

```
 npm uninstall jquery
```

## NPM upgrade

Upgrading npm on Windows requires manual steps to ensure that PowerShell/CMD find the new version of npm. Below You can find made a small tool for npm and Node, reducing the process to a simple command.

- [Visit github](https://github.com/felixrieseberg/npm-windows-upgrade)

## Technologies used

\* NPM Tool

\* Javascript

\* MomentJS Library

\* Lodash Library

\* Jest Library

## Resources

- [NPM Tool](https://www.npmjs.com/)
- [Lodash Library](https://lodash.com/)
- [MomentJS Library](https://momentjs.com)
- [Jest Library](https://jestjs.io/)
- [Intro to JS TDD](https://www.youtube.com/watch?v=SbKPgaRZsxA)
- [README.md Guidelines](https://github.com/othneildrew/Best-README-Template)
