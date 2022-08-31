function attachGradientEvents() {
        let gradientElement = document.getElementById('gradient')
        let result = document.getElementById('result')
    
        let gradientMouse = (e) =>{
            let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100)
            result.textContent = `${percent}%`
        }
        gradientElement.addEventListener('mousemove', gradientMouse)
}