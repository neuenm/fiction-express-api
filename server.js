const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Usa json-server-auth como middleware
server.db = router.db; // Importante para que funcione json-server-auth
server.use(middlewares);
server.use(auth);
server.use(router);

// Inicia el servidor
server.listen(8080, () => {
  console.log('JSON Server is running on http://localhost:8080');
});
