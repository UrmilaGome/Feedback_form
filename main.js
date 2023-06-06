let form =document.querySelector('form')
let ul = document.querySelector('ul')
let input = document.querySelectorAll('input')
let emoji = document.querySelectorAll('span')
let button = document.querySelector('button')
let para = document.createElement('p')
let select = document.querySelectorAll('select')
let size= document.querySelectorAll('option')
let emojis = document.querySelector('.emojis')

console.log(input)

select.forEach(rating=> {
    rating.addEventListener("click",(e) => {
        e.preventDefault();
        para.innerText= rating.innerText
    })
})


let emojiData

const getEmoji = (e) => {
    emojiData = e.target.className
    console.log(emojiData)
}

emojis.addEventListener('click' , getEmoji)


const feedBack = (e) => {
    e.preventDefault();
    console.log(select.value)
   let newLi = document.createElement('li');
   newLi.innerText =` Name: ${input[0].value}  ,   Review:${input[1].value}  ,   Rating: ${para.innerText}`;
   newLi.className = 'list-group-item rounded-0';
   let i = document.createElement('i')
   i.className = emojiData
   newLi.appendChild(i)
   console.log(newLi);
   ul.appendChild(newLi); 
   form.reset();
   
};


form.addEventListener("submit" ,feedBack)

