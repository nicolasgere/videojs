

class Api {
    constructor(private targetUrl: string){
        

    }
    post = async (body: any) =>{
        return fetch(`${this.targetUrl}/ingest`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    postEvent = async(events: Event[])=>{
        return this.post(events)
    }
}