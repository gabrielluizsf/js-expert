export default class Camera{
    constructor(){
        this.width = document.createElement('video')
    }
    static async init(){
        if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error(
                `Browser API navigator.mediaDevices.getUserMedia not available`
            )
        }
        const videoConfig = {
            audio: false,
            video: {
                //Pega o tamanho disponivel da tela
                width: globalThis.screen.availWidth,
                height: globalThis.screen.availHeight,
                //Quantos  Frames por Segundo
                frameRate: {
                    ideal: 60
                }
            }
        }
        const stream = await navigator.mediaDevices.getUserMedia(videoConfig)
        const camera = new Camera()
        
        //camera.video.srcObject = stream
        //camera.video.height = 240
        //camera.video.width = 320
        //document.body.append(camera.video)

        //Aguarda a camera iniciar
        await new Promise((resolve)=>{
            camera.video.onloadedmetadata = ()=>{
                resolve(camera.video)
            }
        })
        camera.video.play()

        return camera
    }
}