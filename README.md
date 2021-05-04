`#npm` `#js` `#moment-js` `#lodash` `#jest` `#master-in-software-engineering`

# NPM & Testing Basics <!-- omit in toc -->

Pill to get familiar with **npm**, install different kind of dependencies such as **moment**, **lodash** for production, and **jest** for development.

This pill is also about doing the **first steps into testing** both using _Jest_ dependency and creating _test.js_ files to pass the tests.

## Install repository

Copy the repository url and paste it on your local machine via terminal

```
git clone
```

## Basic npm commands

To generate a _package.json_ file for the repository:

```
npm init -y
```

If there are dependencies declared in the basic _package.json_ file:

```
npm install
```

To install a **global** dependency:

```
npm i -g <package>
```

To install a **production** dependency:

```
npm i --save <package>
npm i -S <package>

```

To install a **development** dependency:

```
npm i --save-dev <package>
npm i -D <package>
```

To install a dependency at specific version:

```
npm i --save moment@4.14.15
```

To updated a dependency:

```
npm update <package>
```

To uninstall a dependency:

```
npm uninstall <package>
```

## Testing

This repository uses _moment_ and _lodash_ libraries but, in order to create the **testing enviornment** you'll need _Jest_. To install it, inside your project execute the following commands.

Install _Jest_ as a development dependency

```
npm --save-dev jest
```

In order to **run the tests and compare** them you'll need the basic Javascript file and another one under the same name with the `test.js`suffix.

```
fileName.js <----->  fileName.test.js
```

Also you'll need to import all functions contained in the basic JavaScript file to the testing file like so:

```
const test = require("../src/fileName");

// Treat "test" file as module
test.function1()
test.function2()
test.function2()
...
```

To test the files

```
npm test
```

## Lessons learnt

- Install _npm_.
- Learn what _package.json_ and _package-lock.json_ files are and create them.
- Define _global_, _production_ and development _dependencies_.
- Use libraries such as _Moment_ and _Lodash_ to help developing JavaScript files.
- Use _Jest_ dependency to test JavaScript files.
- Learn what _TDD (Test-Driven Development)_ is.

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
