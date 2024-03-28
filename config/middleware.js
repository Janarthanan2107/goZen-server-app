import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

export default function configureMiddleware(app) {
    app.use(morgan('combined'));
    app.use(helmet());
    app.use(cors());
}
