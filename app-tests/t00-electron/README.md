= Electron 

https://www.electronjs.org/docs/latest/tutorial/quick-start



== Run the app

```
npm start
```

== Package and distribute

Add electron forge as development dependency and use its import to set up forge scaffolding

```
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

Create a distributable using Forge's make command


Note: if you have issues in Ubuntu, you might need to `sudo apt install rpm` 
