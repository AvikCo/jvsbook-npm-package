# JvsBook
![jvsBook](https://user-images.githubusercontent.com/73161634/117566225-04337000-b0d3-11eb-8152-dd21cfe6a8b1.PNG)

# What is it?
•	JvsBook is a CLI to launch an interacting development environment for writing code in JavaScript, React along with the ability to document code. It’s also an NPM package that is being published on npmjs (https://www.npmjs.com/package/jvsbook). Unlike other online code editors it doesn’t use any outside API to fetch bundled code. It uses ESbuild and custom written plugins for building code that removes lot of complexity of writing and managing backend.
## Features: 
  * Write javaScript or react code snippet and execute parallely
  * You don't have to install any npm package to run in the code editor, once you write the import statement, JvsBook takes care of fetching that packages and getting it ready for you to use.
  * Prettier Code formatter added so you dont have to manually format your code.
  * All the code environment are flexible you can move up/down increare/derease size of any environment as per your needs
  * While you write your code and document it, behind the scenes its save your work so that when you restart your browser the data persist, it also allow you to share your work to your colleuge, friends.
  * You can run the environment in any port you wish
  * You can open, run, edit any jvsBook file.
  * Import any npm package as well as css package to use in the environment
  * Easily document your code with all the latest tools to make your documentation organised and more beautiful
  * Create unlimited environment
# What technologies/packages has been used?
   * React with TypeScript
   * Redux
   * Node.js
   * Immer
   * EsBuild
# How to use it?
Prerequisites:
  * Node and NPM needs to be installed in your system
## npx jvsbook serve
To start up and and install jvsbook
## npx jvsbook serve -p <PORT_NUMBER>
 To start the server on custom port
  * npx jvsbook serve -p 4003 //here the port is 4003
  * default starting port is 4005
## npx jvsbook serve <NOTEBOOK_NAME.js>
 To open a specific notebook or to create a new notebook with custom name
  * Default notebook name is notebook.js (you will find it in the installation folder)
  * npx jvsbook serve myCustomNotebook.js //here custom notebook is myCustomNotebook.js
## npx install -g jvsbook
  * To globally install jvsbook
    * if you install globally you can start the app by only "jvsbook serve <OPTIONAL_CONFIGURATIONS>"

