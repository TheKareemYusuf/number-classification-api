import app from './app';
import { CONFIG } from './config/config';




app.listen(CONFIG.PORT || 3000, () => {
    console.log(`app is listening on the port ${CONFIG.PORT}`);
  }); 