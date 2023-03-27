const counter= document.querySelectorAll('.counter');

counter.forEach(count => {
    count.innerText='0';

    const updateCounter = ()=>{
        const  target= +count.getAttribute('data-target') 

        console.log(typeof target, target) //its type is string and value is in string
        // for convert string to number we use +
        const c=+count.innerText
        console.log(c);
        const increment = target/200;

        if(c<target){
            count.innerText=`${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,1);
        }
    }
    updateCounter()

})