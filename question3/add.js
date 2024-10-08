// add.js we check if the Logs directory exists if it does not then create it.
// aftre dir creation we are running a loop 10 times and creating 10 files and writing in them.
const fs = require('fs')
const path = require('path')

// using global varibale to get the path using __dirname
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