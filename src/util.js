export const sortData=(data)=>{
    const sortedData=[...data];
    sortData.sort((a,b)=>{
        if(a.cases>b.cases){
            return -1;
        }
        else{
            return 1;
        }
    })
    return sortedData;
}