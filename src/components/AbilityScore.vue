<style lang="less" scoped>
</style>

<template>
    <div>

        <h2>Ability Score</h2>
        <div v-for="item in abscores" :key="item.text">
            {{item.text}} <input v-on:change="input_check(item)" v-model="item.val" />
        </div>
        {{msg}}

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

interface ABSCORE {
    text: string;
    val: number;
}

@Component({
    
})

export default class AbilityScore extends Vue {

    public abscores: ABSCORE[] = [];
    public stats: string[] = ['STR','DEX','CON','INT','WIS','CHA'];
    public msg: string = "";


    // Runs on load
    constructor() {
        super();
    }

    // Functions (Methods)
    public mounted(){
        this.load();
    }
    
    public load(){
        console.log("Initialize scores")
        
        var idx;

        for (idx = 0; idx < this.stats.length; idx++){
            let abs: ABSCORE = {
                text: this.stats[idx],
                val: 0
            };

            this.abscores.push(abs);
        }
        
    }

    public input_check(abs:ABSCORE){
        console.log("Checking for valid input");
        this.msg = "";
        
        if (!(abs.val >= 0 && abs.val <= 20)){
            abs.val = 0;
            this.msg = "Input must only be integers";
        }
    }

}

</script>
