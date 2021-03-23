<style lang="less" scoped>
</style>

<template>
    <div>

        <h2>Class Selection</h2>
        <div v-for="item in classes" :key="item.name">
            <input type="radio" v-model="chosen" v-bind:value="item" /> {{item.name}}
        </div>
        
        Class: {{chosen.name}} ({{chosen.type}}) <br>
        Base Attack Bonus (BAB): {{chosen.bab}} <br>
        Fortitude (Fort): {{chosen.fort}} <br>
        Reflex (Ref): {{chosen.ref}} <br>
        Will (Will): {{chosen.will}} <br>
        Hit die (HD): {{chosen.hd}} <br>
        

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import * as data from '../config/classes.json';
import service, {CLASS} from "../service";

@Component({})

export default class ClassSelection extends Vue {

    public classes: CLASS[] = [];

    constructor() {
        super();
    }

    public mounted(){
        this.classes = data.classes;
        service.class = data.classes[0];
    }

    public get chosen(){
        return service.class;
    }

}

</script>
