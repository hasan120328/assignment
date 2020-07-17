    function woodCalculator(chair,table,bed){

        var chair=1*chair;
        var table=3*table;
        var bed=5*bed
        var totalWood=chair+table+bed;
        return totalWood;
    }
    var result=woodCalculator(12,4,3);
    console.log(result);