function verify() {

  const recipient = document.getElementById("recipient").value;
  const mail = document.getElementById("mail").value;
  const tnumber = document.getElementById("tfamily").value;

              if (tnumber == 1) {
                  alert("The price for the room is 4500 shillings");
                }
              else if (tnumber == 2) {
                alert("The price for the room is 5500 shillings");
              }
              else if (tnumber == 3) {
                alert("The price for the room is 6500 shillings");
              }
              else if (tnumber == 4) {
                alert("The price for the room is 7500 shillings");
              }
              else if (tnumber == 5) {
                alert("The price for the room is 8500 shillings");
              }
              else if (tnumber == 0) {
                alert("Please enter a valid room number");
              }
              else {
                alert ("The room is too full. We are truly sorry ");
              }

}

/* This part is the button for the about page */

function aboutVideo() {
  document.location.href = "https://www.youtube.com/watch?v=RbikwV0HbZs";
}

function aboutTeam() {
  document.location.href = "https://www.youtube.com/watch?v=xXw7wOuABUg";
}
/* This part is the button for the about page */

/* This part is the button for the spa page */
function spaButton() {
  document.location.href = "https://www.youtube.com/watch?v=_z2lRod935M";
}
/* This part is the button for the spa page */

/* This part is the button for the dining  page */
function diningButton() {
  document.location.href = "https://www.youtube.com/watch?v=53nwh1aHCU8";
}
/* This part is the button for the dining page */

/* This part is the button for the accomodation page */
function accomodationButton() {
  document.location.href = "https://www.youtube.com/watch?v=ZXFs651OckE";
}
/* This part is the button for the accomodation page */

/* This part is the button for the conference  page */
function conferenceButton() {
  document.location.href = "https://www.youtube.com/watch?v=07a9uSPwxSg";
}
/* This part is the button for the conference  page */
