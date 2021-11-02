function totalPrice() {
    const gname = document.getElementById("gname").value;
    const startingbid = document.getElementById("startingbid").value;
    const education = document.getElementById("education").value;
    const networth = document.getElementById("networth").value;
    const caste = document.getElementById("caste").value;
	const skills = document.getElementsByClassName("skills");
	const age = document.getElementsByName("age");
    const gossips = document.getElementsByClassName("gossips");
	const loveletter = document.getElementById("loveletter").value;



	const getRadioValue = (node_list, price) => {  
	    node_list.forEach(item => {
	        if (item.checked) {
	            price = price * Number(item.value)
	        }
	    })
	    return price;
	}


    const getCheckboxValuesForLoop = (html_collection, price) => { // Check this one, it should work for values with coefficients and with integers
        for (let i=0; i < html_collection.length; i++) {  
            if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
                price = price + Number(html_collection[i].value)
            }
            else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
                price = price * Number(html_collection[i].value)
            }
        }
        return price;
    }
    

    const getCheckboxValuesFilterReduce = (html_collection, price) => { // create a function that accepts your HTMLCollection of elements and the current price
        let list = Array.from(html_collection).filter(filteration) // this method turn your HTMLCollection into array
        let result = list.reduce(reducer, price)
        return result;
    }
    
    const reducer = (accumulator, item) => {
        return accumulator + Number(item.value);
    }
    const filteration = (item) => {
        return item.checked;
    }

	const calculate = () => {
		let price = Number(startingbid);
		console.log(price);
    	price = price * Number(education);
		console.log(price);
    	price = price * Number(networth);
		console.log(price);
        price = price + Number(caste);
        console.log(price);
        price = getCheckboxValuesFilterReduce(skills, price);
		console.log(price);
	    price = getRadioValue(age, price);
		console.log(price);
	    price = getCheckboxValuesForLoop(gossips, price);
		console.log(price);

        let person = {
            groom_name: gname,
    
            groom_price: price,
    
            letter_to_groom: loveletter
        }

       

        document.getElementById("result").innerHTML = `The price for your groom ${person.groom_name} 
        is ${person.groom_price}. Your love letter is "${person.letter_to_groom}"`;
    }

    calculate();

    
}

    var x = document.getElementById("myBtn");
    x.addEventListener("click", forCall);
 
    function forCall() {
    totalPrice();
}






