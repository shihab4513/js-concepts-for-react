

localStorage.setItem('userId', 11221017);

const addToLocalStorage = () => {
    const storageID = document.getElementById('storage-id');
    const storageValue = document.getElementById('storage-value');
    const id = storageID.value;
    const value = storageValue.value;

    // 
    // If there is not anything in the input field then it wont set the item in local storage
    (id && value) ? localStorage.setItem(id, value) : '';

    storageID.value = '';
    storageValue.value = '';

}

// To set array in local storage
localStorage.setItem('array', JSON.stringify([25, 45, 89, 74, 52, 36]));

// To set object in local storage

const pen = { 'name': 'matador', 'price': 2 };
localStorage.setItem('pen', JSON.stringify(pen));
