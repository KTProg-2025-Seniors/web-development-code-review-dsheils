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