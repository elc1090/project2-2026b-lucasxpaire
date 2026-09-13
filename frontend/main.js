document.addEventListener("DOMContentLoaded", function () {

    const toolbox = {
        "kind": "categoryToolbox",
        "contents": [
            {
                "kind": "category",
                "name": "Lógica",
                "colour": "%{BKY_LOGIC_HUE}",
                "contents": [
                    { "kind": "block", "type": "controls_if" },
                    { "kind": "block", "type": "logic_compare" },
                    { "kind": "block", "type": "logic_operation" }
                ]
            },
            {
                "kind": "category",
                "name": "Loops",
                "colour": "%{BKY_LOOPS_HUE}",
                "contents": [
                    {
                        "kind": "block",
                        "type": "controls_repeat_ext",
                        "inputs": {
                            "TIMES": {
                                "shadow": {
                                    "type": "math_number",
                                    "fields": { "NUM": 10 }
                                }
                            }
                        }
                    },
                    { "kind": "block", "type": "controls_whileUntil" }
                ]
            },
            {
                "kind": "category",
                "name": "Matemática",
                "colour": "%{BKY_MATH_HUE}",
                "contents": [
                    { "kind": "block", "type": "math_number" },
                    { "kind": "block", "type": "math_arithmetic" }
                ]
            },
            {
                "kind": "category",
                "name": "Texto",
                "colour": "%{BKY_TEXTS_HUE}",
                "contents": [
                    { "kind": "block", "type": "text" },
                    { "kind": "block", "type": "text_print" }
                ]
            },
            {
                "kind": "category",
                "name": "Variáveis",
                "custom": "VARIABLE",
                "colour": "%{BKY_VARIABLES_HUE}"
            }
        ]
    };

    var workspace = Blockly.inject('workspace', {
        toolbox: toolbox,
        scrollbars: true,
        trashcan: true
    });

    var btnSubmit = document.getElementById('btn-submit');
    btnSubmit.addEventListener('click', function () {
        var nickname = document.getElementById('nickname').value;
        if (!nickname) {
            alert("Por favor, digite seu apelido antes de enviar!");
            return;
        }
        var state = Blockly.serialization.workspaces.save(workspace);

        console.log("Apelido do Jogador:", nickname);
        console.log("JSON:", JSON.stringify(state));
    });

    var btnRun = document.getElementById('btn-run');
    btnRun.addEventListener('click', function () {
        var code = javascript.javascriptGenerator.workspaceToCode(workspace);
        try {
            eval(code);
        } catch (e) {
            alert("Ops! Houve um erro na lógica: " + e);
        }
    });

});
