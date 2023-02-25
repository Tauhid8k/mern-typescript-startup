import { cp } from "shelljs";

// Copy Views Folder to ./dist
cp("-R", "./backend/views", "./backend/dist/");
