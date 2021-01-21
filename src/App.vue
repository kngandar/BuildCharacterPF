<style lang="less" scoped>
</style>

<template>
    <div>
        <ability-score v-if="stage==0"></ability-score>
        <class-selection v-if="stage==1"></class-selection>
        <race-selection v-if="stage==2"></race-selection>
        <assign-scores v-if="stage==3"></assign-scores>        
        <end-screen v-if="stage==4"></end-screen>

        <button v-on:click="stage+=1">Next</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import AbilityScore from "./components/AbilityScore.vue"
import ClassSelection from "./components/ClassSelection.vue"
import AssignScores from "./components/AssignScores.vue"
import RaceSelection from "./components/RaceSelection.vue"
import EndScreen from "./components/EndScreen.vue"

@Component({
    components:{
        AbilityScore,
        ClassSelection,
        AssignScores,
        RaceSelection,
        EndScreen
    }
})

export default class App extends Vue {

    private stage: number = 0;

    constructor() {
        super();
    }

}

</script>
