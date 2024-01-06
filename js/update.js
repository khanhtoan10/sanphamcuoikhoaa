// lay ra the input
const imginput= document.querySelector("#img")
const name= document.querySelector("#name")
const price= document.querySelector("#price")
const loginButton= document.querySelector("#loginButton")
loginButton.addEventListener('click', (e)=>{
    e.preventDefault()
    //lay value ra
    const imageValue= imginput.value
    const nameValue= name.value
    const priceValue= price.value
    const product={
        image: imageValue,
        name: nameValue,
        price: priceValue
    }

        fetch('https://6554ca4e63cafc694fe6f7ae.mockapi.io/api/toan/scla/8', {
    method: 'PUT', // or PATCH
    headers: {'content-type':'application/json'},
    body: JSON.stringify(product)
    }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
    }).then(task => {
    // Do something with updated task
    alert('ok sua thanh cong')
    }).catch(error => {
    // handle error
    })
})