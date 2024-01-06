const imginput= document.querySelector("#img")
const name= document.querySelector("#name")
const price= document.querySelector("#price")
const loginButton= document.querySelector("#loginButton")
loginButton.addEventListener('click', (e)=>{
  e.preventDefault()
    const imageValue= imginput.value
    const nameValue= name.value
    const priceValue= price.value
    const product={
        image: imageValue,
        name: nameValue,
        price: priceValue
    }
    fetch('https://6554ca4e63cafc694fe6f7ae.mockapi.io/api/toan/scla', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(product)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
        alert('Đã thêm sản phẩm thành công')
      }).catch(error => {
        // handle error
      })
})