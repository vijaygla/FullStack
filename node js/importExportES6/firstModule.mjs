// Named export
export const printHello = (name) => {
    return name;
};

// Default export
const printAge = (age) => {
    return age; 
}

export function simple() {
    console.log("This is simple text");
}


export default printAge;
