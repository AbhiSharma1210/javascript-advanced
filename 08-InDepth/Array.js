/**
 * In JS Array are of 2 types
 * 1. Continous - recommend, more optimized.
 * 2. Holey
 * 
 * Both of these are further sub divided in 3 parts.
 * 1. SMI (Small Integer)
 * 2. Packed
 * 3. Double (Float, String, Function)
 */

const arrayOne = [1, 2, 3, 4, 5] // This is a continous array
const arrayTwo = [1, 2, , 4, 5] // This is a holey array

// This is a PACKED_SMI_ELEMENT array. Most optimized array
const newOne = [1, 2, 3]

// The moment a double, string is pushed in array, it downgrades to PACKED_DOUBLE_ELEMENTS array.
newOne.push(5.5)

// This further downgrades the array in PACKED_ELEMENTS. 
// When 3 or more types of variable/elements are in single array its then treated as PACKED_ELEMENTS.
newOne.push('Random')

// Once an array is downgraded, it can never be upgraded. Even when array is updated to hold SMALL INTEGER.