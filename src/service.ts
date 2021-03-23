
import Vue from "vue";
import * as race_data from './config/races.json';
import * as class_data from './config/classes.json';

export interface RACE {
    name: string;
    type: string;
    speed: string;
    size: string;
    stats: {str?:string;
            dex?:string;
            con?:string;
            int?:string;
            wis?:string;
            cha?:string;
            any?:string;};
};

export interface CLASS {
    name: string;
    type: string;
    bab: string;
    fort: string;
    ref: string;
    will: string;
    hd: string;
};

class Service {

    private obs: { text: string,
                    scores: number[],
                    race: RACE,
                    class:CLASS} = Vue.observable({ text: "" , scores:[10,10,10,10,10,10], race:race_data.races[0], class:class_data.classes[0]});

    constructor() {

    }

    public get text() {
        return this.obs.text;
    }

    public get scores(){
        return this.obs.scores;
    }

    public get race(){
        return this.obs.race;
    }

    public get class(){
        return this.obs.class;
    }

    public set scores(val:number[]){
        this.obs.scores = val;
    }

    public set race(val:RACE){
        this.obs.race = val;
    }

    public set class(val:CLASS){
        this.obs.class = val;
    }

}

export default new Service();
