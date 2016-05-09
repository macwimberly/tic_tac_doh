

$(function() {

    ion.sound({
        sounds: [
            {name: "intro",
          preload: true},
            {name: "whoo",
          preload: true},
            {name: "miracle2",
          preload: true},
            {name: "doh1",
          preload: true}
        ],

        path: "sounds/"
    });

    // ion.sound.play("intro");

    function intro() {
      ion.sound.play("intro");
      console.log("intro");

    };

    intro();

    $(".msg").hide();

    var ur = [null, null, null];
    var mr = [null, null, null];
    var lr = [null, null, null];
    var boardTotal = [];
    var player;
    var turn = 1;

    var enabled = {
        b1: true,
        b2: true,
        b3: true,
        b4: true,
        b5: true,
        b6: true,
        b7: true,
        b8: true,
        b9: true
    };


    function boardClear() {
        ur = [null, null, null];
        mr = [null, null, null];
        lr = [null, null, null];
        boardTotal = [];
        $("td").text(" ");
        enabled = {
            b1: true,
            b2: true,
            b3: true,
            b4: true,
            b5: true,
            b6: true,
            b7: true,
            b8: true,
            b9: true
        };

        turn = 1;
    }

    function playerSelector() {

        if (turn % 2 === 1) {
            player = "X";
        } else {
            player = "0";
        }

        turn++;
    }

    function getWinner() {

        boardTotal.push(ur[0] + ur[1] + ur[2]);
        boardTotal.push(mr[0] + mr[1] + mr[2]);
        boardTotal.push(lr[0] + lr[1] + lr[2]);
        boardTotal.push(ur[0] + mr[0] + lr[0]);
        boardTotal.push(ur[1] + mr[1] + lr[1]);
        boardTotal.push(ur[2] + mr[2] + lr[2]);
        boardTotal.push(ur[0] + mr[1] + lr[2]);
        boardTotal.push(ur[2] + mr[1] + lr[0]);

        if (boardTotal.indexOf(3) !== -1) {
            // $("#center").append("<img src='assets/doughnut.png' class='nut'>");
            ion.sound.play("whoo");
            $("h1").hide();
            $("#hWin").show();
            setTimeout(function() { $("#hWin").hide(); }, 2000);
            setTimeout(function() { $("#again").show(); }, 2001);
            setTimeout(function() { $("#again").hide(); }, 3100);
            setTimeout(function() { $("#title").show(); }, 3101);
            setTimeout(function() { boardClear(); }, 3300);

        } else if (boardTotal.indexOf(300) !== -1) {
            ion.sound.play("miracle2");
            $("h1").hide();
            $("#mWin").show();
            setTimeout(function() { $("#mWin").hide(); }, 2000);
            setTimeout(function() { $("#again").show(); }, 2001);
            setTimeout(function() { $("#again").hide(); }, 3100);
            setTimeout(function() { $("#title").show(); }, 3101);
            setTimeout(function() { boardClear(); }, 3200);

        } else if (turn > 9) {
            ion.sound.play("doh1");
            $("h1").hide();
            $("#tie").show();
            setTimeout(function() { $("#tie").hide(); }, 2000);
            setTimeout(function() { $("#again").show(); }, 2001);
            setTimeout(function() { $("#again").hide(); }, 3100);
            setTimeout(function() { $("#title").show(); }, 3101);
            setTimeout(function() { boardClear(); }, 3200);

        }
    }

    //Buttons

    $("#1").click(function() {

        if (enabled.b1 === true) {

            enabled.b1 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                ur.splice(0, 1, 1);
                getWinner();

            } else {
                $(this).text("M");
                ur.splice(0, 1, 100);
                getWinner();
            }
        } //true
    });

    $("#2").click(function() {

        if (enabled.b2 === true) {

            enabled.b2 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                ur.splice(1, 1, 1);
                getWinner();
            } else {
                $(this).text("M");
                ur.splice(1, 1, 100);
                getWinner();
            }
        } //true
    });


    $("#3").click(function() {

        if (enabled.b3 === true) {

            enabled.b3 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                ur.splice(2, 1, 1);
                getWinner();
            } else {
                $(this).text("M");
                ur.splice(2, 1, 100);
                getWinner();
            }
        } //true
    });

    $("#4").click(function() {

        if (enabled.b4 === true) {

            enabled.b4 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                mr.splice(0, 1, 1);
                getWinner();
            } else {
                $(this).text("M");
                mr.splice(0, 1, 100);
                getWinner();
            }
        } //true
    });

    $("#5").click(function() {

        if (enabled.b5 === true) {

            enabled.b5 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                mr.splice(1, 1, 1);
                getWinner();
            } else {
                $(this).text("M");
                mr.splice(1, 1, 100);
                getWinner();
            }
        } //true
    });

    $("#6").click(function() {

        if (enabled.b6 === true) {

            enabled.b6 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                mr.splice(2, 1, 1);
                getWinner();
            } else {
                $(this).text("M");
                mr.splice(2, 1, 100);
                getWinner();
            }
        } //true
    });

    $("#7").click(function() {

        if (enabled.b7 === true) {

            enabled.b7 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                lr.splice(0, 1, 1);
                getWinner();
            } else {
                $(this).text("M");
                lr.splice(0, 1, 100);
                getWinner();
            }
        } //true
    });

    $("#8").click(function() {

        if (enabled.b8 === true) {

            enabled.b8 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                lr.splice(1, 1, 1);
                getWinner();
            } else {
                $(this).text("M");
                lr.splice(1, 1, 100);
                getWinner();
            }
        } //true
    });

    $("#9").click(function() {

        if (enabled.b9 === true) {

            enabled.b9 = false;
            playerSelector();

            if (player === "X") {
                $(this).text("H");
                lr.splice(2, 1, 1);
                getWinner();
            } else {
                $(this).text("M");
                lr.splice(2, 1, 100);
                getWinner();
            }
        } //true
    });

});
