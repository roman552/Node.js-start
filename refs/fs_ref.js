const fs = require("fs")
const path = require("path")

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if (err) throw err
    console.log("Папка была создана");
})

fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),'Hello world',(err) => {
        if (err) throw err
        console.log('Файл был создан');

        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            " From append file",
            err => {
                if (err) throw err
                console.log("Файл был изменен");
                
                fs.readFile(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err 
                        console.log(data);
                    }
                )
            }
        )
    }
)


// fs.rename(
//     path.join(__dirname, "notes", 'mynotes.txt'),
//     path.join(__dirname, "notes", 'notes.txt'),
//     err => {
//         if (err) throw err 
//         console.log("Файл переименован");
//     }
// )

fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err
    console.log("Папка была создана");
})

fs.writeFile(
    path.join(__dirname, 'test', 'test.txt'),'SPTVR19',(err) => {
        if (err) throw err
        console.log('Файл был создан');

        fs.appendFile(
            path.join(__dirname, 'test', 'test.txt'),
            " 2021",
            err => {
                if (err) throw err
                console.log("Файл был изменен");
                
                fs.readFile(
                    path.join(__dirname, 'test', 'test.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err 
                        console.log(data);
                    }
                )
            }
        )
    }
)

// fs.rename(
//     path.join(__dirname, "test", 'test.txt'),
//     path.join(__dirname, "test", 'mytest.txt'),
//     err => {
//         if (err) throw err 
//         console.log("Файл переименован");
//     }
// )