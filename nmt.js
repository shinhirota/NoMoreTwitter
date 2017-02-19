
$(function () {
  hide_tweets();

  setInterval(hide_tweets, 1000);
});

function hide_tweets() {
  $(".stream-container").css({
    display: "none"
  });

  var vals = $(".ProfileCardStats-statValue");
  var nFollower = vals[2];

  $(nFollower).text("0");
};
