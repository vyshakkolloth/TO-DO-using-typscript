

 function df(nums)
{
    let  output =[]
    for(let num of nums ){
        num =Math.abs(num)
        if(nums[num-1]<0){
            output.push(num)
            console.log(num,"-----")
            console.log(nums)

        }else
        {
          nums[num-1] *=-1  
        }   }
        for(let i=0;i<nums.length;i++){
            if(nums[i]>0){
                output.push(i+1)
                console.log(nums,'666')
                return output
 
            }
        
 
        }}


        let  a=[1,2,3,4,4,6]

        console.log(df(a))