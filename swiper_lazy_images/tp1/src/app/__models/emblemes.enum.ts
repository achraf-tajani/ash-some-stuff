//! GARDER L'ORDRE DES CLES DES ENUMERATIONS SUITE AUX LOGIQUES IMPLEMENTEES (CONTRAINTES DUES A TYPESCRIPT)
//! Emblèmes disposés dans l'ordre choisi par la BnF
export enum EmblemesEnum {
    DON_LIBRE = "dons-libres",
    LAMPE = "lampes",
    TABLE = "tables",
    BIBLIOTHEQUE = "bibliotheques",
    CALORIFERE = "caloriferes",
    VILLE = "villes",
    COLONNE = "colonnes",
}

export enum EmblemesCreditsEnum {
    FREDERIQUE_HALL = "@Frédérique Hall / BnF",
    JEAN_CHRISTOPHE = "@Jean-Christophe Ballot / BnF / Oppic",
    ELIE_LUDWIG = "@Elie Ludwig / BnF",
    GUILLAUME_MURAT = "@Guillaume Murat / BnF",
    LAURENT_JULLIAND = "@Laurent Julliand / Agence Contextes / BnF",
    ANTOHNY_VOISIN = "@Anthony Voisin / Photo Synthèse / BnF",
    DPT_DE_LA_MUSIC = "@BnF / Dpt. de la Musique",
}

export enum EmblemesDisplayEnumFr {
    DON_LIBRE = "Salle Ovale",
    LAMPE = "Lampe",
    TABLE = "Table",
    BIBLIOTHEQUE = "Bibliothèque",
    CALORIFERE = "Calorifère",
    VILLE = "Ville",
    COLONNE = "Colonne",
}

export enum EmblemesDisplayEnumEn {
    DON_LIBRE = "Salle Ovale",
    LAMPE = "Lamp",
    TABLE = "Table",
    BIBLIOTHEQUE = "Bookcase",
    CALORIFERE = "Heater",
    VILLE = "City",
    COLONNE = "Column",
}

export enum EmblemesMatchersEnum {
    DON_LIBRE = "DLE",
    LAMPE = "LAM",
    TABLE = "TAB",
    BIBLIOTHEQUE = "BIB",
    CALORIFERE = "CAL",
    VILLE = "VIL",
    COLONNE = "COL",
}

export enum EmblemesPicturesEnum {
    DON_LIBRE = "don_libre.jpg",
    LAMPE = "lampe.jpg",
    TABLE = "table.png",
    BIBLIOTHEQUE = "bibliotheque.jpg",
    CALORIFERE = "calorifere.jpg",
    VILLE = "ville.jpg",
    COLONNE = "colonne.jpg",
}

export enum EmblemesAccueilEnum {
    CARYATIDES = "cariatides",
}

export enum MapMatchersEnum {
    SVG_BIB = "BIB-point",
    SVG_CAL = "CAL-point",
    SVG_COL = "COL-point",
    SVG_LAM = "LAM-point",
    SVG_TAB = "TAB-point",
    SVG_VIL = "VIL-point",
    SVG_BIB_N1 = "BIB-N1-point",
    SVG_BIB_N2 = "BIB-N2-point",
    SVG_BIB_N3 = "BIB-N3-point",
}

export enum MapSectionMatchersEnum {
    BIB_RDC = "BIB-RDC",
    BIB_N1 = "BIB-N1",
    BIB_N2 = "BIB-N2",
    BIB_N3 = "BIB-N3",
    VIL = "VIL-C",
}
