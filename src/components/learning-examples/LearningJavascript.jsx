// Objects Created dierectly
const person = {
    name: 'Mitthu',
    address:{
        line1: '13222',
        line2: 'Middleton Farmln',
        city: 'herndon',
    },
    profiles : ['twitter', 'meta', 'linkedin'],
    // function
    // eslint-disable-next-line array-callback-return
    // printProfile: () => {
    //     person.profiles.map(
    //         (profile) => {
    //             console.log(profile)
    //         }
    //     )
    //     console.log(person.profiles[2])
    // }
}

// functions can be stored as an object

// const person = {
//     profiles: ['twitter', 'meta', 'linkedin'],
//     // Function to print all profiles
//     printProfile: function() {
//         for (let i = 0; i < this.profiles.length; i++) {
//             console.log(this.profiles[i]);
//         }
//         // If you still need to specifically log the third profile
//         console.log(this.profiles[2]);
//     }
// };


// const person = {
//     profiles: ['twitter', 'meta', 'linkedin'],
//     // Use a function expression to ensure 'this' refers to the person object
//     printProfile: function() {
//         this.profiles.forEach(profile => console.log(profile));
//         // Direct access if you specifically need the third profile
//         console.log(this.profiles[2]);
//     }
// };



export default function LearningJavascript(){
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.city}</div>
        <div>{person.profiles[1]}</div>
        {/* <div>{ person.printProfile() }</div> */}
        </>
    )
}