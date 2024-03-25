import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  JWT_SECTRET: get('JWT_SECTRET').required().asString(),
  MONGO_URI: get('MONGO_URL').required().asString(),
};

