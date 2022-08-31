function calculator() {
    // TODO:
    let input1;
    let input2;
    let result;

    function init(selector1, selector2, resultSelector){
        input1 = document.querySelector(selector1)
        input2 = document.querySelector(selector2)
        result = document.querySelector(resultSelector)
    }

    function add(){
        result.value = Number(input1.value) + Number(input2.value)
    }

    function subtract(){
        result.value = Number(input1.value) - Number(input2.value)
    }

    return {
        init,
        add,
        subtract
    }
}
// calculator()
const calculate = calculator ();
calculate.init ('#input1', '#input2', '#result');