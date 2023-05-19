const arr=[2,7,'mouse',0,33,'',null,'sun'];

for (i=0;i<arr.length;i++)
  {
     console.log(Элемент: ${i}, значение: ${arr[i]}, тип данных:${typeof(arr[i])});

    if(isNaN(arr[i])==false && arr[i]!=0 && arr[i]!=null)
      {
        if(arr[i]%2==0)
           {
             console.log('Значение четное');
           }
        else
           {
             console.log('Значение нечетное');
           }
        }
    else if(arr[i]===0)
      {
        console.log('Нулевой элемент');
      }
    else if(typeof (arr[i])==="string" || arr[i]===null)
      {
        console.log('Прочее');
      }
  }
