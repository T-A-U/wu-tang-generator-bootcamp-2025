//made with help
form = document.getElementById('wuQuestionaire') 
form.addEventListener('submit', e => {
    e.preventDefault();
    // generateWuTang();
})

function generateWuTang() {
    // const q = document.forms.wuQuestionaire;
    // console.log(q)
    // const parts = [form.elements.q1.value, form.elements.q2.value, form.elements.q5.value];
    // console.log(parts)
    // const name = parts.join('');
    // console.log(name)
   
    // const formData = new FormData(form) 
    // console.log(form.elements.q3.value)
    let name = ''
    if(form.elements.q2.value >3 ){
        name += "The coolest "
    }
    if(form.elements.q2.value <3 ){
        name += "The geeky "
    }
    if(form.elements.q2.value >3 ){
        name += "The average "
    }
    if(form.elements.q3.value === 'Wealth'){
        name+= "MoneyBagz "
    }
    if(form.elements.q3.value === 'Knowledge'){
        name+= "Scholarly Shadow "
    }
    if(form.elements.q3.value === 'Power'){
        name+= "Stregth driven "
    }
    if(form.elements.q3.value === 'Patience'){
        name+= "Timeless "
    }
    if(form.elements.q4.value === 'Flow'){
        name+= "Lyricle "
    }
    if(form.elements.q4.value === 'Cadence'){
        name+= "Miracle "
    }
    if(form.elements.q4.value === 'Difficulty'){
        name+= "Masterful "
    }
    if(form.elements.q4.value === 'Yes'){
        name+= "Magus "
    }
    if(form.elements.q4.value === 'No'){
        name+= "Masterful "
    }

    //refactor into more wutang sounding 

    document.getElementById('result').textContent = `Your generated name: ${name}`;
}  



//some wutang names to add to an array which  we add
//Jade General
// Fresh Protector
// Bold Source