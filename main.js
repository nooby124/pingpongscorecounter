var team1check = 0
var team2check = 0
var endonscore = document.getElementById("endonscore")
var limit = document.getElementById("endonscore").value - 1
var defaultlimit = 10 // no i did not lie
var deuceenabled = false
var scorecounter = 0
var templimit = 0

function enabledeuce() {
    if (document.getElementById("enabledeuce").checked) {
        deuceenabled = true
        console.log("deuce enabled")
    }
    if (document.getElementById("enabledeuce").checked == false) {
        deuceenabled = false
        console.log("deuce disabled")
    }
}

function isDivisible(number, x){ // i stole this from stack overflow
    return !(number % x);
   }

function omg() {
    document.getElementById("eventiguess").innerHTML = ""
    if (isDivisible(scorecounter,5)) {
        console.log("pls pls tavi")
        document.getElementById("eventiguess").innerHTML = "switch who serves"
    }
    if (document.getElementById("team2score").innerHTML.includes("t")) {
        return
    }
    if (document.getElementById("team1score").innerHTML.includes("t")) {
        return
    }
}

function addteam1score() {
    scorecounter += 1
    document.getElementById("eventiguess").innerHTML = ""
    omg()
    console.log(scorecounter)
    if (document.getElementById("team1score").innerHTML == "team 1's score" && team1check == 0) {
        document.getElementById("team1score").innerHTML = "1"
        team1check += 1
        return
    }
    if (Number(document.getElementById("endonscore").value) > 0 && Number(document.getElementById("team1score").innerHTML) > Number(limit) && templimit == 0) {
        document.getElementById("team1score").innerHTML = (document.getElementById("endonscore").value - 1)
    }
    if (Number(document.getElementById("endonscore").value) == 0 && Number(document.getElementById("team1score").innerHTML) > defaultlimit) {
        document.getElementById("team1score").innerHTML = defaultlimit
    }

    document.getElementById("team1score").innerHTML = String(Number(document.getElementById("team1score").innerHTML) + 1)
    
    if (Number(document.getElementById("team1score").innerHTML) == document.getElementById("endonscore").value && templimit == 0) {
        console.log("team1 wins")
        scorecounter = 0 //reset score counter so no bugs
        document.getElementById("eventiguess").innerHTML = "team 1 wins"
    }

    if (document.getElementById("endonscore").value == 0 && Number(document.getElementById("team1score").innerHTML == defaultlimit + 1)) {
        console.log("team1 wins")
        scorecounter = 0 //reset score counter so no bugs
        document.getElementById("eventiguess").innerHTML = "team 1 wins"
    }

    if (document.getElementById("team2score").innerHTML.includes("t") == true) {
        document.getElementById("team2score").innerHTML = "0"
    }
    if (Number(document.getElementById("endonscore").value) == 0 && deuceenabled == true) {
        if (document.getElementById("team1score").innerHTML == "10" && document.getElementById("team2score").innerHTML == "10") {
            console.log("deuce")
            defaultlimit = 11 // that is 12 because yes
        }
    }


    if (defaultlimit == 11 && document.getElementById("team2score").innerHTML == "11") {
        String(Number(document.getElementById("team2score").innerHTML = defaultlimit - 1))
    }

    if (Number(document.getElementById("endonscore").value) !== 0 && deuceenabled == true) {
        if (document.getElementById("team1score").innerHTML == String(Number(document.getElementById("endonscore").value) - 1) && document.getElementById("team2score").innerHTML == String(Number(document.getElementById("endonscore").value) - 1)) {
            console.log("deuce")
            templimit = Number(document.getElementById("endonscore").value) + 1
            console.log(templimit)
        }
    }
    if (templimit !== 0 && deuceenabled == true) {
        if (Number(document.getElementById("team1score").innerHTML) == templimit) {
            console.log("team 1 wins")
            document.getElementById("eventiguess").innerHTML = "team 1 wins"
        }
        if (Number(document.getElementById("team2score").innerHTML) == templimit - 1) {
            String(Number(document.getElementById("team2score").innerHTML = templimit - 2)) 
        }
    }
    

}

function addteam2score() {
    document.getElementById("eventiguess").innerHTML = ""
    scorecounter += 1
    omg()
    if (document.getElementById("team2score").innerHTML == "team 2's score" && team2check == 0) {
        document.getElementById("team2score").innerHTML = "1"
        team2check += 1
        return
    }
    if (Number(document.getElementById("endonscore").value) > 0 && Number(document.getElementById("team2score").innerHTML) > Number(limit) && templimit == 0) {
        document.getElementById("team2score").innerHTML = (document.getElementById("endonscore").value - 1)
    }
    if (Number(document.getElementById("endonscore").value) == 0 && Number(document.getElementById("team2score").innerHTML) > defaultlimit) {
        document.getElementById("team2score").innerHTML = defaultlimit
    }

    document.getElementById("team2score").innerHTML = String(Number(document.getElementById("team2score").innerHTML) + 1)
    
    if (Number(document.getElementById("team2score").innerHTML) == document.getElementById("endonscore").value && templimit == 0) {
        console.log("team2 wins")
        scorecounter = 0 //reset score counter so no bugs
        document.getElementById("eventiguess").innerHTML = "team 2 wins"
    }

    if (document.getElementById("endonscore").value == 0 && Number(document.getElementById("team2score").innerHTML == defaultlimit + 1)) {
        console.log("team2 wins")
        scorecounter = 0 //reset score counter so no bugs
        document.getElementById("eventiguess").innerHTML = "team 2 wins"
    }

    if (document.getElementById("team1score").innerHTML.includes("t") == true) {
        document.getElementById("team1score").innerHTML = "0"
    }
    if (Number(document.getElementById("endonscore").value) == 0 && deuceenabled == true) {
        if (document.getElementById("team1score").innerHTML == "10" && document.getElementById("team2score").innerHTML == "10") {
            console.log("deuce")
            defaultlimit = 11 // that is 12 because yes
            noimeantdeuce = true
        }
    }


    if (defaultlimit == 11 && document.getElementById("team1score").innerHTML == "11") {
        String(Number(document.getElementById("team1score").innerHTML = defaultlimit - 1))
    }

    if (Number(document.getElementById("endonscore").value) !== 0 && deuceenabled == true) {
        if (document.getElementById("team1score").innerHTML == String(Number(document.getElementById("endonscore").value) - 1) && document.getElementById("team2score").innerHTML == String(Number(document.getElementById("endonscore").value) - 1)) {
            console.log("deuce")
            templimit = Number(document.getElementById("endonscore").value) + 1
            console.log(templimit)
        }
    }
    if (templimit !== 0 && deuceenabled == true) {
        if (Number(document.getElementById("team2score").innerHTML) == templimit) {
            console.log("team 2 wins")
            document.getElementById("eventiguess").innerHTML = "team 2 wins"
        }
        if (Number(document.getElementById("team1score").innerHTML) == templimit - 1) {
            String(Number(document.getElementById("team1score").innerHTML = templimit - 2)) 
        }
    }
}