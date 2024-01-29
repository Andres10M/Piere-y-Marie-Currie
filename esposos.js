function newLyweds(scientist, teacher) {
    
    let husband = scientist;
    let wife = teacher;
   
    return {
        boyfriend: scientist,
        bride: teacher
    };        
}

let familyDeath = newLyweds({ name: "Pierre Curie", occupation: "Physicist" }, 
                           { name: "Marie Curie", occupation: "Chemist" });

console.log("Antes de la 'muerte por un carruaje':", familyDeath);


delete familyDeath.boyfriend;

console.log("\nDespués de la 'muerte':");
console.log("Novio:", familyDeath.boyfriend);
console.log("Novia:", familyDeath.bride);       

familyDeath.bride.birthday = "November 7, 1867";
familyDeath.bride.contribution = "Pioneered research on radioactivity";

console.log("\nInformación adicional sobre Marie Curie:");
console.log("Nombre:", familyDeath.bride.name);
console.log("Fecha de nacimiento:", familyDeath.bride.birthday);
console.log("Contribución destacada:", familyDeath.bride.contribution);