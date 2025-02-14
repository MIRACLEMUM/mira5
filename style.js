/*const todolist =['make dinner','make juice'];


function rendertodolist(){



   let todolistHTML = '';

   for (let i = 0; i < todolist.length; i++) {
      const element = todolist[i];

      const html =`<p>
      ${todo}
      <button onclick="
      todolist.splice(${i},i);
      rendertodolist();
      
      ">delete</button>
      </p>`;
      todolistHTML +=  html;
      
   }

   console.log(todolistHTML);

   document.querySelector('.js-todo-list') .innerHTML = todolistHTML;
}
   
function addtodo() {
   const inputElement = document.querySelector('.js-name-input')
   const name = inputElement.value;
   //console.log(name)

   todolist.push(name)
   console.log(todolist)

//inputElement helps reset the text inside the form
   inputElement.value = '';

   rendertodolist();

}


*/

 let fullName = 'miracle sunday';
  let age = 23;
  let student = false;


//console.log(name)
document.getElementByid('p1').textContent = fullName;
document.getElementByid('p2') .textContent = age;
document.getElementByid('p3') .textContent = student;


let students = 30;

students = students +1;

console.log(students)