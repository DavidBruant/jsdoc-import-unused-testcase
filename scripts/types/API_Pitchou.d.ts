/**
 * On génère automatiquement les types des propriétés d'un Dossier via Kanel
 * On a choisi d'utiliser un type `string` pour les propriétés
 * 'phase' et 'prochaine_action_attendue_par'
 * pour plus de flexibilité (au lieu d'un enum).
 * 
 * On surcharge ici ces propriétés pour contraindre les valeurs de ces propriétés.
 */

export type DossierPhase = "Accompagnement amont" | "Étude recevabilité DDEP" | "Instruction" | "Contrôle" | "Classé sans suite" | "Obligations terminées"

