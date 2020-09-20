# legacy-code-refactoring

## Setup

    npm ci

## Exercises

**01. Identify Seams to break dependencies**

You've been asked to change the "Load" button text to "Load users". You also have to add repositories count to single user view. Remember not to make any changes to the code before writing tests. Make sure you've also addressed all listed issues.

    npx parcel exercises/01-seams-react/index.html
    npx jest 01

**02. Sprout Method**

You're dealing with an app that's using a custom framework that also happens to rely on a global state. You have a little time to add a new feature. Your task is to use a Sprout Method and change the app so it greets the user in the currently set language. This way for English the greeting is "Good morning, Bob!", for Czech the greeting is "Dobré ráno, Bob!" and so on.

    npx parcel exercises/02-sprout/index.html
    npx jest 02

**03. Wrap Method**

You've noticed that your legacy service for fetching GitHub users is overexploited by some malicious actors. You have to implement a rate limiting feature that allows your users to hit the endpoint only 2 times a minute.

    node exercises/03-wrap/index.js
    npx jest 03

**04. Snapshot Testing**

You can no longer inject raw HTML in your app. You have to migrate this loan amortization calculator to a framework of your choice. The amortization function comes from [this codepen](https://codepen.io/joeymack47/pen/fHwvd) but all comments have been removed. Current implementation spits out HTML table. If you don't understand it then a) you shouldn't borrow money b) you'll be able to exploit the full potential of snapshot testing.

    npx parcel exercises/04-snapshots/index.html
    npx jest 04
