import routes from './routes/routes.js'
import express from 'express'
import path from 'path'   // Isso importa o módulo path do Node.js, que fornece utilitários para trabalhar com caminhos de arquivo e diretório.
import { fileURLToPath } from 'url'  // Essa função é usada para converter uma URL de arquivo em um caminho de sistema de arquivos.
import connectDb from './database/db.js'
const app = express();
const port = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);
app.use(express.urlencoded());

connectDb();

app.listen(3000, () => {
    console.log(`Rodando na porta ${port}`);
});

