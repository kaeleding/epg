var initialJson;
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

let primaryId = 780;
let dataArray = [];

$(function() {
  // document ready

  do {
    let apiUrl = `http://13.229.131.242/api/Advertisments/data/${primaryId}`;

    fetch(apiUrl, { mode: "cors" })
      .then(res => res.json())
      .then(data => (initialJson = data))
      .then(() => {
        initialJson = JSON.parse(
          JSON.stringify(initialJson)
            .split('"advertismentZone":')
            .join('"resourceId":')
        );
        initialJson = JSON.parse(
          JSON.stringify(initialJson)
            .split('"startDate":')
            .join('"start":')
        );
        initialJson = JSON.parse(
          JSON.stringify(initialJson)
            .split('"endDate":')
            .join('"end":')
        );
        // while (!(initialJson.length === 0)) {
        //   dataArray = JSON.stringify(initialJson);
        //   primaryId++;
        //   break;
        // }
        console.log(initialJson);
        primaryId++;
        // console.log(JSON.stringify(initialJson));
        // console.log(initialJson.length);
        // dataArray = JSON.stringify(initialJson);

        // console.log(dataArray);
      });
  } while (!initialJson.length === 0);
  // let apiUrl = `http://13.229.131.242/api/Advertisments/data/${primaryId}`;

  // fetch(apiUrl, { mode: "cors" })
  //   .then(res => res.json())
  //   .then(data => (initialJson = data))
  //   .then(() => {
  //     initialJson = JSON.parse(
  //       JSON.stringify(initialJson)
  //         .split('"advertismentZone":')
  //         .join('"resourceId":')
  //     );
  //     initialJson = JSON.parse(
  //       JSON.stringify(initialJson)
  //         .split('"startDate":')
  //         .join('"start":')
  //     );
  //     initialJson = JSON.parse(
  //       JSON.stringify(initialJson)
  //         .split('"endDate":')
  //         .join('"end":')
  //     );
  //     // while (!(initialJson.length === 0)) {
  //     //   dataArray = JSON.stringify(initialJson);
  //     //   primaryId++;
  //     //   break;
  //     // }
  //     console.log(dataArray);
  //     // console.log(JSON.stringify(initialJson));
  //     // console.log(initialJson.length);
  //     // dataArray = JSON.stringify(initialJson);

  //     // console.log(dataArray);
  //   });

  $("#calendar").fullCalendar({
    //defaultView: 'agendaDay',
    themeSystem: "bootstrap4",
    //defaultDate: "2018-10-07",
    navLinks: true,
    editable: true,
    forceEventDuration: true,
    //selectable: true,
    eventLimit: true, // allow "more" link when too many events
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaDay"
    },

    //uncomment this line to hide the all-day slot
    //allDaySlot: false,

    resources: [
      //{ id: "bootup", title: "Boot-Up Screen", eventColor: "green" },
      { id: "Bootup Screen", title: "Boot-Up Screen", eventColor: "green" },
      { id: "chlist", title: "Channel List", eventColor: "green" },
      { id: "chbar", title: "Channel Bar", eventColor: "green" },
      { id: "volbar", title: "Volume Bar", eventColor: "green" },
      { id: "epgbar", title: "EPG Bar", eventColor: "green" }
    ],

    events: "https://api.myjson.com/bins/ucbv8",
    // events: [
    //   //replace this with .JSON files
    //   // (X) "id":2,
    //   // (resourceId) "advertismentZone":"Bootup Screen",
    //   // (start)"startDate":"2018-09-28T00:00:00",
    //   // (end)"endDate":"2018-09-28T00:00:00",
    //   // (????)"extractedData":null
    //   {
    //     id: "1",
    //     resourceId: "bootup",
    //     start: "2018-10-06",
    //     end: "2018-10-07",
    //     title: "event 1"
    //   },
    //   {
    //     id: "2",
    //     resourceId: "bootup",
    //     start: "2018-10-07T09:00:00",
    //     end: "2018-04-07T14:00:00",
    //     title: "VIVO"
    //   },
    //   {
    //     id: "3",
    //     resourceId: "chlist",
    //     start: "2018-10-07T12:00:00",
    //     end: "2018-04-08T06:00:00",
    //     title: "SOME PRODUCT 1"
    //   },
    //   {
    //     id: "4",
    //     resourceId: "chbar",
    //     start: "2018-10-07T07:30:00",
    //     end: "2018-04-07T09:30:00",
    //     title: "event 4"
    //   },
    //   {
    //     id: "5",
    //     resourceId: "volbar",
    //     start: "2018-10-07T10:00:00",
    //     end: "2018-04-07T15:00:00",
    //     title: "event 5"
    //   },
    //   {
    //     id: "6",
    //     resourceId: "epgbar",
    //     start: "2018-10-03T02:00:00",
    //     end: "2018-10-03T05:00:00",
    //     title: "VIVO AGAIN"
    //   },
    //   {
    //     id: "7",
    //     resourceId: "epgbar",
    //     start: "2018-10-03T02:00:00",
    //     end: "2018-10-03T04:00:00",
    //     title: "MCDONALDS"
    //   },
    //   {
    //     id: "8",
    //     resourceId: "epgbar",
    //     start: "2018-10-03T02:00:00",
    //     end: "2018-10-03T04:00:00",
    //     title: "JOLLIBEE"
    //   }
    // ],

    select: function(start, end, jsEvent, view, resource) {
      console.log(
        "select",
        start.format(),
        end.format(),
        resource ? resource.id : "(no resource)"
      );
    },
    dayClick: function(date, jsEvent, view, resource) {
      console.log(
        "dayClick",
        date.format(),
        resource ? resource.id : "(no resource)"
      );
    },

    eventClick: function(calEvent, jsEvent, view) {
      console.log(
        `${calEvent.resourceId} ${calEvent.title} ${calEvent.start} ${
          calEvent.end
        }`
      );

      $("#dateModal").show(function() {
        $("#modal-zone")
          .text("Zone: " + calEvent.resourceId)
          .css({ color: "red", "font-size": "50px" });
        $("#modal-title").text(calEvent.title);
        $("#modal-start")
          .text("Start: " + calEvent.start.format("MMMM Do YYYY, h:mm:ss a"))
          .css({ color: "blue", "font-size": "50px" });
        $("#modal-end")
          .text("End: " + calEvent.end.format("MMMM Do YYYY, h:mm:ss a"))
          .css({ color: "green", "font-size": "50px" });
      });

      $(".close").on("click", function() {
        $("#dateModal").hide();
      });

      //if you click on anything except the modal itself or the "open modal" link, close the modal
      $(document).click(function(e) {
        if ($(e.target).is("#dateModal")) {
          $("#dateModal").fadeOut(100);
        }
      });

      //console.log(calEvent);
    },

    schedulerLicenseKey: "GPL-My-Project-Is-Open-Source"
  });

  // $("#calendar").on("click", "a.fc-event", () => {
  //   console.log();
  // });
  // $("#calendar").on("click", "a.fc-event", () => {});
});

// $(document).click(function(event) {
//   var text = $(event.target).text();
//   console.log(text);
// });
