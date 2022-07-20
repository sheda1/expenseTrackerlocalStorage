class count{
    static c = 1;
}
//const a = new count();
const form = document.getElementById('form');

form.addEventListener('submit',onsubmit);

function onsubmit(e){
    
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    

    let obj = {
        amount,
        description,
        category
    };
    const ab = "Expense" + count.c++;
    localStorage.setItem(ab,JSON.stringify(obj));
    display(obj,ab);
}

function display(data,ab){
    document.getElementById('amount').value = "";
    document.getElementById('description').value = "";
    document.getElementById('category').value = "";

    const parentNode = document.getElementById('list');
    const childHTML = `<li id =${ab} > ${data.amount} - ${data.description} - ${data.category} 
                        <button onCLick = deleteUser('${ab}')>Delete</button>
                        <button onClick = edit('${data.amount}','${data.description}','${data.category}')>Edit</button>
                        </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;                    
}

window.addEventListener("DOMContentLoaded",() => {
    const localStorageObj = localStorage;
    const localStorageKeys = Object.keys(localStorageObj);

    for (let i = 0; i < localStorageKeys.length; i++){
        const key = localStorageKeys[i];
        const data = localStorageObj[key];
        //console.log(data);
        const parseData = JSON.parse(data);
        console.log(parseData);
        display(parseData,key);
        
    }
});

function deleteUser(ab){
   

    remove(ab);
    localStorage.removeItem(ab);
}

function remove(ab){
    const li = document.getElementById(ab);
    li.remove();
}

function edit(a,d,c){
    document.getElementById('amount').value = a;
    //console.log(document.getElementById('amount').value);
    document.getElementById('description').value = d;
    document.getElementById('category').value = c;
    console.log(a);
}
