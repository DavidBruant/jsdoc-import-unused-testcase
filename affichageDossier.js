/** @import {DossierPhase} from './API_Pitchou.d.ts' */
  

/** */
function id(x) {
    return x
}


/** @type {Set<DossierPhase>} */
export const phases = new Set([
    "Accompagnement amont",
    "Étude recevabilité DDEP",
    "Instruction",
    "Contrôle",
    "Classé sans suite",
    "Obligations terminées"
])