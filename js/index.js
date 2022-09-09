const getInputValueByID = (id) =>{
    const inputValueField  = document.getElementById(id);
    const inputValue = inputValueField.value;
    inputValueField.value ='';
    return inputValue
}


document.getElementById('submit').addEventListener('click', function(){
    const namefield = getInputValueByID('name');

    const Emailfield = getInputValueByID('Email');
    const messagefield = getInputValueByID('messageBox');

    // console.log(`name is ${namefield} email is  ${Emailfield}`)
    console.log(namefield,  Emailfield, messagefield)
    saveInformationnInLocalstoraage(namefield , Emailfield, messagefield)
})

const  saveInformationnInLocalstoraage = (name, emil, message) =>{
    const savedinformation = gettingDatafromStorage();
    savedinformation [name, emil, message] = {name, emil, message} ;
    const stringifiedMessage = JSON.stringify(savedinformation);
    localStorage.setItem('message', stringifiedMessage)
}
const gettingDatafromStorage = ()=>{
    let savedMessage =  localStorage.getItem('email')
    let emaail = {};
    
    if(savedMessage){
        emaail =JSON.parse(savedMessage)
    }
    return emaail;
}

