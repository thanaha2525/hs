let bones = [];

function onInit() {
    const buttonGroup = document.getElementById("button-group");
    for (let i = 1; i <= 41; i++) {
        const bone = { name: "R" + i, value: 0 };
        bones.push(bone);
        const btn = document.createElement("Button");
        btn.className += "button " + "R" + i;
        btn.id = "R" + i;
        btn.onclick = function () { onClickButton(btn.id) };
        buttonGroup.appendChild(btn);
    }
    for (let i = 1; i <= 41; i++) {
        const bone = { name: "L" + i, value: 0 };
        bones.push(bone);
        const btn = document.createElement("Button");
        btn.className += "button " + "L" + i;
        btn.id = "L" + i;
        btn.onclick = function () { onClickButton(btn.id) };
        buttonGroup.appendChild(btn);
    }

    onClickButton();
}

function onClickButton(name) {
    // document.getElementById("show").innerHTML = null
    bones.forEach(element => {
        if (element.name === name) {
            element.value++;
            if (element.value > 2 || element.value === 0) {
                element.value = 0;
                document.getElementById(element.name).style.background = "white"
            } else if (element.value === 1) {
                document.getElementById(element.name).style.background = "yellow"
            } else {
                document.getElementById(element.name).style.background = "red"
            }
        }
        // document.getElementById("show").innerHTML += "<tr><td>" + element.name + "</td>" + "<td>" + element.value + "</td></tr>";
    });
}
