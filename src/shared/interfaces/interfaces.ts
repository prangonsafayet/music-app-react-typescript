export interface SongInterface{
    active: boolean,
    artist: string,
    audio: string,
    color: Array<string>,
    cover: string, 
    id: string,
    name: string
}
export interface SongInfo{
    animationPercentage: number,
    currentTime: number,
    duration: number
}