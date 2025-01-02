//@ts-check

/** @import {DossierPhase} from '../types/API_Pitchou.d.ts'*/
  
/**
 *
 * @param {any} x
 * @returns {any}
 */
export function id(x) {
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
