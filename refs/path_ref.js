const path = require('path')

console.log(__filename);

//The path.basename() method returns the last portion of a path, similar to the Unix basename command.
console.log(path.basename(__filename));

//The path.dirname() method returns the directory name of a path, similar to the Unix dirname command.
console.log(path.dirname(__filename));

//The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path, an empty string is returned.
console.log(path.extname(__filename));

//The path.parse() method returns an object whose properties represent significant elements of the path. Trailing directory separators are ignored.
console.log(path.parse(__filename));

// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
console.log(path.join(__filename, 'test', 'second.html'));

// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
console.log(path.resolve(__filename, './test', '/second.html'));