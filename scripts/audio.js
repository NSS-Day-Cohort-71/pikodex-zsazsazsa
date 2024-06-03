import { getPikomon } from "./database.js"


export const playSound = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const pikoData = getPikomon();

        // Select all piko-card elements
        const pikoCards = document.querySelectorAll('.piko-card');

        pikoCards.forEach((pikoCard) => {
            // Get the name attribute from the card to match with pikoData
            const pikoName = pikoCard.getAttribute('data-name');

            // Find the corresponding piko object from pikoData
            const piko = pikoData.find(p => p.name === pikoName);

            if (piko) {
                // Get the corresponding audio element
                const pikoCardAudio = document.getElementById(piko.name);

                if (pikoCardAudio) {
                    // Attach event listener to the card
                    pikoCard.addEventListener("mouseenter", () => {
                        pikoCardAudio.play();
                    });
                }
            }
        });
    });
};



