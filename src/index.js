require('dotenv').config();

const app = require('src/app');
const port = process.env.NODE_PORT || 3000;

const server = app.listen(port, () => console.log(`Server is running on the port: ${port}`));

// Handling the graceful shutdown application
const shutdown = () => {
    if (!server.listening) {
        process.exit(0);
    }

    server.close(err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        process.exit(0);
    });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);