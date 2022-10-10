function sockMerchant(n, ar) {
    // Write your code here
    console.log(ar);
    let pairs = 0;
    const mapItems = {};
    for(const item of ar){
        if(mapItems[item] != undefined){
            mapItems[item] += 1;
            if(mapItems[item] == 2){
                mapItems[item] = 0;
                pairs ++;
            }

        }else{
            mapItems[item] = 1;
        }
    }
    return pairs;

}