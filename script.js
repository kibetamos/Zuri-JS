const myScreenOutput = document.getElementById('result');
const myInfo = {
    myFirstName: 'Amos',
    myMiddleName: 'kibet',
    myLasttName: 'None',
    myHeight: 5.8,
    myCountry: 'Kenya',
}

myScreenOutput.innerHTML = '<h2>'+ 'First Name: ' + myInfo.myFirstName + '<br> '  +'Middle Name: ' + myInfo.myMiddleName + ' <br>'  +' Last Name: ' + myInfo.myLasttName + '<br> ' + 'Height: ' + myInfo.myHeight + '<br> '  +'Country: '+ myInfo.myCountry+ '</h2>';


console.log(myInfo);