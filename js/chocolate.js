const box= document.querySelector('.big')
console.log(box)
fetch('https://6554ca4e63cafc694fe6f7ae.mockapi.io/api/toan/scla', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(chocolates => {
    console.log(chocolates)
  // Do something with the list of tasks
  chocolates.forEach(chocolate=>{
    const container= document.createElement('div')
    container.classList.add('box')
    container.innerHTML=
   ` <div class="img-box">
              <img src="${chocolate.image}" alt="">
            </div>
            <div class="detail-box">
              <h6>
                Yummy <span>${chocolate.name}</span>
              </h6>
              <h5>
                ${chocolate.price}
              </h5>
              <a href="">
                BUY NOW
              </a>
            </div>`
    box.appendChild(container)
  })
}).catch(error => {
  // handle error
})