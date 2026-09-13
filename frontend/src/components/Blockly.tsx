import { BlocklyWorkspace } from 'react-blockly';
import { javascriptGenerator } from 'blockly/javascript';

interface BlocklyProps {
    onChange: (codigoJS: string, totalBlocos: number) => void;
}

const config = {
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

const workspaceConfig = {
    scrollbars: true,
    trashcan: true
};

export default function BlocklyComponent({ onChange }: BlocklyProps) {
    return (
        <BlocklyWorkspace
            className="container-lousa"
            toolboxConfiguration={config} workspaceConfiguration={workspaceConfig}
            onWorkspaceChange={(workspace) => {
                const codigoConvertido = javascriptGenerator.workspaceToCode(workspace)
                const numeroDeBlocos = workspace.getAllBlocks(false).length;
                onChange(codigoConvertido, numeroDeBlocos);
            }}
        />
    );
}