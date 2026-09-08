document.addEventListener("DOMContentLoaded", function () {

    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
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

});
