let login = (username, password) => {
    if(username !== 'admin' || password !== 'radical'){
        console.log('Incorrect login');
    }
};

login('admin', 'idunno');