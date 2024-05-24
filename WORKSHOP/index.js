function login(e) {
    e.preventDefault()
    let username = e.target[0].value
    let password = e.target[1].value
    if (username === 'purnash' && password === '123456') {
        location = "./home.html"
    }
    else{
        alert("enter username & password")
    }


}

