import "./index.css";

class Videolytics {
  private api:Api
  constructor() {
    this.api = new Api('https://localhost:2000')
  }

  track = (id: string) =>{
    const video = document.getElementById(id)  as any;
    video.addEventListener('play', ()=>{
      console.log('event: play')
    })
    window.onbeforeunload = function(){
      const ranges = video.played.length
      const data = {
        played:[] as Array<Array<number>>,
        duration: video.duration,
        view: 1
      }
      for(var i = 0; i < ranges; i++){
        data.played.push([video.played.start(i),  video.played.end(i)])
      }
      console.log(data)
      return 'Are you sure you want to leave?';
    };
    return {
      flush: ()=>{

      },
      reset:()=>{
        
      }
    }
  }
}

export default Videolytics;
