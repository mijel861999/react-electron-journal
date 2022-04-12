const { app } = require('electron')
const { BrowserWindow } = require('electron-acrylic-window')

require('@electron/remote/main').initialize()

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        frame: false,
        fullscreenable: false,
        skipTaskbar: false,
        movable: true,
        vibrancy: {
            theme: 'light', // (default) or 'dark' or '#rrggbbaa'
            effect: 'acrylic', // (default) or 'blur'
            disableOnBlur: true, 
        },
        webPreferences: {
            enableRemoteModule: true,
        }
    })

    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
    if( process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})
