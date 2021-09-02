function add(id,val,price)
{
    let inputFirst = document.getElementById(id).value;
    let inputFirstNumber = parseInt(inputFirst);
    let temp = inputFirstNumber;
    if(val==-1 && inputFirstNumber==0)return;
    inputFirstNumber += val;
    console.log(inputFirstNumber);
    document.getElementById(id).value = inputFirstNumber;

    let subtotal = document.getElementById("subtotal").innerText;
    let subtotalNumber = parseInt(subtotal);
    subtotalNumber = subtotalNumber - (temp*price);
    subtotalNumber = subtotalNumber + inputFirstNumber*price;
    document.getElementById("subtotal").innerText = subtotalNumber;

    let vat = subtotalNumber/10;
    vat = Math.ceil(vat);
    document.getElementById("vat").innerText = vat;

    let total = subtotalNumber + vat;
    document.getElementById("total").innerText = total;

}

function book()
{
    document.getElementById("mainArea").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
}