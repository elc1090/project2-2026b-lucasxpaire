import { BlocklyWorkspace } from 'react-blockly';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

interface BlocklyProps {
    onChange: (codigoJS: string, blocosJSON: any) => void;
}

export default function BlocklyComponent({ onChange }: BlocklyProps) {
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

    return (
        <BlocklyWorkspace
            className="workspace-container"
            toolboxConfiguration={config} workspaceConfiguration={{ scrollbars: true, trashcan: true }}
            onWorkspaceChange={(workspace) => {
                const codigoConvertido = javascriptGenerator.workspaceToCode(workspace)
                const jsonConvertido = Blockly.serialization.workspaces.save(workspace);
                onChange(codigoConvertido, jsonConvertido);
            }}
        />
    );
}