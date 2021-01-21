<style lang="less" scoped>
</style>

<template>
    <div>

        <h2>Ability Score</h2>
        <div v-for="(item, index) in scores" :key=index>
            Score #{{index}} <input v-on:change="input_check(index)" v-model="scores[index]" /> MOD: {{get_mod(scores[index])}}
        </div>
        {{msg}}

        <button v-on:click="rand_roll()">Roll</button>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    
})

export default class AbilityScore extends Vue {

    public scores: number[] = [0, 0, 0, 0, 0, 0];
    public msg: string = "";


    // Runs on load
    constructor() {
        super();
    }

    // Functions (Methods)
    public input_check(idx:number){
        this.msg = "";
        
        if (!(this.scores[idx] >= 0 && this.scores[idx] <= 20)){
            this.scores[idx] = 0;
            this.msg = "Input must only be integers within 0 and 20";
        }
    }

    public rand_roll(){        
        let temp_scores: number[] = this.scores;

        // Keep rolling random 6 numbers until they are a valid set
        do{
            for(var i=0; i<this.scores.length; i++){
                let roll = 0;
                let smallest = 0;
                
                // Emulating real-life random rolls prescribed by guide
                for (var j=0; j<4; j++){
                    let x = Math.floor(Math.random() * 6) + 1;

                    if (!smallest || x < smallest){
                        smallest = x;
                    }
                    roll += x;

                }
            temp_scores[i] = roll - smallest;

            }
        } while(this.check_invalid(temp_scores))

        // Save rolls if they are valid
        for(var i=0; i<this.scores.length; i++){
            Vue.set(this.scores, i, temp_scores[i])
        }
        
    }

    public get_mod(val:number){
        return Math.floor((val-10)/2);
    }

    public check_invalid(scores:number[]){
        let total_mod = 0;

        for (var i=0; i<scores.length; i++){
            // Special rule: If any of the scores are too low (< 8), set is invalid
            if (scores[i] < 8){
                total_mod = 0;
                break
            }
            console.log("Calculated mod: " + this.get_mod(scores[i]));
            total_mod += this.get_mod(scores[i]);
        }

        console.log("Total mod is " + total_mod)

        if (total_mod < 4){
            return true;
        } else {
            return false;
        }

    }

}

</script>
