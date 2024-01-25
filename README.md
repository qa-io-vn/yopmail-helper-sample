#Yopmail Helper Sample

## How to run the test scenario

- Build the project: ```npm install```
- Execute the test: ``` npm run test```
## Package Information
https://www.npmjs.com/package/yopmail-helper

## 📦 Install the yopmail-helper package
You can install the library using [NPM](https://www.npmjs.com/) or [Yarm](https://yarnpkg.com/)
```
npm i yopmail-helper
```
```
yarn add yopmail-helper
```
## 🔧 How to use

``` js
//Declare module
const easyYOPmail = require('yopmail-helper');
```

#### ✉️ *get inbox of a mail address*
``` js
const inbox = await getInbox('admin01');
```

#### 🗃️ *Read details of an email*
``` js
const mailDetails = await getMailDetails(inbox[0].id, 'admin01');
```
#### 📑 *Read link of an email*
``` js
const links = await getLinkOfFirstMail('admin01');
```
