let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "aggarwal.yash0910",
    "email": "aggarwal.yash0910@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    resultscont.innerHTML = `<img width="123" src="img/Animation - 1721042999219.gif" alt="">`
    let key = `ema_live_0ibCPwMtH0LFiUQQumCb8BrZ4SSAKvYXi1ukuO9E`
    let email = document.getElementById("exampleInputEmail1").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        str = str + `<div>${key} : ${result[key]}</div>`
    }
    console.log(str)
    resultscont.innerHTML = str
})
