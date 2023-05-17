// const block = document.querySelector('.graham')

// const phone = document.querySelector('.graham')
// const username = document.querySelector('.graham')
// const website = document.querySelector('.graham')
// const email = document.querySelector('.graham')

// const allGrahams = "";

// block.innerHTML = allGrahams
// phone.innerHTML = allGrahams
// username.innerHTML = allGrahams
// website.innerHTML = allGrahams
// email.innerHTML = allGrahams

// const user = async ()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()

//     const user = data[0]

//     // for(i of user)

//    const name  = `<li>name: ${user.name} </li>`
//    const email  = `<li>email: ${user.email} </li>`
//    const phone  = `<li>phone: ${user.phone}</li> `
//    const  username  = `<li>username: ${user.username} </li>`
//    const  website  = `<li>website: ${user.website}</li> `

//    const content = name + email + phone + username + website;
//    block.innerHTML = content
//     content.style.marginTop = "20px"

// }
// user()














































const input = document.querySelector('#input')
const button = document.querySelector('#search')

const foundblock = document.querySelector('.foundblock')

// function  searchBlock () {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
 
// }
 
const searchBlock = async () => {
    const inpVal = input.value
    if(inpVal < 0){
        foundblock.innerHTML = `<h1 >ERROR</h1>`
    }else if(inpVal > 10){
        foundblock.innerHTML = `<h1 >Такого не существует!</h1>`
    }
    else{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${inpVal}`);
        const data = await response.json();
    foundblock.innerHTML = `
    <div class="graham">${data.id}
    <li>name: ${data.name}</li>
    <li>email: ${data.email}</li>
    <li>phone: ${data.phone}</li>
    <li>username: ${data.username}</li>
    <li>website: ${data.website}</li></div>
    
    `
    }

}


const blocks = document.querySelector('.blocks');
console.log(blocks);
const user = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // const user = data[0];
    data.map((el)=>{
        blocks.innerHTML +=`
        <div class="graham">${el.id}
        <li>name: ${el.name}</li>
        <li>email: ${el.email}</li>
        <li>phone: ${el.phone}</li>
        <li>username: ${el.username}</li>
        <li>website: ${el.website}</li></div>
        
        
    `
        
    })
    

    // const content = `
    //     <li>name: ${user.name}</li>
    //     <li>email: ${user.email}</li>
    //     <li>phone: ${user.phone}</li>
    //     <li>username: ${user.username}</li>
    //     <li>website: ${user.website}</li>
    // `;

    // blocks.forEach(block => {
    //     block.innerHTML = content;
    //     block.querySelectorAll('li').forEach(li => {
    //         li.style.listStyleType = 'none';
    //     });
    // });
  
      
      
};

user();

button.addEventListener("click", searchBlock )