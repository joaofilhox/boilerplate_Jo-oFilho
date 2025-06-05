import app from './app';
import { setupSwagger } from './swagger';

const PORT = 3000;
setupSwagger(app);
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Swagger em http://localhost:${PORT}/api-docs`);
});