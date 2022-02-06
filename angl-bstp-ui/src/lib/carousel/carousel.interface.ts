export interface Slide {
    _id: string;
    src: string;
    chk: boolean;
    cpt?: Caption;

}

export interface Caption {
    ttl?: string;
    sbt?: string;
    prg?: string; 
}