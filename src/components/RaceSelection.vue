<style lang="less" scoped>
</style>

<template>
    <div>
        
        <h2>Race Selection</h2>
        <div v-for="item in races" :key="item.name">
            <input type="radio" v-model="chosen" v-bind:value="item" /> {{item.name}}
        </div>

        Race: {{chosen.name}} ({{chosen.type}}) <br>
        Speed: {{chosen.speed}}ft <br>
        Size: {{chosen.size}} <br>
        Stats: 
        <div v-for="(value, name) in chosen.stats" :key="name">
            {{name}} : {{value}}
        </div>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import * as data from '../config/races.json';
import service, {RACE} from "../service";

@Component({})

export default class RaceSelection extends Vue {

    public races: RACE[] = [];

    constructor() {
        super();
    }

    public mounted(){
        this.races = data.races;
        service.race = data.races[0];
    }

    public get chosen(){
        return service.race;
    }

}

</script>
