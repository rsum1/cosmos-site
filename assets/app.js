    //================================
    //Fetch Current Block Height
    //================================
    fetch('https://sgapiv2.certus.one/v1/status')
      .then(response => response.json())
      .then(data => {
        document.getElementById('chainData').innerHTML = ''
        let dataElem = document.createElement('div')
        dataElem.className = 'collection'
        dataElem.innerHTML = `
      <a href="#!" class="collection-item"><span class="badge">${data.current.height.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>Current Block Height</a>
      <a href="#!" class="collection-item"><span class="badge">${(parseInt(data.current.blockTime)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}s</span>Block Time</a>
      <a href="#!" class="collection-item">Alan</a>
      <a href="#!" class="collection-item"><span class="badge">14</span>Alan</a>
      `
        console.log(data)
        document.getElementById('chainData').append(dataElem)
      })
      .then()
      .catch(error => {
        console.log(error)
      })