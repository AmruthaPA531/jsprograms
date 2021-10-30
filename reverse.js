var num=123;
//reverse o/p as 321

while(num !=0)//123!=0(true)
{
let digit=num%10; //digit=123%10=3
console.log(digit);//3
num=Math.floor(num/10);//num=Math.floor(12)
}


//var name="hello"
//var count=name.length-1
//while(count>=0)
//{
  //  console.log(name[count]);
   // count--
//}