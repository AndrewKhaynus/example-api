# Install
```
git clone https://github.com/MGrynets/example-api.git
cd example-api
npm i
```

### To start app
Create config.json like config.example.json file with your credentials
```
// Create and add credentials
vi config.json

// Start the app
node app.js
```

### Packages
- [node-fetch](https://www.npmjs.com/package/node-fetch) - to make GET/POST request from server
- [mysql](https://github.com/mysqljs/mysql) - mysql wrapper for node.js
- [body-parser](https://www.npmjs.com/package/body-parser) - for easy request processing
