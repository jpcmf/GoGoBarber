import { container } from 'tsyringe';

import IHashProvider from './HasProvider/models/IHashProvider';
import BCryptHashProvider from './HasProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
