function copyIp() {
    let copyText = "play.domainstrat.tk"

    // Copy the server ip
    //navigator.clipboard.writeText(copyText);
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
    console.log("Copycat")

    // Alert the copied text
    alert("Copied ip: " + copyText);
}