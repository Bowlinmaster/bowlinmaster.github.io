console.log("Hello world!");

var games = [];

function calculateGameScore(theGame) {

    if (theGame.length !== 10) {
        //We have an invalid game
        throw "Invalid game.  Does not contain 10 frames";
    }

    var totalScore = 0;
 
    //Loop through 10 frames

    [...Array(10)].forEach((e, i) => {
        //TODO: DO we really care if the frame is complete?
        //Basically if they go back to edit a frame...
        /*if(theGame[i].frame_complete === false){
            totalScore += 0;
            return;
        }*/
 
        //There's two types of frames we need to calculate based on... If we are in the 10th, or a standard frame
        if (theGame[i].frame_type === 1) {
            //In the 10th frame, add all 3 balls
            totalScore += theGame[i].ball_1.pins_downed + theGame[i].ball_2.pins_downed + theGame[i].ball_3.pins_downed;
        }
        else {
            //Then we have a standard frame score...
            //First... add the first ball score
            totalScore += theGame[i].ball_1.pins_downed;
 
            //If this was a strike... also add the next two balls
            if (theGame[i].ball_1.pins_downed === 10) {
                //Go to the next frame and try to get it's score...
                if (theGame[i + 1].frame_type === 1) {
                    //If it's a 10th frame, just take the first and second ball
                    totalScore += theGame[i + 1].ball_1.pins_downed + theGame[i + 1].ball_2.pins_downed;
                }
                else {
                    //If it's a standard frame. Take the first ball, then make a decision on how to get the 2nd shot.
                    totalScore += theGame[i + 1].ball_1.pins_downed;
 
                    //If the next frame was also a strike... go to the 2nd next one and get it's first ball
                    if (theGame[i + 1].ball_1.pins_downed === 10) {
                        totalScore += theGame[i + 2].ball_1.pins_downed
                    }
                    else {
                        totalScore += theGame[i + 1].ball_2.pins_downed;
                    }
                }
            }
            // Else if this was a spare, add the 2nd ball and the first ball of the next frame
            else if ((theGame[i].ball_1.pins_downed !== 10) && (theGame[i].ball_1.pins_downed + theGame[i].ball_2.pins_downed === 10)) {
                //We have a spare... Add the 2nd ball and the first ball of the next frame
                totalScore += theGame[i].ball_2.pins_downed + theGame[i + 1].ball_1.pins_downed;
 
            }
            //Else if if was a open, just add the 2nd ball
            else {
                totalScore += theGame[i].ball_2.pins_downed;
            }
        }
    });
 
    return totalScore;
}

var game = {
    game_id: 0, /* This will really be epoch time */
    frames: [
        {
            frame_no: 1,
            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */
            frame_complete: true,
            ball_1: {
                pin_state: 26, /* Binary representation of pins 0000011010.  1 = Pin standing, 0 = Pin down */
                pins_downed: 7
            },
            ball_2: {
                pin_state: 0,
                pins_downed: 3
            }
        },
        {
            frame_no: 2,
            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */
            frame_complete: true,
            ball_1: {
                pin_state: 154,
                pins_downed: 6
            },
            ball_2: {
                pin_state: 154,
                pins_downed: 0
            }
        },
        {
            frame_no: 3,
            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */
            frame_complete: true,
            ball_1: {
                pin_state: 0,
                pins_downed: 10

            },

            ball_2: {

                pin_state: null,

                pins_downed: null

            }

        },

        {

            frame_no: 4,

            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */

            frame_complete: true,

            ball_1: {

                pin_state: 0,

                pins_downed: 10

            },

            ball_2: {

                pin_state: null,

                pins_downed: null

            }

        },

        {

            frame_no: 5,

            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */

            frame_complete: true,

            ball_1: {

                pin_state: 0,

                pins_downed: 10

            },

            ball_2: {

                pin_state: null,

                pins_downed: null

            }

        },

        {

            frame_no: 6,

            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */

            frame_complete: true,

            ball_1: {

                pin_state: 0,

                pins_downed: 10

            },

            ball_2: {

                pin_state: null,

                pins_downed: null

            }

        },

        {

            frame_no: 7,

            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */

            frame_complete: true,

            ball_1: {

                pin_state: 0,

                pins_downed: 10

            },

            ball_2: {

                pin_state: null,

                pins_downed: null

            }

        },

        {

            frame_no: 8,

            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */

            frame_complete: true,

            ball_1: {

                pin_state: 0,

                pins_downed: 10

            },

            ball_2: {

                pin_state: null,

                pins_downed: null

            }

        },

        {

            frame_no: 9,

            frame_type: 0, /* type 0 = standard frame, type 1 = 10th frame */

            frame_complete: true,

            ball_1: {

                pin_state: 0,

                pins_downed: 10

            },

            ball_2: {

                pin_state: null,

                pins_downed: null

            }

        },

        {

            frame_no: 10,

            frame_type: 1, /* type 0 = standard frame, type 1 = 10th frame */

            frame_complete: true,

            ball_1: {

                pin_state: 26,

                pins_downed: 7

            },

            ball_2: {

                pin_state: 0b0000001000, /* Decimal 8 */

                pins_downed: 2

            },

            ball_3: {

                pin_state: null,

                pins_downed: null

            }

        },

    ]

};

 

games.push(game);

 

for(var game_index in games){

    console.log(games[game_index])

    var p = calculateGameScore(games[game_index].frames);

    console.log(p);

}

 

$(document).ready(function (){

    $(".pin-7").on("click", function(){

        console.log("I clicked the 7th pin");

    });

 

    $(".pin-wrapper").on("click", function(){

        console.log($(this).attr("class"));

    });

 

    function iClickedIt(i){

        console.log("I clicked" + i);

    }

});