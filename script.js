function iceTime(){
    let options = {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      },
      formatter = new Intl.DateTimeFormat([], options);
     document.getElementById("icetime").innerHTML = formatter.format(new Date());
}
function ausTime(){
    let options = {
        timeZone: 'Australia/Sydney',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      },
      formatter = new Intl.DateTimeFormat([], options);
      
      document.getElementById("austime").innerHTML = formatter.format(new Date());
}
function sinTime(){
    let options = {
        timeZone: 'Asia/Singapore',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      },
      formatter = new Intl.DateTimeFormat([], options);
      
      document.getElementById("sintime").innerHTML = formatter.format(new Date());
}

function convert(currency){
  var usd = document.getElementById("USD")
  console.log(currency);
  if(currency == 'singapore'){
    document.getElementById("SGD").value = usd.value * 1.3;
  }
  else if(currency == "australia"){
    console.log("aus sent");
    document.getElementById("aud").value = usd.value * 1.49;
  }
  else if(currency == 'iceland'){
    document.getElementById("isk").value = usd.value * 137.5;
  }
}