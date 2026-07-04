(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _trustboxMicroFramework = require('@trustpilot/trustbox-micro-framework');

(0, _trustboxMicroFramework.microTrustScore)();

},{"@trustpilot/trustbox-micro-framework":57}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.microTrustScore = /* common-shake removed: exports.microStar = */ /* common-shake removed: exports.microReviewCount = */ /* common-shake removed: exports.microCombo = */ undefined;

var _trustboxes = require('./trustboxes');

/* common-shake removed: exports.microCombo = */ void _trustboxes.microCombo;
/* common-shake removed: exports.microReviewCount = */ void _trustboxes.microReviewCount;
/* common-shake removed: exports.microStar = */ void _trustboxes.microStar;
exports.microTrustScore = _trustboxes.microTrustScore;

},{"./trustboxes":59}],2:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "anmeldelse",
        "plural": "anmeldelser",
        "collectedVia": "Indsamlet via [source]",
        "verifiedVia": "Verificeret – indsamlet via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verificeret",
                "infoTitle": "Verificeret anmeldelse",
                "info": "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
            },
            "invitedReview": {
                "label": "Inviteret",
                "infoTitle": "Inviteret anmeldelse",
                "infoTrustpilot": "Anmeldelser af Trustpilot, der er markeret som [BOLD-BEGIN]Inviteret[BOLD-END], blev skrevet via et direkte link til vores anmeldelsesformular.",
                "info": "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
            },
            "redirectedReview": {
                "label": "Omdirigeret",
                "infoTitle": "Omdirigeret anmeldelse",
                "info": "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
            }
        }
    },
    "monthNames": {
        "january": "januar",
        "february": "februar",
        "march": "marts",
        "april": "april",
        "may": "maj",
        "june": "juni",
        "july": "juli",
        "august": "august",
        "september": "september",
        "october": "oktober",
        "november": "november",
        "december": "december"
    },
    "timeAgo": {
        "days": {
            "singular": "For [count] dag siden",
            "plural": "For [count] dage siden"
        },
        "hours": {
            "singular": "For [count] time siden",
            "plural": "For [count] timer siden"
        },
        "minutes": {
            "singular": "For [count] minut siden",
            "plural": "For [count] minutter siden"
        },
        "seconds": {
            "singular": "For [count] sekund siden",
            "plural": "For [count] sekunder siden"
        }
    },
    "reviewFilters": {
        "byStars1": "Viser vores [star1]-stjernede anmeldelser",
        "byStars2": "Viser vores [star1]- og [star2]-stjernede anmeldelser",
        "byStars3": "Viser vores [star1]-, [star2]- og [star3]-stjernede anmeldelser",
        "byStars4": "Viser vores [star1]-, [star2]-, [star3]- og [star4]-stjernede anmeldelser",
        "byLatest": "Viser vores seneste anmeldelser",
        "byFavoriteOrTag": "Viser vores yndlingsanmeldelser"
    },
    "notRated": "Ikke bedømt",
    "starRating": "Stjernebedømmelse på [ratingStars] ud af [totalStars] på Trustpilot",
    "starReview": "Anmeldelse med [reviewStars] stjerner",
    "reviewDisclaimer": {
        "body": "Trustpilot udfører kontrol af anmeldelser"
    }
}

},{}],3:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "Bewertung",
        "plural": "Bewertungen",
        "collectedVia": "Gesammelt über [source]",
        "verifiedVia": "Verifiziert, gesammelt über [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verifiziert",
                "infoTitle": "Verifizierte Bewertung",
                "info": "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
            },
            "invitedReview": {
                "label": "Auf Einladung",
                "infoTitle": "Bewertung auf Einladung",
                "infoTrustpilot": "Bewertungen zu Trustpilot, die mit dem Hinweis [BOLD-BEGIN]Auf Einladung[BOLD-END] versehen sind, wurden über einen direkten Link zu unserem Bewertungsformular abgegeben.",
                "info": "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
            },
            "redirectedReview": {
                "label": "Weitergeleitet",
                "infoTitle": "Weitergeleitete Bewertung",
                "info": "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
            }
        }
    },
    "monthNames": {
        "january": "Januar",
        "february": "Februar",
        "march": "März",
        "april": "April",
        "may": "Mai",
        "june": "Juni",
        "july": "Juli",
        "august": "August",
        "september": "September",
        "october": "Oktober",
        "november": "November",
        "december": "Dezember"
    },
    "timeAgo": {
        "days": {
            "singular": "vor [count] Tag",
            "plural": "vor [count] Tagen"
        },
        "hours": {
            "singular": "vor [count] Stunde",
            "plural": "vor [count] Stunden"
        },
        "minutes": {
            "singular": "vor [count] Minute",
            "plural": "vor [count] Minuten"
        },
        "seconds": {
            "singular": "vor [count] Sekunde",
            "plural": "vor [count] Sekunden"
        }
    },
    "reviewFilters": {
        "byStars1": "Einige unserer [star1]-Sterne-Bewertungen",
        "byStars2": "Einige unserer [star1]- & [star2]-Sterne-Bewertungen",
        "byStars3": "Einige unserer [star1]-, [star2]- & [star3]-Sterne-Bewertungen",
        "byStars4": "Einige unserer [star1]-, [star2]-, [star3]- & [star4]-Sterne-Bewertungen",
        "byLatest": "Unsere neuesten Bewertungen",
        "byFavoriteOrTag": "Unsere Lieblingsbewertungen"
    },
    "notRated": "Nicht bewertet",
    "starRating": "[ratingStars] von [totalStars] Sternen auf Trustpilot",
    "starReview": "[reviewStars]-Stern(e)-Bewertung",
    "reviewDisclaimer": {
        "body": "Trustpilot prüft Bewertungen"
    }
}

},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],5:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],6:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "review",
        "plural": "reviews",
        "collectedVia": "Collected via [source]",
        "verifiedVia": "Verified, collected via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verified",
                "infoTitle": "Verified review",
                "info": "[LINK-BEGIN]Learn more[LINK-END] about review types"
            },
            "invitedReview": {
                "label": "Invited",
                "infoTitle": "Invited review",
                "infoTrustpilot": "Reviews for Trustpilot that are labeled [BOLD-BEGIN]Invited[BOLD-END] were written via a link leading directly to our review form.",
                "info": "[LINK-BEGIN]Learn more[LINK-END] about review types"
            },
            "redirectedReview": {
                "label": "Redirected",
                "infoTitle": "Redirected review",
                "info": "[LINK-BEGIN]Learn more[LINK-END] about review types"
            }
        }
    },
    "monthNames": {
        "january": "January",
        "february": "February",
        "march": "March",
        "april": "April",
        "may": "May",
        "june": "June",
        "july": "July",
        "august": "August",
        "september": "September",
        "october": "October",
        "november": "November",
        "december": "December"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] day ago",
            "plural": "[count] days ago"
        },
        "hours": {
            "singular": "[count] hour ago",
            "plural": "[count] hours ago"
        },
        "minutes": {
            "singular": "[count] minute ago",
            "plural": "[count] minutes ago"
        },
        "seconds": {
            "singular": "[count] second ago",
            "plural": "[count] seconds ago"
        }
    },
    "reviewFilters": {
        "byStars1": "Showing our [star1] star reviews",
        "byStars2": "Showing our [star1] & [star2] star reviews",
        "byStars3": "Showing our [star1], [star2] & [star3] star reviews",
        "byStars4": "Showing our [star1], [star2], [star3] & [star4] star reviews",
        "byLatest": "Showing our latest reviews",
        "byFavoriteOrTag": "Showing our favourite reviews"
    },
    "notRated": "Not rated",
    "starRating": "[ratingStars] out of [totalStars] star rating on Trustpilot",
    "starReview": "[reviewStars] star review",
    "reviewDisclaimer": {
        "body": "Trustpilot checks reviews"
    }
}

},{}],7:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],8:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],9:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],10:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],11:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "review",
        "plural": "reviews",
        "collectedVia": "Collected via [source]",
        "verifiedVia": "Verified, collected via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verified",
                "infoTitle": "Verified review",
                "info": "[LINK-BEGIN]Learn more[LINK-END] about review types"
            },
            "invitedReview": {
                "label": "Invited",
                "infoTitle": "Invited review",
                "infoTrustpilot": "Reviews for Trustpilot that are labeled [BOLD-BEGIN]Invited[BOLD-END] were written via a link leading directly to our review form.",
                "info": "[LINK-BEGIN]Learn more[LINK-END] about review types"
            },
            "redirectedReview": {
                "label": "Redirected",
                "infoTitle": "Redirected review",
                "info": "[LINK-BEGIN]Learn more[LINK-END] about review types"
            }
        }
    },
    "monthNames": {
        "january": "January",
        "february": "February",
        "march": "March",
        "april": "April",
        "may": "May",
        "june": "June",
        "july": "July",
        "august": "August",
        "september": "September",
        "october": "October",
        "november": "November",
        "december": "December"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] day ago",
            "plural": "[count] days ago"
        },
        "hours": {
            "singular": "[count] hour ago",
            "plural": "[count] hours ago"
        },
        "minutes": {
            "singular": "[count] minute ago",
            "plural": "[count] minutes ago"
        },
        "seconds": {
            "singular": "[count] second ago",
            "plural": "[count] seconds ago"
        }
    },
    "reviewFilters": {
        "byStars1": "Showing our [star1] star reviews",
        "byStars2": "Showing our [star1] & [star2] star reviews",
        "byStars3": "Showing our [star1], [star2] & [star3] star reviews",
        "byStars4": "Showing our [star1], [star2], [star3] & [star4] star reviews",
        "byLatest": "Showing our latest reviews",
        "byFavoriteOrTag": "Showing our favorite reviews"
    },
    "notRated": "Not rated",
    "starRating": "[ratingStars] out of [totalStars] star rating on Trustpilot",
    "starReview": "[reviewStars] star review",
    "reviewDisclaimer": {
        "body": "Trustpilot checks reviews",
        "description": "Click to learn more"
    },
    "widgetLabel": "Trustpilot reviews",
    "businessRatingTextWithReviewCount": "Rated [trustScore] out of [totalScore]. [reviewCount] reviews on Trustpilot",
    "businessRatingTextWithTrustScoreRating": "Rated [trustScoreRating]. [trustScore] out of [totalScore] on Trustpilot",
    "businessRatingTextWithTSRatingAndReviewCount": "Rated [trustScoreRating]. [trustScore] out of [totalScore]. [reviewCount] reviews on Trustpilot",
    "clickProfileLink": "Click to view the company's Trustpilot profile",
    "productRatingTextWithStars": "[reviewCount] reviews with [stars] stars",
    "productRatingTextWith1Star": "[reviewCount] reviews with [star] star"
}

},{}],12:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "opinión",
        "plural": "opiniones",
        "collectedVia": "Fuente: [source]",
        "verifiedVia": "Verificada, recopilada vía [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verificada",
                "infoTitle": "Opinión verificada",
                "info": "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
            },
            "invitedReview": {
                "label": "Por invitación",
                "infoTitle": "Opinión por invitación",
                "infoTrustpilot": "Las opiniones de Trustpilot con la etiqueta [BOLD-BEGIN]Por invitación[BOLD-END] se escribieron a través de un enlace que dirige directamente a nuestro formulario para opinar.",
                "info": "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
            },
            "redirectedReview": {
                "label": "Redirigida",
                "infoTitle": "Opinión redirigida",
                "info": "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
            }
        }
    },
    "monthNames": {
        "january": "enero",
        "february": "febrero",
        "march": "marzo",
        "april": "abril",
        "may": "mayo",
        "june": "junio",
        "july": "julio",
        "august": "agosto",
        "september": "septiembre",
        "october": "octubre",
        "november": "noviembre",
        "december": "diciembre"
    },
    "timeAgo": {
        "days": {
            "singular": "Hace [count] día",
            "plural": "Hace [count] días"
        },
        "hours": {
            "singular": "Hace [count] hora",
            "plural": "Hace [count] horas"
        },
        "minutes": {
            "singular": "Hace [count] minuto",
            "plural": "Hace [count] minutos"
        },
        "seconds": {
            "singular": "Hace [count] segundo",
            "plural": "Hace [count] segundos"
        }
    },
    "reviewFilters": {
        "byStars1": "Nuestras opiniones de [star1] estrellas",
        "byStars2": "Nuestras opiniones de [star1] y [star2] estrellas",
        "byStars3": "Nuestras opiniones de [star1], [star2] y [star3] estrellas",
        "byStars4": "Nuestras opiniones de [star1], [star2], [star3] y [star4] estrellas",
        "byLatest": "Nuestras opiniones más recientes",
        "byFavoriteOrTag": "Nuestras opiniones preferidas"
    },
    "notRated": "Sin valorar",
    "starRating": "[ratingStars] estrella(s) de [totalStars] en Trustpilot",
    "starReview": "Opinión de [reviewStars] estrella(s)",
    "reviewDisclaimer": {
        "body": "Trustpilot verifica las opiniones"
    }
}

},{}],13:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "arvostelu",
        "plural": "arvostelua",
        "collectedVia": "Arvostelun lähde: [source]",
        "verifiedVia": "Varmennettu, lähde: [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Varmennettu",
                "infoTitle": "Varmennettu arvostelu",
                "info": "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
            },
            "invitedReview": {
                "label": "Kutsuttu",
                "infoTitle": "Kutsuttu arvostelu",
                "infoTrustpilot": "Trustpilotin arvostelut, joissa on merkintä [BOLD-BEGIN]Kutsuttu[BOLD-END], kirjoitettiin linkin kautta, joka johtaa suoraan arvostelulomakkeeseemme.",
                "info": "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
            },
            "redirectedReview": {
                "label": "Uudelleenohjattu",
                "infoTitle": "Uudelleenohjattu arvostelu",
                "info": "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
            }
        }
    },
    "monthNames": {
        "january": "tammikuuta",
        "february": "helmikuuta",
        "march": "maaliskuuta",
        "april": "huhtikuuta",
        "may": "toukokuuta",
        "june": "kesäkuuta",
        "july": "heinäkuuta",
        "august": "elokuuta",
        "september": "syyskuuta",
        "october": "lokakuuta",
        "november": "marraskuuta",
        "december": "joulukuuta"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] päivää sitten",
            "plural": "[count] päivää sitten"
        },
        "hours": {
            "singular": "[count] tuntia sitten",
            "plural": "[count] tuntia sitten"
        },
        "minutes": {
            "singular": "[count] minuuttia sitten",
            "plural": "[count] minuuttia sitten"
        },
        "seconds": {
            "singular": "[count] sekuntia sitten",
            "plural": "[count] sekuntia sitten"
        }
    },
    "reviewFilters": {
        "byStars1": "Näytetään [star1] tähden arvostelumme",
        "byStars2": "Näytetään [star1] & [star2] tähden arvostelumme",
        "byStars3": "Näytetään [star1], [star2] & [star3] tähden arvostelumme",
        "byStars4": "Näytetään [star1], [star2], [star3] & [star4] tähden arvostelumme",
        "byLatest": "Näytetään viimeisimmät arvostelumme",
        "byFavoriteOrTag": "Näytetään suosikkiarvostelumme"
    },
    "notRated": "Ei arvioitu",
    "starRating": "[ratingStars]/[totalStars] tähtiluokitus Trustpilotissa",
    "starReview": "[reviewStars] tähden arvostelu",
    "reviewDisclaimer": {
        "body": "Trustpilot suorittaa arvostelujen tarkastuksia"
    }
}

},{}],14:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "avis",
        "plural": "avis",
        "collectedVia": "Collecté via [source]",
        "verifiedVia": "Vérifié, collecté via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Vérifié",
                "infoTitle": "Avis vérifié",
                "info": "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
            },
            "invitedReview": {
                "label": "Sur invitation",
                "infoTitle": "Avis sur invitation",
                "infoTrustpilot": "Les avis au sujet de Trustpilot accompagnés du statut [BOLD-BEGIN]Sur invitation[BOLD-END] ont été écrits via un lien direct vers notre formulaire d'évaluation.",
                "info": "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
            },
            "redirectedReview": {
                "label": "Redirigé",
                "infoTitle": "Avis redirigé",
                "info": "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
            }
        }
    },
    "monthNames": {
        "january": "janvier",
        "february": "février",
        "march": "mars",
        "april": "avril",
        "may": "mai",
        "june": "juin",
        "july": "juillet",
        "august": "août",
        "september": "septembre",
        "october": "octobre",
        "november": "novembre",
        "december": "décembre"
    },
    "timeAgo": {
        "days": {
            "singular": "ll y a [count] jour",
            "plural": "Il y a [count] jours"
        },
        "hours": {
            "singular": "Il y a [count] heure",
            "plural": "Il y a [count] heures"
        },
        "minutes": {
            "singular": "Il y a [count] minute",
            "plural": "Il y a [count] minutes"
        },
        "seconds": {
            "singular": "Il y a [count] seconde",
            "plural": "Il y a [count] secondes"
        }
    },
    "reviewFilters": {
        "byStars1": "Nos avis [star1] étoiles",
        "byStars2": "Nos avis [star1] et [star2] étoiles",
        "byStars3": "Nos avis [star1], [star2] et [star3] étoiles",
        "byStars4": "Nos avis [star1], [star2], [star3] et [star4] étoiles",
        "byLatest": "Nos derniers avis",
        "byFavoriteOrTag": "Nos avis préférés"
    },
    "notRated": "Non évalué",
    "starRating": "[ratingStars] sur [totalStars] étoiles sur Trustpilot",
    "starReview": "Avis [reviewStars] étoile",
    "reviewDisclaimer": {
        "body": "Trustpilot vérifie les avis"
    }
}

},{}],15:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"dup":14}],16:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const dk = __importStar(require("./da-DK/strings.json"));
const at = __importStar(require("./de-AT/strings.json"));
const ch = __importStar(require("./de-CH/strings.json"));
const de = __importStar(require("./de-DE/strings.json"));
const au = __importStar(require("./en-AU/strings.json"));
const ca = __importStar(require("./en-CA/strings.json"));
const gb = __importStar(require("./en-GB/strings.json"));
const ie = __importStar(require("./en-IE/strings.json"));
const nz = __importStar(require("./en-NZ/strings.json"));
const us = __importStar(require("./en-US/strings.json"));
const es = __importStar(require("./es-ES/strings.json"));
const fi = __importStar(require("./fi-FI/strings.json"));
const be = __importStar(require("./fr-BE/strings.json"));
const fr = __importStar(require("./fr-FR/strings.json"));
const it = __importStar(require("./it-IT/strings.json"));
const jp = __importStar(require("./ja-JP/strings.json"));
const no = __importStar(require("./nb-NO/strings.json"));
const beNl = __importStar(require("./nl-BE/strings.json"));
const nl = __importStar(require("./nl-NL/strings.json"));
const pl = __importStar(require("./pl-PL/strings.json"));
const br = __importStar(require("./pt-BR/strings.json"));
const pt = __importStar(require("./pt-PT/strings.json"));
const ru = __importStar(require("./ru-RU/strings.json"));
const se = __importStar(require("./sv-SE/strings.json"));
const cn = __importStar(require("./zh-CN/strings.json"));
const locales = {
    'da-DK': dk,
    'de-AT': at,
    'de-CH': ch,
    'de-DE': de,
    'en-AU': au,
    'en-CA': ca,
    'en-GB': gb,
    'en-IE': ie,
    'en-NZ': nz,
    'en-US': us,
    'es-ES': es,
    'fi-FI': fi,
    'fr-BE': be,
    'fr-FR': fr,
    'it-IT': it,
    'ja-JP': jp,
    'nb-NO': no,
    'nl-BE': beNl,
    'nl-NL': nl,
    'pl-PL': pl,
    'pt-BR': br,
    'pt-PT': pt,
    'ru-RU': ru,
    'sv-SE': se,
    'zh-CN': cn,
};
exports.default = locales;

},{"./da-DK/strings.json":2,"./de-AT/strings.json":3,"./de-CH/strings.json":4,"./de-DE/strings.json":5,"./en-AU/strings.json":6,"./en-CA/strings.json":7,"./en-GB/strings.json":8,"./en-IE/strings.json":9,"./en-NZ/strings.json":10,"./en-US/strings.json":11,"./es-ES/strings.json":12,"./fi-FI/strings.json":13,"./fr-BE/strings.json":14,"./fr-FR/strings.json":15,"./it-IT/strings.json":17,"./ja-JP/strings.json":18,"./nb-NO/strings.json":19,"./nl-BE/strings.json":20,"./nl-NL/strings.json":21,"./pl-PL/strings.json":22,"./pt-BR/strings.json":23,"./pt-PT/strings.json":24,"./ru-RU/strings.json":25,"./sv-SE/strings.json":26,"./zh-CN/strings.json":27}],17:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "recensione",
        "plural": "recensioni",
        "collectedVia": "Raccolta tramite [source]",
        "verifiedVia": "Verificata, raccolta da [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verificata",
                "infoTitle": "Recensione verificata",
                "info": "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
            },
            "invitedReview": {
                "label": "Su invito",
                "infoTitle": "Recensione su invito",
                "infoTrustpilot": "Le recensioni a proposito di Trustpilot contrassegnate con la dicitura [BOLD-BEGIN]Su invito[BOLD-END] sono state scritte mediante un link che punta direttamente al nostro modulo di recensione.",
                "info": "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
            },
            "redirectedReview": {
                "label": "Reindirizzata",
                "infoTitle": "Recensione reindirizzata",
                "info": "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
            }
        }
    },
    "monthNames": {
        "january": "gennaio",
        "february": "febbraio",
        "march": "marzo",
        "april": "aprile",
        "may": "maggio",
        "june": "giugno",
        "july": "luglio",
        "august": "agosto",
        "september": "settembre",
        "october": "ottobre",
        "november": "novembre",
        "december": "dicembre"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] giorno fa",
            "plural": "[count] giorni fa"
        },
        "hours": {
            "singular": "[count] ora fa",
            "plural": "[count] ore fa"
        },
        "minutes": {
            "singular": "[count] minuto fa",
            "plural": "[count] minuti fa"
        },
        "seconds": {
            "singular": "[count] secondo fa",
            "plural": "[count] secondi fa"
        }
    },
    "reviewFilters": {
        "byStars1": "Le nostre recensioni a [star1] stelle",
        "byStars2": "Le nostre recensioni a [star1] e a [star2] stelle",
        "byStars3": "Le nostre recensioni a [star1], a [star2] e a [star3] stelle",
        "byStars4": "Le nostre recensioni a [star1], a [star2], a [star3] e a [star4] stelle",
        "byLatest": "Le nostre ultime recensioni",
        "byFavoriteOrTag": "Le nostre recensioni preferite"
    },
    "notRated": "Nessuna valutazione",
    "starRating": "[ratingStars] su [totalStars] valutazioni in stelle su Trustpilot",
    "starReview": "Recensione a [reviewStars] stelle",
    "reviewDisclaimer": {
        "body": "Le recensioni sono controllate da Trustpilot"
    }
}

},{}],18:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "レビュー",
        "plural": "レビュー",
        "collectedVia": "[source] によって収集",
        "verifiedVia": "[source] によって確認・収集",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "確認済み",
                "infoTitle": "確認済みのレビュー",
                "info": "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
            },
            "invitedReview": {
                "label": "手動招待",
                "infoTitle": "招待によるレビュー",
                "infoTrustpilot": "[BOLD-BEGIN]招待[BOLD-END]ラベルの付いたTrustpilot に関するレビューは、当社のレビューフォームへのダイレクトリンクを介して書かれたものです。",
                "info": "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
            },
            "redirectedReview": {
                "label": "自動転送",
                "infoTitle": "自動転送によるレビュー",
                "info": "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
            }
        }
    },
    "monthNames": {
        "january": "1月",
        "february": "2月",
        "march": "3月",
        "april": "4月",
        "may": "5月",
        "june": "6月",
        "july": "7月",
        "august": "8月",
        "september": "9月",
        "october": "10月",
        "november": "11月",
        "december": "12月"
    },
    "timeAgo": {
        "days": {
            "singular": "[count]日前",
            "plural": "[count]日前"
        },
        "hours": {
            "singular": "[count]時間前",
            "plural": "[count]時間前"
        },
        "minutes": {
            "singular": "[count]分前",
            "plural": "[count]分前"
        },
        "seconds": {
            "singular": "[count]秒前",
            "plural": "[count]秒前"
        }
    },
    "reviewFilters": {
        "byStars1": "[star1]つ星のレビューを表示",
        "byStars2": "[star1]つ星と[star2]つ星のレビューを表示",
        "byStars3": "[star1]つ星、[star2]つ星、[star3]つ星のレビューを表示",
        "byStars4": "[star1]つ星、[star2]つ星、[star3]つ星、[star4]つ星のレビューを表示",
        "byLatest": "最新のレビューを表示",
        "byFavoriteOrTag": "お気に入りのレビューを表示"
    },
    "notRated": "未評価",
    "starRating": "Trustpilot上で、[totalStars]星のうち [ratingStars]星の評価",
    "starReview": "[reviewStars]つ星レビュー",
    "reviewDisclaimer": {
        "body": "Trustpilot はレビューをチェックします"
    }
}

},{}],19:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "anmeldelse",
        "plural": "anmeldelser",
        "collectedVia": "Samlet inn gjennom [source]",
        "verifiedVia": "Bekreftet – samlet inn via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Bekreftet",
                "infoTitle": "Bekreftet kunde",
                "info": "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
            },
            "invitedReview": {
                "label": "På oppfordring",
                "infoTitle": "Anmeldelse skrevet på oppfordring",
                "infoTrustpilot": "Anmeldelser med benevningen [BOLD-BEGIN]«På oppfordring»[BOLD-END] har blitt sendt inn via en direktekobling til anmeldelsesskjemaet på Trustpilot.",
                "info": "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
            },
            "redirectedReview": {
                "label": "Omdirigert",
                "infoTitle": "Omdirigert anmeldelse",
                "info": "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
            }
        }
    },
    "monthNames": {
        "january": "januar",
        "february": "februar",
        "march": "mars",
        "april": "april",
        "may": "mai",
        "june": "juni",
        "july": "juli",
        "august": "august",
        "september": "september",
        "october": "oktober",
        "november": "november",
        "december": "desember"
    },
    "timeAgo": {
        "days": {
            "singular": "For [count] dag siden",
            "plural": "For [count] dager siden"
        },
        "hours": {
            "singular": "For [count] time siden",
            "plural": "For [count] timer siden"
        },
        "minutes": {
            "singular": "For [count] minutt siden",
            "plural": "For [count] minutter siden"
        },
        "seconds": {
            "singular": "For [count] sekund siden",
            "plural": "For [count] sekunder siden"
        }
    },
    "reviewFilters": {
        "byStars1": "Viser [star1]-stjernersanmeldelsene",
        "byStars2": "Viser [star1]- og [star2]-stjernersanmeldelsene",
        "byStars3": "Viser [star1]-, [star2]- og [star3]-stjernersanmeldelsene",
        "byStars4": "Viser [star1]-, [star2]-, [star3]- og [star4]-stjernersanmeldelsene",
        "byLatest": "Viser de nyeste anmeldelsene",
        "byFavoriteOrTag": "Viser favorittene våre"
    },
    "notRated": "Ikke vurdert",
    "starRating": "[ratingStars] av [totalStars] stjerner på Trustpilot",
    "starReview": "[reviewStars]-stjernersanmeldelse",
    "reviewDisclaimer": {
        "body": "Trustpilot sjekker anmeldelsene"
    }
}

},{}],20:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "review",
        "plural": "reviews",
        "collectedVia": "Verzameld via [source]",
        "verifiedVia": "Geverifieerd — verzameld via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Geverifieerd",
                "infoTitle": "Geverifieerde review",
                "info": "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
            },
            "invitedReview": {
                "label": "Op uitnodiging",
                "infoTitle": "Review op uitnodiging",
                "infoTrustpilot": "Reviews over Trustpilot met het label [BOLD-BEGIN]Op uitnodiging[BOLD-END] zijn ingediend via een directe link naar ons reviewformulier.",
                "info": "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
            },
            "redirectedReview": {
                "label": "Omgeleid",
                "infoTitle": "Omgeleide review",
                "info": "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
            }
        }
    },
    "monthNames": {
        "january": "januari",
        "february": "februari",
        "march": "maart",
        "april": "april",
        "may": "mei",
        "june": "juni",
        "july": "juli",
        "august": "augustus",
        "september": "september",
        "october": "oktober",
        "november": "november",
        "december": "December"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] dag geleden",
            "plural": "[count] dagen geleden"
        },
        "hours": {
            "singular": "[count] uur geleden",
            "plural": "[count] uur geleden"
        },
        "minutes": {
            "singular": "[count] minuut geleden",
            "plural": "[count] minuten geleden"
        },
        "seconds": {
            "singular": "[count] seconde geleden",
            "plural": "[count] seconden geleden"
        }
    },
    "reviewFilters": {
        "byStars1": "Onze reviews met [star1] sterren",
        "byStars2": "Onze reviews met [star1] en [star2] sterren",
        "byStars3": "Onze reviews met [star1], [star2] en [star3] sterren",
        "byStars4": "Onze reviews met [star1], [star2], [star3] en [star4] sterren",
        "byLatest": "Onze meest recente reviews",
        "byFavoriteOrTag": "Onze favoriete reviews"
    },
    "notRated": "Niet beoordeeld",
    "starRating": "[ratingStars] van [totalStars] sterren op Trustpilot",
    "starReview": "Review van [reviewStars] ster(ren)",
    "reviewDisclaimer": {
        "body": "Trustpilot controleert reviews"
    }
}

},{}],21:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "review",
        "plural": "reviews",
        "collectedVia": "Verzameld via [source]",
        "verifiedVia": "Geverifieerd — verzameld via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Geverifieerd",
                "infoTitle": "Geverifieerde review",
                "info": "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
            },
            "invitedReview": {
                "label": "Op uitnodiging",
                "infoTitle": "Review op uitnodiging",
                "infoTrustpilot": "Reviews over Trustpilot met het label [BOLD-BEGIN]Op uitnodiging[BOLD-END] zijn ingediend via een directe link naar ons reviewformulier.",
                "info": "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
            },
            "redirectedReview": {
                "label": "Omgeleid",
                "infoTitle": "Omgeleide review",
                "info": "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
            }
        }
    },
    "monthNames": {
        "january": "januari",
        "february": "februari",
        "march": "maart",
        "april": "april",
        "may": "mei",
        "june": "juni",
        "july": "juli",
        "august": "augustus",
        "september": "september",
        "october": "oktober",
        "november": "november",
        "december": "december"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] dag geleden",
            "plural": "[count] dagen geleden"
        },
        "hours": {
            "singular": "[count] uur geleden",
            "plural": "[count] uur geleden"
        },
        "minutes": {
            "singular": "[count] minuut geleden",
            "plural": "[count] minuten geleden"
        },
        "seconds": {
            "singular": "[count] seconde geleden",
            "plural": "[count] seconden geleden"
        }
    },
    "reviewFilters": {
        "byStars1": "Onze reviews met [star1] sterren",
        "byStars2": "Onze reviews met [star1] en [star2] sterren",
        "byStars3": "Onze reviews met [star1], [star2] en [star3] sterren",
        "byStars4": "Onze reviews met [star1], [star2], [star3] en [star4] sterren",
        "byLatest": "Onze meest recente reviews",
        "byFavoriteOrTag": "Onze favoriete reviews"
    },
    "notRated": "Niet beoordeeld",
    "starRating": "[ratingStars] van [totalStars] sterren op Trustpilot",
    "starReview": "Review van [reviewStars] ster(ren)",
    "reviewDisclaimer": {
        "body": "Trustpilot controleert reviews"
    }
}

},{}],22:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "recenzja",
        "plural": "recenzji",
        "collectedVia": "Zebrane przez [source]",
        "verifiedVia": "Zweryfikowano i zebrano przez [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Zweryfikowana",
                "infoTitle": "Zweryfikowana recenzja",
                "info": "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
            },
            "invitedReview": {
                "label": "Na zaproszenie",
                "infoTitle": "Rezenzja na zaproszenie",
                "infoTrustpilot": "Recenzje Trustpilot oznaczone jako [BOLD-BEGIN]Na zaproszenie[BOLD-END] zostały dodane za pośrednictwem łącza prowadzącego bezpośrednio do naszego formularza recenzji.",
                "info": "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
            },
            "redirectedReview": {
                "label": "Z przekierowana",
                "infoTitle": "Recenzja z przekierowana",
                "info": "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
            }
        }
    },
    "monthNames": {
        "january": "stycznia",
        "february": "lutego",
        "march": "marca",
        "april": "kwietnia",
        "may": "maja",
        "june": "czerwca",
        "july": "lipca",
        "august": "sierpnia",
        "september": "września",
        "october": "października",
        "november": "listopada",
        "december": "grudnia"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] dzień temu",
            "plural": "[count] dni temu"
        },
        "hours": {
            "singular": "[count] godzinę temu",
            "plural": "[count] godz. temu"
        },
        "minutes": {
            "singular": "[count] minutę temu",
            "plural": "[count] min. temu"
        },
        "seconds": {
            "singular": "[count] sekundę temu",
            "plural": "[count] sek. temu"
        }
    },
    "reviewFilters": {
        "byStars1": "Wyświetlamy nasze [star1]-gwiazdkowe recenzje",
        "byStars2": "Wyświetlamy nasze [star1]- i [star2]-gwiazdkowe recenzje",
        "byStars3": "Wyświetlamy nasze [star1]-, [star2]- i [star3]-gwiazdkowe recenzje",
        "byStars4": "Wyświetlamy nasze [star1]-, [star2]-, [star3]- i [star4]-gwiazdkowe recenzje",
        "byLatest": "Wyświetlamy najnowsze recenzje",
        "byFavoriteOrTag": "Wyświetlamy nasze ulubione recenzje"
    },
    "notRated": "Brak oceny",
    "starRating": "[ratingStars] z [totalStars] oceny w skali gwiazdkowej na Trustpilot",
    "starReview": "Recenzja gwiazdkowa [reviewStars]",
    "reviewDisclaimer": {
        "body": "Trustpilot weryfikuje opinie"
    }
}

},{}],23:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "avaliação",
        "plural": "avaliações",
        "collectedVia": "Recolhida via [source]",
        "verifiedVia": "Verificada, recolhida via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verificada",
                "infoTitle": "Avaliação verificada",
                "info": "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
            },
            "invitedReview": {
                "label": "Por convite",
                "infoTitle": "Avaliação por convite",
                "infoTrustpilot": "As avaliações da Trustpilot marcadas como [BOLD-BEGIN]Por convite[BOLD-END] foram deixadas utilizando um link direto para o nosso formulário de avaliação.",
                "info": "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
            },
            "redirectedReview": {
                "label": "Redirecionada",
                "infoTitle": "Avaliação redirecionada",
                "info": "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
            }
        }
    },
    "monthNames": {
        "january": "Janeiro",
        "february": "Fevereiro",
        "march": "Março",
        "april": "Abril",
        "may": "Maio",
        "june": "Junho",
        "july": "Julho",
        "august": "Agosto",
        "september": "Setembro",
        "october": "Outubro",
        "november": "Novembro",
        "december": "Dezembro"
    },
    "timeAgo": {
        "days": {
            "singular": "há [count] dia",
            "plural": "há [count] dias"
        },
        "hours": {
            "singular": "há [count] hora",
            "plural": "há [count] horas"
        },
        "minutes": {
            "singular": "há [count] minuto",
            "plural": "há [count] minutos"
        },
        "seconds": {
            "singular": "há [count] segundo",
            "plural": "há [count] segundos"
        }
    },
    "reviewFilters": {
        "byStars1": "Nossas avaliações com [star1] estrela(s)",
        "byStars2": "Nossas avaliações com [star1] & [star2] estrelas",
        "byStars3": "Nossas avaliações com [star1], [star2] & [star3] estrelas",
        "byStars4": "Nossas avaliações com [star1], [star2], [star3] & [star4] estrelas",
        "byLatest": "Mostrando nossas avaliações mais recentes",
        "byFavoriteOrTag": "Mostrando nossas avaliações favoritas"
    },
    "notRated": "Sem classificação",
    "starRating": "[ratingStars] de [totalStars] estrelas na Trustpilot",
    "starReview": "Avaliação de [reviewStars] estrela(s)",
    "reviewDisclaimer": {
        "body": "A Trustpilot verifica as avaliações"
    }
}

},{}],24:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "opinião",
        "plural": "opiniões",
        "collectedVia": "Recolhida via [source]",
        "verifiedVia": "Verificada, recolhida via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verificada",
                "infoTitle": "Opinião verificada",
                "info": "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
            },
            "invitedReview": {
                "label": "Por convite",
                "infoTitle": "Opinião por convite",
                "infoTrustpilot": "As opiniões da Trustpilot marcadas como [BOLD-BEGIN]Por convite[BOLD-END] foram escritas utilizando um link directo para o nosso formulário de avaliação.",
                "info": "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
            },
            "redirectedReview": {
                "label": "Redireccionada",
                "infoTitle": "Opinião redireccionada",
                "info": "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
            }
        }
    },
    "monthNames": {
        "january": "Janeiro",
        "february": "Fevereiro",
        "march": "Março",
        "april": "Abril",
        "may": "Maio",
        "june": "Junho",
        "july": "Julho",
        "august": "Agosto",
        "september": "Setembro",
        "october": "Outubro",
        "november": "Novembro",
        "december": "Dezembro"
    },
    "timeAgo": {
        "days": {
            "singular": "há [count] dia",
            "plural": "há [count] dias"
        },
        "hours": {
            "singular": "há [count] hora",
            "plural": "há [count] horas"
        },
        "minutes": {
            "singular": "há [count] minuto",
            "plural": "há [count] minutos"
        },
        "seconds": {
            "singular": "há [count] segundo",
            "plural": "há [count] segundos"
        }
    },
    "reviewFilters": {
        "byStars1": "As nossas opiniões com [star1] estrela(s)",
        "byStars2": "As nossas opiniões com [star1] e [star2] estrelas",
        "byStars3": "As nossas opiniões com [star1], [star2] e [star3] estrelas",
        "byStars4": "As nossas opiniões com [star1], [star2], [star3] e [star4] estrelas",
        "byLatest": "As nossas opiniões mais recentes",
        "byFavoriteOrTag": "As nossas opiniões favoritas"
    },
    "notRated": "Sem classificação",
    "starRating": "[ratingStars] de [totalStars] estrelas na Trustpilot",
    "starReview": "Opinião de [reviewStars] estrela(s)",
    "reviewDisclaimer": {
        "body": "A Trustpilot verifica as opiniões"
    }
}

},{}],25:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "отзыв",
        "plural": "отзывов",
        "collectedVia": "Собрано через [source]",
        "verifiedVia": "Подтверждено, собрано через [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Подтверждено",
                "infoTitle": "Подтвержденный отзыв",
                "info": "[LINK-BEGIN]Узнать больше[LINK-END] о типах отзывов"
            },
            "invitedReview": {
                "label": "По приглашению",
                "infoTitle": "Отзыв по приглашению",
                "infoTrustpilot": "Отзывы о Trustpilot с отметкой [BOLD-BEGIN]По приглашению[BOLD-END] были написаны по ссылке, ведущей непосредственно к нашей форме отзыва.",
                "info": "[LINK-BEGIN]Узнать больше[LINK-END] о типах отзывов"
            },
            "redirectedReview": {
                "label": "Перенаправлено",
                "infoTitle": "Перенаправленный отзыв",
                "info": "[LINK-BEGIN]Узнать больше[LINK-END] о типах отзывов"
            }
        }
    },
    "monthNames": {
        "january": "января",
        "february": "февраля",
        "march": "марта",
        "april": "апреля",
        "may": "мая",
        "june": "июня",
        "july": "Июль",
        "august": "августа",
        "september": "сентября",
        "october": "Октябрь",
        "november": "ноября",
        "december": "Декабрь"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] день назад",
            "plural": "[count] дней назад"
        },
        "hours": {
            "singular": "[count] час назад",
            "plural": "[count] часов назад"
        },
        "minutes": {
            "singular": "[count] минуту назад",
            "plural": "[count] минут назад"
        },
        "seconds": {
            "singular": "[count] секунду назад",
            "plural": "[count] секунд назад"
        }
    },
    "reviewFilters": {
        "byStars1": "Наши отзывы [star1] звезд",
        "byStars2": "Наши отзывы [star1] и [star2] звезд",
        "byStars3": "Наши отзывы [star1], [star2] и [star3] звезд",
        "byStars4": "Наши отзывы [star1], [star2], [star3] и [star4] звезд",
        "byLatest": "Наши недавние отзывы",
        "byFavoriteOrTag": "Наши любимые отзывы"
    },
    "notRated": "Без рейтинга",
    "starRating": "[ratingStars] out of [totalStars] star rating on Trustpilot",
    "starReview": "[reviewStars] star review",
    "reviewDisclaimer": {
        "body": "Trustpilot checks reviews"
    }
}

},{}],26:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "omdöme",
        "plural": "omdömen",
        "collectedVia": "Insamlat via [source]",
        "verifiedVia": "Verifierat – insamlat via [source]",
        "serviceReviewTypeLabels": {
            "verifiedReview": {
                "label": "Verifierat",
                "infoTitle": "Verifierat omdöme",
                "info": "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
            },
            "invitedReview": {
                "label": "Med inbjudan",
                "infoTitle": "Omdöme skrivet efter inbjudan",
                "infoTrustpilot": "Omdömen med etiketten [BOLD-BEGIN]Med inbjudan[BOLD-END] har skrivits av personer som har hittat vårt omdömesformulär via en direktlänk.",
                "info": "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
            },
            "redirectedReview": {
                "label": "Omdirigerat",
                "infoTitle": "Omdirigerat omdöme",
                "info": "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
            }
        }
    },
    "monthNames": {
        "january": "januari",
        "february": "februari",
        "march": "mars",
        "april": "april",
        "may": "maj",
        "june": "juni",
        "july": "juli",
        "august": "augusti",
        "september": "september",
        "october": "oktober",
        "november": "november",
        "december": "december"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] dag sedan",
            "plural": "[count] dagar sedan"
        },
        "hours": {
            "singular": "[count] timme sedan",
            "plural": "[count] timmar sedan"
        },
        "minutes": {
            "singular": "[count] minut sedan",
            "plural": "[count] minuter sedan"
        },
        "seconds": {
            "singular": "[count] sekund sedan",
            "plural": "[count] sekunder sedan"
        }
    },
    "reviewFilters": {
        "byStars1": "Visar våra [star1]-stjärniga omdömen",
        "byStars2": "Visar våra [star1]- och [star2]-stjärniga omdömen",
        "byStars3": "Visar våra [star1]-, [star2]- och [star3]-stjärniga omdömen",
        "byStars4": "Visar våra [star1]-, [star2]-, [star3]- och [star4]-stjärniga omdömen",
        "byLatest": "Visar våra senaste omdömen",
        "byFavoriteOrTag": "Visar våra favoritomdömen"
    },
    "notRated": "Ej betygsatt",
    "starRating": "[ratingStars] av [totalStars] stjärnor på Trustpilot",
    "starReview": "[reviewStars]-stjärnigt omdöme",
    "reviewDisclaimer": {
        "body": "Trustpilot kontrollerar omdömen"
    }
}

},{}],27:[function(require,module,exports){
module.exports={
    "reviews": {
        "singular": "条评论",
        "plural": "条点评,"
    },
    "monthNames": {
        "january": "一月",
        "february": "二月",
        "march": "三月",
        "april": "四月",
        "may": "五月",
        "june": "六月",
        "july": "七月",
        "august": "八月",
        "september": "九月",
        "october": "十月",
        "november": "十一月",
        "december": "十二月"
    },
    "timeAgo": {
        "days": {
            "singular": "[count] day ago",
            "plural": "[count] days ago"
        },
        "hours": {
            "singular": "[count] hour ago",
            "plural": "[count] hours ago"
        },
        "minutes": {
            "singular": "[count] minute ago",
            "plural": "[count] minutes ago"
        },
        "seconds": {
            "singular": "[count] second ago",
            "plural": "[count] seconds ago"
        }
    },
    "reviewFilters": {
        "byStars1": "Showing our [star1] star reviews",
        "byStars2": "Showing our [star1] & [star2] star reviews",
        "byStars3": "Showing our [star1], [star2] & [star3] star reviews",
        "byStars4": "Showing our [star1], [star2], [star3] & [star4] star reviews",
        "byLatest": "Showing our latest reviews",
        "byFavoriteOrTag": "Showing our favorite reviews"
    }
}

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCall = void 0;
const queryString_1 = require("../queryString");
const rootUri_1 = require("../rootUri");
const xhr_1 = require("../xhr");
const makeId = (numOfChars) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < numOfChars; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
const apiCall = (uri, params) => new Promise((resolve, fail) => {
    let values;
    let url;
    if (uri.indexOf('/') === 0) {
        values = params || {};
        const { token } = (0, queryString_1.getAsObject)();
        if (token) {
            values.random = makeId(20);
        }
    }
    if (uri.indexOf('http') === 0) {
        url = uri.replace(/^https?:/, 'https:');
    }
    else if (uri.indexOf('/') === 0) {
        url = (0, rootUri_1.getWidgetRootUri)() + uri;
    }
    else {
        return fail();
    }
    return (0, xhr_1.xhr)({
        url,
        data: values,
        success: resolve,
        error: fail,
    });
});
exports.apiCall = apiCall;

},{"../queryString":43,"../rootUri":44,"../xhr":54}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* common-shake removed: exports.getQueryParams = */ void getQueryParams;
exports.getAsObject = getQueryParams;
const fn_1 = require("./fn");
function paramsToObject(paramString) {
    const tokens = ['?', '#'];
    const dropFirstIfToken = (str) => (tokens.indexOf(str[0]) !== -1 ? str.substring(1) : str);
    const toPairs = (str) => str
        .split('&')
        .filter(Boolean)
        .map((pairString) => {
        const [key, value] = pairString.split('=');
        try {
            const dKey = decodeURIComponent(key);
            const dValue = decodeURIComponent(value);
            return [dKey, dValue];
        }
        catch (e) {
            return;
        }
    })
        .filter(Boolean);
    const mkObject = (0, fn_1.compose)(fn_1.pairsToObject, toPairs, dropFirstIfToken);
    return mkObject(paramString);
}
function getQueryParams(location = window.location) {
    const queryParams = paramsToObject(location.search);
    const hashParams = paramsToObject(location.hash);
    return { ...queryParams, ...hashParams };
}

},{"./fn":39}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWidgetRootUri = void 0;
const getWidgetRootUri = () => {
    const host = '#{WidgetApi.Host}';
    return host.indexOf('#') === 0 ? 'https://widget.tp-staging.com' : host;
};
exports.getWidgetRootUri = getWidgetRootUri;

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xhr = xhr;
function isIE() {
    const myNav = navigator.userAgent.toLowerCase();
    return myNav.indexOf('msie') !== -1 ? parseInt(myNav.split('msie')[1]) : false;
}
function parse(req) {
    try {
        return JSON.parse(req.responseText);
    }
    catch (e) {
        return req.responseText;
    }
}
function toQueryString(obj) {
    const str = [];
    for (const p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
        }
    }
    return str.join('&');
}
function noop() { }
function makeRequest(params) {
    const XMLHttpRequest = window.XMLHttpRequest || ActiveXObject;
    const request = new XMLHttpRequest('MSXML2.XMLHTTP.3.0');
    request.open(params.type, params.url, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                params.success(parse(request));
            }
            else {
                params.error(parse(request));
            }
        }
    };
    request.send(params.data);
}
function makeRequestIE(params) {
    const request = new window.XDomainRequest();
    const protocol = window.location.protocol;
    params.url = params.url.replace(/https?:/, protocol);
    request.open(params.type, params.url);
    request.onload = function () {
        params.success(parse(request));
    };
    request.onerror = function () {
        params.error(parse(request));
    };
    setTimeout(function () {
        request.send(params.data);
    }, 0);
}
function xhr(options) {
    const params = {
        type: options.type || 'GET',
        error: options.error || noop,
        success: options.success || noop,
        data: options.data,
        url: options.url || '',
    };
    if (params.type === 'GET' && params.data) {
        params.url = `${params.url}?${toQueryString(params.data)}`;
        delete params.data;
    }
    if (isIE() && isIE() <= 9) {
        makeRequestIE(params);
    }
    else {
        makeRequest(params);
    }
}

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasProductReviews = exports.hasServiceReviewsMultiFetch = exports.hasServiceReviews = exports.constructTrustBoxAndComplete = exports.multiFetchData = exports.fetchData = void 0;
const communication_1 = require("../communication");
const fn_1 = require("../fn");
const errorFallback_1 = require("../templates/errorFallback");
const loader_1 = require("../templates/loader");
const utils_1 = require("../utils");
const call_1 = require("./call");
const singleFetchObjectKey = 'default_singleFetch_f98ac77b';
const flattenSingleParams = (fetchParamsObject) => {
    const keys = Object.keys(fetchParamsObject);
    return singleFetchObjectKey in fetchParamsObject && keys.length === 1
        ? fetchParamsObject[singleFetchObjectKey]
        : fetchParamsObject;
};
const hasServiceReviews = ({ businessEntity: { numberOfReviews: { total }, }, }) => total > 0;
exports.hasServiceReviews = hasServiceReviews;
const hasServiceReviewsMultiFetch = (baseData) => {
    const keys = Object.keys(baseData);
    return keys.some((k) => hasServiceReviews(baseData[k]));
};
exports.hasServiceReviewsMultiFetch = hasServiceReviewsMultiFetch;
const hasProductReviews = ({ productReviewsSummary, importedProductReviewsSummary }) => {
    const totalProductReviews = productReviewsSummary
        ? productReviewsSummary.numberOfReviews.total
        : 0;
    const totalImportedProductReviews = importedProductReviewsSummary
        ? importedProductReviewsSummary.numberOfReviews.total
        : 0;
    return totalProductReviews + totalImportedProductReviews > 0;
};
exports.hasProductReviews = hasProductReviews;
const baseDataCall = (uri) => ({ businessUnitId, locale, ...opts }) => {
    const baseDataParams = (0, fn_1.rejectNullaryValues)({
        businessUnitId,
        locale,
        ...opts,
        theme: null,
    });
    return (0, call_1.apiCall)(uri, baseDataParams);
};
const constructTrustBoxAndComplete = (constructTrustBox, passToPopup = false, hasReviewsFromBaseData = hasServiceReviews) => ({ baseData, locale, theme, hasMoreReviews, loadMoreReviews }) => {
    const hasReviews = hasReviewsFromBaseData(baseData);
    constructTrustBox({
        baseData,
        locale,
        hasMoreReviews,
        loadMoreReviews,
    });
    const sendOnPopupLoad = ({ data: event }) => {
        if ((0, communication_1.isLoadedMessage)(event)) {
            (0, communication_1.sendAPIDataMessage)({
                baseData,
                locale,
            });
        }
    };
    if (passToPopup) {
        (0, communication_1.setListener)(sendOnPopupLoad);
    }
    (0, utils_1.showTrustBox)(theme, hasReviews);
    (0, errorFallback_1.removeErrorFallback)();
};
exports.constructTrustBoxAndComplete = constructTrustBoxAndComplete;
const multiFetchData = (uri) => (fetchParamsObject, constructTrustBox, passToPopup, hasReviewsFromBaseData) => {
    const firstFetchParams = fetchParamsObject[Object.keys(fetchParamsObject)[0]];
    const { locale, theme = 'light' } = firstFetchParams;
    const baseDataPromises = (0, fn_1.promiseAllObject)((0, fn_1.mapObject)(baseDataCall(uri), fetchParamsObject));
    const readyPromise = (0, utils_1.getOnPageReady)();
    const fetchPromise = Promise.all([baseDataPromises, readyPromise])
        .then(([originalBaseData]) => {
        const baseData = flattenSingleParams(originalBaseData);
        return {
            baseData,
            locale,
            theme,
        };
    })
        .then(constructTrustBoxAndComplete(constructTrustBox, passToPopup, hasReviewsFromBaseData))
        .catch((e) => {
        if (e && e.FallbackLogo) {
            return (0, errorFallback_1.errorFallback)();
        }
    });
    (0, loader_1.withLoader)(fetchPromise);
};
exports.multiFetchData = multiFetchData;
const fetchData = (uri) => (fetchParams, constructTrustBox, passToPopup, hasReviewsFromBaseData) => {
    const fetchParamsObject = { [singleFetchObjectKey]: fetchParams };
    multiFetchData(uri)(fetchParamsObject, constructTrustBox, passToPopup, hasReviewsFromBaseData);
};
exports.fetchData = fetchData;

},{"../communication":36,"../fn":39,"../templates/errorFallback":46,"../templates/loader":47,"../utils":53,"./call":28}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPong = exports.ping = void 0;
/* common-shake removed: exports.send = */ void sendMessage;
/* common-shake removed: exports.createPopup = */ void createPopupIframe;
/* common-shake removed: exports.createModal = */ void createModalIframe;
/* common-shake removed: exports.hideTrustBox = */ void hideMainIframe;
/* common-shake removed: exports.showPopup = */ void showPopupIframe;
/* common-shake removed: exports.hidePopup = */ void hidePopupIframe;
/* common-shake removed: exports.focusPopup = */ void focusPopupIframe;
/* common-shake removed: exports.showModal = */ void showModalIframe;
/* common-shake removed: exports.hideModal = */ void hideModalIframe;
/* common-shake removed: exports.focusModal = */ void focusModalIframe;
/* common-shake removed: exports.loaded = */ void sendLoadedMessage;
/* common-shake removed: exports.setStyles = */ void setStyles;
/* common-shake removed: exports.resizeHeight = */ void resizeHeight;
exports.setListener = addCallbackFunction;
exports.isLoadedMessage = isLoadedMessage;
exports.sendAPIDataMessage = sendAPIDataMessage;
/* common-shake removed: exports.isAPIDataMessage = */ void isAPIDataMessage;
/* common-shake removed: exports.isPopupToggleMessage = */ void isPopupToggleMessage;
/* common-shake removed: exports.scrollToTrustBox = */ void scrollToTrustBox;
const utils_1 = require("./utils");
const wparent = window.parent;
const messageQueue = [];
const defaultOptions = {
    command: 'createIFrame',
    position: 'center top',
    show: false,
    source: 'popup.html',
    queryString: '',
};
const popupOptions = {
    name: 'popup',
    modal: false,
    styles: {
        height: '300px',
        width: '',
    },
};
const modalOptions = {
    name: 'modal',
    modal: true,
    styles: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        margin: '0 auto',
        zindex: 99,
    },
};
let id = null;
const listenerCallbacks = [];
function sendMessage(message) {
    if (id) {
        message.widgetId = id;
        message = JSON.stringify(message);
        wparent.postMessage(message, '*');
    }
    else {
        messageQueue.push(message);
    }
}
function sendMessageTo(target) {
    return (message, payload = {}) => sendMessage({
        ...payload,
        message,
        command: 'message',
        name: target,
    });
}
function sendQueue() {
    while (messageQueue.length) {
        sendMessage(messageQueue.pop());
    }
}
function createPopupIframe(options) {
    sendMessage({
        ...defaultOptions,
        ...popupOptions,
        ...options,
    });
}
function createModalIframe(options) {
    sendMessage({
        ...defaultOptions,
        ...modalOptions,
        ...options,
    });
}
function setStyles(styles, optionalIframeName) {
    sendMessage({ command: 'setStyle', name: optionalIframeName, style: styles });
}
function showIframe(iframeName) {
    sendMessage({ command: 'show', name: iframeName });
    sendMessageTo('main')(`${iframeName} toggled`, { visible: true });
}
function hideIframe(iframeName) {
    sendMessage({ command: 'hide', name: iframeName });
    sendMessageTo('main')(`${iframeName} toggled`, { visible: false });
}
function focusIframe(iframeName) {
    sendMessage({ command: 'focus', name: iframeName });
}
function sendLoadedMessage() {
    sendMessage({ command: 'loaded' });
}
function isLoadedMessage(message) {
    return message === 'loaded';
}
function sendAPIDataMessage(data) {
    sendMessageTo('popup')('API data', data);
}
function areMatchingMessages(message, otherMessage) {
    return ['message', 'command', 'name'].every((key) => message[key] && otherMessage[key] && message[key] === otherMessage[key]);
}
function isAPIDataMessage(message) {
    return areMatchingMessages(message, {
        command: 'message',
        name: 'popup',
        message: 'API data',
    });
}
function isPopupToggleMessage(message) {
    return areMatchingMessages(message, {
        command: 'message',
        name: 'main',
        message: 'popup toggled',
    });
}
function addCallbackFunction(func) {
    listenerCallbacks.push(func);
}
function hideMainIframe() {
    hideIframe('main');
}
function showPopupIframe() {
    showIframe('popup');
}
function hidePopupIframe() {
    hideIframe('popup');
}
function focusPopupIframe() {
    focusIframe('popup');
}
function showModalIframe() {
    showIframe('modal');
}
function hideModalIframe() {
    hideIframe('modal');
}
function focusModalIframe() {
    focusIframe('modal');
}
const sendPing = () => sendMessage({ command: 'ping' });
exports.ping = sendPing;
const onPong = (cb) => {
    const pong = (event) => {
        if (event.data.command === 'pong') {
            cb(event);
        }
    };
    addCallbackFunction(pong);
};
exports.onPong = onPong;
function resizeHeight(optionalHeight, optionalIframeName) {
    const body = document.getElementsByTagName('body')[0];
    sendMessage({
        command: 'resize-height',
        name: optionalIframeName,
        height: optionalHeight || body.offsetHeight,
    });
}
function scrollToTrustBox(targets) {
    sendMessage({
        command: 'scrollTo',
        targets,
    });
}
(0, utils_1.addEventListener)(window, 'message', function (event) {
    if (typeof event.data !== 'string') {
        return;
    }
    let e;
    try {
        e = { data: JSON.parse(event.data) };
    }
    catch (e) {
        return;
    }
    if (e.data.command === 'setId') {
        id = e.data.widgetId;
        sendQueue();
    }
    else {
        for (let i = 0; i < listenerCallbacks.length; i++) {
            const callback = listenerCallbacks[i];
            callback(e);
        }
    }
});

},{"./utils":53}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectNullaryValues = exports.propMaybe = exports.prop = exports.promiseAllObject = exports.pipeMaybe = exports.pairsToObject = exports.mapObject = exports.map = exports.guard = /* common-shake removed: exports.first = */ exports.find = /* common-shake removed: exports.filter = */ exports.compose = /* common-shake removed: exports.chunkTranspose = */ /* common-shake removed: exports.chunk = */ void 0;
const reduce = (f) => (init) => (xs) => xs.reduce(f, init);
const filter = (p) => (xs) => xs.filter(p);
/* common-shake removed: exports.filter = */ void filter;
const map = (f) => (xs) => xs.map(f);
exports.map = map;
const mapObject = (f, obj) => Object.keys(obj).reduce((all, k) => ({ ...all, [k]: f(obj[k]) }), {});
exports.mapObject = mapObject;
const promiseAllObject = (obj) => {
    const keys = Object.keys(obj);
    const values = keys.map((k) => obj[k]);
    return Promise.all(values).then((promises) => promises.reduce((all, promise, idx) => ({ ...all, [keys[idx]]: promise }), {}));
};
exports.promiseAllObject = promiseAllObject;
const pairsToObject = (pairs) => pairs.reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {});
exports.pairsToObject = pairsToObject;
const isNullary = (value) => typeof value === 'undefined' || value === null;
const isNullaryOrFalse = (value) => isNullary(value) || value === false;
const rejectNullaryValues = (obj) => {
    return Object.keys(obj).reduce((newObj, key) => ({
        ...newObj,
        ...(isNullary(obj[key]) ? {} : { [key]: obj[key] }),
    }), {});
};
exports.rejectNullaryValues = rejectNullaryValues;
const chunk = (chunkSize) => reduce((chunks, val, idx) => {
    const lastChunk = chunks[chunks.length - 1];
    const isNewChunk = idx % chunkSize === 0;
    const newChunk = isNewChunk ? [val] : [...lastChunk, val];
    return [...chunks.slice(0, chunks.length - (isNewChunk ? 0 : 1)), newChunk];
})([]);
/* common-shake removed: exports.chunk = */ void chunk;
const chunkTranspose = (chunkSize) => reduce((chunks, val, idx) => {
    const chunkIdx = idx % chunkSize;
    const newChunk = [...(chunks[chunkIdx] || []), val];
    return [...chunks.slice(0, chunkIdx), newChunk, ...chunks.slice(chunkIdx + 1)];
})([]);
/* common-shake removed: exports.chunkTranspose = */ void chunkTranspose;
const compose = (...fs) => (x) => fs.reduceRight((val, f) => f(val), x);
exports.compose = compose;
const pipeMaybe = (...fs) => (x) => fs.reduce((val, f) => (isNullary(val) ? val : f(val)), x);
exports.pipeMaybe = pipeMaybe;
const first = ([x]) => x;
/* common-shake removed: exports.first = */ void first;
const find = (p) => pipeMaybe(filter(p), first);
exports.find = find;
const prop = (k) => (obj = {}) => obj[k];
exports.prop = prop;
const propMaybe = (k) => (obj = {}) => obj[k] || obj;
exports.propMaybe = propMaybe;
const guard = (p) => (x) => (isNullaryOrFalse(p) ? null : x);
exports.guard = guard;

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* common-shake removed: exports.sortAttributeRatings = */ exports.showTrustBox = /* common-shake removed: exports.setWidgetAlignment = */ exports.setTextColor = /* common-shake removed: exports.setPopupAlignment = */ exports.setFont = exports.setHtmlLanguage = /* common-shake removed: exports.setBorderColor = */ exports.sanitizeHtmlProp = /* common-shake removed: exports.sanitizeHtml = */ exports.sanitizeColor = /* common-shake removed: exports.regulateFollowForLocation = */ /* common-shake removed: exports.range = */ /* common-shake removed: exports.handlePopoverPosition = */ /* common-shake removed: exports.injectWidgetLinks = */ /* common-shake removed: exports.getTrustpilotBusinessUnitId = */ exports.addUtmParams = void 0;
exports.addEventListener = addEventListener;
exports.getOnPageReady = getOnPageReady;
exports.insertNumberSeparator = insertNumberSeparator;
exports.makeTranslatedLinkAccessibleNames = makeTranslatedLinkAccessibleNames;
/* common-shake removed: exports.makeTranslatedStarRating = */ void makeTranslatedStarRating;
exports.makeTranslations = makeTranslations;
exports.removeElement = removeElement;
exports.setHtmlContent = setHtmlContent;
exports.setTextContent = setTextContent;
const dom_1 = require("./dom");
const styleAlignmentPositions_1 = require("./models/styleAlignmentPositions");
const rootUri_1 = require("./rootUri");
const translations_1 = require("./translations");
function addEventListener(element, type, listener) {
    if (element) {
        if (element.addEventListener) {
            element.addEventListener(type, listener);
        }
        else {
            element.attachEvent(`on${type}`, function (e) {
                e = e || window.event;
                e.preventDefault =
                    e.preventDefault ||
                        function () {
                            e.returnValue = false;
                        };
                e.stopPropagation =
                    e.stopPropagation ||
                        function () {
                            e.cancelBubble = true;
                        };
                listener.call(element, e);
            });
        }
    }
}
function getOnPageReady() {
    return new Promise(function (resolve) {
        const resolveWithTimeout = function () {
            setTimeout(function () {
                resolve();
            }, 0);
        };
        if (document.readyState === 'complete') {
            resolveWithTimeout();
        }
        else {
            addEventListener(window, 'load', function () {
                resolveWithTimeout();
            });
        }
    });
}
function insertNumberSeparator(input, locale) {
    try {
        input.toLocaleString();
    }
    catch (e) {
        return input;
    }
    return input.toLocaleString(locale || 'en-US');
}
function setTextContent(element, content) {
    if (!element) {
        console.log('Attempting to set content on missing element');
    }
    else if ('innerText' in element) {
        element.innerText = content;
    }
    else {
        element.textContent = content;
    }
}
const sanitizeHtmlProp = (string) => {
    if (typeof string === 'string') {
        string = string.replaceAll('>', '');
        string = string.replaceAll('<', '');
        string = string.replaceAll('"', '');
    }
    return string;
};
exports.sanitizeHtmlProp = sanitizeHtmlProp;
const sanitizeHtml = (string) => {
    if (typeof string !== 'string') {
        return string;
    }
    return string.replace(/(<\/?(?:p|b|i|li|ul|a|strong)\/?>)|(?:<\/?.*?\/?>)/gi, '$1');
};
/* common-shake removed: exports.sanitizeHtml = */ void sanitizeHtml;
function setHtmlContent(element, content, sanitize = true) {
    if (!element) {
        console.warn('Attempting to set HTML content on missing element');
    }
    else {
        element.innerHTML = sanitize ? sanitizeHtml(content) : content;
    }
}
const isValidAlignment = (alignment) => {
    return styleAlignmentPositions_1.styleAlignmentPositions.includes(alignment);
};
const setWidgetAlignment = (elementId, alignment) => {
    if (!elementId) {
        console.warn('Trustpilot: cannot find stars wrapper element, please contact support!');
        return;
    }
    if (!alignment) {
        console.warn('Trustpilot: cannot apply widget alignment, please contact support!');
        return;
    }
    const isAlignmentValid = isValidAlignment(alignment);
    console.log('isAlignmentValid: ', isAlignmentValid);
    if (!isAlignmentValid) {
        console.warn(`Trustpilot: ${alignment} is not a valid widget alignment value, please contact support!`);
        return;
    }
    const wapperElement = document.getElementById(elementId);
    if (!wapperElement) {
        console.error("Trustpilot: couldn't find the stars wrapper element, please contact support!");
        return;
    }
    wapperElement.classList.add(`${elementId}--${alignment}`);
};
/* common-shake removed: exports.setWidgetAlignment = */ void setWidgetAlignment;
const setPopupAlignment = (alignment) => {
    if (!alignment) {
        console.warn('Trustpilot: cannot apply widget alignment, please contact support!');
        return;
    }
    const isAlignmentValid = isValidAlignment(alignment);
    if (!isAlignmentValid) {
        console.warn(`Trustpilot: ${alignment} is not a valid value for style alignment, please contact support!`);
        return;
    }
    const widgetPopupWrapperElement = document.getElementById('tp-widget-wrapper');
    if (!widgetPopupWrapperElement) {
        console.error('Trustpilot: widget popup is not found, please contact support!');
        return;
    }
    const popupStyleAlignment = `tp-widget-wrapper--${alignment}`;
    widgetPopupWrapperElement.classList.add(popupStyleAlignment);
};
/* common-shake removed: exports.setPopupAlignment = */ void setPopupAlignment;
function makeTranslatedStarRating(trustScore, locale) {
    const interpolations = { '[ratingStars]': trustScore, '[totalStars]': 5 };
    return (0, translations_1.getFrameworkTranslation)('starRating', locale, interpolations);
}
function makeTranslatedLinkAccessibleNames(labelKey, descKey, instructionKey, locale, interpolations) {
    if (!labelKey || !descKey || !instructionKey) {
        console.warn('Missing translation string string key');
        return '';
    }
    const ariaLabel = (0, translations_1.getFrameworkTranslation)(labelKey, locale, {});
    const ariaDescription = (0, translations_1.getFrameworkTranslation)(descKey, locale, interpolations);
    const ariaInstruction = (0, translations_1.getFrameworkTranslation)(instructionKey, locale, {});
    return {
        ariaLabel,
        ariaDescription,
        ariaInstruction,
    };
}
function makeTranslations(translations, string) {
    if (!string) {
        console.log('Missing translation string');
        return '';
    }
    return Object.keys(translations).reduce((result, key) => result.split(key).join(translations[key]), string);
}
function removeElement(element) {
    if (!element || !element.parentNode) {
        console.log('Attempting to remove a non-existing element');
        return;
    }
    return element.parentNode.removeChild(element);
}
const showTrustBox = (theme, hasReviews) => {
    const body = document.getElementsByTagName('body')[0];
    const wrapper = document.getElementById('tp-widget-wrapper');
    (0, dom_1.addClass)(body, theme);
    (0, dom_1.addClass)(wrapper, 'visible');
    if (!hasReviews) {
        (0, dom_1.addClass)(body, 'first-reviewer');
    }
};
exports.showTrustBox = showTrustBox;
const verifyQueryParamSeparator = (url) => `${url}${url.indexOf('?') === -1 ? '?' : '&'}`;
const addUtmParams = (trustBoxName) => (url) => `${verifyQueryParamSeparator(url)}utm_medium=trustbox&utm_source=${trustBoxName}`;
exports.addUtmParams = addUtmParams;
const regulateFollowForLocation = (location) => (element) => {
    if (location && element) {
        element.rel = 'nofollow';
    }
};
/* common-shake removed: exports.regulateFollowForLocation = */ void regulateFollowForLocation;
const injectWidgetLinks = (baseData, utmTrustBoxId, linksClass = 'profile-url') => {
    const { businessEntity: { numberOfReviews: { total: numberOfReviews }, }, links, } = baseData;
    const items = [].slice.call(document.getElementsByClassName(linksClass));
    const baseUrl = numberOfReviews ? links.profileUrl : links.evaluateUrl;
    for (let i = 0; i < items.length; i++) {
        items[i].href = addUtmParams(utmTrustBoxId)(baseUrl);
    }
};
/* common-shake removed: exports.injectWidgetLinks = */ void injectWidgetLinks;
const range = (num) => {
    const result = [];
    while (num > 0) {
        result.push(result.length);
        num--;
    }
    return result;
};
/* common-shake removed: exports.range = */ void range;
const colorShift = (col, amt) => {
    const validateBounds = (v) => (v > 255 ? 255 : v < 0 ? 0 : v);
    let usePound = false;
    if (col[0] === '#') {
        col = col.slice(1);
        usePound = true;
    }
    const num = parseInt(col, 16);
    if (!num) {
        return col;
    }
    let r = (num >> 16) + amt;
    r = validateBounds(r);
    let g = ((num >> 8) & 0x00ff) + amt;
    g = validateBounds(g);
    let b = (num & 0x0000ff) + amt;
    b = validateBounds(b);
    [r, g, b] = [r, g, b].map((color) => color <= 15 ? `0${color.toString(16)}` : color.toString(16));
    return (usePound ? '#' : '') + r + g + b;
};
const hexToRGBA = (hex, alpha = 1) => {
    const num = hex[0] === '#' ? parseInt(hex.slice(1), 16) : parseInt(hex, 16);
    const red = num >> 16;
    const green = (num >> 8) & 0x00ff;
    const blue = num & 0x0000ff;
    return `rgba(${red},${green},${blue},${alpha})`;
};
const setTextColor = (textColor) => {
    const textColorStyle = document.createElement('style');
    textColorStyle.appendChild(document.createTextNode(`
      * {
        color: inherit !important;
      }
      body {
        color: ${textColor} !important;
      }
      .bold-underline {
        border-bottom-color: ${textColor} !important;
      }
      .bold-underline:hover {
        border-color: ${colorShift(textColor, -30)} !important;
      }
      .secondary-text {
        color: ${hexToRGBA(textColor, 0.6)} !important;
      }
      .secondary-text-arrow {
        border-color: ${hexToRGBA(textColor, 0.6)} transparent transparent transparent !important;
      }
      .read-more {
        color: ${textColor} !important;
      }
    `));
    document.head.appendChild(textColorStyle);
};
exports.setTextColor = setTextColor;
const setBorderColor = (borderColor) => {
    const borderColorStyle = document.createElement('style');
    borderColorStyle.appendChild(document.createTextNode(`
     * {
        border-color: ${borderColor} !important;
      }
    `));
    document.head.appendChild(borderColorStyle);
};
/* common-shake removed: exports.setBorderColor = */ void setBorderColor;
const setFont = (fontFamily) => {
    const widgetRootUri = (0, rootUri_1.getWidgetRootUri)();
    const fontFamilyNormalizedForUrl = fontFamily.replace(/\s/g, '-').toLowerCase();
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = `${widgetRootUri}/fonts/${fontFamilyNormalizedForUrl}.css`;
    document.head.appendChild(fontLink);
    const cleanFontName = fontFamily.replace(/\+/g, ' ');
    const fontStyle = document.createElement('style');
    fontStyle.appendChild(document.createTextNode(`
    * {
      font-family: inherit !important;
    }
    body {
      font-family: "${cleanFontName}", sans-serif !important;
    }
    `));
    document.head.appendChild(fontStyle);
};
exports.setFont = setFont;
const setHtmlLanguage = (language) => {
    document.documentElement.setAttribute('lang', language);
};
exports.setHtmlLanguage = setHtmlLanguage;
const sanitizeColor = (color) => {
    const hexRegExp = /^#(?:[\da-fA-F]{3}){1,2}$/;
    return typeof color === 'string' && hexRegExp.test(color) ? color : null;
};
exports.sanitizeColor = sanitizeColor;
const handlePopoverPosition = (label, popover, container, popUpArrow) => {
    if (!popover) {
        return;
    }
    const popoverRect = popover.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const labelRect = label.getBoundingClientRect();
    if (popoverRect.left < containerRect.left) {
        popover.style.left = `${containerRect.left - labelRect.left}px`;
        popover.style.right = 'auto';
        const newPopupRect = popover.getBoundingClientRect();
        const currentLeftValue = getComputedStyle(popUpArrow).left;
        popUpArrow.style.left = `calc(${currentLeftValue} + ${Math.floor(popoverRect.left - newPopupRect.left)}px)`;
    }
    else if (popoverRect.right > containerRect.right) {
        popover.style.right = `${labelRect.right - containerRect.right}px`;
        popover.style.left = 'auto';
        const newPopupRect = popover.getBoundingClientRect();
        const currentLeftValue = getComputedStyle(popUpArrow).left;
        popUpArrow.style.left = `calc(${currentLeftValue} + ${Math.floor(popoverRect.right - newPopupRect.right)}px)`;
    }
};
/* common-shake removed: exports.handlePopoverPosition = */ void handlePopoverPosition;
const sortAttributeRatings = (attributeRatingsArray) => {
    const sortByName = (a, b) => a.name.localeCompare(b.name);
    const starAttributes = attributeRatingsArray
        .filter((x) => x.type === 'range_1to5')
        .sort(sortByName);
    const scaleAttributes = attributeRatingsArray.filter((x) => x.type === 'scale').sort(sortByName);
    return [...starAttributes, ...scaleAttributes];
};
/* common-shake removed: exports.sortAttributeRatings = */ void sortAttributeRatings;
const getTrustpilotBusinessUnitId = () => {
    const buid = '#{TrustpilotBusinessUnitId}';
    return buid.indexOf('#') === 0 ? '46d6a890000064000500e0c3' : buid;
};
/* common-shake removed: exports.getTrustpilotBusinessUnitId = */ void getTrustpilotBusinessUnitId;

},{"./dom":38,"./models/styleAlignmentPositions":42,"./rootUri":44,"./translations":52}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeErrorFallback = exports.errorFallback = void 0;
const dom_1 = require("../dom");
const templating_1 = require("../templating");
const utils_1 = require("../utils");
const errorFallback = (containerElement = 'tp-widget-fallback') => {
    const container = document.getElementById(containerElement);
    (0, dom_1.populateElements)([
        {
            element: container,
            string: (0, templating_1.a)({
                href: 'https://www.trustpilot.com?utm_medium=trustboxfallback',
                target: '_blank',
                rel: 'noopener noreferrer',
            }, (0, templating_1.mkElemWithSvgLookup)('logo', 'fallback-logo')),
        },
    ]);
};
exports.errorFallback = errorFallback;
const removeErrorFallback = (containerElement = 'tp-widget-fallback') => {
    const container = document.getElementById(containerElement);
    (0, utils_1.removeElement)(container);
};
exports.removeErrorFallback = removeErrorFallback;

},{"../dom":38,"../templating":51,"../utils":53}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLoader = void 0;
const dom_1 = require("../dom");
const templating_1 = require("../templating");
const utils_1 = require("../utils");
const defaultLoaderContainer = 'tp-widget-loader';
const addLoader = (loaderElement) => {
    const loader = document.getElementById(loaderElement);
    (0, dom_1.populateElements)([
        {
            element: loader,
            string: (0, templating_1.mkElemWithSvgLookup)('logo'),
        },
    ]);
};
const removeLoader = (loaderElement) => {
    const loader = document.getElementById(loaderElement);
    const loaderLoadedClass = `${loaderElement}--loaded`;
    (0, dom_1.addClass)(loader, loaderLoadedClass);
    if (loader) {
        loader.addEventListener('animationend', () => (0, utils_1.removeElement)(loader));
        loader.addEventListener('webkitAnimationEnd', () => (0, utils_1.removeElement)(loader));
        loader.addEventListener('oanimationend', () => (0, utils_1.removeElement)(loader));
    }
};
const withLoader = (promise, { loaderElement = defaultLoaderContainer, delay = 1000 } = {}) => {
    const loaderTimeoutId = setTimeout(() => addLoader(loaderElement), delay);
    return promise.finally(() => {
        clearTimeout(loaderTimeoutId);
        removeLoader(loaderElement);
    });
};
exports.withLoader = withLoader;

},{"../dom":38,"../templating":51,"../utils":53}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* common-shake removed: exports.ReviewFetcher = */ /* common-shake removed: exports.fetchServiceRevieMultipleData = */ exports.fetchServiceReviewData = /* common-shake removed: exports.constructTrustBoxAndComplete = */ /* common-shake removed: exports.fetchProductReview = */ /* common-shake removed: exports.fetchProductData = */ void 0;
const fetchData_1 = require("./fetchData");
Object.defineProperty(exports, "constructTrustBoxAndComplete", { enumerable: true, get: function () { return fetchData_1.constructTrustBoxAndComplete; } });
const productReviews_1 = require("./productReviews");
Object.defineProperty(exports, "fetchProductData", { enumerable: true, get: function () { return productReviews_1.fetchProductData; } });
Object.defineProperty(exports, "fetchProductReview", { enumerable: true, get: function () { return productReviews_1.fetchProductReview; } });
const reviewFetcher_1 = require("./reviewFetcher");
Object.defineProperty(exports, "ReviewFetcher", { enumerable: true, get: function () { return reviewFetcher_1.ReviewFetcher; } });
const fetchServiceReviewData = (templateId) => (fetchParams, constructTrustBox, passToPopup) => {
    (0, fetchData_1.fetchData)(`/trustbox-data/${templateId}`)(fetchParams, constructTrustBox, passToPopup, fetchData_1.hasServiceReviews);
};
exports.fetchServiceReviewData = fetchServiceReviewData;
const fetchServiceRevieMultipleData = (templateId) => (fetchParams, constructTrustBox, passToPopup) => {
    (0, fetchData_1.multiFetchData)(`/trustbox-data/${templateId}`)(fetchParams, constructTrustBox, passToPopup, fetchData_1.hasServiceReviewsMultiFetch);
};
/* common-shake removed: exports.fetchServiceRevieMultipleData = */ void fetchServiceRevieMultipleData;

},{"./fetchData":29,"./productReviews":31,"./reviewFetcher":32}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductReview = exports.fetchProductData = void 0;
const call_1 = require("./call");
const fetchData_1 = require("./fetchData");
const reviewFetcher_1 = require("./reviewFetcher");
const fetchProductData = (templateId) => (fetchParams, constructTrustBox, passToPopup = false, includeImportedReviews = false) => {
    const wrappedConstruct = ({ baseData, locale, ...args }) => {
        const fetcher = new reviewFetcher_1.ReviewFetcher({
            baseData,
            includeImportedReviews,
            reviewsPerPage: parseInt(fetchParams.reviewsPerPage),
            locale,
            ...args,
        });
        return fetcher.consumeReviews(constructTrustBox)();
    };
    const construct = fetchParams.reviewsPerPage > 0 ? wrappedConstruct : constructTrustBox;
    (0, fetchData_1.fetchData)(`/trustbox-data/${templateId}`)(fetchParams, construct, passToPopup, fetchData_1.hasProductReviews);
};
exports.fetchProductData = fetchProductData;
const fetchProductReview = (productReviewId, locale, callback) => {
    (0, call_1.apiCall)(`/product-reviews/${productReviewId}`, { locale }).then(callback);
};
exports.fetchProductReview = fetchProductReview;

},{"./call":28,"./fetchData":29,"./reviewFetcher":32}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewFetcher = void 0;
const fn_1 = require("../../fn");
const call_1 = require("../call");
const responseProcessor_1 = require("./responseProcessor");
const util_1 = require("./util");
const NO_REVIEWS_ERROR = 'No reviews available';
class ReviewFetcher {
    constructor({ reviewsPerPage, includeImportedReviews, baseData, ...wrapArgs }) {
        const getBaseDataNextPageLinks = (0, util_1.getNextPageLinks)((responseKey) => (0, fn_1.pipeMaybe)((0, fn_1.prop)(responseKey), (0, fn_1.prop)('links'), (0, fn_1.prop)('nextPage')));
        this.reviewsPerPage = reviewsPerPage;
        this.includeImportedReviews = includeImportedReviews;
        this.baseData = baseData;
        this.nextPage = getBaseDataNextPageLinks(baseData, includeImportedReviews);
        this.wrapArgs = wrapArgs;
        this.reviews = this._makeResponseProcessor(baseData).getReviews();
    }
    consumeReviews(callback) {
        return () => this.produceReviews()
            .then((reviews) => callback({
            ...this.wrapArgs,
            baseData: this.baseData,
            reviews,
            hasMoreReviews: this.hasMoreReviews,
            loadMoreReviews: this.consumeReviews.bind(this),
        }))
            .catch((err) => {
            if (err === NO_REVIEWS_ERROR) {
                return callback({
                    ...this.wrapArgs,
                    baseData: this.baseData,
                    reviews: [],
                    hasMoreReviews: false,
                    loadMoreReviews: this.consumeReviews.bind(this),
                });
            }
            else {
                throw err;
            }
        });
    }
    produceReviews() {
        const processResponse = (response) => {
            const responseProcessor = this._makeResponseProcessor(response);
            this.nextPage = responseProcessor.getNextPageLinks();
            this.reviews.push(...responseProcessor.getReviews());
            return this._takeReviews();
        };
        if (this.reviews.length === 0) {
            return Promise.reject(NO_REVIEWS_ERROR);
        }
        return this.reviewsPerPage >= this.reviews.length
            ? this._fetchReviews().then(processResponse)
            : Promise.resolve(this._takeReviews());
    }
    get hasMoreReviews() {
        return this.reviews.length > 0;
    }
    _takeReviews() {
        return this.reviews.splice(0, this.reviewsPerPage);
    }
    _fetchReviews() {
        return (0, fn_1.promiseAllObject)((0, fn_1.mapObject)(call_1.apiCall, this.nextPage));
    }
    _makeResponseProcessor(response) {
        return new responseProcessor_1.ReviewResponseProcessor(response, {
            includeImportedReviews: this.includeImportedReviews,
            displayName: this.baseData.businessEntity.displayName,
        });
    }
}
exports.ReviewFetcher = ReviewFetcher;

},{"../../fn":39,"../call":28,"./responseProcessor":33,"./util":34}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextPageLinks = void 0;
const fn_1 = require("../../fn");
const getNextPageLinks = (getter) => (response, includeImportedReviews = false) => {
    const productReviews = getter('productReviews')(response);
    const importedProductReviews = (0, fn_1.pipeMaybe)((0, fn_1.guard)(includeImportedReviews), getter('importedProductReviews'))(response);
    return (0, fn_1.rejectNullaryValues)({
        productReviews,
        importedProductReviews,
    });
};
exports.getNextPageLinks = getNextPageLinks;

},{"../../fn":39}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewResponseProcessor = void 0;
const fn_1 = require("../../fn");
const util_1 = require("./util");
class ReviewResponseProcessor {
    constructor(response, { includeImportedReviews, displayName }) {
        this.response = response;
        this.includeImportedReviews = includeImportedReviews;
        this.displayName = displayName;
    }
    getReviews() {
        const { productReviews, importedProductReviews } = this.response;
        const orderByCreatedAtDesc = ({ createdAt: c1 }, { createdAt: c2 }) => new Date(c2) - new Date(c1);
        const productReviewsList = (0, fn_1.pipeMaybe)((0, fn_1.propMaybe)('productReviews'), (0, fn_1.propMaybe)('reviews'))(productReviews) || [];
        const importedReviewsList = (0, fn_1.pipeMaybe)((0, fn_1.guard)(this.includeImportedReviews), (0, fn_1.propMaybe)('importedProductReviews'), (0, fn_1.propMaybe)('productReviews'), (0, fn_1.map)((review) => ({
            ...review,
            verifiedBy: review.type === 'External'
                ? review.source
                    ? review.source.name
                    : this.displayName
                : this.displayName,
        })))(importedProductReviews) || [];
        return [...productReviewsList, ...importedReviewsList].sort(orderByCreatedAtDesc);
    }
    getNextPageLinks() {
        const getOldPaginationNextPageLinks = (0, util_1.getNextPageLinks)((responseKey) => (0, fn_1.pipeMaybe)((0, fn_1.prop)(responseKey), (0, fn_1.prop)('links'), (0, fn_1.find)((link) => link.rel === 'next-page'), (0, fn_1.prop)('href')));
        const getNewPaginationNextPageLinks = (0, util_1.getNextPageLinks)((responseKey) => (0, fn_1.pipeMaybe)((0, fn_1.prop)(responseKey), (0, fn_1.prop)(responseKey), (0, fn_1.prop)('links'), (0, fn_1.prop)('nextPage')));
        const newLinks = getNewPaginationNextPageLinks(this.response, this.includeImportedReviews);
        const oldLinks = getOldPaginationNextPageLinks(this.response, this.includeImportedReviews);
        return { ...oldLinks, ...newLinks };
    }
}
exports.ReviewResponseProcessor = ReviewResponseProcessor;

},{"../../fn":39,"./util":34}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* common-shake removed: exports.SCALE_DIMENSIONS_105x19 = */ /* common-shake removed: exports.SCALE_DIMENSIONS_90x16 = */ /* common-shake removed: exports.SCALE_DIMENSIONS_80x15 = */ exports.svgMap = void 0;
const translations_1 = require("../translations");
const utils_1 = require("../utils");
const svgStarStyle = 'style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;"';
const wrapSvg = (dimensions, inner, props = {}) => {
    const sanitizedProps = Object.keys(props).reduce((acc, cur) => {
        acc[cur] = (0, utils_1.sanitizeHtmlProp)(props[cur]);
        if (cur === 'color') {
            acc[cur] = (0, utils_1.sanitizeColor)(acc[cur]);
        }
        return acc;
    }, {});
    return `
    <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: ${(dimensions.height / dimensions.width) * 100}%;">
      ${inner(dimensions, sanitizedProps)}
    </div>
  `;
};
const SCALE_DIMENSIONS_80x15 = '80x15';
/* common-shake removed: exports.SCALE_DIMENSIONS_80x15 = */ void SCALE_DIMENSIONS_80x15;
const SCALE_DIMENSIONS_90x16 = '90x16';
/* common-shake removed: exports.SCALE_DIMENSIONS_90x16 = */ void SCALE_DIMENSIONS_90x16;
const SCALE_DIMENSIONS_105x19 = '105x19';
/* common-shake removed: exports.SCALE_DIMENSIONS_105x19 = */ void SCALE_DIMENSIONS_105x19;
const SCALE_SVG_PROPS = {
    '80x15': {
        dimensions: { width: 80, height: 15 },
        lines: [
            { x1: 80, y1: 7.5, x2: 0, y2: 7.5 },
            { x1: 0.5, y1: 3.5, x2: 0.5, y2: 11.5 },
            { x1: 20.5, y1: 6, x2: 20.5, y2: 9 },
            { x1: 40.5, y1: 6, x2: 40.5, y2: 9 },
            { x1: 60.5, y1: 6, x2: 60.5, y2: 9 },
            { x1: 80, y1: 3.5, x2: 80, y2: 11.5 },
        ],
        stars: [
            {
                x: 1.5,
                w: 14,
                h: 14,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.7613 6.02594H13.7205L10.5316 8.29316L8.55968 9.68372L5.35535 11.9509L6.57238 8.29316L3.36804 6.02594H7.32724L8.54427 2.36816L9.7613 6.02594ZM10.7935 9.14011L8.54429 9.69936L11.7332 11.9817L10.7935 9.14011Z" fill="white"/>',
            },
            {
                x: 13.5,
                w: 14,
                h: 14,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 6.02606H25.7208L22.5318 8.29328L20.5599 9.68384L17.3556 11.9511L18.5726 8.29328L15.3683 6.02606H19.3275L20.5445 2.36829L21.7615 6.02606ZM22.7938 9.14034L20.5446 9.69959L23.7335 11.9819L22.7938 9.14034Z" fill="white"/>',
            },
            {
                x: 13.5,
                w: 14,
                h: 14,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 6.02606H25.7208L22.5318 8.29328L20.5599 9.68384L17.3556 11.9511L18.5726 8.29328L15.3683 6.02606H19.3275L20.5445 2.36829L21.7615 6.02606ZM22.7938 9.14034L20.5446 9.69959L23.7335 11.9819L22.7938 9.14034Z" fill="white"/>',
            },
            {
                x: 33.5,
                w: 14,
                h: 14,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M41.7615 6.02606H45.7208L42.5318 8.29328L40.5599 9.68384L37.3556 11.9511L38.5726 8.29328L35.3683 6.02606H39.3275L40.5445 2.36829L41.7615 6.02606ZM42.7938 9.14034L40.5446 9.69959L43.7335 11.9819L42.7938 9.14034Z" fill="white"/>',
            },
            {
                x: 64.5,
                w: 14,
                h: 14,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M72.7615 6.02606H76.7208L73.5318 8.29328L71.5599 9.68384L68.3556 11.9511L69.5726 8.29328L66.3683 6.02606H70.3275L71.5445 2.36829L72.7615 6.02606ZM73.7935 9.14022L71.5443 9.69947L74.7332 11.9818L73.7935 9.14022Z" fill="white"/>',
            },
        ],
    },
    '90x16': {
        dimensions: { width: 90, height: 16 },
        lines: [
            { x1: 90, y1: 8.5, x2: 0, y2: 8.5 },
            { x1: 0.5, y1: 5, x2: 0.5, y2: 12 },
            { x1: 23.2185, y1: 7, x2: 23.2185, y2: 10 },
            { x1: 45.5, y1: 7, x2: 45.5, y2: 10 },
            { x1: 67.7815, y1: 7, x2: 67.7815, y2: 10 },
            { x1: 90, y1: 5, x2: 90, y2: 12 },
        ],
        stars: [
            {
                x: 1.5,
                w: 15,
                h: 15,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3454 6.42769H14.5685L11.167 8.84606L9.06363 10.3293L5.64567 12.7477L6.94384 8.84606L3.52588 6.42769H7.74903L9.04719 2.52606L10.3454 6.42769ZM11.4464 9.74948L9.04727 10.346L12.4488 12.7805L11.4464 9.74948Z" fill="white"/>',
            },
            {
                x: 15.5,
                w: 15,
                h: 15,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.3456 6.42781H28.5688L25.1672 8.84618L23.0639 10.3294L19.6459 12.7478L20.9441 8.84618L17.5261 6.42781H21.7493L23.0474 2.52618L24.3456 6.42781ZM25.4466 9.74967L23.0475 10.3462L26.449 12.7807L25.4466 9.74967Z" fill="white"/>',
            },
            {
                x: 37.5,
                w: 15,
                h: 15,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M46.3456 6.42781H50.5688L47.1672 8.84618L45.0639 10.3294L41.6459 12.7478L42.9441 8.84618L39.5261 6.42781H43.7493L45.0474 2.52618L46.3456 6.42781ZM47.4466 9.74967L45.0475 10.3462L48.449 12.7807L47.4466 9.74967Z" fill="white"/>',
            },
            {
                x: 60.5,
                w: 15,
                h: 15,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M69.3456 6.42781H73.5688L70.1672 8.84618L68.0639 10.3294L64.6459 12.7478L65.9441 8.84618L62.5261 6.42781H66.7493L68.0474 2.52618L69.3456 6.42781ZM70.4466 9.74967L68.0475 10.3462L71.449 12.7807L70.4466 9.74967Z" fill="white"/>',
            },
            {
                x: 73.5,
                w: 15,
                h: 15,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M82.3456 6.42781H86.5688L83.1672 8.84618L81.0639 10.3294L77.6459 12.7478L78.9441 8.84618L75.5261 6.42781H79.7493L81.0474 2.52618L82.3456 6.42781ZM83.4464 9.74957L81.0473 10.3461L84.4488 12.7806L83.4464 9.74957Z" fill="white"/>',
            },
        ],
    },
    '105x19': {
        dimensions: { width: 105, height: 19 },
        lines: [
            { x1: 105, y1: 10, x2: 0, y2: 10 },
            { x1: 0.5, y1: 6, x2: 0.5, y2: 14.3125 },
            { x1: 26.5, y1: 8, x2: 26.5, y2: 12 },
            { x1: 52.5, y1: 8, x2: 52.5, y2: 12 },
            { x1: 78.5, y1: 8, x2: 78.5, y2: 12 },
            { x1: 105, y1: 6, x2: 105, y2: 14.3125 },
        ],
        stars: [
            {
                x: 1.5,
                w: 18,
                h: 19,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0976 7.63288H17.1126L13.0733 10.5047L10.5756 12.2661L6.51676 15.1379L8.05834 10.5047L3.99951 7.63288H9.0145L10.5561 2.99969L12.0976 7.63288ZM13.4051 11.5774L10.5561 12.2858L14.5954 15.1768L13.4051 11.5774Z" fill="white"/>',
            },
            {
                x: 17.5682,
                w: 18,
                h: 18,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1661 7.633H33.1811L29.1418 10.5048L26.6441 12.2662L22.5852 15.138L24.1268 10.5048L20.068 7.633H25.083L26.6246 2.99982L28.1661 7.633ZM29.4736 11.5777L26.6246 12.2861L30.6639 15.1771L29.4736 11.5777Z" fill="white"/>',
            },
            {
                x: 43.5,
                w: 18,
                h: 18,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M54.0979 7.633H59.1129L55.0736 10.5048L52.5758 12.2662L48.517 15.138L50.0586 10.5048L45.9998 7.633H51.0147L52.5563 2.99982L54.0979 7.633ZM55.4054 11.5777L52.5564 12.2861L56.5957 15.1771L55.4054 11.5777Z" fill="white"/>',
            },
            {
                x: 69.7046,
                w: 18,
                h: 18,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M80.3025 7.633H85.3175L81.2782 10.5048L78.7804 12.2662L74.7216 15.138L76.2632 10.5048L72.2043 7.633H77.2193L78.7609 2.99982L80.3025 7.633ZM81.61 11.5777L78.761 12.2861L82.8003 15.1771L81.61 11.5777Z" fill="white"/>',
            },
            {
                x: 85.7727,
                w: 18,
                h: 18,
                p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M96.3706 7.633H101.386L97.3463 10.5048L94.8485 12.2662L90.7897 15.138L92.3313 10.5048L88.2725 7.633H93.2874L94.829 2.99982L96.3706 7.633ZM97.6778 11.5776L94.8289 12.286L98.8682 15.177L97.6778 11.5776Z" fill="white"/>',
            },
        ],
    },
};
const createScaleLines = (dimensionId, color) => {
    return SCALE_SVG_PROPS[dimensionId].lines.reduce((acc, { x1, y1, x2, y2 }) => `${acc}<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}"/>`, '');
};
const createScaleStar = (dimensionId, rating, color) => {
    if (rating === 0) {
        return '';
    }
    const { x, w, h, p } = SCALE_SVG_PROPS[dimensionId].stars[rating - 1];
    return `
    <rect x="${x}" y="0.5" width="${w}" height="${h}" fill="${color}" stroke="${color}"/>
    ${p}
  `;
};
const scale = (dimensions, { dimensionId, color, rating }) => `
  <svg role="img" aria-labelledby="scaleRating" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${dimensions.width} ${dimensions.height}">
      <g class="tp-stars">
        ${createScaleLines(dimensionId, color)}
        ${createScaleStar(dimensionId, rating, color)}
      </g>
  </svg>`;
const emptyStarColor = '#dcdce6';
const stars = (dimensions, { rating, trustScore, color, locale = translations_1.defaultLocale }) => {
    const titleId = `starRating-${Math.random().toString(36).substring(2)}`;
    const interpolations = { '[ratingStars]': trustScore, '[totalStars]': 5 };
    const translatedStarRating = (0, translations_1.getFrameworkTranslation)('starRating', locale, interpolations);
    const formattedLocale = (0, translations_1.formatLocale)(locale);
    return `
    <svg role="img" viewBox="0 0 ${dimensions.width} ${dimensions.height}" xmlns="http://www.w3.org/2000/svg" ${svgStarStyle}>
      <title id="${titleId}" lang=${formattedLocale}>${translatedStarRating}</title>
      <g class="tp-star">
          <path class="tp-star__canvas" fill="${rating >= 1 && color ? color : emptyStarColor}" d="M0 46.330002h46.375586V0H0z"/>
          <path class="tp-star__shape" d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z" fill="#FFF"/>
      </g>
      <g class="tp-star">
          <path class="tp-star__canvas" fill="${rating >= 2 && color ? color : emptyStarColor}" d="M51.24816 46.330002h46.375587V0H51.248161z"/>
          <path class="tp-star__canvas--half" fill="${rating >= 1.5 && color ? color : emptyStarColor}" d="M51.24816 46.330002h23.187793V0H51.248161z"/>
          <path class="tp-star__shape" d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z" fill="#FFF"/>
      </g>
      <g class="tp-star">
          <path class="tp-star__canvas" fill="${rating >= 3 && color ? color : emptyStarColor}" d="M102.532209 46.330002h46.375586V0h-46.375586z"/>
          <path class="tp-star__canvas--half" fill="${rating >= 2.5 && color ? color : emptyStarColor}" d="M102.532209 46.330002h23.187793V0h-23.187793z"/>
          <path class="tp-star__shape" d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z" fill="#FFF"/>
      </g>
      <g class="tp-star">
          <path class="tp-star__canvas" fill="${rating >= 4 && color ? color : emptyStarColor}" d="M153.815458 46.330002h46.375586V0h-46.375586z"/>
          <path class="tp-star__canvas--half" fill="${rating >= 3.5 && color ? color : emptyStarColor}" d="M153.815458 46.330002h23.187793V0h-23.187793z"/>
          <path class="tp-star__shape" d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>
      </g>
      <g class="tp-star">
          <path class="tp-star__canvas" fill="${rating === 5 && color ? color : emptyStarColor}" d="M205.064416 46.330002h46.375587V0h-46.375587z"/>
          <path class="tp-star__canvas--half" fill="${rating >= 4.5 && color ? color : emptyStarColor}" d="M205.064416 46.330002h23.187793V0h-23.187793z"/>
          <path class="tp-star__shape" d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>
      </g>
    </svg>
  `;
};
const logo = (dimensions) => {
    const titleId = `trustpilotLogo-${Math.random().toString(36).substring(2)}`;
    return `
    <svg role="img" viewBox="0 0 ${dimensions.width} ${dimensions.height}" xmlns="http://www.w3.org/2000/svg" ${svgStarStyle}>
      <title id="${titleId}">Trustpilot</title>
      <path class="tp-logo__text" d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z" fill="#191919"/>
      <path class="tp-logo__star" fill="#00B67A" d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"/>
      <path class="tp-logo__star-notch" fill="#005128" d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"/>
    </svg>
  `;
};
const arrowSlider = (dimensions) => `
  <svg viewBox="0 0 ${dimensions.width} ${dimensions.height}" xmlns="http://www.w3.org/2000/svg" ${svgStarStyle}>
      <circle class="arrow-slider-circle" cx="12" cy="12" r="11.5" fill="none" stroke="#8C8C8C"/>
      <path class="arrow-slider-shape" fill="#8C8C8C" d="M10.5088835 12l3.3080582-3.02451041c.2440777-.22315674.2440777-.5849653 0-.80812204-.2440776-.22315673-.6398058-.22315673-.8838834 0L9.18305826 11.595939c-.24407768.2231567-.24407768.5849653 0 .808122l3.75000004 3.4285714c.2440776.2231568.6398058.2231568.8838834 0 .2440777-.2231567.2440777-.5849653 0-.808122L10.5088835 12z"/>
  </svg>
`;
const arrowSliderCircle = (dimensions) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${dimensions.width}" height="${dimensions.height}" viewBox="0 0 ${dimensions.width} ${dimensions.height}" fill="none">
<path d="M6.65311 9.66253L4.3379 7.34732L11.1563 7.34732V6.47232L4.33704 6.47232L6.65311 4.15625L6.03439 3.53753L2.66253 6.90939L6.03439 10.2812L6.65311 9.66253Z" fill="#205CD4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM0.875 7C0.875 3.61726 3.61726 0.875 7 0.875C10.3827 0.875 13.125 3.61726 13.125 7C13.125 10.3827 10.3827 13.125 7 13.125C3.61726 13.125 0.875 10.3827 0.875 7Z" fill="#205CD4"/>
</svg>
`;
const replyArrow = (dimensions, { elementColor }) => `
<svg viewBox="0 0 ${dimensions.width} ${dimensions.height}" xmlns=“http://www.w3.org/2000/svg“ ${svgStarStyle}>
  <path d="M5.24040526 8.60770645c0 .40275007-.25576387.51300008-.57003092.24825004L.2361338 4.98520583C.0871841 4.86986375 0 4.69208677 0 4.50370575s.0871841-.366158.2361338-.48150008L4.67037434.14470501c.31501709-.26625004.57003092-.15450003.57003092.24825004V2.9992055h.75004069c2.86515541 0 5.31553833 2.3745004 5.91257072 4.93950083a4.3385348 4.3385348 0 0 1 .09375508.5782501c.02250123.20025004-.07500406.24450004-.21826184.10350002 0 0-.0405022-.036-.07500406-.07500001C10.18673699 7.00766398 8.14655579 6.09727666 5.98894586 5.995456h-.75004068l.00150008 2.61225045z" fill="${elementColor || '#00B67A'}" fill-rule="evenodd"/>
</svg>
`;
const verifiedReview = (dimensions) => `<svg viewBox="0 0 ${dimensions.width} ${dimensions.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${svgStarStyle}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>
</svg>
`;
const verifiedReviewFlex = (dimensions) => `<svg viewBox="0 0 ${dimensions.width} ${dimensions.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${svgStarStyle}>
<g id="Icon / Functional / check-circle" clip-path="url(#clip0_2022_1976)">
<g id="icon">
<path d="M5.34 9.17054L9.54252 4.7679L9 4.25005L5.32752 8.09741L3.53642 6.30631L3.00609 6.83664L5.34 9.17054Z" fill="#1C1C1C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75736 2.25736C-0.585787 4.60051 -0.585787 8.3995 1.75736 10.7426C4.10051 13.0858 7.8995 13.0858 10.2426 10.7426C12.5858 8.3995 12.5858 4.60051 10.2426 2.25736C7.8995 -0.0857866 4.10051 -0.0857866 1.75736 2.25736ZM2.28769 10.2123C0.237437 8.16206 0.237437 4.83794 2.28769 2.78769C4.33794 0.737437 7.66206 0.737437 9.71231 2.78769C11.7626 4.83794 11.7626 8.16206 9.71231 10.2123C7.66206 12.2626 4.33794 12.2626 2.28769 10.2123Z" fill="#1C1C1C"/>
</g>
</g>
<defs>
<clipPath id="clip0_2022_1976">
<rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`;
const invitedReview = (dimensions) => `<svg viewBox="0 0 ${dimensions.width} ${dimensions.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${svgStarStyle}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>
</svg>
`;
const redirectedReview = (dimensions) => `<svg viewBox="0 0 ${dimensions.width} ${dimensions.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${svgStarStyle}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7056 4.07227L10.6915 1.04706C10.2986 0.65216 9.66093 0.651152 9.26704 1.04303C8.87214 1.43591 8.87113 2.0746 9.26402 2.46749L10.5656 3.77509L3.42415 3.76602H3.41407C1.96242 3.76602 1.15751 4.40169 0.738429 4.93561C0.255887 5.55012 0.0010157 6.38827 8.3031e-06 7.36041C-0.00301388 8.91482 0.819021 11.8151 2.40265 11.8161H2.40365C2.95974 11.8161 3.41105 11.3668 3.41206 10.8107C3.41206 10.3645 3.12293 9.98467 2.72098 9.85069C2.35429 9.40038 1.72568 7.60218 2.15281 6.48901C2.2868 6.14045 2.54268 5.78081 3.41407 5.78081H3.42012L10.5585 5.78988L9.25495 7.0874C8.86005 7.48029 8.85905 8.11898 9.25193 8.51186C9.44837 8.70931 9.70727 8.80904 9.96617 8.80904C10.2231 8.80904 10.4799 8.71032 10.6764 8.51589L13.7046 5.49874H13.7056C14.1116 5.08369 14.0844 4.45206 13.7056 4.07227Z" fill="currentColor"/>
</svg>
`;
const starsDimensions = { width: 251, height: 46 };
const logoDimensions = { width: 126, height: 31 };
const arrowSliderDimensions = { width: 24, height: 24 };
const arrowSliderCircleDimensions = { width: 14, height: 14 };
const replyArrowDimensions = { width: 12, height: 9 };
const verifiedReviewDimensions = { width: 14, height: 14 };
const invitedReviewDimensions = { width: 14, height: 14 };
const redirectedReviewDimensions = { width: 14, height: 12 };
const svgMap = {
    scale: (props) => wrapSvg(SCALE_SVG_PROPS[props.dimensionId].dimensions, scale, props),
    stars: (props) => wrapSvg(starsDimensions, stars, props),
    logo: () => wrapSvg(logoDimensions, logo),
    arrowSlider: () => wrapSvg(arrowSliderDimensions, arrowSlider),
    arrowSliderCircle: () => wrapSvg(arrowSliderCircleDimensions, arrowSliderCircle),
    replyArrow: (props) => wrapSvg(replyArrowDimensions, replyArrow, props),
    verifiedReview: (props) => wrapSvg(verifiedReviewDimensions, verifiedReview, props),
    verifiedReviewFlex: (props) => wrapSvg(verifiedReviewDimensions, verifiedReviewFlex, props),
    invitedReview: (props) => wrapSvg(invitedReviewDimensions, invitedReview, props),
    redirectedReview: (props) => wrapSvg(redirectedReviewDimensions, redirectedReview, props),
};
exports.svgMap = svgMap;

},{"../translations":52,"../utils":53}],52:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFrameworkTranslation = exports.formatLocale = exports.defaultLocale = void 0;
const localization_1 = __importDefault(require("../localization"));
const defaultLocale = 'en-US';
exports.defaultLocale = defaultLocale;
const LOCALE_DIVIDER = '-';
const languageToCountryMap = {
    da: 'DK',
    en: 'US',
    ja: 'JP',
    nb: 'NO',
    sv: 'SE',
};
const tryGetCountryForLanguage = (language) => {
    const country = languageToCountryMap[language] || language;
    return country;
};
const formatLocale = (locale) => {
    if (!locale)
        return defaultLocale;
    const localeParts = locale.split(LOCALE_DIVIDER);
    const language = localeParts[0];
    let country = localeParts[1];
    if (!country) {
        country = tryGetCountryForLanguage(language);
    }
    return language && country
        ? `${language}${LOCALE_DIVIDER}${country.toUpperCase()}`
        : defaultLocale;
};
exports.formatLocale = formatLocale;
const lookupTranslation = (keyParts, translationTable) => {
    return keyParts.reduce((a, b) => a[b], translationTable);
};
const getRawTranslationWithFallback = (key, translationTable) => {
    const keyParts = key.split('.');
    return (lookupTranslation(keyParts, translationTable) ||
        lookupTranslation(keyParts, localization_1.default[defaultLocale]));
};
const getFrameworkTranslation = (key, locale = defaultLocale, interpolations = {}, links = []) => {
    const translationTable = localization_1.default[formatLocale(locale)] || localization_1.default[defaultLocale];
    const rawTranslation = getRawTranslationWithFallback(key, translationTable);
    const translation = Object.keys(interpolations).reduce((value, key) => value.replace(key, interpolations[key]), rawTranslation);
    const translationWithLinksReplaced = links.reduce((previous, current) => previous.replace('[LINK-END]', '</a>').replace('[LINK-BEGIN]', current), translation);
    return translationWithLinksReplaced;
};
exports.getFrameworkTranslation = getFrameworkTranslation;

},{"../localization":16}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewDisclaimer = void 0;
const support_1 = require("../support");
const templating_1 = require("../templating");
const translations_1 = require("../translations");
class ReviewDisclaimer {
    constructor(root, locale = 'en-US', className = '') {
        if (!root) {
            throw new Error('Root element is required for ReviewDisclaimer');
        }
        this.root = root;
        this.locale = locale;
        this.className = className;
    }
    get reviewDisclaimerText() {
        const formattedLocale = (0, translations_1.formatLocale)(this.locale);
        return (0, translations_1.getFrameworkTranslation)(`reviewDisclaimer.body`, formattedLocale);
    }
    get reviewDisclaimerLink() {
        const formattedLocale = (0, translations_1.formatLocale)(this.locale);
        return (0, support_1.getReviewDisclaimerLink)(formattedLocale);
    }
    get reviewDisclaimerDescription() {
        const formattedLocale = (0, translations_1.formatLocale)(this.locale);
        return (0, translations_1.getFrameworkTranslation)(`reviewDisclaimer.description`, formattedLocale);
    }
    render() {
        const descriptionId = 'tp-widget-review-disclaimer__description';
        const anchor = (0, templating_1.a)({
            href: this.reviewDisclaimerLink,
            target: '_blank',
            rel: 'noopener noreferrer nofollow',
            class: this.className
                ? `tp-widget-review-disclaimer__link ${this.className}`
                : 'tp-widget-review-disclaimer__link',
            textContent: this.reviewDisclaimerText,
            'aria-describedby': descriptionId,
        }, [this.reviewDisclaimerText]);
        const screenReaderDescription = (0, templating_1.span)({
            class: 'visually-hidden',
            id: descriptionId,
            textContent: this.reviewDisclaimerDescription,
        }, [this.reviewDisclaimerDescription]);
        this.root.classList.add('active');
        this.root.innerHTML = `${anchor} ${screenReaderDescription}`;
        this.mounted = true;
    }
}
exports.ReviewDisclaimer = ReviewDisclaimer;

},{"../support":45,"../templating":51,"../translations":52}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mkElemWithSvgLookup = /* common-shake removed: exports.object = */ exports.span = /* common-shake removed: exports.input = */ /* common-shake removed: exports.label = */ /* common-shake removed: exports.img = */ exports.div = exports.a = void 0;
const svg_1 = require("./assets/svg");
const utils_1 = require("./utils");
const flatten = (arrs) => [].concat(...arrs);
const mkProps = (props) => Object.keys(props)
    .map((key) => {
    const sanitizedProp = (0, utils_1.sanitizeHtmlProp)(props[key]);
    return `${key}="${sanitizedProp}"`;
})
    .join(' ');
const mkElem = (tag, props, ...children) => `<${tag} ${mkProps(props)}>${flatten(children).join('\n')}</${tag}>`;
const mkNonClosingElem = (tag, props) => `<${tag} ${mkProps(props)}>`;
const a = (props, ...children) => mkElem('a', props, ...children);
exports.a = a;
const div = (props, ...children) => mkElem('div', props, ...children);
exports.div = div;
const img = (props, ...children) => mkElem('img', props, ...children);
/* common-shake removed: exports.img = */ void img;
const label = (props, ...children) => mkElem('label', props, ...children);
/* common-shake removed: exports.label = */ void label;
const span = (props, ...children) => mkElem('span', props, ...children);
exports.span = span;
const input = (props) => mkNonClosingElem('input', props);
/* common-shake removed: exports.input = */ void input;
const object = (props, ...children) => mkElem('object', props, ...children);
/* common-shake removed: exports.object = */ void object;
const mkElemWithSvgLookup = (svgKey, className = '', props = {}) => {
    const { ariaHideSvg, ...otherProps } = props;
    const ariaHidden = ariaHideSvg ? { 'aria-hidden': 'true' } : {};
    return div({ class: className, ...ariaHidden }, svg_1.svgMap[svgKey](otherProps));
};
exports.mkElemWithSvgLookup = mkElemWithSvgLookup;

},{"./assets/svg":35,"./utils":53}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewDisclaimerLink = exports.normalizeSupportLocale = void 0;
const normalizeSupportLocale = (locale) => {
    switch (locale) {
        case 'en-US':
        case 'nl-NL':
            return locale.replace('-', '_');
        default:
            return locale.split('-')[0];
    }
};
exports.normalizeSupportLocale = normalizeSupportLocale;
const REVIEW_DISCLAIMER_LINK = 'https://help.trustpilot.com/s/article/How-do-we-make-sure-reviews-are-trustworthy';
const getReviewDisclaimerLink = (locale) => {
    const supportLocale = (0, exports.normalizeSupportLocale)(locale);
    return `${REVIEW_DISCLAIMER_LINK}?language=${supportLocale}`;
};
exports.getReviewDisclaimerLink = getReviewDisclaimerLink;

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateElements = /* common-shake removed: exports.hasClass = */ /* common-shake removed: exports.removeClass = */ exports.addClass = void 0;
const utils_1 = require("./utils");
const hasClass = (elem, className) => {
    if (elem) {
        const elemClassList = elem.getAttribute('class');
        const classNames = elemClassList ? elemClassList.split(' ') : '';
        return classNames.indexOf(className) !== -1;
    }
    return false;
};
/* common-shake removed: exports.hasClass = */ void hasClass;
const addClass = (elem, forAddition) => {
    if (elem) {
        const elemClassList = elem.getAttribute('class');
        const classNames = elemClassList ? elemClassList.split(' ') : [];
        if (!hasClass(elem, forAddition)) {
            const newClasses = [...classNames, forAddition].join(' ');
            elem.setAttribute('class', newClasses);
        }
    }
};
exports.addClass = addClass;
const removeClass = (elem, forRemoval) => {
    if (elem) {
        const classNames = elem.className.split(' ');
        elem.className = classNames.filter((name) => name !== forRemoval).join(' ');
    }
};
/* common-shake removed: exports.removeClass = */ void removeClass;
const populateElements = (elements) => {
    elements.forEach(({ element, string, substitutions = {} }) => {
        if (string) {
            (0, utils_1.setHtmlContent)(element, (0, utils_1.makeTranslations)(substitutions, string), false);
        }
        else {
            (0, utils_1.removeElement)(element);
        }
    });
};
exports.populateElements = populateElements;

},{"./utils":53}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachImpressionHandler = /* common-shake removed: exports.engagement = */ void 0;
const queryString_1 = require("./queryString");
const rootUri_1 = require("./rootUri");
const utils_1 = require("./utils");
const xhr_1 = require("./xhr");
function setCookie(cname, cvalue, expires) {
    const path = 'path=/';
    const domain = `domain=${window.location.hostname.replace(/^.*\.([^.]+\.[^.]+)/, '$1')}`;
    const samesite = `samesite=none`;
    const secure = `secure`;
    document.cookie = [`${cname}=${cvalue}`, path, expires, domain, samesite, secure].join('; ');
    document.cookie = [`${cname}-legacy=${cvalue}`, path, expires, domain].join('; ');
}
function makeTrackingUrl(eventName, impressionData) {
    const { anonymousId: userId, sessionExpiry: _, ...impressionParams } = impressionData;
    const { businessunitId: businessUnitId, templateId: widgetId, ...widgetSettings } = (0, queryString_1.getAsObject)();
    const urlParams = {
        ...widgetSettings,
        ...impressionParams,
        ...(widgetSettings.group && userId ? { userId } : { nosettings: 1 }),
        businessUnitId,
        widgetId,
    };
    const urlParamsString = Object.keys(urlParams)
        .map((property) => `${property}=${encodeURIComponent(urlParams[property])}`)
        .join('&');
    return `${(0, rootUri_1.getWidgetRootUri)()}/stats/${eventName}?${urlParamsString}`;
}
function setTrackingCookies(eventName, { session, testId, sessionExpiry }) {
    const { group, businessunitId: businessUnitId } = (0, queryString_1.getAsObject)();
    if (!group) {
        return;
    }
    if (!testId || !session) {
        console.warn('TrustBox Optimizer test group detected but no running test settings found!');
    }
    if (sessionExpiry) {
        const settings = { group, session, testId };
        setCookie(`TrustboxSplitTest_${businessUnitId}`, encodeURIComponent(JSON.stringify(settings)), sessionExpiry);
    }
}
function trackEventRequest(eventName, impressionData) {
    setTrackingCookies(eventName, impressionData);
    const url = makeTrackingUrl(eventName, impressionData);
    try {
        (0, xhr_1.xhr)({ url });
    }
    catch (e) {
    }
}
const trackImpression = function (data) {
    trackEventRequest('TrustboxImpression', data);
};
const trackView = function (data) {
    trackEventRequest('TrustboxView', data);
};
const engagement = function (data) {
    trackEventRequest('TrustboxEngagement', data);
};
/* common-shake removed: exports.engagement = */ void engagement;
let id = null;
const attachImpressionHandler = function () {
    (0, utils_1.addEventListener)(window, 'message', function (event) {
        if (typeof event.data !== 'string') {
            return;
        }
        let e;
        try {
            e = { data: JSON.parse(event.data) };
        }
        catch (e) {
            return;
        }
        if (e.data.command === 'setId') {
            id = e.data.widgetId;
            window.parent.postMessage(JSON.stringify({ command: 'impression', widgetId: id }), '*');
            return;
        }
        if (e.data.command === 'impression-received') {
            delete e.data.command;
            trackImpression(e.data);
        }
        if (e.data.command === 'trustbox-in-viewport') {
            delete e.data.command;
            trackView(e.data);
        }
    });
};
exports.attachImpressionHandler = attachImpressionHandler;

},{"./queryString":43,"./rootUri":44,"./utils":53,"./xhr":54}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const communication_1 = require("./communication");
const errorFallback_1 = require("./templates/errorFallback");
const FALLBACK_DELAY = 500;
const init = (onInit) => {
    let initialized = false;
    (0, communication_1.onPong)(() => {
        initialized = true;
        if (typeof onInit === 'function') {
            onInit();
        }
        else {
            console.warn('`onInit` not supplied');
        }
    });
    (0, communication_1.ping)();
    setTimeout(() => {
        if (!initialized) {
            (0, errorFallback_1.errorFallback)();
        }
    }, FALLBACK_DELAY);
};
exports.init = init;

},{"./communication":36,"./templates/errorFallback":46}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleAlignmentPositions = void 0;
const styleAlignmentPositions = ['left', 'right'];
exports.styleAlignmentPositions = styleAlignmentPositions;

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateLogo = exports.makeLogo = void 0;
const dom_1 = require("../dom");
const templating_1 = require("../templating");
const makeLogo = () => (0, templating_1.mkElemWithSvgLookup)('logo');
exports.makeLogo = makeLogo;
const populateLogo = (logoContainer = 'tp-widget-logo') => {
    const container = typeof logoContainer === 'string' ? document.getElementById(logoContainer) : logoContainer;
    (0, dom_1.populateElements)([
        {
            element: container,
            string: makeLogo(),
        },
    ]);
};
exports.populateLogo = populateLogo;

},{"../dom":38,"../templating":51}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateStars = exports.makeStars = void 0;
const dom_1 = require("../dom");
const templating_1 = require("../templating");
const translations_1 = require("../translations");
const utils_1 = require("../utils");
const makeStars = ({ num, trustScore = null, wrapperClass = '', color, locale }) => {
    const fullPart = Math.floor(num);
    const halfPart = num === fullPart ? '' : ` tp-stars--${fullPart}--half`;
    const sanitizedColor = (0, utils_1.sanitizeColor)(color);
    return (0, templating_1.div)({ class: wrapperClass }, (0, templating_1.mkElemWithSvgLookup)('stars', `${sanitizedColor ? 'tp-stars-custom-color' : `tp-stars tp-stars--${fullPart}${halfPart}`}`, { rating: num, trustScore: trustScore || num, color: sanitizedColor, locale }));
};
exports.makeStars = makeStars;
const populateStars = ({ businessEntity: { stars, trustScore, numberOfReviews: { total }, }, }, starsContainer = 'tp-widget-stars', starsColor, locale = translations_1.defaultLocale) => {
    const sanitizedColor = (0, utils_1.sanitizeColor)(starsColor);
    const container = typeof starsContainer === 'string' ? document.getElementById(starsContainer) : starsContainer;
    const displayedStars = total ? stars : 0;
    (0, dom_1.populateElements)([
        {
            element: container,
            string: makeStars({ num: displayedStars, trustScore, color: sanitizedColor, locale }),
        },
    ]);
};
exports.populateStars = populateStars;

},{"../dom":38,"../templating":51,"../translations":52,"../utils":53}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORIENTATION = exports.makeEmptySummary = void 0;
const templating_1 = require("../templating");
const utils_1 = require("../utils");
const logo_1 = require("./logo");
const stars_1 = require("./stars");
const HORIZONTAL = 'horizontal';
const VERTICAL = 'vertical';
const ORIENTATION = {
    HORIZONTAL,
    VERTICAL,
};
exports.ORIENTATION = ORIENTATION;
const useNofollow = (nofollow) => (nofollow ? { rel: 'nofollow' } : {});
const renderSubtitle = (options) => {
    const { subtitle, url, hasLogo, nofollow } = options;
    const translatedSubtitle = subtitle && (0, utils_1.makeTranslations)({}, subtitle);
    const children = [
        translatedSubtitle && (0, templating_1.span)({ class: 'tp-widget-empty-vertical__subtitle' }, translatedSubtitle),
        url &&
            (0, templating_1.a)({
                class: 'tp-widget-empty-vertical__logo',
                href: url,
                target: '_blank',
                ...useNofollow(nofollow),
            }, (0, logo_1.makeLogo)()),
        hasLogo && !url && (0, templating_1.span)({ class: 'tp-widget-empty-vertical__logo' }, (0, logo_1.makeLogo)()),
    ].filter(Boolean);
    return (0, templating_1.div)({ class: 'tp-widget-empty-vertical__subtitle-wrapper' }, ...children);
};
const makeEmptyVerticalSummary = (options) => {
    const translatedTitle = (0, utils_1.makeTranslations)({}, options.title);
    const subtitleElement = renderSubtitle(options);
    return (0, templating_1.div)({
        class: 'tp-widget-empty-vertical',
    }, (0, templating_1.span)({ class: 'tp-widget-empty-vertical__title' }, translatedTitle), (0, stars_1.makeStars)({ num: 0, wrapperClass: 'tp-widget-empty-vertical__stars' }), subtitleElement);
};
const makeEmptyHorizontalSummary = (options) => {
    const { title, url, nofollow } = options;
    const translatedTitle = (0, utils_1.makeTranslations)({}, title);
    const titleEle = (0, templating_1.span)({ class: 'tp-widget-empty-horizontal__title' }, translatedTitle);
    const logoEle = (0, templating_1.div)({ class: 'tp-widget-empty-horizontal__logo' }, (0, logo_1.makeLogo)());
    const linkContent = (0, templating_1.div)({ class: 'tp-widget-empty-horizontal' }, titleEle, logoEle);
    return (0, templating_1.a)({
        href: url,
        target: '_blank',
        ...useNofollow(nofollow),
    }, linkContent);
};
const makeEmptySummary = (options) => {
    return options.orientation === ORIENTATION.HORIZONTAL
        ? makeEmptyHorizontalSummary(options)
        : makeEmptyVerticalSummary(options);
};
exports.makeEmptySummary = makeEmptySummary;

},{"../templating":51,"../utils":53,"./logo":48,"./stars":49}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-console */

var _utils = require("@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/utils");

var _queryString = require("@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/queryString");

var _elements = require("./elements");

var _elements2 = _interopRequireDefault(_elements);

var _api = require("@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/api");

var _impression = require("@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/impression");

var _init = require("@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/init");

var _reviewDisclaimer = require("@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/components/reviewDisclaimer");

var _models = require("./models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _impression.attachImpressionHandler)();

var createFullLink = function createFullLink(trustboxType, link) {
  return (0, _utils.addUtmParams)(trustboxType)(link);
};

var setProfileLink = function setProfileLink(trustboxType, link, translationValues, locale) {
  var fullLink = createFullLink(trustboxType, link);
  document.getElementById("profile-link").href = fullLink;

  // Add translated aria values for accessibility:
  var linkDescTranslationKeys = {
    MicroStar: "businessRatingTextWithTrustScoreRating",
    MicroTrustScore: "businessRatingTextWithTrustScoreRating",
    MicroCombo: "businessRatingTextWithTSRatingAndReviewCount"
    // No link description defined for MicroReviewCount yet
  };
  var translationKey1 = "widgetLabel";
  var translationKey2 = linkDescTranslationKeys[trustboxType];
  var translationKey3 = "clickProfileLink";

  var _makeTranslatedLinkAc = (0, _utils.makeTranslatedLinkAccessibleNames)(translationKey1, translationKey2, translationKey3, locale, translationValues),
      ariaLabel = _makeTranslatedLinkAc.ariaLabel,
      ariaDescription = _makeTranslatedLinkAc.ariaDescription,
      ariaInstruction = _makeTranslatedLinkAc.ariaInstruction;

  document.getElementById("profile-link").setAttribute("aria-label", ariaLabel);
  document.getElementById("screen-reader-only-rating").textContent = ariaDescription;
  document.getElementById("screen-reader-only-instruction").textContent = ariaInstruction;
};

var setWidgetAlignment = function setWidgetAlignment(styleAlignment) {
  if (_models.widgetStyleAlignment.includes(styleAlignment)) {
    // Note: className and id are the same
    var selectorName = "tp-widget-wrapper";
    document.getElementById(selectorName).classList.add(selectorName + "--" + styleAlignment);
  } else {
    console.group("Style Alignment Error");
    console.warn(styleAlignment + " is not allowed value");
    console.warn("center is default position, you don't have to specify it");
    console.groupEnd("Style Alignment Error");
  }
};

var constructTrustBox = function constructTrustBox(_ref) {
  var name = _ref.name,
      _ref$setup = _ref.setup,
      setup = _ref$setup === undefined ? function () {} : _ref$setup,
      withReviews = _ref.withReviews,
      withoutReviews = _ref.withoutReviews;

  var _getAsObject = (0, _queryString.getAsObject)(),
      locale = _getAsObject.locale,
      businessUnitId = _getAsObject.businessunitId,
      _getAsObject$theme = _getAsObject.theme,
      theme = _getAsObject$theme === undefined ? "light" : _getAsObject$theme,
      location = _getAsObject.location,
      templateId = _getAsObject.templateId,
      fontFamily = _getAsObject.fontFamily,
      textColor = _getAsObject.textColor,
      styleAlignment = _getAsObject.styleAlignment,
      _getAsObject$reviewDi = _getAsObject.reviewDisclaimer,
      reviewDisclaimer = _getAsObject$reviewDi === undefined ? false : _getAsObject$reviewDi;

  var renderReviewDisclaimer = function renderReviewDisclaimer() {
    var target = "tp-widget-review-disclaimer";
    var disclaimerContainer = document.getElementById(target);

    if (disclaimerContainer) {
      var reviewDisclaimerComponent = new _reviewDisclaimer.ReviewDisclaimer(disclaimerContainer, locale);
      reviewDisclaimerComponent.render();
    }
  };

  var construct = function construct(_ref2) {
    var baseData = _ref2.baseData,
        locale = _ref2.locale;

    var rating = baseData.starsString;
    var strings = _extends({}, baseData.translations, { rating: rating });
    var trustScore = baseData.businessUnit.trustScore;

    (0, _utils.setHtmlLanguage)(locale);

    // If the Trustbox has a title element with this id and an available translation it should be set
    var title = document.getElementById("tp-widget-title");
    if (title && baseData.translations.trustpilotCustomWidget) {
      title.innerHTML = baseData.translations.trustpilotCustomWidget;
    }

    if (baseData.settings.customStylesAllowed) {
      if (fontFamily) {
        (0, _utils.setFont)(fontFamily);
      }
      if (textColor) {
        (0, _utils.setTextColor)(textColor);
      }
      if (styleAlignment) {
        setWidgetAlignment(styleAlignment);
      }
    }

    if (reviewDisclaimer) {
      renderReviewDisclaimer();
    }

    var formatNumber = function formatNumber(num) {
      return (0, _utils.insertNumberSeparator)(num, locale);
    };
    var args = _extends({}, baseData, {
      styleAlignment: styleAlignment,
      strings: strings,
      formatNumber: formatNumber,
      elements: (0, _elements2.default)()
    });
    if (baseData.businessEntity.numberOfReviews.total === 0) {
      var evaluateLink = createFullLink(name, baseData.links.evaluateUrl);
      // profile link is used in micro review count trustbox, when b.unit has 0 reviews, depending on the selected copy:
      var profileLink = createFullLink(name, baseData.links.profileUrl);

      withoutReviews(args, evaluateLink, profileLink);
    } else {
      var translationValues = {
        "[trustScoreRating]": rating,
        "[trustScore]": trustScore,
        "[totalScore]": 5,
        "[reviewCount]": baseData.businessEntity.numberOfReviews.total
      };
      setup(args);
      withReviews(args);
      setProfileLink(name, baseData.links.profileUrl, translationValues, locale);
    }
  };

  (0, _init.init)(function () {
    return (0, _api.fetchServiceReviewData)(templateId)({ businessUnitId: businessUnitId, locale: locale, theme: theme, location: location }, construct);
  });
};

exports.default = constructTrustBox;

},{"./elements":56,"./models":58,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/api":30,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/components/reviewDisclaimer":37,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/impression":40,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/init":41,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/queryString":43,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/utils":53}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var widgetStyleAlignment = exports.widgetStyleAlignment = ['left', 'right'];

},{}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/utils');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getElement = function getElement(id) {
  return document.getElementById(id);
};

var MicroElement = function () {
  function MicroElement(id) {
    _classCallCheck(this, MicroElement);

    this.id = id;
  }

  _createClass(MicroElement, [{
    key: 'domElement',
    value: function domElement() {
      return getElement(this.id);
    }
  }, {
    key: 'setHtml',
    value: function setHtml(html) {
      (0, _utils.setHtmlContent)(this.domElement(), html);
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      (0, _utils.setTextContent)(this.domElement(), text);
    }
  }, {
    key: 'remove',
    value: function remove() {
      (0, _utils.removeElement)(this.domElement());
    }
  }]);

  return MicroElement;
}();

var CompoundMicroElement = function (_MicroElement) {
  _inherits(CompoundMicroElement, _MicroElement);

  function CompoundMicroElement() {
    _classCallCheck(this, CompoundMicroElement);

    return _possibleConstructorReturn(this, (CompoundMicroElement.__proto__ || Object.getPrototypeOf(CompoundMicroElement)).apply(this, arguments));
  }

  _createClass(CompoundMicroElement, [{
    key: 'setHtml',
    value: function setHtml(html) {
      (0, _utils.setHtmlContent)(this.domElement(), html, false);
    }
  }]);

  return CompoundMicroElement;
}(MicroElement);

var elements = function elements() {
  return {
    rating: new MicroElement('tp-widget-rating'),
    stars: new MicroElement('star-container'),
    score: new MicroElement('trust-score'),
    translations: new MicroElement('translations-main'),
    wrapper: new CompoundMicroElement('tp-widget-wrapper')
  };
};

exports.default = elements;

},{"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/utils":53}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.microTrustScore = /* common-shake removed: exports.microStar = */ /* common-shake removed: exports.microReviewCount = */ /* common-shake removed: exports.microCombo = */ undefined;

var _constructor = require('./constructor');

var _constructor2 = _interopRequireDefault(_constructor);

var _utils = require('@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/utils');

var _stars = require('@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/templates/stars');

var _logo = require('@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/templates/logo');

var _summary = require('@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/templates/summary');

var _queryString = require('@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/queryString');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withoutReviews = function withoutReviews(_ref, url) {
  var wrapper = _ref.elements.wrapper,
      strings = _ref.strings;

  var options = {
    orientation: _summary.ORIENTATION.HORIZONTAL,
    title: strings.firstreviewer,
    url: url
  };
  var emptySummary = (0, _summary.makeEmptySummary)(options);
  wrapper.setHtml(emptySummary);
};

var microStar = function microStar() {
  var _getQueryString = (0, _queryString.getAsObject)(),
      locale = _getQueryString.locale;

  var setup = function setup(baseData) {
    (0, _logo.populateLogo)();
    (0, _stars.populateStars)(baseData, 'tp-widget-stars', null, locale);
  };

  var withReviews = function withReviews(_ref2) {
    var score = _ref2.elements.score,
        strings = _ref2.strings;

    score.setText(strings.rating);
  };

  return (0, _constructor2.default)({
    name: 'MicroStar',
    setup: setup,
    withReviews: withReviews,
    withoutReviews: withoutReviews
  });
};

var microCombo = function microCombo() {
  var _getQueryString2 = (0, _queryString.getAsObject)(),
      locale = _getQueryString2.locale;

  var setup = function setup(baseData) {
    (0, _logo.populateLogo)();
    (0, _stars.populateStars)(baseData, 'tp-widget-stars', null, locale);
  };

  var withReviews = function withReviews(_ref3) {
    var _ref3$elements = _ref3.elements,
        score = _ref3$elements.score,
        rating = _ref3$elements.rating,
        strings = _ref3.strings,
        formatNumber = _ref3.formatNumber,
        totalReviews = _ref3.businessEntity.numberOfReviews.total;

    score.setHtml(strings.rating);
    rating.setHtml((0, _utils.makeTranslations)({ '[NOREVIEWS]': formatNumber(totalReviews) }, strings.main));
  };

  (0, _constructor2.default)({
    name: 'MicroCombo',
    setup: setup,
    withReviews: withReviews,
    withoutReviews: withoutReviews
  });
};

var microTrustScore = function microTrustScore() {
  var setup = function setup() {
    (0, _logo.populateLogo)();
  };

  var withReviews = function withReviews(_ref4) {
    var strings = _ref4.strings,
        trustScore = _ref4.businessEntity.trustScore,
        _ref4$elements = _ref4.elements,
        score = _ref4$elements.score,
        translations = _ref4$elements.translations;

    score.setText(strings.rating);
    translations.setHtml((0, _utils.makeTranslations)({ '[RATED]': trustScore.toFixed(1) }, strings.main));
  };

  (0, _constructor2.default)({
    name: 'MicroTrustScore',
    withReviews: withReviews,
    withoutReviews: withoutReviews,
    setup: setup
  });
};

var microReviewCount = function microReviewCount(_ref5) {
  var _ref5$minReviewCount = _ref5.minReviewCount,
      minReviewCount = _ref5$minReviewCount === undefined ? 0 : _ref5$minReviewCount,
      _ref5$withoutReviewsP = _ref5.withoutReviewsPreferredStringId,
      withoutReviewsPreferredStringId = _ref5$withoutReviewsP === undefined ? '' : _ref5$withoutReviewsP;

  var minReviewCountInteger = parseInt(minReviewCount, 10) || 0;
  var setup = function setup() {
    (0, _logo.populateLogo)();
  };

  var withReviews = function withReviews(_ref6) {
    var translations = _ref6.elements.translations,
        totalReviews = _ref6.businessEntity.numberOfReviews.total,
        strings = _ref6.strings,
        formatNumber = _ref6.formatNumber,
        _ref6$minReviewCount = _ref6.minReviewCount,
        minReviewCount = _ref6$minReviewCount === undefined ? minReviewCountInteger : _ref6$minReviewCount;

    if (minReviewCount <= totalReviews) {
      translations.setHtml((0, _utils.makeTranslations)({
        '[SEEOUR]': strings.seeour,
        '[NOREVIEWS]': formatNumber(totalReviews),
        '[REVIEWSON]': strings.reviewson
      }, strings.main));
    } else {
      translations.setHtml(strings.seeourreviewson);
    }
  };

  var withoutReviewsWithPreferredString = function withoutReviewsWithPreferredString(_ref7, evaluateLink) {
    var wrapper = _ref7.elements.wrapper,
        displayName = _ref7.businessEntity.displayName,
        strings = _ref7.strings;
    var profileLink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    var stringId = 'firstreviewer';
    if (['1', '2', '3'].some(function (item) {
      return item === withoutReviewsPreferredStringId;
    })) {
      stringId = '' + stringId + withoutReviewsPreferredStringId;
    }

    var url = ['1', '2'].some(function (item) {
      return item === withoutReviewsPreferredStringId;
    }) ? profileLink : evaluateLink;

    var options = {
      orientation: _summary.ORIENTATION.HORIZONTAL,
      title: (0, _utils.makeTranslations)({ '[COMPANYNAME]': displayName }, strings[stringId]),
      url: url
    };
    var emptySummary = (0, _summary.makeEmptySummary)(options);
    wrapper.setHtml(emptySummary);
  };

  (0, _constructor2.default)({
    name: 'MicroReviewCount',
    withReviews: withReviews,
    withoutReviews: withoutReviewsWithPreferredString,
    setup: setup
  });
};

/* common-shake removed: exports.microCombo = */ void microCombo;
/* common-shake removed: exports.microReviewCount = */ void microReviewCount;
/* common-shake removed: exports.microStar = */ void microStar;
exports.microTrustScore = microTrustScore;

},{"./constructor":55,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/queryString":43,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/templates/logo":48,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/templates/stars":49,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/templates/summary":50,"@trustpilot/trustbox-framework-vanilla/lib_legacy/modules/utils":53}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1taWNyby1mcmFtZXdvcmsvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbG9jYWxpemF0aW9uL2RhLURLL3N0cmluZ3MuanNvbiIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L2xvY2FsaXphdGlvbi9kZS1BVC9zdHJpbmdzLmpzb24iLCJub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9sb2NhbGl6YXRpb24vZW4tQVUvc3RyaW5ncy5qc29uIiwibm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbG9jYWxpemF0aW9uL2VuLVVTL3N0cmluZ3MuanNvbiIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L2xvY2FsaXphdGlvbi9lcy1FUy9zdHJpbmdzLmpzb24iLCJub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9sb2NhbGl6YXRpb24vZmktRkkvc3RyaW5ncy5qc29uIiwibm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbG9jYWxpemF0aW9uL2ZyLUJFL3N0cmluZ3MuanNvbiIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L2xvY2FsaXphdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L2xvY2FsaXphdGlvbi9pdC1JVC9zdHJpbmdzLmpzb24iLCJub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9sb2NhbGl6YXRpb24vamEtSlAvc3RyaW5ncy5qc29uIiwibm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbG9jYWxpemF0aW9uL25iLU5PL3N0cmluZ3MuanNvbiIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L2xvY2FsaXphdGlvbi9ubC1CRS9zdHJpbmdzLmpzb24iLCJub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9sb2NhbGl6YXRpb24vbmwtTkwvc3RyaW5ncy5qc29uIiwibm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbG9jYWxpemF0aW9uL3BsLVBML3N0cmluZ3MuanNvbiIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L2xvY2FsaXphdGlvbi9wdC1CUi9zdHJpbmdzLmpzb24iLCJub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9sb2NhbGl6YXRpb24vcHQtUFQvc3RyaW5ncy5qc29uIiwibm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbG9jYWxpemF0aW9uL3J1LVJVL3N0cmluZ3MuanNvbiIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L2xvY2FsaXphdGlvbi9zdi1TRS9zdHJpbmdzLmpzb24iLCJub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9sb2NhbGl6YXRpb24vemgtQ04vc3RyaW5ncy5qc29uIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL25vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L21vZHVsZXMvYXBpL2NhbGwuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9xdWVyeVN0cmluZy5qcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS9ub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL3Jvb3RVcmkuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy94aHIuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9hcGkvZmV0Y2hEYXRhLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL25vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L21vZHVsZXMvY29tbXVuaWNhdGlvbi5qcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS9ub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL2ZuLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL25vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L21vZHVsZXMvdXRpbHMuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy90ZW1wbGF0ZXMvZXJyb3JGYWxsYmFjay5qcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS9ub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL3RlbXBsYXRlcy9sb2FkZXIuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9hcGkvaW5kZXguanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9hcGkvcHJvZHVjdFJldmlld3MuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9hcGkvcmV2aWV3RmV0Y2hlci9pbmRleC5qcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS9ub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL2FwaS9yZXZpZXdGZXRjaGVyL3V0aWwuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9hcGkvcmV2aWV3RmV0Y2hlci9yZXNwb25zZVByb2Nlc3Nvci5qcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS9ub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL2Fzc2V0cy9zdmcuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy90cmFuc2xhdGlvbnMuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9jb21wb25lbnRzL3Jldmlld0Rpc2NsYWltZXIuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy90ZW1wbGF0aW5nLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL25vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L21vZHVsZXMvc3VwcG9ydC5qcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS9ub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL2RvbS5qcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS9ub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL2ltcHJlc3Npb24uanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9pbml0LmpzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL25vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L21vZHVsZXMvbW9kZWxzL3N0eWxlQWxpZ25tZW50UG9zaXRpb25zLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkZ2V0cy10cnVzdGJveG1pY3JvdHJ1c3RzY29yZS93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL25vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L21vZHVsZXMvdGVtcGxhdGVzL2xvZ28uanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy90ZW1wbGF0ZXMvc3RhcnMuanMiLCIvaG9tZS9ydW5uZXIvd29yay93aWRnZXRzLXRydXN0Ym94bWljcm90cnVzdHNjb3JlL3dpZGdldHMtdHJ1c3Rib3htaWNyb3RydXN0c2NvcmUvbm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy90ZW1wbGF0ZXMvc3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9AdHJ1c3RwaWxvdC90cnVzdGJveC1taWNyby1mcmFtZXdvcmsvc3JjL2NvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LW1pY3JvLWZyYW1ld29yay9zcmMvbW9kZWxzLmpzIiwibm9kZV9tb2R1bGVzL0B0cnVzdHBpbG90L3RydXN0Ym94LW1pY3JvLWZyYW1ld29yay9zcmMvZWxlbWVudHMuanMiLCJub2RlX21vZHVsZXMvQHRydXN0cGlsb3QvdHJ1c3Rib3gtbWljcm8tZnJhbWV3b3JrL3NyYy90cnVzdGJveGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLHVCQUFBLEdBQUEsT0FBQSxDQUFBLHNDQUFBLENBQUEsQ0FBQTs7QUFFQSxDQUFBLENBQUEsRUFBQSx1QkFBQSxDQUFBLGVBQUEsR0FBQSxDQUFBOzs7Ozs7Ozs7O0FDRkEsSUFBQSxXQUFBLEdBQUEsT0FBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBOztzREFFUyxXQUFBLENBQUE7NERBQVksV0FBQSxDQUFBO3FEQUFrQixXQUFBLENBQUE7UUFBVyxrQkFBQSxXQUFBLENBQUE7OztBQ0ZsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QVgsQ0FBZ0IsVUFBQyxJQUFELEVBQUE7TUFBQSxPQUFVLElBQUEsS0FBUywrQkFBbkIsQ0FBQTtLQUFoQixDQUFBLEdBQ1IsV0FEUSxHQUVSLFlBRkosQ0FBQTs7SUFJQSxJQUFNLE9BQUEsR0FBVTtNQUNkLFdBQUEsRUFBYSxRQUFBLENBQUEsV0FBQSxDQUFZLFVBRFg7TUFFZCxLQUFBLEVBQU8sQ0FBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLGdCQUFBLEVBQWlCLEVBQUUsZUFBQSxFQUFpQixXQUFuQixFQUFqQixFQUFtRCxPQUFBLENBQVEsUUFBUixDQUFuRCxDQUZPO01BR2QsR0FBQSxFQUFBLEdBQUE7S0FIRixDQUFBO0lBS0EsSUFBTSxZQUFBLEdBQWUsQ0FBQSxDQUFBLEVBQUEsUUFBQSxDQUFBLGdCQUFBLEVBQWlCLE9BQWpCLENBQXJCLENBQUE7SUFDQSxPQUFBLENBQVEsT0FBUixDQUFnQixZQUFoQixDQUFBLENBQUE7R0FwQkYsQ0FBQTs7RUF1QkEsQ0FBQSxDQUFBLEVBQUEsYUFBQSxDQUFBLE9BQUEsRUFBa0I7SUFDaEIsSUFBQSxFQUFNLGtCQURVO0lBRWhCLFdBQUEsRUFBQSxXQUZnQjtJQUdoQixjQUFBLEVBQWdCLGlDQUhBO0lBSWhCLEtBQUEsRUFBQSxLQUFBO0dBSkYsQ0FBQSxDQUFBO0NBdERGLENBQUE7O3NEQThEUzs0REFBWTtxREFBa0I7UUFBVyxrQkFBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IG1pY3JvVHJ1c3RTY29yZSB9IGZyb20gJ0B0cnVzdHBpbG90L3RydXN0Ym94LW1pY3JvLWZyYW1ld29yayc7XG5cbm1pY3JvVHJ1c3RTY29yZSgpO1xuIiwiaW1wb3J0IHsgbWljcm9Db21ibywgbWljcm9SZXZpZXdDb3VudCwgbWljcm9TdGFyLCBtaWNyb1RydXN0U2NvcmUgfSBmcm9tICcuL3RydXN0Ym94ZXMnO1xuXG5leHBvcnQgeyBtaWNyb0NvbWJvLCBtaWNyb1Jldmlld0NvdW50LCBtaWNyb1N0YXIsIG1pY3JvVHJ1c3RTY29yZSB9O1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicmV2aWV3c1wiOiB7XG4gICAgICAgIFwic2luZ3VsYXJcIjogXCJhbm1lbGRlbHNlXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwiYW5tZWxkZWxzZXJcIixcbiAgICAgICAgXCJjb2xsZWN0ZWRWaWFcIjogXCJJbmRzYW1sZXQgdmlhIFtzb3VyY2VdXCIsXG4gICAgICAgIFwidmVyaWZpZWRWaWFcIjogXCJWZXJpZmljZXJldCDigJMgaW5kc2FtbGV0IHZpYSBbc291cmNlXVwiLFxuICAgICAgICBcInNlcnZpY2VSZXZpZXdUeXBlTGFiZWxzXCI6IHtcbiAgICAgICAgICAgIFwidmVyaWZpZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJWZXJpZmljZXJldFwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiVmVyaWZpY2VyZXQgYW5tZWxkZWxzZVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXUzDpnMgbWVyZVtMSU5LLUVORF0gb20gZGUgZm9yc2tlbGxpZ2UgdHlwZXIgYW5tZWxkZWxzZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW52aXRlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkludml0ZXJldFwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiSW52aXRlcmV0IGFubWVsZGVsc2VcIixcbiAgICAgICAgICAgICAgICBcImluZm9UcnVzdHBpbG90XCI6IFwiQW5tZWxkZWxzZXIgYWYgVHJ1c3RwaWxvdCwgZGVyIGVyIG1hcmtlcmV0IHNvbSBbQk9MRC1CRUdJTl1JbnZpdGVyZXRbQk9MRC1FTkRdLCBibGV2IHNrcmV2ZXQgdmlhIGV0IGRpcmVrdGUgbGluayB0aWwgdm9yZXMgYW5tZWxkZWxzZXNmb3JtdWxhci5cIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1Mw6ZzIG1lcmVbTElOSy1FTkRdIG9tIGRlIGZvcnNrZWxsaWdlIHR5cGVyIGFubWVsZGVsc2VyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlZGlyZWN0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJPbWRpcmlnZXJldFwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiT21kaXJpZ2VyZXQgYW5tZWxkZWxzZVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXUzDpnMgbWVyZVtMSU5LLUVORF0gb20gZGUgZm9yc2tlbGxpZ2UgdHlwZXIgYW5tZWxkZWxzZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIm1vbnRoTmFtZXNcIjoge1xuICAgICAgICBcImphbnVhcnlcIjogXCJqYW51YXJcIixcbiAgICAgICAgXCJmZWJydWFyeVwiOiBcImZlYnJ1YXJcIixcbiAgICAgICAgXCJtYXJjaFwiOiBcIm1hcnRzXCIsXG4gICAgICAgIFwiYXByaWxcIjogXCJhcHJpbFwiLFxuICAgICAgICBcIm1heVwiOiBcIm1halwiLFxuICAgICAgICBcImp1bmVcIjogXCJqdW5pXCIsXG4gICAgICAgIFwianVseVwiOiBcImp1bGlcIixcbiAgICAgICAgXCJhdWd1c3RcIjogXCJhdWd1c3RcIixcbiAgICAgICAgXCJzZXB0ZW1iZXJcIjogXCJzZXB0ZW1iZXJcIixcbiAgICAgICAgXCJvY3RvYmVyXCI6IFwib2t0b2JlclwiLFxuICAgICAgICBcIm5vdmVtYmVyXCI6IFwibm92ZW1iZXJcIixcbiAgICAgICAgXCJkZWNlbWJlclwiOiBcImRlY2VtYmVyXCJcbiAgICB9LFxuICAgIFwidGltZUFnb1wiOiB7XG4gICAgICAgIFwiZGF5c1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiRm9yIFtjb3VudF0gZGFnIHNpZGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIkZvciBbY291bnRdIGRhZ2Ugc2lkZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcImhvdXJzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJGb3IgW2NvdW50XSB0aW1lIHNpZGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIkZvciBbY291bnRdIHRpbWVyIHNpZGVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW51dGVzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJGb3IgW2NvdW50XSBtaW51dCBzaWRlblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJGb3IgW2NvdW50XSBtaW51dHRlciBzaWRlblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vjb25kc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiRm9yIFtjb3VudF0gc2VrdW5kIHNpZGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIkZvciBbY291bnRdIHNla3VuZGVyIHNpZGVuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIlZpc2VyIHZvcmVzIFtzdGFyMV0tc3RqZXJuZWRlIGFubWVsZGVsc2VyXCIsXG4gICAgICAgIFwiYnlTdGFyczJcIjogXCJWaXNlciB2b3JlcyBbc3RhcjFdLSBvZyBbc3RhcjJdLXN0amVybmVkZSBhbm1lbGRlbHNlclwiLFxuICAgICAgICBcImJ5U3RhcnMzXCI6IFwiVmlzZXIgdm9yZXMgW3N0YXIxXS0sIFtzdGFyMl0tIG9nIFtzdGFyM10tc3RqZXJuZWRlIGFubWVsZGVsc2VyXCIsXG4gICAgICAgIFwiYnlTdGFyczRcIjogXCJWaXNlciB2b3JlcyBbc3RhcjFdLSwgW3N0YXIyXS0sIFtzdGFyM10tIG9nIFtzdGFyNF0tc3RqZXJuZWRlIGFubWVsZGVsc2VyXCIsXG4gICAgICAgIFwiYnlMYXRlc3RcIjogXCJWaXNlciB2b3JlcyBzZW5lc3RlIGFubWVsZGVsc2VyXCIsXG4gICAgICAgIFwiYnlGYXZvcml0ZU9yVGFnXCI6IFwiVmlzZXIgdm9yZXMgeW5kbGluZ3Nhbm1lbGRlbHNlclwiXG4gICAgfSxcbiAgICBcIm5vdFJhdGVkXCI6IFwiSWtrZSBiZWTDuG10XCIsXG4gICAgXCJzdGFyUmF0aW5nXCI6IFwiU3RqZXJuZWJlZMO4bW1lbHNlIHDDpSBbcmF0aW5nU3RhcnNdIHVkIGFmIFt0b3RhbFN0YXJzXSBww6UgVHJ1c3RwaWxvdFwiLFxuICAgIFwic3RhclJldmlld1wiOiBcIkFubWVsZGVsc2UgbWVkIFtyZXZpZXdTdGFyc10gc3RqZXJuZXJcIixcbiAgICBcInJldmlld0Rpc2NsYWltZXJcIjoge1xuICAgICAgICBcImJvZHlcIjogXCJUcnVzdHBpbG90IHVkZsO4cmVyIGtvbnRyb2wgYWYgYW5tZWxkZWxzZXJcIlxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcInJldmlld3NcIjoge1xuICAgICAgICBcInNpbmd1bGFyXCI6IFwiQmV3ZXJ0dW5nXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwiQmV3ZXJ0dW5nZW5cIixcbiAgICAgICAgXCJjb2xsZWN0ZWRWaWFcIjogXCJHZXNhbW1lbHQgw7xiZXIgW3NvdXJjZV1cIixcbiAgICAgICAgXCJ2ZXJpZmllZFZpYVwiOiBcIlZlcmlmaXppZXJ0LCBnZXNhbW1lbHQgw7xiZXIgW3NvdXJjZV1cIixcbiAgICAgICAgXCJzZXJ2aWNlUmV2aWV3VHlwZUxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInZlcmlmaWVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVmVyaWZpemllcnRcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIlZlcmlmaXppZXJ0ZSBCZXdlcnR1bmdcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1FcmZhaHJlbiBTaWUgbWVocltMSU5LLUVORF0gw7xiZXIgdmVyc2NoaWVkZW5lIEFydGVuIHZvbiBCZXdlcnR1bmdlblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbnZpdGVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQXVmIEVpbmxhZHVuZ1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiQmV3ZXJ0dW5nIGF1ZiBFaW5sYWR1bmdcIixcbiAgICAgICAgICAgICAgICBcImluZm9UcnVzdHBpbG90XCI6IFwiQmV3ZXJ0dW5nZW4genUgVHJ1c3RwaWxvdCwgZGllIG1pdCBkZW0gSGlud2VpcyBbQk9MRC1CRUdJTl1BdWYgRWlubGFkdW5nW0JPTEQtRU5EXSB2ZXJzZWhlbiBzaW5kLCB3dXJkZW4gw7xiZXIgZWluZW4gZGlyZWt0ZW4gTGluayB6dSB1bnNlcmVtIEJld2VydHVuZ3Nmb3JtdWxhciBhYmdlZ2ViZW4uXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dRXJmYWhyZW4gU2llIG1laHJbTElOSy1FTkRdIMO8YmVyIHZlcnNjaGllZGVuZSBBcnRlbiB2b24gQmV3ZXJ0dW5nZW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldlaXRlcmdlbGVpdGV0XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJXZWl0ZXJnZWxlaXRldGUgQmV3ZXJ0dW5nXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dRXJmYWhyZW4gU2llIG1laHJbTElOSy1FTkRdIMO8YmVyIHZlcnNjaGllZGVuZSBBcnRlbiB2b24gQmV3ZXJ0dW5nZW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIm1vbnRoTmFtZXNcIjoge1xuICAgICAgICBcImphbnVhcnlcIjogXCJKYW51YXJcIixcbiAgICAgICAgXCJmZWJydWFyeVwiOiBcIkZlYnJ1YXJcIixcbiAgICAgICAgXCJtYXJjaFwiOiBcIk3DpHJ6XCIsXG4gICAgICAgIFwiYXByaWxcIjogXCJBcHJpbFwiLFxuICAgICAgICBcIm1heVwiOiBcIk1haVwiLFxuICAgICAgICBcImp1bmVcIjogXCJKdW5pXCIsXG4gICAgICAgIFwianVseVwiOiBcIkp1bGlcIixcbiAgICAgICAgXCJhdWd1c3RcIjogXCJBdWd1c3RcIixcbiAgICAgICAgXCJzZXB0ZW1iZXJcIjogXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgXCJvY3RvYmVyXCI6IFwiT2t0b2JlclwiLFxuICAgICAgICBcIm5vdmVtYmVyXCI6IFwiTm92ZW1iZXJcIixcbiAgICAgICAgXCJkZWNlbWJlclwiOiBcIkRlemVtYmVyXCJcbiAgICB9LFxuICAgIFwidGltZUFnb1wiOiB7XG4gICAgICAgIFwiZGF5c1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwidm9yIFtjb3VudF0gVGFnXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcInZvciBbY291bnRdIFRhZ2VuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3Vyc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwidm9yIFtjb3VudF0gU3R1bmRlXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcInZvciBbY291bnRdIFN0dW5kZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcInZvciBbY291bnRdIE1pbnV0ZVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJ2b3IgW2NvdW50XSBNaW51dGVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJ2b3IgW2NvdW50XSBTZWt1bmRlXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcInZvciBbY291bnRdIFNla3VuZGVuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIkVpbmlnZSB1bnNlcmVyIFtzdGFyMV0tU3Rlcm5lLUJld2VydHVuZ2VuXCIsXG4gICAgICAgIFwiYnlTdGFyczJcIjogXCJFaW5pZ2UgdW5zZXJlciBbc3RhcjFdLSAmIFtzdGFyMl0tU3Rlcm5lLUJld2VydHVuZ2VuXCIsXG4gICAgICAgIFwiYnlTdGFyczNcIjogXCJFaW5pZ2UgdW5zZXJlciBbc3RhcjFdLSwgW3N0YXIyXS0gJiBbc3RhcjNdLVN0ZXJuZS1CZXdlcnR1bmdlblwiLFxuICAgICAgICBcImJ5U3RhcnM0XCI6IFwiRWluaWdlIHVuc2VyZXIgW3N0YXIxXS0sIFtzdGFyMl0tLCBbc3RhcjNdLSAmIFtzdGFyNF0tU3Rlcm5lLUJld2VydHVuZ2VuXCIsXG4gICAgICAgIFwiYnlMYXRlc3RcIjogXCJVbnNlcmUgbmV1ZXN0ZW4gQmV3ZXJ0dW5nZW5cIixcbiAgICAgICAgXCJieUZhdm9yaXRlT3JUYWdcIjogXCJVbnNlcmUgTGllYmxpbmdzYmV3ZXJ0dW5nZW5cIlxuICAgIH0sXG4gICAgXCJub3RSYXRlZFwiOiBcIk5pY2h0IGJld2VydGV0XCIsXG4gICAgXCJzdGFyUmF0aW5nXCI6IFwiW3JhdGluZ1N0YXJzXSB2b24gW3RvdGFsU3RhcnNdIFN0ZXJuZW4gYXVmIFRydXN0cGlsb3RcIixcbiAgICBcInN0YXJSZXZpZXdcIjogXCJbcmV2aWV3U3RhcnNdLVN0ZXJuKGUpLUJld2VydHVuZ1wiLFxuICAgIFwicmV2aWV3RGlzY2xhaW1lclwiOiB7XG4gICAgICAgIFwiYm9keVwiOiBcIlRydXN0cGlsb3QgcHLDvGZ0IEJld2VydHVuZ2VuXCJcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJyZXZpZXdzXCI6IHtcbiAgICAgICAgXCJzaW5ndWxhclwiOiBcInJldmlld1wiLFxuICAgICAgICBcInBsdXJhbFwiOiBcInJldmlld3NcIixcbiAgICAgICAgXCJjb2xsZWN0ZWRWaWFcIjogXCJDb2xsZWN0ZWQgdmlhIFtzb3VyY2VdXCIsXG4gICAgICAgIFwidmVyaWZpZWRWaWFcIjogXCJWZXJpZmllZCwgY29sbGVjdGVkIHZpYSBbc291cmNlXVwiLFxuICAgICAgICBcInNlcnZpY2VSZXZpZXdUeXBlTGFiZWxzXCI6IHtcbiAgICAgICAgICAgIFwidmVyaWZpZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJWZXJpZmllZFwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiVmVyaWZpZWQgcmV2aWV3XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTGVhcm4gbW9yZVtMSU5LLUVORF0gYWJvdXQgcmV2aWV3IHR5cGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImludml0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJJbnZpdGVkXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJJbnZpdGVkIHJldmlld1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJSZXZpZXdzIGZvciBUcnVzdHBpbG90IHRoYXQgYXJlIGxhYmVsZWQgW0JPTEQtQkVHSU5dSW52aXRlZFtCT0xELUVORF0gd2VyZSB3cml0dGVuIHZpYSBhIGxpbmsgbGVhZGluZyBkaXJlY3RseSB0byBvdXIgcmV2aWV3IGZvcm0uXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTGVhcm4gbW9yZVtMSU5LLUVORF0gYWJvdXQgcmV2aWV3IHR5cGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlZGlyZWN0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJSZWRpcmVjdGVkXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJSZWRpcmVjdGVkIHJldmlld1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXUxlYXJuIG1vcmVbTElOSy1FTkRdIGFib3V0IHJldmlldyB0eXBlc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwibW9udGhOYW1lc1wiOiB7XG4gICAgICAgIFwiamFudWFyeVwiOiBcIkphbnVhcnlcIixcbiAgICAgICAgXCJmZWJydWFyeVwiOiBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgIFwibWFyY2hcIjogXCJNYXJjaFwiLFxuICAgICAgICBcImFwcmlsXCI6IFwiQXByaWxcIixcbiAgICAgICAgXCJtYXlcIjogXCJNYXlcIixcbiAgICAgICAgXCJqdW5lXCI6IFwiSnVuZVwiLFxuICAgICAgICBcImp1bHlcIjogXCJKdWx5XCIsXG4gICAgICAgIFwiYXVndXN0XCI6IFwiQXVndXN0XCIsXG4gICAgICAgIFwic2VwdGVtYmVyXCI6IFwiU2VwdGVtYmVyXCIsXG4gICAgICAgIFwib2N0b2JlclwiOiBcIk9jdG9iZXJcIixcbiAgICAgICAgXCJub3ZlbWJlclwiOiBcIk5vdmVtYmVyXCIsXG4gICAgICAgIFwiZGVjZW1iZXJcIjogXCJEZWNlbWJlclwiXG4gICAgfSxcbiAgICBcInRpbWVBZ29cIjoge1xuICAgICAgICBcImRheXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gZGF5IGFnb1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIGRheXMgYWdvXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3Vyc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBob3VyIGFnb1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIGhvdXJzIGFnb1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWludXRlc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBtaW51dGUgYWdvXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gbWludXRlcyBhZ29cIlxuICAgICAgICB9LFxuICAgICAgICBcInNlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gc2Vjb25kIGFnb1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIHNlY29uZHMgYWdvXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIlNob3dpbmcgb3VyIFtzdGFyMV0gc3RhciByZXZpZXdzXCIsXG4gICAgICAgIFwiYnlTdGFyczJcIjogXCJTaG93aW5nIG91ciBbc3RhcjFdICYgW3N0YXIyXSBzdGFyIHJldmlld3NcIixcbiAgICAgICAgXCJieVN0YXJzM1wiOiBcIlNob3dpbmcgb3VyIFtzdGFyMV0sIFtzdGFyMl0gJiBbc3RhcjNdIHN0YXIgcmV2aWV3c1wiLFxuICAgICAgICBcImJ5U3RhcnM0XCI6IFwiU2hvd2luZyBvdXIgW3N0YXIxXSwgW3N0YXIyXSwgW3N0YXIzXSAmIFtzdGFyNF0gc3RhciByZXZpZXdzXCIsXG4gICAgICAgIFwiYnlMYXRlc3RcIjogXCJTaG93aW5nIG91ciBsYXRlc3QgcmV2aWV3c1wiLFxuICAgICAgICBcImJ5RmF2b3JpdGVPclRhZ1wiOiBcIlNob3dpbmcgb3VyIGZhdm91cml0ZSByZXZpZXdzXCJcbiAgICB9LFxuICAgIFwibm90UmF0ZWRcIjogXCJOb3QgcmF0ZWRcIixcbiAgICBcInN0YXJSYXRpbmdcIjogXCJbcmF0aW5nU3RhcnNdIG91dCBvZiBbdG90YWxTdGFyc10gc3RhciByYXRpbmcgb24gVHJ1c3RwaWxvdFwiLFxuICAgIFwic3RhclJldmlld1wiOiBcIltyZXZpZXdTdGFyc10gc3RhciByZXZpZXdcIixcbiAgICBcInJldmlld0Rpc2NsYWltZXJcIjoge1xuICAgICAgICBcImJvZHlcIjogXCJUcnVzdHBpbG90IGNoZWNrcyByZXZpZXdzXCJcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJyZXZpZXdzXCI6IHtcbiAgICAgICAgXCJzaW5ndWxhclwiOiBcInJldmlld1wiLFxuICAgICAgICBcInBsdXJhbFwiOiBcInJldmlld3NcIixcbiAgICAgICAgXCJjb2xsZWN0ZWRWaWFcIjogXCJDb2xsZWN0ZWQgdmlhIFtzb3VyY2VdXCIsXG4gICAgICAgIFwidmVyaWZpZWRWaWFcIjogXCJWZXJpZmllZCwgY29sbGVjdGVkIHZpYSBbc291cmNlXVwiLFxuICAgICAgICBcInNlcnZpY2VSZXZpZXdUeXBlTGFiZWxzXCI6IHtcbiAgICAgICAgICAgIFwidmVyaWZpZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJWZXJpZmllZFwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiVmVyaWZpZWQgcmV2aWV3XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTGVhcm4gbW9yZVtMSU5LLUVORF0gYWJvdXQgcmV2aWV3IHR5cGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImludml0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJJbnZpdGVkXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJJbnZpdGVkIHJldmlld1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJSZXZpZXdzIGZvciBUcnVzdHBpbG90IHRoYXQgYXJlIGxhYmVsZWQgW0JPTEQtQkVHSU5dSW52aXRlZFtCT0xELUVORF0gd2VyZSB3cml0dGVuIHZpYSBhIGxpbmsgbGVhZGluZyBkaXJlY3RseSB0byBvdXIgcmV2aWV3IGZvcm0uXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTGVhcm4gbW9yZVtMSU5LLUVORF0gYWJvdXQgcmV2aWV3IHR5cGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlZGlyZWN0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJSZWRpcmVjdGVkXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJSZWRpcmVjdGVkIHJldmlld1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXUxlYXJuIG1vcmVbTElOSy1FTkRdIGFib3V0IHJldmlldyB0eXBlc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwibW9udGhOYW1lc1wiOiB7XG4gICAgICAgIFwiamFudWFyeVwiOiBcIkphbnVhcnlcIixcbiAgICAgICAgXCJmZWJydWFyeVwiOiBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgIFwibWFyY2hcIjogXCJNYXJjaFwiLFxuICAgICAgICBcImFwcmlsXCI6IFwiQXByaWxcIixcbiAgICAgICAgXCJtYXlcIjogXCJNYXlcIixcbiAgICAgICAgXCJqdW5lXCI6IFwiSnVuZVwiLFxuICAgICAgICBcImp1bHlcIjogXCJKdWx5XCIsXG4gICAgICAgIFwiYXVndXN0XCI6IFwiQXVndXN0XCIsXG4gICAgICAgIFwic2VwdGVtYmVyXCI6IFwiU2VwdGVtYmVyXCIsXG4gICAgICAgIFwib2N0b2JlclwiOiBcIk9jdG9iZXJcIixcbiAgICAgICAgXCJub3ZlbWJlclwiOiBcIk5vdmVtYmVyXCIsXG4gICAgICAgIFwiZGVjZW1iZXJcIjogXCJEZWNlbWJlclwiXG4gICAgfSxcbiAgICBcInRpbWVBZ29cIjoge1xuICAgICAgICBcImRheXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gZGF5IGFnb1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIGRheXMgYWdvXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3Vyc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBob3VyIGFnb1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIGhvdXJzIGFnb1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWludXRlc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBtaW51dGUgYWdvXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gbWludXRlcyBhZ29cIlxuICAgICAgICB9LFxuICAgICAgICBcInNlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gc2Vjb25kIGFnb1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIHNlY29uZHMgYWdvXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIlNob3dpbmcgb3VyIFtzdGFyMV0gc3RhciByZXZpZXdzXCIsXG4gICAgICAgIFwiYnlTdGFyczJcIjogXCJTaG93aW5nIG91ciBbc3RhcjFdICYgW3N0YXIyXSBzdGFyIHJldmlld3NcIixcbiAgICAgICAgXCJieVN0YXJzM1wiOiBcIlNob3dpbmcgb3VyIFtzdGFyMV0sIFtzdGFyMl0gJiBbc3RhcjNdIHN0YXIgcmV2aWV3c1wiLFxuICAgICAgICBcImJ5U3RhcnM0XCI6IFwiU2hvd2luZyBvdXIgW3N0YXIxXSwgW3N0YXIyXSwgW3N0YXIzXSAmIFtzdGFyNF0gc3RhciByZXZpZXdzXCIsXG4gICAgICAgIFwiYnlMYXRlc3RcIjogXCJTaG93aW5nIG91ciBsYXRlc3QgcmV2aWV3c1wiLFxuICAgICAgICBcImJ5RmF2b3JpdGVPclRhZ1wiOiBcIlNob3dpbmcgb3VyIGZhdm9yaXRlIHJldmlld3NcIlxuICAgIH0sXG4gICAgXCJub3RSYXRlZFwiOiBcIk5vdCByYXRlZFwiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIltyYXRpbmdTdGFyc10gb3V0IG9mIFt0b3RhbFN0YXJzXSBzdGFyIHJhdGluZyBvbiBUcnVzdHBpbG90XCIsXG4gICAgXCJzdGFyUmV2aWV3XCI6IFwiW3Jldmlld1N0YXJzXSBzdGFyIHJldmlld1wiLFxuICAgIFwicmV2aWV3RGlzY2xhaW1lclwiOiB7XG4gICAgICAgIFwiYm9keVwiOiBcIlRydXN0cGlsb3QgY2hlY2tzIHJldmlld3NcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNsaWNrIHRvIGxlYXJuIG1vcmVcIlxuICAgIH0sXG4gICAgXCJ3aWRnZXRMYWJlbFwiOiBcIlRydXN0cGlsb3QgcmV2aWV3c1wiLFxuICAgIFwiYnVzaW5lc3NSYXRpbmdUZXh0V2l0aFJldmlld0NvdW50XCI6IFwiUmF0ZWQgW3RydXN0U2NvcmVdIG91dCBvZiBbdG90YWxTY29yZV0uIFtyZXZpZXdDb3VudF0gcmV2aWV3cyBvbiBUcnVzdHBpbG90XCIsXG4gICAgXCJidXNpbmVzc1JhdGluZ1RleHRXaXRoVHJ1c3RTY29yZVJhdGluZ1wiOiBcIlJhdGVkIFt0cnVzdFNjb3JlUmF0aW5nXS4gW3RydXN0U2NvcmVdIG91dCBvZiBbdG90YWxTY29yZV0gb24gVHJ1c3RwaWxvdFwiLFxuICAgIFwiYnVzaW5lc3NSYXRpbmdUZXh0V2l0aFRTUmF0aW5nQW5kUmV2aWV3Q291bnRcIjogXCJSYXRlZCBbdHJ1c3RTY29yZVJhdGluZ10uIFt0cnVzdFNjb3JlXSBvdXQgb2YgW3RvdGFsU2NvcmVdLiBbcmV2aWV3Q291bnRdIHJldmlld3Mgb24gVHJ1c3RwaWxvdFwiLFxuICAgIFwiY2xpY2tQcm9maWxlTGlua1wiOiBcIkNsaWNrIHRvIHZpZXcgdGhlIGNvbXBhbnkncyBUcnVzdHBpbG90IHByb2ZpbGVcIixcbiAgICBcInByb2R1Y3RSYXRpbmdUZXh0V2l0aFN0YXJzXCI6IFwiW3Jldmlld0NvdW50XSByZXZpZXdzIHdpdGggW3N0YXJzXSBzdGFyc1wiLFxuICAgIFwicHJvZHVjdFJhdGluZ1RleHRXaXRoMVN0YXJcIjogXCJbcmV2aWV3Q291bnRdIHJldmlld3Mgd2l0aCBbc3Rhcl0gc3RhclwiXG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJyZXZpZXdzXCI6IHtcbiAgICAgICAgXCJzaW5ndWxhclwiOiBcIm9waW5pw7NuXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwib3BpbmlvbmVzXCIsXG4gICAgICAgIFwiY29sbGVjdGVkVmlhXCI6IFwiRnVlbnRlOiBbc291cmNlXVwiLFxuICAgICAgICBcInZlcmlmaWVkVmlhXCI6IFwiVmVyaWZpY2FkYSwgcmVjb3BpbGFkYSB2w61hIFtzb3VyY2VdXCIsXG4gICAgICAgIFwic2VydmljZVJldmlld1R5cGVMYWJlbHNcIjoge1xuICAgICAgICAgICAgXCJ2ZXJpZmllZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZlcmlmaWNhZGFcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIk9waW5pw7NuIHZlcmlmaWNhZGFcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1Nw6FzIGluZm9ybWFjacOzbltMSU5LLUVORF0gc29icmUgbG9zIHRpcG9zIGRlIG9waW5pw7NuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImludml0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJQb3IgaW52aXRhY2nDs25cIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIk9waW5pw7NuIHBvciBpbnZpdGFjacOzblwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJMYXMgb3BpbmlvbmVzIGRlIFRydXN0cGlsb3QgY29uIGxhIGV0aXF1ZXRhIFtCT0xELUJFR0lOXVBvciBpbnZpdGFjacOzbltCT0xELUVORF0gc2UgZXNjcmliaWVyb24gYSB0cmF2w6lzIGRlIHVuIGVubGFjZSBxdWUgZGlyaWdlIGRpcmVjdGFtZW50ZSBhIG51ZXN0cm8gZm9ybXVsYXJpbyBwYXJhIG9waW5hci5cIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1Nw6FzIGluZm9ybWFjacOzbltMSU5LLUVORF0gc29icmUgbG9zIHRpcG9zIGRlIG9waW5pw7NuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlZGlyZWN0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJSZWRpcmlnaWRhXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJPcGluacOzbiByZWRpcmlnaWRhXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTcOhcyBpbmZvcm1hY2nDs25bTElOSy1FTkRdIHNvYnJlIGxvcyB0aXBvcyBkZSBvcGluacOzblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwibW9udGhOYW1lc1wiOiB7XG4gICAgICAgIFwiamFudWFyeVwiOiBcImVuZXJvXCIsXG4gICAgICAgIFwiZmVicnVhcnlcIjogXCJmZWJyZXJvXCIsXG4gICAgICAgIFwibWFyY2hcIjogXCJtYXJ6b1wiLFxuICAgICAgICBcImFwcmlsXCI6IFwiYWJyaWxcIixcbiAgICAgICAgXCJtYXlcIjogXCJtYXlvXCIsXG4gICAgICAgIFwianVuZVwiOiBcImp1bmlvXCIsXG4gICAgICAgIFwianVseVwiOiBcImp1bGlvXCIsXG4gICAgICAgIFwiYXVndXN0XCI6IFwiYWdvc3RvXCIsXG4gICAgICAgIFwic2VwdGVtYmVyXCI6IFwic2VwdGllbWJyZVwiLFxuICAgICAgICBcIm9jdG9iZXJcIjogXCJvY3R1YnJlXCIsXG4gICAgICAgIFwibm92ZW1iZXJcIjogXCJub3ZpZW1icmVcIixcbiAgICAgICAgXCJkZWNlbWJlclwiOiBcImRpY2llbWJyZVwiXG4gICAgfSxcbiAgICBcInRpbWVBZ29cIjoge1xuICAgICAgICBcImRheXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIkhhY2UgW2NvdW50XSBkw61hXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIkhhY2UgW2NvdW50XSBkw61hc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG91cnNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIkhhY2UgW2NvdW50XSBob3JhXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIkhhY2UgW2NvdW50XSBob3Jhc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWludXRlc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiSGFjZSBbY291bnRdIG1pbnV0b1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJIYWNlIFtjb3VudF0gbWludXRvc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vjb25kc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiSGFjZSBbY291bnRdIHNlZ3VuZG9cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiSGFjZSBbY291bnRdIHNlZ3VuZG9zXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIk51ZXN0cmFzIG9waW5pb25lcyBkZSBbc3RhcjFdIGVzdHJlbGxhc1wiLFxuICAgICAgICBcImJ5U3RhcnMyXCI6IFwiTnVlc3RyYXMgb3BpbmlvbmVzIGRlIFtzdGFyMV0geSBbc3RhcjJdIGVzdHJlbGxhc1wiLFxuICAgICAgICBcImJ5U3RhcnMzXCI6IFwiTnVlc3RyYXMgb3BpbmlvbmVzIGRlIFtzdGFyMV0sIFtzdGFyMl0geSBbc3RhcjNdIGVzdHJlbGxhc1wiLFxuICAgICAgICBcImJ5U3RhcnM0XCI6IFwiTnVlc3RyYXMgb3BpbmlvbmVzIGRlIFtzdGFyMV0sIFtzdGFyMl0sIFtzdGFyM10geSBbc3RhcjRdIGVzdHJlbGxhc1wiLFxuICAgICAgICBcImJ5TGF0ZXN0XCI6IFwiTnVlc3RyYXMgb3BpbmlvbmVzIG3DoXMgcmVjaWVudGVzXCIsXG4gICAgICAgIFwiYnlGYXZvcml0ZU9yVGFnXCI6IFwiTnVlc3RyYXMgb3BpbmlvbmVzIHByZWZlcmlkYXNcIlxuICAgIH0sXG4gICAgXCJub3RSYXRlZFwiOiBcIlNpbiB2YWxvcmFyXCIsXG4gICAgXCJzdGFyUmF0aW5nXCI6IFwiW3JhdGluZ1N0YXJzXSBlc3RyZWxsYShzKSBkZSBbdG90YWxTdGFyc10gZW4gVHJ1c3RwaWxvdFwiLFxuICAgIFwic3RhclJldmlld1wiOiBcIk9waW5pw7NuIGRlIFtyZXZpZXdTdGFyc10gZXN0cmVsbGEocylcIixcbiAgICBcInJldmlld0Rpc2NsYWltZXJcIjoge1xuICAgICAgICBcImJvZHlcIjogXCJUcnVzdHBpbG90IHZlcmlmaWNhIGxhcyBvcGluaW9uZXNcIlxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcInJldmlld3NcIjoge1xuICAgICAgICBcInNpbmd1bGFyXCI6IFwiYXJ2b3N0ZWx1XCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwiYXJ2b3N0ZWx1YVwiLFxuICAgICAgICBcImNvbGxlY3RlZFZpYVwiOiBcIkFydm9zdGVsdW4gbMOkaGRlOiBbc291cmNlXVwiLFxuICAgICAgICBcInZlcmlmaWVkVmlhXCI6IFwiVmFybWVubmV0dHUsIGzDpGhkZTogW3NvdXJjZV1cIixcbiAgICAgICAgXCJzZXJ2aWNlUmV2aWV3VHlwZUxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInZlcmlmaWVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVmFybWVubmV0dHVcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIlZhcm1lbm5ldHR1IGFydm9zdGVsdVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXUx1ZSBsaXPDpMOkW0xJTkstRU5EXSBlcmkgYXJ2b3N0ZWx1dHl5cGVpc3TDpFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbnZpdGVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiS3V0c3V0dHVcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIkt1dHN1dHR1IGFydm9zdGVsdVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJUcnVzdHBpbG90aW4gYXJ2b3N0ZWx1dCwgam9pc3NhIG9uIG1lcmtpbnTDpCBbQk9MRC1CRUdJTl1LdXRzdXR0dVtCT0xELUVORF0sIGtpcmpvaXRldHRpaW4gbGlua2luIGthdXR0YSwgam9rYSBqb2h0YWEgc3VvcmFhbiBhcnZvc3RlbHVsb21ha2tlZXNlZW1tZS5cIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1MdWUgbGlzw6TDpFtMSU5LLUVORF0gZXJpIGFydm9zdGVsdXR5eXBlaXN0w6RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlV1ZGVsbGVlbm9oamF0dHVcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIlV1ZGVsbGVlbm9oamF0dHUgYXJ2b3N0ZWx1XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTHVlIGxpc8Okw6RbTElOSy1FTkRdIGVyaSBhcnZvc3RlbHV0eXlwZWlzdMOkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJtb250aE5hbWVzXCI6IHtcbiAgICAgICAgXCJqYW51YXJ5XCI6IFwidGFtbWlrdXV0YVwiLFxuICAgICAgICBcImZlYnJ1YXJ5XCI6IFwiaGVsbWlrdXV0YVwiLFxuICAgICAgICBcIm1hcmNoXCI6IFwibWFhbGlza3V1dGFcIixcbiAgICAgICAgXCJhcHJpbFwiOiBcImh1aHRpa3V1dGFcIixcbiAgICAgICAgXCJtYXlcIjogXCJ0b3Vrb2t1dXRhXCIsXG4gICAgICAgIFwianVuZVwiOiBcImtlc8Oka3V1dGFcIixcbiAgICAgICAgXCJqdWx5XCI6IFwiaGVpbsOka3V1dGFcIixcbiAgICAgICAgXCJhdWd1c3RcIjogXCJlbG9rdXV0YVwiLFxuICAgICAgICBcInNlcHRlbWJlclwiOiBcInN5eXNrdXV0YVwiLFxuICAgICAgICBcIm9jdG9iZXJcIjogXCJsb2tha3V1dGFcIixcbiAgICAgICAgXCJub3ZlbWJlclwiOiBcIm1hcnJhc2t1dXRhXCIsXG4gICAgICAgIFwiZGVjZW1iZXJcIjogXCJqb3VsdWt1dXRhXCJcbiAgICB9LFxuICAgIFwidGltZUFnb1wiOiB7XG4gICAgICAgIFwiZGF5c1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBww6RpdsOkw6Qgc2l0dGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gcMOkaXbDpMOkIHNpdHRlblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG91cnNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gdHVudGlhIHNpdHRlblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIHR1bnRpYSBzaXR0ZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gbWludXV0dGlhIHNpdHRlblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIG1pbnV1dHRpYSBzaXR0ZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcInNlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gc2VrdW50aWEgc2l0dGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gc2VrdW50aWEgc2l0dGVuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIk7DpHl0ZXTDpMOkbiBbc3RhcjFdIHTDpGhkZW4gYXJ2b3N0ZWx1bW1lXCIsXG4gICAgICAgIFwiYnlTdGFyczJcIjogXCJOw6R5dGV0w6TDpG4gW3N0YXIxXSAmIFtzdGFyMl0gdMOkaGRlbiBhcnZvc3RlbHVtbWVcIixcbiAgICAgICAgXCJieVN0YXJzM1wiOiBcIk7DpHl0ZXTDpMOkbiBbc3RhcjFdLCBbc3RhcjJdICYgW3N0YXIzXSB0w6RoZGVuIGFydm9zdGVsdW1tZVwiLFxuICAgICAgICBcImJ5U3RhcnM0XCI6IFwiTsOkeXRldMOkw6RuIFtzdGFyMV0sIFtzdGFyMl0sIFtzdGFyM10gJiBbc3RhcjRdIHTDpGhkZW4gYXJ2b3N0ZWx1bW1lXCIsXG4gICAgICAgIFwiYnlMYXRlc3RcIjogXCJOw6R5dGV0w6TDpG4gdmlpbWVpc2ltbcOkdCBhcnZvc3RlbHVtbWVcIixcbiAgICAgICAgXCJieUZhdm9yaXRlT3JUYWdcIjogXCJOw6R5dGV0w6TDpG4gc3Vvc2lra2lhcnZvc3RlbHVtbWVcIlxuICAgIH0sXG4gICAgXCJub3RSYXRlZFwiOiBcIkVpIGFydmlvaXR1XCIsXG4gICAgXCJzdGFyUmF0aW5nXCI6IFwiW3JhdGluZ1N0YXJzXS9bdG90YWxTdGFyc10gdMOkaHRpbHVva2l0dXMgVHJ1c3RwaWxvdGlzc2FcIixcbiAgICBcInN0YXJSZXZpZXdcIjogXCJbcmV2aWV3U3RhcnNdIHTDpGhkZW4gYXJ2b3N0ZWx1XCIsXG4gICAgXCJyZXZpZXdEaXNjbGFpbWVyXCI6IHtcbiAgICAgICAgXCJib2R5XCI6IFwiVHJ1c3RwaWxvdCBzdW9yaXR0YWEgYXJ2b3N0ZWx1amVuIHRhcmthc3R1a3NpYVwiXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicmV2aWV3c1wiOiB7XG4gICAgICAgIFwic2luZ3VsYXJcIjogXCJhdmlzXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwiYXZpc1wiLFxuICAgICAgICBcImNvbGxlY3RlZFZpYVwiOiBcIkNvbGxlY3TDqSB2aWEgW3NvdXJjZV1cIixcbiAgICAgICAgXCJ2ZXJpZmllZFZpYVwiOiBcIlbDqXJpZmnDqSwgY29sbGVjdMOpIHZpYSBbc291cmNlXVwiLFxuICAgICAgICBcInNlcnZpY2VSZXZpZXdUeXBlTGFiZWxzXCI6IHtcbiAgICAgICAgICAgIFwidmVyaWZpZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJWw6lyaWZpw6lcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIkF2aXMgdsOpcmlmacOpXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dRW4gc2F2b2lyIHBsdXNbTElOSy1FTkRdIHN1ciBsZXMgdHlwZXMgZCdhdmlzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImludml0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJTdXIgaW52aXRhdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiQXZpcyBzdXIgaW52aXRhdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJMZXMgYXZpcyBhdSBzdWpldCBkZSBUcnVzdHBpbG90IGFjY29tcGFnbsOpcyBkdSBzdGF0dXQgW0JPTEQtQkVHSU5dU3VyIGludml0YXRpb25bQk9MRC1FTkRdIG9udCDDqXTDqSDDqWNyaXRzIHZpYSB1biBsaWVuIGRpcmVjdCB2ZXJzIG5vdHJlIGZvcm11bGFpcmUgZCfDqXZhbHVhdGlvbi5cIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1FbiBzYXZvaXIgcGx1c1tMSU5LLUVORF0gc3VyIGxlcyB0eXBlcyBkJ2F2aXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJlZGlyaWfDqVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiQXZpcyByZWRpcmlnw6lcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1FbiBzYXZvaXIgcGx1c1tMSU5LLUVORF0gc3VyIGxlcyB0eXBlcyBkJ2F2aXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIm1vbnRoTmFtZXNcIjoge1xuICAgICAgICBcImphbnVhcnlcIjogXCJqYW52aWVyXCIsXG4gICAgICAgIFwiZmVicnVhcnlcIjogXCJmw6l2cmllclwiLFxuICAgICAgICBcIm1hcmNoXCI6IFwibWFyc1wiLFxuICAgICAgICBcImFwcmlsXCI6IFwiYXZyaWxcIixcbiAgICAgICAgXCJtYXlcIjogXCJtYWlcIixcbiAgICAgICAgXCJqdW5lXCI6IFwianVpblwiLFxuICAgICAgICBcImp1bHlcIjogXCJqdWlsbGV0XCIsXG4gICAgICAgIFwiYXVndXN0XCI6IFwiYW/Du3RcIixcbiAgICAgICAgXCJzZXB0ZW1iZXJcIjogXCJzZXB0ZW1icmVcIixcbiAgICAgICAgXCJvY3RvYmVyXCI6IFwib2N0b2JyZVwiLFxuICAgICAgICBcIm5vdmVtYmVyXCI6IFwibm92ZW1icmVcIixcbiAgICAgICAgXCJkZWNlbWJlclwiOiBcImTDqWNlbWJyZVwiXG4gICAgfSxcbiAgICBcInRpbWVBZ29cIjoge1xuICAgICAgICBcImRheXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcImxsIHkgYSBbY291bnRdIGpvdXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiSWwgeSBhIFtjb3VudF0gam91cnNcIlxuICAgICAgICB9LFxuICAgICAgICBcImhvdXJzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJJbCB5IGEgW2NvdW50XSBoZXVyZVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJJbCB5IGEgW2NvdW50XSBoZXVyZXNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIklsIHkgYSBbY291bnRdIG1pbnV0ZVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJJbCB5IGEgW2NvdW50XSBtaW51dGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJJbCB5IGEgW2NvdW50XSBzZWNvbmRlXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIklsIHkgYSBbY291bnRdIHNlY29uZGVzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIk5vcyBhdmlzIFtzdGFyMV0gw6l0b2lsZXNcIixcbiAgICAgICAgXCJieVN0YXJzMlwiOiBcIk5vcyBhdmlzIFtzdGFyMV0gZXQgW3N0YXIyXSDDqXRvaWxlc1wiLFxuICAgICAgICBcImJ5U3RhcnMzXCI6IFwiTm9zIGF2aXMgW3N0YXIxXSwgW3N0YXIyXSBldCBbc3RhcjNdIMOpdG9pbGVzXCIsXG4gICAgICAgIFwiYnlTdGFyczRcIjogXCJOb3MgYXZpcyBbc3RhcjFdLCBbc3RhcjJdLCBbc3RhcjNdIGV0IFtzdGFyNF0gw6l0b2lsZXNcIixcbiAgICAgICAgXCJieUxhdGVzdFwiOiBcIk5vcyBkZXJuaWVycyBhdmlzXCIsXG4gICAgICAgIFwiYnlGYXZvcml0ZU9yVGFnXCI6IFwiTm9zIGF2aXMgcHLDqWbDqXLDqXNcIlxuICAgIH0sXG4gICAgXCJub3RSYXRlZFwiOiBcIk5vbiDDqXZhbHXDqVwiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIltyYXRpbmdTdGFyc10gc3VyIFt0b3RhbFN0YXJzXSDDqXRvaWxlcyBzdXIgVHJ1c3RwaWxvdFwiLFxuICAgIFwic3RhclJldmlld1wiOiBcIkF2aXMgW3Jldmlld1N0YXJzXSDDqXRvaWxlXCIsXG4gICAgXCJyZXZpZXdEaXNjbGFpbWVyXCI6IHtcbiAgICAgICAgXCJib2R5XCI6IFwiVHJ1c3RwaWxvdCB2w6lyaWZpZSBsZXMgYXZpc1wiXG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gICAgICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgICAgICAgICAgcmV0dXJuIGFyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3duS2V5cyhvKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgICAgICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRrID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2RhLURLL3N0cmluZ3MuanNvblwiKSk7XG5jb25zdCBhdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9kZS1BVC9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgY2ggPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZGUtQ0gvc3RyaW5ncy5qc29uXCIpKTtcbmNvbnN0IGRlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlLURFL3N0cmluZ3MuanNvblwiKSk7XG5jb25zdCBhdSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9lbi1BVS9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgY2EgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZW4tQ0Evc3RyaW5ncy5qc29uXCIpKTtcbmNvbnN0IGdiID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2VuLUdCL3N0cmluZ3MuanNvblwiKSk7XG5jb25zdCBpZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9lbi1JRS9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgbnogPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZW4tTlovc3RyaW5ncy5qc29uXCIpKTtcbmNvbnN0IHVzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2VuLVVTL3N0cmluZ3MuanNvblwiKSk7XG5jb25zdCBlcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9lcy1FUy9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgZmkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZmktRkkvc3RyaW5ncy5qc29uXCIpKTtcbmNvbnN0IGJlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2ZyLUJFL3N0cmluZ3MuanNvblwiKSk7XG5jb25zdCBmciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9mci1GUi9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgaXQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vaXQtSVQvc3RyaW5ncy5qc29uXCIpKTtcbmNvbnN0IGpwID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2phLUpQL3N0cmluZ3MuanNvblwiKSk7XG5jb25zdCBubyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9uYi1OTy9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgYmVObCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9ubC1CRS9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgbmwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbmwtTkwvc3RyaW5ncy5qc29uXCIpKTtcbmNvbnN0IHBsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3BsLVBML3N0cmluZ3MuanNvblwiKSk7XG5jb25zdCBiciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9wdC1CUi9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgcHQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcHQtUFQvc3RyaW5ncy5qc29uXCIpKTtcbmNvbnN0IHJ1ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3J1LVJVL3N0cmluZ3MuanNvblwiKSk7XG5jb25zdCBzZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9zdi1TRS9zdHJpbmdzLmpzb25cIikpO1xuY29uc3QgY24gPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vemgtQ04vc3RyaW5ncy5qc29uXCIpKTtcbmNvbnN0IGxvY2FsZXMgPSB7XG4gICAgJ2RhLURLJzogZGssXG4gICAgJ2RlLUFUJzogYXQsXG4gICAgJ2RlLUNIJzogY2gsXG4gICAgJ2RlLURFJzogZGUsXG4gICAgJ2VuLUFVJzogYXUsXG4gICAgJ2VuLUNBJzogY2EsXG4gICAgJ2VuLUdCJzogZ2IsXG4gICAgJ2VuLUlFJzogaWUsXG4gICAgJ2VuLU5aJzogbnosXG4gICAgJ2VuLVVTJzogdXMsXG4gICAgJ2VzLUVTJzogZXMsXG4gICAgJ2ZpLUZJJzogZmksXG4gICAgJ2ZyLUJFJzogYmUsXG4gICAgJ2ZyLUZSJzogZnIsXG4gICAgJ2l0LUlUJzogaXQsXG4gICAgJ2phLUpQJzoganAsXG4gICAgJ25iLU5PJzogbm8sXG4gICAgJ25sLUJFJzogYmVObCxcbiAgICAnbmwtTkwnOiBubCxcbiAgICAncGwtUEwnOiBwbCxcbiAgICAncHQtQlInOiBicixcbiAgICAncHQtUFQnOiBwdCxcbiAgICAncnUtUlUnOiBydSxcbiAgICAnc3YtU0UnOiBzZSxcbiAgICAnemgtQ04nOiBjbixcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBsb2NhbGVzO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicmV2aWV3c1wiOiB7XG4gICAgICAgIFwic2luZ3VsYXJcIjogXCJyZWNlbnNpb25lXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwicmVjZW5zaW9uaVwiLFxuICAgICAgICBcImNvbGxlY3RlZFZpYVwiOiBcIlJhY2NvbHRhIHRyYW1pdGUgW3NvdXJjZV1cIixcbiAgICAgICAgXCJ2ZXJpZmllZFZpYVwiOiBcIlZlcmlmaWNhdGEsIHJhY2NvbHRhIGRhIFtzb3VyY2VdXCIsXG4gICAgICAgIFwic2VydmljZVJldmlld1R5cGVMYWJlbHNcIjoge1xuICAgICAgICAgICAgXCJ2ZXJpZmllZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZlcmlmaWNhdGFcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIlJlY2Vuc2lvbmUgdmVyaWZpY2F0YVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXVNjb3ByaSBkaSBwacO5W0xJTkstRU5EXSBzdWkgZGl2ZXJzaSB0aXBpIGRpIHJlY2Vuc2lvbmlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW52aXRlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlN1IGludml0b1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiUmVjZW5zaW9uZSBzdSBpbnZpdG9cIixcbiAgICAgICAgICAgICAgICBcImluZm9UcnVzdHBpbG90XCI6IFwiTGUgcmVjZW5zaW9uaSBhIHByb3Bvc2l0byBkaSBUcnVzdHBpbG90IGNvbnRyYXNzZWduYXRlIGNvbiBsYSBkaWNpdHVyYSBbQk9MRC1CRUdJTl1TdSBpbnZpdG9bQk9MRC1FTkRdIHNvbm8gc3RhdGUgc2NyaXR0ZSBtZWRpYW50ZSB1biBsaW5rIGNoZSBwdW50YSBkaXJldHRhbWVudGUgYWwgbm9zdHJvIG1vZHVsbyBkaSByZWNlbnNpb25lLlwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXVNjb3ByaSBkaSBwacO5W0xJTkstRU5EXSBzdWkgZGl2ZXJzaSB0aXBpIGRpIHJlY2Vuc2lvbmlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJlaW5kaXJpenphdGFcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIlJlY2Vuc2lvbmUgcmVpbmRpcml6emF0YVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXVNjb3ByaSBkaSBwacO5W0xJTkstRU5EXSBzdWkgZGl2ZXJzaSB0aXBpIGRpIHJlY2Vuc2lvbmlcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIm1vbnRoTmFtZXNcIjoge1xuICAgICAgICBcImphbnVhcnlcIjogXCJnZW5uYWlvXCIsXG4gICAgICAgIFwiZmVicnVhcnlcIjogXCJmZWJicmFpb1wiLFxuICAgICAgICBcIm1hcmNoXCI6IFwibWFyem9cIixcbiAgICAgICAgXCJhcHJpbFwiOiBcImFwcmlsZVwiLFxuICAgICAgICBcIm1heVwiOiBcIm1hZ2dpb1wiLFxuICAgICAgICBcImp1bmVcIjogXCJnaXVnbm9cIixcbiAgICAgICAgXCJqdWx5XCI6IFwibHVnbGlvXCIsXG4gICAgICAgIFwiYXVndXN0XCI6IFwiYWdvc3RvXCIsXG4gICAgICAgIFwic2VwdGVtYmVyXCI6IFwic2V0dGVtYnJlXCIsXG4gICAgICAgIFwib2N0b2JlclwiOiBcIm90dG9icmVcIixcbiAgICAgICAgXCJub3ZlbWJlclwiOiBcIm5vdmVtYnJlXCIsXG4gICAgICAgIFwiZGVjZW1iZXJcIjogXCJkaWNlbWJyZVwiXG4gICAgfSxcbiAgICBcInRpbWVBZ29cIjoge1xuICAgICAgICBcImRheXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gZ2lvcm5vIGZhXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gZ2lvcm5pIGZhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3Vyc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBvcmEgZmFcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBvcmUgZmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gbWludXRvIGZhXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gbWludXRpIGZhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJbY291bnRdIHNlY29uZG8gZmFcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBzZWNvbmRpIGZhXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIkxlIG5vc3RyZSByZWNlbnNpb25pIGEgW3N0YXIxXSBzdGVsbGVcIixcbiAgICAgICAgXCJieVN0YXJzMlwiOiBcIkxlIG5vc3RyZSByZWNlbnNpb25pIGEgW3N0YXIxXSBlIGEgW3N0YXIyXSBzdGVsbGVcIixcbiAgICAgICAgXCJieVN0YXJzM1wiOiBcIkxlIG5vc3RyZSByZWNlbnNpb25pIGEgW3N0YXIxXSwgYSBbc3RhcjJdIGUgYSBbc3RhcjNdIHN0ZWxsZVwiLFxuICAgICAgICBcImJ5U3RhcnM0XCI6IFwiTGUgbm9zdHJlIHJlY2Vuc2lvbmkgYSBbc3RhcjFdLCBhIFtzdGFyMl0sIGEgW3N0YXIzXSBlIGEgW3N0YXI0XSBzdGVsbGVcIixcbiAgICAgICAgXCJieUxhdGVzdFwiOiBcIkxlIG5vc3RyZSB1bHRpbWUgcmVjZW5zaW9uaVwiLFxuICAgICAgICBcImJ5RmF2b3JpdGVPclRhZ1wiOiBcIkxlIG5vc3RyZSByZWNlbnNpb25pIHByZWZlcml0ZVwiXG4gICAgfSxcbiAgICBcIm5vdFJhdGVkXCI6IFwiTmVzc3VuYSB2YWx1dGF6aW9uZVwiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIltyYXRpbmdTdGFyc10gc3UgW3RvdGFsU3RhcnNdIHZhbHV0YXppb25pIGluIHN0ZWxsZSBzdSBUcnVzdHBpbG90XCIsXG4gICAgXCJzdGFyUmV2aWV3XCI6IFwiUmVjZW5zaW9uZSBhIFtyZXZpZXdTdGFyc10gc3RlbGxlXCIsXG4gICAgXCJyZXZpZXdEaXNjbGFpbWVyXCI6IHtcbiAgICAgICAgXCJib2R5XCI6IFwiTGUgcmVjZW5zaW9uaSBzb25vIGNvbnRyb2xsYXRlIGRhIFRydXN0cGlsb3RcIlxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcInJldmlld3NcIjoge1xuICAgICAgICBcInNpbmd1bGFyXCI6IFwi44Os44OT44Ol44O8XCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwi44Os44OT44Ol44O8XCIsXG4gICAgICAgIFwiY29sbGVjdGVkVmlhXCI6IFwiW3NvdXJjZV0g44Gr44KI44Gj44Gm5Y+O6ZuGXCIsXG4gICAgICAgIFwidmVyaWZpZWRWaWFcIjogXCJbc291cmNlXSDjgavjgojjgaPjgabnorroqo3jg7vlj47pm4ZcIixcbiAgICAgICAgXCJzZXJ2aWNlUmV2aWV3VHlwZUxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInZlcmlmaWVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwi56K66KqN5riI44G/XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCLnorroqo3muIjjgb/jga7jg6zjg5Pjg6Xjg7xcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCLjg6zjg5Pjg6Xjg7zjga7nqK7poZ7jgavjgaTjgYTjgabjga7oqbPntLDjga9bTElOSy1CRUdJTl3jgZPjgaHjgolbTElOSy1FTkRd44KS44GU6Kan44GP44Gg44GV44GE44CCXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImludml0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCLmiYvli5Xmi5vlvoVcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIuaLm+W+heOBq+OCiOOCi+ODrOODk+ODpeODvFwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJbQk9MRC1CRUdJTl3mi5vlvoVbQk9MRC1FTkRd44Op44OZ44Or44Gu5LuY44GE44GfVHJ1c3RwaWxvdCDjgavplqLjgZnjgovjg6zjg5Pjg6Xjg7zjga/jgIHlvZPnpL7jga7jg6zjg5Pjg6Xjg7zjg5Xjgqnjg7zjg6Djgbjjga7jg4DjgqTjg6zjgq/jg4jjg6rjg7Pjgq/jgpLku4vjgZfjgabmm7jjgYvjgozjgZ/jgoLjga7jgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCLjg6zjg5Pjg6Xjg7zjga7nqK7poZ7jgavjgaTjgYTjgabjga7oqbPntLDjga9bTElOSy1CRUdJTl3jgZPjgaHjgolbTElOSy1FTkRd44KS44GU6Kan44GP44Gg44GV44GE44CCXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlZGlyZWN0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCLoh6rli5Xou6LpgIFcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIuiHquWLlei7oumAgeOBq+OCiOOCi+ODrOODk+ODpeODvFwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIuODrOODk+ODpeODvOOBrueorumhnuOBq+OBpOOBhOOBpuOBruips+e0sOOBr1tMSU5LLUJFR0lOXeOBk+OBoeOCiVtMSU5LLUVORF3jgpLjgZTopqfjgY/jgaDjgZXjgYTjgIJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIm1vbnRoTmFtZXNcIjoge1xuICAgICAgICBcImphbnVhcnlcIjogXCIx5pyIXCIsXG4gICAgICAgIFwiZmVicnVhcnlcIjogXCIy5pyIXCIsXG4gICAgICAgIFwibWFyY2hcIjogXCIz5pyIXCIsXG4gICAgICAgIFwiYXByaWxcIjogXCI05pyIXCIsXG4gICAgICAgIFwibWF5XCI6IFwiNeaciFwiLFxuICAgICAgICBcImp1bmVcIjogXCI25pyIXCIsXG4gICAgICAgIFwianVseVwiOiBcIjfmnIhcIixcbiAgICAgICAgXCJhdWd1c3RcIjogXCI45pyIXCIsXG4gICAgICAgIFwic2VwdGVtYmVyXCI6IFwiOeaciFwiLFxuICAgICAgICBcIm9jdG9iZXJcIjogXCIxMOaciFwiLFxuICAgICAgICBcIm5vdmVtYmVyXCI6IFwiMTHmnIhcIixcbiAgICAgICAgXCJkZWNlbWJlclwiOiBcIjEy5pyIXCJcbiAgICB9LFxuICAgIFwidGltZUFnb1wiOiB7XG4gICAgICAgIFwiZGF5c1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XeaXpeWJjVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRd5pel5YmNXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3Vyc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XeaZgumWk+WJjVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRd5pmC6ZaT5YmNXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW51dGVzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJbY291bnRd5YiG5YmNXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF3liIbliY1cIlxuICAgICAgICB9LFxuICAgICAgICBcInNlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF3np5LliY1cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XeenkuWJjVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicmV2aWV3RmlsdGVyc1wiOiB7XG4gICAgICAgIFwiYnlTdGFyczFcIjogXCJbc3RhcjFd44Gk5pif44Gu44Os44OT44Ol44O844KS6KGo56S6XCIsXG4gICAgICAgIFwiYnlTdGFyczJcIjogXCJbc3RhcjFd44Gk5pif44GoW3N0YXIyXeOBpOaYn+OBruODrOODk+ODpeODvOOCkuihqOekulwiLFxuICAgICAgICBcImJ5U3RhcnMzXCI6IFwiW3N0YXIxXeOBpOaYn+OAgVtzdGFyMl3jgaTmmJ/jgIFbc3RhcjNd44Gk5pif44Gu44Os44OT44Ol44O844KS6KGo56S6XCIsXG4gICAgICAgIFwiYnlTdGFyczRcIjogXCJbc3RhcjFd44Gk5pif44CBW3N0YXIyXeOBpOaYn+OAgVtzdGFyM13jgaTmmJ/jgIFbc3RhcjRd44Gk5pif44Gu44Os44OT44Ol44O844KS6KGo56S6XCIsXG4gICAgICAgIFwiYnlMYXRlc3RcIjogXCLmnIDmlrDjga7jg6zjg5Pjg6Xjg7zjgpLooajnpLpcIixcbiAgICAgICAgXCJieUZhdm9yaXRlT3JUYWdcIjogXCLjgYrmsJfjgavlhaXjgorjga7jg6zjg5Pjg6Xjg7zjgpLooajnpLpcIlxuICAgIH0sXG4gICAgXCJub3RSYXRlZFwiOiBcIuacquipleS+oVwiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIlRydXN0cGlsb3TkuIrjgafjgIFbdG90YWxTdGFyc13mmJ/jga7jgYbjgaEgW3JhdGluZ1N0YXJzXeaYn+OBruipleS+oVwiLFxuICAgIFwic3RhclJldmlld1wiOiBcIltyZXZpZXdTdGFyc13jgaTmmJ/jg6zjg5Pjg6Xjg7xcIixcbiAgICBcInJldmlld0Rpc2NsYWltZXJcIjoge1xuICAgICAgICBcImJvZHlcIjogXCJUcnVzdHBpbG90IOOBr+ODrOODk+ODpeODvOOCkuODgeOCp+ODg+OCr+OBl+OBvuOBmVwiXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicmV2aWV3c1wiOiB7XG4gICAgICAgIFwic2luZ3VsYXJcIjogXCJhbm1lbGRlbHNlXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwiYW5tZWxkZWxzZXJcIixcbiAgICAgICAgXCJjb2xsZWN0ZWRWaWFcIjogXCJTYW1sZXQgaW5uIGdqZW5ub20gW3NvdXJjZV1cIixcbiAgICAgICAgXCJ2ZXJpZmllZFZpYVwiOiBcIkJla3JlZnRldCDigJMgc2FtbGV0IGlubiB2aWEgW3NvdXJjZV1cIixcbiAgICAgICAgXCJzZXJ2aWNlUmV2aWV3VHlwZUxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInZlcmlmaWVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQmVrcmVmdGV0XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJCZWtyZWZ0ZXQga3VuZGVcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1Mw6ZyIG1lcltMSU5LLUVORF0gb20gZGUgdWxpa2UgdHlwZW5lIGFubWVsZGVsc2VyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImludml0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJQw6Ugb3BwZm9yZHJpbmdcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIkFubWVsZGVsc2Ugc2tyZXZldCBww6Ugb3BwZm9yZHJpbmdcIixcbiAgICAgICAgICAgICAgICBcImluZm9UcnVzdHBpbG90XCI6IFwiQW5tZWxkZWxzZXIgbWVkIGJlbmV2bmluZ2VuIFtCT0xELUJFR0lOXcKrUMOlIG9wcGZvcmRyaW5nwrtbQk9MRC1FTkRdIGhhciBibGl0dCBzZW5kdCBpbm4gdmlhIGVuIGRpcmVrdGVrb2JsaW5nIHRpbCBhbm1lbGRlbHNlc3NramVtYWV0IHDDpSBUcnVzdHBpbG90LlwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXUzDpnIgbWVyW0xJTkstRU5EXSBvbSBkZSB1bGlrZSB0eXBlbmUgYW5tZWxkZWxzZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk9tZGlyaWdlcnRcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIk9tZGlyaWdlcnQgYW5tZWxkZWxzZVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXUzDpnIgbWVyW0xJTkstRU5EXSBvbSBkZSB1bGlrZSB0eXBlbmUgYW5tZWxkZWxzZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIm1vbnRoTmFtZXNcIjoge1xuICAgICAgICBcImphbnVhcnlcIjogXCJqYW51YXJcIixcbiAgICAgICAgXCJmZWJydWFyeVwiOiBcImZlYnJ1YXJcIixcbiAgICAgICAgXCJtYXJjaFwiOiBcIm1hcnNcIixcbiAgICAgICAgXCJhcHJpbFwiOiBcImFwcmlsXCIsXG4gICAgICAgIFwibWF5XCI6IFwibWFpXCIsXG4gICAgICAgIFwianVuZVwiOiBcImp1bmlcIixcbiAgICAgICAgXCJqdWx5XCI6IFwianVsaVwiLFxuICAgICAgICBcImF1Z3VzdFwiOiBcImF1Z3VzdFwiLFxuICAgICAgICBcInNlcHRlbWJlclwiOiBcInNlcHRlbWJlclwiLFxuICAgICAgICBcIm9jdG9iZXJcIjogXCJva3RvYmVyXCIsXG4gICAgICAgIFwibm92ZW1iZXJcIjogXCJub3ZlbWJlclwiLFxuICAgICAgICBcImRlY2VtYmVyXCI6IFwiZGVzZW1iZXJcIlxuICAgIH0sXG4gICAgXCJ0aW1lQWdvXCI6IHtcbiAgICAgICAgXCJkYXlzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJGb3IgW2NvdW50XSBkYWcgc2lkZW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiRm9yIFtjb3VudF0gZGFnZXIgc2lkZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcImhvdXJzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJGb3IgW2NvdW50XSB0aW1lIHNpZGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIkZvciBbY291bnRdIHRpbWVyIHNpZGVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW51dGVzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJGb3IgW2NvdW50XSBtaW51dHQgc2lkZW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiRm9yIFtjb3VudF0gbWludXR0ZXIgc2lkZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcInNlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIkZvciBbY291bnRdIHNla3VuZCBzaWRlblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJGb3IgW2NvdW50XSBzZWt1bmRlciBzaWRlblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicmV2aWV3RmlsdGVyc1wiOiB7XG4gICAgICAgIFwiYnlTdGFyczFcIjogXCJWaXNlciBbc3RhcjFdLXN0amVybmVyc2FubWVsZGVsc2VuZVwiLFxuICAgICAgICBcImJ5U3RhcnMyXCI6IFwiVmlzZXIgW3N0YXIxXS0gb2cgW3N0YXIyXS1zdGplcm5lcnNhbm1lbGRlbHNlbmVcIixcbiAgICAgICAgXCJieVN0YXJzM1wiOiBcIlZpc2VyIFtzdGFyMV0tLCBbc3RhcjJdLSBvZyBbc3RhcjNdLXN0amVybmVyc2FubWVsZGVsc2VuZVwiLFxuICAgICAgICBcImJ5U3RhcnM0XCI6IFwiVmlzZXIgW3N0YXIxXS0sIFtzdGFyMl0tLCBbc3RhcjNdLSBvZyBbc3RhcjRdLXN0amVybmVyc2FubWVsZGVsc2VuZVwiLFxuICAgICAgICBcImJ5TGF0ZXN0XCI6IFwiVmlzZXIgZGUgbnllc3RlIGFubWVsZGVsc2VuZVwiLFxuICAgICAgICBcImJ5RmF2b3JpdGVPclRhZ1wiOiBcIlZpc2VyIGZhdm9yaXR0ZW5lIHbDpXJlXCJcbiAgICB9LFxuICAgIFwibm90UmF0ZWRcIjogXCJJa2tlIHZ1cmRlcnRcIixcbiAgICBcInN0YXJSYXRpbmdcIjogXCJbcmF0aW5nU3RhcnNdIGF2IFt0b3RhbFN0YXJzXSBzdGplcm5lciBww6UgVHJ1c3RwaWxvdFwiLFxuICAgIFwic3RhclJldmlld1wiOiBcIltyZXZpZXdTdGFyc10tc3RqZXJuZXJzYW5tZWxkZWxzZVwiLFxuICAgIFwicmV2aWV3RGlzY2xhaW1lclwiOiB7XG4gICAgICAgIFwiYm9keVwiOiBcIlRydXN0cGlsb3Qgc2pla2tlciBhbm1lbGRlbHNlbmVcIlxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcInJldmlld3NcIjoge1xuICAgICAgICBcInNpbmd1bGFyXCI6IFwicmV2aWV3XCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwicmV2aWV3c1wiLFxuICAgICAgICBcImNvbGxlY3RlZFZpYVwiOiBcIlZlcnphbWVsZCB2aWEgW3NvdXJjZV1cIixcbiAgICAgICAgXCJ2ZXJpZmllZFZpYVwiOiBcIkdldmVyaWZpZWVyZCDigJQgdmVyemFtZWxkIHZpYSBbc291cmNlXVwiLFxuICAgICAgICBcInNlcnZpY2VSZXZpZXdUeXBlTGFiZWxzXCI6IHtcbiAgICAgICAgICAgIFwidmVyaWZpZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJHZXZlcmlmaWVlcmRcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIkdldmVyaWZpZWVyZGUgcmV2aWV3XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTWVlciBpbmZvcm1hdGllW0xJTkstRU5EXSBvdmVyIGRlIHNvb3J0ZW4gcmV2aWV3c1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbnZpdGVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiT3AgdWl0bm9kaWdpbmdcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIlJldmlldyBvcCB1aXRub2RpZ2luZ1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJSZXZpZXdzIG92ZXIgVHJ1c3RwaWxvdCBtZXQgaGV0IGxhYmVsIFtCT0xELUJFR0lOXU9wIHVpdG5vZGlnaW5nW0JPTEQtRU5EXSB6aWpuIGluZ2VkaWVuZCB2aWEgZWVuIGRpcmVjdGUgbGluayBuYWFyIG9ucyByZXZpZXdmb3JtdWxpZXIuXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTWVlciBpbmZvcm1hdGllW0xJTkstRU5EXSBvdmVyIGRlIHNvb3J0ZW4gcmV2aWV3c1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZWRpcmVjdGVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiT21nZWxlaWRcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIk9tZ2VsZWlkZSByZXZpZXdcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1NZWVyIGluZm9ybWF0aWVbTElOSy1FTkRdIG92ZXIgZGUgc29vcnRlbiByZXZpZXdzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJtb250aE5hbWVzXCI6IHtcbiAgICAgICAgXCJqYW51YXJ5XCI6IFwiamFudWFyaVwiLFxuICAgICAgICBcImZlYnJ1YXJ5XCI6IFwiZmVicnVhcmlcIixcbiAgICAgICAgXCJtYXJjaFwiOiBcIm1hYXJ0XCIsXG4gICAgICAgIFwiYXByaWxcIjogXCJhcHJpbFwiLFxuICAgICAgICBcIm1heVwiOiBcIm1laVwiLFxuICAgICAgICBcImp1bmVcIjogXCJqdW5pXCIsXG4gICAgICAgIFwianVseVwiOiBcImp1bGlcIixcbiAgICAgICAgXCJhdWd1c3RcIjogXCJhdWd1c3R1c1wiLFxuICAgICAgICBcInNlcHRlbWJlclwiOiBcInNlcHRlbWJlclwiLFxuICAgICAgICBcIm9jdG9iZXJcIjogXCJva3RvYmVyXCIsXG4gICAgICAgIFwibm92ZW1iZXJcIjogXCJub3ZlbWJlclwiLFxuICAgICAgICBcImRlY2VtYmVyXCI6IFwiRGVjZW1iZXJcIlxuICAgIH0sXG4gICAgXCJ0aW1lQWdvXCI6IHtcbiAgICAgICAgXCJkYXlzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJbY291bnRdIGRhZyBnZWxlZGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gZGFnZW4gZ2VsZWRlblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG91cnNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gdXVyIGdlbGVkZW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSB1dXIgZ2VsZWRlblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWludXRlc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBtaW51dXQgZ2VsZWRlblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIG1pbnV0ZW4gZ2VsZWRlblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vjb25kc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBzZWNvbmRlIGdlbGVkZW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBzZWNvbmRlbiBnZWxlZGVuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIk9uemUgcmV2aWV3cyBtZXQgW3N0YXIxXSBzdGVycmVuXCIsXG4gICAgICAgIFwiYnlTdGFyczJcIjogXCJPbnplIHJldmlld3MgbWV0IFtzdGFyMV0gZW4gW3N0YXIyXSBzdGVycmVuXCIsXG4gICAgICAgIFwiYnlTdGFyczNcIjogXCJPbnplIHJldmlld3MgbWV0IFtzdGFyMV0sIFtzdGFyMl0gZW4gW3N0YXIzXSBzdGVycmVuXCIsXG4gICAgICAgIFwiYnlTdGFyczRcIjogXCJPbnplIHJldmlld3MgbWV0IFtzdGFyMV0sIFtzdGFyMl0sIFtzdGFyM10gZW4gW3N0YXI0XSBzdGVycmVuXCIsXG4gICAgICAgIFwiYnlMYXRlc3RcIjogXCJPbnplIG1lZXN0IHJlY2VudGUgcmV2aWV3c1wiLFxuICAgICAgICBcImJ5RmF2b3JpdGVPclRhZ1wiOiBcIk9uemUgZmF2b3JpZXRlIHJldmlld3NcIlxuICAgIH0sXG4gICAgXCJub3RSYXRlZFwiOiBcIk5pZXQgYmVvb3JkZWVsZFwiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIltyYXRpbmdTdGFyc10gdmFuIFt0b3RhbFN0YXJzXSBzdGVycmVuIG9wIFRydXN0cGlsb3RcIixcbiAgICBcInN0YXJSZXZpZXdcIjogXCJSZXZpZXcgdmFuIFtyZXZpZXdTdGFyc10gc3RlcihyZW4pXCIsXG4gICAgXCJyZXZpZXdEaXNjbGFpbWVyXCI6IHtcbiAgICAgICAgXCJib2R5XCI6IFwiVHJ1c3RwaWxvdCBjb250cm9sZWVydCByZXZpZXdzXCJcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJyZXZpZXdzXCI6IHtcbiAgICAgICAgXCJzaW5ndWxhclwiOiBcInJldmlld1wiLFxuICAgICAgICBcInBsdXJhbFwiOiBcInJldmlld3NcIixcbiAgICAgICAgXCJjb2xsZWN0ZWRWaWFcIjogXCJWZXJ6YW1lbGQgdmlhIFtzb3VyY2VdXCIsXG4gICAgICAgIFwidmVyaWZpZWRWaWFcIjogXCJHZXZlcmlmaWVlcmQg4oCUIHZlcnphbWVsZCB2aWEgW3NvdXJjZV1cIixcbiAgICAgICAgXCJzZXJ2aWNlUmV2aWV3VHlwZUxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInZlcmlmaWVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiR2V2ZXJpZmllZXJkXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJHZXZlcmlmaWVlcmRlIHJldmlld1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXU1lZXIgaW5mb3JtYXRpZVtMSU5LLUVORF0gb3ZlciBkZSBzb29ydGVuIHJldmlld3NcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW52aXRlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk9wIHVpdG5vZGlnaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJSZXZpZXcgb3AgdWl0bm9kaWdpbmdcIixcbiAgICAgICAgICAgICAgICBcImluZm9UcnVzdHBpbG90XCI6IFwiUmV2aWV3cyBvdmVyIFRydXN0cGlsb3QgbWV0IGhldCBsYWJlbCBbQk9MRC1CRUdJTl1PcCB1aXRub2RpZ2luZ1tCT0xELUVORF0gemlqbiBpbmdlZGllbmQgdmlhIGVlbiBkaXJlY3RlIGxpbmsgbmFhciBvbnMgcmV2aWV3Zm9ybXVsaWVyLlwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXU1lZXIgaW5mb3JtYXRpZVtMSU5LLUVORF0gb3ZlciBkZSBzb29ydGVuIHJldmlld3NcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk9tZ2VsZWlkXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJPbWdlbGVpZGUgcmV2aWV3XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTWVlciBpbmZvcm1hdGllW0xJTkstRU5EXSBvdmVyIGRlIHNvb3J0ZW4gcmV2aWV3c1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwibW9udGhOYW1lc1wiOiB7XG4gICAgICAgIFwiamFudWFyeVwiOiBcImphbnVhcmlcIixcbiAgICAgICAgXCJmZWJydWFyeVwiOiBcImZlYnJ1YXJpXCIsXG4gICAgICAgIFwibWFyY2hcIjogXCJtYWFydFwiLFxuICAgICAgICBcImFwcmlsXCI6IFwiYXByaWxcIixcbiAgICAgICAgXCJtYXlcIjogXCJtZWlcIixcbiAgICAgICAgXCJqdW5lXCI6IFwianVuaVwiLFxuICAgICAgICBcImp1bHlcIjogXCJqdWxpXCIsXG4gICAgICAgIFwiYXVndXN0XCI6IFwiYXVndXN0dXNcIixcbiAgICAgICAgXCJzZXB0ZW1iZXJcIjogXCJzZXB0ZW1iZXJcIixcbiAgICAgICAgXCJvY3RvYmVyXCI6IFwib2t0b2JlclwiLFxuICAgICAgICBcIm5vdmVtYmVyXCI6IFwibm92ZW1iZXJcIixcbiAgICAgICAgXCJkZWNlbWJlclwiOiBcImRlY2VtYmVyXCJcbiAgICB9LFxuICAgIFwidGltZUFnb1wiOiB7XG4gICAgICAgIFwiZGF5c1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBkYWcgZ2VsZWRlblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIGRhZ2VuIGdlbGVkZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcImhvdXJzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJbY291bnRdIHV1ciBnZWxlZGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gdXVyIGdlbGVkZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gbWludXV0IGdlbGVkZW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBtaW51dGVuIGdlbGVkZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcInNlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gc2Vjb25kZSBnZWxlZGVuXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gc2Vjb25kZW4gZ2VsZWRlblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicmV2aWV3RmlsdGVyc1wiOiB7XG4gICAgICAgIFwiYnlTdGFyczFcIjogXCJPbnplIHJldmlld3MgbWV0IFtzdGFyMV0gc3RlcnJlblwiLFxuICAgICAgICBcImJ5U3RhcnMyXCI6IFwiT256ZSByZXZpZXdzIG1ldCBbc3RhcjFdIGVuIFtzdGFyMl0gc3RlcnJlblwiLFxuICAgICAgICBcImJ5U3RhcnMzXCI6IFwiT256ZSByZXZpZXdzIG1ldCBbc3RhcjFdLCBbc3RhcjJdIGVuIFtzdGFyM10gc3RlcnJlblwiLFxuICAgICAgICBcImJ5U3RhcnM0XCI6IFwiT256ZSByZXZpZXdzIG1ldCBbc3RhcjFdLCBbc3RhcjJdLCBbc3RhcjNdIGVuIFtzdGFyNF0gc3RlcnJlblwiLFxuICAgICAgICBcImJ5TGF0ZXN0XCI6IFwiT256ZSBtZWVzdCByZWNlbnRlIHJldmlld3NcIixcbiAgICAgICAgXCJieUZhdm9yaXRlT3JUYWdcIjogXCJPbnplIGZhdm9yaWV0ZSByZXZpZXdzXCJcbiAgICB9LFxuICAgIFwibm90UmF0ZWRcIjogXCJOaWV0IGJlb29yZGVlbGRcIixcbiAgICBcInN0YXJSYXRpbmdcIjogXCJbcmF0aW5nU3RhcnNdIHZhbiBbdG90YWxTdGFyc10gc3RlcnJlbiBvcCBUcnVzdHBpbG90XCIsXG4gICAgXCJzdGFyUmV2aWV3XCI6IFwiUmV2aWV3IHZhbiBbcmV2aWV3U3RhcnNdIHN0ZXIocmVuKVwiLFxuICAgIFwicmV2aWV3RGlzY2xhaW1lclwiOiB7XG4gICAgICAgIFwiYm9keVwiOiBcIlRydXN0cGlsb3QgY29udHJvbGVlcnQgcmV2aWV3c1wiXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicmV2aWV3c1wiOiB7XG4gICAgICAgIFwic2luZ3VsYXJcIjogXCJyZWNlbnpqYVwiLFxuICAgICAgICBcInBsdXJhbFwiOiBcInJlY2VuemppXCIsXG4gICAgICAgIFwiY29sbGVjdGVkVmlhXCI6IFwiWmVicmFuZSBwcnpleiBbc291cmNlXVwiLFxuICAgICAgICBcInZlcmlmaWVkVmlhXCI6IFwiWndlcnlmaWtvd2FubyBpIHplYnJhbm8gcHJ6ZXogW3NvdXJjZV1cIixcbiAgICAgICAgXCJzZXJ2aWNlUmV2aWV3VHlwZUxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInZlcmlmaWVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiWndlcnlmaWtvd2FuYVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiWndlcnlmaWtvd2FuYSByZWNlbnpqYVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXURvd2llZHogc2nEmSB3acSZY2VqW0xJTkstRU5EXSBvIHR5cGFjaCByZWNlbnpqaVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbnZpdGVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTmEgemFwcm9zemVuaWVcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIlJlemVuemphIG5hIHphcHJvc3plbmllXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVHJ1c3RwaWxvdFwiOiBcIlJlY2VuemplIFRydXN0cGlsb3Qgb3puYWN6b25lIGpha28gW0JPTEQtQkVHSU5dTmEgemFwcm9zemVuaWVbQk9MRC1FTkRdIHpvc3RhxYJ5IGRvZGFuZSB6YSBwb8WbcmVkbmljdHdlbSDFgsSFY3phIHByb3dhZHrEhWNlZ28gYmV6cG/Fm3JlZG5pbyBkbyBuYXN6ZWdvIGZvcm11bGFyemEgcmVjZW56amkuXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dRG93aWVkeiBzacSZIHdpxJljZWpbTElOSy1FTkRdIG8gdHlwYWNoIHJlY2VuemppXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlZGlyZWN0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJaIHByemVraWVyb3dhbmFcIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIlJlY2VuemphIHogcHJ6ZWtpZXJvd2FuYVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXURvd2llZHogc2nEmSB3acSZY2VqW0xJTkstRU5EXSBvIHR5cGFjaCByZWNlbnpqaVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwibW9udGhOYW1lc1wiOiB7XG4gICAgICAgIFwiamFudWFyeVwiOiBcInN0eWN6bmlhXCIsXG4gICAgICAgIFwiZmVicnVhcnlcIjogXCJsdXRlZ29cIixcbiAgICAgICAgXCJtYXJjaFwiOiBcIm1hcmNhXCIsXG4gICAgICAgIFwiYXByaWxcIjogXCJrd2lldG5pYVwiLFxuICAgICAgICBcIm1heVwiOiBcIm1hamFcIixcbiAgICAgICAgXCJqdW5lXCI6IFwiY3plcndjYVwiLFxuICAgICAgICBcImp1bHlcIjogXCJsaXBjYVwiLFxuICAgICAgICBcImF1Z3VzdFwiOiBcInNpZXJwbmlhXCIsXG4gICAgICAgIFwic2VwdGVtYmVyXCI6IFwid3J6ZcWbbmlhXCIsXG4gICAgICAgIFwib2N0b2JlclwiOiBcInBhxbpkemllcm5pa2FcIixcbiAgICAgICAgXCJub3ZlbWJlclwiOiBcImxpc3RvcGFkYVwiLFxuICAgICAgICBcImRlY2VtYmVyXCI6IFwiZ3J1ZG5pYVwiXG4gICAgfSxcbiAgICBcInRpbWVBZ29cIjoge1xuICAgICAgICBcImRheXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gZHppZcWEIHRlbXVcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBkbmkgdGVtdVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG91cnNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gZ29kemluxJkgdGVtdVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIGdvZHouIHRlbXVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gbWludXTEmSB0ZW11XCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0gbWluLiB0ZW11XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJbY291bnRdIHNla3VuZMSZIHRlbXVcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBzZWsuIHRlbXVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInJldmlld0ZpbHRlcnNcIjoge1xuICAgICAgICBcImJ5U3RhcnMxXCI6IFwiV3nFm3dpZXRsYW15IG5hc3plIFtzdGFyMV0tZ3dpYXpka293ZSByZWNlbnpqZVwiLFxuICAgICAgICBcImJ5U3RhcnMyXCI6IFwiV3nFm3dpZXRsYW15IG5hc3plIFtzdGFyMV0tIGkgW3N0YXIyXS1nd2lhemRrb3dlIHJlY2VuemplXCIsXG4gICAgICAgIFwiYnlTdGFyczNcIjogXCJXecWbd2lldGxhbXkgbmFzemUgW3N0YXIxXS0sIFtzdGFyMl0tIGkgW3N0YXIzXS1nd2lhemRrb3dlIHJlY2VuemplXCIsXG4gICAgICAgIFwiYnlTdGFyczRcIjogXCJXecWbd2lldGxhbXkgbmFzemUgW3N0YXIxXS0sIFtzdGFyMl0tLCBbc3RhcjNdLSBpIFtzdGFyNF0tZ3dpYXpka293ZSByZWNlbnpqZVwiLFxuICAgICAgICBcImJ5TGF0ZXN0XCI6IFwiV3nFm3dpZXRsYW15IG5ham5vd3N6ZSByZWNlbnpqZVwiLFxuICAgICAgICBcImJ5RmF2b3JpdGVPclRhZ1wiOiBcIld5xZt3aWV0bGFteSBuYXN6ZSB1bHViaW9uZSByZWNlbnpqZVwiXG4gICAgfSxcbiAgICBcIm5vdFJhdGVkXCI6IFwiQnJhayBvY2VueVwiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIltyYXRpbmdTdGFyc10geiBbdG90YWxTdGFyc10gb2NlbnkgdyBza2FsaSBnd2lhemRrb3dlaiBuYSBUcnVzdHBpbG90XCIsXG4gICAgXCJzdGFyUmV2aWV3XCI6IFwiUmVjZW56amEgZ3dpYXpka293YSBbcmV2aWV3U3RhcnNdXCIsXG4gICAgXCJyZXZpZXdEaXNjbGFpbWVyXCI6IHtcbiAgICAgICAgXCJib2R5XCI6IFwiVHJ1c3RwaWxvdCB3ZXJ5ZmlrdWplIG9waW5pZVwiXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicmV2aWV3c1wiOiB7XG4gICAgICAgIFwic2luZ3VsYXJcIjogXCJhdmFsaWHDp8Ojb1wiLFxuICAgICAgICBcInBsdXJhbFwiOiBcImF2YWxpYcOnw7Vlc1wiLFxuICAgICAgICBcImNvbGxlY3RlZFZpYVwiOiBcIlJlY29saGlkYSB2aWEgW3NvdXJjZV1cIixcbiAgICAgICAgXCJ2ZXJpZmllZFZpYVwiOiBcIlZlcmlmaWNhZGEsIHJlY29saGlkYSB2aWEgW3NvdXJjZV1cIixcbiAgICAgICAgXCJzZXJ2aWNlUmV2aWV3VHlwZUxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInZlcmlmaWVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVmVyaWZpY2FkYVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiQXZhbGlhw6fDo28gdmVyaWZpY2FkYVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXVNhaWJhIG1haXNbTElOSy1FTkRdIHNvYnJlIG9zIGRpZmVyZW50ZXMgdGlwb3MgZGUgYXZhbGlhw6fDo29cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW52aXRlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBvciBjb252aXRlXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJBdmFsaWHDp8OjbyBwb3IgY29udml0ZVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJBcyBhdmFsaWHDp8O1ZXMgZGEgVHJ1c3RwaWxvdCBtYXJjYWRhcyBjb21vIFtCT0xELUJFR0lOXVBvciBjb252aXRlW0JPTEQtRU5EXSBmb3JhbSBkZWl4YWRhcyB1dGlsaXphbmRvIHVtIGxpbmsgZGlyZXRvIHBhcmEgbyBub3NzbyBmb3JtdWzDoXJpbyBkZSBhdmFsaWHDp8Ojby5cIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1TYWliYSBtYWlzW0xJTkstRU5EXSBzb2JyZSBvcyBkaWZlcmVudGVzIHRpcG9zIGRlIGF2YWxpYcOnw6NvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlZGlyZWN0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJSZWRpcmVjaW9uYWRhXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJBdmFsaWHDp8OjbyByZWRpcmVjaW9uYWRhXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dU2FpYmEgbWFpc1tMSU5LLUVORF0gc29icmUgb3MgZGlmZXJlbnRlcyB0aXBvcyBkZSBhdmFsaWHDp8Ojb1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwibW9udGhOYW1lc1wiOiB7XG4gICAgICAgIFwiamFudWFyeVwiOiBcIkphbmVpcm9cIixcbiAgICAgICAgXCJmZWJydWFyeVwiOiBcIkZldmVyZWlyb1wiLFxuICAgICAgICBcIm1hcmNoXCI6IFwiTWFyw6dvXCIsXG4gICAgICAgIFwiYXByaWxcIjogXCJBYnJpbFwiLFxuICAgICAgICBcIm1heVwiOiBcIk1haW9cIixcbiAgICAgICAgXCJqdW5lXCI6IFwiSnVuaG9cIixcbiAgICAgICAgXCJqdWx5XCI6IFwiSnVsaG9cIixcbiAgICAgICAgXCJhdWd1c3RcIjogXCJBZ29zdG9cIixcbiAgICAgICAgXCJzZXB0ZW1iZXJcIjogXCJTZXRlbWJyb1wiLFxuICAgICAgICBcIm9jdG9iZXJcIjogXCJPdXR1YnJvXCIsXG4gICAgICAgIFwibm92ZW1iZXJcIjogXCJOb3ZlbWJyb1wiLFxuICAgICAgICBcImRlY2VtYmVyXCI6IFwiRGV6ZW1icm9cIlxuICAgIH0sXG4gICAgXCJ0aW1lQWdvXCI6IHtcbiAgICAgICAgXCJkYXlzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJow6EgW2NvdW50XSBkaWFcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiaMOhIFtjb3VudF0gZGlhc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG91cnNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcImjDoSBbY291bnRdIGhvcmFcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiaMOhIFtjb3VudF0gaG9yYXNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcImjDoSBbY291bnRdIG1pbnV0b1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJow6EgW2NvdW50XSBtaW51dG9zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJow6EgW2NvdW50XSBzZWd1bmRvXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcImjDoSBbY291bnRdIHNlZ3VuZG9zXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIk5vc3NhcyBhdmFsaWHDp8O1ZXMgY29tIFtzdGFyMV0gZXN0cmVsYShzKVwiLFxuICAgICAgICBcImJ5U3RhcnMyXCI6IFwiTm9zc2FzIGF2YWxpYcOnw7VlcyBjb20gW3N0YXIxXSAmIFtzdGFyMl0gZXN0cmVsYXNcIixcbiAgICAgICAgXCJieVN0YXJzM1wiOiBcIk5vc3NhcyBhdmFsaWHDp8O1ZXMgY29tIFtzdGFyMV0sIFtzdGFyMl0gJiBbc3RhcjNdIGVzdHJlbGFzXCIsXG4gICAgICAgIFwiYnlTdGFyczRcIjogXCJOb3NzYXMgYXZhbGlhw6fDtWVzIGNvbSBbc3RhcjFdLCBbc3RhcjJdLCBbc3RhcjNdICYgW3N0YXI0XSBlc3RyZWxhc1wiLFxuICAgICAgICBcImJ5TGF0ZXN0XCI6IFwiTW9zdHJhbmRvIG5vc3NhcyBhdmFsaWHDp8O1ZXMgbWFpcyByZWNlbnRlc1wiLFxuICAgICAgICBcImJ5RmF2b3JpdGVPclRhZ1wiOiBcIk1vc3RyYW5kbyBub3NzYXMgYXZhbGlhw6fDtWVzIGZhdm9yaXRhc1wiXG4gICAgfSxcbiAgICBcIm5vdFJhdGVkXCI6IFwiU2VtIGNsYXNzaWZpY2HDp8Ojb1wiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIltyYXRpbmdTdGFyc10gZGUgW3RvdGFsU3RhcnNdIGVzdHJlbGFzIG5hIFRydXN0cGlsb3RcIixcbiAgICBcInN0YXJSZXZpZXdcIjogXCJBdmFsaWHDp8OjbyBkZSBbcmV2aWV3U3RhcnNdIGVzdHJlbGEocylcIixcbiAgICBcInJldmlld0Rpc2NsYWltZXJcIjoge1xuICAgICAgICBcImJvZHlcIjogXCJBIFRydXN0cGlsb3QgdmVyaWZpY2EgYXMgYXZhbGlhw6fDtWVzXCJcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJyZXZpZXdzXCI6IHtcbiAgICAgICAgXCJzaW5ndWxhclwiOiBcIm9waW5pw6NvXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IFwib3BpbmnDtWVzXCIsXG4gICAgICAgIFwiY29sbGVjdGVkVmlhXCI6IFwiUmVjb2xoaWRhIHZpYSBbc291cmNlXVwiLFxuICAgICAgICBcInZlcmlmaWVkVmlhXCI6IFwiVmVyaWZpY2FkYSwgcmVjb2xoaWRhIHZpYSBbc291cmNlXVwiLFxuICAgICAgICBcInNlcnZpY2VSZXZpZXdUeXBlTGFiZWxzXCI6IHtcbiAgICAgICAgICAgIFwidmVyaWZpZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJWZXJpZmljYWRhXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJPcGluacOjbyB2ZXJpZmljYWRhXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dU2FpYmEgbWFpc1tMSU5LLUVORF0gc29icmUgb3MgZGlmZXJlbnRlcyB0aXBvcyBkZSBvcGluacO1ZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW52aXRlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBvciBjb252aXRlXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJPcGluacOjbyBwb3IgY29udml0ZVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJBcyBvcGluacO1ZXMgZGEgVHJ1c3RwaWxvdCBtYXJjYWRhcyBjb21vIFtCT0xELUJFR0lOXVBvciBjb252aXRlW0JPTEQtRU5EXSBmb3JhbSBlc2NyaXRhcyB1dGlsaXphbmRvIHVtIGxpbmsgZGlyZWN0byBwYXJhIG8gbm9zc28gZm9ybXVsw6FyaW8gZGUgYXZhbGlhw6fDo28uXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dU2FpYmEgbWFpc1tMSU5LLUVORF0gc29icmUgb3MgZGlmZXJlbnRlcyB0aXBvcyBkZSBvcGluacO1ZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJlZGlyZWNjaW9uYWRhXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJPcGluacOjbyByZWRpcmVjY2lvbmFkYVwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXVNhaWJhIG1haXNbTElOSy1FTkRdIHNvYnJlIG9zIGRpZmVyZW50ZXMgdGlwb3MgZGUgb3BpbmnDtWVzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJtb250aE5hbWVzXCI6IHtcbiAgICAgICAgXCJqYW51YXJ5XCI6IFwiSmFuZWlyb1wiLFxuICAgICAgICBcImZlYnJ1YXJ5XCI6IFwiRmV2ZXJlaXJvXCIsXG4gICAgICAgIFwibWFyY2hcIjogXCJNYXLDp29cIixcbiAgICAgICAgXCJhcHJpbFwiOiBcIkFicmlsXCIsXG4gICAgICAgIFwibWF5XCI6IFwiTWFpb1wiLFxuICAgICAgICBcImp1bmVcIjogXCJKdW5ob1wiLFxuICAgICAgICBcImp1bHlcIjogXCJKdWxob1wiLFxuICAgICAgICBcImF1Z3VzdFwiOiBcIkFnb3N0b1wiLFxuICAgICAgICBcInNlcHRlbWJlclwiOiBcIlNldGVtYnJvXCIsXG4gICAgICAgIFwib2N0b2JlclwiOiBcIk91dHVicm9cIixcbiAgICAgICAgXCJub3ZlbWJlclwiOiBcIk5vdmVtYnJvXCIsXG4gICAgICAgIFwiZGVjZW1iZXJcIjogXCJEZXplbWJyb1wiXG4gICAgfSxcbiAgICBcInRpbWVBZ29cIjoge1xuICAgICAgICBcImRheXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcImjDoSBbY291bnRdIGRpYVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJow6EgW2NvdW50XSBkaWFzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3Vyc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiaMOhIFtjb3VudF0gaG9yYVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJow6EgW2NvdW50XSBob3Jhc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWludXRlc1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiaMOhIFtjb3VudF0gbWludXRvXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcImjDoSBbY291bnRdIG1pbnV0b3NcIlxuICAgICAgICB9LFxuICAgICAgICBcInNlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcImjDoSBbY291bnRdIHNlZ3VuZG9cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiaMOhIFtjb3VudF0gc2VndW5kb3NcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInJldmlld0ZpbHRlcnNcIjoge1xuICAgICAgICBcImJ5U3RhcnMxXCI6IFwiQXMgbm9zc2FzIG9waW5pw7VlcyBjb20gW3N0YXIxXSBlc3RyZWxhKHMpXCIsXG4gICAgICAgIFwiYnlTdGFyczJcIjogXCJBcyBub3NzYXMgb3BpbmnDtWVzIGNvbSBbc3RhcjFdIGUgW3N0YXIyXSBlc3RyZWxhc1wiLFxuICAgICAgICBcImJ5U3RhcnMzXCI6IFwiQXMgbm9zc2FzIG9waW5pw7VlcyBjb20gW3N0YXIxXSwgW3N0YXIyXSBlIFtzdGFyM10gZXN0cmVsYXNcIixcbiAgICAgICAgXCJieVN0YXJzNFwiOiBcIkFzIG5vc3NhcyBvcGluacO1ZXMgY29tIFtzdGFyMV0sIFtzdGFyMl0sIFtzdGFyM10gZSBbc3RhcjRdIGVzdHJlbGFzXCIsXG4gICAgICAgIFwiYnlMYXRlc3RcIjogXCJBcyBub3NzYXMgb3BpbmnDtWVzIG1haXMgcmVjZW50ZXNcIixcbiAgICAgICAgXCJieUZhdm9yaXRlT3JUYWdcIjogXCJBcyBub3NzYXMgb3BpbmnDtWVzIGZhdm9yaXRhc1wiXG4gICAgfSxcbiAgICBcIm5vdFJhdGVkXCI6IFwiU2VtIGNsYXNzaWZpY2HDp8Ojb1wiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIltyYXRpbmdTdGFyc10gZGUgW3RvdGFsU3RhcnNdIGVzdHJlbGFzIG5hIFRydXN0cGlsb3RcIixcbiAgICBcInN0YXJSZXZpZXdcIjogXCJPcGluacOjbyBkZSBbcmV2aWV3U3RhcnNdIGVzdHJlbGEocylcIixcbiAgICBcInJldmlld0Rpc2NsYWltZXJcIjoge1xuICAgICAgICBcImJvZHlcIjogXCJBIFRydXN0cGlsb3QgdmVyaWZpY2EgYXMgb3BpbmnDtWVzXCJcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJyZXZpZXdzXCI6IHtcbiAgICAgICAgXCJzaW5ndWxhclwiOiBcItC+0YLQt9GL0LJcIixcbiAgICAgICAgXCJwbHVyYWxcIjogXCLQvtGC0LfRi9Cy0L7QslwiLFxuICAgICAgICBcImNvbGxlY3RlZFZpYVwiOiBcItCh0L7QsdGA0LDQvdC+INGH0LXRgNC10LcgW3NvdXJjZV1cIixcbiAgICAgICAgXCJ2ZXJpZmllZFZpYVwiOiBcItCf0L7QtNGC0LLQtdGA0LbQtNC10L3Qviwg0YHQvtCx0YDQsNC90L4g0YfQtdGA0LXQtyBbc291cmNlXVwiLFxuICAgICAgICBcInNlcnZpY2VSZXZpZXdUeXBlTGFiZWxzXCI6IHtcbiAgICAgICAgICAgIFwidmVyaWZpZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90L5cIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcItCf0L7QtNGC0LLQtdGA0LbQtNC10L3QvdGL0Lkg0L7RgtC30YvQslwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXdCj0LfQvdCw0YLRjCDQsdC+0LvRjNGI0LVbTElOSy1FTkRdINC+INGC0LjQv9Cw0YUg0L7RgtC30YvQstC+0LJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW52aXRlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCf0L4g0L/RgNC40LPQu9Cw0YjQtdC90LjRjlwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwi0J7RgtC30YvQsiDQv9C+INC/0YDQuNCz0LvQsNGI0LXQvdC40Y5cIixcbiAgICAgICAgICAgICAgICBcImluZm9UcnVzdHBpbG90XCI6IFwi0J7RgtC30YvQstGLINC+IFRydXN0cGlsb3Qg0YEg0L7RgtC80LXRgtC60L7QuSBbQk9MRC1CRUdJTl3Qn9C+INC/0YDQuNCz0LvQsNGI0LXQvdC40Y5bQk9MRC1FTkRdINCx0YvQu9C4INC90LDQv9C40YHQsNC90Ysg0L/QviDRgdGB0YvQu9C60LUsINCy0LXQtNGD0YnQtdC5INC90LXQv9C+0YHRgNC10LTRgdGC0LLQtdC90L3QviDQuiDQvdCw0YjQtdC5INGE0L7RgNC80LUg0L7RgtC30YvQstCwLlwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIltMSU5LLUJFR0lOXdCj0LfQvdCw0YLRjCDQsdC+0LvRjNGI0LVbTElOSy1FTkRdINC+INGC0LjQv9Cw0YUg0L7RgtC30YvQstC+0LJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCf0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90L5cIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcItCf0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90L3Ri9C5INC+0YLQt9GL0LJcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl3Qo9C30L3QsNGC0Ywg0LHQvtC70YzRiNC1W0xJTkstRU5EXSDQviDRgtC40L/QsNGFINC+0YLQt9GL0LLQvtCyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJtb250aE5hbWVzXCI6IHtcbiAgICAgICAgXCJqYW51YXJ5XCI6IFwi0Y/QvdCy0LDRgNGPXCIsXG4gICAgICAgIFwiZmVicnVhcnlcIjogXCLRhNC10LLRgNCw0LvRj1wiLFxuICAgICAgICBcIm1hcmNoXCI6IFwi0LzQsNGA0YLQsFwiLFxuICAgICAgICBcImFwcmlsXCI6IFwi0LDQv9GA0LXQu9GPXCIsXG4gICAgICAgIFwibWF5XCI6IFwi0LzQsNGPXCIsXG4gICAgICAgIFwianVuZVwiOiBcItC40Y7QvdGPXCIsXG4gICAgICAgIFwianVseVwiOiBcItCY0Y7Qu9GMXCIsXG4gICAgICAgIFwiYXVndXN0XCI6IFwi0LDQstCz0YPRgdGC0LBcIixcbiAgICAgICAgXCJzZXB0ZW1iZXJcIjogXCLRgdC10L3RgtGP0LHRgNGPXCIsXG4gICAgICAgIFwib2N0b2JlclwiOiBcItCe0LrRgtGP0LHRgNGMXCIsXG4gICAgICAgIFwibm92ZW1iZXJcIjogXCLQvdC+0Y/QsdGA0Y9cIixcbiAgICAgICAgXCJkZWNlbWJlclwiOiBcItCU0LXQutCw0LHRgNGMXCJcbiAgICB9LFxuICAgIFwidGltZUFnb1wiOiB7XG4gICAgICAgIFwiZGF5c1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSDQtNC10L3RjCDQvdCw0LfQsNC0XCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBcIltjb3VudF0g0LTQvdC10Lkg0L3QsNC30LDQtFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG91cnNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0g0YfQsNGBINC90LDQt9Cw0LRcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSDRh9Cw0YHQvtCyINC90LDQt9Cw0LRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0g0LzQuNC90YPRgtGDINC90LDQt9Cw0LRcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSDQvNC40L3Rg9GCINC90LDQt9Cw0LRcIlxuICAgICAgICB9LFxuICAgICAgICBcInNlY29uZHNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0g0YHQtdC60YPQvdC00YMg0L3QsNC30LDQtFwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdINGB0LXQutGD0L3QtCDQvdCw0LfQsNC0XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcItCd0LDRiNC4INC+0YLQt9GL0LLRiyBbc3RhcjFdINC30LLQtdC30LRcIixcbiAgICAgICAgXCJieVN0YXJzMlwiOiBcItCd0LDRiNC4INC+0YLQt9GL0LLRiyBbc3RhcjFdINC4IFtzdGFyMl0g0LfQstC10LfQtFwiLFxuICAgICAgICBcImJ5U3RhcnMzXCI6IFwi0J3QsNGI0Lgg0L7RgtC30YvQstGLIFtzdGFyMV0sIFtzdGFyMl0g0LggW3N0YXIzXSDQt9Cy0LXQt9C0XCIsXG4gICAgICAgIFwiYnlTdGFyczRcIjogXCLQndCw0YjQuCDQvtGC0LfRi9Cy0YsgW3N0YXIxXSwgW3N0YXIyXSwgW3N0YXIzXSDQuCBbc3RhcjRdINC30LLQtdC30LRcIixcbiAgICAgICAgXCJieUxhdGVzdFwiOiBcItCd0LDRiNC4INC90LXQtNCw0LLQvdC40LUg0L7RgtC30YvQstGLXCIsXG4gICAgICAgIFwiYnlGYXZvcml0ZU9yVGFnXCI6IFwi0J3QsNGI0Lgg0LvRjtCx0LjQvNGL0LUg0L7RgtC30YvQstGLXCJcbiAgICB9LFxuICAgIFwibm90UmF0ZWRcIjogXCLQkdC10Lcg0YDQtdC50YLQuNC90LPQsFwiLFxuICAgIFwic3RhclJhdGluZ1wiOiBcIltyYXRpbmdTdGFyc10gb3V0IG9mIFt0b3RhbFN0YXJzXSBzdGFyIHJhdGluZyBvbiBUcnVzdHBpbG90XCIsXG4gICAgXCJzdGFyUmV2aWV3XCI6IFwiW3Jldmlld1N0YXJzXSBzdGFyIHJldmlld1wiLFxuICAgIFwicmV2aWV3RGlzY2xhaW1lclwiOiB7XG4gICAgICAgIFwiYm9keVwiOiBcIlRydXN0cGlsb3QgY2hlY2tzIHJldmlld3NcIlxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcInJldmlld3NcIjoge1xuICAgICAgICBcInNpbmd1bGFyXCI6IFwib21kw7ZtZVwiLFxuICAgICAgICBcInBsdXJhbFwiOiBcIm9tZMO2bWVuXCIsXG4gICAgICAgIFwiY29sbGVjdGVkVmlhXCI6IFwiSW5zYW1sYXQgdmlhIFtzb3VyY2VdXCIsXG4gICAgICAgIFwidmVyaWZpZWRWaWFcIjogXCJWZXJpZmllcmF0IOKAkyBpbnNhbWxhdCB2aWEgW3NvdXJjZV1cIixcbiAgICAgICAgXCJzZXJ2aWNlUmV2aWV3VHlwZUxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInZlcmlmaWVkUmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVmVyaWZpZXJhdFwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RpdGxlXCI6IFwiVmVyaWZpZXJhdCBvbWTDtm1lXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTMOkcyBtZXJbTElOSy1FTkRdIG9tIG9saWthIHR5cGVyIGF2IG9tZMO2bWVuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImludml0ZWRSZXZpZXdcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJNZWQgaW5ianVkYW5cIixcbiAgICAgICAgICAgICAgICBcImluZm9UaXRsZVwiOiBcIk9tZMO2bWUgc2tyaXZldCBlZnRlciBpbmJqdWRhblwiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1RydXN0cGlsb3RcIjogXCJPbWTDtm1lbiBtZWQgZXRpa2V0dGVuIFtCT0xELUJFR0lOXU1lZCBpbmJqdWRhbltCT0xELUVORF0gaGFyIHNrcml2aXRzIGF2IHBlcnNvbmVyIHNvbSBoYXIgaGl0dGF0IHbDpXJ0IG9tZMO2bWVzZm9ybXVsw6RyIHZpYSBlbiBkaXJla3Rsw6Ruay5cIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjogXCJbTElOSy1CRUdJTl1Mw6RzIG1lcltMSU5LLUVORF0gb20gb2xpa2EgdHlwZXIgYXYgb21kw7ZtZW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVkaXJlY3RlZFJldmlld1wiOiB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk9tZGlyaWdlcmF0XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvVGl0bGVcIjogXCJPbWRpcmlnZXJhdCBvbWTDtm1lXCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiW0xJTkstQkVHSU5dTMOkcyBtZXJbTElOSy1FTkRdIG9tIG9saWthIHR5cGVyIGF2IG9tZMO2bWVuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJtb250aE5hbWVzXCI6IHtcbiAgICAgICAgXCJqYW51YXJ5XCI6IFwiamFudWFyaVwiLFxuICAgICAgICBcImZlYnJ1YXJ5XCI6IFwiZmVicnVhcmlcIixcbiAgICAgICAgXCJtYXJjaFwiOiBcIm1hcnNcIixcbiAgICAgICAgXCJhcHJpbFwiOiBcImFwcmlsXCIsXG4gICAgICAgIFwibWF5XCI6IFwibWFqXCIsXG4gICAgICAgIFwianVuZVwiOiBcImp1bmlcIixcbiAgICAgICAgXCJqdWx5XCI6IFwianVsaVwiLFxuICAgICAgICBcImF1Z3VzdFwiOiBcImF1Z3VzdGlcIixcbiAgICAgICAgXCJzZXB0ZW1iZXJcIjogXCJzZXB0ZW1iZXJcIixcbiAgICAgICAgXCJvY3RvYmVyXCI6IFwib2t0b2JlclwiLFxuICAgICAgICBcIm5vdmVtYmVyXCI6IFwibm92ZW1iZXJcIixcbiAgICAgICAgXCJkZWNlbWJlclwiOiBcImRlY2VtYmVyXCJcbiAgICB9LFxuICAgIFwidGltZUFnb1wiOiB7XG4gICAgICAgIFwiZGF5c1wiOiB7XG4gICAgICAgICAgICBcInNpbmd1bGFyXCI6IFwiW2NvdW50XSBkYWcgc2VkYW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBkYWdhciBzZWRhblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG91cnNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gdGltbWUgc2VkYW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSB0aW1tYXIgc2VkYW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gbWludXQgc2VkYW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBtaW51dGVyIHNlZGFuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJbY291bnRdIHNla3VuZCBzZWRhblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIHNla3VuZGVyIHNlZGFuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXZpZXdGaWx0ZXJzXCI6IHtcbiAgICAgICAgXCJieVN0YXJzMVwiOiBcIlZpc2FyIHbDpXJhIFtzdGFyMV0tc3Rqw6RybmlnYSBvbWTDtm1lblwiLFxuICAgICAgICBcImJ5U3RhcnMyXCI6IFwiVmlzYXIgdsOlcmEgW3N0YXIxXS0gb2NoIFtzdGFyMl0tc3Rqw6RybmlnYSBvbWTDtm1lblwiLFxuICAgICAgICBcImJ5U3RhcnMzXCI6IFwiVmlzYXIgdsOlcmEgW3N0YXIxXS0sIFtzdGFyMl0tIG9jaCBbc3RhcjNdLXN0asOkcm5pZ2Egb21kw7ZtZW5cIixcbiAgICAgICAgXCJieVN0YXJzNFwiOiBcIlZpc2FyIHbDpXJhIFtzdGFyMV0tLCBbc3RhcjJdLSwgW3N0YXIzXS0gb2NoIFtzdGFyNF0tc3Rqw6RybmlnYSBvbWTDtm1lblwiLFxuICAgICAgICBcImJ5TGF0ZXN0XCI6IFwiVmlzYXIgdsOlcmEgc2VuYXN0ZSBvbWTDtm1lblwiLFxuICAgICAgICBcImJ5RmF2b3JpdGVPclRhZ1wiOiBcIlZpc2FyIHbDpXJhIGZhdm9yaXRvbWTDtm1lblwiXG4gICAgfSxcbiAgICBcIm5vdFJhdGVkXCI6IFwiRWogYmV0eWdzYXR0XCIsXG4gICAgXCJzdGFyUmF0aW5nXCI6IFwiW3JhdGluZ1N0YXJzXSBhdiBbdG90YWxTdGFyc10gc3Rqw6Rybm9yIHDDpSBUcnVzdHBpbG90XCIsXG4gICAgXCJzdGFyUmV2aWV3XCI6IFwiW3Jldmlld1N0YXJzXS1zdGrDpHJuaWd0IG9tZMO2bWVcIixcbiAgICBcInJldmlld0Rpc2NsYWltZXJcIjoge1xuICAgICAgICBcImJvZHlcIjogXCJUcnVzdHBpbG90IGtvbnRyb2xsZXJhciBvbWTDtm1lblwiXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicmV2aWV3c1wiOiB7XG4gICAgICAgIFwic2luZ3VsYXJcIjogXCLmnaHor4TorrpcIixcbiAgICAgICAgXCJwbHVyYWxcIjogXCLmnaHngrnor4QsXCJcbiAgICB9LFxuICAgIFwibW9udGhOYW1lc1wiOiB7XG4gICAgICAgIFwiamFudWFyeVwiOiBcIuS4gOaciFwiLFxuICAgICAgICBcImZlYnJ1YXJ5XCI6IFwi5LqM5pyIXCIsXG4gICAgICAgIFwibWFyY2hcIjogXCLkuInmnIhcIixcbiAgICAgICAgXCJhcHJpbFwiOiBcIuWbm+aciFwiLFxuICAgICAgICBcIm1heVwiOiBcIuS6lOaciFwiLFxuICAgICAgICBcImp1bmVcIjogXCLlha3mnIhcIixcbiAgICAgICAgXCJqdWx5XCI6IFwi5LiD5pyIXCIsXG4gICAgICAgIFwiYXVndXN0XCI6IFwi5YWr5pyIXCIsXG4gICAgICAgIFwic2VwdGVtYmVyXCI6IFwi5Lmd5pyIXCIsXG4gICAgICAgIFwib2N0b2JlclwiOiBcIuWNgeaciFwiLFxuICAgICAgICBcIm5vdmVtYmVyXCI6IFwi5Y2B5LiA5pyIXCIsXG4gICAgICAgIFwiZGVjZW1iZXJcIjogXCLljYHkuozmnIhcIlxuICAgIH0sXG4gICAgXCJ0aW1lQWdvXCI6IHtcbiAgICAgICAgXCJkYXlzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJbY291bnRdIGRheSBhZ29cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBkYXlzIGFnb1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG91cnNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gaG91ciBhZ29cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBob3VycyBhZ29cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbnV0ZXNcIjoge1xuICAgICAgICAgICAgXCJzaW5ndWxhclwiOiBcIltjb3VudF0gbWludXRlIGFnb1wiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogXCJbY291bnRdIG1pbnV0ZXMgYWdvXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwic2luZ3VsYXJcIjogXCJbY291bnRdIHNlY29uZCBhZ29cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IFwiW2NvdW50XSBzZWNvbmRzIGFnb1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicmV2aWV3RmlsdGVyc1wiOiB7XG4gICAgICAgIFwiYnlTdGFyczFcIjogXCJTaG93aW5nIG91ciBbc3RhcjFdIHN0YXIgcmV2aWV3c1wiLFxuICAgICAgICBcImJ5U3RhcnMyXCI6IFwiU2hvd2luZyBvdXIgW3N0YXIxXSAmIFtzdGFyMl0gc3RhciByZXZpZXdzXCIsXG4gICAgICAgIFwiYnlTdGFyczNcIjogXCJTaG93aW5nIG91ciBbc3RhcjFdLCBbc3RhcjJdICYgW3N0YXIzXSBzdGFyIHJldmlld3NcIixcbiAgICAgICAgXCJieVN0YXJzNFwiOiBcIlNob3dpbmcgb3VyIFtzdGFyMV0sIFtzdGFyMl0sIFtzdGFyM10gJiBbc3RhcjRdIHN0YXIgcmV2aWV3c1wiLFxuICAgICAgICBcImJ5TGF0ZXN0XCI6IFwiU2hvd2luZyBvdXIgbGF0ZXN0IHJldmlld3NcIixcbiAgICAgICAgXCJieUZhdm9yaXRlT3JUYWdcIjogXCJTaG93aW5nIG91ciBmYXZvcml0ZSByZXZpZXdzXCJcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYXBpQ2FsbCA9IHZvaWQgMDtcbmNvbnN0IHF1ZXJ5U3RyaW5nXzEgPSByZXF1aXJlKFwiLi4vcXVlcnlTdHJpbmdcIik7XG5jb25zdCByb290VXJpXzEgPSByZXF1aXJlKFwiLi4vcm9vdFVyaVwiKTtcbmNvbnN0IHhocl8xID0gcmVxdWlyZShcIi4uL3hoclwiKTtcbmNvbnN0IG1ha2VJZCA9IChudW1PZkNoYXJzKSA9PiB7XG4gICAgbGV0IHRleHQgPSAnJztcbiAgICBjb25zdCBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZkNoYXJzOyBpKyspIHtcbiAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xufTtcbmNvbnN0IGFwaUNhbGwgPSAodXJpLCBwYXJhbXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCBmYWlsKSA9PiB7XG4gICAgbGV0IHZhbHVlcztcbiAgICBsZXQgdXJsO1xuICAgIGlmICh1cmkuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICAgIHZhbHVlcyA9IHBhcmFtcyB8fCB7fTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gKDAsIHF1ZXJ5U3RyaW5nXzEuZ2V0QXNPYmplY3QpKCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdmFsdWVzLnJhbmRvbSA9IG1ha2VJZCgyMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVyaS5pbmRleE9mKCdodHRwJykgPT09IDApIHtcbiAgICAgICAgdXJsID0gdXJpLnJlcGxhY2UoL15odHRwcz86LywgJ2h0dHBzOicpO1xuICAgIH1cbiAgICBlbHNlIGlmICh1cmkuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICAgIHVybCA9ICgwLCByb290VXJpXzEuZ2V0V2lkZ2V0Um9vdFVyaSkoKSArIHVyaTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWlsKCk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgeGhyXzEueGhyKSh7XG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YTogdmFsdWVzLFxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICBlcnJvcjogZmFpbCxcbiAgICB9KTtcbn0pO1xuZXhwb3J0cy5hcGlDYWxsID0gYXBpQ2FsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRRdWVyeVBhcmFtcyA9IGdldFF1ZXJ5UGFyYW1zO1xuZXhwb3J0cy5nZXRBc09iamVjdCA9IGdldFF1ZXJ5UGFyYW1zO1xuY29uc3QgZm5fMSA9IHJlcXVpcmUoXCIuL2ZuXCIpO1xuZnVuY3Rpb24gcGFyYW1zVG9PYmplY3QocGFyYW1TdHJpbmcpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBbJz8nLCAnIyddO1xuICAgIGNvbnN0IGRyb3BGaXJzdElmVG9rZW4gPSAoc3RyKSA9PiAodG9rZW5zLmluZGV4T2Yoc3RyWzBdKSAhPT0gLTEgPyBzdHIuc3Vic3RyaW5nKDEpIDogc3RyKTtcbiAgICBjb25zdCB0b1BhaXJzID0gKHN0cikgPT4gc3RyXG4gICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLm1hcCgocGFpclN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwYWlyU3RyaW5nLnNwbGl0KCc9Jyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkS2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgICAgICBjb25zdCBkVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIFtkS2V5LCBkVmFsdWVdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGNvbnN0IG1rT2JqZWN0ID0gKDAsIGZuXzEuY29tcG9zZSkoZm5fMS5wYWlyc1RvT2JqZWN0LCB0b1BhaXJzLCBkcm9wRmlyc3RJZlRva2VuKTtcbiAgICByZXR1cm4gbWtPYmplY3QocGFyYW1TdHJpbmcpO1xufVxuZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbXMobG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24pIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHBhcmFtc1RvT2JqZWN0KGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgY29uc3QgaGFzaFBhcmFtcyA9IHBhcmFtc1RvT2JqZWN0KGxvY2F0aW9uLmhhc2gpO1xuICAgIHJldHVybiB7IC4uLnF1ZXJ5UGFyYW1zLCAuLi5oYXNoUGFyYW1zIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0V2lkZ2V0Um9vdFVyaSA9IHZvaWQgMDtcbmNvbnN0IGdldFdpZGdldFJvb3RVcmkgPSAoKSA9PiB7XG4gICAgY29uc3QgaG9zdCA9ICcje1dpZGdldEFwaS5Ib3N0fSc7XG4gICAgcmV0dXJuIGhvc3QuaW5kZXhPZignIycpID09PSAwID8gJ2h0dHBzOi8vd2lkZ2V0LnRwLXN0YWdpbmcuY29tJyA6IGhvc3Q7XG59O1xuZXhwb3J0cy5nZXRXaWRnZXRSb290VXJpID0gZ2V0V2lkZ2V0Um9vdFVyaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy54aHIgPSB4aHI7XG5mdW5jdGlvbiBpc0lFKCkge1xuICAgIGNvbnN0IG15TmF2ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBteU5hdi5pbmRleE9mKCdtc2llJykgIT09IC0xID8gcGFyc2VJbnQobXlOYXYuc3BsaXQoJ21zaWUnKVsxXSkgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHBhcnNlKHJlcSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gcmVxLnJlc3BvbnNlVGV4dDtcbiAgICB9XG59XG5mdW5jdGlvbiB0b1F1ZXJ5U3RyaW5nKG9iaikge1xuICAgIGNvbnN0IHN0ciA9IFtdO1xuICAgIGZvciAoY29uc3QgcCBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KHApfT0ke2VuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHIuam9pbignJicpO1xufVxuZnVuY3Rpb24gbm9vcCgpIHsgfVxuZnVuY3Rpb24gbWFrZVJlcXVlc3QocGFyYW1zKSB7XG4gICAgY29uc3QgWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgQWN0aXZlWE9iamVjdDtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCdNU1hNTDIuWE1MSFRUUC4zLjAnKTtcbiAgICByZXF1ZXN0Lm9wZW4ocGFyYW1zLnR5cGUsIHBhcmFtcy51cmwsIHRydWUpO1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnN1Y2Nlc3MocGFyc2UocmVxdWVzdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmVycm9yKHBhcnNlKHJlcXVlc3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5zZW5kKHBhcmFtcy5kYXRhKTtcbn1cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0SUUocGFyYW1zKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICBjb25zdCBwcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICBwYXJhbXMudXJsID0gcGFyYW1zLnVybC5yZXBsYWNlKC9odHRwcz86LywgcHJvdG9jb2wpO1xuICAgIHJlcXVlc3Qub3BlbihwYXJhbXMudHlwZSwgcGFyYW1zLnVybCk7XG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBhcmFtcy5zdWNjZXNzKHBhcnNlKHJlcXVlc3QpKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGFyYW1zLmVycm9yKHBhcnNlKHJlcXVlc3QpKTtcbiAgICB9O1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXF1ZXN0LnNlbmQocGFyYW1zLmRhdGEpO1xuICAgIH0sIDApO1xufVxuZnVuY3Rpb24geGhyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHR5cGU6IG9wdGlvbnMudHlwZSB8fCAnR0VUJyxcbiAgICAgICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IgfHwgbm9vcCxcbiAgICAgICAgc3VjY2Vzczogb3B0aW9ucy5zdWNjZXNzIHx8IG5vb3AsXG4gICAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgdXJsOiBvcHRpb25zLnVybCB8fCAnJyxcbiAgICB9O1xuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ0dFVCcgJiYgcGFyYW1zLmRhdGEpIHtcbiAgICAgICAgcGFyYW1zLnVybCA9IGAke3BhcmFtcy51cmx9PyR7dG9RdWVyeVN0cmluZyhwYXJhbXMuZGF0YSl9YDtcbiAgICAgICAgZGVsZXRlIHBhcmFtcy5kYXRhO1xuICAgIH1cbiAgICBpZiAoaXNJRSgpICYmIGlzSUUoKSA8PSA5KSB7XG4gICAgICAgIG1ha2VSZXF1ZXN0SUUocGFyYW1zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1ha2VSZXF1ZXN0KHBhcmFtcyk7XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc1Byb2R1Y3RSZXZpZXdzID0gZXhwb3J0cy5oYXNTZXJ2aWNlUmV2aWV3c011bHRpRmV0Y2ggPSBleHBvcnRzLmhhc1NlcnZpY2VSZXZpZXdzID0gZXhwb3J0cy5jb25zdHJ1Y3RUcnVzdEJveEFuZENvbXBsZXRlID0gZXhwb3J0cy5tdWx0aUZldGNoRGF0YSA9IGV4cG9ydHMuZmV0Y2hEYXRhID0gdm9pZCAwO1xuY29uc3QgY29tbXVuaWNhdGlvbl8xID0gcmVxdWlyZShcIi4uL2NvbW11bmljYXRpb25cIik7XG5jb25zdCBmbl8xID0gcmVxdWlyZShcIi4uL2ZuXCIpO1xuY29uc3QgZXJyb3JGYWxsYmFja18xID0gcmVxdWlyZShcIi4uL3RlbXBsYXRlcy9lcnJvckZhbGxiYWNrXCIpO1xuY29uc3QgbG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vdGVtcGxhdGVzL2xvYWRlclwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBjYWxsXzEgPSByZXF1aXJlKFwiLi9jYWxsXCIpO1xuY29uc3Qgc2luZ2xlRmV0Y2hPYmplY3RLZXkgPSAnZGVmYXVsdF9zaW5nbGVGZXRjaF9mOThhYzc3Yic7XG5jb25zdCBmbGF0dGVuU2luZ2xlUGFyYW1zID0gKGZldGNoUGFyYW1zT2JqZWN0KSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZldGNoUGFyYW1zT2JqZWN0KTtcbiAgICByZXR1cm4gc2luZ2xlRmV0Y2hPYmplY3RLZXkgaW4gZmV0Y2hQYXJhbXNPYmplY3QgJiYga2V5cy5sZW5ndGggPT09IDFcbiAgICAgICAgPyBmZXRjaFBhcmFtc09iamVjdFtzaW5nbGVGZXRjaE9iamVjdEtleV1cbiAgICAgICAgOiBmZXRjaFBhcmFtc09iamVjdDtcbn07XG5jb25zdCBoYXNTZXJ2aWNlUmV2aWV3cyA9ICh7IGJ1c2luZXNzRW50aXR5OiB7IG51bWJlck9mUmV2aWV3czogeyB0b3RhbCB9LCB9LCB9KSA9PiB0b3RhbCA+IDA7XG5leHBvcnRzLmhhc1NlcnZpY2VSZXZpZXdzID0gaGFzU2VydmljZVJldmlld3M7XG5jb25zdCBoYXNTZXJ2aWNlUmV2aWV3c011bHRpRmV0Y2ggPSAoYmFzZURhdGEpID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYmFzZURhdGEpO1xuICAgIHJldHVybiBrZXlzLnNvbWUoKGspID0+IGhhc1NlcnZpY2VSZXZpZXdzKGJhc2VEYXRhW2tdKSk7XG59O1xuZXhwb3J0cy5oYXNTZXJ2aWNlUmV2aWV3c011bHRpRmV0Y2ggPSBoYXNTZXJ2aWNlUmV2aWV3c011bHRpRmV0Y2g7XG5jb25zdCBoYXNQcm9kdWN0UmV2aWV3cyA9ICh7IHByb2R1Y3RSZXZpZXdzU3VtbWFyeSwgaW1wb3J0ZWRQcm9kdWN0UmV2aWV3c1N1bW1hcnkgfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsUHJvZHVjdFJldmlld3MgPSBwcm9kdWN0UmV2aWV3c1N1bW1hcnlcbiAgICAgICAgPyBwcm9kdWN0UmV2aWV3c1N1bW1hcnkubnVtYmVyT2ZSZXZpZXdzLnRvdGFsXG4gICAgICAgIDogMDtcbiAgICBjb25zdCB0b3RhbEltcG9ydGVkUHJvZHVjdFJldmlld3MgPSBpbXBvcnRlZFByb2R1Y3RSZXZpZXdzU3VtbWFyeVxuICAgICAgICA/IGltcG9ydGVkUHJvZHVjdFJldmlld3NTdW1tYXJ5Lm51bWJlck9mUmV2aWV3cy50b3RhbFxuICAgICAgICA6IDA7XG4gICAgcmV0dXJuIHRvdGFsUHJvZHVjdFJldmlld3MgKyB0b3RhbEltcG9ydGVkUHJvZHVjdFJldmlld3MgPiAwO1xufTtcbmV4cG9ydHMuaGFzUHJvZHVjdFJldmlld3MgPSBoYXNQcm9kdWN0UmV2aWV3cztcbmNvbnN0IGJhc2VEYXRhQ2FsbCA9ICh1cmkpID0+ICh7IGJ1c2luZXNzVW5pdElkLCBsb2NhbGUsIC4uLm9wdHMgfSkgPT4ge1xuICAgIGNvbnN0IGJhc2VEYXRhUGFyYW1zID0gKDAsIGZuXzEucmVqZWN0TnVsbGFyeVZhbHVlcykoe1xuICAgICAgICBidXNpbmVzc1VuaXRJZCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICAuLi5vcHRzLFxuICAgICAgICB0aGVtZTogbnVsbCxcbiAgICB9KTtcbiAgICByZXR1cm4gKDAsIGNhbGxfMS5hcGlDYWxsKSh1cmksIGJhc2VEYXRhUGFyYW1zKTtcbn07XG5jb25zdCBjb25zdHJ1Y3RUcnVzdEJveEFuZENvbXBsZXRlID0gKGNvbnN0cnVjdFRydXN0Qm94LCBwYXNzVG9Qb3B1cCA9IGZhbHNlLCBoYXNSZXZpZXdzRnJvbUJhc2VEYXRhID0gaGFzU2VydmljZVJldmlld3MpID0+ICh7IGJhc2VEYXRhLCBsb2NhbGUsIHRoZW1lLCBoYXNNb3JlUmV2aWV3cywgbG9hZE1vcmVSZXZpZXdzIH0pID0+IHtcbiAgICBjb25zdCBoYXNSZXZpZXdzID0gaGFzUmV2aWV3c0Zyb21CYXNlRGF0YShiYXNlRGF0YSk7XG4gICAgY29uc3RydWN0VHJ1c3RCb3goe1xuICAgICAgICBiYXNlRGF0YSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBoYXNNb3JlUmV2aWV3cyxcbiAgICAgICAgbG9hZE1vcmVSZXZpZXdzLFxuICAgIH0pO1xuICAgIGNvbnN0IHNlbmRPblBvcHVwTG9hZCA9ICh7IGRhdGE6IGV2ZW50IH0pID0+IHtcbiAgICAgICAgaWYgKCgwLCBjb21tdW5pY2F0aW9uXzEuaXNMb2FkZWRNZXNzYWdlKShldmVudCkpIHtcbiAgICAgICAgICAgICgwLCBjb21tdW5pY2F0aW9uXzEuc2VuZEFQSURhdGFNZXNzYWdlKSh7XG4gICAgICAgICAgICAgICAgYmFzZURhdGEsXG4gICAgICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwYXNzVG9Qb3B1cCkge1xuICAgICAgICAoMCwgY29tbXVuaWNhdGlvbl8xLnNldExpc3RlbmVyKShzZW5kT25Qb3B1cExvYWQpO1xuICAgIH1cbiAgICAoMCwgdXRpbHNfMS5zaG93VHJ1c3RCb3gpKHRoZW1lLCBoYXNSZXZpZXdzKTtcbiAgICAoMCwgZXJyb3JGYWxsYmFja18xLnJlbW92ZUVycm9yRmFsbGJhY2spKCk7XG59O1xuZXhwb3J0cy5jb25zdHJ1Y3RUcnVzdEJveEFuZENvbXBsZXRlID0gY29uc3RydWN0VHJ1c3RCb3hBbmRDb21wbGV0ZTtcbmNvbnN0IG11bHRpRmV0Y2hEYXRhID0gKHVyaSkgPT4gKGZldGNoUGFyYW1zT2JqZWN0LCBjb25zdHJ1Y3RUcnVzdEJveCwgcGFzc1RvUG9wdXAsIGhhc1Jldmlld3NGcm9tQmFzZURhdGEpID0+IHtcbiAgICBjb25zdCBmaXJzdEZldGNoUGFyYW1zID0gZmV0Y2hQYXJhbXNPYmplY3RbT2JqZWN0LmtleXMoZmV0Y2hQYXJhbXNPYmplY3QpWzBdXTtcbiAgICBjb25zdCB7IGxvY2FsZSwgdGhlbWUgPSAnbGlnaHQnIH0gPSBmaXJzdEZldGNoUGFyYW1zO1xuICAgIGNvbnN0IGJhc2VEYXRhUHJvbWlzZXMgPSAoMCwgZm5fMS5wcm9taXNlQWxsT2JqZWN0KSgoMCwgZm5fMS5tYXBPYmplY3QpKGJhc2VEYXRhQ2FsbCh1cmkpLCBmZXRjaFBhcmFtc09iamVjdCkpO1xuICAgIGNvbnN0IHJlYWR5UHJvbWlzZSA9ICgwLCB1dGlsc18xLmdldE9uUGFnZVJlYWR5KSgpO1xuICAgIGNvbnN0IGZldGNoUHJvbWlzZSA9IFByb21pc2UuYWxsKFtiYXNlRGF0YVByb21pc2VzLCByZWFkeVByb21pc2VdKVxuICAgICAgICAudGhlbigoW29yaWdpbmFsQmFzZURhdGFdKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2VEYXRhID0gZmxhdHRlblNpbmdsZVBhcmFtcyhvcmlnaW5hbEJhc2VEYXRhKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhc2VEYXRhLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgdGhlbWUsXG4gICAgICAgIH07XG4gICAgfSlcbiAgICAgICAgLnRoZW4oY29uc3RydWN0VHJ1c3RCb3hBbmRDb21wbGV0ZShjb25zdHJ1Y3RUcnVzdEJveCwgcGFzc1RvUG9wdXAsIGhhc1Jldmlld3NGcm9tQmFzZURhdGEpKVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUgJiYgZS5GYWxsYmFja0xvZ28pIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgZXJyb3JGYWxsYmFja18xLmVycm9yRmFsbGJhY2spKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAoMCwgbG9hZGVyXzEud2l0aExvYWRlcikoZmV0Y2hQcm9taXNlKTtcbn07XG5leHBvcnRzLm11bHRpRmV0Y2hEYXRhID0gbXVsdGlGZXRjaERhdGE7XG5jb25zdCBmZXRjaERhdGEgPSAodXJpKSA9PiAoZmV0Y2hQYXJhbXMsIGNvbnN0cnVjdFRydXN0Qm94LCBwYXNzVG9Qb3B1cCwgaGFzUmV2aWV3c0Zyb21CYXNlRGF0YSkgPT4ge1xuICAgIGNvbnN0IGZldGNoUGFyYW1zT2JqZWN0ID0geyBbc2luZ2xlRmV0Y2hPYmplY3RLZXldOiBmZXRjaFBhcmFtcyB9O1xuICAgIG11bHRpRmV0Y2hEYXRhKHVyaSkoZmV0Y2hQYXJhbXNPYmplY3QsIGNvbnN0cnVjdFRydXN0Qm94LCBwYXNzVG9Qb3B1cCwgaGFzUmV2aWV3c0Zyb21CYXNlRGF0YSk7XG59O1xuZXhwb3J0cy5mZXRjaERhdGEgPSBmZXRjaERhdGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub25Qb25nID0gZXhwb3J0cy5waW5nID0gdm9pZCAwO1xuZXhwb3J0cy5zZW5kID0gc2VuZE1lc3NhZ2U7XG5leHBvcnRzLmNyZWF0ZVBvcHVwID0gY3JlYXRlUG9wdXBJZnJhbWU7XG5leHBvcnRzLmNyZWF0ZU1vZGFsID0gY3JlYXRlTW9kYWxJZnJhbWU7XG5leHBvcnRzLmhpZGVUcnVzdEJveCA9IGhpZGVNYWluSWZyYW1lO1xuZXhwb3J0cy5zaG93UG9wdXAgPSBzaG93UG9wdXBJZnJhbWU7XG5leHBvcnRzLmhpZGVQb3B1cCA9IGhpZGVQb3B1cElmcmFtZTtcbmV4cG9ydHMuZm9jdXNQb3B1cCA9IGZvY3VzUG9wdXBJZnJhbWU7XG5leHBvcnRzLnNob3dNb2RhbCA9IHNob3dNb2RhbElmcmFtZTtcbmV4cG9ydHMuaGlkZU1vZGFsID0gaGlkZU1vZGFsSWZyYW1lO1xuZXhwb3J0cy5mb2N1c01vZGFsID0gZm9jdXNNb2RhbElmcmFtZTtcbmV4cG9ydHMubG9hZGVkID0gc2VuZExvYWRlZE1lc3NhZ2U7XG5leHBvcnRzLnNldFN0eWxlcyA9IHNldFN0eWxlcztcbmV4cG9ydHMucmVzaXplSGVpZ2h0ID0gcmVzaXplSGVpZ2h0O1xuZXhwb3J0cy5zZXRMaXN0ZW5lciA9IGFkZENhbGxiYWNrRnVuY3Rpb247XG5leHBvcnRzLmlzTG9hZGVkTWVzc2FnZSA9IGlzTG9hZGVkTWVzc2FnZTtcbmV4cG9ydHMuc2VuZEFQSURhdGFNZXNzYWdlID0gc2VuZEFQSURhdGFNZXNzYWdlO1xuZXhwb3J0cy5pc0FQSURhdGFNZXNzYWdlID0gaXNBUElEYXRhTWVzc2FnZTtcbmV4cG9ydHMuaXNQb3B1cFRvZ2dsZU1lc3NhZ2UgPSBpc1BvcHVwVG9nZ2xlTWVzc2FnZTtcbmV4cG9ydHMuc2Nyb2xsVG9UcnVzdEJveCA9IHNjcm9sbFRvVHJ1c3RCb3g7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCB3cGFyZW50ID0gd2luZG93LnBhcmVudDtcbmNvbnN0IG1lc3NhZ2VRdWV1ZSA9IFtdO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgY29tbWFuZDogJ2NyZWF0ZUlGcmFtZScsXG4gICAgcG9zaXRpb246ICdjZW50ZXIgdG9wJyxcbiAgICBzaG93OiBmYWxzZSxcbiAgICBzb3VyY2U6ICdwb3B1cC5odG1sJyxcbiAgICBxdWVyeVN0cmluZzogJycsXG59O1xuY29uc3QgcG9wdXBPcHRpb25zID0ge1xuICAgIG5hbWU6ICdwb3B1cCcsXG4gICAgbW9kYWw6IGZhbHNlLFxuICAgIHN0eWxlczoge1xuICAgICAgICBoZWlnaHQ6ICczMDBweCcsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICB9LFxufTtcbmNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcbiAgICBuYW1lOiAnbW9kYWwnLFxuICAgIG1vZGFsOiB0cnVlLFxuICAgIHN0eWxlczoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICB6aW5kZXg6IDk5LFxuICAgIH0sXG59O1xubGV0IGlkID0gbnVsbDtcbmNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tzID0gW107XG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgaWYgKGlkKSB7XG4gICAgICAgIG1lc3NhZ2Uud2lkZ2V0SWQgPSBpZDtcbiAgICAgICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICB3cGFyZW50LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtZXNzYWdlUXVldWUucHVzaChtZXNzYWdlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZW5kTWVzc2FnZVRvKHRhcmdldCkge1xuICAgIHJldHVybiAobWVzc2FnZSwgcGF5bG9hZCA9IHt9KSA9PiBzZW5kTWVzc2FnZSh7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGNvbW1hbmQ6ICdtZXNzYWdlJyxcbiAgICAgICAgbmFtZTogdGFyZ2V0LFxuICAgIH0pO1xufVxuZnVuY3Rpb24gc2VuZFF1ZXVlKCkge1xuICAgIHdoaWxlIChtZXNzYWdlUXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2VRdWV1ZS5wb3AoKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlUG9wdXBJZnJhbWUob3B0aW9ucykge1xuICAgIHNlbmRNZXNzYWdlKHtcbiAgICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIC4uLnBvcHVwT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsSWZyYW1lKG9wdGlvbnMpIHtcbiAgICBzZW5kTWVzc2FnZSh7XG4gICAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgICAuLi5tb2RhbE9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXRTdHlsZXMoc3R5bGVzLCBvcHRpb25hbElmcmFtZU5hbWUpIHtcbiAgICBzZW5kTWVzc2FnZSh7IGNvbW1hbmQ6ICdzZXRTdHlsZScsIG5hbWU6IG9wdGlvbmFsSWZyYW1lTmFtZSwgc3R5bGU6IHN0eWxlcyB9KTtcbn1cbmZ1bmN0aW9uIHNob3dJZnJhbWUoaWZyYW1lTmFtZSkge1xuICAgIHNlbmRNZXNzYWdlKHsgY29tbWFuZDogJ3Nob3cnLCBuYW1lOiBpZnJhbWVOYW1lIH0pO1xuICAgIHNlbmRNZXNzYWdlVG8oJ21haW4nKShgJHtpZnJhbWVOYW1lfSB0b2dnbGVkYCwgeyB2aXNpYmxlOiB0cnVlIH0pO1xufVxuZnVuY3Rpb24gaGlkZUlmcmFtZShpZnJhbWVOYW1lKSB7XG4gICAgc2VuZE1lc3NhZ2UoeyBjb21tYW5kOiAnaGlkZScsIG5hbWU6IGlmcmFtZU5hbWUgfSk7XG4gICAgc2VuZE1lc3NhZ2VUbygnbWFpbicpKGAke2lmcmFtZU5hbWV9IHRvZ2dsZWRgLCB7IHZpc2libGU6IGZhbHNlIH0pO1xufVxuZnVuY3Rpb24gZm9jdXNJZnJhbWUoaWZyYW1lTmFtZSkge1xuICAgIHNlbmRNZXNzYWdlKHsgY29tbWFuZDogJ2ZvY3VzJywgbmFtZTogaWZyYW1lTmFtZSB9KTtcbn1cbmZ1bmN0aW9uIHNlbmRMb2FkZWRNZXNzYWdlKCkge1xuICAgIHNlbmRNZXNzYWdlKHsgY29tbWFuZDogJ2xvYWRlZCcgfSk7XG59XG5mdW5jdGlvbiBpc0xvYWRlZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHJldHVybiBtZXNzYWdlID09PSAnbG9hZGVkJztcbn1cbmZ1bmN0aW9uIHNlbmRBUElEYXRhTWVzc2FnZShkYXRhKSB7XG4gICAgc2VuZE1lc3NhZ2VUbygncG9wdXAnKSgnQVBJIGRhdGEnLCBkYXRhKTtcbn1cbmZ1bmN0aW9uIGFyZU1hdGNoaW5nTWVzc2FnZXMobWVzc2FnZSwgb3RoZXJNZXNzYWdlKSB7XG4gICAgcmV0dXJuIFsnbWVzc2FnZScsICdjb21tYW5kJywgJ25hbWUnXS5ldmVyeSgoa2V5KSA9PiBtZXNzYWdlW2tleV0gJiYgb3RoZXJNZXNzYWdlW2tleV0gJiYgbWVzc2FnZVtrZXldID09PSBvdGhlck1lc3NhZ2Vba2V5XSk7XG59XG5mdW5jdGlvbiBpc0FQSURhdGFNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYXJlTWF0Y2hpbmdNZXNzYWdlcyhtZXNzYWdlLCB7XG4gICAgICAgIGNvbW1hbmQ6ICdtZXNzYWdlJyxcbiAgICAgICAgbmFtZTogJ3BvcHVwJyxcbiAgICAgICAgbWVzc2FnZTogJ0FQSSBkYXRhJyxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzUG9wdXBUb2dnbGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYXJlTWF0Y2hpbmdNZXNzYWdlcyhtZXNzYWdlLCB7XG4gICAgICAgIGNvbW1hbmQ6ICdtZXNzYWdlJyxcbiAgICAgICAgbmFtZTogJ21haW4nLFxuICAgICAgICBtZXNzYWdlOiAncG9wdXAgdG9nZ2xlZCcsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRDYWxsYmFja0Z1bmN0aW9uKGZ1bmMpIHtcbiAgICBsaXN0ZW5lckNhbGxiYWNrcy5wdXNoKGZ1bmMpO1xufVxuZnVuY3Rpb24gaGlkZU1haW5JZnJhbWUoKSB7XG4gICAgaGlkZUlmcmFtZSgnbWFpbicpO1xufVxuZnVuY3Rpb24gc2hvd1BvcHVwSWZyYW1lKCkge1xuICAgIHNob3dJZnJhbWUoJ3BvcHVwJyk7XG59XG5mdW5jdGlvbiBoaWRlUG9wdXBJZnJhbWUoKSB7XG4gICAgaGlkZUlmcmFtZSgncG9wdXAnKTtcbn1cbmZ1bmN0aW9uIGZvY3VzUG9wdXBJZnJhbWUoKSB7XG4gICAgZm9jdXNJZnJhbWUoJ3BvcHVwJyk7XG59XG5mdW5jdGlvbiBzaG93TW9kYWxJZnJhbWUoKSB7XG4gICAgc2hvd0lmcmFtZSgnbW9kYWwnKTtcbn1cbmZ1bmN0aW9uIGhpZGVNb2RhbElmcmFtZSgpIHtcbiAgICBoaWRlSWZyYW1lKCdtb2RhbCcpO1xufVxuZnVuY3Rpb24gZm9jdXNNb2RhbElmcmFtZSgpIHtcbiAgICBmb2N1c0lmcmFtZSgnbW9kYWwnKTtcbn1cbmNvbnN0IHNlbmRQaW5nID0gKCkgPT4gc2VuZE1lc3NhZ2UoeyBjb21tYW5kOiAncGluZycgfSk7XG5leHBvcnRzLnBpbmcgPSBzZW5kUGluZztcbmNvbnN0IG9uUG9uZyA9IChjYikgPT4ge1xuICAgIGNvbnN0IHBvbmcgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEuY29tbWFuZCA9PT0gJ3BvbmcnKSB7XG4gICAgICAgICAgICBjYihldmVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGFkZENhbGxiYWNrRnVuY3Rpb24ocG9uZyk7XG59O1xuZXhwb3J0cy5vblBvbmcgPSBvblBvbmc7XG5mdW5jdGlvbiByZXNpemVIZWlnaHQob3B0aW9uYWxIZWlnaHQsIG9wdGlvbmFsSWZyYW1lTmFtZSkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIHNlbmRNZXNzYWdlKHtcbiAgICAgICAgY29tbWFuZDogJ3Jlc2l6ZS1oZWlnaHQnLFxuICAgICAgICBuYW1lOiBvcHRpb25hbElmcmFtZU5hbWUsXG4gICAgICAgIGhlaWdodDogb3B0aW9uYWxIZWlnaHQgfHwgYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBzY3JvbGxUb1RydXN0Qm94KHRhcmdldHMpIHtcbiAgICBzZW5kTWVzc2FnZSh7XG4gICAgICAgIGNvbW1hbmQ6ICdzY3JvbGxUbycsXG4gICAgICAgIHRhcmdldHMsXG4gICAgfSk7XG59XG4oMCwgdXRpbHNfMS5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csICdtZXNzYWdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBldmVudC5kYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBlO1xuICAgIHRyeSB7XG4gICAgICAgIGUgPSB7IGRhdGE6IEpTT04ucGFyc2UoZXZlbnQuZGF0YSkgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5kYXRhLmNvbW1hbmQgPT09ICdzZXRJZCcpIHtcbiAgICAgICAgaWQgPSBlLmRhdGEud2lkZ2V0SWQ7XG4gICAgICAgIHNlbmRRdWV1ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lckNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBsaXN0ZW5lckNhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVqZWN0TnVsbGFyeVZhbHVlcyA9IGV4cG9ydHMucHJvcE1heWJlID0gZXhwb3J0cy5wcm9wID0gZXhwb3J0cy5wcm9taXNlQWxsT2JqZWN0ID0gZXhwb3J0cy5waXBlTWF5YmUgPSBleHBvcnRzLnBhaXJzVG9PYmplY3QgPSBleHBvcnRzLm1hcE9iamVjdCA9IGV4cG9ydHMubWFwID0gZXhwb3J0cy5ndWFyZCA9IGV4cG9ydHMuZmlyc3QgPSBleHBvcnRzLmZpbmQgPSBleHBvcnRzLmZpbHRlciA9IGV4cG9ydHMuY29tcG9zZSA9IGV4cG9ydHMuY2h1bmtUcmFuc3Bvc2UgPSBleHBvcnRzLmNodW5rID0gdm9pZCAwO1xuY29uc3QgcmVkdWNlID0gKGYpID0+IChpbml0KSA9PiAoeHMpID0+IHhzLnJlZHVjZShmLCBpbml0KTtcbmNvbnN0IGZpbHRlciA9IChwKSA9PiAoeHMpID0+IHhzLmZpbHRlcihwKTtcbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuY29uc3QgbWFwID0gKGYpID0+ICh4cykgPT4geHMubWFwKGYpO1xuZXhwb3J0cy5tYXAgPSBtYXA7XG5jb25zdCBtYXBPYmplY3QgPSAoZiwgb2JqKSA9PiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWxsLCBrKSA9PiAoeyAuLi5hbGwsIFtrXTogZihvYmpba10pIH0pLCB7fSk7XG5leHBvcnRzLm1hcE9iamVjdCA9IG1hcE9iamVjdDtcbmNvbnN0IHByb21pc2VBbGxPYmplY3QgPSAob2JqKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoKGspID0+IG9ialtrXSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHZhbHVlcykudGhlbigocHJvbWlzZXMpID0+IHByb21pc2VzLnJlZHVjZSgoYWxsLCBwcm9taXNlLCBpZHgpID0+ICh7IC4uLmFsbCwgW2tleXNbaWR4XV06IHByb21pc2UgfSksIHt9KSk7XG59O1xuZXhwb3J0cy5wcm9taXNlQWxsT2JqZWN0ID0gcHJvbWlzZUFsbE9iamVjdDtcbmNvbnN0IHBhaXJzVG9PYmplY3QgPSAocGFpcnMpID0+IHBhaXJzLnJlZHVjZSgob2JqLCBbaywgdl0pID0+ICh7IC4uLm9iaiwgW2tdOiB2IH0pLCB7fSk7XG5leHBvcnRzLnBhaXJzVG9PYmplY3QgPSBwYWlyc1RvT2JqZWN0O1xuY29uc3QgaXNOdWxsYXJ5ID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsO1xuY29uc3QgaXNOdWxsYXJ5T3JGYWxzZSA9ICh2YWx1ZSkgPT4gaXNOdWxsYXJ5KHZhbHVlKSB8fCB2YWx1ZSA9PT0gZmFsc2U7XG5jb25zdCByZWplY3ROdWxsYXJ5VmFsdWVzID0gKG9iaikgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgobmV3T2JqLCBrZXkpID0+ICh7XG4gICAgICAgIC4uLm5ld09iaixcbiAgICAgICAgLi4uKGlzTnVsbGFyeShvYmpba2V5XSkgPyB7fSA6IHsgW2tleV06IG9ialtrZXldIH0pLFxuICAgIH0pLCB7fSk7XG59O1xuZXhwb3J0cy5yZWplY3ROdWxsYXJ5VmFsdWVzID0gcmVqZWN0TnVsbGFyeVZhbHVlcztcbmNvbnN0IGNodW5rID0gKGNodW5rU2l6ZSkgPT4gcmVkdWNlKChjaHVua3MsIHZhbCwgaWR4KSA9PiB7XG4gICAgY29uc3QgbGFzdENodW5rID0gY2h1bmtzW2NodW5rcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBpc05ld0NodW5rID0gaWR4ICUgY2h1bmtTaXplID09PSAwO1xuICAgIGNvbnN0IG5ld0NodW5rID0gaXNOZXdDaHVuayA/IFt2YWxdIDogWy4uLmxhc3RDaHVuaywgdmFsXTtcbiAgICByZXR1cm4gWy4uLmNodW5rcy5zbGljZSgwLCBjaHVua3MubGVuZ3RoIC0gKGlzTmV3Q2h1bmsgPyAwIDogMSkpLCBuZXdDaHVua107XG59KShbXSk7XG5leHBvcnRzLmNodW5rID0gY2h1bms7XG5jb25zdCBjaHVua1RyYW5zcG9zZSA9IChjaHVua1NpemUpID0+IHJlZHVjZSgoY2h1bmtzLCB2YWwsIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNodW5rSWR4ID0gaWR4ICUgY2h1bmtTaXplO1xuICAgIGNvbnN0IG5ld0NodW5rID0gWy4uLihjaHVua3NbY2h1bmtJZHhdIHx8IFtdKSwgdmFsXTtcbiAgICByZXR1cm4gWy4uLmNodW5rcy5zbGljZSgwLCBjaHVua0lkeCksIG5ld0NodW5rLCAuLi5jaHVua3Muc2xpY2UoY2h1bmtJZHggKyAxKV07XG59KShbXSk7XG5leHBvcnRzLmNodW5rVHJhbnNwb3NlID0gY2h1bmtUcmFuc3Bvc2U7XG5jb25zdCBjb21wb3NlID0gKC4uLmZzKSA9PiAoeCkgPT4gZnMucmVkdWNlUmlnaHQoKHZhbCwgZikgPT4gZih2YWwpLCB4KTtcbmV4cG9ydHMuY29tcG9zZSA9IGNvbXBvc2U7XG5jb25zdCBwaXBlTWF5YmUgPSAoLi4uZnMpID0+ICh4KSA9PiBmcy5yZWR1Y2UoKHZhbCwgZikgPT4gKGlzTnVsbGFyeSh2YWwpID8gdmFsIDogZih2YWwpKSwgeCk7XG5leHBvcnRzLnBpcGVNYXliZSA9IHBpcGVNYXliZTtcbmNvbnN0IGZpcnN0ID0gKFt4XSkgPT4geDtcbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmNvbnN0IGZpbmQgPSAocCkgPT4gcGlwZU1heWJlKGZpbHRlcihwKSwgZmlyc3QpO1xuZXhwb3J0cy5maW5kID0gZmluZDtcbmNvbnN0IHByb3AgPSAoaykgPT4gKG9iaiA9IHt9KSA9PiBvYmpba107XG5leHBvcnRzLnByb3AgPSBwcm9wO1xuY29uc3QgcHJvcE1heWJlID0gKGspID0+IChvYmogPSB7fSkgPT4gb2JqW2tdIHx8IG9iajtcbmV4cG9ydHMucHJvcE1heWJlID0gcHJvcE1heWJlO1xuY29uc3QgZ3VhcmQgPSAocCkgPT4gKHgpID0+IChpc051bGxhcnlPckZhbHNlKHApID8gbnVsbCA6IHgpO1xuZXhwb3J0cy5ndWFyZCA9IGd1YXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNvcnRBdHRyaWJ1dGVSYXRpbmdzID0gZXhwb3J0cy5zaG93VHJ1c3RCb3ggPSBleHBvcnRzLnNldFdpZGdldEFsaWdubWVudCA9IGV4cG9ydHMuc2V0VGV4dENvbG9yID0gZXhwb3J0cy5zZXRQb3B1cEFsaWdubWVudCA9IGV4cG9ydHMuc2V0Rm9udCA9IGV4cG9ydHMuc2V0SHRtbExhbmd1YWdlID0gZXhwb3J0cy5zZXRCb3JkZXJDb2xvciA9IGV4cG9ydHMuc2FuaXRpemVIdG1sUHJvcCA9IGV4cG9ydHMuc2FuaXRpemVIdG1sID0gZXhwb3J0cy5zYW5pdGl6ZUNvbG9yID0gZXhwb3J0cy5yZWd1bGF0ZUZvbGxvd0ZvckxvY2F0aW9uID0gZXhwb3J0cy5yYW5nZSA9IGV4cG9ydHMuaGFuZGxlUG9wb3ZlclBvc2l0aW9uID0gZXhwb3J0cy5pbmplY3RXaWRnZXRMaW5rcyA9IGV4cG9ydHMuZ2V0VHJ1c3RwaWxvdEJ1c2luZXNzVW5pdElkID0gZXhwb3J0cy5hZGRVdG1QYXJhbXMgPSB2b2lkIDA7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5nZXRPblBhZ2VSZWFkeSA9IGdldE9uUGFnZVJlYWR5O1xuZXhwb3J0cy5pbnNlcnROdW1iZXJTZXBhcmF0b3IgPSBpbnNlcnROdW1iZXJTZXBhcmF0b3I7XG5leHBvcnRzLm1ha2VUcmFuc2xhdGVkTGlua0FjY2Vzc2libGVOYW1lcyA9IG1ha2VUcmFuc2xhdGVkTGlua0FjY2Vzc2libGVOYW1lcztcbmV4cG9ydHMubWFrZVRyYW5zbGF0ZWRTdGFyUmF0aW5nID0gbWFrZVRyYW5zbGF0ZWRTdGFyUmF0aW5nO1xuZXhwb3J0cy5tYWtlVHJhbnNsYXRpb25zID0gbWFrZVRyYW5zbGF0aW9ucztcbmV4cG9ydHMucmVtb3ZlRWxlbWVudCA9IHJlbW92ZUVsZW1lbnQ7XG5leHBvcnRzLnNldEh0bWxDb250ZW50ID0gc2V0SHRtbENvbnRlbnQ7XG5leHBvcnRzLnNldFRleHRDb250ZW50ID0gc2V0VGV4dENvbnRlbnQ7XG5jb25zdCBkb21fMSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmNvbnN0IHN0eWxlQWxpZ25tZW50UG9zaXRpb25zXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvc3R5bGVBbGlnbm1lbnRQb3NpdGlvbnNcIik7XG5jb25zdCByb290VXJpXzEgPSByZXF1aXJlKFwiLi9yb290VXJpXCIpO1xuY29uc3QgdHJhbnNsYXRpb25zXzEgPSByZXF1aXJlKFwiLi90cmFuc2xhdGlvbnNcIik7XG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJHt0eXBlfWAsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBnZXRPblBhZ2VSZWFkeSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZVdpdGhUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICByZXNvbHZlV2l0aFRpbWVvdXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlV2l0aFRpbWVvdXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbnNlcnROdW1iZXJTZXBhcmF0b3IoaW5wdXQsIGxvY2FsZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnRvTG9jYWxlU3RyaW5nKGxvY2FsZSB8fCAnZW4tVVMnKTtcbn1cbmZ1bmN0aW9uIHNldFRleHRDb250ZW50KGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gc2V0IGNvbnRlbnQgb24gbWlzc2luZyBlbGVtZW50Jyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCdpbm5lclRleHQnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgfVxufVxuY29uc3Qgc2FuaXRpemVIdG1sUHJvcCA9IChzdHJpbmcpID0+IHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2VBbGwoJz4nLCAnJyk7XG4gICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlQWxsKCc8JywgJycpO1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZUFsbCgnXCInLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuZXhwb3J0cy5zYW5pdGl6ZUh0bWxQcm9wID0gc2FuaXRpemVIdG1sUHJvcDtcbmNvbnN0IHNhbml0aXplSHRtbCA9IChzdHJpbmcpID0+IHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oPFxcLz8oPzpwfGJ8aXxsaXx1bHxhfHN0cm9uZylcXC8/Pil8KD86PFxcLz8uKj9cXC8/PikvZ2ksICckMScpO1xufTtcbmV4cG9ydHMuc2FuaXRpemVIdG1sID0gc2FuaXRpemVIdG1sO1xuZnVuY3Rpb24gc2V0SHRtbENvbnRlbnQoZWxlbWVudCwgY29udGVudCwgc2FuaXRpemUgPSB0cnVlKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQXR0ZW1wdGluZyB0byBzZXQgSFRNTCBjb250ZW50IG9uIG1pc3NpbmcgZWxlbWVudCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBzYW5pdGl6ZSA/IHNhbml0aXplSHRtbChjb250ZW50KSA6IGNvbnRlbnQ7XG4gICAgfVxufVxuY29uc3QgaXNWYWxpZEFsaWdubWVudCA9IChhbGlnbm1lbnQpID0+IHtcbiAgICByZXR1cm4gc3R5bGVBbGlnbm1lbnRQb3NpdGlvbnNfMS5zdHlsZUFsaWdubWVudFBvc2l0aW9ucy5pbmNsdWRlcyhhbGlnbm1lbnQpO1xufTtcbmNvbnN0IHNldFdpZGdldEFsaWdubWVudCA9IChlbGVtZW50SWQsIGFsaWdubWVudCkgPT4ge1xuICAgIGlmICghZWxlbWVudElkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignVHJ1c3RwaWxvdDogY2Fubm90IGZpbmQgc3RhcnMgd3JhcHBlciBlbGVtZW50LCBwbGVhc2UgY29udGFjdCBzdXBwb3J0IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghYWxpZ25tZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignVHJ1c3RwaWxvdDogY2Fubm90IGFwcGx5IHdpZGdldCBhbGlnbm1lbnQsIHBsZWFzZSBjb250YWN0IHN1cHBvcnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNBbGlnbm1lbnRWYWxpZCA9IGlzVmFsaWRBbGlnbm1lbnQoYWxpZ25tZW50KTtcbiAgICBjb25zb2xlLmxvZygnaXNBbGlnbm1lbnRWYWxpZDogJywgaXNBbGlnbm1lbnRWYWxpZCk7XG4gICAgaWYgKCFpc0FsaWdubWVudFZhbGlkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgVHJ1c3RwaWxvdDogJHthbGlnbm1lbnR9IGlzIG5vdCBhIHZhbGlkIHdpZGdldCBhbGlnbm1lbnQgdmFsdWUsIHBsZWFzZSBjb250YWN0IHN1cHBvcnQhYCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgd2FwcGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgaWYgKCF3YXBwZXJFbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcnVzdHBpbG90OiBjb3VsZG4ndCBmaW5kIHRoZSBzdGFycyB3cmFwcGVyIGVsZW1lbnQsIHBsZWFzZSBjb250YWN0IHN1cHBvcnQhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtlbGVtZW50SWR9LS0ke2FsaWdubWVudH1gKTtcbn07XG5leHBvcnRzLnNldFdpZGdldEFsaWdubWVudCA9IHNldFdpZGdldEFsaWdubWVudDtcbmNvbnN0IHNldFBvcHVwQWxpZ25tZW50ID0gKGFsaWdubWVudCkgPT4ge1xuICAgIGlmICghYWxpZ25tZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignVHJ1c3RwaWxvdDogY2Fubm90IGFwcGx5IHdpZGdldCBhbGlnbm1lbnQsIHBsZWFzZSBjb250YWN0IHN1cHBvcnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNBbGlnbm1lbnRWYWxpZCA9IGlzVmFsaWRBbGlnbm1lbnQoYWxpZ25tZW50KTtcbiAgICBpZiAoIWlzQWxpZ25tZW50VmFsaWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBUcnVzdHBpbG90OiAke2FsaWdubWVudH0gaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIHN0eWxlIGFsaWdubWVudCwgcGxlYXNlIGNvbnRhY3Qgc3VwcG9ydCFgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB3aWRnZXRQb3B1cFdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RwLXdpZGdldC13cmFwcGVyJyk7XG4gICAgaWYgKCF3aWRnZXRQb3B1cFdyYXBwZXJFbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RydXN0cGlsb3Q6IHdpZGdldCBwb3B1cCBpcyBub3QgZm91bmQsIHBsZWFzZSBjb250YWN0IHN1cHBvcnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9wdXBTdHlsZUFsaWdubWVudCA9IGB0cC13aWRnZXQtd3JhcHBlci0tJHthbGlnbm1lbnR9YDtcbiAgICB3aWRnZXRQb3B1cFdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQocG9wdXBTdHlsZUFsaWdubWVudCk7XG59O1xuZXhwb3J0cy5zZXRQb3B1cEFsaWdubWVudCA9IHNldFBvcHVwQWxpZ25tZW50O1xuZnVuY3Rpb24gbWFrZVRyYW5zbGF0ZWRTdGFyUmF0aW5nKHRydXN0U2NvcmUsIGxvY2FsZSkge1xuICAgIGNvbnN0IGludGVycG9sYXRpb25zID0geyAnW3JhdGluZ1N0YXJzXSc6IHRydXN0U2NvcmUsICdbdG90YWxTdGFyc10nOiA1IH07XG4gICAgcmV0dXJuICgwLCB0cmFuc2xhdGlvbnNfMS5nZXRGcmFtZXdvcmtUcmFuc2xhdGlvbikoJ3N0YXJSYXRpbmcnLCBsb2NhbGUsIGludGVycG9sYXRpb25zKTtcbn1cbmZ1bmN0aW9uIG1ha2VUcmFuc2xhdGVkTGlua0FjY2Vzc2libGVOYW1lcyhsYWJlbEtleSwgZGVzY0tleSwgaW5zdHJ1Y3Rpb25LZXksIGxvY2FsZSwgaW50ZXJwb2xhdGlvbnMpIHtcbiAgICBpZiAoIWxhYmVsS2V5IHx8ICFkZXNjS2V5IHx8ICFpbnN0cnVjdGlvbktleSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgdHJhbnNsYXRpb24gc3RyaW5nIHN0cmluZyBrZXknKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBhcmlhTGFiZWwgPSAoMCwgdHJhbnNsYXRpb25zXzEuZ2V0RnJhbWV3b3JrVHJhbnNsYXRpb24pKGxhYmVsS2V5LCBsb2NhbGUsIHt9KTtcbiAgICBjb25zdCBhcmlhRGVzY3JpcHRpb24gPSAoMCwgdHJhbnNsYXRpb25zXzEuZ2V0RnJhbWV3b3JrVHJhbnNsYXRpb24pKGRlc2NLZXksIGxvY2FsZSwgaW50ZXJwb2xhdGlvbnMpO1xuICAgIGNvbnN0IGFyaWFJbnN0cnVjdGlvbiA9ICgwLCB0cmFuc2xhdGlvbnNfMS5nZXRGcmFtZXdvcmtUcmFuc2xhdGlvbikoaW5zdHJ1Y3Rpb25LZXksIGxvY2FsZSwge30pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFyaWFMYWJlbCxcbiAgICAgICAgYXJpYURlc2NyaXB0aW9uLFxuICAgICAgICBhcmlhSW5zdHJ1Y3Rpb24sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG1ha2VUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zLCBzdHJpbmcpIHtcbiAgICBpZiAoIXN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZygnTWlzc2luZyB0cmFuc2xhdGlvbiBzdHJpbmcnKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXModHJhbnNsYXRpb25zKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiByZXN1bHQuc3BsaXQoa2V5KS5qb2luKHRyYW5zbGF0aW9uc1trZXldKSwgc3RyaW5nKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIHJlbW92ZSBhIG5vbi1leGlzdGluZyBlbGVtZW50Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbn1cbmNvbnN0IHNob3dUcnVzdEJveCA9ICh0aGVtZSwgaGFzUmV2aWV3cykgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHAtd2lkZ2V0LXdyYXBwZXInKTtcbiAgICAoMCwgZG9tXzEuYWRkQ2xhc3MpKGJvZHksIHRoZW1lKTtcbiAgICAoMCwgZG9tXzEuYWRkQ2xhc3MpKHdyYXBwZXIsICd2aXNpYmxlJyk7XG4gICAgaWYgKCFoYXNSZXZpZXdzKSB7XG4gICAgICAgICgwLCBkb21fMS5hZGRDbGFzcykoYm9keSwgJ2ZpcnN0LXJldmlld2VyJyk7XG4gICAgfVxufTtcbmV4cG9ydHMuc2hvd1RydXN0Qm94ID0gc2hvd1RydXN0Qm94O1xuY29uc3QgdmVyaWZ5UXVlcnlQYXJhbVNlcGFyYXRvciA9ICh1cmwpID0+IGAke3VybH0ke3VybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnfWA7XG5jb25zdCBhZGRVdG1QYXJhbXMgPSAodHJ1c3RCb3hOYW1lKSA9PiAodXJsKSA9PiBgJHt2ZXJpZnlRdWVyeVBhcmFtU2VwYXJhdG9yKHVybCl9dXRtX21lZGl1bT10cnVzdGJveCZ1dG1fc291cmNlPSR7dHJ1c3RCb3hOYW1lfWA7XG5leHBvcnRzLmFkZFV0bVBhcmFtcyA9IGFkZFV0bVBhcmFtcztcbmNvbnN0IHJlZ3VsYXRlRm9sbG93Rm9yTG9jYXRpb24gPSAobG9jYXRpb24pID0+IChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGxvY2F0aW9uICYmIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZWwgPSAnbm9mb2xsb3cnO1xuICAgIH1cbn07XG5leHBvcnRzLnJlZ3VsYXRlRm9sbG93Rm9yTG9jYXRpb24gPSByZWd1bGF0ZUZvbGxvd0ZvckxvY2F0aW9uO1xuY29uc3QgaW5qZWN0V2lkZ2V0TGlua3MgPSAoYmFzZURhdGEsIHV0bVRydXN0Qm94SWQsIGxpbmtzQ2xhc3MgPSAncHJvZmlsZS11cmwnKSA9PiB7XG4gICAgY29uc3QgeyBidXNpbmVzc0VudGl0eTogeyBudW1iZXJPZlJldmlld3M6IHsgdG90YWw6IG51bWJlck9mUmV2aWV3cyB9LCB9LCBsaW5rcywgfSA9IGJhc2VEYXRhO1xuICAgIGNvbnN0IGl0ZW1zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxpbmtzQ2xhc3MpKTtcbiAgICBjb25zdCBiYXNlVXJsID0gbnVtYmVyT2ZSZXZpZXdzID8gbGlua3MucHJvZmlsZVVybCA6IGxpbmtzLmV2YWx1YXRlVXJsO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbXNbaV0uaHJlZiA9IGFkZFV0bVBhcmFtcyh1dG1UcnVzdEJveElkKShiYXNlVXJsKTtcbiAgICB9XG59O1xuZXhwb3J0cy5pbmplY3RXaWRnZXRMaW5rcyA9IGluamVjdFdpZGdldExpbmtzO1xuY29uc3QgcmFuZ2UgPSAobnVtKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgd2hpbGUgKG51bSA+IDApIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocmVzdWx0Lmxlbmd0aCk7XG4gICAgICAgIG51bS0tO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcbmNvbnN0IGNvbG9yU2hpZnQgPSAoY29sLCBhbXQpID0+IHtcbiAgICBjb25zdCB2YWxpZGF0ZUJvdW5kcyA9ICh2KSA9PiAodiA+IDI1NSA/IDI1NSA6IHYgPCAwID8gMCA6IHYpO1xuICAgIGxldCB1c2VQb3VuZCA9IGZhbHNlO1xuICAgIGlmIChjb2xbMF0gPT09ICcjJykge1xuICAgICAgICBjb2wgPSBjb2wuc2xpY2UoMSk7XG4gICAgICAgIHVzZVBvdW5kID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29sLCAxNik7XG4gICAgaWYgKCFudW0pIHtcbiAgICAgICAgcmV0dXJuIGNvbDtcbiAgICB9XG4gICAgbGV0IHIgPSAobnVtID4+IDE2KSArIGFtdDtcbiAgICByID0gdmFsaWRhdGVCb3VuZHMocik7XG4gICAgbGV0IGcgPSAoKG51bSA+PiA4KSAmIDB4MDBmZikgKyBhbXQ7XG4gICAgZyA9IHZhbGlkYXRlQm91bmRzKGcpO1xuICAgIGxldCBiID0gKG51bSAmIDB4MDAwMGZmKSArIGFtdDtcbiAgICBiID0gdmFsaWRhdGVCb3VuZHMoYik7XG4gICAgW3IsIGcsIGJdID0gW3IsIGcsIGJdLm1hcCgoY29sb3IpID0+IGNvbG9yIDw9IDE1ID8gYDAke2NvbG9yLnRvU3RyaW5nKDE2KX1gIDogY29sb3IudG9TdHJpbmcoMTYpKTtcbiAgICByZXR1cm4gKHVzZVBvdW5kID8gJyMnIDogJycpICsgciArIGcgKyBiO1xufTtcbmNvbnN0IGhleFRvUkdCQSA9IChoZXgsIGFscGhhID0gMSkgPT4ge1xuICAgIGNvbnN0IG51bSA9IGhleFswXSA9PT0gJyMnID8gcGFyc2VJbnQoaGV4LnNsaWNlKDEpLCAxNikgOiBwYXJzZUludChoZXgsIDE2KTtcbiAgICBjb25zdCByZWQgPSBudW0gPj4gMTY7XG4gICAgY29uc3QgZ3JlZW4gPSAobnVtID4+IDgpICYgMHgwMGZmO1xuICAgIGNvbnN0IGJsdWUgPSBudW0gJiAweDAwMDBmZjtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbn07XG5jb25zdCBzZXRUZXh0Q29sb3IgPSAodGV4dENvbG9yKSA9PiB7XG4gICAgY29uc3QgdGV4dENvbG9yU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHRleHRDb2xvclN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICoge1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIGNvbG9yOiAke3RleHRDb2xvcn0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5ib2xkLXVuZGVybGluZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7dGV4dENvbG9yfSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmJvbGQtdW5kZXJsaW5lOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke2NvbG9yU2hpZnQodGV4dENvbG9yLCAtMzApfSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLnNlY29uZGFyeS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICR7aGV4VG9SR0JBKHRleHRDb2xvciwgMC42KX0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5zZWNvbmRhcnktdGV4dC1hcnJvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtoZXhUb1JHQkEodGV4dENvbG9yLCAwLjYpfSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLnJlYWQtbW9yZSB7XG4gICAgICAgIGNvbG9yOiAke3RleHRDb2xvcn0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBgKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZXh0Q29sb3JTdHlsZSk7XG59O1xuZXhwb3J0cy5zZXRUZXh0Q29sb3IgPSBzZXRUZXh0Q29sb3I7XG5jb25zdCBzZXRCb3JkZXJDb2xvciA9IChib3JkZXJDb2xvcikgPT4ge1xuICAgIGNvbnN0IGJvcmRlckNvbG9yU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGJvcmRlckNvbG9yU3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxuICAgICAqIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke2JvcmRlckNvbG9yfSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGApKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGJvcmRlckNvbG9yU3R5bGUpO1xufTtcbmV4cG9ydHMuc2V0Qm9yZGVyQ29sb3IgPSBzZXRCb3JkZXJDb2xvcjtcbmNvbnN0IHNldEZvbnQgPSAoZm9udEZhbWlseSkgPT4ge1xuICAgIGNvbnN0IHdpZGdldFJvb3RVcmkgPSAoMCwgcm9vdFVyaV8xLmdldFdpZGdldFJvb3RVcmkpKCk7XG4gICAgY29uc3QgZm9udEZhbWlseU5vcm1hbGl6ZWRGb3JVcmwgPSBmb250RmFtaWx5LnJlcGxhY2UoL1xccy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgZm9udExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgZm9udExpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGZvbnRMaW5rLmhyZWYgPSBgJHt3aWRnZXRSb290VXJpfS9mb250cy8ke2ZvbnRGYW1pbHlOb3JtYWxpemVkRm9yVXJsfS5jc3NgO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZm9udExpbmspO1xuICAgIGNvbnN0IGNsZWFuRm9udE5hbWUgPSBmb250RmFtaWx5LnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgIGNvbnN0IGZvbnRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZm9udFN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAqIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGJvZHkge1xuICAgICAgZm9udC1mYW1pbHk6IFwiJHtjbGVhbkZvbnROYW1lfVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGApKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRTdHlsZSk7XG59O1xuZXhwb3J0cy5zZXRGb250ID0gc2V0Rm9udDtcbmNvbnN0IHNldEh0bWxMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBsYW5ndWFnZSk7XG59O1xuZXhwb3J0cy5zZXRIdG1sTGFuZ3VhZ2UgPSBzZXRIdG1sTGFuZ3VhZ2U7XG5jb25zdCBzYW5pdGl6ZUNvbG9yID0gKGNvbG9yKSA9PiB7XG4gICAgY29uc3QgaGV4UmVnRXhwID0gL14jKD86W1xcZGEtZkEtRl17M30pezEsMn0kLztcbiAgICByZXR1cm4gdHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBoZXhSZWdFeHAudGVzdChjb2xvcikgPyBjb2xvciA6IG51bGw7XG59O1xuZXhwb3J0cy5zYW5pdGl6ZUNvbG9yID0gc2FuaXRpemVDb2xvcjtcbmNvbnN0IGhhbmRsZVBvcG92ZXJQb3NpdGlvbiA9IChsYWJlbCwgcG9wb3ZlciwgY29udGFpbmVyLCBwb3BVcEFycm93KSA9PiB7XG4gICAgaWYgKCFwb3BvdmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9wb3ZlclJlY3QgPSBwb3BvdmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGFiZWxSZWN0ID0gbGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHBvcG92ZXJSZWN0LmxlZnQgPCBjb250YWluZXJSZWN0LmxlZnQpIHtcbiAgICAgICAgcG9wb3Zlci5zdHlsZS5sZWZ0ID0gYCR7Y29udGFpbmVyUmVjdC5sZWZ0IC0gbGFiZWxSZWN0LmxlZnR9cHhgO1xuICAgICAgICBwb3BvdmVyLnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICBjb25zdCBuZXdQb3B1cFJlY3QgPSBwb3BvdmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50TGVmdFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BVcEFycm93KS5sZWZ0O1xuICAgICAgICBwb3BVcEFycm93LnN0eWxlLmxlZnQgPSBgY2FsYygke2N1cnJlbnRMZWZ0VmFsdWV9ICsgJHtNYXRoLmZsb29yKHBvcG92ZXJSZWN0LmxlZnQgLSBuZXdQb3B1cFJlY3QubGVmdCl9cHgpYDtcbiAgICB9XG4gICAgZWxzZSBpZiAocG9wb3ZlclJlY3QucmlnaHQgPiBjb250YWluZXJSZWN0LnJpZ2h0KSB7XG4gICAgICAgIHBvcG92ZXIuc3R5bGUucmlnaHQgPSBgJHtsYWJlbFJlY3QucmlnaHQgLSBjb250YWluZXJSZWN0LnJpZ2h0fXB4YDtcbiAgICAgICAgcG9wb3Zlci5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgICBjb25zdCBuZXdQb3B1cFJlY3QgPSBwb3BvdmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50TGVmdFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BVcEFycm93KS5sZWZ0O1xuICAgICAgICBwb3BVcEFycm93LnN0eWxlLmxlZnQgPSBgY2FsYygke2N1cnJlbnRMZWZ0VmFsdWV9ICsgJHtNYXRoLmZsb29yKHBvcG92ZXJSZWN0LnJpZ2h0IC0gbmV3UG9wdXBSZWN0LnJpZ2h0KX1weClgO1xuICAgIH1cbn07XG5leHBvcnRzLmhhbmRsZVBvcG92ZXJQb3NpdGlvbiA9IGhhbmRsZVBvcG92ZXJQb3NpdGlvbjtcbmNvbnN0IHNvcnRBdHRyaWJ1dGVSYXRpbmdzID0gKGF0dHJpYnV0ZVJhdGluZ3NBcnJheSkgPT4ge1xuICAgIGNvbnN0IHNvcnRCeU5hbWUgPSAoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKTtcbiAgICBjb25zdCBzdGFyQXR0cmlidXRlcyA9IGF0dHJpYnV0ZVJhdGluZ3NBcnJheVxuICAgICAgICAuZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT09ICdyYW5nZV8xdG81JylcbiAgICAgICAgLnNvcnQoc29ydEJ5TmFtZSk7XG4gICAgY29uc3Qgc2NhbGVBdHRyaWJ1dGVzID0gYXR0cmlidXRlUmF0aW5nc0FycmF5LmZpbHRlcigoeCkgPT4geC50eXBlID09PSAnc2NhbGUnKS5zb3J0KHNvcnRCeU5hbWUpO1xuICAgIHJldHVybiBbLi4uc3RhckF0dHJpYnV0ZXMsIC4uLnNjYWxlQXR0cmlidXRlc107XG59O1xuZXhwb3J0cy5zb3J0QXR0cmlidXRlUmF0aW5ncyA9IHNvcnRBdHRyaWJ1dGVSYXRpbmdzO1xuY29uc3QgZ2V0VHJ1c3RwaWxvdEJ1c2luZXNzVW5pdElkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1aWQgPSAnI3tUcnVzdHBpbG90QnVzaW5lc3NVbml0SWR9JztcbiAgICByZXR1cm4gYnVpZC5pbmRleE9mKCcjJykgPT09IDAgPyAnNDZkNmE4OTAwMDAwNjQwMDA1MDBlMGMzJyA6IGJ1aWQ7XG59O1xuZXhwb3J0cy5nZXRUcnVzdHBpbG90QnVzaW5lc3NVbml0SWQgPSBnZXRUcnVzdHBpbG90QnVzaW5lc3NVbml0SWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3ZlRXJyb3JGYWxsYmFjayA9IGV4cG9ydHMuZXJyb3JGYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IGRvbV8xID0gcmVxdWlyZShcIi4uL2RvbVwiKTtcbmNvbnN0IHRlbXBsYXRpbmdfMSA9IHJlcXVpcmUoXCIuLi90ZW1wbGF0aW5nXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGVycm9yRmFsbGJhY2sgPSAoY29udGFpbmVyRWxlbWVudCA9ICd0cC13aWRnZXQtZmFsbGJhY2snKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyRWxlbWVudCk7XG4gICAgKDAsIGRvbV8xLnBvcHVsYXRlRWxlbWVudHMpKFtcbiAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudDogY29udGFpbmVyLFxuICAgICAgICAgICAgc3RyaW5nOiAoMCwgdGVtcGxhdGluZ18xLmEpKHtcbiAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20/dXRtX21lZGl1bT10cnVzdGJveGZhbGxiYWNrJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLFxuICAgICAgICAgICAgfSwgKDAsIHRlbXBsYXRpbmdfMS5ta0VsZW1XaXRoU3ZnTG9va3VwKSgnbG9nbycsICdmYWxsYmFjay1sb2dvJykpLFxuICAgICAgICB9LFxuICAgIF0pO1xufTtcbmV4cG9ydHMuZXJyb3JGYWxsYmFjayA9IGVycm9yRmFsbGJhY2s7XG5jb25zdCByZW1vdmVFcnJvckZhbGxiYWNrID0gKGNvbnRhaW5lckVsZW1lbnQgPSAndHAtd2lkZ2V0LWZhbGxiYWNrJykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lckVsZW1lbnQpO1xuICAgICgwLCB1dGlsc18xLnJlbW92ZUVsZW1lbnQpKGNvbnRhaW5lcik7XG59O1xuZXhwb3J0cy5yZW1vdmVFcnJvckZhbGxiYWNrID0gcmVtb3ZlRXJyb3JGYWxsYmFjaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy53aXRoTG9hZGVyID0gdm9pZCAwO1xuY29uc3QgZG9tXzEgPSByZXF1aXJlKFwiLi4vZG9tXCIpO1xuY29uc3QgdGVtcGxhdGluZ18xID0gcmVxdWlyZShcIi4uL3RlbXBsYXRpbmdcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgZGVmYXVsdExvYWRlckNvbnRhaW5lciA9ICd0cC13aWRnZXQtbG9hZGVyJztcbmNvbnN0IGFkZExvYWRlciA9IChsb2FkZXJFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9hZGVyRWxlbWVudCk7XG4gICAgKDAsIGRvbV8xLnBvcHVsYXRlRWxlbWVudHMpKFtcbiAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudDogbG9hZGVyLFxuICAgICAgICAgICAgc3RyaW5nOiAoMCwgdGVtcGxhdGluZ18xLm1rRWxlbVdpdGhTdmdMb29rdXApKCdsb2dvJyksXG4gICAgICAgIH0sXG4gICAgXSk7XG59O1xuY29uc3QgcmVtb3ZlTG9hZGVyID0gKGxvYWRlckVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2FkZXJFbGVtZW50KTtcbiAgICBjb25zdCBsb2FkZXJMb2FkZWRDbGFzcyA9IGAke2xvYWRlckVsZW1lbnR9LS1sb2FkZWRgO1xuICAgICgwLCBkb21fMS5hZGRDbGFzcykobG9hZGVyLCBsb2FkZXJMb2FkZWRDbGFzcyk7XG4gICAgaWYgKGxvYWRlcikge1xuICAgICAgICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4gKDAsIHV0aWxzXzEucmVtb3ZlRWxlbWVudCkobG9hZGVyKSk7XG4gICAgICAgIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRBbmltYXRpb25FbmQnLCAoKSA9PiAoMCwgdXRpbHNfMS5yZW1vdmVFbGVtZW50KShsb2FkZXIpKTtcbiAgICAgICAgbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ29hbmltYXRpb25lbmQnLCAoKSA9PiAoMCwgdXRpbHNfMS5yZW1vdmVFbGVtZW50KShsb2FkZXIpKTtcbiAgICB9XG59O1xuY29uc3Qgd2l0aExvYWRlciA9IChwcm9taXNlLCB7IGxvYWRlckVsZW1lbnQgPSBkZWZhdWx0TG9hZGVyQ29udGFpbmVyLCBkZWxheSA9IDEwMDAgfSA9IHt9KSA9PiB7XG4gICAgY29uc3QgbG9hZGVyVGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBhZGRMb2FkZXIobG9hZGVyRWxlbWVudCksIGRlbGF5KTtcbiAgICByZXR1cm4gcHJvbWlzZS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGxvYWRlclRpbWVvdXRJZCk7XG4gICAgICAgIHJlbW92ZUxvYWRlcihsb2FkZXJFbGVtZW50KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLndpdGhMb2FkZXIgPSB3aXRoTG9hZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJldmlld0ZldGNoZXIgPSBleHBvcnRzLmZldGNoU2VydmljZVJldmllTXVsdGlwbGVEYXRhID0gZXhwb3J0cy5mZXRjaFNlcnZpY2VSZXZpZXdEYXRhID0gZXhwb3J0cy5jb25zdHJ1Y3RUcnVzdEJveEFuZENvbXBsZXRlID0gZXhwb3J0cy5mZXRjaFByb2R1Y3RSZXZpZXcgPSBleHBvcnRzLmZldGNoUHJvZHVjdERhdGEgPSB2b2lkIDA7XG5jb25zdCBmZXRjaERhdGFfMSA9IHJlcXVpcmUoXCIuL2ZldGNoRGF0YVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNvbnN0cnVjdFRydXN0Qm94QW5kQ29tcGxldGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoRGF0YV8xLmNvbnN0cnVjdFRydXN0Qm94QW5kQ29tcGxldGU7IH0gfSk7XG5jb25zdCBwcm9kdWN0UmV2aWV3c18xID0gcmVxdWlyZShcIi4vcHJvZHVjdFJldmlld3NcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmZXRjaFByb2R1Y3REYXRhXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9kdWN0UmV2aWV3c18xLmZldGNoUHJvZHVjdERhdGE7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmZXRjaFByb2R1Y3RSZXZpZXdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb2R1Y3RSZXZpZXdzXzEuZmV0Y2hQcm9kdWN0UmV2aWV3OyB9IH0pO1xuY29uc3QgcmV2aWV3RmV0Y2hlcl8xID0gcmVxdWlyZShcIi4vcmV2aWV3RmV0Y2hlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJldmlld0ZldGNoZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJldmlld0ZldGNoZXJfMS5SZXZpZXdGZXRjaGVyOyB9IH0pO1xuY29uc3QgZmV0Y2hTZXJ2aWNlUmV2aWV3RGF0YSA9ICh0ZW1wbGF0ZUlkKSA9PiAoZmV0Y2hQYXJhbXMsIGNvbnN0cnVjdFRydXN0Qm94LCBwYXNzVG9Qb3B1cCkgPT4ge1xuICAgICgwLCBmZXRjaERhdGFfMS5mZXRjaERhdGEpKGAvdHJ1c3Rib3gtZGF0YS8ke3RlbXBsYXRlSWR9YCkoZmV0Y2hQYXJhbXMsIGNvbnN0cnVjdFRydXN0Qm94LCBwYXNzVG9Qb3B1cCwgZmV0Y2hEYXRhXzEuaGFzU2VydmljZVJldmlld3MpO1xufTtcbmV4cG9ydHMuZmV0Y2hTZXJ2aWNlUmV2aWV3RGF0YSA9IGZldGNoU2VydmljZVJldmlld0RhdGE7XG5jb25zdCBmZXRjaFNlcnZpY2VSZXZpZU11bHRpcGxlRGF0YSA9ICh0ZW1wbGF0ZUlkKSA9PiAoZmV0Y2hQYXJhbXMsIGNvbnN0cnVjdFRydXN0Qm94LCBwYXNzVG9Qb3B1cCkgPT4ge1xuICAgICgwLCBmZXRjaERhdGFfMS5tdWx0aUZldGNoRGF0YSkoYC90cnVzdGJveC1kYXRhLyR7dGVtcGxhdGVJZH1gKShmZXRjaFBhcmFtcywgY29uc3RydWN0VHJ1c3RCb3gsIHBhc3NUb1BvcHVwLCBmZXRjaERhdGFfMS5oYXNTZXJ2aWNlUmV2aWV3c011bHRpRmV0Y2gpO1xufTtcbmV4cG9ydHMuZmV0Y2hTZXJ2aWNlUmV2aWVNdWx0aXBsZURhdGEgPSBmZXRjaFNlcnZpY2VSZXZpZU11bHRpcGxlRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFByb2R1Y3RSZXZpZXcgPSBleHBvcnRzLmZldGNoUHJvZHVjdERhdGEgPSB2b2lkIDA7XG5jb25zdCBjYWxsXzEgPSByZXF1aXJlKFwiLi9jYWxsXCIpO1xuY29uc3QgZmV0Y2hEYXRhXzEgPSByZXF1aXJlKFwiLi9mZXRjaERhdGFcIik7XG5jb25zdCByZXZpZXdGZXRjaGVyXzEgPSByZXF1aXJlKFwiLi9yZXZpZXdGZXRjaGVyXCIpO1xuY29uc3QgZmV0Y2hQcm9kdWN0RGF0YSA9ICh0ZW1wbGF0ZUlkKSA9PiAoZmV0Y2hQYXJhbXMsIGNvbnN0cnVjdFRydXN0Qm94LCBwYXNzVG9Qb3B1cCA9IGZhbHNlLCBpbmNsdWRlSW1wb3J0ZWRSZXZpZXdzID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB3cmFwcGVkQ29uc3RydWN0ID0gKHsgYmFzZURhdGEsIGxvY2FsZSwgLi4uYXJncyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoZXIgPSBuZXcgcmV2aWV3RmV0Y2hlcl8xLlJldmlld0ZldGNoZXIoe1xuICAgICAgICAgICAgYmFzZURhdGEsXG4gICAgICAgICAgICBpbmNsdWRlSW1wb3J0ZWRSZXZpZXdzLFxuICAgICAgICAgICAgcmV2aWV3c1BlclBhZ2U6IHBhcnNlSW50KGZldGNoUGFyYW1zLnJldmlld3NQZXJQYWdlKSxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmV0Y2hlci5jb25zdW1lUmV2aWV3cyhjb25zdHJ1Y3RUcnVzdEJveCkoKTtcbiAgICB9O1xuICAgIGNvbnN0IGNvbnN0cnVjdCA9IGZldGNoUGFyYW1zLnJldmlld3NQZXJQYWdlID4gMCA/IHdyYXBwZWRDb25zdHJ1Y3QgOiBjb25zdHJ1Y3RUcnVzdEJveDtcbiAgICAoMCwgZmV0Y2hEYXRhXzEuZmV0Y2hEYXRhKShgL3RydXN0Ym94LWRhdGEvJHt0ZW1wbGF0ZUlkfWApKGZldGNoUGFyYW1zLCBjb25zdHJ1Y3QsIHBhc3NUb1BvcHVwLCBmZXRjaERhdGFfMS5oYXNQcm9kdWN0UmV2aWV3cyk7XG59O1xuZXhwb3J0cy5mZXRjaFByb2R1Y3REYXRhID0gZmV0Y2hQcm9kdWN0RGF0YTtcbmNvbnN0IGZldGNoUHJvZHVjdFJldmlldyA9IChwcm9kdWN0UmV2aWV3SWQsIGxvY2FsZSwgY2FsbGJhY2spID0+IHtcbiAgICAoMCwgY2FsbF8xLmFwaUNhbGwpKGAvcHJvZHVjdC1yZXZpZXdzLyR7cHJvZHVjdFJldmlld0lkfWAsIHsgbG9jYWxlIH0pLnRoZW4oY2FsbGJhY2spO1xufTtcbmV4cG9ydHMuZmV0Y2hQcm9kdWN0UmV2aWV3ID0gZmV0Y2hQcm9kdWN0UmV2aWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJldmlld0ZldGNoZXIgPSB2b2lkIDA7XG5jb25zdCBmbl8xID0gcmVxdWlyZShcIi4uLy4uL2ZuXCIpO1xuY29uc3QgY2FsbF8xID0gcmVxdWlyZShcIi4uL2NhbGxcIik7XG5jb25zdCByZXNwb25zZVByb2Nlc3Nvcl8xID0gcmVxdWlyZShcIi4vcmVzcG9uc2VQcm9jZXNzb3JcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuY29uc3QgTk9fUkVWSUVXU19FUlJPUiA9ICdObyByZXZpZXdzIGF2YWlsYWJsZSc7XG5jbGFzcyBSZXZpZXdGZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHJldmlld3NQZXJQYWdlLCBpbmNsdWRlSW1wb3J0ZWRSZXZpZXdzLCBiYXNlRGF0YSwgLi4ud3JhcEFyZ3MgfSkge1xuICAgICAgICBjb25zdCBnZXRCYXNlRGF0YU5leHRQYWdlTGlua3MgPSAoMCwgdXRpbF8xLmdldE5leHRQYWdlTGlua3MpKChyZXNwb25zZUtleSkgPT4gKDAsIGZuXzEucGlwZU1heWJlKSgoMCwgZm5fMS5wcm9wKShyZXNwb25zZUtleSksICgwLCBmbl8xLnByb3ApKCdsaW5rcycpLCAoMCwgZm5fMS5wcm9wKSgnbmV4dFBhZ2UnKSkpO1xuICAgICAgICB0aGlzLnJldmlld3NQZXJQYWdlID0gcmV2aWV3c1BlclBhZ2U7XG4gICAgICAgIHRoaXMuaW5jbHVkZUltcG9ydGVkUmV2aWV3cyA9IGluY2x1ZGVJbXBvcnRlZFJldmlld3M7XG4gICAgICAgIHRoaXMuYmFzZURhdGEgPSBiYXNlRGF0YTtcbiAgICAgICAgdGhpcy5uZXh0UGFnZSA9IGdldEJhc2VEYXRhTmV4dFBhZ2VMaW5rcyhiYXNlRGF0YSwgaW5jbHVkZUltcG9ydGVkUmV2aWV3cyk7XG4gICAgICAgIHRoaXMud3JhcEFyZ3MgPSB3cmFwQXJncztcbiAgICAgICAgdGhpcy5yZXZpZXdzID0gdGhpcy5fbWFrZVJlc3BvbnNlUHJvY2Vzc29yKGJhc2VEYXRhKS5nZXRSZXZpZXdzKCk7XG4gICAgfVxuICAgIGNvbnN1bWVSZXZpZXdzKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnByb2R1Y2VSZXZpZXdzKClcbiAgICAgICAgICAgIC50aGVuKChyZXZpZXdzKSA9PiBjYWxsYmFjayh7XG4gICAgICAgICAgICAuLi50aGlzLndyYXBBcmdzLFxuICAgICAgICAgICAgYmFzZURhdGE6IHRoaXMuYmFzZURhdGEsXG4gICAgICAgICAgICByZXZpZXdzLFxuICAgICAgICAgICAgaGFzTW9yZVJldmlld3M6IHRoaXMuaGFzTW9yZVJldmlld3MsXG4gICAgICAgICAgICBsb2FkTW9yZVJldmlld3M6IHRoaXMuY29uc3VtZVJldmlld3MuYmluZCh0aGlzKSxcbiAgICAgICAgfSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciA9PT0gTk9fUkVWSUVXU19FUlJPUikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMud3JhcEFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIGJhc2VEYXRhOiB0aGlzLmJhc2VEYXRhLFxuICAgICAgICAgICAgICAgICAgICByZXZpZXdzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgaGFzTW9yZVJldmlld3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZVJldmlld3M6IHRoaXMuY29uc3VtZVJldmlld3MuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb2R1Y2VSZXZpZXdzKCkge1xuICAgICAgICBjb25zdCBwcm9jZXNzUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzc29yID0gdGhpcy5fbWFrZVJlc3BvbnNlUHJvY2Vzc29yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UgPSByZXNwb25zZVByb2Nlc3Nvci5nZXROZXh0UGFnZUxpbmtzKCk7XG4gICAgICAgICAgICB0aGlzLnJldmlld3MucHVzaCguLi5yZXNwb25zZVByb2Nlc3Nvci5nZXRSZXZpZXdzKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rha2VSZXZpZXdzKCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnJldmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoTk9fUkVWSUVXU19FUlJPUik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmV2aWV3c1BlclBhZ2UgPj0gdGhpcy5yZXZpZXdzLmxlbmd0aFxuICAgICAgICAgICAgPyB0aGlzLl9mZXRjaFJldmlld3MoKS50aGVuKHByb2Nlc3NSZXNwb25zZSlcbiAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3Rha2VSZXZpZXdzKCkpO1xuICAgIH1cbiAgICBnZXQgaGFzTW9yZVJldmlld3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldmlld3MubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgX3Rha2VSZXZpZXdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXZpZXdzLnNwbGljZSgwLCB0aGlzLnJldmlld3NQZXJQYWdlKTtcbiAgICB9XG4gICAgX2ZldGNoUmV2aWV3cygpIHtcbiAgICAgICAgcmV0dXJuICgwLCBmbl8xLnByb21pc2VBbGxPYmplY3QpKCgwLCBmbl8xLm1hcE9iamVjdCkoY2FsbF8xLmFwaUNhbGwsIHRoaXMubmV4dFBhZ2UpKTtcbiAgICB9XG4gICAgX21ha2VSZXNwb25zZVByb2Nlc3NvcihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gbmV3IHJlc3BvbnNlUHJvY2Vzc29yXzEuUmV2aWV3UmVzcG9uc2VQcm9jZXNzb3IocmVzcG9uc2UsIHtcbiAgICAgICAgICAgIGluY2x1ZGVJbXBvcnRlZFJldmlld3M6IHRoaXMuaW5jbHVkZUltcG9ydGVkUmV2aWV3cyxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmJhc2VEYXRhLmJ1c2luZXNzRW50aXR5LmRpc3BsYXlOYW1lLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlJldmlld0ZldGNoZXIgPSBSZXZpZXdGZXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldE5leHRQYWdlTGlua3MgPSB2b2lkIDA7XG5jb25zdCBmbl8xID0gcmVxdWlyZShcIi4uLy4uL2ZuXCIpO1xuY29uc3QgZ2V0TmV4dFBhZ2VMaW5rcyA9IChnZXR0ZXIpID0+IChyZXNwb25zZSwgaW5jbHVkZUltcG9ydGVkUmV2aWV3cyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdFJldmlld3MgPSBnZXR0ZXIoJ3Byb2R1Y3RSZXZpZXdzJykocmVzcG9uc2UpO1xuICAgIGNvbnN0IGltcG9ydGVkUHJvZHVjdFJldmlld3MgPSAoMCwgZm5fMS5waXBlTWF5YmUpKCgwLCBmbl8xLmd1YXJkKShpbmNsdWRlSW1wb3J0ZWRSZXZpZXdzKSwgZ2V0dGVyKCdpbXBvcnRlZFByb2R1Y3RSZXZpZXdzJykpKHJlc3BvbnNlKTtcbiAgICByZXR1cm4gKDAsIGZuXzEucmVqZWN0TnVsbGFyeVZhbHVlcykoe1xuICAgICAgICBwcm9kdWN0UmV2aWV3cyxcbiAgICAgICAgaW1wb3J0ZWRQcm9kdWN0UmV2aWV3cyxcbiAgICB9KTtcbn07XG5leHBvcnRzLmdldE5leHRQYWdlTGlua3MgPSBnZXROZXh0UGFnZUxpbmtzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJldmlld1Jlc3BvbnNlUHJvY2Vzc29yID0gdm9pZCAwO1xuY29uc3QgZm5fMSA9IHJlcXVpcmUoXCIuLi8uLi9mblwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jbGFzcyBSZXZpZXdSZXNwb25zZVByb2Nlc3NvciB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UsIHsgaW5jbHVkZUltcG9ydGVkUmV2aWV3cywgZGlzcGxheU5hbWUgfSkge1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIHRoaXMuaW5jbHVkZUltcG9ydGVkUmV2aWV3cyA9IGluY2x1ZGVJbXBvcnRlZFJldmlld3M7XG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICB9XG4gICAgZ2V0UmV2aWV3cygpIHtcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0UmV2aWV3cywgaW1wb3J0ZWRQcm9kdWN0UmV2aWV3cyB9ID0gdGhpcy5yZXNwb25zZTtcbiAgICAgICAgY29uc3Qgb3JkZXJCeUNyZWF0ZWRBdERlc2MgPSAoeyBjcmVhdGVkQXQ6IGMxIH0sIHsgY3JlYXRlZEF0OiBjMiB9KSA9PiBuZXcgRGF0ZShjMikgLSBuZXcgRGF0ZShjMSk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RSZXZpZXdzTGlzdCA9ICgwLCBmbl8xLnBpcGVNYXliZSkoKDAsIGZuXzEucHJvcE1heWJlKSgncHJvZHVjdFJldmlld3MnKSwgKDAsIGZuXzEucHJvcE1heWJlKSgncmV2aWV3cycpKShwcm9kdWN0UmV2aWV3cykgfHwgW107XG4gICAgICAgIGNvbnN0IGltcG9ydGVkUmV2aWV3c0xpc3QgPSAoMCwgZm5fMS5waXBlTWF5YmUpKCgwLCBmbl8xLmd1YXJkKSh0aGlzLmluY2x1ZGVJbXBvcnRlZFJldmlld3MpLCAoMCwgZm5fMS5wcm9wTWF5YmUpKCdpbXBvcnRlZFByb2R1Y3RSZXZpZXdzJyksICgwLCBmbl8xLnByb3BNYXliZSkoJ3Byb2R1Y3RSZXZpZXdzJyksICgwLCBmbl8xLm1hcCkoKHJldmlldykgPT4gKHtcbiAgICAgICAgICAgIC4uLnJldmlldyxcbiAgICAgICAgICAgIHZlcmlmaWVkQnk6IHJldmlldy50eXBlID09PSAnRXh0ZXJuYWwnXG4gICAgICAgICAgICAgICAgPyByZXZpZXcuc291cmNlXG4gICAgICAgICAgICAgICAgICAgID8gcmV2aWV3LnNvdXJjZS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5kaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgIDogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSkpKShpbXBvcnRlZFByb2R1Y3RSZXZpZXdzKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIFsuLi5wcm9kdWN0UmV2aWV3c0xpc3QsIC4uLmltcG9ydGVkUmV2aWV3c0xpc3RdLnNvcnQob3JkZXJCeUNyZWF0ZWRBdERlc2MpO1xuICAgIH1cbiAgICBnZXROZXh0UGFnZUxpbmtzKCkge1xuICAgICAgICBjb25zdCBnZXRPbGRQYWdpbmF0aW9uTmV4dFBhZ2VMaW5rcyA9ICgwLCB1dGlsXzEuZ2V0TmV4dFBhZ2VMaW5rcykoKHJlc3BvbnNlS2V5KSA9PiAoMCwgZm5fMS5waXBlTWF5YmUpKCgwLCBmbl8xLnByb3ApKHJlc3BvbnNlS2V5KSwgKDAsIGZuXzEucHJvcCkoJ2xpbmtzJyksICgwLCBmbl8xLmZpbmQpKChsaW5rKSA9PiBsaW5rLnJlbCA9PT0gJ25leHQtcGFnZScpLCAoMCwgZm5fMS5wcm9wKSgnaHJlZicpKSk7XG4gICAgICAgIGNvbnN0IGdldE5ld1BhZ2luYXRpb25OZXh0UGFnZUxpbmtzID0gKDAsIHV0aWxfMS5nZXROZXh0UGFnZUxpbmtzKSgocmVzcG9uc2VLZXkpID0+ICgwLCBmbl8xLnBpcGVNYXliZSkoKDAsIGZuXzEucHJvcCkocmVzcG9uc2VLZXkpLCAoMCwgZm5fMS5wcm9wKShyZXNwb25zZUtleSksICgwLCBmbl8xLnByb3ApKCdsaW5rcycpLCAoMCwgZm5fMS5wcm9wKSgnbmV4dFBhZ2UnKSkpO1xuICAgICAgICBjb25zdCBuZXdMaW5rcyA9IGdldE5ld1BhZ2luYXRpb25OZXh0UGFnZUxpbmtzKHRoaXMucmVzcG9uc2UsIHRoaXMuaW5jbHVkZUltcG9ydGVkUmV2aWV3cyk7XG4gICAgICAgIGNvbnN0IG9sZExpbmtzID0gZ2V0T2xkUGFnaW5hdGlvbk5leHRQYWdlTGlua3ModGhpcy5yZXNwb25zZSwgdGhpcy5pbmNsdWRlSW1wb3J0ZWRSZXZpZXdzKTtcbiAgICAgICAgcmV0dXJuIHsgLi4ub2xkTGlua3MsIC4uLm5ld0xpbmtzIH07XG4gICAgfVxufVxuZXhwb3J0cy5SZXZpZXdSZXNwb25zZVByb2Nlc3NvciA9IFJldmlld1Jlc3BvbnNlUHJvY2Vzc29yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNDQUxFX0RJTUVOU0lPTlNfMTA1eDE5ID0gZXhwb3J0cy5TQ0FMRV9ESU1FTlNJT05TXzkweDE2ID0gZXhwb3J0cy5TQ0FMRV9ESU1FTlNJT05TXzgweDE1ID0gZXhwb3J0cy5zdmdNYXAgPSB2b2lkIDA7XG5jb25zdCB0cmFuc2xhdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi90cmFuc2xhdGlvbnNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3Qgc3ZnU3RhclN0eWxlID0gJ3N0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBsZWZ0OiAwOyB0b3A6IDA7XCInO1xuY29uc3Qgd3JhcFN2ZyA9IChkaW1lbnNpb25zLCBpbm5lciwgcHJvcHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHNhbml0aXplZFByb3BzID0gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICAgICAgYWNjW2N1cl0gPSAoMCwgdXRpbHNfMS5zYW5pdGl6ZUh0bWxQcm9wKShwcm9wc1tjdXJdKTtcbiAgICAgICAgaWYgKGN1ciA9PT0gJ2NvbG9yJykge1xuICAgICAgICAgICAgYWNjW2N1cl0gPSAoMCwgdXRpbHNfMS5zYW5pdGl6ZUNvbG9yKShhY2NbY3VyXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDA7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAwOyBwYWRkaW5nLWJvdHRvbTogJHsoZGltZW5zaW9ucy5oZWlnaHQgLyBkaW1lbnNpb25zLndpZHRoKSAqIDEwMH0lO1wiPlxuICAgICAgJHtpbm5lcihkaW1lbnNpb25zLCBzYW5pdGl6ZWRQcm9wcyl9XG4gICAgPC9kaXY+XG4gIGA7XG59O1xuY29uc3QgU0NBTEVfRElNRU5TSU9OU184MHgxNSA9ICc4MHgxNSc7XG5leHBvcnRzLlNDQUxFX0RJTUVOU0lPTlNfODB4MTUgPSBTQ0FMRV9ESU1FTlNJT05TXzgweDE1O1xuY29uc3QgU0NBTEVfRElNRU5TSU9OU185MHgxNiA9ICc5MHgxNic7XG5leHBvcnRzLlNDQUxFX0RJTUVOU0lPTlNfOTB4MTYgPSBTQ0FMRV9ESU1FTlNJT05TXzkweDE2O1xuY29uc3QgU0NBTEVfRElNRU5TSU9OU18xMDV4MTkgPSAnMTA1eDE5JztcbmV4cG9ydHMuU0NBTEVfRElNRU5TSU9OU18xMDV4MTkgPSBTQ0FMRV9ESU1FTlNJT05TXzEwNXgxOTtcbmNvbnN0IFNDQUxFX1NWR19QUk9QUyA9IHtcbiAgICAnODB4MTUnOiB7XG4gICAgICAgIGRpbWVuc2lvbnM6IHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDE1IH0sXG4gICAgICAgIGxpbmVzOiBbXG4gICAgICAgICAgICB7IHgxOiA4MCwgeTE6IDcuNSwgeDI6IDAsIHkyOiA3LjUgfSxcbiAgICAgICAgICAgIHsgeDE6IDAuNSwgeTE6IDMuNSwgeDI6IDAuNSwgeTI6IDExLjUgfSxcbiAgICAgICAgICAgIHsgeDE6IDIwLjUsIHkxOiA2LCB4MjogMjAuNSwgeTI6IDkgfSxcbiAgICAgICAgICAgIHsgeDE6IDQwLjUsIHkxOiA2LCB4MjogNDAuNSwgeTI6IDkgfSxcbiAgICAgICAgICAgIHsgeDE6IDYwLjUsIHkxOiA2LCB4MjogNjAuNSwgeTI6IDkgfSxcbiAgICAgICAgICAgIHsgeDE6IDgwLCB5MTogMy41LCB4MjogODAsIHkyOiAxMS41IH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICAgIHc6IDE0LFxuICAgICAgICAgICAgICAgIGg6IDE0LFxuICAgICAgICAgICAgICAgIHA6ICc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOS43NjEzIDYuMDI1OTRIMTMuNzIwNUwxMC41MzE2IDguMjkzMTZMOC41NTk2OCA5LjY4MzcyTDUuMzU1MzUgMTEuOTUwOUw2LjU3MjM4IDguMjkzMTZMMy4zNjgwNCA2LjAyNTk0SDcuMzI3MjRMOC41NDQyNyAyLjM2ODE2TDkuNzYxMyA2LjAyNTk0Wk0xMC43OTM1IDkuMTQwMTFMOC41NDQyOSA5LjY5OTM2TDExLjczMzIgMTEuOTgxN0wxMC43OTM1IDkuMTQwMTFaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDEzLjUsXG4gICAgICAgICAgICAgICAgdzogMTQsXG4gICAgICAgICAgICAgICAgaDogMTQsXG4gICAgICAgICAgICAgICAgcDogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMS43NjE1IDYuMDI2MDZIMjUuNzIwOEwyMi41MzE4IDguMjkzMjhMMjAuNTU5OSA5LjY4Mzg0TDE3LjM1NTYgMTEuOTUxMUwxOC41NzI2IDguMjkzMjhMMTUuMzY4MyA2LjAyNjA2SDE5LjMyNzVMMjAuNTQ0NSAyLjM2ODI5TDIxLjc2MTUgNi4wMjYwNlpNMjIuNzkzOCA5LjE0MDM0TDIwLjU0NDYgOS42OTk1OUwyMy43MzM1IDExLjk4MTlMMjIuNzkzOCA5LjE0MDM0WlwiIGZpbGw9XCJ3aGl0ZVwiLz4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiAxMy41LFxuICAgICAgICAgICAgICAgIHc6IDE0LFxuICAgICAgICAgICAgICAgIGg6IDE0LFxuICAgICAgICAgICAgICAgIHA6ICc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjEuNzYxNSA2LjAyNjA2SDI1LjcyMDhMMjIuNTMxOCA4LjI5MzI4TDIwLjU1OTkgOS42ODM4NEwxNy4zNTU2IDExLjk1MTFMMTguNTcyNiA4LjI5MzI4TDE1LjM2ODMgNi4wMjYwNkgxOS4zMjc1TDIwLjU0NDUgMi4zNjgyOUwyMS43NjE1IDYuMDI2MDZaTTIyLjc5MzggOS4xNDAzNEwyMC41NDQ2IDkuNjk5NTlMMjMuNzMzNSAxMS45ODE5TDIyLjc5MzggOS4xNDAzNFpcIiBmaWxsPVwid2hpdGVcIi8+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogMzMuNSxcbiAgICAgICAgICAgICAgICB3OiAxNCxcbiAgICAgICAgICAgICAgICBoOiAxNCxcbiAgICAgICAgICAgICAgICBwOiAnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQxLjc2MTUgNi4wMjYwNkg0NS43MjA4TDQyLjUzMTggOC4yOTMyOEw0MC41NTk5IDkuNjgzODRMMzcuMzU1NiAxMS45NTExTDM4LjU3MjYgOC4yOTMyOEwzNS4zNjgzIDYuMDI2MDZIMzkuMzI3NUw0MC41NDQ1IDIuMzY4MjlMNDEuNzYxNSA2LjAyNjA2Wk00Mi43OTM4IDkuMTQwMzRMNDAuNTQ0NiA5LjY5OTU5TDQzLjczMzUgMTEuOTgxOUw0Mi43OTM4IDkuMTQwMzRaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDY0LjUsXG4gICAgICAgICAgICAgICAgdzogMTQsXG4gICAgICAgICAgICAgICAgaDogMTQsXG4gICAgICAgICAgICAgICAgcDogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk03Mi43NjE1IDYuMDI2MDZINzYuNzIwOEw3My41MzE4IDguMjkzMjhMNzEuNTU5OSA5LjY4Mzg0TDY4LjM1NTYgMTEuOTUxMUw2OS41NzI2IDguMjkzMjhMNjYuMzY4MyA2LjAyNjA2SDcwLjMyNzVMNzEuNTQ0NSAyLjM2ODI5TDcyLjc2MTUgNi4wMjYwNlpNNzMuNzkzNSA5LjE0MDIyTDcxLjU0NDMgOS42OTk0N0w3NC43MzMyIDExLjk4MThMNzMuNzkzNSA5LjE0MDIyWlwiIGZpbGw9XCJ3aGl0ZVwiLz4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgICc5MHgxNic6IHtcbiAgICAgICAgZGltZW5zaW9uczogeyB3aWR0aDogOTAsIGhlaWdodDogMTYgfSxcbiAgICAgICAgbGluZXM6IFtcbiAgICAgICAgICAgIHsgeDE6IDkwLCB5MTogOC41LCB4MjogMCwgeTI6IDguNSB9LFxuICAgICAgICAgICAgeyB4MTogMC41LCB5MTogNSwgeDI6IDAuNSwgeTI6IDEyIH0sXG4gICAgICAgICAgICB7IHgxOiAyMy4yMTg1LCB5MTogNywgeDI6IDIzLjIxODUsIHkyOiAxMCB9LFxuICAgICAgICAgICAgeyB4MTogNDUuNSwgeTE6IDcsIHgyOiA0NS41LCB5MjogMTAgfSxcbiAgICAgICAgICAgIHsgeDE6IDY3Ljc4MTUsIHkxOiA3LCB4MjogNjcuNzgxNSwgeTI6IDEwIH0sXG4gICAgICAgICAgICB7IHgxOiA5MCwgeTE6IDUsIHgyOiA5MCwgeTI6IDEyIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogMS41LFxuICAgICAgICAgICAgICAgIHc6IDE1LFxuICAgICAgICAgICAgICAgIGg6IDE1LFxuICAgICAgICAgICAgICAgIHA6ICc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAuMzQ1NCA2LjQyNzY5SDE0LjU2ODVMMTEuMTY3IDguODQ2MDZMOS4wNjM2MyAxMC4zMjkzTDUuNjQ1NjcgMTIuNzQ3N0w2Ljk0Mzg0IDguODQ2MDZMMy41MjU4OCA2LjQyNzY5SDcuNzQ5MDNMOS4wNDcxOSAyLjUyNjA2TDEwLjM0NTQgNi40Mjc2OVpNMTEuNDQ2NCA5Ljc0OTQ4TDkuMDQ3MjcgMTAuMzQ2TDEyLjQ0ODggMTIuNzgwNUwxMS40NDY0IDkuNzQ5NDhaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDE1LjUsXG4gICAgICAgICAgICAgICAgdzogMTUsXG4gICAgICAgICAgICAgICAgaDogMTUsXG4gICAgICAgICAgICAgICAgcDogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yNC4zNDU2IDYuNDI3ODFIMjguNTY4OEwyNS4xNjcyIDguODQ2MThMMjMuMDYzOSAxMC4zMjk0TDE5LjY0NTkgMTIuNzQ3OEwyMC45NDQxIDguODQ2MThMMTcuNTI2MSA2LjQyNzgxSDIxLjc0OTNMMjMuMDQ3NCAyLjUyNjE4TDI0LjM0NTYgNi40Mjc4MVpNMjUuNDQ2NiA5Ljc0OTY3TDIzLjA0NzUgMTAuMzQ2MkwyNi40NDkgMTIuNzgwN0wyNS40NDY2IDkuNzQ5NjdaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDM3LjUsXG4gICAgICAgICAgICAgICAgdzogMTUsXG4gICAgICAgICAgICAgICAgaDogMTUsXG4gICAgICAgICAgICAgICAgcDogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00Ni4zNDU2IDYuNDI3ODFINTAuNTY4OEw0Ny4xNjcyIDguODQ2MThMNDUuMDYzOSAxMC4zMjk0TDQxLjY0NTkgMTIuNzQ3OEw0Mi45NDQxIDguODQ2MThMMzkuNTI2MSA2LjQyNzgxSDQzLjc0OTNMNDUuMDQ3NCAyLjUyNjE4TDQ2LjM0NTYgNi40Mjc4MVpNNDcuNDQ2NiA5Ljc0OTY3TDQ1LjA0NzUgMTAuMzQ2Mkw0OC40NDkgMTIuNzgwN0w0Ny40NDY2IDkuNzQ5NjdaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDYwLjUsXG4gICAgICAgICAgICAgICAgdzogMTUsXG4gICAgICAgICAgICAgICAgaDogMTUsXG4gICAgICAgICAgICAgICAgcDogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02OS4zNDU2IDYuNDI3ODFINzMuNTY4OEw3MC4xNjcyIDguODQ2MThMNjguMDYzOSAxMC4zMjk0TDY0LjY0NTkgMTIuNzQ3OEw2NS45NDQxIDguODQ2MThMNjIuNTI2MSA2LjQyNzgxSDY2Ljc0OTNMNjguMDQ3NCAyLjUyNjE4TDY5LjM0NTYgNi40Mjc4MVpNNzAuNDQ2NiA5Ljc0OTY3TDY4LjA0NzUgMTAuMzQ2Mkw3MS40NDkgMTIuNzgwN0w3MC40NDY2IDkuNzQ5NjdaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDczLjUsXG4gICAgICAgICAgICAgICAgdzogMTUsXG4gICAgICAgICAgICAgICAgaDogMTUsXG4gICAgICAgICAgICAgICAgcDogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04Mi4zNDU2IDYuNDI3ODFIODYuNTY4OEw4My4xNjcyIDguODQ2MThMODEuMDYzOSAxMC4zMjk0TDc3LjY0NTkgMTIuNzQ3OEw3OC45NDQxIDguODQ2MThMNzUuNTI2MSA2LjQyNzgxSDc5Ljc0OTNMODEuMDQ3NCAyLjUyNjE4TDgyLjM0NTYgNi40Mjc4MVpNODMuNDQ2NCA5Ljc0OTU3TDgxLjA0NzMgMTAuMzQ2MUw4NC40NDg4IDEyLjc4MDZMODMuNDQ2NCA5Ljc0OTU3WlwiIGZpbGw9XCJ3aGl0ZVwiLz4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgICcxMDV4MTknOiB7XG4gICAgICAgIGRpbWVuc2lvbnM6IHsgd2lkdGg6IDEwNSwgaGVpZ2h0OiAxOSB9LFxuICAgICAgICBsaW5lczogW1xuICAgICAgICAgICAgeyB4MTogMTA1LCB5MTogMTAsIHgyOiAwLCB5MjogMTAgfSxcbiAgICAgICAgICAgIHsgeDE6IDAuNSwgeTE6IDYsIHgyOiAwLjUsIHkyOiAxNC4zMTI1IH0sXG4gICAgICAgICAgICB7IHgxOiAyNi41LCB5MTogOCwgeDI6IDI2LjUsIHkyOiAxMiB9LFxuICAgICAgICAgICAgeyB4MTogNTIuNSwgeTE6IDgsIHgyOiA1Mi41LCB5MjogMTIgfSxcbiAgICAgICAgICAgIHsgeDE6IDc4LjUsIHkxOiA4LCB4MjogNzguNSwgeTI6IDEyIH0sXG4gICAgICAgICAgICB7IHgxOiAxMDUsIHkxOiA2LCB4MjogMTA1LCB5MjogMTQuMzEyNSB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGFyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgICB3OiAxOCxcbiAgICAgICAgICAgICAgICBoOiAxOSxcbiAgICAgICAgICAgICAgICBwOiAnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjA5NzYgNy42MzI4OEgxNy4xMTI2TDEzLjA3MzMgMTAuNTA0N0wxMC41NzU2IDEyLjI2NjFMNi41MTY3NiAxNS4xMzc5TDguMDU4MzQgMTAuNTA0N0wzLjk5OTUxIDcuNjMyODhIOS4wMTQ1TDEwLjU1NjEgMi45OTk2OUwxMi4wOTc2IDcuNjMyODhaTTEzLjQwNTEgMTEuNTc3NEwxMC41NTYxIDEyLjI4NThMMTQuNTk1NCAxNS4xNzY4TDEzLjQwNTEgMTEuNTc3NFpcIiBmaWxsPVwid2hpdGVcIi8+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogMTcuNTY4MixcbiAgICAgICAgICAgICAgICB3OiAxOCxcbiAgICAgICAgICAgICAgICBoOiAxOCxcbiAgICAgICAgICAgICAgICBwOiAnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI4LjE2NjEgNy42MzNIMzMuMTgxMUwyOS4xNDE4IDEwLjUwNDhMMjYuNjQ0MSAxMi4yNjYyTDIyLjU4NTIgMTUuMTM4TDI0LjEyNjggMTAuNTA0OEwyMC4wNjggNy42MzNIMjUuMDgzTDI2LjYyNDYgMi45OTk4MkwyOC4xNjYxIDcuNjMzWk0yOS40NzM2IDExLjU3NzdMMjYuNjI0NiAxMi4yODYxTDMwLjY2MzkgMTUuMTc3MUwyOS40NzM2IDExLjU3NzdaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDQzLjUsXG4gICAgICAgICAgICAgICAgdzogMTgsXG4gICAgICAgICAgICAgICAgaDogMTgsXG4gICAgICAgICAgICAgICAgcDogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01NC4wOTc5IDcuNjMzSDU5LjExMjlMNTUuMDczNiAxMC41MDQ4TDUyLjU3NTggMTIuMjY2Mkw0OC41MTcgMTUuMTM4TDUwLjA1ODYgMTAuNTA0OEw0NS45OTk4IDcuNjMzSDUxLjAxNDdMNTIuNTU2MyAyLjk5OTgyTDU0LjA5NzkgNy42MzNaTTU1LjQwNTQgMTEuNTc3N0w1Mi41NTY0IDEyLjI4NjFMNTYuNTk1NyAxNS4xNzcxTDU1LjQwNTQgMTEuNTc3N1pcIiBmaWxsPVwid2hpdGVcIi8+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogNjkuNzA0NixcbiAgICAgICAgICAgICAgICB3OiAxOCxcbiAgICAgICAgICAgICAgICBoOiAxOCxcbiAgICAgICAgICAgICAgICBwOiAnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTgwLjMwMjUgNy42MzNIODUuMzE3NUw4MS4yNzgyIDEwLjUwNDhMNzguNzgwNCAxMi4yNjYyTDc0LjcyMTYgMTUuMTM4TDc2LjI2MzIgMTAuNTA0OEw3Mi4yMDQzIDcuNjMzSDc3LjIxOTNMNzguNzYwOSAyLjk5OTgyTDgwLjMwMjUgNy42MzNaTTgxLjYxIDExLjU3NzdMNzguNzYxIDEyLjI4NjFMODIuODAwMyAxNS4xNzcxTDgxLjYxIDExLjU3NzdaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IDg1Ljc3MjcsXG4gICAgICAgICAgICAgICAgdzogMTgsXG4gICAgICAgICAgICAgICAgaDogMTgsXG4gICAgICAgICAgICAgICAgcDogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk05Ni4zNzA2IDcuNjMzSDEwMS4zODZMOTcuMzQ2MyAxMC41MDQ4TDk0Ljg0ODUgMTIuMjY2Mkw5MC43ODk3IDE1LjEzOEw5Mi4zMzEzIDEwLjUwNDhMODguMjcyNSA3LjYzM0g5My4yODc0TDk0LjgyOSAyLjk5OTgyTDk2LjM3MDYgNy42MzNaTTk3LjY3NzggMTEuNTc3Nkw5NC44Mjg5IDEyLjI4Nkw5OC44NjgyIDE1LjE3N0w5Ny42Nzc4IDExLjU3NzZaXCIgZmlsbD1cIndoaXRlXCIvPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuY29uc3QgY3JlYXRlU2NhbGVMaW5lcyA9IChkaW1lbnNpb25JZCwgY29sb3IpID0+IHtcbiAgICByZXR1cm4gU0NBTEVfU1ZHX1BST1BTW2RpbWVuc2lvbklkXS5saW5lcy5yZWR1Y2UoKGFjYywgeyB4MSwgeTEsIHgyLCB5MiB9KSA9PiBgJHthY2N9PGxpbmUgeDE9XCIke3gxfVwiIHkxPVwiJHt5MX1cIiB4Mj1cIiR7eDJ9XCIgeTI9XCIke3kyfVwiIHN0cm9rZT1cIiR7Y29sb3J9XCIvPmAsICcnKTtcbn07XG5jb25zdCBjcmVhdGVTY2FsZVN0YXIgPSAoZGltZW5zaW9uSWQsIHJhdGluZywgY29sb3IpID0+IHtcbiAgICBpZiAocmF0aW5nID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgeyB4LCB3LCBoLCBwIH0gPSBTQ0FMRV9TVkdfUFJPUFNbZGltZW5zaW9uSWRdLnN0YXJzW3JhdGluZyAtIDFdO1xuICAgIHJldHVybiBgXG4gICAgPHJlY3QgeD1cIiR7eH1cIiB5PVwiMC41XCIgd2lkdGg9XCIke3d9XCIgaGVpZ2h0PVwiJHtofVwiIGZpbGw9XCIke2NvbG9yfVwiIHN0cm9rZT1cIiR7Y29sb3J9XCIvPlxuICAgICR7cH1cbiAgYDtcbn07XG5jb25zdCBzY2FsZSA9IChkaW1lbnNpb25zLCB7IGRpbWVuc2lvbklkLCBjb2xvciwgcmF0aW5nIH0pID0+IGBcbiAgPHN2ZyByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbGxlZGJ5PVwic2NhbGVSYXRpbmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwICR7ZGltZW5zaW9ucy53aWR0aH0gJHtkaW1lbnNpb25zLmhlaWdodH1cIj5cbiAgICAgIDxnIGNsYXNzPVwidHAtc3RhcnNcIj5cbiAgICAgICAgJHtjcmVhdGVTY2FsZUxpbmVzKGRpbWVuc2lvbklkLCBjb2xvcil9XG4gICAgICAgICR7Y3JlYXRlU2NhbGVTdGFyKGRpbWVuc2lvbklkLCByYXRpbmcsIGNvbG9yKX1cbiAgICAgIDwvZz5cbiAgPC9zdmc+YDtcbmNvbnN0IGVtcHR5U3RhckNvbG9yID0gJyNkY2RjZTYnO1xuY29uc3Qgc3RhcnMgPSAoZGltZW5zaW9ucywgeyByYXRpbmcsIHRydXN0U2NvcmUsIGNvbG9yLCBsb2NhbGUgPSB0cmFuc2xhdGlvbnNfMS5kZWZhdWx0TG9jYWxlIH0pID0+IHtcbiAgICBjb25zdCB0aXRsZUlkID0gYHN0YXJSYXRpbmctJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMil9YDtcbiAgICBjb25zdCBpbnRlcnBvbGF0aW9ucyA9IHsgJ1tyYXRpbmdTdGFyc10nOiB0cnVzdFNjb3JlLCAnW3RvdGFsU3RhcnNdJzogNSB9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRTdGFyUmF0aW5nID0gKDAsIHRyYW5zbGF0aW9uc18xLmdldEZyYW1ld29ya1RyYW5zbGF0aW9uKSgnc3RhclJhdGluZycsIGxvY2FsZSwgaW50ZXJwb2xhdGlvbnMpO1xuICAgIGNvbnN0IGZvcm1hdHRlZExvY2FsZSA9ICgwLCB0cmFuc2xhdGlvbnNfMS5mb3JtYXRMb2NhbGUpKGxvY2FsZSk7XG4gICAgcmV0dXJuIGBcbiAgICA8c3ZnIHJvbGU9XCJpbWdcIiB2aWV3Qm94PVwiMCAwICR7ZGltZW5zaW9ucy53aWR0aH0gJHtkaW1lbnNpb25zLmhlaWdodH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgJHtzdmdTdGFyU3R5bGV9PlxuICAgICAgPHRpdGxlIGlkPVwiJHt0aXRsZUlkfVwiIGxhbmc9JHtmb3JtYXR0ZWRMb2NhbGV9PiR7dHJhbnNsYXRlZFN0YXJSYXRpbmd9PC90aXRsZT5cbiAgICAgIDxnIGNsYXNzPVwidHAtc3RhclwiPlxuICAgICAgICAgIDxwYXRoIGNsYXNzPVwidHAtc3Rhcl9fY2FudmFzXCIgZmlsbD1cIiR7cmF0aW5nID49IDEgJiYgY29sb3IgPyBjb2xvciA6IGVtcHR5U3RhckNvbG9yfVwiIGQ9XCJNMCA0Ni4zMzAwMDJoNDYuMzc1NTg2VjBIMHpcIi8+XG4gICAgICAgICAgPHBhdGggY2xhc3M9XCJ0cC1zdGFyX19zaGFwZVwiIGQ9XCJNMzkuNTMzOTM2IDE5LjcxMTQzM0wxMy4yMzAyMzkgMzguODAwNjVsMy44MzgyMTYtMTEuNzk3ODI3TDcuMDIxMTUgMTkuNzExNDMzaDEyLjQxODk3NWwzLjgzNzQxNy0xMS43OTg2MjQgMy44Mzc0MTggMTEuNzk4NjI0aDEyLjQxODk3NXpNMjMuMjc4NSAzMS41MTAwNzVsNy4xODM1OTUtMS41MDk1NzYgMi44NjIxMTQgOC44MDAxNTJMMjMuMjc4NSAzMS41MTAwNzV6XCIgZmlsbD1cIiNGRkZcIi8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzcz1cInRwLXN0YXJcIj5cbiAgICAgICAgICA8cGF0aCBjbGFzcz1cInRwLXN0YXJfX2NhbnZhc1wiIGZpbGw9XCIke3JhdGluZyA+PSAyICYmIGNvbG9yID8gY29sb3IgOiBlbXB0eVN0YXJDb2xvcn1cIiBkPVwiTTUxLjI0ODE2IDQ2LjMzMDAwMmg0Ni4zNzU1ODdWMEg1MS4yNDgxNjF6XCIvPlxuICAgICAgICAgIDxwYXRoIGNsYXNzPVwidHAtc3Rhcl9fY2FudmFzLS1oYWxmXCIgZmlsbD1cIiR7cmF0aW5nID49IDEuNSAmJiBjb2xvciA/IGNvbG9yIDogZW1wdHlTdGFyQ29sb3J9XCIgZD1cIk01MS4yNDgxNiA0Ni4zMzAwMDJoMjMuMTg3NzkzVjBINTEuMjQ4MTYxelwiLz5cbiAgICAgICAgICA8cGF0aCBjbGFzcz1cInRwLXN0YXJfX3NoYXBlXCIgZD1cIk03NC45OTA5NzggMzEuMzI5OTFMODEuMTUwOTA4IDMwIDg0IDM5bC05LjY2MDIwNi03LjIwMjc4Nkw2NC4zMDI3OSAzOWwzLjg5NTYzNi0xMS44NDA2NjZMNTggMTkuODQxNDY2aDEyLjYwNTU3N0w3NC40OTk1OTUgOGwzLjg5NTYzNyAxMS44NDE0NjZIOTFMNzQuOTkwOTc4IDMxLjMyOTkwOXpcIiBmaWxsPVwiI0ZGRlwiLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGNsYXNzPVwidHAtc3RhclwiPlxuICAgICAgICAgIDxwYXRoIGNsYXNzPVwidHAtc3Rhcl9fY2FudmFzXCIgZmlsbD1cIiR7cmF0aW5nID49IDMgJiYgY29sb3IgPyBjb2xvciA6IGVtcHR5U3RhckNvbG9yfVwiIGQ9XCJNMTAyLjUzMjIwOSA0Ni4zMzAwMDJoNDYuMzc1NTg2VjBoLTQ2LjM3NTU4NnpcIi8+XG4gICAgICAgICAgPHBhdGggY2xhc3M9XCJ0cC1zdGFyX19jYW52YXMtLWhhbGZcIiBmaWxsPVwiJHtyYXRpbmcgPj0gMi41ICYmIGNvbG9yID8gY29sb3IgOiBlbXB0eVN0YXJDb2xvcn1cIiBkPVwiTTEwMi41MzIyMDkgNDYuMzMwMDAyaDIzLjE4Nzc5M1YwaC0yMy4xODc3OTN6XCIvPlxuICAgICAgICAgIDxwYXRoIGNsYXNzPVwidHAtc3Rhcl9fc2hhcGVcIiBkPVwiTTE0Mi4wNjY5OTQgMTkuNzExNDMzTDExNS43NjMyOTggMzguODAwNjVsMy44MzgyMTUtMTEuNzk3ODI3LTEwLjA0NzMwNC03LjI5MTM5MWgxMi40MTg5NzVsMy44Mzc0MTgtMTEuNzk4NjI0IDMuODM3NDE3IDExLjc5ODYyNGgxMi40MTg5NzV6TTEyNS44MTE1NiAzMS41MTAwNzVsNy4xODM1OTUtMS41MDk1NzYgMi44NjIxMTMgOC44MDAxNTItMTAuMDQ1NzA4LTcuMjkwNTc2elwiIGZpbGw9XCIjRkZGXCIvPlxuICAgICAgPC9nPlxuICAgICAgPGcgY2xhc3M9XCJ0cC1zdGFyXCI+XG4gICAgICAgICAgPHBhdGggY2xhc3M9XCJ0cC1zdGFyX19jYW52YXNcIiBmaWxsPVwiJHtyYXRpbmcgPj0gNCAmJiBjb2xvciA/IGNvbG9yIDogZW1wdHlTdGFyQ29sb3J9XCIgZD1cIk0xNTMuODE1NDU4IDQ2LjMzMDAwMmg0Ni4zNzU1ODZWMGgtNDYuMzc1NTg2elwiLz5cbiAgICAgICAgICA8cGF0aCBjbGFzcz1cInRwLXN0YXJfX2NhbnZhcy0taGFsZlwiIGZpbGw9XCIke3JhdGluZyA+PSAzLjUgJiYgY29sb3IgPyBjb2xvciA6IGVtcHR5U3RhckNvbG9yfVwiIGQ9XCJNMTUzLjgxNTQ1OCA0Ni4zMzAwMDJoMjMuMTg3NzkzVjBoLTIzLjE4Nzc5M3pcIi8+XG4gICAgICAgICAgPHBhdGggY2xhc3M9XCJ0cC1zdGFyX19zaGFwZVwiIGQ9XCJNMTkzLjM0ODM1NSAxOS43MTE0MzNMMTY3LjA0NTQ1NyAzOC44MDA2NWwzLjgzNzQxNy0xMS43OTc4MjctMTAuMDQ3MzAzLTcuMjkxMzkxaDEyLjQxODk3NGwzLjgzNzQxOC0xMS43OTg2MjQgMy44Mzc0MTggMTEuNzk4NjI0aDEyLjQxODk3NHpNMTc3LjA5MjkyIDMxLjUxMDA3NWw3LjE4MzU5NS0xLjUwOTU3NiAyLjg2MjExNCA4LjgwMDE1Mi0xMC4wNDU3MDktNy4yOTA1NzZ6XCIgZmlsbD1cIiNGRkZcIi8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzcz1cInRwLXN0YXJcIj5cbiAgICAgICAgICA8cGF0aCBjbGFzcz1cInRwLXN0YXJfX2NhbnZhc1wiIGZpbGw9XCIke3JhdGluZyA9PT0gNSAmJiBjb2xvciA/IGNvbG9yIDogZW1wdHlTdGFyQ29sb3J9XCIgZD1cIk0yMDUuMDY0NDE2IDQ2LjMzMDAwMmg0Ni4zNzU1ODdWMGgtNDYuMzc1NTg3elwiLz5cbiAgICAgICAgICA8cGF0aCBjbGFzcz1cInRwLXN0YXJfX2NhbnZhcy0taGFsZlwiIGZpbGw9XCIke3JhdGluZyA+PSA0LjUgJiYgY29sb3IgPyBjb2xvciA6IGVtcHR5U3RhckNvbG9yfVwiIGQ9XCJNMjA1LjA2NDQxNiA0Ni4zMzAwMDJoMjMuMTg3NzkzVjBoLTIzLjE4Nzc5M3pcIi8+XG4gICAgICAgICAgPHBhdGggY2xhc3M9XCJ0cC1zdGFyX19zaGFwZVwiIGQ9XCJNMjQ0LjU5NzAyMiAxOS43MTE0MzNsLTI2LjMwMjkgMTkuMDg5MjE4IDMuODM3NDE5LTExLjc5NzgyNy0xMC4wNDczMDQtNy4yOTEzOTFoMTIuNDE4OTc0bDMuODM3NDE4LTExLjc5ODYyNCAzLjgzNzQxOCAxMS43OTg2MjRoMTIuNDE4OTc1em0tMTYuMjU1NDM2IDExLjc5ODY0Mmw3LjE4MzU5NS0xLjUwOTU3NiAyLjg2MjExNCA4LjgwMDE1Mi0xMC4wNDU3MDktNy4yOTA1NzZ6XCIgZmlsbD1cIiNGRkZcIi8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIGA7XG59O1xuY29uc3QgbG9nbyA9IChkaW1lbnNpb25zKSA9PiB7XG4gICAgY29uc3QgdGl0bGVJZCA9IGB0cnVzdHBpbG90TG9nby0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKX1gO1xuICAgIHJldHVybiBgXG4gICAgPHN2ZyByb2xlPVwiaW1nXCIgdmlld0JveD1cIjAgMCAke2RpbWVuc2lvbnMud2lkdGh9ICR7ZGltZW5zaW9ucy5oZWlnaHR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICR7c3ZnU3RhclN0eWxlfT5cbiAgICAgIDx0aXRsZSBpZD1cIiR7dGl0bGVJZH1cIj5UcnVzdHBpbG90PC90aXRsZT5cbiAgICAgIDxwYXRoIGNsYXNzPVwidHAtbG9nb19fdGV4dFwiIGQ9XCJNMzMuMDc0Nzc0IDExLjA3MDA1SDQ1LjgxODA2djIuMzY0MTk2aC01LjAxMDY1NnYxMy4yOTAzMTZoLTIuNzU1MzA2VjEzLjQzNDI0NmgtNC45ODg0MzVWMTEuMDcwMDVoLjAxMTExem0xMi4xOTg4OTIgNC4zMTk2MjloMi4zNTUzNDF2Mi4xODc0MzNoLjA0NDQ0Yy4wNzc3NzEtLjMwOTMzNC4yMjIyMDMtLjYwNzYyLjQzMzI5NS0uODk0ODU5LjIxMTA5Mi0uMjg3MjM5LjQ2NjYyNC0uNTYzNDMuNzY2NTk3LS43OTU0My4yOTk5NzItLjI0MzA0OC42MzMyNzYtLjQzMDg1OC45OTk5MDktLjU4NTUyNS4zNjY2MzMtLjE0MzYyLjc0NDM3Ny0uMjIwOTUzIDEuMTIyMTItLjIyMDk1My4yODg4NjMgMCAuNDk5OTU1LjAxMTA0Ny42MTEwNTYuMDIyMDk1LjExMTEuMDExMDQ4LjIyMjIwMi4wMzMxNDMuMzQ0NDEzLjA0NDE5djIuNDA4Mzg3Yy0uMTc3NzYyLS4wMzMxNDMtLjM1NTUyMy0uMDU1MjM4LS41NDQzOTUtLjA3NzMzMy0uMTg4ODcyLS4wMjIwOTYtLjM2NjYzMy0uMDMzMTQzLS41NDQzOTUtLjAzMzE0My0uNDIyMTg0IDAtLjgyMjE0OC4wODgzOC0xLjE5OTg5MS4yNTQwOTYtLjM3Nzc0NC4xNjU3MTQtLjY5OTkzNi40MTk4MS0uOTc3Njg5Ljc0MDE5Mi0uMjc3NzUzLjMzMTQyOS0uNDk5OTU1LjcyOTE0NC0uNjY2NjA2IDEuMjE1MjQtLjE2NjY1Mi40ODYwOTctLjI0NDQyMiAxLjAzODQ4LS4yNDQ0MjIgMS42NjgxOTV2NS4zOTEyNWgtMi41MTA4ODNWMTUuMzg5NjhoLjAxMTExem0xOC4yMjA1NjcgMTEuMzM0ODgzSDYxLjAyNzc5di0xLjU3OTgxM2gtLjA0NDQ0Yy0uMzExMDgzLjU3NDQ3Ny0uNzY2NTk3IDEuMDI3NDMtMS4zNzc2NTMgMS4zNjk5MDgtLjYxMTA1NS4zNDI0NzctMS4yMzMyMjEuNTE5MjQtMS44NjY0OTcuNTE5MjQtMS40OTk4NjQgMC0yLjU4ODY1NC0uMzY0NTczLTMuMjU1MjYtMS4xMDQ3NjUtLjY2NjYwNi0uNzQwMTkzLS45OTk5MDktMS44NTYwMDUtLjk5OTkwOS0zLjM0NzQzN1YxNS4zODk2OGgyLjUxMDg4M3Y2Ljk0ODk2OGMwIC45OTQyODguMTg4ODcyIDEuNzAxMzM3LjU3NzcyNSAyLjExMDEuMzc3NzQ0LjQwODc2My45MjIxMzkuNjE4NjY4IDEuNjEwOTY1LjYxODY2OC41MzMyODUgMCAuOTY2NTgtLjA3NzMzMyAxLjMyMjEwMi0uMjQzMDQ4LjM1NTUyNC0uMTY1NzE0LjY0NDM4Ni0uMzc1NjIuODU1NDc4LS42NTE4MS4yMjIyMDItLjI2NTE0NC4zNzc3NDQtLjU5NjU3NC40Nzc3MzUtLjk3MjE5NC4wOTk5OS0uMzc1NjIuMTQ0NDMxLS43ODQzODIuMTQ0NDMxLTEuMjI2Mjg4di02LjU3MzM0OWgyLjUxMDg4M3YxMS4zMjM4MzZ6bTQuMjc3MzktMy42MzQ2NzVjLjA3Nzc3LjcyOTE0NC4zNTU1MjIgMS4yMzczMzYuODMzMjU3IDEuNTM1NjIzLjQ4ODg0NC4yODcyMzggMS4wNjY1Ny40NDE5MDUgMS43NDQyODYuNDQxOTA1LjIzMzMxMiAwIC40OTk5NTQtLjAyMjA5NS43OTk5MjctLjA1NTIzOC4yOTk5NzMtLjAzMzE0My41ODg4MzYtLjExMDQ3Ni44NDQzNjgtLjIwOTkwNS4yNjY2NDItLjA5OTQyOS40Nzc3MzQtLjI1NDA5Ni42NTU0OTYtLjQ1Mjk1NC4xNjY2NTItLjE5ODg1Ny4yNDQ0MjItLjQ1Mjk1My4yMzMzMTItLjc3MzMzNS0uMDExMTEtLjMyMDM4MS0uMTMzMzIxLS41ODU1MjUtLjM1NTUyMy0uNzg0MzgyLS4yMjIyMDItLjIwOTkwNi0uNDk5OTU1LS4zNjQ1NzMtLjg0NDM2OC0uNDk3MTQ0LS4zNDQ0MTMtLjEyMTUyNS0uNzMzMjY3LS4yMzItMS4xNzc2Ny0uMzIwMzgyLS40NDQ0MDUtLjA4ODM4MS0uODg4ODA5LS4xODc4MS0xLjM0NDMyMy0uMjg3MjM5LS40NjY2MjQtLjA5OTQyOS0uOTIyMTM4LS4yMzItMS4zNTU0MzItLjM3NTYyLS40MzMyOTQtLjE0MzYyLS44MjIxNDgtLjM0MjQ3Ny0xLjE2NjU2MS0uNTk2NTczLS4zNDQ0MTMtLjI0MzA0OC0uNjIyMTY2LS41NjM0My0uODIyMTQ4LS45NTAwOTctLjIxMTA5Mi0uMzg2NjY4LS4zMTEwODMtLjg2MTcxNi0uMzExMDgzLTEuNDM2MTk0IDAtLjYxODY2OC4xNTU1NDItMS4xMjY4Ni40NTU1MTUtMS41NDY2Ny4yOTk5NzItLjQxOTgxLjY4ODgyNi0uNzUxMjQgMS4xNDQzNC0xLjAwNTMzNi40NjY2MjQtLjI1NDA5NS45Nzc2OS0uNDMwODU4IDEuNTQ0MzA0LS41NDEzMzQuNTY2NjE1LS4wOTk0MjkgMS4xMTEwMS0uMTU0NjY3IDEuNjIyMDc1LS4xNTQ2NjcuNTg4ODM2IDAgMS4xNTU0NS4wNjYyODYgMS42ODg3MzYuMTg3ODEuNTMzMjg1LjEyMTUyNCAxLjAyMjEzLjMyMDM4MSAxLjQ1NTQyMy42MDc2Mi40MzMyOTQuMjc2MTkxLjc4ODgxNy42NDA3NjQgMS4wNzc2OCAxLjA4MjY3LjI4ODg2My40NDE5MDUuNDY2NjI0Ljk4MzI0LjU0NDM5NSAxLjYxMjk1NWgtMi42MjE5ODRjLS4xMjIyMTEtLjU5NjU3Mi0uMzg4ODU0LTEuMDA1MzM1LS44MjIxNDgtMS4yMDQxOTMtLjQzMzI5NC0uMjA5OTA1LS45MzMyNDgtLjMwOTMzNC0xLjQ4ODc1My0uMzA5MzM0LS4xNzc3NjIgMC0uMzg4ODU0LjAxMTA0OC0uNjMzMjc2LjA0NDE5LS4yNDQ0MjIuMDMzMTQ0LS40NjY2MjQuMDg4MzgyLS42ODg4MjYuMTY1NzE1LS4yMTEwOTIuMDc3MzM0LS4zODg4NTQuMTk4ODU4LS41NDQzOTUuMzUzNTI1LS4xNDQ0MzIuMTU0NjY3LS4yMjIyMDMuMzUzNTI1LS4yMjIyMDMuNjA3NjIgMCAuMzA5MzM1LjExMTEwMS41NTIzODMuMzIyMTkzLjc0MDE5My4yMTEwOTIuMTg3ODEuNDg4ODQ1LjM0MjQ3Ny44MzMyNTguNDc1MDQ4LjM0NDQxMy4xMjE1MjQuNzMzMjY3LjIzMiAxLjE3NzY3MS4zMjAzODIuNDQ0NDA0LjA4ODM4MS44OTk5MTguMTg3ODEgMS4zNjY1NDIuMjg3MjM5LjQ1NTUxNS4wOTk0MjkuODk5OTE5LjIzMiAxLjM0NDMyMy4zNzU2Mi40NDQ0MDQuMTQzNjIuODMzMjU3LjM0MjQ3NyAxLjE3NzY3LjU5NjU3My4zNDQ0MTQuMjU0MDk1LjYyMjE2Ni41NjM0My44MzMyNTguOTM5MDUuMjExMDkyLjM3NTYyLjMyMjE5My44NTA2NjguMzIyMTkzIDEuNDAzMDUgMCAuNjczOTA2LS4xNTU1NDEgMS4yMzczMzYtLjQ2NjYyNCAxLjcxMjM4NS0uMzExMDgzLjQ2NDAwMS0uNzExMDQ3Ljg1MDY2OS0xLjE5OTg5MSAxLjEzNzkwNy0uNDg4ODQ1LjI4NzI0LTEuMDQ0MzUuNTA4MTkyLTEuNjQ0Mjk1LjY0MDc2NC0uNTk5OTQ2LjEzMjU3Mi0xLjE5OTg5MS4xOTg4NTctMS43ODg3MjcuMTk4ODU3LS43MjIxNTYgMC0xLjM4ODc2Mi0uMDc3MzMzLTEuOTk5ODE4LS4yNDMwNDgtLjYxMTA1Ni0uMTY1NzE0LTEuMTQ0MzQtLjQwODc2My0xLjU4ODc0NS0uNzI5MTQ0LS40NDQ0MDQtLjMzMTQzLS43OTk5MjctLjc0MDE5Mi0xLjA1NTQ2LTEuMjI2Mjg5LS4yNTU1MzItLjQ4NjA5Ni0uMzg4ODUzLTEuMDcxNjIxLS40MTEwNzMtMS43NDU1MjhoMi41MzMxMDN2LS4wMjIwOTV6bTguMjg4MTM1LTcuNzAwMjA4aDEuODk5ODI4di0zLjQwMjY3NWgyLjUxMDg4M3YzLjQwMjY3NWgyLjI2NjQ2djEuODY3MDUyaC0yLjI2NjQ2djYuMDU0MTA5YzAgLjI2NTE0My4wMTExMS40ODYwOTYuMDMzMzMuNjg0OTU0LjAyMjIyLjE4NzgxLjA3Nzc3LjM1MzUyNC4xNTU1NDIuNDg2MDk2LjA3Nzc3LjEzMjU3Mi4xOTk5ODEuMjMyLjM2NjYzMy4yOTgyODcuMTY2NjUxLjA2NjI4NS4zNzc3NDMuMDk5NDI4LjY2NjYwNi4wOTk0MjguMTc3NzYyIDAgLjM1NTUyMyAwIC41MzMyODUtLjAxMTA0Ny4xNzc3NjItLjAxMTA0OC4zNTU1MjMtLjAzMzE0My41MzMyODUtLjA3NzMzNHYxLjkzMzMzOGMtLjI3Nzc1My4wMzMxNDMtLjU1NTUwNS4wNTUyMzgtLjgxMTAzOC4wODgzODEtLjI2NjY0Mi4wMzMxNDMtLjUzMzI4NS4wNDQxOS0uODExMDM3LjA0NDE5LS42NjY2MDYgMC0xLjE5OTg5MS0uMDY2Mjg1LTEuNTk5ODU1LS4xODc4MS0uMzk5OTYzLS4xMjE1MjMtLjcyMjE1Ni0uMzA5MzMzLS45NDQzNTgtLjU1MjM4MS0uMjMzMzEzLS4yNDMwNDktLjM3Nzc0NC0uNTQxMzM1LS40NjY2MjUtLjkwNTkwNy0uMDc3NzctLjM2NDU3My0uMTMzMzItLjc4NDM4My0uMTQ0NDMxLTEuMjQ4Mzg0di02LjY4MzgyNWgtMS44OTk4Mjd2LTEuODg5MTQ3aC0uMDIyMjJ6bTguNDU0Nzg4IDBoMi4zNzc1NjJWMTYuOTI1M2guMDQ0NDRjLjM1NTUyMy0uNjYyODU4Ljg0NDM2OC0xLjEyNjg2IDEuNDc3NjQ0LTEuNDE0MDk4LjYzMzI3Ni0uMjg3MjM5IDEuMzEwOTkyLS40MzA4NTggMi4wNTUzNjktLjQzMDg1OC44OTk5MTggMCAxLjY3NzYyNS4xNTQ2NjcgMi4zNDQyMzEuNDc1MDQ4LjY2NjYwNi4zMDkzMzUgMS4yMjIxMTEuNzQwMTkzIDEuNjY2NTE1IDEuMjkyNTc1LjQ0NDQwNS41NTIzODIuNzY2NTk3IDEuMTkzMTQ1Ljk4ODggMS45MjIyOS4yMjIyMDIuNzI5MTQ1LjMzMzMwMyAxLjUxMzUyNy4zMzMzMDMgMi4zNDIxIDAgLjc2MjI4OC0uMDk5OTkxIDEuNTAyNDgtLjI5OTk3MyAyLjIwOTUzLS4xOTk5ODIuNzE4MDk2LS40OTk5NTUgMS4zNDc4MTItLjg5OTkxOCAxLjkwMDE5NC0uMzk5OTY0LjU1MjM4My0uOTExMDI5Ljk4MzI0LTEuNTMzMTk0IDEuMzE0NjctLjYyMjE2Ni4zMzE0My0xLjM0NDMyMy40OTcxNDQtMi4xODg2OS40OTcxNDQtLjM2NjYzNCAwLS43MzMyNjctLjAzMzE0My0xLjA5OTktLjA5OTQyOS0uMzY2NjM0LS4wNjYyODYtLjcyMjE1Ny0uMTc2NzYyLTEuMDU1NDYtLjMyMDM4MS0uMzMzMzAzLS4xNDM2Mi0uNjU1NDk2LS4zMzE0My0uOTMzMjQ5LS41NjM0My0uMjg4ODYzLS4yMzItLjUyMjE3NS0uNDk3MTQ0LS43MjIxNTctLjc5NTQzaC0uMDQ0NDR2NS42NTYzOTNoLTIuNTEwODgzVjE1LjM4OTY4em04Ljc3Njk4IDUuNjc4NDljMC0uNTA4MTkzLS4wNjY2Ni0xLjAwNTMzNy0uMTk5OTgxLTEuNDkxNDMzLS4xMzMzMjEtLjQ4NjA5Ni0uMzMzMzAzLS45MDU5MDctLjU5OTk0Ni0xLjI4MTUyNy0uMjY2NjQyLS4zNzU2Mi0uNTk5OTQ1LS42NzM5MDYtLjk4ODc5OS0uODk0ODU5LS4zOTk5NjMtLjIyMDk1My0uODU1NDc4LS4zNDI0NzctMS4zNjY1NDItLjM0MjQ3Ny0xLjA1NTQ2IDAtMS44NTUzODcuMzY0NTcyLTIuMzg4NjcyIDEuMDkzNzE3LS41MzMyODUuNzI5MTQ0LS43OTk5MjggMS43MDEzMzctLjc5OTkyOCAyLjkxNjU3OCAwIC41NzQ0NzguMDY2NjYxIDEuMTA0NzY0LjIxMTA5MiAxLjU5MDg2LjE0NDQzMi40ODYwOTcuMzQ0NDE0LjkwNTkwOC42MzMyNzYgMS4yNTk0MzIuMjc3NzUzLjM1MzUyNS42MTEwNTYuNjI5NzE2Ljk5OTkxLjgyODU3NC4zODg4NTMuMjA5OTA1Ljg0NDM2Ny4zMDkzMzQgMS4zNTU0MzIuMzA5MzM0LjU3NzcyNSAwIDEuMDU1NDYtLjEyMTUyNCAxLjQ1NTQyMy0uMzUzNTI1LjM5OTk2NC0uMjMyLjcyMjE1Ny0uNTQxMzM1Ljk3NzY5LS45MDU5MDcuMjU1NTMxLS4zNzU2Mi40NDQ0MDMtLjc5NTQzLjU1NTUwNC0xLjI3MDQ3OS4wOTk5OTEtLjQ3NTA0OS4xNTU1NDItLjk2MTE0NS4xNTU1NDItMS40NTgyODl6bTQuNDMyOTMxLTkuOTk4MTJoMi41MTA4ODN2Mi4zNjQxOTdoLTIuNTEwODgzVjExLjA3MDA1em0wIDQuMzE5NjNoMi41MTA4ODN2MTEuMzM0ODgzaC0yLjUxMDg4M1YxNS4zODk2Nzl6bTQuNzU1MTI0LTQuMzE5NjNoMi41MTA4ODN2MTUuNjU0NTEzaC0yLjUxMDg4M1YxMS4wNzAwNXptMTAuMjEwMTg0IDE1Ljk2Mzg0N2MtLjkxMTAyOSAwLTEuNzIyMDY2LS4xNTQ2NjctMi40MzMxMTMtLjQ1Mjk1My0uNzExMDQ2LS4yOTgyODctMS4zMTA5OTItLjcxODA5Ny0xLjgxMDk0Ni0xLjIzNzMzNy0uNDg4ODQ1LS41MzAyODctLjg2NjU4OC0xLjE2MDAwMi0xLjEyMjEyLTEuODg5MTQ3LS4yNTU1MzMtLjcyOTE0NC0uMzg4ODU0LTEuNTM1NjIyLS4zODg4NTQtMi40MDgzODYgMC0uODYxNzE2LjEzMzMyMS0xLjY1NzE0Ny4zODg4NTMtMi4zODYyOTEuMjU1NTMzLS43MjkxNDUuNjMzMjc2LTEuMzU4ODYgMS4xMjIxMi0xLjg4OTE0OC40ODg4NDUtLjUzMDI4NyAxLjA5OTktLjkzOTA1IDEuODEwOTQ3LTEuMjM3MzM2LjcxMTA0Ny0uMjk4Mjg2IDEuNTIyMDg0LS40NTI5NTMgMi40MzMxMTMtLjQ1Mjk1My45MTEwMjggMCAxLjcyMjA2Ni4xNTQ2NjcgMi40MzMxMTIuNDUyOTUzLjcxMTA0Ny4yOTgyODcgMS4zMTA5OTIuNzE4MDk3IDEuODEwOTQ3IDEuMjM3MzM2LjQ4ODg0NC41MzAyODcuODY2NTg4IDEuMTYwMDAzIDEuMTIyMTIgMS44ODkxNDguMjU1NTMyLjcyOTE0NC4zODg4NTQgMS41MjQ1NzUuMzg4ODU0IDIuMzg2MjkgMCAuODcyNzY1LS4xMzMzMjIgMS42NzkyNDMtLjM4ODg1NCAyLjQwODM4Ny0uMjU1NTMyLjcyOTE0NS0uNjMzMjc2IDEuMzU4ODYtMS4xMjIxMiAxLjg4OTE0Ny0uNDg4ODQ1LjUzMDI4Ny0xLjA5OTkuOTM5MDUtMS44MTA5NDcgMS4yMzczMzctLjcxMTA0Ni4yOTgyODYtMS41MjIwODQuNDUyOTUzLTIuNDMzMTEyLjQ1Mjk1M3ptMC0xLjk3NzUyOGMuNTU1NTA1IDAgMS4wNDQzNS0uMTIxNTI0IDEuNDU1NDIzLS4zNTM1MjUuNDExMDc0LS4yMzIuNzQ0Mzc3LS41NDEzMzUgMS4wMTEwMi0uOTE2OTU0LjI2NjY0Mi0uMzc1NjIuNDU1NTEzLS44MDY0NzguNTg4ODM1LTEuMjgxNTI3LjEyMjIxLS40NzUwNDkuMTg4ODcyLS45NjExNDUuMTg4ODcyLTEuNDU4MjkgMC0uNDg2MDk2LS4wNjY2NjEtLjk2MTE0NC0uMTg4ODcyLTEuNDQ3MjQtLjEyMjIxMS0uNDg2MDk3LS4zMjIxOTMtLjkwNTkwNy0uNTg4ODM2LTEuMjgxNTI3LS4yNjY2NDItLjM3NTYyLS41OTk5NDUtLjY3MzkwNy0xLjAxMTAxOS0uOTA1OTA3LS40MTEwNzQtLjIzMi0uODk5OTE4LS4zNTM1MjUtMS40NTU0MjMtLjM1MzUyNS0uNTU1NTA1IDAtMS4wNDQzNS4xMjE1MjQtMS40NTU0MjQuMzUzNTI1LS40MTEwNzMuMjMyLS43NDQzNzYuNTQxMzM0LTEuMDExMDE5LjkwNTkwNy0uMjY2NjQyLjM3NTYyLS40NTU1MTQuNzk1NDMtLjU4ODgzNSAxLjI4MTUyNi0uMTIyMjExLjQ4NjA5Ny0uMTg4ODcyLjk2MTE0NS0uMTg4ODcyIDEuNDQ3MjQyIDAgLjQ5NzE0NC4wNjY2Ni45ODMyNC4xODg4NzIgMS40NTgyODkuMTIyMjEuNDc1MDQ5LjMyMjE5My45MDU5MDcuNTg4ODM1IDEuMjgxNTI3LjI2NjY0My4zNzU2Mi41OTk5NDYuNjg0OTU0IDEuMDExMDIuOTE2OTU0LjQxMTA3My4yNDMwNDguODk5OTE4LjM1MzUyNSAxLjQ1NTQyMy4zNTM1MjV6bTYuNDg4My05LjY2NjY5aDEuODk5ODI3di0zLjQwMjY3NGgyLjUxMDg4M3YzLjQwMjY3NWgyLjI2NjQ2djEuODY3MDUyaC0yLjI2NjQ2djYuMDU0MTA5YzAgLjI2NTE0My4wMTExMS40ODYwOTYuMDMzMzMuNjg0OTU0LjAyMjIyLjE4NzgxLjA3Nzc3LjM1MzUyNC4xNTU1NDEuNDg2MDk2LjA3Nzc3MS4xMzI1NzIuMTk5OTgyLjIzMi4zNjY2MzQuMjk4Mjg3LjE2NjY1MS4wNjYyODUuMzc3NzQzLjA5OTQyOC42NjY2MDYuMDk5NDI4LjE3Nzc2MiAwIC4zNTU1MjMgMCAuNTMzMjg1LS4wMTEwNDcuMTc3NzYyLS4wMTEwNDguMzU1NTIzLS4wMzMxNDMuNTMzMjg1LS4wNzczMzR2MS45MzMzMzhjLS4yNzc3NTMuMDMzMTQzLS41NTU1MDUuMDU1MjM4LS44MTEwMzguMDg4MzgxLS4yNjY2NDIuMDMzMTQzLS41MzMyODUuMDQ0MTktLjgxMTAzNy4wNDQxOS0uNjY2NjA2IDAtMS4xOTk4OTEtLjA2NjI4NS0xLjU5OTg1NS0uMTg3ODEtLjM5OTk2My0uMTIxNTIzLS43MjIxNTYtLjMwOTMzMy0uOTQ0MzU4LS41NTIzODEtLjIzMzMxMy0uMjQzMDQ5LS4zNzc3NDQtLjU0MTMzNS0uNDY2NjI1LS45MDU5MDctLjA3Nzc3LS4zNjQ1NzMtLjEzMzMyMS0uNzg0MzgzLS4xNDQ0MzEtMS4yNDgzODR2LTYuNjgzODI1aC0xLjg5OTgyN3YtMS44ODkxNDdoLS4wMjIyMnpcIiBmaWxsPVwiIzE5MTkxOVwiLz5cbiAgICAgIDxwYXRoIGNsYXNzPVwidHAtbG9nb19fc3RhclwiIGZpbGw9XCIjMDBCNjdBXCIgZD1cIk0zMC4xNDE3MDcgMTEuMDcwMDVIMTguNjMxNjRMMTUuMDc2NDA4LjE3NzA3MWwtMy41NjYzNDIgMTAuODkyOTc3TDAgMTEuMDU5MDAybDkuMzIxMzc2IDYuNzM5MDYzLTMuNTY2MzQzIDEwLjg4MTkzIDkuMzIxMzc1LTYuNzI4MDE2IDkuMzEwMjY2IDYuNzI4MDE2LTMuNTU1MjMzLTEwLjg4MTkzIDkuMzEwMjY2LTYuNzI4MDE2elwiLz5cbiAgICAgIDxwYXRoIGNsYXNzPVwidHAtbG9nb19fc3Rhci1ub3RjaFwiIGZpbGw9XCIjMDA1MTI4XCIgZD1cIk0yMS42MzEzNjkgMjAuMjYxNjlsLS43OTk5MjgtMi40NjM2MjUtNS43NTUwMzMgNC4xNTM5MTR6XCIvPlxuICAgIDwvc3ZnPlxuICBgO1xufTtcbmNvbnN0IGFycm93U2xpZGVyID0gKGRpbWVuc2lvbnMpID0+IGBcbiAgPHN2ZyB2aWV3Qm94PVwiMCAwICR7ZGltZW5zaW9ucy53aWR0aH0gJHtkaW1lbnNpb25zLmhlaWdodH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgJHtzdmdTdGFyU3R5bGV9PlxuICAgICAgPGNpcmNsZSBjbGFzcz1cImFycm93LXNsaWRlci1jaXJjbGVcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMS41XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjOEM4QzhDXCIvPlxuICAgICAgPHBhdGggY2xhc3M9XCJhcnJvdy1zbGlkZXItc2hhcGVcIiBmaWxsPVwiIzhDOEM4Q1wiIGQ9XCJNMTAuNTA4ODgzNSAxMmwzLjMwODA1ODItMy4wMjQ1MTA0MWMuMjQ0MDc3Ny0uMjIzMTU2NzQuMjQ0MDc3Ny0uNTg0OTY1MyAwLS44MDgxMjIwNC0uMjQ0MDc3Ni0uMjIzMTU2NzMtLjYzOTgwNTgtLjIyMzE1NjczLS44ODM4ODM0IDBMOS4xODMwNTgyNiAxMS41OTU5MzljLS4yNDQwNzc2OC4yMjMxNTY3LS4yNDQwNzc2OC41ODQ5NjUzIDAgLjgwODEyMmwzLjc1MDAwMDA0IDMuNDI4NTcxNGMuMjQ0MDc3Ni4yMjMxNTY4LjYzOTgwNTguMjIzMTU2OC44ODM4ODM0IDAgLjI0NDA3NzctLjIyMzE1NjcuMjQ0MDc3Ny0uNTg0OTY1MyAwLS44MDgxMjJMMTAuNTA4ODgzNSAxMnpcIi8+XG4gIDwvc3ZnPlxuYDtcbmNvbnN0IGFycm93U2xpZGVyQ2lyY2xlID0gKGRpbWVuc2lvbnMpID0+IGBcbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJHtkaW1lbnNpb25zLndpZHRofVwiIGhlaWdodD1cIiR7ZGltZW5zaW9ucy5oZWlnaHR9XCIgdmlld0JveD1cIjAgMCAke2RpbWVuc2lvbnMud2lkdGh9ICR7ZGltZW5zaW9ucy5oZWlnaHR9XCIgZmlsbD1cIm5vbmVcIj5cbjxwYXRoIGQ9XCJNNi42NTMxMSA5LjY2MjUzTDQuMzM3OSA3LjM0NzMyTDExLjE1NjMgNy4zNDczMlY2LjQ3MjMyTDQuMzM3MDQgNi40NzIzMkw2LjY1MzExIDQuMTU2MjVMNi4wMzQzOSAzLjUzNzUzTDIuNjYyNTMgNi45MDkzOUw2LjAzNDM5IDEwLjI4MTJMNi42NTMxMSA5LjY2MjUzWlwiIGZpbGw9XCIjMjA1Q0Q0XCIvPlxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcgMEMzLjEzNDAxIDAgMCAzLjEzNDAxIDAgN0MwIDEwLjg2NiAzLjEzNDAxIDE0IDcgMTRDMTAuODY2IDE0IDE0IDEwLjg2NiAxNCA3QzE0IDMuMTM0MDEgMTAuODY2IDAgNyAwWk0wLjg3NSA3QzAuODc1IDMuNjE3MjYgMy42MTcyNiAwLjg3NSA3IDAuODc1QzEwLjM4MjcgMC44NzUgMTMuMTI1IDMuNjE3MjYgMTMuMTI1IDdDMTMuMTI1IDEwLjM4MjcgMTAuMzgyNyAxMy4xMjUgNyAxMy4xMjVDMy42MTcyNiAxMy4xMjUgMC44NzUgMTAuMzgyNyAwLjg3NSA3WlwiIGZpbGw9XCIjMjA1Q0Q0XCIvPlxuPC9zdmc+XG5gO1xuY29uc3QgcmVwbHlBcnJvdyA9IChkaW1lbnNpb25zLCB7IGVsZW1lbnRDb2xvciB9KSA9PiBgXG48c3ZnIHZpZXdCb3g9XCIwIDAgJHtkaW1lbnNpb25zLndpZHRofSAke2RpbWVuc2lvbnMuaGVpZ2h0fVwiIHhtbG5zPeKAnGh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3Zn4oCcICR7c3ZnU3RhclN0eWxlfT5cbiAgPHBhdGggZD1cIk01LjI0MDQwNTI2IDguNjA3NzA2NDVjMCAuNDAyNzUwMDctLjI1NTc2Mzg3LjUxMzAwMDA4LS41NzAwMzA5Mi4yNDgyNTAwNEwuMjM2MTMzOCA0Ljk4NTIwNTgzQy4wODcxODQxIDQuODY5ODYzNzUgMCA0LjY5MjA4Njc3IDAgNC41MDM3MDU3NXMuMDg3MTg0MS0uMzY2MTU4LjIzNjEzMzgtLjQ4MTUwMDA4TDQuNjcwMzc0MzQuMTQ0NzA1MDFjLjMxNTAxNzA5LS4yNjYyNTAwNC41NzAwMzA5Mi0uMTU0NTAwMDMuNTcwMDMwOTIuMjQ4MjUwMDRWMi45OTkyMDU1aC43NTAwNDA2OWMyLjg2NTE1NTQxIDAgNS4zMTU1MzgzMyAyLjM3NDUwMDQgNS45MTI1NzA3MiA0LjkzOTUwMDgzYTQuMzM4NTM0OCA0LjMzODUzNDggMCAwIDEgLjA5Mzc1NTA4LjU3ODI1MDFjLjAyMjUwMTIzLjIwMDI1MDA0LS4wNzUwMDQwNi4yNDQ1MDAwNC0uMjE4MjYxODQuMTAzNTAwMDIgMCAwLS4wNDA1MDIyLS4wMzYtLjA3NTAwNDA2LS4wNzUwMDAwMUMxMC4xODY3MzY5OSA3LjAwNzY2Mzk4IDguMTQ2NTU1NzkgNi4wOTcyNzY2NiA1Ljk4ODk0NTg2IDUuOTk1NDU2aC0uNzUwMDQwNjhsLjAwMTUwMDA4IDIuNjEyMjUwNDV6XCIgZmlsbD1cIiR7ZWxlbWVudENvbG9yIHx8ICcjMDBCNjdBJ31cIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPlxuPC9zdmc+XG5gO1xuY29uc3QgdmVyaWZpZWRSZXZpZXcgPSAoZGltZW5zaW9ucykgPT4gYDxzdmcgdmlld0JveD1cIjAgMCAke2RpbWVuc2lvbnMud2lkdGh9ICR7ZGltZW5zaW9ucy5oZWlnaHR9XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgJHtzdmdTdGFyU3R5bGV9PlxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcgMTRDMTAuODY2IDE0IDE0IDEwLjg2NiAxNCA3QzE0IDMuMTM0MDEgMTAuODY2IDAgNyAwQzMuMTM0MDEgMCAwIDMuMTM0MDEgMCA3QzAgMTAuODY2IDMuMTM0MDEgMTQgNyAxNFpNNi4wOTIxNyA3LjgxNDAxTDkuMjAzMTEgNC43MDMxQzkuNDQ4NzQgNC40NTc1NyA5Ljg0Njg4IDQuNDU3NTcgMTAuMDkyMyA0LjcwMzFDMTAuMzM4IDQuOTQ4NjQgMTAuMzM4IDUuMzQ2NzMgMTAuMDkyMyA1LjU5MjI2TDYuNjIwMDkgOS4wNjQ0OEM2LjU5NTczIDkuMTAyODMgNi41NjY4MiA5LjEzOTEyIDYuNTMzMzMgOS4xNzI1NkM2LjI4Nzg3IDkuNDE4MjEgNS44ODk2NSA5LjQxODIxIDUuNjQ0MDIgOS4xNzI1NkwzLjcwNTkgNy4xMTAzMUMzLjQ2MDQ2IDYuODY0NjQgMy40NjA0NiA2LjQ2NjY5IDMuNzA1OSA2LjIyMTAyQzMuOTUxNTQgNS45NzU0OCA0LjM0OTY4IDUuOTc1NDggNC41OTUxMiA2LjIyMTAyTDYuMDkyMTcgNy44MTQwMVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuPC9zdmc+XG5gO1xuY29uc3QgdmVyaWZpZWRSZXZpZXdGbGV4ID0gKGRpbWVuc2lvbnMpID0+IGA8c3ZnIHZpZXdCb3g9XCIwIDAgJHtkaW1lbnNpb25zLndpZHRofSAke2RpbWVuc2lvbnMuaGVpZ2h0fVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICR7c3ZnU3RhclN0eWxlfT5cbjxnIGlkPVwiSWNvbiAvIEZ1bmN0aW9uYWwgLyBjaGVjay1jaXJjbGVcIiBjbGlwLXBhdGg9XCJ1cmwoI2NsaXAwXzIwMjJfMTk3NilcIj5cbjxnIGlkPVwiaWNvblwiPlxuPHBhdGggZD1cIk01LjM0IDkuMTcwNTRMOS41NDI1MiA0Ljc2NzlMOSA0LjI1MDA1TDUuMzI3NTIgOC4wOTc0MUwzLjUzNjQyIDYuMzA2MzFMMy4wMDYwOSA2LjgzNjY0TDUuMzQgOS4xNzA1NFpcIiBmaWxsPVwiIzFDMUMxQ1wiLz5cbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjc1NzM2IDIuMjU3MzZDLTAuNTg1Nzg3IDQuNjAwNTEgLTAuNTg1Nzg3IDguMzk5NSAxLjc1NzM2IDEwLjc0MjZDNC4xMDA1MSAxMy4wODU4IDcuODk5NSAxMy4wODU4IDEwLjI0MjYgMTAuNzQyNkMxMi41ODU4IDguMzk5NSAxMi41ODU4IDQuNjAwNTEgMTAuMjQyNiAyLjI1NzM2QzcuODk5NSAtMC4wODU3ODY2IDQuMTAwNTEgLTAuMDg1Nzg2NiAxLjc1NzM2IDIuMjU3MzZaTTIuMjg3NjkgMTAuMjEyM0MwLjIzNzQzNyA4LjE2MjA2IDAuMjM3NDM3IDQuODM3OTQgMi4yODc2OSAyLjc4NzY5QzQuMzM3OTQgMC43Mzc0MzcgNy42NjIwNiAwLjczNzQzNyA5LjcxMjMxIDIuNzg3NjlDMTEuNzYyNiA0LjgzNzk0IDExLjc2MjYgOC4xNjIwNiA5LjcxMjMxIDEwLjIxMjNDNy42NjIwNiAxMi4yNjI2IDQuMzM3OTQgMTIuMjYyNiAyLjI4NzY5IDEwLjIxMjNaXCIgZmlsbD1cIiMxQzFDMUNcIi8+XG48L2c+XG48L2c+XG48ZGVmcz5cbjxjbGlwUGF0aCBpZD1cImNsaXAwXzIwMjJfMTk3NlwiPlxuPHJlY3Qgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIndoaXRlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMC41KVwiLz5cbjwvY2xpcFBhdGg+XG48L2RlZnM+XG48L3N2Zz5cbmA7XG5jb25zdCBpbnZpdGVkUmV2aWV3ID0gKGRpbWVuc2lvbnMpID0+IGA8c3ZnIHZpZXdCb3g9XCIwIDAgJHtkaW1lbnNpb25zLndpZHRofSAke2RpbWVuc2lvbnMuaGVpZ2h0fVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICR7c3ZnU3RhclN0eWxlfT5cbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk03IDE0QzEwLjg2NiAxNCAxNCAxMC44NjYgMTQgN0MxNCAzLjEzNDAxIDEwLjg2NiAwIDcgMEMzLjEzNDAxIDAgMCAzLjEzNDAxIDAgN0MwIDEwLjg2NiAzLjEzNDAxIDE0IDcgMTRaTTYuMDkyMTcgNy44MTQwMUw5LjIwMzExIDQuNzAzMUM5LjQ0ODc0IDQuNDU3NTcgOS44NDY4OCA0LjQ1NzU3IDEwLjA5MjMgNC43MDMxQzEwLjMzOCA0Ljk0ODY0IDEwLjMzOCA1LjM0NjczIDEwLjA5MjMgNS41OTIyNkw2LjYyMDA5IDkuMDY0NDhDNi41OTU3MyA5LjEwMjgzIDYuNTY2ODIgOS4xMzkxMiA2LjUzMzMzIDkuMTcyNTZDNi4yODc4NyA5LjQxODIxIDUuODg5NjUgOS40MTgyMSA1LjY0NDAyIDkuMTcyNTZMMy43MDU5IDcuMTEwMzFDMy40NjA0NiA2Ljg2NDY0IDMuNDYwNDYgNi40NjY2OSAzLjcwNTkgNi4yMjEwMkMzLjk1MTU0IDUuOTc1NDggNC4zNDk2OCA1Ljk3NTQ4IDQuNTk1MTIgNi4yMjEwMkw2LjA5MjE3IDcuODE0MDFaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbjwvc3ZnPlxuYDtcbmNvbnN0IHJlZGlyZWN0ZWRSZXZpZXcgPSAoZGltZW5zaW9ucykgPT4gYDxzdmcgdmlld0JveD1cIjAgMCAke2RpbWVuc2lvbnMud2lkdGh9ICR7ZGltZW5zaW9ucy5oZWlnaHR9XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgJHtzdmdTdGFyU3R5bGV9PlxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEzLjcwNTYgNC4wNzIyN0wxMC42OTE1IDEuMDQ3MDZDMTAuMjk4NiAwLjY1MjE2IDkuNjYwOTMgMC42NTExNTIgOS4yNjcwNCAxLjA0MzAzQzguODcyMTQgMS40MzU5MSA4Ljg3MTEzIDIuMDc0NiA5LjI2NDAyIDIuNDY3NDlMMTAuNTY1NiAzLjc3NTA5TDMuNDI0MTUgMy43NjYwMkgzLjQxNDA3QzEuOTYyNDIgMy43NjYwMiAxLjE1NzUxIDQuNDAxNjkgMC43Mzg0MjkgNC45MzU2MUMwLjI1NTg4NyA1LjU1MDEyIDAuMDAxMDE1NyA2LjM4ODI3IDguMzAzMWUtMDYgNy4zNjA0MUMtMC4wMDMwMTM4OCA4LjkxNDgyIDAuODE5MDIxIDExLjgxNTEgMi40MDI2NSAxMS44MTYxSDIuNDAzNjVDMi45NTk3NCAxMS44MTYxIDMuNDExMDUgMTEuMzY2OCAzLjQxMjA2IDEwLjgxMDdDMy40MTIwNiAxMC4zNjQ1IDMuMTIyOTMgOS45ODQ2NyAyLjcyMDk4IDkuODUwNjlDMi4zNTQyOSA5LjQwMDM4IDEuNzI1NjggNy42MDIxOCAyLjE1MjgxIDYuNDg5MDFDMi4yODY4IDYuMTQwNDUgMi41NDI2OCA1Ljc4MDgxIDMuNDE0MDcgNS43ODA4MUgzLjQyMDEyTDEwLjU1ODUgNS43ODk4OEw5LjI1NDk1IDcuMDg3NEM4Ljg2MDA1IDcuNDgwMjkgOC44NTkwNSA4LjExODk4IDkuMjUxOTMgOC41MTE4NkM5LjQ0ODM3IDguNzA5MzEgOS43MDcyNyA4LjgwOTA0IDkuOTY2MTcgOC44MDkwNEMxMC4yMjMxIDguODA5MDQgMTAuNDc5OSA4LjcxMDMyIDEwLjY3NjQgOC41MTU4OUwxMy43MDQ2IDUuNDk4NzRIMTMuNzA1NkMxNC4xMTE2IDUuMDgzNjkgMTQuMDg0NCA0LjQ1MjA2IDEzLjcwNTYgNC4wNzIyN1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuPC9zdmc+XG5gO1xuY29uc3Qgc3RhcnNEaW1lbnNpb25zID0geyB3aWR0aDogMjUxLCBoZWlnaHQ6IDQ2IH07XG5jb25zdCBsb2dvRGltZW5zaW9ucyA9IHsgd2lkdGg6IDEyNiwgaGVpZ2h0OiAzMSB9O1xuY29uc3QgYXJyb3dTbGlkZXJEaW1lbnNpb25zID0geyB3aWR0aDogMjQsIGhlaWdodDogMjQgfTtcbmNvbnN0IGFycm93U2xpZGVyQ2lyY2xlRGltZW5zaW9ucyA9IHsgd2lkdGg6IDE0LCBoZWlnaHQ6IDE0IH07XG5jb25zdCByZXBseUFycm93RGltZW5zaW9ucyA9IHsgd2lkdGg6IDEyLCBoZWlnaHQ6IDkgfTtcbmNvbnN0IHZlcmlmaWVkUmV2aWV3RGltZW5zaW9ucyA9IHsgd2lkdGg6IDE0LCBoZWlnaHQ6IDE0IH07XG5jb25zdCBpbnZpdGVkUmV2aWV3RGltZW5zaW9ucyA9IHsgd2lkdGg6IDE0LCBoZWlnaHQ6IDE0IH07XG5jb25zdCByZWRpcmVjdGVkUmV2aWV3RGltZW5zaW9ucyA9IHsgd2lkdGg6IDE0LCBoZWlnaHQ6IDEyIH07XG5jb25zdCBzdmdNYXAgPSB7XG4gICAgc2NhbGU6IChwcm9wcykgPT4gd3JhcFN2ZyhTQ0FMRV9TVkdfUFJPUFNbcHJvcHMuZGltZW5zaW9uSWRdLmRpbWVuc2lvbnMsIHNjYWxlLCBwcm9wcyksXG4gICAgc3RhcnM6IChwcm9wcykgPT4gd3JhcFN2ZyhzdGFyc0RpbWVuc2lvbnMsIHN0YXJzLCBwcm9wcyksXG4gICAgbG9nbzogKCkgPT4gd3JhcFN2Zyhsb2dvRGltZW5zaW9ucywgbG9nbyksXG4gICAgYXJyb3dTbGlkZXI6ICgpID0+IHdyYXBTdmcoYXJyb3dTbGlkZXJEaW1lbnNpb25zLCBhcnJvd1NsaWRlciksXG4gICAgYXJyb3dTbGlkZXJDaXJjbGU6ICgpID0+IHdyYXBTdmcoYXJyb3dTbGlkZXJDaXJjbGVEaW1lbnNpb25zLCBhcnJvd1NsaWRlckNpcmNsZSksXG4gICAgcmVwbHlBcnJvdzogKHByb3BzKSA9PiB3cmFwU3ZnKHJlcGx5QXJyb3dEaW1lbnNpb25zLCByZXBseUFycm93LCBwcm9wcyksXG4gICAgdmVyaWZpZWRSZXZpZXc6IChwcm9wcykgPT4gd3JhcFN2Zyh2ZXJpZmllZFJldmlld0RpbWVuc2lvbnMsIHZlcmlmaWVkUmV2aWV3LCBwcm9wcyksXG4gICAgdmVyaWZpZWRSZXZpZXdGbGV4OiAocHJvcHMpID0+IHdyYXBTdmcodmVyaWZpZWRSZXZpZXdEaW1lbnNpb25zLCB2ZXJpZmllZFJldmlld0ZsZXgsIHByb3BzKSxcbiAgICBpbnZpdGVkUmV2aWV3OiAocHJvcHMpID0+IHdyYXBTdmcoaW52aXRlZFJldmlld0RpbWVuc2lvbnMsIGludml0ZWRSZXZpZXcsIHByb3BzKSxcbiAgICByZWRpcmVjdGVkUmV2aWV3OiAocHJvcHMpID0+IHdyYXBTdmcocmVkaXJlY3RlZFJldmlld0RpbWVuc2lvbnMsIHJlZGlyZWN0ZWRSZXZpZXcsIHByb3BzKSxcbn07XG5leHBvcnRzLnN2Z01hcCA9IHN2Z01hcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRGcmFtZXdvcmtUcmFuc2xhdGlvbiA9IGV4cG9ydHMuZm9ybWF0TG9jYWxlID0gZXhwb3J0cy5kZWZhdWx0TG9jYWxlID0gdm9pZCAwO1xuY29uc3QgbG9jYWxpemF0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsaXphdGlvblwiKSk7XG5jb25zdCBkZWZhdWx0TG9jYWxlID0gJ2VuLVVTJztcbmV4cG9ydHMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG5jb25zdCBMT0NBTEVfRElWSURFUiA9ICctJztcbmNvbnN0IGxhbmd1YWdlVG9Db3VudHJ5TWFwID0ge1xuICAgIGRhOiAnREsnLFxuICAgIGVuOiAnVVMnLFxuICAgIGphOiAnSlAnLFxuICAgIG5iOiAnTk8nLFxuICAgIHN2OiAnU0UnLFxufTtcbmNvbnN0IHRyeUdldENvdW50cnlGb3JMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xuICAgIGNvbnN0IGNvdW50cnkgPSBsYW5ndWFnZVRvQ291bnRyeU1hcFtsYW5ndWFnZV0gfHwgbGFuZ3VhZ2U7XG4gICAgcmV0dXJuIGNvdW50cnk7XG59O1xuY29uc3QgZm9ybWF0TG9jYWxlID0gKGxvY2FsZSkgPT4ge1xuICAgIGlmICghbG9jYWxlKVxuICAgICAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbiAgICBjb25zdCBsb2NhbGVQYXJ0cyA9IGxvY2FsZS5zcGxpdChMT0NBTEVfRElWSURFUik7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBsb2NhbGVQYXJ0c1swXTtcbiAgICBsZXQgY291bnRyeSA9IGxvY2FsZVBhcnRzWzFdO1xuICAgIGlmICghY291bnRyeSkge1xuICAgICAgICBjb3VudHJ5ID0gdHJ5R2V0Q291bnRyeUZvckxhbmd1YWdlKGxhbmd1YWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhbmd1YWdlICYmIGNvdW50cnlcbiAgICAgICAgPyBgJHtsYW5ndWFnZX0ke0xPQ0FMRV9ESVZJREVSfSR7Y291bnRyeS50b1VwcGVyQ2FzZSgpfWBcbiAgICAgICAgOiBkZWZhdWx0TG9jYWxlO1xufTtcbmV4cG9ydHMuZm9ybWF0TG9jYWxlID0gZm9ybWF0TG9jYWxlO1xuY29uc3QgbG9va3VwVHJhbnNsYXRpb24gPSAoa2V5UGFydHMsIHRyYW5zbGF0aW9uVGFibGUpID0+IHtcbiAgICByZXR1cm4ga2V5UGFydHMucmVkdWNlKChhLCBiKSA9PiBhW2JdLCB0cmFuc2xhdGlvblRhYmxlKTtcbn07XG5jb25zdCBnZXRSYXdUcmFuc2xhdGlvbldpdGhGYWxsYmFjayA9IChrZXksIHRyYW5zbGF0aW9uVGFibGUpID0+IHtcbiAgICBjb25zdCBrZXlQYXJ0cyA9IGtleS5zcGxpdCgnLicpO1xuICAgIHJldHVybiAobG9va3VwVHJhbnNsYXRpb24oa2V5UGFydHMsIHRyYW5zbGF0aW9uVGFibGUpIHx8XG4gICAgICAgIGxvb2t1cFRyYW5zbGF0aW9uKGtleVBhcnRzLCBsb2NhbGl6YXRpb25fMS5kZWZhdWx0W2RlZmF1bHRMb2NhbGVdKSk7XG59O1xuY29uc3QgZ2V0RnJhbWV3b3JrVHJhbnNsYXRpb24gPSAoa2V5LCBsb2NhbGUgPSBkZWZhdWx0TG9jYWxlLCBpbnRlcnBvbGF0aW9ucyA9IHt9LCBsaW5rcyA9IFtdKSA9PiB7XG4gICAgY29uc3QgdHJhbnNsYXRpb25UYWJsZSA9IGxvY2FsaXphdGlvbl8xLmRlZmF1bHRbZm9ybWF0TG9jYWxlKGxvY2FsZSldIHx8IGxvY2FsaXphdGlvbl8xLmRlZmF1bHRbZGVmYXVsdExvY2FsZV07XG4gICAgY29uc3QgcmF3VHJhbnNsYXRpb24gPSBnZXRSYXdUcmFuc2xhdGlvbldpdGhGYWxsYmFjayhrZXksIHRyYW5zbGF0aW9uVGFibGUpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gT2JqZWN0LmtleXMoaW50ZXJwb2xhdGlvbnMpLnJlZHVjZSgodmFsdWUsIGtleSkgPT4gdmFsdWUucmVwbGFjZShrZXksIGludGVycG9sYXRpb25zW2tleV0pLCByYXdUcmFuc2xhdGlvbik7XG4gICAgY29uc3QgdHJhbnNsYXRpb25XaXRoTGlua3NSZXBsYWNlZCA9IGxpbmtzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHByZXZpb3VzLnJlcGxhY2UoJ1tMSU5LLUVORF0nLCAnPC9hPicpLnJlcGxhY2UoJ1tMSU5LLUJFR0lOXScsIGN1cnJlbnQpLCB0cmFuc2xhdGlvbik7XG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uV2l0aExpbmtzUmVwbGFjZWQ7XG59O1xuZXhwb3J0cy5nZXRGcmFtZXdvcmtUcmFuc2xhdGlvbiA9IGdldEZyYW1ld29ya1RyYW5zbGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJldmlld0Rpc2NsYWltZXIgPSB2b2lkIDA7XG5jb25zdCBzdXBwb3J0XzEgPSByZXF1aXJlKFwiLi4vc3VwcG9ydFwiKTtcbmNvbnN0IHRlbXBsYXRpbmdfMSA9IHJlcXVpcmUoXCIuLi90ZW1wbGF0aW5nXCIpO1xuY29uc3QgdHJhbnNsYXRpb25zXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNsYXRpb25zXCIpO1xuY2xhc3MgUmV2aWV3RGlzY2xhaW1lciB7XG4gICAgY29uc3RydWN0b3Iocm9vdCwgbG9jYWxlID0gJ2VuLVVTJywgY2xhc3NOYW1lID0gJycpIHtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jvb3QgZWxlbWVudCBpcyByZXF1aXJlZCBmb3IgUmV2aWV3RGlzY2xhaW1lcicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgZ2V0IHJldmlld0Rpc2NsYWltZXJUZXh0KCkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRMb2NhbGUgPSAoMCwgdHJhbnNsYXRpb25zXzEuZm9ybWF0TG9jYWxlKSh0aGlzLmxvY2FsZSk7XG4gICAgICAgIHJldHVybiAoMCwgdHJhbnNsYXRpb25zXzEuZ2V0RnJhbWV3b3JrVHJhbnNsYXRpb24pKGByZXZpZXdEaXNjbGFpbWVyLmJvZHlgLCBmb3JtYXR0ZWRMb2NhbGUpO1xuICAgIH1cbiAgICBnZXQgcmV2aWV3RGlzY2xhaW1lckxpbmsoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZExvY2FsZSA9ICgwLCB0cmFuc2xhdGlvbnNfMS5mb3JtYXRMb2NhbGUpKHRoaXMubG9jYWxlKTtcbiAgICAgICAgcmV0dXJuICgwLCBzdXBwb3J0XzEuZ2V0UmV2aWV3RGlzY2xhaW1lckxpbmspKGZvcm1hdHRlZExvY2FsZSk7XG4gICAgfVxuICAgIGdldCByZXZpZXdEaXNjbGFpbWVyRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZExvY2FsZSA9ICgwLCB0cmFuc2xhdGlvbnNfMS5mb3JtYXRMb2NhbGUpKHRoaXMubG9jYWxlKTtcbiAgICAgICAgcmV0dXJuICgwLCB0cmFuc2xhdGlvbnNfMS5nZXRGcmFtZXdvcmtUcmFuc2xhdGlvbikoYHJldmlld0Rpc2NsYWltZXIuZGVzY3JpcHRpb25gLCBmb3JtYXR0ZWRMb2NhbGUpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSAndHAtd2lkZ2V0LXJldmlldy1kaXNjbGFpbWVyX19kZXNjcmlwdGlvbic7XG4gICAgICAgIGNvbnN0IGFuY2hvciA9ICgwLCB0ZW1wbGF0aW5nXzEuYSkoe1xuICAgICAgICAgICAgaHJlZjogdGhpcy5yZXZpZXdEaXNjbGFpbWVyTGluayxcbiAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgICByZWw6ICdub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93JyxcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgID8gYHRwLXdpZGdldC1yZXZpZXctZGlzY2xhaW1lcl9fbGluayAke3RoaXMuY2xhc3NOYW1lfWBcbiAgICAgICAgICAgICAgICA6ICd0cC13aWRnZXQtcmV2aWV3LWRpc2NsYWltZXJfX2xpbmsnLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMucmV2aWV3RGlzY2xhaW1lclRleHQsXG4gICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGRlc2NyaXB0aW9uSWQsXG4gICAgICAgIH0sIFt0aGlzLnJldmlld0Rpc2NsYWltZXJUZXh0XSk7XG4gICAgICAgIGNvbnN0IHNjcmVlblJlYWRlckRlc2NyaXB0aW9uID0gKDAsIHRlbXBsYXRpbmdfMS5zcGFuKSh7XG4gICAgICAgICAgICBjbGFzczogJ3Zpc3VhbGx5LWhpZGRlbicsXG4gICAgICAgICAgICBpZDogZGVzY3JpcHRpb25JZCxcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB0aGlzLnJldmlld0Rpc2NsYWltZXJEZXNjcmlwdGlvbixcbiAgICAgICAgfSwgW3RoaXMucmV2aWV3RGlzY2xhaW1lckRlc2NyaXB0aW9uXSk7XG4gICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IGAke2FuY2hvcn0gJHtzY3JlZW5SZWFkZXJEZXNjcmlwdGlvbn1gO1xuICAgICAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuUmV2aWV3RGlzY2xhaW1lciA9IFJldmlld0Rpc2NsYWltZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWtFbGVtV2l0aFN2Z0xvb2t1cCA9IGV4cG9ydHMub2JqZWN0ID0gZXhwb3J0cy5zcGFuID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMubGFiZWwgPSBleHBvcnRzLmltZyA9IGV4cG9ydHMuZGl2ID0gZXhwb3J0cy5hID0gdm9pZCAwO1xuY29uc3Qgc3ZnXzEgPSByZXF1aXJlKFwiLi9hc3NldHMvc3ZnXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuY29uc3QgZmxhdHRlbiA9IChhcnJzKSA9PiBbXS5jb25jYXQoLi4uYXJycyk7XG5jb25zdCBta1Byb3BzID0gKHByb3BzKSA9PiBPYmplY3Qua2V5cyhwcm9wcylcbiAgICAubWFwKChrZXkpID0+IHtcbiAgICBjb25zdCBzYW5pdGl6ZWRQcm9wID0gKDAsIHV0aWxzXzEuc2FuaXRpemVIdG1sUHJvcCkocHJvcHNba2V5XSk7XG4gICAgcmV0dXJuIGAke2tleX09XCIke3Nhbml0aXplZFByb3B9XCJgO1xufSlcbiAgICAuam9pbignICcpO1xuY29uc3QgbWtFbGVtID0gKHRhZywgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiBgPCR7dGFnfSAke21rUHJvcHMocHJvcHMpfT4ke2ZsYXR0ZW4oY2hpbGRyZW4pLmpvaW4oJ1xcbicpfTwvJHt0YWd9PmA7XG5jb25zdCBta05vbkNsb3NpbmdFbGVtID0gKHRhZywgcHJvcHMpID0+IGA8JHt0YWd9ICR7bWtQcm9wcyhwcm9wcyl9PmA7XG5jb25zdCBhID0gKHByb3BzLCAuLi5jaGlsZHJlbikgPT4gbWtFbGVtKCdhJywgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbmV4cG9ydHMuYSA9IGE7XG5jb25zdCBkaXYgPSAocHJvcHMsIC4uLmNoaWxkcmVuKSA9PiBta0VsZW0oJ2RpdicsIHByb3BzLCAuLi5jaGlsZHJlbik7XG5leHBvcnRzLmRpdiA9IGRpdjtcbmNvbnN0IGltZyA9IChwcm9wcywgLi4uY2hpbGRyZW4pID0+IG1rRWxlbSgnaW1nJywgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbmV4cG9ydHMuaW1nID0gaW1nO1xuY29uc3QgbGFiZWwgPSAocHJvcHMsIC4uLmNoaWxkcmVuKSA9PiBta0VsZW0oJ2xhYmVsJywgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbmV4cG9ydHMubGFiZWwgPSBsYWJlbDtcbmNvbnN0IHNwYW4gPSAocHJvcHMsIC4uLmNoaWxkcmVuKSA9PiBta0VsZW0oJ3NwYW4nLCBwcm9wcywgLi4uY2hpbGRyZW4pO1xuZXhwb3J0cy5zcGFuID0gc3BhbjtcbmNvbnN0IGlucHV0ID0gKHByb3BzKSA9PiBta05vbkNsb3NpbmdFbGVtKCdpbnB1dCcsIHByb3BzKTtcbmV4cG9ydHMuaW5wdXQgPSBpbnB1dDtcbmNvbnN0IG9iamVjdCA9IChwcm9wcywgLi4uY2hpbGRyZW4pID0+IG1rRWxlbSgnb2JqZWN0JywgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbmV4cG9ydHMub2JqZWN0ID0gb2JqZWN0O1xuY29uc3QgbWtFbGVtV2l0aFN2Z0xvb2t1cCA9IChzdmdLZXksIGNsYXNzTmFtZSA9ICcnLCBwcm9wcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBhcmlhSGlkZVN2ZywgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgYXJpYUhpZGRlbiA9IGFyaWFIaWRlU3ZnID8geyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSA6IHt9O1xuICAgIHJldHVybiBkaXYoeyBjbGFzczogY2xhc3NOYW1lLCAuLi5hcmlhSGlkZGVuIH0sIHN2Z18xLnN2Z01hcFtzdmdLZXldKG90aGVyUHJvcHMpKTtcbn07XG5leHBvcnRzLm1rRWxlbVdpdGhTdmdMb29rdXAgPSBta0VsZW1XaXRoU3ZnTG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFJldmlld0Rpc2NsYWltZXJMaW5rID0gZXhwb3J0cy5ub3JtYWxpemVTdXBwb3J0TG9jYWxlID0gdm9pZCAwO1xuY29uc3Qgbm9ybWFsaXplU3VwcG9ydExvY2FsZSA9IChsb2NhbGUpID0+IHtcbiAgICBzd2l0Y2ggKGxvY2FsZSkge1xuICAgICAgICBjYXNlICdlbi1VUyc6XG4gICAgICAgIGNhc2UgJ25sLU5MJzpcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUucmVwbGFjZSgnLScsICdfJyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLnNwbGl0KCctJylbMF07XG4gICAgfVxufTtcbmV4cG9ydHMubm9ybWFsaXplU3VwcG9ydExvY2FsZSA9IG5vcm1hbGl6ZVN1cHBvcnRMb2NhbGU7XG5jb25zdCBSRVZJRVdfRElTQ0xBSU1FUl9MSU5LID0gJ2h0dHBzOi8vaGVscC50cnVzdHBpbG90LmNvbS9zL2FydGljbGUvSG93LWRvLXdlLW1ha2Utc3VyZS1yZXZpZXdzLWFyZS10cnVzdHdvcnRoeSc7XG5jb25zdCBnZXRSZXZpZXdEaXNjbGFpbWVyTGluayA9IChsb2NhbGUpID0+IHtcbiAgICBjb25zdCBzdXBwb3J0TG9jYWxlID0gKDAsIGV4cG9ydHMubm9ybWFsaXplU3VwcG9ydExvY2FsZSkobG9jYWxlKTtcbiAgICByZXR1cm4gYCR7UkVWSUVXX0RJU0NMQUlNRVJfTElOS30/bGFuZ3VhZ2U9JHtzdXBwb3J0TG9jYWxlfWA7XG59O1xuZXhwb3J0cy5nZXRSZXZpZXdEaXNjbGFpbWVyTGluayA9IGdldFJldmlld0Rpc2NsYWltZXJMaW5rO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBvcHVsYXRlRWxlbWVudHMgPSBleHBvcnRzLmhhc0NsYXNzID0gZXhwb3J0cy5yZW1vdmVDbGFzcyA9IGV4cG9ydHMuYWRkQ2xhc3MgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBoYXNDbGFzcyA9IChlbGVtLCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgICBjb25zdCBlbGVtQ2xhc3NMaXN0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBlbGVtQ2xhc3NMaXN0ID8gZWxlbUNsYXNzTGlzdC5zcGxpdCgnICcpIDogJyc7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWVzLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnRzLmhhc0NsYXNzID0gaGFzQ2xhc3M7XG5jb25zdCBhZGRDbGFzcyA9IChlbGVtLCBmb3JBZGRpdGlvbikgPT4ge1xuICAgIGlmIChlbGVtKSB7XG4gICAgICAgIGNvbnN0IGVsZW1DbGFzc0xpc3QgPSBlbGVtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGVsZW1DbGFzc0xpc3QgPyBlbGVtQ2xhc3NMaXN0LnNwbGl0KCcgJykgOiBbXTtcbiAgICAgICAgaWYgKCFoYXNDbGFzcyhlbGVtLCBmb3JBZGRpdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSBbLi4uY2xhc3NOYW1lcywgZm9yQWRkaXRpb25dLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydHMuYWRkQ2xhc3MgPSBhZGRDbGFzcztcbmNvbnN0IHJlbW92ZUNsYXNzID0gKGVsZW0sIGZvclJlbW92YWwpID0+IHtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gZWxlbS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWVzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gZm9yUmVtb3ZhbCkuam9pbignICcpO1xuICAgIH1cbn07XG5leHBvcnRzLnJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3M7XG5jb25zdCBwb3B1bGF0ZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoeyBlbGVtZW50LCBzdHJpbmcsIHN1YnN0aXR1dGlvbnMgPSB7fSB9KSA9PiB7XG4gICAgICAgIGlmIChzdHJpbmcpIHtcbiAgICAgICAgICAgICgwLCB1dGlsc18xLnNldEh0bWxDb250ZW50KShlbGVtZW50LCAoMCwgdXRpbHNfMS5tYWtlVHJhbnNsYXRpb25zKShzdWJzdGl0dXRpb25zLCBzdHJpbmcpLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5yZW1vdmVFbGVtZW50KShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydHMucG9wdWxhdGVFbGVtZW50cyA9IHBvcHVsYXRlRWxlbWVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYXR0YWNoSW1wcmVzc2lvbkhhbmRsZXIgPSBleHBvcnRzLmVuZ2FnZW1lbnQgPSB2b2lkIDA7XG5jb25zdCBxdWVyeVN0cmluZ18xID0gcmVxdWlyZShcIi4vcXVlcnlTdHJpbmdcIik7XG5jb25zdCByb290VXJpXzEgPSByZXF1aXJlKFwiLi9yb290VXJpXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuY29uc3QgeGhyXzEgPSByZXF1aXJlKFwiLi94aHJcIik7XG5mdW5jdGlvbiBzZXRDb29raWUoY25hbWUsIGN2YWx1ZSwgZXhwaXJlcykge1xuICAgIGNvbnN0IHBhdGggPSAncGF0aD0vJztcbiAgICBjb25zdCBkb21haW4gPSBgZG9tYWluPSR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnJlcGxhY2UoL14uKlxcLihbXi5dK1xcLlteLl0rKS8sICckMScpfWA7XG4gICAgY29uc3Qgc2FtZXNpdGUgPSBgc2FtZXNpdGU9bm9uZWA7XG4gICAgY29uc3Qgc2VjdXJlID0gYHNlY3VyZWA7XG4gICAgZG9jdW1lbnQuY29va2llID0gW2Ake2NuYW1lfT0ke2N2YWx1ZX1gLCBwYXRoLCBleHBpcmVzLCBkb21haW4sIHNhbWVzaXRlLCBzZWN1cmVdLmpvaW4oJzsgJyk7XG4gICAgZG9jdW1lbnQuY29va2llID0gW2Ake2NuYW1lfS1sZWdhY3k9JHtjdmFsdWV9YCwgcGF0aCwgZXhwaXJlcywgZG9tYWluXS5qb2luKCc7ICcpO1xufVxuZnVuY3Rpb24gbWFrZVRyYWNraW5nVXJsKGV2ZW50TmFtZSwgaW1wcmVzc2lvbkRhdGEpIHtcbiAgICBjb25zdCB7IGFub255bW91c0lkOiB1c2VySWQsIHNlc3Npb25FeHBpcnk6IF8sIC4uLmltcHJlc3Npb25QYXJhbXMgfSA9IGltcHJlc3Npb25EYXRhO1xuICAgIGNvbnN0IHsgYnVzaW5lc3N1bml0SWQ6IGJ1c2luZXNzVW5pdElkLCB0ZW1wbGF0ZUlkOiB3aWRnZXRJZCwgLi4ud2lkZ2V0U2V0dGluZ3MgfSA9ICgwLCBxdWVyeVN0cmluZ18xLmdldEFzT2JqZWN0KSgpO1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IHtcbiAgICAgICAgLi4ud2lkZ2V0U2V0dGluZ3MsXG4gICAgICAgIC4uLmltcHJlc3Npb25QYXJhbXMsXG4gICAgICAgIC4uLih3aWRnZXRTZXR0aW5ncy5ncm91cCAmJiB1c2VySWQgPyB7IHVzZXJJZCB9IDogeyBub3NldHRpbmdzOiAxIH0pLFxuICAgICAgICBidXNpbmVzc1VuaXRJZCxcbiAgICAgICAgd2lkZ2V0SWQsXG4gICAgfTtcbiAgICBjb25zdCB1cmxQYXJhbXNTdHJpbmcgPSBPYmplY3Qua2V5cyh1cmxQYXJhbXMpXG4gICAgICAgIC5tYXAoKHByb3BlcnR5KSA9PiBgJHtwcm9wZXJ0eX09JHtlbmNvZGVVUklDb21wb25lbnQodXJsUGFyYW1zW3Byb3BlcnR5XSl9YClcbiAgICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gYCR7KDAsIHJvb3RVcmlfMS5nZXRXaWRnZXRSb290VXJpKSgpfS9zdGF0cy8ke2V2ZW50TmFtZX0/JHt1cmxQYXJhbXNTdHJpbmd9YDtcbn1cbmZ1bmN0aW9uIHNldFRyYWNraW5nQ29va2llcyhldmVudE5hbWUsIHsgc2Vzc2lvbiwgdGVzdElkLCBzZXNzaW9uRXhwaXJ5IH0pIHtcbiAgICBjb25zdCB7IGdyb3VwLCBidXNpbmVzc3VuaXRJZDogYnVzaW5lc3NVbml0SWQgfSA9ICgwLCBxdWVyeVN0cmluZ18xLmdldEFzT2JqZWN0KSgpO1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRlc3RJZCB8fCAhc2Vzc2lvbikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RydXN0Qm94IE9wdGltaXplciB0ZXN0IGdyb3VwIGRldGVjdGVkIGJ1dCBubyBydW5uaW5nIHRlc3Qgc2V0dGluZ3MgZm91bmQhJyk7XG4gICAgfVxuICAgIGlmIChzZXNzaW9uRXhwaXJ5KSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0geyBncm91cCwgc2Vzc2lvbiwgdGVzdElkIH07XG4gICAgICAgIHNldENvb2tpZShgVHJ1c3Rib3hTcGxpdFRlc3RfJHtidXNpbmVzc1VuaXRJZH1gLCBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKSwgc2Vzc2lvbkV4cGlyeSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhY2tFdmVudFJlcXVlc3QoZXZlbnROYW1lLCBpbXByZXNzaW9uRGF0YSkge1xuICAgIHNldFRyYWNraW5nQ29va2llcyhldmVudE5hbWUsIGltcHJlc3Npb25EYXRhKTtcbiAgICBjb25zdCB1cmwgPSBtYWtlVHJhY2tpbmdVcmwoZXZlbnROYW1lLCBpbXByZXNzaW9uRGF0YSk7XG4gICAgdHJ5IHtcbiAgICAgICAgKDAsIHhocl8xLnhocikoeyB1cmwgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgfVxufVxuY29uc3QgdHJhY2tJbXByZXNzaW9uID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0cmFja0V2ZW50UmVxdWVzdCgnVHJ1c3Rib3hJbXByZXNzaW9uJywgZGF0YSk7XG59O1xuY29uc3QgdHJhY2tWaWV3ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0cmFja0V2ZW50UmVxdWVzdCgnVHJ1c3Rib3hWaWV3JywgZGF0YSk7XG59O1xuY29uc3QgZW5nYWdlbWVudCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdHJhY2tFdmVudFJlcXVlc3QoJ1RydXN0Ym94RW5nYWdlbWVudCcsIGRhdGEpO1xufTtcbmV4cG9ydHMuZW5nYWdlbWVudCA9IGVuZ2FnZW1lbnQ7XG5sZXQgaWQgPSBudWxsO1xuY29uc3QgYXR0YWNoSW1wcmVzc2lvbkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgKDAsIHV0aWxzXzEuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCAnbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LmRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlID0geyBkYXRhOiBKU09OLnBhcnNlKGV2ZW50LmRhdGEpIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5kYXRhLmNvbW1hbmQgPT09ICdzZXRJZCcpIHtcbiAgICAgICAgICAgIGlkID0gZS5kYXRhLndpZGdldElkO1xuICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7IGNvbW1hbmQ6ICdpbXByZXNzaW9uJywgd2lkZ2V0SWQ6IGlkIH0pLCAnKicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmRhdGEuY29tbWFuZCA9PT0gJ2ltcHJlc3Npb24tcmVjZWl2ZWQnKSB7XG4gICAgICAgICAgICBkZWxldGUgZS5kYXRhLmNvbW1hbmQ7XG4gICAgICAgICAgICB0cmFja0ltcHJlc3Npb24oZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5kYXRhLmNvbW1hbmQgPT09ICd0cnVzdGJveC1pbi12aWV3cG9ydCcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBlLmRhdGEuY29tbWFuZDtcbiAgICAgICAgICAgIHRyYWNrVmlldyhlLmRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0cy5hdHRhY2hJbXByZXNzaW9uSGFuZGxlciA9IGF0dGFjaEltcHJlc3Npb25IYW5kbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluaXQgPSB2b2lkIDA7XG5jb25zdCBjb21tdW5pY2F0aW9uXzEgPSByZXF1aXJlKFwiLi9jb21tdW5pY2F0aW9uXCIpO1xuY29uc3QgZXJyb3JGYWxsYmFja18xID0gcmVxdWlyZShcIi4vdGVtcGxhdGVzL2Vycm9yRmFsbGJhY2tcIik7XG5jb25zdCBGQUxMQkFDS19ERUxBWSA9IDUwMDtcbmNvbnN0IGluaXQgPSAob25Jbml0KSA9PiB7XG4gICAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgKDAsIGNvbW11bmljYXRpb25fMS5vblBvbmcpKCgpID0+IHtcbiAgICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZW9mIG9uSW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25Jbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2BvbkluaXRgIG5vdCBzdXBwbGllZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgKDAsIGNvbW11bmljYXRpb25fMS5waW5nKSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAoMCwgZXJyb3JGYWxsYmFja18xLmVycm9yRmFsbGJhY2spKCk7XG4gICAgICAgIH1cbiAgICB9LCBGQUxMQkFDS19ERUxBWSk7XG59O1xuZXhwb3J0cy5pbml0ID0gaW5pdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdHlsZUFsaWdubWVudFBvc2l0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IHN0eWxlQWxpZ25tZW50UG9zaXRpb25zID0gWydsZWZ0JywgJ3JpZ2h0J107XG5leHBvcnRzLnN0eWxlQWxpZ25tZW50UG9zaXRpb25zID0gc3R5bGVBbGlnbm1lbnRQb3NpdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucG9wdWxhdGVMb2dvID0gZXhwb3J0cy5tYWtlTG9nbyA9IHZvaWQgMDtcbmNvbnN0IGRvbV8xID0gcmVxdWlyZShcIi4uL2RvbVwiKTtcbmNvbnN0IHRlbXBsYXRpbmdfMSA9IHJlcXVpcmUoXCIuLi90ZW1wbGF0aW5nXCIpO1xuY29uc3QgbWFrZUxvZ28gPSAoKSA9PiAoMCwgdGVtcGxhdGluZ18xLm1rRWxlbVdpdGhTdmdMb29rdXApKCdsb2dvJyk7XG5leHBvcnRzLm1ha2VMb2dvID0gbWFrZUxvZ287XG5jb25zdCBwb3B1bGF0ZUxvZ28gPSAobG9nb0NvbnRhaW5lciA9ICd0cC13aWRnZXQtbG9nbycpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0eXBlb2YgbG9nb0NvbnRhaW5lciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2dvQ29udGFpbmVyKSA6IGxvZ29Db250YWluZXI7XG4gICAgKDAsIGRvbV8xLnBvcHVsYXRlRWxlbWVudHMpKFtcbiAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudDogY29udGFpbmVyLFxuICAgICAgICAgICAgc3RyaW5nOiBtYWtlTG9nbygpLFxuICAgICAgICB9LFxuICAgIF0pO1xufTtcbmV4cG9ydHMucG9wdWxhdGVMb2dvID0gcG9wdWxhdGVMb2dvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBvcHVsYXRlU3RhcnMgPSBleHBvcnRzLm1ha2VTdGFycyA9IHZvaWQgMDtcbmNvbnN0IGRvbV8xID0gcmVxdWlyZShcIi4uL2RvbVwiKTtcbmNvbnN0IHRlbXBsYXRpbmdfMSA9IHJlcXVpcmUoXCIuLi90ZW1wbGF0aW5nXCIpO1xuY29uc3QgdHJhbnNsYXRpb25zXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNsYXRpb25zXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IG1ha2VTdGFycyA9ICh7IG51bSwgdHJ1c3RTY29yZSA9IG51bGwsIHdyYXBwZXJDbGFzcyA9ICcnLCBjb2xvciwgbG9jYWxlIH0pID0+IHtcbiAgICBjb25zdCBmdWxsUGFydCA9IE1hdGguZmxvb3IobnVtKTtcbiAgICBjb25zdCBoYWxmUGFydCA9IG51bSA9PT0gZnVsbFBhcnQgPyAnJyA6IGAgdHAtc3RhcnMtLSR7ZnVsbFBhcnR9LS1oYWxmYDtcbiAgICBjb25zdCBzYW5pdGl6ZWRDb2xvciA9ICgwLCB1dGlsc18xLnNhbml0aXplQ29sb3IpKGNvbG9yKTtcbiAgICByZXR1cm4gKDAsIHRlbXBsYXRpbmdfMS5kaXYpKHsgY2xhc3M6IHdyYXBwZXJDbGFzcyB9LCAoMCwgdGVtcGxhdGluZ18xLm1rRWxlbVdpdGhTdmdMb29rdXApKCdzdGFycycsIGAke3Nhbml0aXplZENvbG9yID8gJ3RwLXN0YXJzLWN1c3RvbS1jb2xvcicgOiBgdHAtc3RhcnMgdHAtc3RhcnMtLSR7ZnVsbFBhcnR9JHtoYWxmUGFydH1gfWAsIHsgcmF0aW5nOiBudW0sIHRydXN0U2NvcmU6IHRydXN0U2NvcmUgfHwgbnVtLCBjb2xvcjogc2FuaXRpemVkQ29sb3IsIGxvY2FsZSB9KSk7XG59O1xuZXhwb3J0cy5tYWtlU3RhcnMgPSBtYWtlU3RhcnM7XG5jb25zdCBwb3B1bGF0ZVN0YXJzID0gKHsgYnVzaW5lc3NFbnRpdHk6IHsgc3RhcnMsIHRydXN0U2NvcmUsIG51bWJlck9mUmV2aWV3czogeyB0b3RhbCB9LCB9LCB9LCBzdGFyc0NvbnRhaW5lciA9ICd0cC13aWRnZXQtc3RhcnMnLCBzdGFyc0NvbG9yLCBsb2NhbGUgPSB0cmFuc2xhdGlvbnNfMS5kZWZhdWx0TG9jYWxlKSA9PiB7XG4gICAgY29uc3Qgc2FuaXRpemVkQ29sb3IgPSAoMCwgdXRpbHNfMS5zYW5pdGl6ZUNvbG9yKShzdGFyc0NvbG9yKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0eXBlb2Ygc3RhcnNDb250YWluZXIgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RhcnNDb250YWluZXIpIDogc3RhcnNDb250YWluZXI7XG4gICAgY29uc3QgZGlzcGxheWVkU3RhcnMgPSB0b3RhbCA/IHN0YXJzIDogMDtcbiAgICAoMCwgZG9tXzEucG9wdWxhdGVFbGVtZW50cykoW1xuICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50OiBjb250YWluZXIsXG4gICAgICAgICAgICBzdHJpbmc6IG1ha2VTdGFycyh7IG51bTogZGlzcGxheWVkU3RhcnMsIHRydXN0U2NvcmUsIGNvbG9yOiBzYW5pdGl6ZWRDb2xvciwgbG9jYWxlIH0pLFxuICAgICAgICB9LFxuICAgIF0pO1xufTtcbmV4cG9ydHMucG9wdWxhdGVTdGFycyA9IHBvcHVsYXRlU3RhcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT1JJRU5UQVRJT04gPSBleHBvcnRzLm1ha2VFbXB0eVN1bW1hcnkgPSB2b2lkIDA7XG5jb25zdCB0ZW1wbGF0aW5nXzEgPSByZXF1aXJlKFwiLi4vdGVtcGxhdGluZ1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBsb2dvXzEgPSByZXF1aXJlKFwiLi9sb2dvXCIpO1xuY29uc3Qgc3RhcnNfMSA9IHJlcXVpcmUoXCIuL3N0YXJzXCIpO1xuY29uc3QgSE9SSVpPTlRBTCA9ICdob3Jpem9udGFsJztcbmNvbnN0IFZFUlRJQ0FMID0gJ3ZlcnRpY2FsJztcbmNvbnN0IE9SSUVOVEFUSU9OID0ge1xuICAgIEhPUklaT05UQUwsXG4gICAgVkVSVElDQUwsXG59O1xuZXhwb3J0cy5PUklFTlRBVElPTiA9IE9SSUVOVEFUSU9OO1xuY29uc3QgdXNlTm9mb2xsb3cgPSAobm9mb2xsb3cpID0+IChub2ZvbGxvdyA/IHsgcmVsOiAnbm9mb2xsb3cnIH0gOiB7fSk7XG5jb25zdCByZW5kZXJTdWJ0aXRsZSA9IChvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgeyBzdWJ0aXRsZSwgdXJsLCBoYXNMb2dvLCBub2ZvbGxvdyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB0cmFuc2xhdGVkU3VidGl0bGUgPSBzdWJ0aXRsZSAmJiAoMCwgdXRpbHNfMS5tYWtlVHJhbnNsYXRpb25zKSh7fSwgc3VidGl0bGUpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW1xuICAgICAgICB0cmFuc2xhdGVkU3VidGl0bGUgJiYgKDAsIHRlbXBsYXRpbmdfMS5zcGFuKSh7IGNsYXNzOiAndHAtd2lkZ2V0LWVtcHR5LXZlcnRpY2FsX19zdWJ0aXRsZScgfSwgdHJhbnNsYXRlZFN1YnRpdGxlKSxcbiAgICAgICAgdXJsICYmXG4gICAgICAgICAgICAoMCwgdGVtcGxhdGluZ18xLmEpKHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RwLXdpZGdldC1lbXB0eS12ZXJ0aWNhbF9fbG9nbycsXG4gICAgICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgICAgICAgLi4udXNlTm9mb2xsb3cobm9mb2xsb3cpLFxuICAgICAgICAgICAgfSwgKDAsIGxvZ29fMS5tYWtlTG9nbykoKSksXG4gICAgICAgIGhhc0xvZ28gJiYgIXVybCAmJiAoMCwgdGVtcGxhdGluZ18xLnNwYW4pKHsgY2xhc3M6ICd0cC13aWRnZXQtZW1wdHktdmVydGljYWxfX2xvZ28nIH0sICgwLCBsb2dvXzEubWFrZUxvZ28pKCkpLFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pO1xuICAgIHJldHVybiAoMCwgdGVtcGxhdGluZ18xLmRpdikoeyBjbGFzczogJ3RwLXdpZGdldC1lbXB0eS12ZXJ0aWNhbF9fc3VidGl0bGUtd3JhcHBlcicgfSwgLi4uY2hpbGRyZW4pO1xufTtcbmNvbnN0IG1ha2VFbXB0eVZlcnRpY2FsU3VtbWFyeSA9IChvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgdHJhbnNsYXRlZFRpdGxlID0gKDAsIHV0aWxzXzEubWFrZVRyYW5zbGF0aW9ucykoe30sIG9wdGlvbnMudGl0bGUpO1xuICAgIGNvbnN0IHN1YnRpdGxlRWxlbWVudCA9IHJlbmRlclN1YnRpdGxlKG9wdGlvbnMpO1xuICAgIHJldHVybiAoMCwgdGVtcGxhdGluZ18xLmRpdikoe1xuICAgICAgICBjbGFzczogJ3RwLXdpZGdldC1lbXB0eS12ZXJ0aWNhbCcsXG4gICAgfSwgKDAsIHRlbXBsYXRpbmdfMS5zcGFuKSh7IGNsYXNzOiAndHAtd2lkZ2V0LWVtcHR5LXZlcnRpY2FsX190aXRsZScgfSwgdHJhbnNsYXRlZFRpdGxlKSwgKDAsIHN0YXJzXzEubWFrZVN0YXJzKSh7IG51bTogMCwgd3JhcHBlckNsYXNzOiAndHAtd2lkZ2V0LWVtcHR5LXZlcnRpY2FsX19zdGFycycgfSksIHN1YnRpdGxlRWxlbWVudCk7XG59O1xuY29uc3QgbWFrZUVtcHR5SG9yaXpvbnRhbFN1bW1hcnkgPSAob3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHsgdGl0bGUsIHVybCwgbm9mb2xsb3cgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgdHJhbnNsYXRlZFRpdGxlID0gKDAsIHV0aWxzXzEubWFrZVRyYW5zbGF0aW9ucykoe30sIHRpdGxlKTtcbiAgICBjb25zdCB0aXRsZUVsZSA9ICgwLCB0ZW1wbGF0aW5nXzEuc3BhbikoeyBjbGFzczogJ3RwLXdpZGdldC1lbXB0eS1ob3Jpem9udGFsX190aXRsZScgfSwgdHJhbnNsYXRlZFRpdGxlKTtcbiAgICBjb25zdCBsb2dvRWxlID0gKDAsIHRlbXBsYXRpbmdfMS5kaXYpKHsgY2xhc3M6ICd0cC13aWRnZXQtZW1wdHktaG9yaXpvbnRhbF9fbG9nbycgfSwgKDAsIGxvZ29fMS5tYWtlTG9nbykoKSk7XG4gICAgY29uc3QgbGlua0NvbnRlbnQgPSAoMCwgdGVtcGxhdGluZ18xLmRpdikoeyBjbGFzczogJ3RwLXdpZGdldC1lbXB0eS1ob3Jpem9udGFsJyB9LCB0aXRsZUVsZSwgbG9nb0VsZSk7XG4gICAgcmV0dXJuICgwLCB0ZW1wbGF0aW5nXzEuYSkoe1xuICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgIC4uLnVzZU5vZm9sbG93KG5vZm9sbG93KSxcbiAgICB9LCBsaW5rQ29udGVudCk7XG59O1xuY29uc3QgbWFrZUVtcHR5U3VtbWFyeSA9IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIG9wdGlvbnMub3JpZW50YXRpb24gPT09IE9SSUVOVEFUSU9OLkhPUklaT05UQUxcbiAgICAgICAgPyBtYWtlRW1wdHlIb3Jpem9udGFsU3VtbWFyeShvcHRpb25zKVxuICAgICAgICA6IG1ha2VFbXB0eVZlcnRpY2FsU3VtbWFyeShvcHRpb25zKTtcbn07XG5leHBvcnRzLm1ha2VFbXB0eVN1bW1hcnkgPSBtYWtlRW1wdHlTdW1tYXJ5O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQge1xuICBpbnNlcnROdW1iZXJTZXBhcmF0b3IsXG4gIGFkZFV0bVBhcmFtcyxcbiAgc2V0Rm9udCxcbiAgc2V0VGV4dENvbG9yLFxuICBzZXRIdG1sTGFuZ3VhZ2UsXG4gIG1ha2VUcmFuc2xhdGVkTGlua0FjY2Vzc2libGVOYW1lcyxcbn0gZnJvbSBcIkB0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0QXNPYmplY3QgfSBmcm9tIFwiQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL3F1ZXJ5U3RyaW5nXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBmZXRjaFNlcnZpY2VSZXZpZXdEYXRhIH0gZnJvbSBcIkB0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9hcGlcIjtcbmltcG9ydCB7IGF0dGFjaEltcHJlc3Npb25IYW5kbGVyIH0gZnJvbSBcIkB0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9pbXByZXNzaW9uXCI7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSBcIkB0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9pbml0XCI7XG5pbXBvcnQgeyBSZXZpZXdEaXNjbGFpbWVyIH0gZnJvbSBcIkB0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy9jb21wb25lbnRzL3Jldmlld0Rpc2NsYWltZXJcIjtcbmltcG9ydCB7IHdpZGdldFN0eWxlQWxpZ25tZW50IH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmF0dGFjaEltcHJlc3Npb25IYW5kbGVyKCk7XG5cbmNvbnN0IGNyZWF0ZUZ1bGxMaW5rID0gKHRydXN0Ym94VHlwZSwgbGluaykgPT4gYWRkVXRtUGFyYW1zKHRydXN0Ym94VHlwZSkobGluayk7XG5cbmNvbnN0IHNldFByb2ZpbGVMaW5rID0gKHRydXN0Ym94VHlwZSwgbGluaywgdHJhbnNsYXRpb25WYWx1ZXMsIGxvY2FsZSkgPT4ge1xuICBjb25zdCBmdWxsTGluayA9IGNyZWF0ZUZ1bGxMaW5rKHRydXN0Ym94VHlwZSwgbGluayk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZS1saW5rXCIpLmhyZWYgPSBmdWxsTGluaztcblxuICAvLyBBZGQgdHJhbnNsYXRlZCBhcmlhIHZhbHVlcyBmb3IgYWNjZXNzaWJpbGl0eTpcbiAgY29uc3QgbGlua0Rlc2NUcmFuc2xhdGlvbktleXMgPSB7XG4gICAgTWljcm9TdGFyOiBcImJ1c2luZXNzUmF0aW5nVGV4dFdpdGhUcnVzdFNjb3JlUmF0aW5nXCIsXG4gICAgTWljcm9UcnVzdFNjb3JlOiBcImJ1c2luZXNzUmF0aW5nVGV4dFdpdGhUcnVzdFNjb3JlUmF0aW5nXCIsXG4gICAgTWljcm9Db21ibzogXCJidXNpbmVzc1JhdGluZ1RleHRXaXRoVFNSYXRpbmdBbmRSZXZpZXdDb3VudFwiLFxuICAgIC8vIE5vIGxpbmsgZGVzY3JpcHRpb24gZGVmaW5lZCBmb3IgTWljcm9SZXZpZXdDb3VudCB5ZXRcbiAgfTtcbiAgY29uc3QgdHJhbnNsYXRpb25LZXkxID0gXCJ3aWRnZXRMYWJlbFwiO1xuICBjb25zdCB0cmFuc2xhdGlvbktleTIgPSBsaW5rRGVzY1RyYW5zbGF0aW9uS2V5c1t0cnVzdGJveFR5cGVdO1xuICBjb25zdCB0cmFuc2xhdGlvbktleTMgPSBcImNsaWNrUHJvZmlsZUxpbmtcIjtcblxuICBjb25zdCB7IGFyaWFMYWJlbCwgYXJpYURlc2NyaXB0aW9uLCBhcmlhSW5zdHJ1Y3Rpb24gfSA9XG4gICAgbWFrZVRyYW5zbGF0ZWRMaW5rQWNjZXNzaWJsZU5hbWVzKFxuICAgICAgdHJhbnNsYXRpb25LZXkxLFxuICAgICAgdHJhbnNsYXRpb25LZXkyLFxuICAgICAgdHJhbnNsYXRpb25LZXkzLFxuICAgICAgbG9jYWxlLFxuICAgICAgdHJhbnNsYXRpb25WYWx1ZXNcbiAgICApO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGUtbGlua1wiKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIGFyaWFMYWJlbCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NyZWVuLXJlYWRlci1vbmx5LXJhdGluZ1wiKS50ZXh0Q29udGVudCA9XG4gICAgYXJpYURlc2NyaXB0aW9uO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcmVlbi1yZWFkZXItb25seS1pbnN0cnVjdGlvblwiKS50ZXh0Q29udGVudCA9XG4gICAgYXJpYUluc3RydWN0aW9uO1xufTtcblxuY29uc3Qgc2V0V2lkZ2V0QWxpZ25tZW50ID0gKHN0eWxlQWxpZ25tZW50KSA9PiB7XG4gIGlmICh3aWRnZXRTdHlsZUFsaWdubWVudC5pbmNsdWRlcyhzdHlsZUFsaWdubWVudCkpIHtcbiAgICAvLyBOb3RlOiBjbGFzc05hbWUgYW5kIGlkIGFyZSB0aGUgc2FtZVxuICAgIGNvbnN0IHNlbGVjdG9yTmFtZSA9IFwidHAtd2lkZ2V0LXdyYXBwZXJcIjtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yTmFtZSlcbiAgICAgIC5jbGFzc0xpc3QuYWRkKGAke3NlbGVjdG9yTmFtZX0tLSR7c3R5bGVBbGlnbm1lbnR9YCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5ncm91cChcIlN0eWxlIEFsaWdubWVudCBFcnJvclwiKTtcbiAgICBjb25zb2xlLndhcm4oYCR7c3R5bGVBbGlnbm1lbnR9IGlzIG5vdCBhbGxvd2VkIHZhbHVlYCk7XG4gICAgY29uc29sZS53YXJuKFwiY2VudGVyIGlzIGRlZmF1bHQgcG9zaXRpb24sIHlvdSBkb24ndCBoYXZlIHRvIHNwZWNpZnkgaXRcIik7XG4gICAgY29uc29sZS5ncm91cEVuZChcIlN0eWxlIEFsaWdubWVudCBFcnJvclwiKTtcbiAgfVxufTtcblxuY29uc3QgY29uc3RydWN0VHJ1c3RCb3ggPSAoe1xuICBuYW1lLFxuICBzZXR1cCA9ICgpID0+IHt9LFxuICB3aXRoUmV2aWV3cyxcbiAgd2l0aG91dFJldmlld3MsXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsb2NhbGUsXG4gICAgYnVzaW5lc3N1bml0SWQ6IGJ1c2luZXNzVW5pdElkLFxuICAgIHRoZW1lID0gXCJsaWdodFwiLFxuICAgIGxvY2F0aW9uLFxuICAgIHRlbXBsYXRlSWQsXG4gICAgZm9udEZhbWlseSxcbiAgICB0ZXh0Q29sb3IsXG4gICAgc3R5bGVBbGlnbm1lbnQsXG4gICAgcmV2aWV3RGlzY2xhaW1lciA9IGZhbHNlLFxuICB9ID0gZ2V0QXNPYmplY3QoKTtcblxuICBjb25zdCByZW5kZXJSZXZpZXdEaXNjbGFpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IFwidHAtd2lkZ2V0LXJldmlldy1kaXNjbGFpbWVyXCI7XG4gICAgY29uc3QgZGlzY2xhaW1lckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG5cbiAgICBpZiAoZGlzY2xhaW1lckNvbnRhaW5lcikge1xuICAgICAgY29uc3QgcmV2aWV3RGlzY2xhaW1lckNvbXBvbmVudCA9IG5ldyBSZXZpZXdEaXNjbGFpbWVyKFxuICAgICAgICBkaXNjbGFpbWVyQ29udGFpbmVyLFxuICAgICAgICBsb2NhbGVcbiAgICAgICk7XG4gICAgICByZXZpZXdEaXNjbGFpbWVyQ29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25zdHJ1Y3QgPSAoeyBiYXNlRGF0YSwgbG9jYWxlIH0pID0+IHtcbiAgICBjb25zdCByYXRpbmcgPSBiYXNlRGF0YS5zdGFyc1N0cmluZztcbiAgICBjb25zdCBzdHJpbmdzID0geyAuLi5iYXNlRGF0YS50cmFuc2xhdGlvbnMsIHJhdGluZyB9O1xuICAgIGNvbnN0IHRydXN0U2NvcmUgPSBiYXNlRGF0YS5idXNpbmVzc1VuaXQudHJ1c3RTY29yZTtcblxuICAgIHNldEh0bWxMYW5ndWFnZShsb2NhbGUpO1xuXG4gICAgLy8gSWYgdGhlIFRydXN0Ym94IGhhcyBhIHRpdGxlIGVsZW1lbnQgd2l0aCB0aGlzIGlkIGFuZCBhbiBhdmFpbGFibGUgdHJhbnNsYXRpb24gaXQgc2hvdWxkIGJlIHNldFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cC13aWRnZXQtdGl0bGVcIik7XG4gICAgaWYgKHRpdGxlICYmIGJhc2VEYXRhLnRyYW5zbGF0aW9ucy50cnVzdHBpbG90Q3VzdG9tV2lkZ2V0KSB7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSBiYXNlRGF0YS50cmFuc2xhdGlvbnMudHJ1c3RwaWxvdEN1c3RvbVdpZGdldDtcbiAgICB9XG5cbiAgICBpZiAoYmFzZURhdGEuc2V0dGluZ3MuY3VzdG9tU3R5bGVzQWxsb3dlZCkge1xuICAgICAgaWYgKGZvbnRGYW1pbHkpIHtcbiAgICAgICAgc2V0Rm9udChmb250RmFtaWx5KTtcbiAgICAgIH1cbiAgICAgIGlmICh0ZXh0Q29sb3IpIHtcbiAgICAgICAgc2V0VGV4dENvbG9yKHRleHRDb2xvcik7XG4gICAgICB9XG4gICAgICBpZiAoc3R5bGVBbGlnbm1lbnQpIHtcbiAgICAgICAgc2V0V2lkZ2V0QWxpZ25tZW50KHN0eWxlQWxpZ25tZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmV2aWV3RGlzY2xhaW1lcikge1xuICAgICAgcmVuZGVyUmV2aWV3RGlzY2xhaW1lcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdE51bWJlciA9IChudW0pID0+IGluc2VydE51bWJlclNlcGFyYXRvcihudW0sIGxvY2FsZSk7XG4gICAgY29uc3QgYXJncyA9IHtcbiAgICAgIC4uLmJhc2VEYXRhLFxuICAgICAgc3R5bGVBbGlnbm1lbnQsXG4gICAgICBzdHJpbmdzLFxuICAgICAgZm9ybWF0TnVtYmVyLFxuICAgICAgZWxlbWVudHM6IGVsZW1lbnRzKCksXG4gICAgfTtcbiAgICBpZiAoYmFzZURhdGEuYnVzaW5lc3NFbnRpdHkubnVtYmVyT2ZSZXZpZXdzLnRvdGFsID09PSAwKSB7XG4gICAgICBjb25zdCBldmFsdWF0ZUxpbmsgPSBjcmVhdGVGdWxsTGluayhuYW1lLCBiYXNlRGF0YS5saW5rcy5ldmFsdWF0ZVVybCk7XG4gICAgICAvLyBwcm9maWxlIGxpbmsgaXMgdXNlZCBpbiBtaWNybyByZXZpZXcgY291bnQgdHJ1c3Rib3gsIHdoZW4gYi51bml0IGhhcyAwIHJldmlld3MsIGRlcGVuZGluZyBvbiB0aGUgc2VsZWN0ZWQgY29weTpcbiAgICAgIGNvbnN0IHByb2ZpbGVMaW5rID0gY3JlYXRlRnVsbExpbmsobmFtZSwgYmFzZURhdGEubGlua3MucHJvZmlsZVVybCk7XG5cbiAgICAgIHdpdGhvdXRSZXZpZXdzKGFyZ3MsIGV2YWx1YXRlTGluaywgcHJvZmlsZUxpbmspO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGlvblZhbHVlcyA9IHtcbiAgICAgICAgXCJbdHJ1c3RTY29yZVJhdGluZ11cIjogcmF0aW5nLFxuICAgICAgICBcIlt0cnVzdFNjb3JlXVwiOiB0cnVzdFNjb3JlLFxuICAgICAgICBcIlt0b3RhbFNjb3JlXVwiOiA1LFxuICAgICAgICBcIltyZXZpZXdDb3VudF1cIjogYmFzZURhdGEuYnVzaW5lc3NFbnRpdHkubnVtYmVyT2ZSZXZpZXdzLnRvdGFsLFxuICAgICAgfTtcbiAgICAgIHNldHVwKGFyZ3MpO1xuICAgICAgd2l0aFJldmlld3MoYXJncyk7XG4gICAgICBzZXRQcm9maWxlTGluayhcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYmFzZURhdGEubGlua3MucHJvZmlsZVVybCxcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZXMsXG4gICAgICAgIGxvY2FsZVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgaW5pdCgoKSA9PlxuICAgIGZldGNoU2VydmljZVJldmlld0RhdGEodGVtcGxhdGVJZCkoXG4gICAgICB7IGJ1c2luZXNzVW5pdElkLCBsb2NhbGUsIHRoZW1lLCBsb2NhdGlvbiB9LFxuICAgICAgY29uc3RydWN0XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0VHJ1c3RCb3g7XG4iLCJleHBvcnQgY29uc3Qgd2lkZ2V0U3R5bGVBbGlnbm1lbnQgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiIsImltcG9ydCB7XG4gIHNldEh0bWxDb250ZW50LFxuICBzZXRUZXh0Q29udGVudCxcbiAgcmVtb3ZlRWxlbWVudCxcbn0gZnJvbSAnQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL3V0aWxzJztcblxuY29uc3QgZ2V0RWxlbWVudCA9IChpZCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG5jbGFzcyBNaWNyb0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGRvbUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcy5pZCk7XG4gIH1cblxuICBzZXRIdG1sKGh0bWwpIHtcbiAgICBzZXRIdG1sQ29udGVudCh0aGlzLmRvbUVsZW1lbnQoKSwgaHRtbCk7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBzZXRUZXh0Q29udGVudCh0aGlzLmRvbUVsZW1lbnQoKSwgdGV4dCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgcmVtb3ZlRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQoKSk7XG4gIH1cbn1cblxuY2xhc3MgQ29tcG91bmRNaWNyb0VsZW1lbnQgZXh0ZW5kcyBNaWNyb0VsZW1lbnQge1xuICBzZXRIdG1sKGh0bWwpIHtcbiAgICBzZXRIdG1sQ29udGVudCh0aGlzLmRvbUVsZW1lbnQoKSwgaHRtbCwgZmFsc2UpO1xuICB9XG59XG5cbmNvbnN0IGVsZW1lbnRzID0gKCkgPT4gKHtcbiAgcmF0aW5nOiBuZXcgTWljcm9FbGVtZW50KCd0cC13aWRnZXQtcmF0aW5nJyksXG4gIHN0YXJzOiBuZXcgTWljcm9FbGVtZW50KCdzdGFyLWNvbnRhaW5lcicpLFxuICBzY29yZTogbmV3IE1pY3JvRWxlbWVudCgndHJ1c3Qtc2NvcmUnKSxcbiAgdHJhbnNsYXRpb25zOiBuZXcgTWljcm9FbGVtZW50KCd0cmFuc2xhdGlvbnMtbWFpbicpLFxuICB3cmFwcGVyOiBuZXcgQ29tcG91bmRNaWNyb0VsZW1lbnQoJ3RwLXdpZGdldC13cmFwcGVyJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudHM7XG4iLCJpbXBvcnQgY29uc3RydWN0VHJ1c3RCb3ggZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBtYWtlVHJhbnNsYXRpb25zIH0gZnJvbSAnQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCB7IHBvcHVsYXRlU3RhcnMgfSBmcm9tICdAdHJ1c3RwaWxvdC90cnVzdGJveC1mcmFtZXdvcmstdmFuaWxsYS9saWJfbGVnYWN5L21vZHVsZXMvdGVtcGxhdGVzL3N0YXJzJztcbmltcG9ydCB7IHBvcHVsYXRlTG9nbyB9IGZyb20gJ0B0cnVzdHBpbG90L3RydXN0Ym94LWZyYW1ld29yay12YW5pbGxhL2xpYl9sZWdhY3kvbW9kdWxlcy90ZW1wbGF0ZXMvbG9nbyc7XG5pbXBvcnQge1xuICBtYWtlRW1wdHlTdW1tYXJ5LFxuICBPUklFTlRBVElPTixcbn0gZnJvbSAnQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL3RlbXBsYXRlcy9zdW1tYXJ5JztcbmltcG9ydCB7IGdldEFzT2JqZWN0IGFzIGdldFF1ZXJ5U3RyaW5nIH0gZnJvbSAnQHRydXN0cGlsb3QvdHJ1c3Rib3gtZnJhbWV3b3JrLXZhbmlsbGEvbGliX2xlZ2FjeS9tb2R1bGVzL3F1ZXJ5U3RyaW5nJztcblxuY29uc3Qgd2l0aG91dFJldmlld3MgPSAoeyBlbGVtZW50czogeyB3cmFwcGVyIH0sIHN0cmluZ3MgfSwgdXJsKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OLkhPUklaT05UQUwsXG4gICAgdGl0bGU6IHN0cmluZ3MuZmlyc3RyZXZpZXdlcixcbiAgICB1cmwsXG4gIH07XG4gIGNvbnN0IGVtcHR5U3VtbWFyeSA9IG1ha2VFbXB0eVN1bW1hcnkob3B0aW9ucyk7XG4gIHdyYXBwZXIuc2V0SHRtbChlbXB0eVN1bW1hcnkpO1xufTtcblxuY29uc3QgbWljcm9TdGFyID0gKCkgPT4ge1xuICBjb25zdCB7IGxvY2FsZSB9ID0gZ2V0UXVlcnlTdHJpbmcoKTtcbiAgY29uc3Qgc2V0dXAgPSAoYmFzZURhdGEpID0+IHtcbiAgICBwb3B1bGF0ZUxvZ28oKTtcbiAgICBwb3B1bGF0ZVN0YXJzKGJhc2VEYXRhLCAndHAtd2lkZ2V0LXN0YXJzJywgbnVsbCwgbG9jYWxlKTtcbiAgfTtcblxuICBjb25zdCB3aXRoUmV2aWV3cyA9ICh7IGVsZW1lbnRzOiB7IHNjb3JlIH0sIHN0cmluZ3MgfSkgPT4ge1xuICAgIHNjb3JlLnNldFRleHQoc3RyaW5ncy5yYXRpbmcpO1xuICB9O1xuXG4gIHJldHVybiBjb25zdHJ1Y3RUcnVzdEJveCh7XG4gICAgbmFtZTogJ01pY3JvU3RhcicsXG4gICAgc2V0dXAsXG4gICAgd2l0aFJldmlld3MsXG4gICAgd2l0aG91dFJldmlld3MsXG4gIH0pO1xufTtcblxuY29uc3QgbWljcm9Db21ibyA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2NhbGUgfSA9IGdldFF1ZXJ5U3RyaW5nKCk7XG4gIGNvbnN0IHNldHVwID0gKGJhc2VEYXRhKSA9PiB7XG4gICAgcG9wdWxhdGVMb2dvKCk7XG4gICAgcG9wdWxhdGVTdGFycyhiYXNlRGF0YSwgJ3RwLXdpZGdldC1zdGFycycsIG51bGwsIGxvY2FsZSk7XG4gIH07XG5cbiAgY29uc3Qgd2l0aFJldmlld3MgPSAoe1xuICAgIGVsZW1lbnRzOiB7IHNjb3JlLCByYXRpbmcgfSxcbiAgICBzdHJpbmdzLFxuICAgIGZvcm1hdE51bWJlcixcbiAgICBidXNpbmVzc0VudGl0eToge1xuICAgICAgbnVtYmVyT2ZSZXZpZXdzOiB7IHRvdGFsOiB0b3RhbFJldmlld3MgfSxcbiAgICB9LFxuICB9KSA9PiB7XG4gICAgc2NvcmUuc2V0SHRtbChzdHJpbmdzLnJhdGluZyk7XG4gICAgcmF0aW5nLnNldEh0bWwobWFrZVRyYW5zbGF0aW9ucyh7ICdbTk9SRVZJRVdTXSc6IGZvcm1hdE51bWJlcih0b3RhbFJldmlld3MpIH0sIHN0cmluZ3MubWFpbikpO1xuICB9O1xuXG4gIGNvbnN0cnVjdFRydXN0Qm94KHtcbiAgICBuYW1lOiAnTWljcm9Db21ibycsXG4gICAgc2V0dXAsXG4gICAgd2l0aFJldmlld3MsXG4gICAgd2l0aG91dFJldmlld3MsXG4gIH0pO1xufTtcblxuY29uc3QgbWljcm9UcnVzdFNjb3JlID0gKCkgPT4ge1xuICBjb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgICBwb3B1bGF0ZUxvZ28oKTtcbiAgfTtcblxuICBjb25zdCB3aXRoUmV2aWV3cyA9ICh7XG4gICAgc3RyaW5ncyxcbiAgICBidXNpbmVzc0VudGl0eTogeyB0cnVzdFNjb3JlIH0sXG4gICAgZWxlbWVudHM6IHsgc2NvcmUsIHRyYW5zbGF0aW9ucyB9LFxuICB9KSA9PiB7XG4gICAgc2NvcmUuc2V0VGV4dChzdHJpbmdzLnJhdGluZyk7XG4gICAgdHJhbnNsYXRpb25zLnNldEh0bWwobWFrZVRyYW5zbGF0aW9ucyh7ICdbUkFURURdJzogdHJ1c3RTY29yZS50b0ZpeGVkKDEpIH0sIHN0cmluZ3MubWFpbikpO1xuICB9O1xuXG4gIGNvbnN0cnVjdFRydXN0Qm94KHtcbiAgICBuYW1lOiAnTWljcm9UcnVzdFNjb3JlJyxcbiAgICB3aXRoUmV2aWV3cyxcbiAgICB3aXRob3V0UmV2aWV3cyxcbiAgICBzZXR1cCxcbiAgfSk7XG59O1xuXG5jb25zdCBtaWNyb1Jldmlld0NvdW50ID0gKHsgbWluUmV2aWV3Q291bnQgPSAwLCB3aXRob3V0UmV2aWV3c1ByZWZlcnJlZFN0cmluZ0lkID0gJycgfSkgPT4ge1xuICBjb25zdCBtaW5SZXZpZXdDb3VudEludGVnZXIgPSBwYXJzZUludChtaW5SZXZpZXdDb3VudCwgMTApIHx8IDA7XG4gIGNvbnN0IHNldHVwID0gKCkgPT4ge1xuICAgIHBvcHVsYXRlTG9nbygpO1xuICB9O1xuXG4gIGNvbnN0IHdpdGhSZXZpZXdzID0gKHtcbiAgICBlbGVtZW50czogeyB0cmFuc2xhdGlvbnMgfSxcbiAgICBidXNpbmVzc0VudGl0eToge1xuICAgICAgbnVtYmVyT2ZSZXZpZXdzOiB7IHRvdGFsOiB0b3RhbFJldmlld3MgfSxcbiAgICB9LFxuICAgIHN0cmluZ3MsXG4gICAgZm9ybWF0TnVtYmVyLFxuICAgIG1pblJldmlld0NvdW50ID0gbWluUmV2aWV3Q291bnRJbnRlZ2VyLFxuICB9KSA9PiB7XG4gICAgaWYgKG1pblJldmlld0NvdW50IDw9IHRvdGFsUmV2aWV3cykge1xuICAgICAgdHJhbnNsYXRpb25zLnNldEh0bWwoXG4gICAgICAgIG1ha2VUcmFuc2xhdGlvbnMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ1tTRUVPVVJdJzogc3RyaW5ncy5zZWVvdXIsXG4gICAgICAgICAgICAnW05PUkVWSUVXU10nOiBmb3JtYXROdW1iZXIodG90YWxSZXZpZXdzKSxcbiAgICAgICAgICAgICdbUkVWSUVXU09OXSc6IHN0cmluZ3MucmV2aWV3c29uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RyaW5ncy5tYWluXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zbGF0aW9ucy5zZXRIdG1sKHN0cmluZ3Muc2Vlb3VycmV2aWV3c29uKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgd2l0aG91dFJldmlld3NXaXRoUHJlZmVycmVkU3RyaW5nID0gKFxuICAgIHsgZWxlbWVudHM6IHsgd3JhcHBlciB9LCBidXNpbmVzc0VudGl0eTogeyBkaXNwbGF5TmFtZSB9LCBzdHJpbmdzIH0sXG4gICAgZXZhbHVhdGVMaW5rLFxuICAgIHByb2ZpbGVMaW5rID0gJydcbiAgKSA9PiB7XG4gICAgbGV0IHN0cmluZ0lkID0gJ2ZpcnN0cmV2aWV3ZXInO1xuICAgIGlmIChbJzEnLCAnMicsICczJ10uc29tZSgoaXRlbSkgPT4gaXRlbSA9PT0gd2l0aG91dFJldmlld3NQcmVmZXJyZWRTdHJpbmdJZCkpIHtcbiAgICAgIHN0cmluZ0lkID0gYCR7c3RyaW5nSWR9JHt3aXRob3V0UmV2aWV3c1ByZWZlcnJlZFN0cmluZ0lkfWA7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gWycxJywgJzInXS5zb21lKChpdGVtKSA9PiBpdGVtID09PSB3aXRob3V0UmV2aWV3c1ByZWZlcnJlZFN0cmluZ0lkKVxuICAgICAgPyBwcm9maWxlTGlua1xuICAgICAgOiBldmFsdWF0ZUxpbms7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgb3JpZW50YXRpb246IE9SSUVOVEFUSU9OLkhPUklaT05UQUwsXG4gICAgICB0aXRsZTogbWFrZVRyYW5zbGF0aW9ucyh7ICdbQ09NUEFOWU5BTUVdJzogZGlzcGxheU5hbWUgfSwgc3RyaW5nc1tzdHJpbmdJZF0pLFxuICAgICAgdXJsLFxuICAgIH07XG4gICAgY29uc3QgZW1wdHlTdW1tYXJ5ID0gbWFrZUVtcHR5U3VtbWFyeShvcHRpb25zKTtcbiAgICB3cmFwcGVyLnNldEh0bWwoZW1wdHlTdW1tYXJ5KTtcbiAgfTtcblxuICBjb25zdHJ1Y3RUcnVzdEJveCh7XG4gICAgbmFtZTogJ01pY3JvUmV2aWV3Q291bnQnLFxuICAgIHdpdGhSZXZpZXdzLFxuICAgIHdpdGhvdXRSZXZpZXdzOiB3aXRob3V0UmV2aWV3c1dpdGhQcmVmZXJyZWRTdHJpbmcsXG4gICAgc2V0dXAsXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbWljcm9Db21ibywgbWljcm9SZXZpZXdDb3VudCwgbWljcm9TdGFyLCBtaWNyb1RydXN0U2NvcmUgfTtcbiJdfQ==
