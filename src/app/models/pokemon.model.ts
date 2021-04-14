export interface Pokemon {
    id?: number,
    name?: string,
    url?: string,
    detalles?: Detalle_Pokemon
}


export interface Stats {
    base_stat?: number,
    effort?: number,
    stat?: Stat 
}

export interface Stat {
    name?: string,
    url?: string
}

export interface Detalle_Pokemon {
    name?: string,
    id?: string,
    types?: Types[],
    sprites?: Sprite,
    stats?: Stats[]

}


export interface Sprite {
    front_default?: string
}

export interface Types {

    slot?: string,
    type?: Type


}

export interface Type {
    name?: string
}


export interface Resp {
    count: number,
    results: []
}