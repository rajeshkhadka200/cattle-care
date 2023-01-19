// umport controllers
import { register, login } from "../controllers/auth";

// create routers
const router = express.Router();

// register new user
router.post("/register", register);
router.post("/login", login);
