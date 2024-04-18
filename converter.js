document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertCoordinates);
  });
  
  function convertCoordinates() {
    const input = document.getElementById('input').value.trim();
    const outputDMS = document.getElementById('outputDMS');
    const outputDDM = document.getElementById('outputDDM');
    const outputDD = document.getElementById('outputDD');
  
    // Regular expressions for parsing coordinates
    const dmsPtrn = /(-?\d+)°\s*(\d+)′\s*(\d+(?:\.\d+)?)″\s*([NSEW])/gi;
    const ddmPtrn = /(-?\d+)°\s*(\d+(?:\.\d+)?)′\s*([NSEW])/gi;
    const ddPtrn = /(-?\d+(?:\.\d+)?)\s*([NSEW])/gi;
  
    let match;
    let lat, lon;
  
    while ((match = dmsPtrn.exec(input))) {
      const [, deg, min, sec, dir] = match;
      if (['N', 'S'].includes(dir)) {
        lat = { deg, min, sec, dir };
      } else if (['E', 'W'].includes(dir)) {
        lon = { deg, min, sec, dir };
      }
    }
  
    if (lat && lon) {
      const latDdm = `${lat.deg}° ${(+lat.min + +lat.sec / 60).toFixed(3)}′ ${lat.dir}`;
      const lonDdm = `${lon.deg}° ${(+lon.min + +lon.sec / 60).toFixed(3)}′ ${lon.dir}`;
      const latDd = `${(+lat.deg + +lat.min / 60 + +lat.sec / 3600).toFixed(6)}`;
      const lonDd = `${(+lon.deg + +lon.min / 60 + +lon.sec / 3600).toFixed(6)}`;
      outputDMS.textContent = input;
      outputDDM.textContent = `${latDdm} ${lonDdm}`;
      outputDD.textContent = `${lat.dir === 'S' ? '-' : ''}${latDd} ${lon.dir === 'W' ? '-' : ''}${lonDd}`;
    } else {
      while ((match = ddmPtrn.exec(input))) {
        const [, deg, min, dir] = match;
        if (['N', 'S'].includes(dir)) {
          lat = { deg, min, dir };
        } else if (['E', 'W'].includes(dir)) {
          lon = { deg, min, dir };
        }
      }
  
      if (lat && lon) {
        const [latIntMin, latDecMin] = lat.min.split('.');
        const [lonIntMin, lonDecMin] = lon.min.split('.');
        const latDms = `${lat.deg}° ${latIntMin}′ ${(+latDecMin * 0.6).toFixed(0)}″ ${lat.dir}`;
        const lonDms = `${lon.deg}° ${lonIntMin}′ ${(+lonDecMin * 0.6).toFixed(0)}″ ${lon.dir}`;
        const latDd = `${(+lat.deg + +lat.min / 60).toFixed(6)}`;
        const lonDd = `${(+lon.deg + +lon.min / 60).toFixed(6)}`;
        outputDMS.textContent = `${latDms} ${lonDms}`;
        outputDDM.textContent = input;
        outputDD.textContent = `${lat.dir === 'S' ? '-' : ''}${latDd} ${lon.dir === 'W' ? '-' : ''}${lonDd}`;
      } else {
        while ((match = ddPtrn.exec(input))) {
          const [, dd, dir] = match;
          if (['N', 'S'].includes(dir)) {
            lat = { dd, dir };
          } else if (['E', 'W'].includes(dir)) {
            lon = { dd, dir };
          }
        }
  
        if (lat && lon) {
          const latDeg = Math.floor(Math.abs(+lat.dd));
          const latMin = Math.floor((Math.abs(+lat.dd) - latDeg) * 60);
          const latSec = ((Math.abs(+lat.dd) - latDeg - latMin / 60) * 3600).toFixed(0);
          const lonDeg = Math.floor(Math.abs(+lon.dd));
          const lonMin = Math.floor((Math.abs(+lon.dd) - lonDeg) * 60);
          const lonSec = ((Math.abs(+lon.dd) - lonDeg - lonMin / 60) * 3600).toFixed(0);
          const latDms = `${latDeg}° ${latMin}′ ${latSec}″ ${lat.dir}`;
          const lonDms = `${lonDeg}° ${lonMin}′ ${lonSec}″ ${lon.dir}`;
          const latDdm = `${latDeg}° ${((Math.abs(+lat.dd) - latDeg) * 60).toFixed(3)}′ ${lat.dir}`;
          const lonDdm = `${lonDeg}° ${((Math.abs(+lon.dd) - lonDeg) * 60).toFixed(3)}′ ${lon.dir}`;
          outputDMS.textContent = `${latDms} ${lonDms}`;
          outputDDM.textContent = `${latDdm} ${lonDdm}`;
          outputDD.textContent = input;
        } else {
          outputDMS.textContent = 'Invalid coordinate format';
          outputDDM.textContent = 'Invalid coordinate format';
          outputDD.textContent = 'Invalid coordinate format';
        }
      }
    }
  }