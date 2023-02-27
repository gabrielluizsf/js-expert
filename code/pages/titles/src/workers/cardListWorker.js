onmessage = ({ data }) =>{
    console.log(data)
    postMessage(
        {response: 'ok'}
    )
}