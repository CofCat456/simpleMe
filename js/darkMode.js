const moonPath = "M15.1845 7.96823C15.1286 11.8524 11.9345 14.9559 8.05026 14.8999C4.16606 14.844 1.06262 11.6499 1.11854 7.76573C1.17446 3.88154 4.36856 0.778107 8.25277 0.834026C8.18878 5.27885 9.06926 7.88019 15.1845 7.96823Z"
const sunPath = "M8.50011 2.875L8.5 0M12.5 4.5L14.5 2.5M4 4.5L2.5 2.5M12.5 12.5761L14.5 14.75M14.1251 8.45653H17M2.87513 8.5H0M8.5 17L8.49847 16L8.50013 14.125M12.5746 8.5C12.5746 10.7512 10.7496 12.5761 8.49847 12.5761C6.24731 12.5761 4.42237 10.7512 4.42237 8.5C4.42237 6.24884 6.24731 4.42391 8.49847 4.42391C10.7496 4.42391 12.5746 6.24884 12.5746 8.5ZM2.87513 14.75L3.84962 13.7566L4.60617 13L2.87513 14.75Z"

const darkMode = document.querySelector("#darkMode")
let toggle = false;

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration : 150,
        easing : "linear"
    })
    timeline.add({
        targets: ".sun",
        d:[
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets : "body",
        backgroundColor: toggle ? "rgb(32, 32, 35)" : "rgb(240, 231, 219)",
        color : toggle ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)" 
    })

    .add({
        targets : ".darkmodeBtn",
        backgroundColor : toggle ? "rgb(251, 211, 141)" : "rgb(166, 141, 173)"
    })

    .add({
        targets : ".bTn",
        color : toggle ? "rgb(129, 230, 217)" : "rgb(166, 141, 173)" 
    })

    .add({
        targets : ".top",
        backgroundColor : toggle ? "rgb(32, 32, 35, .5)" : "rgb(255, 255, 255, 0.25)"
    })

    .add({
        targets : ".img-cat",
        color : toggle ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)" 
    })

    .add({
        targets : ".name",
        color : toggle ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)" 
    })

    .add({
        targets : ".blcak-box",
        backgroundColor : toggle ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.36);"
    })

    .add({
        targets : ".experience",
        textDecorationColor: toggle ? "#525252" : "rgb(223, 211, 195)"
    })
    
    .add({
        targets : ".interests",
        textDecorationColor: toggle ? "#525252" : "rgb(223, 211, 195)"
    })
    
    .add({
        targets : ".contact",
        textDecorationColor: toggle ? "#525252" : "rgb(223, 211, 195)"
    })

    .add({
        targets : ".portfolio",
        textDecorationColor: toggle ? "#525252" : "rgb(223, 211, 195)"
    })

    .add({
        targets : ".skil",
        color : toggle ? "rgb(255,255,255,.4)" : "rgb(0, 0, 0,.8)" 
    })

    if(!toggle)
    {
        toggle = true
    }
    else
    {
        toggle = false
    }

    if(toggle === true)
    {
        document.querySelector('.bigImg').src = "picture/004.jpg"
    }
    else if(toggle === false)
    {
        document.querySelector('.bigImg').src = "picture/003.jpg"
    }
})

const btnList = document.querySelectorAll('.bTn')
btnList.forEach((e) => {
    e.addEventListener('mouseover', () => {
        if(toggle === true)
        {
            e.classList.add('btnColorMoon')
        }
        else
        {
            e.classList.add('btnColorSun')
        }
    })

    e.addEventListener('mouseout', () => {
        if(toggle === true)
        {
            e.classList.remove('btnColorMoon')
        }
        else
        {
            e.classList.remove('btnColorSun')
        }
    })
})