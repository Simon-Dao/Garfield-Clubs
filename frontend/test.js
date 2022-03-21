const testFunc = async () => {
    
    let message = await axios.get('http://localhost:8080/')
    
    console.log(message)
}

async function editName() {
    
}

testFunc()