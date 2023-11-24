// ("2" > 1) => true
// ("02" > 1) => true

// (null > 0) => false
// (null == 0) => false
// (null >= 0) => true //!The reason is that an equality check == and comparisons < > >= <= work differently. Comparisons convert null to a number , treating it as 0 .That's why  null >= 0 is true and  null > 0 is false

// (undefined > 0) => false
// (undefined == 0) => false
// (undefined < 0) => false

//! Strict Check
// === check also data types along with value