let x = '' //first number
let y = '' //second number
let sign = '' //operation sign
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', 'x', '/', '%', '√']

// out screen
const out = document.querySelector('.input__window p')

function clearAll () {
    x = ''
    y = ''
    sign = ''
    finish = false
    out.textContent = 0
}
document.querySelector('._delete').onclick = clearAll

const arr = document.querySelectorAll('.num')
arr.forEach((el) => {
  el.addEventListener('click', (e) => {
    console.log(e.target)
    out.textContent = ''
    const key = e.target.textContent
    if (digit.includes(key)) {
        if (y === '' && sign === '') {
            x += key
            out.textContent = x
        } else if (x !== '' && y !== '' && finish) {
            y = key
            finish = false
            out.textContent = y
            console.log('ASD', x, y, sign)
        } else {
            y = y + key
            out.textContent = y
            console.log('Aff', x, y, sign)
        }
        console.table(x, y, sign)
        return
    }

    if (action.includes(key)) {
        if (y) {
            switchCase()
        }
        sign = key
        out.textContent = sign
        console.table(x, y, sign)
        return
    }
    if (key === '=') {
        switchCase()
    }
    // if (key === '=' && y === '') {
    //      y = x
    // }
        function switchCase () {
            console.log(sign)
            switch (sign) {
                case "+":
                    x = (+x) + (+y)
                    y = ''
                    console.log('FFF', x, y, sign)
                    break
                case "-":
                    x = x - y
                    y = ''
                    break
                case "x":
                    x = x * y
                    y = ''
                    break
                case "/":
                    if (y === '0') {
                        out.textContent = 'Ошибка'
                        x = ''
                        y = ''
                        sign = ''
                        return
                    }
                    x = x / y
                    y = ''
                    break
                case "√":
                    x = Math.sqrt(x)
                    break
                case "%":
                    x = (x / 100) * y
                    break
            }
            finish = true
            out.textContent = x
            console.table(x, y, sign)
        } 
        
  })
})

