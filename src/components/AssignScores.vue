<style lang="less" scoped>
</style>

<template>
    <div>
        
        <h2>Assign Scores</h2>
        <table>
            <tr>
                <td v-for="(item, index) in example_scores" :key="item">
                    {{item}} <button v-on:click="reset(index)"> Reset </button>
                </td>
            </tr>
            <tr>
                <td v-for="(item, index) in example_scores" :key="item">
                    <select v-model="chosen[index]">
                        <option disabled value="">Please choose a stat</option>
                        <option v-for="item in stats_default" :key="item" v-show="chosen.indexOf(item)==-1" >{{item}}</option>
                    </select>
                </td>
            </tr>
        </table>

        <div v-for="item in stats_default" :key="item">
            {{item}}: {{chosen.indexOf(item)==-1 ? "-" : example_scores[chosen.indexOf(item)]}} , MOD: {{chosen.indexOf(item)==-1 ? "-" : get_mod(example_scores[chosen.indexOf(item)])}}<br>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    
})

export default class AssignScores extends Vue {

    public example_scores: number[] = [12, 13, 15, 16, 10, 9];
    public stats_default: string[] = ['STR','DEX','CON','INT','WIS','CHA'];
    public chosen: string[] = ['', '', '', '', '', ''];

    constructor() {
        super();
    }

    // Function (Methods)

    public reset(idx:number){
        // Supposedly Vue is reactive to everything EXCEPT array[idx] = smth ????
        // Unbelievable
        Vue.set(this.chosen, idx, '');
    }

    public get_mod(val:number){
        return Math.floor((val-10)/2);
    }

}

</script>
