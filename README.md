# legacy-code-refactoring

**01. Identify Seams to break dependencies**

You've been asked to change the "Load" button text to "Load users". You also have to add repositories count to single user view. Remember not to make any changes to the code before writing tests. Make sure you've also addressed all listed issues.

    npx parcel exercises/01-seams-react/index.html
    npx jest 01

**02. Sprout Method**

You're dealing with an app that's using a custom framework that also happens to rely on a global state. You have a little time to add a new feature. Your task is to use a Sprout Method and change the app so it greets the user in the currently set language. This way for English the greeting is "Good morning, Bob!", for Czech the greeting is "Dobré ráno, Bob!" and so on.

    npx parcel exercises/02-sprout/index.html
    npx jest 02
