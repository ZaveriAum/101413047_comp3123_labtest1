const fs = require('fs')
const path = require('path')

let log_dir_path = path.join(__dirname, 'Logs')

if(fs.existsSync(log_dir_path)){
    for(let i = 0; i < 10; i++){
        file_name = path.join(log_dir_path, `log${i}.txt`)
        fs.unlink(file_name, (err) => {
            if (err) throw err;
            console.log(`log${i} was deleted.`);
        });
    }
    fs.rmdir(log_dir_path, { recursive: true }, (err) => {
        if (err) {
            return console.error(`Error removing directory: ${err.message}`);
        }
        console.log('Directory removed successfully');
    });
}