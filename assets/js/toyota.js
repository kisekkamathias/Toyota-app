function validateData(){
    //validating data

    //statement if customer ID is missing
    var customerId = document.getElementById("customer-id");
    if (customerId.value == ""){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Customer ID shouldn't be missing");
        document.getElementById("customer-id").autofocus() = true;
        return false;
    }
 
    //statement if customer name is missing
    var customerName = document.getElementById("customer-name");
    if (customerName.value == ""){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Please fill in the customer Name");
        document.getElementById("customer-name").focus() = true;
        return false;
    }

    //return stetment if state code is missing or if it exceeds 3 letters
    var state = document.getElementById("customer-state").value;
    //if state code is missing
    if (state == ""){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("State can't be missing");
        return false;
    }
    //if stae code exceeds 3 letters
    else if (state.length > 3){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Please check if state Code is correctly written");
        return false;
    }
    else if (state.length < 3){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Please check if state Code is correctly written");
        return false;
    }
     

    //return statement if part number is missing
    var partNumber = document.getElementById("part-no");
    if (partNumber.value == ""){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Part Number can't be missing");
        return false;
    }
 
    //return statement if part description is missing
    var Description = document.getElementById("description");
    if (Description.value == "" ){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Description can't be missing");
        return false;
    }
 
    //return statement when price is missing and if it is less than or equal to 0
    var Price = document.getElementById("price");
    //if price is missing
    if (Price.value == ""){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Price can't be missing");
        return false;
    }
    //if price is less than or equal to 0
    else if (Price.value <= 0){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Price must be a number greater than 0");
        return false;
    }
 
    //return statement when quantity is missing and if it is less than or equal to 0
    //if quantity is missing
    var Quantity = document.getElementById("quantity");
    if (Quantity.value == ""){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Quantity can't be missing");
        return false;
    }
    //if quantity is less than or equal to 0
    else if (Quantity.value <= 0){
        document.getElementById("alert-box").style.display = "block";
        document.getElementById("alert").innerHTML=("Quantity must be a number greater than 0");
        return false;
    }
    //validatingData end




    var cost;
    var tax;
    function salesTax(){
        // calculating cost
        cost= (Price.value * Quantity.value);
        document.getElementById("cost").innerHTML ="$ " + cost;

        //Sales tax for retail and non retail customers from defferent states
        var kla = (cost * (0.1));
        var ebb = (cost * (0.05));
        var mbr = (cost * (0.05));
        var  otherRetailCustomers = (cost * 0);
        var  notRetailCustomer = (cost * 0);
        var retailCustomer = document.getElementById("retail-customer");
        //tax charge to retail customers from defferent states
        switch(retailCustomer.checked){
            case true:
                switch (state){
                    case "KLA": 
                    case "kla":
                       tax = kla;
                       document.getElementById("tax").innerHTML = "$ " + tax;
                    break
                    case "EBB": 
                    case "ebb":
                       tax = ebb;
                       document.getElementById("tax").innerHTML = "$ " + tax;
                    break
                    case "MBR": 
                    case "mbr":
                       tax = mbr
                       document.getElementById("tax").innerHTML = "$ " + tax;
                    break
                    default:
                       tax = otherRetailCustomers;
                       document.getElementById("tax").innerHTML = "$ " + tax;
                }
            break
        
            //tax charge to non retail customers from defferent states
            case false:
                tax = notRetailCustomer;
                document.getElementById("tax").innerHTML = "$ " + tax;
        }
    }
    salesTax()
 




    //Calculating charges on shipping and handling when container is oversize and when its not oversize 
    var shipping;
    function shippingAndHandeling(){
        var overSizeContainer = document.getElementById("oversize-container");
        var oversize;
        switch (overSizeContainer.checked){
            //when container is oversize
            case true:
                oversize = (5.00 * Quantity.value)
            break
            //when container is oversize
            case false:
                oversize = (0 * Quantity.value)
        }

        //results for shipping using defferent shipping methods
        var ups, feg, upa, fea;
        ups = document.getElementById("UPS");
        feg = document.getElementById("FEG");
        upa = document.getElementById("UPA");
        fea = document.getElementById("FEA");

        //Shipping for United Parsel service
        if (ups.checked === true){
            shipping =  ((7.00 * Quantity.value) + oversize)
            document.getElementById("shipping").innerHTML ="$ " + shipping;
        
        }
        //Shipping for Fed Ex Ground
        else if (feg.checked === true){
            shipping = ((9.25 * Quantity.value) + oversize);
            document.getElementById("shipping").innerHTML ="$ " + shipping;
        
        }
        //Shipping for U>S> Pistal Air
        else if (upa.checked === true){
            shipping = ((8.50 * Quantity.value) + oversize);
            document.getElementById("shipping").innerHTML ="$ " +shipping;
        
        }
        //Shipping for Fed EX Air
        else if (fea.checked === true){
            shipping = ((12.00 * Quantity.value) + oversize);
            document.getElementById("shipping").innerHTML ="$ " + shipping;
        
        }
    }
    shippingAndHandeling()


    //Computing total amount of money for a customer
    function total(){
        var total = (cost + tax + shipping);
        document.getElementById("total").innerHTML = "$ " + total;
    }
    total()    
}
 
//Alert ok button onClick
function removeAlert(){
    var alert = document.getElementById("alert-box");
    alert.style.display="none";
}

//Exit data buttons display
function exitProgramOptn(){
    var exit = document.getElementById("exit");
    exit.style.display="block";
}


//Don't exit
function exitNo(){
    var exitNo = document.getElementById("exit");
    exitNo.style.display="none";
}