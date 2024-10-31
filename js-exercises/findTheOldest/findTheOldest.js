const findTheOldest = function(people){
    let oldest = -1;
    let oldestAge = 0;
    for(let i = 0; i < people.length; i++){
        let death = people[i].yearOfDeath;
        if(death == undefined){
            const now = new Date();
            death = now.getFullYear();
        }
        let age = death - people[i].yearOfBirth;
        if(age > oldestAge){
            oldest = people[i];
            oldestAge = age
        }

    }
    return(oldest);
}

module.exports = findTheOldest