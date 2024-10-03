const fs = require('fs')
const path = require('path')

let log_dir_path = path.join(__dirname, 'Logs')

if(!fs.existsSync(log_dir_path)){
    fs.mkdir(log_dir_path, { recursive: true }, (err) => {
        if (err) throw err;
      }); 
    for(let i = 0; i < 10 ; i++){
        const data = new Uint8Array(Buffer.from(`Loogin into ${i + 1}th loger file.`))
        let logger_file_path = path.join(log_dir_path, `log${i}.txt`)
        fs.writeFile(logger_file_path, data, (err)=>{
            if (err){ 
                throw err
            }console.log(`log${i}.txt created`)
        })
    }
}