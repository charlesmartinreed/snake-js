//IMPORT VS REQUIRE
//REQUIRE used to be used to used to import functions and code from other files

//export marks something as importable
//import is used to bring things into a files

// ./ means current directory, .js is implied so don't have to write it
import { capitalizeString } from "./importTest"

const cap = capitalizeString("hello!");
console.log(cap);
