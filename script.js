const myScreenOutput = document.getElementById('result');
const myInfo = {
    myFirstName: 'Sodiq',
    myMiddleName: 'Abubakar',
    myLasttName: 'Sodiq',
    myHeight: 7.2,
    myCountry:'Nigeria',
}

myScreenOutput.innerHTML = '<h2>'+ 'First Name: ' + myInfo.myFirstName + '<br> '  +'Middle Name: ' + myInfo.myMiddleName + ' <br>'  +' Last Name: ' + myInfo.myLasttName + '<br> ' + 'Height: ' + myInfo.myHeight + '<br> '  +'Country: '+ myInfo.myCountry+ '</h2>';


console.log(myInfo);
