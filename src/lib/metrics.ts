
enum EventDataType {
    UniqueView = 'unique_view',
    View = 'view',
    Histogram = 'histogram'

}
interface EventData {
    Type: string
}

interface EventDataHistogram extends EventData {
    Histogram: [number,number][],
    Duration: number
}


function NewUniqueViewer(): EventData {
    return {
        Type: EventDataType.UniqueView
    }
}
function NewView(): EventData {
    return {
        Type: EventDataType.View
    }
}
function NewSessionHistogram(data: [number,number][], duration:number): EventDataHistogram {
    return {
        Type: EventDataType.Histogram,
        Histogram: data,
        Duration:duration
    }
}