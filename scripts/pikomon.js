import { getPikomon } from "./database.js";


export const printData = () => {
    const pikomons = getPikomon()
    let pikomonHTML = ""
    for (const pikomon of pikomons) {
        pikomonHTML += `
            <article class="piko-card" data-name="${pikomon.name}">
                <img src="${pikomon.imageUrl}" class="piko-img">
                <h3 class="piko-name">${pikomon.name}</h3>
                <div class="piko-info info-text">
                    <p class="piko-category">Category: ${pikomon.category}</p>
                    <p class="piko-abilities">Abilities: ${pikomon.abilities}</p>
                    <p class="piko-weakness">Weakness: ${pikomon.weakness}</p>
                </div>
                <audio src="${pikomon.audio}" id="${pikomon.name}">
            </article>
        `
    }
    return pikomonHTML
}