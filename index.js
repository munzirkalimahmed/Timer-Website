setInterval(() => {
    const dt = new Date();

    const time = dt.toLocaleString('en-IN', { timeZone: 'Asia/Karachi' });
    document.getElementById('time').innerHTML = time;

    const time1 = dt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    document.getElementById('time1').innerHTML = time1;

    const time2 = dt.toLocaleString('en-US', { timeZone: 'America/New_York' });
    document.getElementById('time2').innerHTML = time2;

    const time3 = dt.toLocaleString('en-IN', { timeZone: 'Asia/Shanghai' });
    document.getElementById('time3').innerHTML = time3;

    const time4 = dt.toLocaleString('en-IN', { timeZone: 'Asia/Tokyo' });
    document.getElementById('time4').innerHTML = time4;
  }, 1000);


  let a;
  let date;
  let time;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    const dt = new Date();
    if (document.getElementById('time5')) {
        const time5 = dt.toLocaleString('en-IN', { timeZone: 'America/New_York' });
        document.getElementById('time5').innerHTML = time5;
    }
    else if (document.getElementById('time6')) {
        const time6 = dt.toLocaleString('en-IN', { timeZone: 'Asia/Shanghai' });
        document.getElementById('time6').innerHTML = time6;
    }
    else if (document.getElementById('time7')) {
        const time7 = dt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
            document.getElementById('time7').innerHTML = time7;
    }
    else if (document.getElementById('time8')) {
        const time8 = dt.toLocaleString('en-IN', { timeZone: 'Asia/Tokyo' });
            document.getElementById('time8').innerHTML = time8;
    }
    else if (document.getElementById('time9')) {
        a = new Date();
                let date = a.toLocaleDateString(undefined, options);
                let h = a.getHours();
                let m = a.getMinutes();
                let s = a.getSeconds();
                let session = "AM";
                if (h > 11) {
                    session = "PM";
                }
                m = checkTime(m);
                s = checkTime(s);
                let time = h + ':' + m + ':' + s + " " + session;
                document.getElementById('time9').innerHTML = time + "<br>" + date;
    }
    else{
        return 0;
    }

}, 1000);

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}



